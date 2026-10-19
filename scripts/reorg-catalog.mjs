// Réorganise le catalogue ARSET selon l'ordre du PDF Online Resource Guide.
//
// - 129 trainings PDF + 1 module « hors guide »
// - clés `<catégorie>/[<sous-catégorie>/]<NN>-<slug>`
// - dédoublonne les vidéos par youtube_video_id (fusion des instances, legacy_ids)
// - réaffecte les vidéos des modules fusionnés/supprimés (table MOVES)
// - supprime learning_path.json
//
// Usage : node scripts/reorg-catalog.mjs [--dry-run]
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..");
const catalogPath = path.join(repoRoot, "resources/catalog/video_catalog.json");
const taxonomyPath = path.join(repoRoot, "resources/catalog/arset_taxonomy.json");
const outRoot = path.join(repoRoot, "resources/notes/transcripts");
const dryRun = process.argv.includes("--dry-run");

const CAT_SLUG = {
  "Self-Paced": "self-paced",
  Agriculture: "agriculture",
  "Air Quality & Health": "air-quality-health",
  Climate: "climate",
  Disasters: "disasters",
  "Ecological Conservation": "ecological-conservation",
  "Water Resources": "water-resources",
  "Wildland Fire": "wildland-fire",
  "Skill Building": "skill-building",
  "Hors guide": "hors-guide",
};
const SUB_SLUG = {
  "Air Quality": "air-quality",
  Health: "health",
  Floods: "floods",
  Landslides: "landslides",
  Populations: "populations",
  "Solar Induced Fluorescence (SIF)": "sif",
  "Synthetic Aperture Radar (SAR)": "sar",
  "Urban Heat Islands (UHI)": "urban-heat-islands",
  Other: "other",
  "Biodiversity and Ecosystems": "biodiversity-ecosystems",
  "Coastal and Oceans": "coastal-oceans",
  "Land Cover and Change Detection": "land-cover-change",
  "Spectral Indices": "spectral-indices",
  Hydrology: "hydrology",
  Hydrography: "hydrography",
  "Water Quality": "water-quality",
};

const slugify = (s) =>
  s
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^\p{ASCII}]/gu, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 90)
    .replace(/-+$/g, "");

