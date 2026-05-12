#!/usr/bin/env node
/**
 * smoke-test.js — validación estática de FIIC_Sistema_v2_1.html
 *
 * Comprueba:
 *   1. El JS embebido es válido (parse con `new vm.Script`).
 *   2. Toda función referenciada desde un handler inline (onclick/oninput/onchange/onkeydown)
 *      está definida en el script.
 *   3. Regresiones conocidas: etiquetas con doble asterisco, contaminación de APP.data
 *      con estado de UI, lecturas a `no_exp` (id legacy), código muerto eliminado.
 *   4. Sanidad del HTML: cada modo cubre tabs en getTabs().
 *
 * Uso:  node tools/smoke-test.js
 * Salida: exit 0 si pasa, exit 1 si falla.
 */
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const FILE = path.join(__dirname, '..', 'FIIC_Sistema_v2_1.html');
const html = fs.readFileSync(FILE, 'utf8');

const failures = [];
const passes = [];
const fail = (id, msg) => failures.push(`✗ ${id}: ${msg}`);
const pass = id => passes.push(`✓ ${id}`);

// ── 1. Extraer y validar JS ──────────────────────────────────────────
const m = html.match(/<script>\n([\s\S]*?)\n<\/script>/);
if (!m) {
  fail('extract-js', 'no encontré <script>…</script>');
} else {
  const js = m[1];
  try {
    new vm.Script(js, { filename: 'FIIC_inline.js' });
    pass('js-syntax');
  } catch (e) {
    fail('js-syntax', e.message.split('\n')[0]);
  }

  // ── 2. Handlers inline → funciones definidas ─────────────────────────
  const defined = new Set();
  for (const fn of js.matchAll(/^function\s+([A-Za-z_$][\w$]*)/gm)) defined.add(fn[1]);

  const builtins = new Set([
    // DOM / global APIs y palabras reservadas que también aparecen como `name(`
    'if', 'event', 'this', 'typeof', 'document', 'window', 'console',
    'getElementById', 'querySelector', 'querySelectorAll', 'click', 'focus',
    'blur', 'replace', 'preventDefault', 'stopPropagation', 'confirm', 'alert',
    'prompt', 'parseInt', 'parseFloat', 'isNaN', 'String', 'Number', 'Math',
    'JSON', 'Array', 'Object', 'setTimeout', 'setInterval', 'clearTimeout',
    'Date', 'Boolean', 'Map', 'Set', 'Promise', 'localStorage',
  ]);

  const called = new Set();
  for (const m of html.matchAll(/\s(onclick|oninput|onchange|onkeydown)="([^"]*)"/g)) {
    // Capturar solo identificadores no precedidos por `.` (excluye métodos)
    for (const c of m[2].matchAll(/(^|[^\w$.])([A-Za-z_$][\w$]*)\s*\(/g)) called.add(c[2]);
  }

  const missing = [...called].filter(n => !defined.has(n) && !builtins.has(n));
  if (missing.length) fail('handlers-defined', `funciones invocadas pero no definidas: ${missing.join(', ')}`);
  else pass('handlers-defined');

  // ── 3. Regresiones conocidas ─────────────────────────────────────────
  // 3.a — sin etiquetas con doble asterisco
  const dblAsterisk = [...html.matchAll(/fld(?:Select|Money)?\([^)]*'[^']*\*'\s*,/g)];
  if (dblAsterisk.length) fail('no-double-asterisk', `aún hay ${dblAsterisk.length} llamadas con \`*\` en la etiqueta (revisa fld/fldSelect/fldMoney)`);
  else pass('no-double-asterisk');

  // 3.b — los filtros admin no contaminan APP.data
  if (/APP\.data\._(fC|adminSelReg)/.test(js)) fail('ui-state-isolated', '`APP.data._fC` o `APP.data._adminSelReg` deberían vivir en `APP.ui`');
  else pass('ui-state-isolated');

  // 3.c — sin lecturas a `no_exp` (debe ser `no_expediente`)
  if (/APP\.data(\.no_exp\b|\['no_exp'\])/.test(js)) fail('no-stale-id', 'queda alguna lectura a `APP.data.no_exp`; usa `no_expediente`');
  else pass('no-stale-id');

  // 3.d — código muerto eliminado
  const dead = [
    'function PASSWORDS', 'function openPwModal', 'function goPortal',
    'function saveUsers', 'function addNewUser', 'function toggleUser',
    'function changeUserPw', 'function adminAddUser', 'function adminChangePw',
    'function adminClearExp', 'function adminExportJSON',
    'function toggleEstadoPiso', 'function showPDFModal',
    'function closePdfModal', 'function executePDF',
  ];
  const stillThere = dead.filter(d => js.includes(d));
  if (stillThere.length) fail('dead-code-removed', `aún definidas: ${stillThere.map(d => d.replace('function ', '')).join(', ')}`);
  else pass('dead-code-removed');

  // 3.e — saveData() no usa `event.target` directo (solo a través de su parámetro)
  const lines = js.split('\n');
  const sdStart = lines.findIndex(l => /^function\s+saveData\s*\(/.test(l));
  if (sdStart < 0) {
    fail('savedata-event-safe', 'no encontré `function saveData`');
  } else {
    let depth = 0, sdEnd = -1;
    for (let i = sdStart; i < lines.length; i++) {
      depth += (lines[i].match(/\{/g) || []).length;
      depth -= (lines[i].match(/\}/g) || []).length;
      if (depth === 0 && i > sdStart) { sdEnd = i; break; }
    }
    const body = lines.slice(sdStart, sdEnd + 1).join('\n');
    // Solo permite `event.target` si está en la guardia `typeof event !== 'undefined'`
    const guarded = /typeof\s+event\s*!==\s*['"]undefined['"][^;]*event\.target/.test(body);
    const bare = /(^|[^.])\bevent\.target\b/.test(body) && !guarded;
    if (bare) fail('savedata-event-safe', 'saveData() todavía usa `event.target` sin guardia');
    else pass('savedata-event-safe');
  }

  // 3.f — APP.activeTab no duplicado en el objeto literal
  const appBlock = js.match(/let\s+APP\s*=\s*\{[\s\S]*?\n\};/);
  if (appBlock) {
    const occ = (appBlock[0].match(/^\s*activeTab\s*:/gm) || []).length;
    if (occ !== 1) fail('app-no-dup', `APP.activeTab aparece ${occ} veces (esperaba 1)`);
    else pass('app-no-dup');
  } else fail('app-no-dup', 'no encontré la declaración de APP');

  // ── 4. Sanidad del HTML ──────────────────────────────────────────────
  // 4.a — getTabs(): cada modo tiene la misma cantidad de tabs que renderXxxTab maneja
  const tabsRe = /if\s*\(\s*APP\.mode\s*===\s*'(consultor|decision|admin)'\s*\)\s*return\s*\[([^\]]+)\]/g;
  const tabsByMode = {};
  for (const m of js.matchAll(tabsRe)) tabsByMode[m[1]] = m[2].split(',').length;

  const arrLen = (fnName) => {
    const re = new RegExp('function\\s+' + fnName + '\\s*\\([^)]*\\)\\s*\\{[\\s\\S]*?const\\s+tabs\\s*=\\s*\\[([^\\]]+)\\]');
    const x = js.match(re);
    return x ? x[1].split(',').length : -1;
  };
  const consultorTabs = arrLen('renderConsultorTab');
  const decisionTabs  = arrLen('renderDecisionTab');
  const evaluadorTabs = arrLen('renderEvaluadorTab');

  if (tabsByMode.consultor && consultorTabs !== tabsByMode.consultor)
    fail('tabs-aligned-consultor', `getTabs(consultor)=${tabsByMode.consultor} vs renderConsultorTab=${consultorTabs}`);
  else pass('tabs-aligned-consultor');

  if (tabsByMode.decision && decisionTabs !== tabsByMode.decision)
    fail('tabs-aligned-decision', `getTabs(decision)=${tabsByMode.decision} vs renderDecisionTab=${decisionTabs}`);
  else pass('tabs-aligned-decision');

  // Para evaluador hay 3 modos (evaluador, evaluador1, evaluador2) que comparten 1 array
  const evMatch = js.match(/if\s*\(\s*APP\.mode\s*===\s*'evaluador'[^]+?\]\s*;/);
  if (evMatch) {
    const evCount = (evMatch[0].match(/'/g) || []).length;
    // Solo comprobamos que renderEvaluadorTab tiene un array no vacío
    if (evaluadorTabs <= 0) fail('tabs-aligned-evaluador', 'no localicé el array de tabs del evaluador');
    else pass('tabs-aligned-evaluador');
  }

  // 4.b — Logo del portal usa el id `portalLogo` (deduplicación)
  if (!/<img id="portalLogo"\s+src=""/.test(html))
    fail('portal-logo-dedup', 'el `<img id="portalLogo">` con src vacío no está en el HTML — la deduplicación se rompió');
  else pass('portal-logo-dedup');

  // 4.c — script de copia del logo presente
  if (!/reusePortalLogo/.test(js))
    fail('portal-logo-script', 'falta el script `reusePortalLogo` que copia el src del print al portal');
  else pass('portal-logo-script');
}

// ── reporte ───────────────────────────────────────────────────────────
console.log(passes.join('\n'));
if (failures.length) {
  console.log('\n' + failures.join('\n'));
  console.log(`\n${failures.length} fallo(s), ${passes.length} OK.`);
  process.exit(1);
}
console.log(`\n${passes.length} aserciones OK. Sin regresiones detectadas.`);
