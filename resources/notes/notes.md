# Remote Sensing Course Notes

## Core Curriculum

Notes in this section follow the four-phase core curriculum. Each module is summarized separately when its transcript is available.

### Phase 1 - Foundations

#### Fundamentals of Remote Sensing

##### Part 1 - Fundamentals of Aquatic Remote Sensing

**Why observe water from space?**

- Satellite observations provide synoptic coverage over large or inaccessible water bodies, frequent revisits for dynamic processes, and measurements beyond what ships or moorings can collect alone.
- Global chlorophyll time series reveal seasonal phytoplankton patterns. They support estimates of phytoplankton carbon uptake and improve understanding of the global carbon budget.
- Imagery can reveal sediment, coloured dissolved organic matter (CDOM), nutrient patterns, algae, and other information relevant to aquatic biogeochemistry.

**Light and aquatic optics**

- Aquatic optical remote sensing mainly uses **visible light** (about 400-700 nm) and thermal radiation for sea-surface temperature. Near-, mid-, and shortwave-infrared radiation is strongly absorbed by water and has limited use for water-colour retrievals.
- Sunlight passes through the atmosphere and may reflect from the water surface or enter the water column. It can be absorbed by water, phytoplankton, non-algal particles, or CDOM, or scattered forward and backward.
- Backscattered light that leaves the water can be measured by airborne or satellite sensors.
- **Remote-sensing reflectance (Rrs)** links the water-leaving radiance to downwelling irradiance. It is controlled by absorption and backscattering and is the core quantity used by ocean-colour algorithms.

**Interpreting water colour**

- Water constituents have distinct reflectance spectra:
  - **CDOM:** dark water because it absorbs strongly and backscatters weakly.
  - **Suspended sediment:** brighter, often light-brown water with higher reflectance.
  - **Phytoplankton/chlorophyll:** relatively stronger green reflectance, notably around 550 nm.
- Water is a dark target with a weak visible signal compared with land. Aquatic instruments must be sensitive and well calibrated, and atmospheric correction must be applied carefully.
- Satellite sensors can measure more and narrower spectral bands than the broad blue, green, and red ranges perceived by the human eye.

**Resolution and sensor types**

- **Spatial resolution:** ground area represented by a pixel. Landsat imagery is typically about 30 m, with some 15 m panchromatic data.
- **Temporal resolution:** revisit frequency. Landsat revisits roughly every 16 days, while MODIS can observe near-daily.
- **Spectral resolution:** number and width of observed wavelength bands. The course contrasts MODIS's 36 bands with Landsat 8's approximately 9 bands.
- The course focuses on **passive sensors**, which observe reflected solar radiation or emitted thermal radiation. Active systems such as lidar can support aquatic studies but are outside its scope.

**Aquatic products and applications**

- Satellite products include chlorophyll-a, turbidity, CDOM, suspended sediments, inherent optical properties, sea-surface temperature, and, with other inputs, surface winds and salinity.
- **Chlorophyll-a** is an optically active proxy for near-surface phytoplankton biomass. Algorithms generally use ratios of Rrs at selected wavelengths and must be appropriate for both the sensor and the water type.
- Satellite chlorophyll retrievals are validated against in-situ measurements acquired close to the satellite overpass. An incorrect atmospheric correction produces incorrect chlorophyll, CDOM, and sediment estimates.
- Sea-surface temperature supports analysis of the ocean heat budget, currents, circulation, and primary productivity. The Gulf Stream and its eddies illustrate these applications.

**Aquatic platforms and sensors**

- **Landsat:** long-term imagery since 1972, typically 30 m spatial resolution and a 16-day revisit. Its fine spatial detail supports coastal and inland-water studies; Landsat 8's coastal band improves retrievals of water constituents.
- **MODIS on Terra and Aqua:** global, near-daily coverage; Terra observes in the morning and Aqua in the afternoon. It supports land, ocean, atmosphere, and cryosphere studies at 250 m to 1 km, depending on the product.
- **VIIRS on Suomi NPP:** provides near-daily global observations for ocean colour, clouds, aerosols, temperature, fires, and albedo.
- **HICO:** a hyperspectral coastal-ocean sensor that operated from the International Space Station between 2009 and 2014. Its archive supports hyperspectral algorithm development.
- **PACE:** presented in the course as a planned hyperspectral ocean-colour mission, intended to improve visible spectral detail and atmospheric correction.

**Atmospheric correction and processing levels**