// [catégorie, sous-catégorie, titre, module source | id nouveau module]
const T = [
  ["Self-Paced", null, "Fundamentals of Remote Sensing", 1],
  ["Self-Paced", null, "NASA's Earth Observing Fleet", 101],
  ["Self-Paced", null, "Developing Sustainable Earth Science Applications", 102],
  ["Self-Paced", null, "Hyperspectral Data for Land and Coastal Systems (Self-Paced)", 103],
  ["Agriculture", null, "Satellite Remote Sensing for Agricultural Applications", 8],
  ["Agriculture", null, "Agricultural Crop Classification with SAR and Optical Remote Sensing", 18],
  ["Agriculture", null, "Large Scale Applications of Machine Learning using Remote Sensing for Building Agriculture Solutions", 19],
  ["Agriculture", null, "Crop Mapping using Synthetic Aperture Radar (SAR) and Optical Remote Sensing", 20],
  ["Agriculture", null, "Mapping Crops and their Biophysical Characteristics with Polarimetric SAR and Optical Remote Sensing", 21],
  ["Air Quality & Health", "Air Quality", "Lidar Profiling Satellite Observations for Air Quality Applications", 22],
  ["Air Quality & Health", "Air Quality", "An Inside Look at How NASA Measures Air Pollution", 23],
  ["Air Quality & Health", "Air Quality", "High Temporal Resolution Air Quality Observations from Space", 24],
  ["Air Quality & Health", "Air Quality", "Introduction to Satellite Remote Sensing for Air Quality Applications", 25],
  ["Air Quality & Health", "Air Quality", "Geostationary Remote Sensing of Trace Gases for Air Quality Applications in North America", 26],
  ["Air Quality & Health", "Air Quality", "NASA Atmospheric Composition Ground Networks Supporting Air Quality and Climate Applications", 27],
  ["Air Quality & Health", "Air Quality", "Accessing and Analyzing Air Quality Data from Geostationary Satellites", 28],
  ["Air Quality & Health", "Air Quality", "Tools for Analyzing NASA Air Quality Model Output", 29],
  ["Air Quality & Health", "Air Quality", "Introduction and Access to Global Air Quality Forecasting Data and Tools", 30],
  ["Air Quality & Health", "Air Quality", "MODIS to VIIRS Transition for Air Quality Applications", 31],
  ["Air Quality & Health", "Air Quality", "High Resolution NO2 Monitoring From Space with TROPOMI", 32],
  ["Air Quality & Health", "Air Quality", "Data Analysis Tools for High Resolution Air Quality Satellite Datasets", 33],
  ["Air Quality & Health", "Health", "Remote Sensing for Climate-Sensitive Infectious Diseases", 98],
  ["Air Quality & Health", "Health", "Fundamentals of Satellite Remote Sensing for Health Monitoring", 99],
  ["Air Quality & Health", "Health", "Methods in Using NASA Remote Sensing for Health Applications", 100],
  ["Climate", null, "Sea Level Change Tools for Planning and Decision Support", 34],
  ["Climate", null, "Methane Observations for Large Emission Event Detection and Monitoring", 35],
  ["Climate", null, "Building Climate Risk Assessments from Local Vulnerability and Exposure", 36],
  ["Climate", null, "Selecting Climate Change Projection Sets for Mitigation, Adaptation, and Risk Management Applications", 37],
  ["Climate", null, "Measuring Atmospheric Carbon Dioxide from Space in Support of Climate Related Studies", 38],
  ["Climate", null, "Atmospheric CO2 and CH4 Budgets to Support the Global Stocktake", 39],
  ["Climate", null, "Earth Observations Toolkit for Sustainable Cities and Human Settlements", 40],
  ["Climate", null, "NASA Earth Observations for Energy Management", 41],
  ["Climate", null, "Introduction to NASA Resources for Climate Change Applications", 42],
  ["Climate", null, "Earth Observations of Blue Carbon Ecosystems", 43],
  ["Climate", null, "Applications of Carbon Dioxide Measurements for Climate-Related Studies", 44],
  ["Disasters", "Floods", "Monitoring Urban Floods using Remote Sensing", 45],
  ["Disasters", "Floods", "Monitoring and Modeling Floods using Earth Observations", 46],
  ["Disasters", "Landslides", "Landslide Monitoring and Risk Assessment Using NASA Earth System Data", 47],
  ["Disasters", "Populations", "Humanitarian Applications using NASA Earth Observations", 48],
  ["Disasters", "Populations", "Introduction to Population Grids and their Integration with Remote Sensing Data", 49],
  ["Disasters", "Populations", "Earth Observations for Humanitarian Applications", 50],
  ["Disasters", "Populations", "Transforming Earth Observation (EO) Data into Building Infrastructure Data Sets for Disaster Risk Modeling", 51],
  ["Disasters", "Solar Induced Fluorescence (SIF)", "Use of Solar Induced Fluorescence and LiDAR to Assess Vegetation Change and Vulnerability", 52],
  ["Disasters", "Solar Induced Fluorescence (SIF)", "Solar Induced Fluorescence (SIF) Observations for Assessing Vegetation Changes Related to Floods, Drought, and Fire Impacts", 53],
  ["Disasters", "Synthetic Aperture Radar (SAR)", "An Introduction to Synthetic Aperture Radar (SAR) and Its Applications", 5],
  ["Disasters", "Synthetic Aperture Radar (SAR)", "Disaster Assessment using Synthetic Aperture Radar", 54],
  ["Disasters", "Synthetic Aperture Radar (SAR)", "SAR for Detecting and Monitoring Floods, Sea Ice, and Subsidence from Groundwater Extraction", 55],
  ["Disasters", "Synthetic Aperture Radar (SAR)", "SAR for Landcover Applications", 56],
  ["Disasters", "Synthetic Aperture Radar (SAR)", "SAR for Disasters and Hydrological Applications", 57],
  ["Disasters", "Synthetic Aperture Radar (SAR)", "Radar Remote Sensing for Land, Water, and Disaster Applications", 58],
  ["Disasters", "Urban Heat Islands (UHI)", "Satellite Remote Sensing for Urban Heat Islands", 301],
  ["Disasters", "Urban Heat Islands (UHI)", "Introduction to Thermal Remote Sensing and Applications in Urban Heat Island Mapping", 302],
  ["Disasters", "Urban Heat Islands (UHI)", "Satellite Remote Sensing for Measuring Urban Heat Islands and Constructing Heat Vulnerability Indices", 16],
  ["Disasters", "Other", "Introduction to Lightning Observations and Applications", 59],
  ["Disasters", "Other", "Introduction to NASA's “Black Marble” Night Lights Data", 60],
  ["Disasters", "Other", "Earth Observations for Disaster Risk Assessment and Resilience", 303],
  ["Disasters", "Other", "Monitoring Tropical Storms for Emergency Preparedness", 61],
  ["Disasters", "Other", "Overview of the Global Disasters Alert and Coordination System (GDACS)", 62],
  ["Disasters", "Other", "Satellite Observations for Analyzing Natural Hazards on Small Island Nations", 63],
  ["Disasters", "Other", "Remote Sensing for Disasters Scenarios", 64],
  ["Ecological Conservation", "Biodiversity and Ecosystems", "Introduction to the Integration of Animal Tracking and Remote Sensing", 65],
  ["Ecological Conservation", "Biodiversity and Ecosystems", "Invasive Species Monitoring with Remote Sensing", 66],
  ["Ecological Conservation", "Biodiversity and Ecosystems", "Evaluating Ecosystem Services with Remote Sensing", 67],
  ["Ecological Conservation", "Biodiversity and Ecosystems", "Using the UN Biodiversity Lab to Support National Conservation and SDGs", 68],
  ["Ecological Conservation", "Biodiversity and Ecosystems", "Understanding Phenology with Remote Sensing", 69],
  ["Ecological Conservation", "Biodiversity and Ecosystems", "New Sensor Highlight: ECOSTRESS", 70],
  ["Ecological Conservation", "Biodiversity and Ecosystems", "Earth Observations for Indigenous-Led Land Management", 71],
  ["Ecological Conservation", "Biodiversity and Ecosystems", "Remote Sensing for Conservation and Biodiversity", 72],
  ["Ecological Conservation", "Biodiversity and Ecosystems", "Introduction to Remote Sensing for Scenario-Based Ecoforecasting", 304],
  ["Ecological Conservation", "Biodiversity and Ecosystems", "Introduction to Remote Sensing for Conservation Management", 73],
  ["Ecological Conservation", "Biodiversity and Ecosystems", "Estimating Biomass and Change with GEDI and the OBIWAN API", 74],
  ["Ecological Conservation", "Biodiversity and Ecosystems", "Spaceborne Lidar for Monitoring Vegetation Structure and Biomass using GEDI", 75],
  ["Ecological Conservation", "Biodiversity and Ecosystems", "Biodiversity Applications for Airborne Imaging Systems", 76],
  ["Ecological Conservation", "Biodiversity and Ecosystems", "Using the UN Biodiversity Lab to Monitor the Pulse of the Planet", 77],
  ["Ecological Conservation", "Biodiversity and Ecosystems", "Species Distribution Modeling with Remote Sensing", 78],
  ["Ecological Conservation", "Biodiversity and Ecosystems", "Remote Sensing for Freshwater Habitats", 79],
  ["Ecological Conservation", "Biodiversity and Ecosystems", "Airborne Data Applications for Invasive Species Mapping", 80],
  ["Ecological Conservation", "Coastal and Oceans", "Monitoring Aquatic Vegetation with Remote Sensing", 81],
  ["Ecological Conservation", "Coastal and Oceans", "Remote Sensing for Mangroves in Support of the UN Sustainable Development Goals", 82],
  ["Ecological Conservation", "Coastal and Oceans", "Remote Sensing of Coastal Ecosystems", 83],
  ["Ecological Conservation", "Coastal and Oceans", "Introduction to Remote Sensing for Coastal and Ocean Applications", 84],
  ["Ecological Conservation", "Land Cover and Change Detection", "Visualizing Land Cover and Land Use Change with NASA Satellite Imagery", 85],
  ["Ecological Conservation", "Land Cover and Change Detection", "Using Google Earth Engine for Land Monitoring Applications", 86],
  ["Ecological Conservation", "Land Cover and Change Detection", "Remote Sensing of Land Indicators for Sustainable Development Goal 15", 87],
  ["Ecological Conservation", "Land Cover and Change Detection", "Remote Sensing of Forest Cover and Change Assessment for Carbon Monitoring", 88],
  ["Ecological Conservation", "Land Cover and Change Detection", "Remote Sensing for Monitoring Land Degradation and Sustainable Cities SDGs", 89],
  ["Ecological Conservation", "Land Cover and Change Detection", "Investigating Time Series of Satellite Imagery", 90],
  ["Ecological Conservation", "Land Cover and Change Detection", "Change Detection for Land Cover Mapping", 91],
  ["Ecological Conservation", "Land Cover and Change Detection", "Accuracy Assessment of a Land Cover Classification", 92],
  ["Ecological Conservation", "Land Cover and Change Detection", "Land Cover Classification with Satellite Imagery", 93],
  ["Ecological Conservation", "Spectral Indices", "Calculating Spectral Indices for Land and Aquatic Applications using QGIS", 94],
  ["Ecological Conservation", "Spectral Indices", "Spectral Indices for Land and Aquatic Applications", 95],
  ["Ecological Conservation", "Synthetic Aperture Radar (SAR)", "Forest Mapping and Monitoring with SAR Data", 96],
  ["Ecological Conservation", "Other", "Connecting Citizen Science with Remote Sensing", 97],
  ["Ecological Conservation", "Other", "Remote Sensing of Drought", 6],
  ["Water Resources", "Hydrology", "Monitoring Global Terrestrial Surface Water Height using Remote Sensing", 105],
  ["Water Resources", "Hydrology", "Introduction to Snow and Ice Data Products and Applications for Water Resources Management", 106],
  ["Water Resources", "Hydrology", "Application of NASA SPoRT-Land Information System (SPoRT-LIS) Soil Moisture Data for Drought", 107],
  ["Water Resources", "Hydrology", "Groundwater Monitoring using Observations from NASA's GRACE Missions", 108],
  ["Water Resources", "Hydrology", "Using Earth Observations to Monitor Water Budgets for River Basin Management", 109],
  ["Water Resources", "Hydrology", "Introduction to Using the VIC Hydrologic Model with NASA Earth Observations", 305],
  ["Water Resources", "Hydrology", "Water Resource Management using NASA Earth Science Data", 110],
  ["Water Resources", "Hydrology", "Applications of Remote Sensing-Based Evapotranspiration Data Products", 111],
  ["Water Resources", "Hydrology", "Applications of Remote Sensing to Soil Moisture and Evapotranspiration", 112],
  ["Water Resources", "Hydrology", "Monitoring Groundwater Changes for Water Resources Management", 113],
  ["Water Resources", "Hydrology", "Assessing Extreme Weather Statistics using NASA Earth eXchange Global Daily Downscaled Projections (NEX-GDDP-CMIP6)", 114],
  ["Water Resources", "Hydrology", "Drought Monitoring, Prediction, and Projection using NASA Earth System Data", 306],
  ["Water Resources", "Hydrology", "Applications of GPM IMERG Reanalysis for Assessing Extreme Dry and Wet Periods", 115],
  ["Water Resources", "Hydrology", "Using Earth Observations to Monitor Water Budgets for River Basin Management II", 116],
  ["Water Resources", "Hydrography", "Mapping and Monitoring Lakes and Reservoirs with Satellite Observations", 117],
  ["Water Resources", "Hydrography", "River Basin Delineation Based On NASA Digital Elevation Data", 118],
  ["Water Resources", "Hydrography", "NASA Satellite Laser Altimetry for Coastal and Near-Shore Bathymetry", 307],
  ["Water Resources", "Water Quality", "The Application of Earth Observations for Assessing Waterborne Disease Risk", 308],
  ["Water Resources", "Water Quality", "Introduction to Plankton, Aerosol, Cloud, Ocean Ecosystem (PACE) Hyperspectral Observations for Water Quality Monitoring", 119],
  ["Water Resources", "Water Quality", "Introduction to Remote Sensing of Harmful Algal Blooms", 12],
  ["Water Resources", "Water Quality", "Monitoring Water Quality in Lakes and Coastal Regions Using STREAM", 11],
  ["Water Resources", "Water Quality", "Monitoring Coastal and Estuarine Water Quality: Transitioning from MODIS to VIIRS", 120],
  ["Water Resources", "Water Quality", "Overview of SeaDAS 8.4.1 for the Processing, Analysis, and Visualization of Optical Remote Sensing Data for Water Quality Monitoring", 121],
  ["Water Resources", "Water Quality", "Monitoring Water Quality of Inland Lakes using Remote Sensing", 122],
  ["Water Resources", "Water Quality", "Monitoring Coastal and Estuarine Water Quality using Remote Sensing and In Situ Data", 123],
  ["Water Resources", "Water Quality", "Integrating Remote Sensing into a Water Quality Monitoring Program", 9],
  ["Water Resources", "Water Quality", "Processing Satellite Imagery for Monitoring Water Quality", 10],
  ["Wildland Fire", null, "Introduction to NASA Earth Observations and Tools for Wildfire Monitoring and Management", 309],
  ["Wildland Fire", null, "Advanced NASA Earth Observations and Tools for Active Fire, Smoke, and Post-Fire Monitoring", 310],
  ["Wildland Fire", null, "Satellite Observations and Tools for Fire Risk, Detection, and Analysis", 124],
  ["Wildland Fire", null, "Assessing the Impacts of Fires on Watershed Health", 125],
  ["Wildland Fire", null, "Using Earth Observations for Pre- and Post-Fire Monitoring", 126],
  ["Skill Building", null, "Fundamentals of Machine Learning for Earth Science", 2],
  ["Skill Building", null, "Remote Sensing Training: Methods & Best Practices", 104],
  ["Hors guide", null, "Vidéos sans training correspondant (à reclasser)", 311],
];

