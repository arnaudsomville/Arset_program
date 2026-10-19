# Parcours de Formation Géospatial & Qualité des Eaux (NASA ARSET)

Ce plan de formation structuré est basé sur les **147 modules** du programme NASA ARSET, organisés par thème et par niveau de difficulté. L'objectif est d'acquérir un socle polyvalent en observation de la Terre avec une spécialisation en qualité des eaux.

---

## 📊 Organisation des modules

Le catalogue suit désormais **l'ordre officiel du guide PDF** (`resources/catalog/arset_taxonomy.json`),
sans séparation « parcours perso / modules complémentaires » :

```
resources/notes/transcripts/
├── self-paced/
├── agriculture/
├── air-quality-health/
│   ├── air-quality/
│   └── health/
├── climate/
├── disasters/
│   ├── floods/  landslides/  populations/  sif/  sar/  urban-heat-islands/  other/
├── ecological-conservation/
│   ├── biodiversity-ecosystems/  coastal-oceans/  land-cover-change/
│   ├── spectral-indices/  sar/  other/
├── water-resources/
│   ├── hydrology/  hydrography/  water-quality/
├── wildland-fire/
├── skill-building/
└── hors-guide/
```

Les modules vides ou incomplets sont marqués `upcoming` / `partial` dans le catalogue.
Le parcours ci-dessous n'est plus utilisé par l'application : il reste comme note personnelle.

---

## 🗺️ Parcours recommandé (27 modules)

### Phase 1 — Fondations (novice)

| # | Module | Durée | Catégorie |
|---|--------|-------|-----------|
| 1 | **Fundamentals of Remote Sensing** | 2h | `self-paced` |
| 2 | **NASA's Earth Observing Fleet** | 1h | `self-paced` |
| 3 | **Select the Right NASA Earth Data** | 4h | `skill-building` |
| 4 | **Developing Sustainable Earth Science Applications** | 3h | `self-paced` |

**Objectifs phase 1 :** Comprendre le spectre électromagnétique, les résolutions, les capteurs, et savoir naviguer dans l'écosystème de données NASA.

### Phase 2 — Tronc commun polyvalent

| # | Module | Durée | Catégorie |
|---|--------|-------|-----------|
| 5 | **Fundamentals of Machine Learning for Earth Science** | 4h | `skill-building` |
| 6 | **Indices spectraux pour applications terre & eau** | 3h | `ecological-conservation` |
| 7 | **Google Earth Engine pour le suivi des terres** | 8h | `ecological-conservation` |
| 8 | **Introduction au SAR et ses applications** | 3h | `disasters` |
| 9 | **Télédétection de la sécheresse** | 4h | `ecological-conservation` |
| 10 | **ECOSTRESS** | 2h | `ecological-conservation` |

**Objectifs phase 2 :** Maîtriser GEE, les indices spectraux, les bases du ML et du SAR, et comprendre le cycle de l'eau.

### Phase 3 — Spécialisation Eau & Qualité

| # | Module | Durée | Catégorie |
|---|--------|-------|-----------|
| 11 | **Agricultural Water Management** | 6h | `water-resources/hydrology` |
| 12 | **Intégration RS dans le suivi qualité de l'eau** | 6h | `water-resources/water-quality` |
| 13 | **Traitement d'images pour la qualité de l'eau** | 6h | `water-resources/water-quality` |
| 14 | **Qualité de l'eau avec STREAM** | 4h | `water-resources/water-quality` |
| 15 | **Cyanobactéries et blooms algaux** | 6h | `water-resources/water-quality` |
| 16 | **Végétation aquatique par satellite** | 3h | `ecological-conservation` |
| 17 | **Écosystèmes carbone bleu** | 4h | `climate` |

**Objectifs phase 3 :** Analyser la qualité de l'eau par satellite — turbidité, chlorophylle-a, CDOM, cyanobactéries — avec SeaDAS, GEE, STREAM et PACE.

### Phase 4 — Ouverture & Applications

| # | Module | Durée | Catégorie |
|---|--------|-------|-----------|
| 18 | **Gestion des risques de catastrophe** | 6h | `disasters/floods` |
| 19 | **Îlots de chaleur urbains** | 4h | `disasters/urban-heat-islands` |
| 20 | **Feux de forêt par satellite** | 6h | `wildland-fire` |

**Objectifs phase 4 :** Élargir à d'autres domaines (feux, îlots de chaleur, désastres) et approfondir des missions spécifiques (ECOSTRESS, SWOT).

---

## 📈 Statistiques du parcours

| Métrique | Valeur |
|----------|--------|
| Modules | 20 |
| Durée estimée | ~80h de contenu vidéo |
| Vidéos téléchargées | ~24 modules + 199 complémentaires |
| Outils principaux | GEE, SeaDAS, QGIS, STREAM, Jupyter |
| Missions clés | Landsat, Sentinel-2/3, MODIS, VIIRS, PACE, SWOT, GRACE-FO, ECOSTRESS |

---

## 🎯 Progression

- [ ] Phase 1 : Fondations
- [ ] Phase 2 : Tronc commun
- [ ] Phase 3 : Spécialisation eau
- [ ] Phase 4 : Ouverture

---

## 🛠️ Outils & Environnement Recommandés

| Outil | Usage |
|-------|-------|
| **QGIS** | Visualisation et traitement raster/vectoriel |
| **SeaDAS** | Traitement couleur de l'eau (NASA) |
| **Google Earth Engine** | Analyse cloud à grande échelle |
| **Jupyter / Python** | Scripts d'analyse, ML |
| **STREAM** | Extraction rapide d'indicateurs qualité d'eau |

## 📚 Références

- [NASA ARSET Online Resource Guide (PDF)](https://www.earthdata.nasa.gov/s3fs-public/2026-06/OnlineResourceGuide_06_09_2026.pdf)
- [Awesome Spectral Indices](https://github.com/awesome-spectral-indices/awesome-spectral-indices)
- [Index Database (IDB)](https://www.indexdatabase.de/)