- Atmospheric gases, aerosols, water vapour, and particles modify the signal measured by a sensor. The course estimates that about 90% of measured reflectance may come from the atmosphere, leaving a small water signal to retrieve.
- Atmospheric-correction algorithms remove atmospheric and surface-reflection effects to estimate water-leaving radiance or surface reflectance.
- Field spectroradiometers measure water-leaving radiance and downwelling irradiance from boats or docks. These field measurements provide the reference for calibration and validation.
- Satellite processing levels progress from raw data to increasingly derived products:
  - **Level 0:** raw instrument data.
  - **Level 1A:** reconstructed and annotated data with calibration and geolocation information attached.
  - **Level 1B:** instrument and radiometric calibration applied.
  - **Level 2:** geophysical variables at source resolution, such as chlorophyll or sea-surface temperature.
  - **Level 3:** variables aggregated or projected to defined spatial grids and time periods.
  - **Level 4:** model output or analyses derived from lower-level products.
- Lower levels provide more processing control but require more technical expertise.

**Data access and processing tools**

- **NASA Worldview** supports interactive browsing and download of near-real-time global imagery and products.
- **NASA Ocean Color Web** provides Level 1 and 2 data from sensors such as MODIS, VIIRS, and HICO.
- Other data-access resources mentioned include NOAA CoastWatch, NASA Giovanni, and USGS EarthExplorer.
- **SeaDAS** is NASA's free software for processing, visualising, analysing, and quality-controlling ocean-colour data.
- The Ocean Biology Processing Group, the Ocean Optics Web Book, and IOCCG lecture material are recommended resources for further learning.

##### Part 2 - Satellites, Data, and Tools for Land Management and Wildfires

**MODIS and VIIRS**

- **MODIS** operates on Terra and Aqua, observing the same place at different times of day. It has 36 visible-to-infrared bands, 250 m to 1 km spatial resolution, and daily, 8-day, 16-day, monthly, and annual products.
- MODIS product names encode the platform, parameter, temporal resolution, processing level, spatial resolution, projection, and file type:
  - `MOD` identifies Terra products.
  - `MYD` identifies Aqua products.
  - `MCD` identifies combined Terra and Aqua products.
- Important land products include surface reflectance, vegetation indices, land cover and land-cover change, leaf-area index, and primary production.
- MODIS data are available through resources including LP DAAC, EOSDIS, FIRMS, Worldview, SERVIR, and MRTWeb. MRTWeb can visualise, subset, mosaic, reproject, and reformat MODIS products.
- **VIIRS** is a visible-to-infrared instrument on Suomi NPP. It has 22 bands, approximately 375-750 m spatial resolution, and daily to annual composite products.
- VIIRS near-infrared bands are useful for wildfire applications. Its products support active-fire detection, albedo, land-surface temperature, and vegetation indices.
- MODIS and VIIRS products are not interchangeable: their spectral and spatial properties, algorithms, processing, availability, and georegistration differ.

**Landsat and spectral interpretation**

- Landsat provides a long land-observation record dating to the early 1970s. Older MSS imagery is about 79 m, whereas current multispectral imagery is mainly 30 m and panchromatic imagery is 15 m.
- Standard Landsat bands cover blue, green, red, near infrared (NIR), shortwave infrared (SWIR), thermal infrared, and panchromatic wavelengths.
- Landsat 8 added a coastal/aerosol band, a cirrus band for cloud detection, and two thermal bands. Its bands are similar to, but not identical with, Landsat 7 bands; methods cannot be transferred uncritically between sensors.
- Atmospheric windows are wavelength ranges that can pass through the atmosphere to a sensor. Sensor selection must consider these ranges and the target application.
- The course names LandsatLook Viewer, GLOVIS, Global Land Cover Facility, EarthExplorer, WELD, Landsat Global Archive, and Global Land Survey as data resources.

**Land-cover mapping**

- Image classification converts multispectral pixel values into thematic land-cover information using spectral signatures.
- Typical signatures are:
  - Water has low red and NIR reflectance.
  - Healthy vegetation has low red reflectance and high NIR reflectance.
  - Dry soil generally has intermediate reflectance, often increasing towards SWIR wavelengths.
- Both supervised and unsupervised classification can group pixels into land-cover classes.
- Vegetation types can be difficult to distinguish with multispectral imagery alone. Hyperspectral data, field spectra, and ancillary information such as elevation, slope, aspect, soil, or ecological context can improve classification.
- Examples of precomputed land-cover resources include NLCD, the GAP Analysis Program, LANDFIRE, FAO global land-cover data, and annual MODIS land-cover products.

