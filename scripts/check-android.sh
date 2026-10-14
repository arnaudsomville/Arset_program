#!/usr/bin/env bash
# Vérifie les prérequis d'un build Android local (via USB).
# Ne fait AUCUNE installation : se contente de contrôler et d'expliquer quoi
# faire si un prérequis manque. Sort en erreur (code 1) au premier problème.
set -u

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

ok()   { printf "${GREEN}✓${NC} %s\n" "$1"; }
fail() { printf "${RED}✗${NC} %s\n" "$1"; }
warn() { printf "${YELLOW}⚠${NC} %s\n" "$1"; }

failures=0

# 1. Java / JDK
if command -v java >/dev/null 2>&1; then
  ver=$(java -version 2>&1 | head -1)
  major=$(java -version 2>&1 | sed -n 's/.*version "\([0-9]*\).*/\1/p')
  if [ -z "${major:-}" ]; then
    # java 1.8 style output: "1.8.0_xx"
    major=$(java -version 2>&1 | sed -n 's/.*version "1\.\([0-9]*\).*/\1/p')
  fi
  if [ -n "${major:-}" ] && [ "$major" -ge 17 ]; then
    ok "JDK trouvé (version $major) — $ver"
  else
    fail "JDK trop ancien ou introuvable ($ver). Il faut JDK 17+ (21 recommandé pour React Native 0.86)."
    failures=$((failures+1))
  fi
else
  fail "Java (JDK) introuvable. Installe OpenJDK 17+ (ex: sudo apt install openjdk-21-jdk)."
  failures=$((failures+1))
fi

# 2. adb
if command -v adb >/dev/null 2>&1; then
  ok "adb trouvé."
else
  fail "adb introuvable. Installe platform-tools (ex: sudo apt install adb, ou via Android Studio)."
  failures=$((failures+1))
fi

# 3. Android SDK
sdk_dir=""
for candidate in "${ANDROID_HOME:-}" "${ANDROID_SDK_ROOT:-}" "$HOME/Android/Sdk"; do
  if [ -n "${candidate:-}" ] && [ -d "$candidate" ]; then
    sdk_dir="$candidate"
    break
  fi
done
if [ -n "$sdk_dir" ]; then
  ok "SDK Android trouvé : $sdk_dir"
else
  fail "SDK Android introuvable. Installe Android Studio, ou définis ANDROID_HOME (ex: export ANDROID_HOME=\$HOME/Android/Sdk)."
  failures=$((failures+1))
fi

# 4. Appareil branché + débogage USB
if command -v adb >/dev/null 2>&1; then
  devices=$(adb devices | tail -n +2 | grep -v '^$' | wc -l | tr -d ' ')
  if [ "${devices:-0}" -gt 0 ]; then
    ok "Appareil détecté par adb."
  else
    fail "Aucun appareil détecté. Branche le téléphone en USB et active le débogage USB (Options développeur)."
    failures=$((failures+1))
  fi
fi

echo ""
if [ "$failures" -gt 0 ]; then
  printf "${RED}%d prérequis manquant(s).${NC}\n" "$failures"
  echo ""
  echo "Pour un build SANS SDK local (recommandé), utilise plutôt :"
  echo "  make android-eas         # APK via EAS (cloud)"
  echo "  make android-login       # connexion compte Expo (une fois)"
  exit 1
fi

echo "Tous les prérequis sont présents. Tu peux lancer : make android-local"
exit 0
