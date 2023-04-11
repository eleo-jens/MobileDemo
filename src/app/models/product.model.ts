export interface OFFResult {
  code: string;
  product: Product;
  status: number;
  status_verbose: string;
}

interface Product {
  _id: string;
  _keywords: string[];
  added_countries_tags: any[];
  additives_debug_tags: any[];
  additives_old_tags: any[];
  additives_original_tags: any[];
  additives_prev_original_tags: any[];
  additives_tags: any[];
  allergens: string;
  allergens_from_ingredients: string;
  allergens_from_user: string;
  allergens_hierarchy: any[];
  allergens_lc: string;
  allergens_tags: any[];
  amino_acids_prev_tags: any[];
  amino_acids_tags: any[];
  brands: string;
  brands_tags: string[];
  categories: string;
  categories_hierarchy: string[];
  categories_lc: string;
  categories_old: string;
  categories_properties: Categoriesproperties;
  categories_properties_tags: string[];
  categories_tags: string[];
  category_properties: Categoriesproperties;
  checkers_tags: any[];
  ciqual_food_name_tags: string[];
  cities_tags: any[];
  code: string;
  codes_tags: string[];
  compared_to_category: string;
  complete: number;
  completeness: number;
  correctors_tags: string[];
  countries: string;
  countries_hierarchy: string[];
  countries_lc: string;
  countries_tags: string[];
  created_t: number;
  creator: string;
  data_quality_bugs_tags: any[];
  data_quality_errors_tags: any[];
  data_quality_info_tags: string[];
  data_quality_tags: string[];
  data_quality_warnings_tags: string[];
  data_sources: string;
  data_sources_tags: string[];
  debug_param_sorted_langs: string[];
  ecoscore_data: Ecoscoredata;
  ecoscore_grade: string;
  ecoscore_tags: string[];
  editors_tags: string[];
  emb_codes: string;
  emb_codes_tags: any[];
  entry_dates_tags: string[];
  expiration_date: string;
  food_groups_tags: any[];
  generic_name_fr: string;
  id: string;
  image_front_small_url: string;
  image_front_thumb_url: string;
  image_front_url: string;
  image_ingredients_small_url: string;
  image_ingredients_thumb_url: string;
  image_ingredients_url: string;
  image_nutrition_small_url: string;
  image_nutrition_thumb_url: string;
  image_nutrition_url: string;
  image_small_url: string;
  image_thumb_url: string;
  image_url: string;
  images: Images;
  informers_tags: string[];
  ingredients_debug: any[];
  ingredients_from_palm_oil_tags: any[];
  ingredients_hierarchy: any[];
  ingredients_ids_debug: any[];
  ingredients_text_fr: string;
  ingredients_text_with_allergens: string;
  ingredients_text_with_allergens_fr: string;
  ingredients_that_may_be_from_palm_oil_tags: any[];
  interface_version_created: string;
  interface_version_modified: string;
  labels: string;
  labels_hierarchy: string[];
  labels_lc: string;
  labels_old: string;
  labels_tags: string[];
  lang: string;
  languages: Languages;
  languages_codes: Languagescodes;
  languages_hierarchy: string[];
  languages_tags: string[];
  last_edit_dates_tags: string[];
  last_editor: string;
  last_image_dates_tags: string[];
  last_image_t: number;
  last_modified_by: string;
  last_modified_t: number;
  lc: string;
  link: string;
  main_countries_tags: any[];
  manufacturing_places: string;
  manufacturing_places_tags: any[];
  max_imgid: string;
  minerals_prev_tags: any[];
  minerals_tags: any[];
  misc_tags: string[];
  no_nutrition_data: string;
  nova_group_debug: string;
  nova_group_error: string;
  nova_groups_tags: string[];
  nucleotides_prev_tags: any[];
  nucleotides_tags: any[];
  nutrient_levels: Nutrientlevels;
  nutrient_levels_tags: string[];
  nutriments: Nutriments;
  nutriscore_data: Nutriscoredata;
  nutriscore_grade: string;
  nutriscore_score: number;
  nutriscore_score_opposite: number;
  nutrition_data: string;
  nutrition_data_per: string;
  nutrition_data_prepared: string;
  nutrition_data_prepared_per: string;
  nutrition_grade_fr: string;
  nutrition_grades: string;
  nutrition_grades_tags: string[];
  nutrition_score_beverage: number;
  nutrition_score_debug: string;
  nutrition_score_warning_no_fiber: number;
  nutrition_score_warning_no_fruits_vegetables_nuts: number;
  origins: string;
  origins_hierarchy: any[];
  origins_lc: string;
  origins_tags: any[];
  other_nutritional_substances_tags: any[];
  packaging: string;
  packaging_hierarchy: any[];
  packaging_lc: string;
  packaging_old: string;
  packaging_tags: any[];
  packaging_text_fr: string;
  packagings: any[];
  photographers_tags: string[];
  pnns_groups_1: string;
  pnns_groups_1_tags: string[];
  pnns_groups_2: string;
  pnns_groups_2_tags: string[];
  popularity_key: number;
  popularity_tags: string[];
  product_name: string;
  product_name_fr: string;
  purchase_places: string;
  purchase_places_tags: any[];
  quantity: string;
  removed_countries_tags: any[];
  rev: number;
  scans_n: number;
  selected_images: Selectedimages;
  sortkey: number;
  states: string;
  states_hierarchy: string[];
  states_tags: string[];
  stores: string;
  stores_tags: any[];
  traces: string;
  traces_from_ingredients: string;
  traces_from_user: string;
  traces_hierarchy: any[];
  traces_lc: string;
  traces_tags: any[];
  unique_scans_n: number;
  unknown_nutrients_tags: any[];
  update_key: string;
  vitamins_prev_tags: any[];
  vitamins_tags: any[];
}

