// Trek ki general jaankari. Travel se pehle official sources se zaroor verify karein.
export const treks = [
  {
    slug: 'kedarkantha', name: 'Kedarkantha', region: 'Uttarakhand', days: 6, altitude: 3810,
    difficulty: 'Easy', seasons: ['Winter', 'Spring'],
    summary: 'A beginner-friendly winter trek with pine forests, snow meadows and a clear summit view.',
    highlights: ['Snow-covered meadows', 'Juda ka Talab lake', '360 degree summit view'],
    itinerary: ['Drive to Sankri', 'Trek to Juda ka Talab', 'Trek to Kedarkantha Base', 'Summit and back to Hargaon', 'Trek to Sankri', 'Drive back'],
  },
  {
    slug: 'triund', name: 'Triund', region: 'Himachal Pradesh', days: 2, altitude: 2875,
    difficulty: 'Easy', seasons: ['Spring', 'Autumn'],
    summary: 'A short weekend trek above McLeod Ganj with wide views of the Dhauladhar range.',
    highlights: ['Dhauladhar views', 'Night camping on the ridge', 'Good for first-timers'],
    itinerary: ['Trek from McLeod Ganj to Triund and camp', 'Sunrise, then descend'],
  },
  {
    slug: 'hampta-pass', name: 'Hampta Pass', region: 'Himachal Pradesh', days: 5, altitude: 4270,
    difficulty: 'Moderate', seasons: ['Summer'],
    summary: 'A crossover trek from green Kullu valley to the dry, high-desert land of Lahaul and Spiti.',
    highlights: ['Valley to desert crossing', 'Chandratal lake side trip', 'River crossings'],
    itinerary: ['Manali to Jobra', 'Jobra to Jwara', 'Jwara to Balu ka Ghera', 'Cross Hampta Pass to Shea Goru', 'Chhatru and drive to Manali'],
  },
  {
    slug: 'valley-of-flowers', name: 'Valley of Flowers', region: 'Uttarakhand', days: 6, altitude: 3658,
    difficulty: 'Moderate', seasons: ['Summer'],
    summary: 'A UNESCO World Heritage valley that fills with alpine flowers during the monsoon.',
    highlights: ['Alpine flower meadows', 'Hemkund Sahib side trip', 'Pushpawati river valley'],
    itinerary: ['Haridwar to Joshimath', 'Govindghat to Ghangaria', 'Valley of Flowers and back', 'Hemkund Sahib and back', 'Descend to Govindghat', 'Drive back'],
  },
  {
    slug: 'sandakphu', name: 'Sandakphu', region: 'West Bengal', days: 6, altitude: 3636,
    difficulty: 'Moderate', seasons: ['Spring', 'Autumn'],
    summary: 'A ridge walk along the Singalila range with views of four of the five tallest peaks on Earth.',
    highlights: ['Everest and Kanchenjunga views', 'Rhododendron forests', 'Ridge-top tea houses'],
    itinerary: ['Reach Manebhanjan, trek to Chitrey', 'Chitrey to Tumling', 'Tumling to Kalipokhri', 'Kalipokhri to Sandakphu', 'Sandakphu to Gurdum', 'Return to Manebhanjan'],
  },
  {
    slug: 'roopkund', name: 'Roopkund', region: 'Uttarakhand', days: 8, altitude: 4800,
    difficulty: 'Hard', seasons: ['Spring', 'Autumn'],
    summary: 'A demanding high-altitude trek to a glacial lake known for its ancient skeletal remains.',
    highlights: ['Bugyals (high meadows)', 'Glacial lake at 4,800 m', 'Trishul and Nanda Ghunti views'],
    itinerary: ['Reach Lohajung', 'Trek to Didna', 'Didna to Ali Bugyal', 'Ali Bugyal to Patar Nachauni', 'Patar Nachauni to Bhagwabasa', 'Summit Roopkund and return', 'Descend to Wan', 'Return to Lohajung'],
  },
];

export const seasons = [
  { name: 'Winter', months: 'Dec to Feb' },
  { name: 'Spring', months: 'Mar to May' },
  { name: 'Summer', months: 'Jun to Aug' },
  { name: 'Autumn', months: 'Sep to Nov' },
];

export const packing = [
  { group: 'Clothing', items: ['Base layers (2)', 'Fleece or insulated jacket', 'Waterproof shell', 'Trek pants (2)', 'Warm cap and gloves', 'Wool socks (3 pairs)'] },
  { group: 'Gear', items: ['Trekking shoes with grip', 'Backpack 40 to 50 L with rain cover', 'Trekking poles', 'Headlamp with spare batteries', 'Water bottles (2 L total)', 'Sunglasses'] },
  { group: 'Health and safety', items: ['Personal medicines', 'First-aid kit', 'Sunscreen SPF 50', 'Lip balm', 'Altitude sickness medicine (ask your doctor)', 'ID and permits'] },
];
