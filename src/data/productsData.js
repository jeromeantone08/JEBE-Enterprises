/**
 * Wholesale Product Catalog Data — Loaded directly from User's Folders
 * Exclusively 2 Core Collections:
 * 1. Fluted Panels (from "/Fluted Panel/*.jpeg")
 * 2. UV Sheets (from "/UV/*.jpeg")
 */

// Dynamically load all actual images from user's project folders
const flutedModules = import.meta.glob('/Fluted Panel/*.{jpeg,jpg,png}', { eager: true, import: 'default' });
const uvModules = import.meta.glob('/UV/*.{jpeg,jpg,png}', { eager: true, import: 'default' });
const budgetModules = import.meta.glob('/Budget PVC Panels/*.{jpeg,jpg,png}', { eager: true, import: 'default' });
const soffitModules = import.meta.glob('/Soffit Panels/*.{jpeg,jpg,png}', { eager: true, import: 'default' });
const wpcModules = import.meta.glob('/WPC/*.{jpeg,jpg,png}', { eager: true, import: 'default' });
const accessoryModules = import.meta.glob('/Accessories/*.{jpeg,jpg,png}', { eager: true, import: 'default' });

export const flutedImagesList = Object.values(flutedModules);
export const uvImagesList = Object.values(uvModules);
export const budgetImagesList = Object.values(budgetModules);
export const soffitImagesList = Object.values(soffitModules);
export const wpcImagesList = Object.values(wpcModules);
export const accessoryImagesList = Object.values(accessoryModules);

export const PRODUCT_CATEGORIES = [
  { 
    id: "fluted", 
    name: "Fluted Panels", 
    tagline: "Interior Fluted Wall Louvers & Slats",
    desc: "Actual stock collection of vertical fluted wall panels in 2900mm (9.5ft) lengths. Seamless tongue-and-groove interlocking for living room feature walls, TV units, and hotel lobbies.",
    count: flutedImagesList.length,
    bannerImage: flutedImagesList[0] || "",
  },
  { 
    id: "uv-sheet", 
    name: "UV Sheets", 
    tagline: "High-Gloss 8ft x 4ft UV Marble & Decorative Sheets",
    desc: "Actual stock collection of large-format 8x4 UV marble and stone composite sheets with crystal scratch-resistant UV coating for feature walls and TV backdrops.",
    count: uvImagesList.length,
    bannerImage: uvImagesList[0] || "",
  },
  { 
    id: "budget-pvc", 
    name: "Budget PVC Panels", 
    tagline: "10ft (H) x 1ft (W) Interior PVC Ceiling Panels",
    desc: "Budget-friendly 10ft height x 1ft width (12 Inch) PVC ceiling panel collection. Recommended exclusively for ceiling applications. Supplied strictly in wholesale packaging of 10 pieces per box.",
    count: budgetImagesList.length,
    bannerImage: budgetImagesList[0] || "",
  },
  { 
    id: "soffit-panel", 
    name: "Soffit Panels", 
    tagline: "Axora Premium Wall & Ceiling Soffit Systems",
    desc: "Innovative wall and ceiling soffit systems combining realistic wood finishes with industrial-grade durability. Standard 300mm width in 10ft and 13ft lengths.",
    count: soffitImagesList.length,
    bannerImage: soffitImagesList[1] || soffitImagesList[0] || "",
  },
  { 
    id: "wpc-louvers", 
    name: "Louvers", 
    tagline: "Heavy-Duty WPC Fluted Louvers",
    desc: "Architectural Wood-Plastic Composite fluted louvers in 4-Line (24mm thickness) and 8-Line (17mm thickness) profiles. 6 Inch width x 9.5 Feet height.",
    count: wpcImagesList.length,
    bannerImage: wpcImagesList[0] || "",
  },
  { 
    id: "accessories", 
    name: "Accessories", 
    tagline: "Installation Clamps, MS Polymer Adhesive & Trims",
    desc: "Wholesale hardware accessories for professional panel installation: Heavy-Duty Panel Adhesive, Concealed Fastening Clamps, H Trims, L Trims, and U Trims.",
    count: accessoryImagesList.length || 5,
    bannerImage: accessoryImagesList[0] || "",
  },
];

// Helper to extract file basename from glob path
function getFileName(filePath) {
  const raw = filePath.split('/').pop() || '';
  try {
    return decodeURIComponent(raw);
  } catch {
    return raw;
  }
}

