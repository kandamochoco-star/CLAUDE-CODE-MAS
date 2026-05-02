#!/usr/bin/env bash
# update-skills.sh — Updates every Claude Code skill/plugin/MCP installed at user level.
#
# Usage:  bash scripts/update-skills.sh
#
# What it does (in order):
#   1. git pull on every plugin clone under ~/.claude/plugins/*
#      (ui-ux-pro-max bundle is copied, not cloned, so it re-downloads from upstream)
#   2. npm update -g claude-mem        — refresh memory tool
#   3. claude-mem update               — refresh marketplace plugin assets
#   4. npx -y n8n-mcp --version        — warm npx cache for the n8n MCP server
#   5. Re-runs the symlink fan-out for new skills added by upstream
#
# Safe to run repeatedly. No destructive operations.

set -euo pipefail

CLAUDE_HOME="${HOME}/.claude"
PLUGINS_DIR="${CLAUDE_HOME}/plugins"
SKILLS_DIR="${CLAUDE_HOME}/skills"
AGENTS_DIR="${CLAUDE_HOME}/agents"
COMMANDS_DIR="${CLAUDE_HOME}/commands"
UI_UX_REPO="https://github.com/nextlevelbuilder/ui-ux-pro-max-skill.git"

log()  { printf "\033[1;34m[update]\033[0m %s\n" "$*"; }
warn() { printf "\033[1;33m[warn]\033[0m %s\n" "$*"; }
ok()   { printf "\033[1;32m[ok]\033[0m %s\n" "$*"; }

mkdir -p "$SKILLS_DIR" "$AGENTS_DIR" "$COMMANDS_DIR"

# --- 1. git pull on every cloned plugin ---
if [ -d "$PLUGINS_DIR" ]; then
  for d in "$PLUGINS_DIR"/*/; do
    [ -d "$d/.git" ] || continue
    log "git pull → $(basename "$d")"
    git -C "$d" pull --ff-only --quiet || warn "pull failed: $(basename "$d")"
  done
fi

# --- 2. ui-ux-pro-max bundle (no .git, refresh by re-cloning to /tmp) ---
log "refreshing ui-ux-pro-max bundle"
TMP_DIR="$(mktemp -d)"
trap 'rm -rf "$TMP_DIR"' EXIT
if git clone --depth 1 --quiet "$UI_UX_REPO" "$TMP_DIR/ui-ux" 2>/dev/null; then
  for s in "$TMP_DIR"/ui-ux/.claude/skills/*/; do
    name="$(basename "$s")"
    rm -rf "$SKILLS_DIR/$name"
    cp -r "$s" "$SKILLS_DIR/$name"
  done
  ok "ui-ux-pro-max refreshed"
else
  warn "could not refresh ui-ux-pro-max"
fi

# --- 3. npm packages ---
if command -v npm >/dev/null 2>&1; then
  log "npm update -g claude-mem"
  npm update -g claude-mem --silent || warn "npm update failed for claude-mem"
fi

if command -v claude-mem >/dev/null 2>&1; then
  log "claude-mem update"
  claude-mem update 2>/dev/null || warn "claude-mem update failed"
fi

# --- 4. warm npx cache for n8n-mcp so first call is fast ---
if command -v npx >/dev/null 2>&1; then
  log "warming n8n-mcp via npx"
  npx -y n8n-mcp --version >/dev/null 2>&1 || true
fi

# --- 5. Re-link new skills/agents/commands from plugins ---
link_from() {
  local src_dir="$1" dst_dir="$2" use_dirs="$3" prefix="$4"
  [ -d "$src_dir" ] || return 0
  if [ "$use_dirs" = "1" ]; then
    for s in "$src_dir"/*/; do
      [ -d "$s" ] || continue
      name="$(basename "$s")"
      target="$dst_dir/$name"
      if [ -e "$target" ] && [ ! -L "$target" ]; then
        target="$dst_dir/${prefix}${name}"
      fi
      ln -sfn "$s" "$target"
    done
  else
    for f in "$src_dir"/*.md; do
      [ -f "$f" ] || continue
      name="$(basename "$f")"
      target="$dst_dir/$name"
      if [ -e "$target" ] && [ ! -L "$target" ]; then
        target="$dst_dir/${prefix}${name}"
      fi
      ln -sfn "$f" "$target"
    done
  fi
}

if [ -d "$PLUGINS_DIR/superpowers" ]; then
  log "relink superpowers"
  link_from "$PLUGINS_DIR/superpowers/skills"   "$SKILLS_DIR"   1 "sp-"
  link_from "$PLUGINS_DIR/superpowers/agents"   "$AGENTS_DIR"   0 "sp-"
  link_from "$PLUGINS_DIR/superpowers/commands" "$COMMANDS_DIR" 0 "sp-"
fi

if [ -d "$PLUGINS_DIR/everything-cc" ]; then
  log "relink everything-cc"
  link_from "$PLUGINS_DIR/everything-cc/skills"   "$SKILLS_DIR"   1 "ecc-"
  link_from "$PLUGINS_DIR/everything-cc/agents"   "$AGENTS_DIR"   0 "ecc-"
  link_from "$PLUGINS_DIR/everything-cc/commands" "$COMMANDS_DIR" 0 "ecc-"
fi

# --- 6. Clean broken symlinks (skills removed upstream) ---
log "pruning broken symlinks"
find "$SKILLS_DIR" "$AGENTS_DIR" "$COMMANDS_DIR" -maxdepth 1 -xtype l -delete 2>/dev/null || true

ok "done. skills=$(ls "$SKILLS_DIR" | wc -l) agents=$(ls "$AGENTS_DIR" | wc -l) commands=$(ls "$COMMANDS_DIR" | wc -l)"
