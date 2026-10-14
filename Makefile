# ─────────────────────────────────────────────────────────────────────────────
# Arset Program — ARSET viewer v2
# Monorepo : ressources centralisées + apps/desktop (React PC), apps/server
# (Node/Express), apps/mobile (Expo Android).
# ─────────────────────────────────────────────────────────────────────────────

# Répertoire source des données (catalog JSON, notes, transcripts).
ARSET_SOURCE ?= $(HOME)/Documents/Remote Sensing Classes
# Répertoire de données runtime (vidéos téléchargées, progression). Hors repo.
ARSET_DATA_DIR ?= $(HOME)/.arset-data

NPM      := npm
YT_DLP   := $(shell command -v yt-dlp 2>/dev/null)
FFMPEG   := $(shell command -v ffmpeg 2>/dev/null)

.PHONY: help install install-js install-resources install-tools ensure-data \
        sync sync-catalog sync-notes build-core dev-server dev-desktop pc \
        dev-mobile build-desktop build-android typecheck test clean

## ── Cibles principales ──────────────────────────────────────────────────────

# help: affiche cette aide
help:
	@printf "Arset Program — cibles disponibles :\n"
	@printf "  make install           Installe TOUT (JS + ressources + outils + data dir)\n"
	@printf "  make sync              Re-copie catalog + notes depuis la source\n"
	@printf "  make pc                Lance backend + desktop React (PC)\n"
	@printf "  make dev-server        Backend Express (dev, port 4000)\n"
	@printf "  make dev-desktop       Desktop React/Vite (dev, port 5173)\n"
	@printf "  make dev-mobile        Expo (Android)\n"
	@printf "  make build-core        Compile @arset/core\n"
	@printf "  make build-desktop     Build production React\n"
	@printf "  make build-android     Build APK via EAS (cloud)\n"
	@printf "  make typecheck         Typecheck core + server + desktop\n"
	@printf "  make test              Lance les tests\n"
	@printf "  make clean             Supprime node_modules et artefacts\n"

# install: installe toutes les ressources nécessaires
install: install-js install-resources install-tools ensure-data
	@printf "✅ Installation complète terminée.\n"

# install-js: dépendances Node de tous les workspaces (construit aussi @arset/core)
install-js:
	@printf "📦 npm install (workspaces)...\n"
	$(NPM) install

# install-resources: copie les ressources JSON + notes depuis la source
install-resources: sync

# install-tools: vérifie/installe yt-dlp et ffmpeg
install-tools:
	@printf "🔧 Vérification des outils vidéo...\n"
	@if [ -z "$(YT_DLP)" ]; then \
		printf "⚠️  yt-dlp absent — installation via pipx...\n"; \
		pipx install yt-dlp 2>/dev/null || pip3 install --user yt-dlp 2>/dev/null || (printf "❌ Impossible d'installer yt-dlp automatiquement. Installez-le manuellement: https://github.com/yt-dlp/yt-dlp\n"; exit 1); \
	else \
		printf "✅ yt-dlp : $(YT_DLP)\n"; \
	fi
	@if [ -z "$(FFMPEG)" ]; then \
		printf "⚠️  ffmpeg absent — requis pour le streaming. Installez-le via votre gestionnaire de paquets (ex: sudo apt install ffmpeg).\n"; \
	else \
		printf "✅ ffmpeg : $(FFMPEG)\n"; \
	fi

# ensure-data: crée le dossier de données runtime (~/.arset-data/videos)
ensure-data:
	@printf "📁 Préparation de $(ARSET_DATA_DIR)...\n"
	@mkdir -p "$(ARSET_DATA_DIR)/videos"

## ── Synchronisation des ressources ──────────────────────────────────────────

# sync: re-copie catalog + notes depuis la source
sync: sync-catalog sync-notes

sync-catalog:
	@printf "🔄 Copie du catalog depuis '$(ARSET_SOURCE)'...\n"
	@mkdir -p resources/catalog
	@cp -f "$(ARSET_SOURCE)/viewer/video_catalog.json" resources/catalog/video_catalog.json
	@cp -f "$(ARSET_SOURCE)/viewer/video_urls.json" resources/catalog/video_urls.json
	@printf "🔄 Copie du catalog + parcours dans l'app mobile (bundlés)...\n"
	@mkdir -p apps/mobile/assets
	@cp -f resources/catalog/video_catalog.json apps/mobile/assets/video_catalog.json
	@cp -f resources/learning_path.json apps/mobile/assets/learning_path.json
	@printf "✅ Catalog synchronisé.\n"

sync-notes:
	@printf "🔄 Copie des notes + transcripts...\n"
	@mkdir -p resources/notes
	@cp -f "$(ARSET_SOURCE)/Plan.md" resources/notes/Plan.md 2>/dev/null || true
	@cp -f "$(ARSET_SOURCE)/notes.md" resources/notes/notes.md 2>/dev/null || true
	@rm -rf resources/notes/transcripts
	@mkdir -p resources/notes/transcripts
	@cp -rf "$(ARSET_SOURCE)/Transcripts/." resources/notes/transcripts/ 2>/dev/null || true
	@printf "✅ Notes synchronisées.\n"

## ── Développement ───────────────────────────────────────────────────────────

build-core:
	$(NPM) run build -w @arset/core

dev-server: build-core
	$(NPM) run dev -w @arset/server

dev-desktop: build-core
	$(NPM) run dev -w @arset/desktop

# pc: backend + desktop en parallèle
pc: build-core
	@printf "🚀 Lancement backend (4000) + desktop (5173)...\n"
	$(NPM) exec -- concurrently -k -n server,desktop \
		"$(NPM) run dev -w @arset/server" \
		"$(NPM) run dev -w @arset/desktop"

dev-mobile:
	$(NPM) run start -w @arset/mobile

## ── Build ───────────────────────────────────────────────────────────────────

build-desktop: build-core
	$(NPM) run build -w @arset/desktop

# build-android: build APK via EAS (nécessite un compte Expo + configuration EAS)
build-android:
	@printf "🤖 Build Android via EAS...\n"
	cd apps/mobile && npx eas-cli build -p android --profile preview

## ── Qualité ─────────────────────────────────────────────────────────────────

typecheck: build-core
	$(NPM) run typecheck

test:
	$(NPM) run test -w @arset/core

clean:
	rm -rf node_modules packages/*/node_modules apps/*/node_modules
	rm -rf packages/*/dist apps/desktop/dist
	rm -rf apps/mobile/.expo