// Exact model codes identified from each actual product image
const FLUTED_CODE_MAP = {
  'WhatsApp Image 2026-09-04 at 3.10.28 PM.jpeg': '320SL',
  'WhatsApp Image 2026-09-04 at 3.10.29 PM (1).jpeg': '340GL',
  'WhatsApp Image 2026-09-04 at 3.10.29 PM (2).jpeg': '320GL',
  'WhatsApp Image 2026-09-04 at 3.10.29 PM.jpeg': '337',
  'WhatsApp Image 2026-09-04 at 3.10.30 PM (1).jpeg': '336GL',
  'WhatsApp Image 2026-09-04 at 3.10.30 PM.jpeg': '333GL',
  'WhatsApp Image 2026-09-04 at 3.10.31 PM (1).jpeg': '323GL',
  'WhatsApp Image 2026-09-04 at 3.10.31 PM (2).jpeg': '326GL',
  'WhatsApp Image 2026-09-04 at 3.10.31 PM.jpeg': '331SL',
  'WhatsApp Image 2026-09-04 at 3.10.32 PM (1).jpeg': '303GL',
  'WhatsApp Image 2026-09-04 at 3.10.32 PM.jpeg': '328GL',
  'WhatsApp Image 2026-09-04 at 3.10.33 PM (1).jpeg': '324',
  'WhatsApp Image 2026-09-04 at 3.10.33 PM (2).jpeg': '326',
  'WhatsApp Image 2026-09-04 at 3.10.33 PM.jpeg': '325',
  'WhatsApp Image 2026-09-04 at 3.10.34 PM (1).jpeg': '309',
  'WhatsApp Image 2026-09-04 at 3.10.34 PM (2).jpeg': '322',
  'WhatsApp Image 2026-09-04 at 3.10.34 PM.jpeg': '317',
  'WhatsApp Image 2026-09-04 at 3.10.35 PM (1).jpeg': '313',
  'WhatsApp Image 2026-09-04 at 3.10.35 PM.jpeg': '312',
  'WhatsApp Image 2026-09-04 at 3.10.36 PM (1).jpeg': '305',
  'WhatsApp Image 2026-09-04 at 3.10.36 PM (2).jpeg': '304',
  'WhatsApp Image 2026-09-04 at 3.10.36 PM.jpeg': '315',
  'WhatsApp Image 2026-09-04 at 3.10.37 PM (1).jpeg': '303',
  'WhatsApp Image 2026-09-04 at 3.10.37 PM.jpeg': '335GL',
  'WhatsApp Image 2026-09-04 at 3.10.38 PM.jpeg': '312GL',
};

const UV_CODE_MAP = {
  'WhatsApp Image 2026-09-04 at 3.10.38 PM (1).jpeg': '3D-01',
  'WhatsApp Image 2026-09-04 at 3.10.38 PM (2).jpeg': '3D-04',
  'WhatsApp Image 2026-09-04 at 3.10.39 PM (1).jpeg': '3D-06',
  'WhatsApp Image 2026-09-04 at 3.10.39 PM (2).jpeg': '3D-07',
  'WhatsApp Image 2026-09-04 at 3.10.39 PM.jpeg': '3D-03',
  'WhatsApp Image 2026-09-04 at 3.10.40 PM (1).jpeg': '3D-05',
  'WhatsApp Image 2026-09-04 at 3.10.40 PM.jpeg': '3D-02',
};

// Build catalog items strictly from actual Fluted Panel photos currently in the folder
const flutedProducts = Object.entries(flutedModules).map(([filePath, imgUrl], index) => {
  const fileName = getFileName(filePath);
  const code = FLUTED_CODE_MAP[fileName] || `FP-${index + 1}`;
  const slugId = `fluted-${code.toLowerCase().replace(/[^a-z0-9]/g, '-')}`;

  return {
    id: slugId,
    code: code,
    name: code,
    category: "fluted",
    categoryLabel: "Fluted Panels",
    tagline: `10ft (H) x 1ft (W) Fluted Wall Panel • Model ${code}`,
    shortDesc: `Model ${code} fluted wall panel. Dimensions: 10ft (H) x 1ft (W). Box packaging: 10 pieces per box.`,
    fullDesc: `Panel ${code} is from our wholesale inventory at JEBE ENTERPRISES. Manufactured in 10ft height x 1ft width dimensions with a precision tongue-and-groove interlocking system. Supplied strictly in wholesale cartons of 10 pieces per box for contractors, retailers, and architects.`,
    featured: index < 6,
    dimensions: "10ft (H) x 1ft (W)",
    material: "High-Density Co-Extruded Polymer Composite",
    fireRating: "Class B1 Flame Retardant (EN 13501-1)",
    waterResistance: "100% Moisture Proof & Termite Proof",
    weight: "2.4 kg per plank",
    boxPacking: "10 Pieces / Box",
    interlockType: "Tongue & Groove Concealed Locking Flange",
    wholesaleTier: "Wholesale Box Rates | Bulk Pallet Discount",
    stockStatus: "In Stock at Central Depot",
    primaryImage: imgUrl,
    galleryImages: [imgUrl],
    features: [
      "Standard 10ft (H) x 1ft (W) single plank floor-to-ceiling coverage",
      "Concealed interlocking tongue-and-groove joint leaving zero visible screws",
      "Packed strictly 10 pieces per heavy-duty export carton",
      "100% termite proof, moisture proof, and coastal climate tested",
      "Zero formaldehyde emissions, E0 green building certified",
    ],
    applications: [
      "Living Room TV Feature Walls",
      "Master Bedroom Bedhead Accents",
      "Hotel Reception Foyers & Lobbies",
      "Corporate Boardrooms & Commercial Partitions",
    ],
    installationInfo: "Fixed over plywood, drywall, or cured cement plaster using architectural MS polymer adhesive and concealed stainless steel locking clips.",
    maintenanceInfo: "Wipe clean with a soft damp microfiber cloth. Stain and scratch-resistant under normal residential and hotel usage.",
  };
});