**Fire detection and mapping**

- MODIS Thermal Anomalies and Fire products detect active fires and burned areas using mid-infrared thermal anomalies. FIRMS distributes near-real-time hotspot maps, historical data, downloads, visualisation, and alerts.
- The MODIS burned-area product uses daily surface reflectance and change detection to estimate approximate burn date and burn extent in monthly 500 m grids.
- VIIRS active-fire products provide near-real-time thermal hotspot locations, complementing MODIS fire observations.

**Land-cover change detection**

- Remote sensing can identify where and when change happened, its magnitude, its type, and trends or cycles through time.
- Common methods are manual heads-up digitising, same-band image subtraction, post-classification comparison, and multi-date time-series analysis.
- Image subtraction requires precise coregistration. Post-classification comparison maps each date independently, then compares pixel classes.
- Time series can detect both short-lived events and long-term trends. The course cites LandTrendr as an example that can estimate disturbance magnitude, duration, and onset year.
- Software detects numerical differences, but analysts need contextual and field knowledge to explain the cause of change.

**Vegetation indices and phenology**

- **NDVI** measures the contrast between strong NIR reflection and red-light absorption by green vegetation: `NDVI = (NIR - Red) / (NIR + Red)`.
- NDVI ranges from -1 to 1. Values near or below zero usually indicate little or no vegetation, while high positive values indicate dense green foliage.
- Vegetation phenology is the annual cycle of greenness: low in winter, rising during spring green-up, peaking in summer, and declining during senescence in temperate regions.
- NDVI anomalies support drought and vegetation-condition monitoring. Applications include ecosystem monitoring and locating green vegetation relevant to desert-locust surveillance.
- **EVI** is designed to reduce atmospheric effects and retain sensitivity in high-biomass areas where NDVI can saturate. It is more responsive to canopy structure, leaf-area index, and canopy type.
- MODIS NDVI and EVI products are available as composite products at several spatial resolutions.

**Good practice**

- Select a sensor and product based on the scientific question, spatial, temporal, and spectral resolution, processing level, and target environment.
- Validate quantitative products with field data whenever possible.
- Do not assume that similarly named bands, products, or algorithms from different missions are equivalent.

### Phase 2 - General Core

#### Fundamentals of Machine Learning

##### Part 1 - Foundations, Methods, and Earth Science Applications

**Machine learning basics**

- Machine learning (ML) learns a relationship between input **features** and an output **target** from data, rather than relying only on explicitly programmed rules.
- During training, the model optimizes its parameters to map features to targets. It is then evaluated on unseen test data and refined if performance is insufficient.
- A basic workflow is: define the scientific problem, collect data, preprocess and explore it, train a model, test it, review the results, and iterate.
- Data quality, quantity, and representativeness strongly determine prediction quality. Preprocessing often takes most of the work.

**Main learning paradigms**

- **Supervised learning** uses labeled examples.
  - **Classification** predicts categories, such as water versus land or land-cover class.
  - **Regression** predicts continuous values, such as temperature, canopy height, lake depth, or crop yield.
- **Unsupervised learning** uses unlabeled data to identify natural structure, clusters, patterns, or trends.
- **Reinforcement learning** improves actions through trial and error with a reward system; it is less common in Earth-science applications.

**Why ML is useful for Earth science**

- Earth-observation data are massive, multisource, heterogeneous, multitemporal, high-dimensional, complex, and often non-stationary.
- ML can automate processing at scale, detect objects and relationships that are difficult to identify manually, fill observational gaps, and accelerate scientific analysis.
- Typical applications include land-use/land-cover classification, water mapping, precipitation and soil-moisture estimation, crop-type and yield prediction, cloud-process representation, downscaling, flux estimation, ocean modelling, and tropical-cyclone intensity estimation.
- Data-driven models learn statistical relationships from observations, whereas physical models explicitly encode causal knowledge. Hybrid approaches can combine physical constraints or simulations with ML.

**Methods introduced**

- **K-means clustering:** an unsupervised method that assigns samples to a chosen number of clusters around centroids. It is useful for exploratory segmentation or preliminary labels, but clusters are not ground truth.
- **Random Forest (RF):** an ensemble of decision trees trained on bootstrapped samples. It combines tree outputs by voting for classification or averaging for regression.
- **Gradient boosting / XGBoost:** builds trees sequentially, focusing on errors made by earlier trees. Regularization helps reduce overfitting.
- **Neural networks:** learn complex representations through forward propagation and backpropagation; they usually require more data and computing resources.
- **Convolutional neural networks (CNNs):** use spectral and neighbouring-pixel information, making them useful for imagery where spatial context matters, such as tree-crown or high-resolution land-cover mapping.
- **Transformers:** attention-based models that can also capture spatial relationships in imagery.