const NEW_IDS = new Set([301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311]);

// video id -> module cible (réaffectations de la curation)
const MOVES = {
  182: 311, 52: 107, 231: 6,
  58: 30, 16: 30, 236: 30, 84: 22, 220: 42,
  212: 303, 77: 46, 228: 46, 260: 12, 35: 45, 132: 45, 250: 62, 112: 62,
  71: 64, 108: 64, 150: 64, 151: 64, 146: 46, 127: 57, 50: 57,
  233: 47, 105: 47, 123: 54,
  218: 303, 161: 303, 46: 303,
  8: 109, 245: 124, 162: 81, 95: 307, 128: 5,
  89: 78, 119: 52, 160: 8, 75: 82, 122: 76, 93: 82, 159: 76, 91: 52, 219: 88,
  191: 68, 76: 21, 247: 21, 144: 21,
  230: 81, 40: 81, 143: 69, 101: 69, 21: 76, 23: 76,
  169: 306, 43: 306,
  196: 122, 133: 122, 110: 122, 188: 113, 186: 122, 193: 122,
  217: 109, 18: 109,
  22: 10, 26: 10, 31: 10, 166: 10, 34: 120, 216: 120,
  194: 46, 163: 61, 53: 61,
  125: 11,
  268: 86, 269: 86,
  257: 16, 114: 16, 227: 16, 73: 16,
  148: 51,
  103: 108,
};