// Build catalog items strictly from actual UV Sheet photos currently in the folder
const uvProducts = Object.entries(uvModules).map(([filePath, imgUrl], index) => {
  const fileName = getFileName(filePath);
  const code = UV_CODE_MAP[fileName] || `UV-${index + 1}`;
  const slugId = `uv-${code.toLowerCase().replace(/[^a-z0-9]/g, '-')}`;

  return {
    id: slugId,
    code: code,
    name: code,
    category: "uv-sheet",
    categoryLabel: "UV Sheets",
    tagline: `8ft x 4ft (8 * 4) High-Gloss UV Marble Sheet • Model ${code}`,
    shortDesc: `Model ${code} 8ft x 4ft (8 * 4) high-gloss UV marble decorative sheet. 10 pieces per box.`,
    fullDesc: `UV Sheet ${code} from our wholesale inventory at JEBE ENTERPRISES. Large-format 8ft x 4ft (8 * 4) stone composite panel with crystal UV high-gloss coating. Supplied in wholesale packaging of 10 pieces per box for luxury interior feature walls.`,
    featured: true,
    dimensions: "8ft x 4ft (8 * 4)",
    material: "Stone-Plastic Composite (SPC/PVC) with High-Gloss UV Layer",
    fireRating: "Class B1 Non-Combustible Core",
    waterResistance: "100% Waterproof, Impervious to Steam & Grease",
    weight: "17 kg per sheet",
    boxPacking: "10 Pieces / Box",
    interlockType: "Flush Butt-Joint",
    wholesaleTier: "Wholesale Crate Rates | Pallet Lots",
    stockStatus: "In Stock at Central Depot",
    primaryImage: imgUrl,
    galleryImages: [imgUrl],
    features: [
      "Large 8ft x 4ft (8 * 4) sheet format eliminates messy joint lines",
      "Non-porous crystal UV surface impervious to moisture, steam, and stains",
      "Packaging: 10 pieces per box",
      "Direct warehouse pallet and crate supply",
      "Lightweight stone composite: 99% lighter than natural marble slabs",
    ],
    applications: [
      "Living Room TV Wall Backdrops",
      "Dining & Lounge Accent Walls",
      "Elevator Lobby Entrances",
      "Commercial Reception Backdrops",
    ],
    installationInfo: "Adhered directly to existing cement plaster, drywall, or old tiles using structural hybrid MS-polymer adhesive for a clean, seamless finish.",
    maintenanceInfo: "Wipe with glass cleaner or mild soap and a lint-free cloth. Completely scratch-resistant under normal residential and commercial usage.",
  };
});

// Exact model codes identified from actual Budget PVC Panel catalog
const BUDGET_PVC_CODE_MAP = {
  'page_005.jpg': '5000',
  'page_006.jpg': '5001',
  'page_007.jpg': '5002',
  'page_008.jpg': '5003',
  'page_009.jpg': '5004',
  'page_010.jpg': '5005',
  'page_011.jpg': '5006',
  'page_012.jpg': '5008',
  'page_013.jpg': '5009',
  'page_014.jpg': '5010',
  'page_015.jpg': '5011',
  'page_016.jpg': '5013',
  'page_017.jpg': '5014',
  'page_019.jpg': '5021',
  'page_020.jpg': '5022',
  'page_021.jpg': '5023',
  'page_022.jpg': '5035',
  'page_023.jpg': '5051',
  'page_024.jpg': '5035-B',
  'page_025.jpg': '5052',
  'page_026.jpg': '5053',
  'page_027.jpg': '5054',
};