**Choosing a method**

- Begin with the scientific question and target type, not with a preferred algorithm.
- Consider label availability and quality, class balance, spatial context, feature dimensionality, interpretability, inference speed, computing resources, and deployment constraints.
- Complex models are not automatically better. In high-consequence applications, the cost of false positives and false negatives and the need for explainability are critical.

**Tools and practical considerations**

- Python is the primary language used in the course because it is readable, cross-platform, and supported by a large ecosystem. R is also common for statistical analysis; Java and Julia have specialised uses.
- Key Python tools include scikit-learn for conventional ML, TensorFlow/Keras and PyTorch for deep learning, and XGBoost for gradient boosting.
- Jupyter notebooks and Google Colab support reproducible, interactive workflows. GPUs are especially valuable for highly parallel workloads such as neural-network training.
- Raster data can be converted into a pixel-by-feature table for tabular models, then reshaped back into a raster prediction map.

**Examples and cautions**

- A Burkina Faso case study combined Sentinel-2 and in-situ observations with Random Forest models to estimate crop types and yields, illustrating the usefulness of ML where observations are sparse.
- Training labels and predictors must be accurate and representative. Biased, noisy, or unrepresentative data can produce misleading predictions, especially when applied beyond the training area or period.
- ML predictions are not physical truth. Domain knowledge and independent validation remain necessary.

##### Part 2 - Training Data, Exploratory Analysis, and Water Classification

**MODIS water-mapping case study**

- The course uses MODIS surface-reflectance data to build a global water mask at 250 m resolution.
- Water masking is important because land-retrieval algorithms can produce errors when applied to water pixels.
- The workflow includes data subsetting, quality assurance (QA), removal of missing or poor-quality observations, feature construction, model training, parameter tuning, and annual or daily map production.

**Exploratory data analysis (EDA)**

- Inspect data types, ranges, null values, duplicates, outliers, distributions, class balance, correlations, and physical plausibility before modelling.
- Missing values may be removed, meaningfully imputed, or retained as gaps. A fill value such as `-999` must never be treated as a genuine predictor measurement.
- Histograms, density plots, box plots, scatter plots, and correlation heatmaps help reveal distributions, class separability, outliers, and relationships.
- Tukey's rule identifies potential outliers below `Q1 - 1.5 x IQR` or above `Q3 + 1.5 x IQR`. Spatial or skewed data can require methods such as Isolation Forest or Local Outlier Factor.
- Correlation does not prove causation. Strongly correlated predictors can complicate interpretation, but correlated spectral bands may still contain useful nonlinear or domain-specific information.

**Features and dimensionality**

- The example combines MODIS reflectance bands with derived indices: **NDVI**, **NDWI-1**, and **NDWI-2**.
- Feature engineering, such as polynomial features, can improve a model but increases dimensionality and complexity.
- **Principal Component Analysis (PCA)** reduces dimensionality by representing variation with principal components.
- CNNs can reduce the need for manual feature engineering because they learn spatial and spectral patterns directly from imagery.

**Training and validation**

- Separate predictors `X` from labels `y` and reserve an independent test set.
- An 80/20 train-test split is used in the demonstration. Stratification preserves class proportions, while a fixed random state supports reproducibility.
- Use K-fold cross-validation on training data to compare models and estimate robustness before the final independent test.
- A high score on a small or easy split does not guarantee spatial, seasonal, or temporal transferability.

**Evaluation and map production**

- Assess more than overall accuracy:
  - **Precision:** proportion of predicted positives that are correct.
  - **Recall:** proportion of actual positives detected by the model.
  - **F1 score:** harmonic mean of precision and recall.
  - **Confusion matrix:** counts true and false positives and negatives.
  - **ROC/AUC:** evaluates discrimination across classification thresholds.
- Class probabilities from `predict_proba` provide a useful uncertainty or QA layer. Values near 0.5 in a binary classifier indicate low confidence.
- For raster inference: stack input bands, recreate the training features, convert pixels to a table, predict class and probability, reshape results into rasters, apply QA/no-data masks, and inspect the spatial output.
- Visual inspection is essential: strong tabular metrics can conceal systematic spatial errors.

**Scaling and quality considerations**