// modules partiels (série incomplète ou contenu à confirmer)
const PARTIAL = new Set([
  18, 20, 22, 24, 25, 27, 31, 32, 41, 46, 47, 48, 50, 54, 55, 57, 62, 73, 79,
  83, 84, 88, 92, 96, 105, 106, 108, 114, 118, 119, 123, 124, 126,
]);

function episodeNumber(name) {
  let m = /\b(?:part|parte|session|sesi[oó]n)\s*(\d+)\s*(?:\/|\s*de\s*)\s*(\d+)/i.exec(name);
  if (m) return Number(m[1]);
  m = /\b(?:part|parte|session|sesi[oó]n)\s*(\d+)\b/i.exec(name);
  if (m) return Number(m[1]);
  m = /\b(\d+)\s*\/\s*(\d+)\s*$/.exec(name);
  if (m) return Number(m[1]);
  return Infinity;
}

function main() {
  const catalog = JSON.parse(fs.readFileSync(catalogPath, "utf8"));
  const oldVideos = catalog.videos;
  const oldModules = new Map(catalog.modules.map((m) => [m.id, m]));
  const oldById = new Map(oldVideos.map((v) => [v.id, v]));

  // 1. listes de vidéos par module source
  const lists = new Map();
  for (const m of catalog.modules) lists.set(m.id, [...m.source_video_ids]);
  for (const id of NEW_IDS) lists.set(id, []);

  // 2. réaffectations
  for (const [vid, target] of Object.entries(MOVES)) {
    const v = Number(vid);
    for (const arr of lists.values()) {
      const i = arr.indexOf(v);
      if (i !== -1) arr.splice(i, 1);
    }
    if (!lists.has(target)) throw new Error(`module cible inconnu: ${target}`);
    if (!lists.get(target).includes(v)) lists.get(target).push(v);
  }

  // 3. dédoublonnage des entrées vidéo par youtube_video_id
  const byYt = new Map();
  for (const v of oldVideos) {
    if (!byYt.has(v.youtube_video_id)) byYt.set(v.youtube_video_id, []);
    byYt.get(v.youtube_video_id).push(v);
  }
  const canonicalOf = new Map(); // old id -> canonical id
  const newVideos = [];
  for (const [yt, group] of byYt) {
    const sorted = [...group].sort(
      (a, b) =>
        (b.instances?.length ?? 0) - (a.instances?.length ?? 0) ||
        (b.local_filenames?.length ?? 0) - (a.local_filenames?.length ?? 0) ||
        a.id - b.id,
    );
    const canonical = sorted[0];
    const instances = [];
    const seenInst = new Set();
    for (const v of sorted) {
      for (const inst of v.instances ?? []) {
        const k = `${inst.sha256}|${inst.path}`;
        if (seenInst.has(k)) continue;
        seenInst.add(k);
        instances.push(inst);
      }
    }
    const filenames = [...new Set(sorted.flatMap((v) => v.local_filenames ?? []))];
    const legacy = sorted.map((v) => v.id).filter((id) => id !== canonical.id);
    const merged = {
      ...canonical,
      sha256: sorted.find((v) => v.sha256)?.sha256 ?? "",
      local_filenames: filenames,
      instances,
      module_ids: [],
      canonical_module_id: 0,
    };
    if (legacy.length) merged.legacy_ids = legacy;
    newVideos.push(merged);
    for (const v of sorted) canonicalOf.set(v.id, canonical.id);
  }

  // 4. modules cibles + affectation des vidéos
  const modules = [];
  const usedIds = new Set();
  const categoryOrder = new Map();
  const subOrder = new Map();
  for (const [cat, sub, title, oldId] of T) {
    if (!categoryOrder.has(cat)) categoryOrder.set(cat, categoryOrder.size + 1);
    let order;
    if (sub) {
      const k = `${cat}/${sub}`;
      if (!subOrder.has(k)) subOrder.set(k, 0);
      subOrder.set(k, subOrder.get(k) + 1);
      order = subOrder.get(k);
    } else {
      const k = cat;
      if (!subOrder.has(k)) subOrder.set(k, 0);
      subOrder.set(k, subOrder.get(k) + 1);
      order = subOrder.get(k);
    }
    const catSlug = CAT_SLUG[cat];
    const subSlug = sub ? SUB_SLUG[sub] : null;
    const key = [catSlug, subSlug, `${String(order).padStart(2, "0")}-${slugify(title)}`]
      .filter(Boolean)
      .join("/");
    if (usedIds.has(oldId)) throw new Error(`module id dupliqué: ${oldId}`);
    usedIds.add(oldId);
    const videoIds = [...new Set((lists.get(oldId) ?? []).map((id) => canonicalOf.get(id)).filter(Boolean))];
    const source = videoIds
      .map((id) => newVideos.find((v) => v.id === id))
      .filter(Boolean)
      .sort((a, b) => episodeNumber(a.name) - episodeNumber(b.name))
      .map((v) => v.id);
    modules.push({
      id: oldId,
      key,
      title,
      category: cat,
      subcategory: sub,
      category_order: categoryOrder.get(cat),
      order,
      status: source.length === 0 ? "upcoming" : PARTIAL.has(oldId) ? "partial" : "ok",
      source_video_ids: source,
    });
  }

  // 5. module_ids / canonical_module_id de chaque vidéo
  const moduleIdsByVideo = new Map();
  for (const m of modules) {
    for (const vid of m.source_video_ids) {
      if (!moduleIdsByVideo.has(vid)) moduleIdsByVideo.set(vid, []);
      moduleIdsByVideo.get(vid).push(m.id);
    }
  }
  const moduleOrder = new Map(modules.map((m, i) => [m.id, i]));
  for (const v of newVideos) {
    const mids = moduleIdsByVideo.get(v.id) ?? [];
    v.module_ids = [...mids].sort((a, b) => moduleOrder.get(a) - moduleOrder.get(b));
    v.canonical_module_id = v.module_ids[0] ?? 0;
  }

  // 6. invariants
  const beforeYt = new Set(oldVideos.map((v) => v.youtube_video_id));
  const afterYt = new Set(newVideos.map((v) => v.youtube_video_id));
  const beforeInst = new Set(
    oldVideos.flatMap((v) => (v.instances ?? []).map((i) => `${i.sha256}|${i.path}`)),
  );
  const afterInst = new Set(
    newVideos.flatMap((v) => (v.instances ?? []).map((i) => `${i.sha256}|${i.path}`)),
  );
  const beforeSources = new Set(
    oldVideos.flatMap((v) => (v.instances ?? []).map((i) => i.sha256 || i.path)),
  );
  const afterSources = new Set(
    newVideos.flatMap((v) => (v.instances ?? []).map((i) => i.sha256 || i.path)),
  );
  const orphan = newVideos.filter((v) => v.module_ids.length === 0);
  const problems = [];
  if (beforeYt.size !== afterYt.size) problems.push(`YouTube IDs ${beforeYt.size} -> ${afterYt.size}`);
  for (const y of beforeYt) if (!afterYt.has(y)) problems.push(`YouTube ID perdu: ${y}`);
  if (beforeInst.size !== afterInst.size) problems.push(`instances ${beforeInst.size} -> ${afterInst.size}`);
  for (const i of beforeInst) if (!afterInst.has(i)) problems.push(`instance perdue: ${i}`);
  if (beforeSources.size !== afterSources.size)
    problems.push(`sources locales uniques ${beforeSources.size} -> ${afterSources.size}`);
  for (const s of beforeSources) if (!afterSources.has(s)) problems.push(`source locale perdue: ${s}`);
  if (orphan.length) problems.push(`${orphan.length} vidéo(s) sans module: ${orphan.map((v) => v.youtube_video_id).join(", ")}`);
  if (modules.length !== T.length) problems.push(`modules ${modules.length} != ${T.length}`);

  const totalInstances = newVideos.reduce((n, v) => n + (v.instances?.length ?? 0), 0);
  const summary = {
    local_video_instances: totalInstances,
    unique_sources: newVideos.length,
    duplicate_instances_collapsed: totalInstances - afterSources.size,
    url_status_counts: newVideos.reduce((acc, v) => {
      acc[v.url_status] = (acc[v.url_status] ?? 0) + 1;
      return acc;
    }, {}),
  };

  console.log(`Modules : ${modules.length} · vidéos : ${newVideos.length} · YouTube IDs : ${beforeYt.size} -> ${afterYt.size}`);
  console.log(`Sources locales uniques : ${beforeSources.size} -> ${afterSources.size} · instances : ${beforeInst.size} -> ${afterInst.size} · orphelines : ${orphan.length}`);
  console.log(`Upcoming : ${modules.filter((m) => m.status === "upcoming").length} · partial : ${modules.filter((m) => m.status === "partial").length}`);
  console.log("À venir :");
  for (const m of modules.filter((m) => m.status === "upcoming")) console.log(`  - ${m.key}`);
  if (problems.length) {
    console.error("\n❌ INVARIANTS ROMPUS :");
    for (const p of problems) console.error("  -", p);
    process.exit(1);
  }
  if (dryRun) {
    console.log("\n[dry-run] aucun fichier écrit.");
    return;
  }

  const outCatalog = {
    schema_version: 3,
    generated_at: new Date().toISOString(),
    deduplication: {
      method: "youtube_video_id",
      canonical_precedence: ["most_instances", "most_filenames", "lowest_id"],
      scope: "one entry per unique YouTube video; merged instances kept",
    },
    summary,
    modules,
    videos: newVideos.sort((a, b) => a.id - b.id),
  };
  fs.writeFileSync(catalogPath, JSON.stringify(outCatalog, null, 2) + "\n");
  fs.writeFileSync(
    taxonomyPath,
    JSON.stringify(
      {
        schema_version: 1,
        source: "OnlineResourceGuide_06_09_2026.pdf",
        modules: modules.map((m) => ({
          category: m.category,
          subcategory: m.subcategory,
          category_order: m.category_order,
          order: m.order,
          title: m.title,
          key: m.key,
          module_id: m.id,
          status: m.status,
        })),
      },
      null,
      2,
    ) + "\n",
  );

  console.log(`\n✅ ${catalogPath}`);
  console.log(`✅ ${taxonomyPath}`);
}

main();