// Build catalog items strictly from actual Budget PVC Panel photos in the folder
const budgetProducts = Object.entries(budgetModules).map(([filePath, imgUrl], index) => {
  const fileName = getFileName(filePath);
  const code = BUDGET_PVC_CODE_MAP[fileName] || `50${String(index).padStart(2, '0')}`;
  const slugId = `budget-pvc-${code.toLowerCase().replace(/[^a-z0-9]/g, '-')}`;

  return {
    id: slugId,
    code: code,
    name: code,
    category: "budget-pvc",
    categoryLabel: "Budget PVC Panels",
    tagline: `10ft (H) x 1ft (W) Budget PVC Ceiling Panel • ${code}`,
    shortDesc: `${code} budget PVC ceiling panel. Dimensions: 10ft (H) x 1ft (W) (12 Inch). Box packaging: 10 pieces per box.`,
    fullDesc: `Budget PVC Panel ${code} from our wholesale inventory at JEBE ENTERPRISES. Precision-extruded interior PVC decorative ceiling panel in 10ft height x 1ft width (12 Inch) dimensions with tongue-and-groove interlocking joints. Recommended strictly for ceiling installations. Supplied strictly in wholesale cartons of 10 pieces per box for contractors, retailers, and architects. (Note: Original product color may vary slightly due to lighting conditions when photo was taken).`,
    featured: index < 6,
    dimensions: "10ft (H) x 1ft (W)",
    material: "High-Grade Polyvinyl Chloride (PVC) Composite",
    fireRating: "Flame Retardant Grade",
    waterResistance: "100% Water & Moisture Proof",
    weight: "Lightweight PVC Plank",
    boxPacking: "10 Pieces / Box",
    interlockType: "Tongue & Groove Interlocking",
    ecoFriendly: "Eco-Friendly Composite",
    chemicalResistance: "Resistant to Cleaners & Chemicals",
    stainResistance: "Non-Porous Stain Resistant Layer",
    termiteBorerResistance: "100% Termite, Borer & Fungus Proof",
    uvResistance: "UV Ray Resistant (Non-Fading)",
    easyMaintenance: "Zero Painting / Polish Required",
    cleanability: "Easy to Clean (Damp Cloth Wipe)",
    stockStatus: "In Stock at Central Depot",
    colorNotice: "Original product color may vary due to lighting when photo was taken.",
    primaryImage: imgUrl,
    galleryImages: [imgUrl],
    features: [
      "Eco Friendly: Sustainable, non-toxic interior composition",
      "Chemical Resistance: Withstands exposure to domestic cleaning agents",
      "Stain Resistant: Non-porous surface repels oils, spills, and grime",
      "Water Proof: 100% impervious to water and high humidity",
      "Easy to Clean: Smooth surface easily wiped clean with a damp cloth",
      "Termite, Borer & Fungus Resistance: Total protection against insects and mold",
      "UV Ray Resistance: Preserves color against fading and degradation",
      "Easy Maintenance: Long-lasting durability with zero painting or polishing",
      "Standard 10ft (H) x 1ft (W) (12 Inch) single panel coverage",
      "Wholesale Packaging: 10 pieces per box",
      "Recommended exclusively for interior ceiling installations",
    ],
    applications: [
      "Commercial Building Ceilings",
      "Hotel & Restaurant Ceilings",
      "Gymnasium Ceilings",
      "Hall & Corridor Ceilings",
      "Airport Lounge Ceilings",
      "School & College Ceilings",
      "Industrial Facility Ceilings",
      "Spa & Wellness Centre Ceilings",
    ],
    installationInfo: "Easy tongue-and-groove joint fitting over ceiling battens, ceiling framing channels, or direct ceiling mounting.",
    maintenanceInfo: "Wipe with damp cloth. Low maintenance, stain resistant, and washable surface.",
  };
});

// Exact model codes identified from actual Soffit Panels catalog
const SOFFIT_CODE_MAP = {
  'page_003.jpg': { code: '101', name: 'Oak Wood Okre', sizes: '300mm x 3060mm (10ft) & 300mm x 3960mm (13ft)' },
  'page_004.jpg': { code: '102', name: 'Wallnut', sizes: '300mm x 3060mm (10ft) & 300mm x 3960mm (13ft)' },
  'page_005.jpg': { code: '103', name: 'Golden Oak', sizes: '300mm x 3060mm (10ft) & 300mm x 3960mm (13ft)' },
  'page_006.jpg': { code: '104', name: 'Dark Brich', sizes: '300mm x 3060mm (10ft) & 300mm x 3960mm (13ft)' },
  'page_007.jpg': { code: '106', name: 'European Golden Oak', sizes: '300mm x 3060mm (10ft) & 300mm x 3960mm (13ft)' },
  'page_008.jpg': { code: '107', name: 'Grey Wood', sizes: '300mm x 3060mm (10ft) & 300mm x 3960mm (13ft)' },
  'page_009.jpg': { code: '108', name: 'Winchester Oak', sizes: '300mm x 3060mm (10ft) & 300mm x 3960mm (13ft)' },
  'page_010.jpg': { code: '109', name: 'Leach Wood (Matte)', sizes: '300mm x 3060mm (10ft) & 300mm x 3960mm (13ft)' },
  'page_011.jpg': { code: '110', name: 'Beach Wood (Matte)', sizes: '300mm x 3060mm (10ft)' },
  'page_012.jpg': { code: '111', name: 'Casa Wood (Matte)', sizes: '300mm x 3060mm (10ft)' },
  'page_013.jpg': { code: '112', name: 'Honey Teak (Matte)', sizes: '300mm x 3060mm (10ft)' },
  'page_014.jpg': { code: '113', name: 'Rose Wood (Matte)', sizes: '300mm x 3060mm (10ft)' },
  'page_015.jpg': { code: '114', name: 'Antique Oak (Matte)', sizes: '300mm x 3060mm (10ft)' },
};

