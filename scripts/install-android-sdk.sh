#!/usr/bin/env bash
# Installe (sans sudo) un JDK 17+ et le SDK Android, SI absents.
# Best-effort et idempotent : ne réinstalle pas ce qui est déjà là.
# Sort en code 1 uniquement si une installation nécessaire a échoué.

set -u

GREEN='\033[0;32m'; YELLOW='\033[1;33m'; RED='\033[0;31m'; NC='\033[0m'
ok()   { printf "${GREEN}✓${NC} %s\n" "$1"; }
warn() { printf "${YELLOW}⚠${NC} %s\n" "$1"; }
fail() { printf "${RED}✗${NC} %s\n" "$1"; }

SDK_ROOT="$HOME/Android/Sdk"
JAVA_BASE="$HOME/.local/java"
JAVA_DIR="$JAVA_BASE/temurin-21"
ENV_FILE="$HOME/.arset-android-env"
CMDLINE_VERSION="11076708"

# ── 1. JDK 17+ ──────────────────────────────────────────────────────────────
have_jdk17() {
  command -v java >/dev/null 2>&1 || return 1
  local major
  major=$(java -version 2>&1 | sed -n 's/.*version "\([0-9]*\).*/\1/p')
  [ -z "$major" ] && major=$(java -version 2>&1 | sed -n 's/.*version "1\.\([0-9]*\).*/\1/p')
  [ -n "$major" ] && [ "$major" -ge 17 ]
}

JAVA_HOME_FINAL=""
if have_jdk17; then
  JAVA_HOME_FINAL="$(dirname "$(dirname "$(readlink -f "$(command -v java)")")")"
  ok "JDK 17+ déjà présent : $JAVA_HOME_FINAL"
elif [ -x "$JAVA_DIR/bin/java" ]; then
  JAVA_HOME_FINAL="$JAVA_DIR"
  ok "JDK local déjà installé : $JAVA_DIR"
else
  warn "Pas de JDK 17+ détecté — téléchargement de Temurin 21…"
  mkdir -p "$JAVA_BASE"
  tmp="$(mktemp -d)"
  url="https://api.adoptium.net/v3/binary/latest/21/ga/linux/x64/jdk/hotspot/normal/eclipse"
  if curl -fL -o "$tmp/jdk.tar.gz" "$url"; then
    tar -xzf "$tmp/jdk.tar.gz" -C "$tmp"
    extracted=$(find "$tmp" -maxdepth 1 -type d -name 'jdk-*' | head -1)
    rm -rf "$JAVA_DIR"
    mv "$extracted" "$JAVA_DIR"
    JAVA_HOME_FINAL="$JAVA_DIR"
    ok "JDK 21 installé : $JAVA_DIR"
  else
    fail "Échec du téléchargement du JDK (réseau ?). Installe un JDK 17+ manuellement, puis relance."
    rm -rf "$tmp"
    exit 1
  fi
  rm -rf "$tmp"
fi

# ── 2. Android SDK ──────────────────────────────────────────────────────────
SDKMAN="$SDK_ROOT/cmdline-tools/latest/bin/sdkmanager"
sdk_ok() {
  [ -d "${ANDROID_HOME:-$SDK_ROOT}/cmdline-tools/latest" ] && [ -x "${ANDROID_HOME:-$SDK_ROOT}/cmdline-tools/latest/bin/sdkmanager" ]
}

if sdk_ok; then
  ok "SDK Android déjà présent : ${ANDROID_HOME:-$SDK_ROOT}"
else
  warn "SDK Android absent — téléchargement des command-line tools…"
  mkdir -p "$SDK_ROOT/cmdline-tools"
  tmp="$(mktemp -d)"
  url="https://dl.google.com/android/repository/commandlinetools-linux-${CMDLINE_VERSION}_latest.zip"
  if curl -fL -o "$tmp/cmdline.zip" "$url" && unzip -q "$tmp/cmdline.zip" -d "$tmp"; then
    rm -rf "$SDK_ROOT/cmdline-tools/latest"
    mkdir -p "$SDK_ROOT/cmdline-tools/latest"
    mv "$tmp/cmdline-tools"/* "$SDK_ROOT/cmdline-tools/latest/"
    ok "cmdline-tools installés."
  else
    fail "Échec du téléchargement des command-line tools Android. Réessaie plus tard."
    rm -rf "$tmp"
    exit 1
  fi
  rm -rf "$tmp"

  export JAVA_HOME="$JAVA_HOME_FINAL"
  yes | "$SDKMAN" --sdk_root="$SDK_ROOT" --licenses >/dev/null 2>&1 \
    || warn "Acceptation des licences partielle (peut être re-demandée au build)."
  "$SDKMAN" --sdk_root="$SDK_ROOT" "platform-tools" >/dev/null 2>&1 \
    && ok "platform-tools installés." \
    || warn "platform-tools : installation partielle."
fi

# ── 3. Fichier d'environnement ──────────────────────────────────────────────
mkdir -p "$SDK_ROOT"
cat > "$ENV_FILE" <<EOF
# Généré par scripts/install-android-sdk.sh — source-moi pour builder en local.
export ANDROID_HOME="\$HOME/Android/Sdk"
export JAVA_HOME="$JAVA_HOME_FINAL"
export PATH="\$ANDROID_HOME/cmdline-tools/latest/bin:\$ANDROID_HOME/platform-tools:\$JAVA_HOME/bin:\$PATH"
EOF
ok "Environnement écrit dans $ENV_FILE"

for rc in "$HOME/.zshrc" "$HOME/.bashrc"; do
  if [ -f "$rc" ] && ! grep -q 'arset-android-env' "$rc"; then
    printf '\n# Arset — SDK Android\n[ -f "$HOME/.arset-android-env" ] && source "$HOME/.arset-android-env"\n' >> "$rc"
    ok "Chargement automatique ajouté à $rc"
  fi
done

echo ""
echo "Terminé. Pour charger l'environnement dans ce terminal :"
echo "  source ~/.arset-android-env"
echo "Puis lancer : make build-android"
exit 0