- MODIS tiled products reduce but do not eliminate viewing-geometry issues such as the bow-tie effect; poor viewing-angle pixels should be excluded where appropriate.
- Large rasters can exceed memory. Use chunked processing, spatial tiles, parallel computing, and tools such as Dask or Xarray when needed.
- Sampling can make EDA more efficient, but samples must remain representative of the target data.

##### Part 3 - Optimisation, Explainability, and AutoML

**Hyperparameter optimisation**

- Hyperparameters are set before training and control model structure or convergence. Examples include the number and depth of trees in RF, or learning rate, depth, and regularisation in XGBoost.
- Define the objective before tuning: maximise an appropriate metric or minimise decision-relevant false positives or false negatives.
- Main approaches are manual tuning, grid search, random search, and Bayesian optimisation.
- Tune models using cross-validation and keep a separate test set untouched until final evaluation. Broad searches and repeated folds can be computationally expensive.
- The course uses Optuna to explore Random Forest parameters such as number of estimators, maximum depth, minimum split size, and minimum leaf size.
- Inspect the search history and performance plateaus rather than assuming that a marginally higher score produces a better operational model.

**Explainable AI (XAI)**

- Accuracy alone is insufficient for decision support. Complex models can be accurate but opaque, while simple models are easier to interpret but may be less flexible.
- A robust model should retain useful performance when inputs contain realistic acquisition, retrieval, or processing errors.
- **SHAP** uses Shapley values to quantify how each feature contributes to a prediction. Use global summaries to assess overall importance and local explanations to understand individual pixels or samples.
- **LIME** fits a simple local approximation around one prediction; it explains a neighbourhood of the decision boundary, not the entire model.
- Attention maps can show which regions or features a transformer focused on.
- Do not remove a feature solely because it appears unimportant in a small number of local explanations. Feature correlations and local context can alter apparent importance.

**Automated machine learning (AutoML)**

- AutoML can automatically compare models, tune hyperparameters, and build ensembles. The course demonstrates auto-sklearn.
- It can test methods such as Random Forest, gradient boosting, tree models, multilayer perceptrons, passive-aggressive classifiers, and stochastic-gradient-descent models.
- Set total and per-run time budgets, then inspect the candidate models, ensemble weights, model costs, and validation history.
- AutoML is not a substitute for scientific judgement. Similar accuracy can hide different spatial map quality, transferability, uncertainty, or inference-time costs.
- An ensemble may equal or improve accuracy but take much longer to apply over large rasters than a simpler model.

**Final good practices**

- Validate final maps with independent data and visual, spatially explicit checks.
- Test performance across locations, years, seasons, sensor conditions, and difficult cases. Add representative labels where errors reveal data gaps.
- Document data limitations, label bias, model assumptions, uncertainty, and the consequences of incorrect predictions.
- Interpret water-mask time series alongside relevant variables such as precipitation, soil moisture, and elevation; do not make causal claims from a single model output.
- ML supports scientific reasoning but does not replace domain knowledge, quality assurance, or responsible decision-making.

#### Spectral Indices (Land and Water)

- Notes pending.

#### Google Earth Engine (Land Monitoring)

- Notes pending.

#### Introduction to SAR

- Notes pending.

#### Satellite Drought Monitoring

- Notes pending.

#### ECOSTRESS

- Notes pending.

### Phase 3 - Water and Quality Specialisation

- **Agricultural Water Management** - Notes pending.
- **Remote Sensing for Water-Quality Monitoring** - Notes pending.
- **Image Processing for Water Quality** - Notes pending.
- **Water Quality with STREAM** - Notes pending.
- **Cyanobacteria and Algal Blooms** - Notes pending.
- **Aquatic Vegetation by Satellite** - Notes pending.
- **Blue-Carbon Ecosystems** - Notes pending.

### Phase 4 - Broader Applications

- **Disaster Risk Management** - Notes pending.
- **Urban Heat Islands** - Notes pending.
- **Satellite-Based Wildfire Monitoring** - Notes pending.

## Complementary Modules

Complementary modules are kept separate from the core curriculum and will also be documented module by module when transcripts are available.

### Agriculture

- Notes pending.

### Air Quality

- Notes pending.

### Climate

- Notes pending.

### Disasters

- Notes pending.

### Ecology and Conservation

- Notes pending.

### Health

- Notes pending.

### Self-Training

- Notes pending.

### Skills

- Notes pending.

### Water Resources

- Notes pending.

### Wildfires

- Notes pending.