// Build catalog items strictly from actual Soffit Panels photos in the folder
const soffitProducts = Object.entries(soffitModules)
  .filter(([filePath]) => {
    const fileName = getFileName(filePath);
    return fileName in SOFFIT_CODE_MAP;
  })
  .map(([filePath, imgUrl], index) => {
    const fileName = getFileName(filePath);
    const info = SOFFIT_CODE_MAP[fileName];
    const code = info.code;
    const name = `${info.name} (${code})`;
    const slugId = `soffit-${code.toLowerCase()}`;

    return {
      id: slugId,
      code: code,
      name: name,
      category: "soffit-panel",
      categoryLabel: "Soffit Panels",
      tagline: `Axora Premium Soffit System • ${info.name} (${code})`,
      shortDesc: `${info.name} (Code ${code}) premium wall and ceiling soffit panel. Sizes: ${info.sizes}. 10 pieces per box.`,
      fullDesc: `Axora Soffit Panel ${info.name} (Code ${code}) from JEBE ENTERPRISES wholesale depot. Combines modern architectural design with industrial-grade composite durability. Ideal for sophisticated ceiling features, balcony soffits, porch overhangs, and sleek wall transitions. Supplied strictly in wholesale cartons of 10 pieces per box.`,
      featured: index < 4,
      dimensions: info.sizes,
      material: "Axora High-Grade Polymer Composite (Real Wood Feel)",
      fireRating: "Fire Retardant Grade",
      waterResistance: "100% Water Proof & Non-VOC",
      weight: "Lightweight Engineered Soffit Plank",
      boxPacking: "10 Pieces / Box",
      interlockType: "Seamless Post Installation Interlock",
      stockStatus: "In Stock at Central Depot",
      colorNotice: "For color reference only. Original product color may vary slightly due to lighting.",
      primaryImage: imgUrl,
      galleryImages: [imgUrl],
      features: [
        "100% Water Proof & Non-VOC Certified",
        "Authentic Real Wood Feel & Texture",
        "Stain Free & Easy to Connect Interlocking System",
        "Seamless Post Installation Appearance",
        "Anti-Bacterial, Termite Proof & Rust Proof",
        "Maintenance Free & Highly Durable",
        "Fire Retardant & Recyclable",
        `Dimensions: ${info.sizes}`,
        "Wholesale Packaging: 10 Pieces / Box",
      ],
      applications: [
        "Exterior & Interior Ceiling Soffits",
        "Balcony & Porch Ceilings",
        "Modern Wall Transitions",
        "Architectural Overhangs & Eaves",
        "Luxury Villa Foyers",
      ],
      installationInfo: "Concealed fastener locking channels for rapid, seamless post installation across ceiling rafters or wall furring.",
      maintenanceInfo: "Zero maintenance required. Does not need varnishing, polishing, or sealing.",
    };
  });

// Exact model codes identified from actual WPC Louvers catalog
const WPC_CODE_MAP = {
  // Direct filenames as present in the WPC folder
  '201.jpeg': { code: '201', thickness: '17mm', lines: '8 Line' },
  '202.jpeg': { code: '202', thickness: '17mm', lines: '8 Line' },
  '203.jpeg': { code: '203', thickness: '17mm', lines: '8 Line' },
  '204.jpeg': { code: '204', thickness: '17mm', lines: '8 Line' },
  '205.jpeg': { code: '205', thickness: '17mm', lines: '8 Line' },
  '206.jpeg': { code: '206', thickness: '17mm', lines: '8 Line' },
  '207.jpeg': { code: '207', thickness: '17mm', lines: '8 Line' },
  '231.jpeg': { code: '231', thickness: '24mm', lines: '4 Line' },
  '232.jpeg': { code: '232', thickness: '24mm', lines: '4 Line' },
  '233.jpeg': { code: '233', thickness: '24mm', lines: '4 Line' },
  '234.jpeg': { code: '234', thickness: '24mm', lines: '4 Line' },
  '235.jpeg': { code: '235', thickness: '24mm', lines: '4 Line' },
  '241.jpeg': { code: '241', thickness: '24mm', lines: '4 Line' },
  '242.jpeg': { code: '242', thickness: '24mm', lines: '4 Line' },
  '244.jpeg': { code: '244', thickness: '24mm', lines: '4 Line' },
  '245.jpeg': { code: '245', thickness: '24mm', lines: '4 Line' },
  '246.jpeg': { code: '246', thickness: '24mm', lines: '4 Line' },
  '247.jpeg': { code: '247', thickness: '24mm', lines: '4 Line' },
  '248.jpeg': { code: '248', thickness: '24mm', lines: '4 Line' },
  '249.jpeg': { code: '249', thickness: '24mm', lines: '4 Line' },
  // By raw model code
  '201': { code: '201', thickness: '17mm', lines: '8 Line' },
  '202': { code: '202', thickness: '17mm', lines: '8 Line' },
  '203': { code: '203', thickness: '17mm', lines: '8 Line' },
  '204': { code: '204', thickness: '17mm', lines: '8 Line' },
  '205': { code: '205', thickness: '17mm', lines: '8 Line' },
  '206': { code: '206', thickness: '17mm', lines: '8 Line' },
  '207': { code: '207', thickness: '17mm', lines: '8 Line' },
  '231': { code: '231', thickness: '24mm', lines: '4 Line' },
  '232': { code: '232', thickness: '24mm', lines: '4 Line' },
  '233': { code: '233', thickness: '24mm', lines: '4 Line' },
  '234': { code: '234', thickness: '24mm', lines: '4 Line' },
  '235': { code: '235', thickness: '24mm', lines: '4 Line' },
  '241': { code: '241', thickness: '24mm', lines: '4 Line' },
  '242': { code: '242', thickness: '24mm', lines: '4 Line' },
  '244': { code: '244', thickness: '24mm', lines: '4 Line' },
  '245': { code: '245', thickness: '24mm', lines: '4 Line' },
  '246': { code: '246', thickness: '24mm', lines: '4 Line' },
  '247': { code: '247', thickness: '24mm', lines: '4 Line' },
  '248': { code: '248', thickness: '24mm', lines: '4 Line' },
  '249': { code: '249', thickness: '24mm', lines: '4 Line' },
};