interface Selectedimages {
  front: Front;
  ingredients: Front;
  nutrition: Front;
}

interface Front {
  display: Display;
  small: Display;
  thumb: Display;
}

interface Display {
  fr: string;
}

interface Nutriscoredata {
  energy: number;
  energy_points: number;
  energy_value: number;
  fiber: number;
  fiber_points: number;
  fiber_value: number;
  fruits_vegetables_nuts_colza_walnut_olive_oils: number;
  fruits_vegetables_nuts_colza_walnut_olive_oils_points: number;
  fruits_vegetables_nuts_colza_walnut_olive_oils_value: number;
  grade: string;
  is_beverage: number;
  is_cheese: number;
  is_fat: number;
  is_water: number;
  negative_points: number;
  positive_points: number;
  proteins: number;
  proteins_points: number;
  proteins_value: number;
  saturated_fat: number;
  saturated_fat_points: number;
  saturated_fat_ratio: number;
  saturated_fat_ratio_points: number;
  saturated_fat_ratio_value: number;
  saturated_fat_value: number;
  score: number;
  sodium: number;
  sodium_points: number;
  sodium_value: number;
  sugars: number;
  sugars_points: number;
  sugars_value: number;
}

interface Nutriments {
  carbohydrates: number;
  carbohydrates_100g: number;
  carbohydrates_unit: string;
  carbohydrates_value: number;
  energy: number;
  'energy-kcal': number;
  'energy-kcal_100g': number;
  'energy-kcal_unit': string;
  'energy-kcal_value': number;
  'energy-kcal_value_computed': number;
  energy_100g: number;
  energy_unit: string;
  energy_value: number;
  fat: number;
  fat_100g: number;
  fat_unit: string;
  fat_value: number;
  'nutrition-score-fr': number;
  'nutrition-score-fr_100g': number;
  proteins: number;
  proteins_100g: number;
  proteins_unit: string;
  proteins_value: number;
  salt: number;
  salt_100g: number;
  salt_unit: string;
  salt_value: number;
  'saturated-fat': number;
  'saturated-fat_100g': number;
  'saturated-fat_unit': string;
  'saturated-fat_value': number;
  sodium: number;
  sodium_100g: number;
  sodium_unit: string;
  sodium_value: number;
  sugars: number;
  sugars_100g: number;
  sugars_unit: string;
  sugars_value: number;
}

