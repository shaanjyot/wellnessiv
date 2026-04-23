export type IvDripPackage = {
  id: string;
  name: string;
  price: string;
  duration: string;
  description: string;
  includes: string[];
  specs: string[];
  defaultIncludesOpen?: boolean;
};

/** Signature IV packages and customised builder — sourced from clinic menus. */
export const IV_DRIP_PACKAGES: IvDripPackage[] = [
  {
    id: 'focus',
    name: 'Focus',
    price: '$329',
    duration: 'Approx. 60–90 min',
    description:
      'Support concentration and nervous-system balance with a broad nutrient blend.',
    includes: [
      'B complex (B1, B2, B3, B5)',
      'Glycine',
      'Magnesium sulphate',
      'GABA',
      'Taurine',
      'Serine',
      'Methionine',
      'Inositol',
      'Choline',
      'Carnitine',
      'Methylcobalamin',
      '500ml hydration (standard base)',
    ],
    specs: [
      'Administered by a qualified nurse',
      'Mobile, office, or in-clinic (Kingston, ACT)',
      'Health screening prior to treatment',
    ],
    defaultIncludesOpen: true,
  },
  {
    id: 'metaboliser',
    name: 'Metaboliser',
    price: '$289',
    duration: 'Approx. 60–90 min',
    description: 'Lipotropic-style support with B vitamins and hydration.',
    includes: [
      'Methionine',
      'Inositol',
      'Choline',
      'Carnitine',
      'Methylcobalamin',
      'B complex (B1, B2, B3, B5)',
      '500ml hydration (standard base)',
    ],
    specs: [
      'Administered by a qualified nurse',
      'Mobile, office, or in-clinic',
      'Suitability confirmed at consult',
    ],
  },
  {
    id: 'super-charge',
    name: 'Super Charge',
    price: '$309',
    duration: 'Approx. 60–90 min',
    description: 'Immune-oriented support with vitamin C, Bs, and selenium.',
    includes: [
      'Vitamin C',
      'B complex (B1, B2, B3, B5)',
      'Selenium',
      '500ml hydration (standard base)',
    ],
    specs: [
      'Administered by a qualified nurse',
      'Mobile, office, or in-clinic',
      'Selenium: clinic may limit frequency (e.g. one selenium-only drip per month) — ask us',
    ],
  },
  {
    id: 'tranquillity',
    name: 'Tranquillity',
    price: '$289',
    duration: 'Approx. 60–90 min',
    description: 'Calming minerals and amino supports for rest and ease.',
    includes: [
      'Magnesium sulphate',
      'GABA',
      'Serine',
      'Taurine',
      '500ml hydration (standard base)',
    ],
    specs: [
      'Administered by a qualified nurse',
      'Mobile, office, or in-clinic',
      'Ideal when you want a gentler, wind-down oriented infusion',
    ],
  },
  {
    id: 'cure-me-elixir',
    name: 'Cure Me Elixir',
    price: '$309',
    duration: 'Approx. 60–90 min',
    description: 'Trace-mineral and B-vitamin support alongside hydration.',
    includes: [
      'B complex (B1, B2, B3, B5)',
      'Selenium',
      'Zinc',
      '500ml hydration (standard base)',
    ],
    specs: [
      'Administered by a qualified nurse',
      'Mobile, office, or in-clinic',
      'Personalised to your health goals after assessment',
    ],
  },
  {
    id: 'glamour',
    name: 'Glamour',
    price: '$329',
    duration: 'Approx. 60–90 min',
    description: 'Skin, hair, and nail support with vitamin C, glycine, aminos, and IM biotin.',
    includes: [
      'Vitamin C',
      'Glycine',
      'Amino acids (incl. arginine, lysine, ornithine, glutamine)',
      '500ml hydration (standard base)',
      'IM biotin',
    ],
    specs: [
      'Administered by a qualified nurse',
      'Includes intramuscular biotin as listed on menu',
      'Mobile, office, or in-clinic',
    ],
  },
  {
    id: 'limitless-elite',
    name: 'Limitless Elite',
    price: '$389',
    duration: 'Approx. 60–90 min',
    description: 'Our most comprehensive signature blend in one infusion.',
    includes: [
      'Vitamin C',
      'B complex (B1, B2, B3, B5)',
      'Zinc',
      'Glycine',
      'Magnesium sulphate',
      'GABA',
      'Serine',
      'Taurine',
      'Amino acids (incl. arginine, lysine, ornithine, glutamine)',
      'Methionine',
      'Inositol',
      'Choline',
      'Carnitine',
      'Methylcobalamin',
      '500ml hydration (standard base)',
    ],
    specs: [
      'Administered by a qualified nurse',
      'Mobile, office, or in-clinic',
      'Best when you want maximum inclusions in a single drip',
    ],
  },
  {
    id: 'customised',
    name: 'Customised IV drip',
    price: 'From $249',
    duration: 'Approx. 60–90 min',
    description:
      'Build your own infusion from our vitamin and amino list with standard 500ml Hartmann’s hydration.',
    includes: [
      'Consultation to select inclusions',
      'Standard 500ml Hartmann’s hydration base',
      'Choice of vitamins & amino acids from our approved list (see specs)',
    ],
    specs: [
      '1 vitamin: $249',
      '2 vitamins: $289',
      '3 vitamins: $309',
      '4 vitamins: $329',
      '5 vitamins: $349',
      '6 vitamins: $369',
      '7 vitamins: $389',
      '8 vitamins: $409',
      '9 vitamins: $429',
      '10 vitamins: $449',
      'Available additions include: vitamin C, B complex (B1–B5), zinc, selenium, magnesium, GABA, taurine, serine, carnitine, inositol, methionine, choline, methylcobalamin, glycine, arginine, lysine, ornithine, glutamine, B12 booster, biotin, glutathione — subject to clinical suitability',
      'Administered by a qualified nurse; mobile, office, or in-clinic',
    ],
  },
];

export type IvAddOn = { name: string; price: string; note?: string };

export const IV_DRIP_ADD_ONS: IvAddOn[] = [
  { name: '+1L Hartmann’s hydration', price: '$39' },
  { name: '+ Methylcobalamin (B12 shot)', price: '$39' },
  { name: '+ Biotin shot', price: '$49' },
  {
    name: '+ Selenium',
    price: '$29',
    note: 'Clinic may allow only one drip containing selenium per month — ask us',
  },
  { name: '+ Additional vitamin add-on', price: '$29' },
  {
    name: '+ NAD+',
    price: 'From $375',
    note: 'Popular for anti-ageing and cellular support goals — enquire for suitability',
  },
  { name: '+ Vitamin D shot', price: '$150' },
  { name: '+ CoQ10 shot', price: '$129' },
  { name: '+ Alpha lipoic acid IV', price: 'From $249' },
  { name: '+ Blood test', price: 'POA', note: 'In clinic only — enquire today' },
];

export type AdditionalService = {
  title: string;
  description: string;
  priceLabel: string;
  detail: string;
};

export const ADDITIONAL_SERVICES: AdditionalService[] = [
  {
    title: 'Intramuscular shots',
    description: 'Quick vitamin injections when you want targeted support without a full drip.',
    priceLabel: 'From $39',
    detail: '≈15 min',
  },
  {
    title: 'Subcutaneous shots',
    description: 'Slow-release vitamin delivery options — your nurse will advise what suits you.',
    priceLabel: 'Enquire',
    detail: 'Flexible',
  },
  {
    title: 'Corporate wellness',
    description: 'On-site or packaged well-being support for teams across Canberra.',
    priceLabel: 'Custom',
    detail: 'Flexible',
  },
];