// Build catalog items strictly from actual WPC Louvers photos in the folder
const wpcProducts = Object.entries(wpcModules)
  .map(([filePath, imgUrl], index) => {
    const fileName = getFileName(filePath);
    const baseName = fileName.replace(/\.[^.]+$/, '');
    const info = WPC_CODE_MAP[fileName] || WPC_CODE_MAP[baseName] || {
      code: baseName,
      thickness: baseName.startsWith('20') ? '17mm' : '24mm',
      lines: baseName.startsWith('20') ? '8 Line' : '4 Line',
    };
    const code = info.code;
    const name = `${code} (${info.lines})`;
    const slugId = `wpc-${code.toLowerCase()}`;

    return {
      id: slugId,
      code: code,
      name: name,
      category: "wpc-louvers",
      categoryLabel: "Louvers",
      tagline: `WPC Louvers • ${info.lines} (${info.thickness}) • Model ${code}`,
      shortDesc: `WPC Louver panel ${code}. Size: 6 Inch x 9.5 Feet (${info.thickness}, ${info.lines}). 10 pieces per box.`,
      fullDesc: `WPC Louver Panel ${code} from JEBE ENTERPRISES wholesale inventory. Heavy-duty Wood-Plastic Composite fluted cladding in 6 Inch width x 9.5 Feet height with ${info.thickness} profile depth and ${info.lines} architecture. Engineered for high-impact commercial and residential interior accent walls. Supplied strictly in wholesale cartons of 10 pieces per box.`,
      featured: index < 6,
      dimensions: `6 Inch x 9.5 Feet (${info.thickness})`,
      material: "High-Density Wood-Plastic Composite (WPC)",
      fireRating: "Class B1 Fire Retardant",
      waterResistance: "100% Water & Termite Proof",
      weight: "Heavy-Duty WPC Fluted Plank",
      boxPacking: "10 Pieces / Box",
      interlockType: "Tongue & Groove Fluted Interlocking",
      stockStatus: "In Stock at Central Depot",
      colorNotice: "For color reference only. Original product color may vary slightly due to lighting.",
      primaryImage: imgUrl,
      galleryImages: [imgUrl],
      features: [
        `Architectural ${info.lines} Profile (${info.thickness} depth)`,
        "Size: 6 Inch x 9.5 Feet full ceiling height",
        "High-density Wood-Plastic Composite (WPC) core",
        "100% Water Proof, Termite Proof & Borer Resistant",
        "Natural matte textured wood finish",
        "Precision interlocking tongue-and-groove jointing",
        "Wholesale Packaging: 10 pieces per box",
      ],
      applications: [
        "Interior Living & Bedroom TV Walls",
        "Commercial Reception & Foyer Louvers",
        "Decorative Column Cladding",
        "Acoustic & Fluted Room Partitions",
      ],
      installationInfo: "Concealed screw or metal bracket fastening into wall studs or direct batten framework.",
      maintenanceInfo: "Wipe with damp cloth. Completely water and termite resistant.",
    };
  });