interface Nutrientlevels {
  fat: string;
  salt: string;
  'saturated-fat': string;
  sugars: string;
}

interface Languagescodes {
  fr: number;
}

interface Languages {
  'en:french': number;
}

interface Images {
  '1': _1;
  '2': _1;
  '3': _1;
  '4': _1;
  '5': _1;
  front_fr: Frontfr;
  ingredients_fr: Ingredientsfr;
  nutrition_fr: Frontfr;
}

interface Ingredientsfr {
  angle?: any;
  geometry: string;
  imgid: string;
  normalize: string;
  ocr: number;
  orientation: string;
  rev: string;
  sizes: Sizes2;
  white_magic: string;
  x1?: any;
  x2?: any;
  y1?: any;
  y2?: any;
}

interface Frontfr {
  angle: number;
  coordinates_image_size: string;
  geometry: string;
  imgid: string;
  normalize?: any;
  rev: string;
  sizes: Sizes2;
  white_magic?: any;
  x1: string;
  x2: string;
  y1: string;
  y2: string;
}

interface Sizes2 {
  '100': _100;
  '200': _100;
  '400': _100;
  full: _100;
}

interface _1 {
  sizes: Sizes;
  uploaded_t: number;
  uploader: string;
}

interface Sizes {
  '100': _100;
  '400': _100;
  full: _100;
}

interface _100 {
  h: number;
  w: number;
}

interface Ecoscoredata {
  adjustments: Adjustments;
  agribalyse: Threatenedspecies;
  missing: Missing;
  missing_agribalyse_match_warning: number;
  missing_key_data: number;
  scores: Categoriesproperties;
  status: string;
}

interface Missing {
  agb_category: number;
  ingredients: number;
  labels: number;
  origins: number;
  packagings: number;
}

interface Adjustments {
  origins_of_ingredients: Originsofingredients;
  packaging: Packaging;
  production_system: Productionsystem;
  threatened_species: Threatenedspecies;
}

interface Threatenedspecies {
  warning: string;
}

interface Productionsystem {
  labels: any[];
  value: number;
  warning: string;
}

interface Packaging {
  non_recyclable_and_non_biodegradable_materials: number;
  value: number;
  warning: string;
}

interface Originsofingredients {
  aggregated_origins: Aggregatedorigin[];
  epi_score: number;
  epi_value: number;
  origins_from_origins_field: string[];
  transportation_score: number;
  transportation_scores: Transportationscores;
  transportation_value: number;
  transportation_values: Transportationscores;
  value: number;
  values: Transportationscores;
  warning: string;
}

interface Transportationscores {
  ad: number;
  al: number;
  at: number;
  ax: number;
  ba: number;
  be: number;
  bg: number;
  ch: number;
  cy: number;
  cz: number;
  de: number;
  dk: number;
  dz: number;
  ee: number;
  eg: number;
  es: number;
  fi: number;
  fo: number;
  fr: number;
  gg: number;
  gi: number;
  gr: number;
  hr: number;
  hu: number;
  ie: number;
  il: number;
  im: number;
  is: number;
  it: number;
  je: number;
  lb: number;
  li: number;
  lt: number;
  lu: number;
  lv: number;
  ly: number;
  ma: number;
  mc: number;
  md: number;
  me: number;
  mk: number;
  mt: number;
  nl: number;
  no: number;
  pl: number;
  ps: number;
  pt: number;
  ro: number;
  rs: number;
  se: number;
  si: number;
  sj: number;
  sk: number;
  sm: number;
  sy: number;
  tn: number;
  tr: number;
  ua: number;
  uk: number;
  us: number;
  va: number;
  world: number;
  xk: number;
}

interface Aggregatedorigin {
  epi_score: string;
  origin: string;
  percent: number;
  transportation_score?: any;
}

interface Categoriesproperties {
}