// Exact model codes identified from actual Accessories folder
const ACCESSORY_CODE_MAP = {
  'Adhesive.jpeg': {
    code: 'ADH-01',
    name: 'Heavy-Duty Panel Adhesive',
    tagline: 'High-Strength Instant Grab Architectural Panel Adhesive',
    dimensions: 'Standard 310ml Cartridge',
    material: 'High-Grab Hybrid Polymer / Polyurethane Formulation',
    boxPacking: 'Depends on the order',
    shortDesc: 'Heavy-duty MS polymer adhesive for direct wall bonding of Fluted Panels, UV Marble Sheets, Louvers, and Trims.',
    fullDesc: 'Professional architectural-grade hybrid MS polymer panel adhesive from JEBE ENTERPRISES. Engineered for high instant grab and permanent bonding across plywood, cured plaster, drywall, and tiles. Compatible with Fluted Panels, UV Sheets, Soffit Panels, and Louvers without solvent shrinkage.',
    weight: 'Approx. 450g per Cartridge',
    fireRating: 'Non-Flammable Cured Bond',
    waterResistance: '100% Waterproof & Weather Resistant',
    interlockType: 'Direct Adhesive Bead Application',
    features: [
      'High instant grab eliminates panel slippage during curing',
      '100% solvent-free, non-corrosive, and zero-VOC formulation',
      'Compatible with Fluted Panels, UV Sheets, Louvers, and PVC',
      'Remains permanently flexible to absorb thermal expansion',
      'Waterproof, mold resistant, and coastal climate approved',
      'Wholesale packaging: Depends on the order',
    ],
    applications: [
      'Direct Wall Cladding Bonding',
      'UV Marble Sheet Backing Application',
      'Trim & Profile Perimeter Securing',
      'False Ceiling Panel Adhesion',
    ],
    installationInfo: 'Apply in vertical serpentine beads 150mm apart along the back of the panel. Press firmly to wall within 10 minutes.',
    maintenanceInfo: 'Store in a cool, dry place. Cured adhesive requires no maintenance.',
  },
  'Clamp.jpg': {
    code: 'CLP-01',
    name: 'Stainless Steel Concealed Clamp',
    tagline: 'Concealed Fastening Clips for Fluted Panels & Louvers',
    dimensions: 'Standard Clip (Fits 17mm - 24mm Profiles)',
    material: 'High-Grade Stainless Steel (SS 304)',
    boxPacking: 'Depends on the order',
    shortDesc: 'Corrosion-resistant stainless steel interlocking clips for secure hidden fastening of fluted panels and louvers.',
    fullDesc: 'Heavy-gauge stainless steel concealed fastening clamps from JEBE ENTERPRISES. Designed to slip into the tongue-and-groove flange of fluted panels and WPC louvers, securing them to wall battens or framing without any visible screw heads.',
    weight: 'Lightweight Hardware',
    fireRating: 'Non-Combustible Metal',
    waterResistance: '100% Rust & Corrosion Proof',
    interlockType: 'Concealed Tongue Insertion',
    features: [
      'Zero visible fastener heads after panel installation',
      'Marine-grade SS 304 stainless steel resists rust & oxidation',
      'Engineered grip teeth prevent lateral panel shifting',
      'Pre-drilled screw countersunk hole for rapid batten fixing',
      'Compatible with Fluted Panels, Louvers, and Soffit Panels',
      'Wholesale packaging: Depends on the order',
    ],
    applications: [
      'Fluted Wall Panel Hidden Securing',
      'WPC Louver Heavy-Duty Batten Anchoring',
      'Ceiling Soffit Panel Installation',
      'Commercial Wall Partition Cladding',
    ],
    installationInfo: 'Slide clamp over panel locking tongue and secure into wooden batten or GI frame using self-tapping screws.',
    maintenanceInfo: 'Maintenance free. Corrosion and rust resistant.',
  },
  'H Trim.jpg': {
    code: 'TRIM-H',
    name: 'H Trim (Joining Section)',
    tagline: 'H-Profile Alignment & Expansion Joining Profile',
    dimensions: '10ft Length (Standard Flange)',
    material: 'High-Precision Anodized Aluminum / PVC Composite',
    boxPacking: 'Depends on the order',
    shortDesc: 'H-section joiner trim for clean, aligned butt-joints between two adjacent wall panels or UV marble sheets.',
    fullDesc: 'Architectural H-section joining profile from JEBE ENTERPRISES. Used to bridge two adjacent panels or UV marble sheets seamlessly, concealing cut edges and accommodating natural thermal expansion.',
    weight: 'Lightweight Extruded Profile',
    fireRating: 'Class B1 Flame Retardant',
    waterResistance: '100% Waterproof & Termite Proof',
    interlockType: 'Dual-Sided Slot Insertion',
    features: [
      'Precision dual-slot design for seamless panel-to-panel joints',
      'Conceals saw-cut edges for a factory-finished architectural look',
      '10ft length matches standard 10ft panel ceiling heights',
      'Scratch-resistant anodized / color-matched finish',
      'Wholesale packaging: Depends on the order',
    ],
    applications: [
      'Panel-to-Panel Vertical Connections',
      'UV Marble Sheet Large Wall Multi-Section Joining',
      'Long Corridor Cladding Runs',
      'Ceiling Expansion Joint Covering',
    ],
    installationInfo: 'Fit first panel into one side of H-channel, secure H-channel to wall, then insert subsequent panel into the opposing slot.',
    maintenanceInfo: 'Wipe clean with a damp microfiber cloth.',
  },
  'L Trim.jpg': {
    code: 'TRIM-L',
    name: 'L Trim (External Corner & Edge)',
    tagline: 'L-Angle External Corner & Perimeter Edge Finishing Trim',
    dimensions: '10ft Length (Standard 90° Angle)',
    material: 'High-Grade Aluminum / Polymer Composite',
    boxPacking: 'Depends on the order',
    shortDesc: 'L-shaped perimeter edge angle and external corner trim for clean 90-degree corner transitions and exposed borders.',
    fullDesc: 'Architectural 90-degree L-profile trim from JEBE ENTERPRISES. Engineered to protect and finish external 90-degree wall corners, window reveals, and exposed edge terminations of wall panels and UV sheets.',
    weight: 'Lightweight Extruded Angle',
    fireRating: 'Class B1 Flame Retardant',
    waterResistance: '100% Waterproof & Termite Proof',
    interlockType: 'Overlapping Corner Adhesion',
    features: [
      'Clean 90-degree architectural corner protection',
      'Conceals exposed core and cut edges around pillars and corners',
      '10ft full-height length with zero horizontal joints',
      'High impact resistance against accidental corner collisions',
      'Wholesale packaging: Depends on the order',
    ],
    applications: [
      'External 90° Wall Corners',
      'Door & Window Return Frame Finishing',
      'Column & Pillar Wrap Transitions',
      'Exposed Panel Border Termination',
    ],
    installationInfo: 'Affix directly over finished panel corner using hybrid MS polymer adhesive and temporary masking tape until cured.',
    maintenanceInfo: 'Wipe clean with a damp cloth.',
  },
  'U Trim.jpg': {
    code: 'TRIM-U',
    name: 'U Trim (End Cap & Perimeter Track)',
    tagline: 'U-Channel Starter Base & Top Ceiling Finishing Profile',
    dimensions: '10ft Length (Standard Channel Depth)',
    material: 'High-Grade Aluminum / Polymer Composite',
    boxPacking: 'Depends on the order',
    shortDesc: 'U-channel perimeter trim and starting base track for neat floor, ceiling, skirting, and edge terminations.',
    fullDesc: 'Architectural U-channel end cap profile from JEBE ENTERPRISES. Acts as a starting track at floor level and an end cap at ceiling borders or wall ends, providing a framed, clean enclosure for fluted panels, UV sheets, and louvers.',
    weight: 'Lightweight Extruded Channel',
    fireRating: 'Class B1 Flame Retardant',
    waterResistance: '100% Waterproof & Termite Proof',
    interlockType: 'Channel Slide-In Insertion',
    features: [
      'Precision U-channel encapsulates raw cut ends neatly',
      'Functions as both starter bottom track and top ceiling edge profile',
      '10ft single-span profile',
      'Provides a clean recessed shadow line border',
      'Wholesale packaging: Depends on the order',
    ],
    applications: [
      'Top Ceiling Border Termination',
      'Base Skirting & Floor Starter Track',
      'Vertical Wall End Cap Enclosures',
      'Partition Framework Edge Framing',
    ],
    installationInfo: 'Fix U-channel to floor or ceiling line using screws or adhesive, then slide panel ends into the channel pocket.',
    maintenanceInfo: 'Wipe clean with a damp cloth.',
  },
};

// Build catalog items strictly from actual Accessories photos in the folder
const accessoryProducts = Object.entries(accessoryModules).map(([filePath, imgUrl], index) => {
  const fileName = getFileName(filePath);
  const info = ACCESSORY_CODE_MAP[fileName] || {
    code: `ACC-${index + 1}`,
    name: fileName.replace(/\.[^.]+$/, ''),
    tagline: `Installation Accessory • ${fileName.replace(/\.[^.]+$/, '')}`,
    dimensions: 'Standard Hardware Spec',
    material: 'High-Grade Installation Hardware',
    boxPacking: 'Depends on the order',
    shortDesc: `${fileName.replace(/\.[^.]+$/, '')} installation accessory for panels and sheets.`,
    fullDesc: `High quality installation accessory from JEBE ENTERPRISES for professional wall panel and sheet fitting.`,
    weight: 'Standard Weight',
    fireRating: 'Approved Grade',
    waterResistance: '100% Waterproof',
    interlockType: 'Standard Fitting',
    features: ['High durability', 'Engineered for panel fitting', 'Wholesale packaging: Depends on the order'],
    applications: ['Wall Cladding', 'Ceiling Fitting'],
    installationInfo: 'Install as per standard panel guidelines.',
    maintenanceInfo: 'Zero maintenance required.',
  };

  const slugId = `accessory-${info.code.toLowerCase().replace(/[^a-z0-9]/g, '-')}`;

  return {
    id: slugId,
    code: info.code,
    name: info.name,
    category: "accessories",
    categoryLabel: "Accessories",
    tagline: info.tagline,
    shortDesc: info.shortDesc,
    fullDesc: info.fullDesc,
    featured: true,
    dimensions: info.dimensions,
    material: info.material,
    fireRating: info.fireRating,
    waterResistance: info.waterResistance,
    weight: info.weight,
    boxPacking: info.boxPacking,
    interlockType: info.interlockType,
    stockStatus: "In Stock at Central Depot",
    primaryImage: imgUrl,
    galleryImages: [imgUrl],
    features: info.features,
    applications: info.applications,
    installationInfo: info.installationInfo,
    maintenanceInfo: info.maintenanceInfo,
  };
});

// All actual products combined (strictly what is in the folders)
export const PRODUCTS = [
  ...flutedProducts, 
  ...uvProducts, 
  ...budgetProducts, 
  ...soffitProducts, 
  ...wpcProducts, 
  ...accessoryProducts
];
