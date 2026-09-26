export type ProductTranslation = {
  type: string;
  detail: string;
  intro: string;
  highlights: string[];
};

export const productTranslationsEn: Record<string, ProductTranslation> = {
  "maison-lumiere": {
    type: "Restaurant Website",
    detail: "Elegant restaurant website for fine dining, menu and reservations",
    intro: "Restaurant website with atmosphere, menu, gallery and reservations.",
    highlights: [
      "Atmospheric hero section for fine dining, ambience and direct reservations",
      "Clear sections for about us, menu, gallery, reviews, location and contact",
      "Suitable for restaurants, bistros, bars, cafés and upscale dining",
    ],
  },
  "beauty-haus": {
    type: "Cosmetics Website",
    detail: "Elegant website for cosmetics, treatments and modern beauty services",
    intro: "Cosmetics website with a high-end look and a clear enquiry flow.",
    highlights: [
      "Strong visual language for cosmetics and beauty brands",
      "Elegant structure for treatments, trust and booking enquiries",
      "Suitable for cosmetic studios, beauty brands and premium services",
    ],
  },
  "ates-feuerdoener": {
    type: "Döner Restaurant Website",
    detail: "Fiery restaurant website for döner, menu, locations and orders",
    intro: "Döner restaurant website with video hero, menu, reels and a focus on ordering.",
    highlights: [
      "Strong video hero for open fire, fresh ingredients and direct ordering",
      "Clear sections for menu, reels, locations, reviews and franchise",
      "Suitable for döner shops, takeaways, food brands and modern gastro concepts",
    ],
  },
  "aurum-grand-hotel": {
    type: "Luxury Hotel Website",
    detail: "Premium hotel website for suites, restaurant, spa and reservations",
    intro: "Hotel website with suites, spa, gallery and reservations.",
    highlights: [
      "Atmospheric hero section for hotel, suites and premium stays",
      "Clear sections for rooms, restaurant, spa, gallery, contact and reservations",
      "Suitable for hotels, boutique hotels, resorts and upscale hospitality concepts",
    ],
  },
  "salzgrotte-aura": {
    type: "Salt Cave Website",
    detail: "Calm salt cave website for halotherapy, prices and appointments",
    intro: "Salt cave website with a calming feel, prices and appointment booking.",
    highlights: [
      "Atmospheric hero section for salt air, calm and well-being",
      "Clear sections for treatments, benefits, prices, opening hours and contact",
      "Suitable for salt caves, halotherapy services and calm wellness concepts",
    ],
  },
  "alphaschutz-versicherung": {
    type: "Insurance Advisory Website",
    detail: "Premium website for insurance advice, protection concepts and contact",
    intro: "Insurance website with services, process and a focus on advice.",
    highlights: [
      "Strong hero section for trust, advice and protection",
      "Clear structure for services, process, reviews and contact",
      "Suitable for insurance brokers, financial advisors and consulting offices",
    ],
  },
  "fussoase-eppendorf": {
    type: "Foot Care Website",
    detail: "Elegant foot care website for treatments, prices and appointments",
    intro: "Foot care website with services, prices and appointment booking.",
    highlights: [
      "Atmospheric hero section for foot care, podiatry and well-being",
      "Clear sections for services, prices, gallery, reviews and contact",
      "Suitable for foot care studios, podiatry services and beauty practices",
    ],
  },
  "velora-fashion": {
    type: "Women's Fashion Online Shop",
    detail: "Feminine fashion shop with dresses, blouses and a tailoring focus",
    intro: "Fashion shop with an editorial look, categories and product guidance.",
    highlights: [
      "Editorial homepage with hero, categories and product sets",
      "Clear focus on dresses, blouses, tailoring and sale",
      "Suitable for fashion shops, boutiques and feminine collections",
    ],
  },
  "serenity-studio": {
    type: "Wellness Studio Website",
    detail: "Calm wellness website for spa, recovery, massage and private sessions",
    intro: "Wellness website with strong visual language and a focus on bookings.",
    highlights: [
      "Premium look for wellness, spa, recovery and private sessions",
      "Clear booking structure with availability, filters and experience modules",
      "Suitable for spa studios, recovery lounges and modern health concepts",
    ],
  },
  "kosmetik-atelier-rosenblick": {
    type: "Cosmetic Studio Website",
    detail: "Elegant cosmetics website for device-based skin care, products and appointments",
    intro: "Cosmetic studio website with video hero, services, gallery and appointment booking.",
    highlights: [
      "Atmospheric hero section for device-based cosmetics and electro-epilation",
      "Clear sections for services, products, gallery, reviews and appointment booking",
      "Suitable for cosmetic studios, beauty ateliers and modern skin care services",
    ],
  },
  "voltara-elektrotechnik": {
    type: "Electrician Website",
    detail: "Modern electrician website for electrical installation, Smart Home, E-Check and enquiries",
    intro: "Electrician website with video hero, service areas, prices, references and a focus on contact.",
    highlights: [
      "Strong hero section for a master craftsman business, emergency service and direct appointment requests",
      "Clear sections for electrical installation, Smart Home, lighting, E-Check, Wallbox and photovoltaics",
      "Suitable for electricians, electrical contractors, building services companies and regional trade businesses",
    ],
  },
  "reitschule-sonnenhof": {
    type: "Riding School Website",
    detail: "Warm riding school website for courses, horse boarding, trainer team and trial lessons",
    intro: "Riding school website with video hero, course offers, gallery, trainer team and a focus on contact.",
    highlights: [
      "Atmospheric hero section with horse videos, key figures and a focus on trial lessons",
      "Clear sections for courses, horse boarding, trainer team, gallery, reviews and location",
      "Suitable for riding schools, livery yards, riding clubs and rural experience providers",
    ],
  },
  "belle-more-lashes": {
    type: "Lashes & Beauty Website",
    detail: "Elegant beauty website for lashes, brows, cosmetics and permanent make-up",
    intro: "Beauty website with lashes, lash lifting, cosmetics, gallery and online booking.",
    highlights: [
      "Elegant hero section for lashes, cosmetics, aesthetics and direct online booking",
      "Clear sections for services, gallery, team, reviews, prices and contact",
      "Suitable for lash studios, cosmetic studios, brow bars and beauty ateliers",
    ],
  },
  "arztpraxis-weber": {
    type: "Medical Practice Website",
    detail: "Modern practice website for general medicine, services, team and contact",
    intro: "Practice website with services, team, location and contact.",
    highlights: [
      "Trustworthy practice presence with hero, services and team section",
      "Clear structure for appointment requests, phone number, location and contact",
      "Suitable for general practices, specialist practices and modern healthcare services",
    ],
  },
  "bean-bark": {
    type: "Coffee Shop Website",
    detail: "Warm coffee shop website for specialty coffee, menu and locations",
    intro: "Coffee shop website with menu, story and a warm brand feel.",
    highlights: [
      "Warm premium look for cafés, coffee shops and hospitality brands",
      "Clear structure for menu, story, sustainability and locations",
      "Suitable for cafés, roasteries, brunch spots and urban gastro concepts",
    ],
  },
  "vulkaneifeltherme": {
    type: "Thermal Spa Website",
    detail: "Atmospheric thermal spa website for thermal baths, sauna, wellness and tickets",
    intro: "Thermal spa website with video intro, sauna, prices and tickets.",
    highlights: [
      "Strong video hero for thermal baths, mineral spring, sauna and wellness",
      "Clear structure for pool area, saunas, treatments, dining, prices and contact",
      "Suitable for thermal spas, leisure pools, sauna landscapes and wellness resorts",
    ],
  },
  "cleanpro-reinigung": {
    type: "Cleaning Company Website",
    detail: "Modern website for building cleaning, services, locations and quotes",
    intro: "Cleaning website with services, trust and a focus on quotes.",
    highlights: [
      "Strong hero section for building cleaning, experience and trust",
      "Clear service areas for office cleaning, window cleaning and disinfection",
      "Suitable for cleaning companies, facility services and regional service providers",
    ],
  },
  "meisterhand-handwerksservice": {
    type: "Tradesperson Website",
    detail: "Modern tradesperson website for services, references, team and enquiries",
    intro: "Tradesperson website with a strong hero, service overview and a focus on enquiries.",
    highlights: [
      "Strong hero section for a master craftsman business, fixed-price guarantee and quick enquiries",
      "Clear sections for services, gallery, references, team and contact",
      "Suitable for trade businesses, renovators, electricians, painters, carpenters and tilers",
    ],
  },
  "autohaus-falkenstein": {
    type: "Premium Car Dealership Website",
    detail: "Premium website for sports cars, vehicle inventory, service and test drives",
    intro: "Premium car dealership with video hero, inventory and a focus on test drives.",
    highlights: [
      "Strong hero section for premium vehicles, emotion and direct vehicle selection",
      "Clear structure for inventory, vehicle details, financing, service and contact",
      "Suitable for car dealerships, premium dealers, sports car providers and vehicle brokers",
    ],
  },
  "gs-automotive-excellence": {
    type: "Car Dealership Website",
    detail: "Modern car dealership website for vehicle search, service, vehicle purchasing and contact",
    intro: "Car dealership website with a large hero, vehicle search, service areas and a focus on contact.",
    highlights: [
      "Strong dealership hero with direct vehicle search and clear brand impact",
      "Structure for vehicle inventory, financing, warranty, registration and vehicle purchasing",
      "Suitable for car dealerships, used car dealers and automotive service providers",
    ],
  },
  "luna-nails": {
    type: "Nail Salon Website",
    detail: "Elegant nail salon website for manicure, pedicure, nailart and appointments",
    intro: "Nail salon website with services, gallery and a focus on appointments.",
    highlights: [
      "Elegant hero section with video, reviews and direct appointment entry",
      "Clear sections for manicure, pedicure, gel modelling, nailart and gallery",
      "Suitable for nail salons, beauty ateliers and modern care services",
    ],
  },
  "st-elisabeth-klinikum": {
    type: "Hospital Website",
    detail: "Modern hospital website for departments, emergency room, team and appointments",
    intro: "Clinic website with departments, emergency notice and appointments.",
    highlights: [
      "Strong hero section with emergency notice, appointment entry and clinic profile",
      "Clear structure for departments, medical team, patient testimonials and contact",
      "Suitable for clinics, medical centres and larger healthcare institutions",
    ],
  },
  "haarwerk-studio": {
    type: "Hair Salon Website",
    detail: "Modern hair salon website for cuts, colouring, gallery and appointments",
    intro: "Hair salon website with salon atmosphere, services and booking.",
    highlights: [
      "Strong video hero for salon atmosphere, consultation and modern looks",
      "Clear sections for gallery, services, prices, portfolio and reviews",
      "Suitable for hair salons, barber shops and high-end beauty studios",
    ],
  },
  "brandt-roth-rechtsanwaelte": {
    type: "Law Firm Website",
    detail: "Professional law firm website for practice areas, team, initial consultation and contact",
    intro: "Law firm website with a strong hero, firm profile, practice areas, team and contact guidance.",
    highlights: [
      "Premium presence for law firm, expertise and direct initial consultation requests",
      "Clear sections for practice areas, team, client testimonials, contact and location",
      "Suitable for lawyers, law firms, notaries and advisory service providers",
    ],
  },
  "simpleskin-test": {
    type: "Cosmetics Website",
    detail: "Dermaceutical cosmetics website for skin analysis, treatments and appointments",
    intro: "Cosmetics website with skin analysis, active-ingredient cosmetics and a focus on appointments.",
    highlights: [
      "Strong hero section with video, consultation entry and direct appointment guidance",
      "Clear sections for treatments, skin analysis, results, products and contact",
      "Suitable for cosmetic studios, skin ateliers and modern beauty services",
    ],
  },
  "nagelstudio-sinja": {
    type: "Nail Salon Website",
    detail: "Creative nail salon website for nail modelling, nailart, prices and appointments",
    intro: "Nail salon website with nailart, prices and a focus on contact.",
    highlights: [
      "Eye-catching hero section for nail modelling, nailart and direct appointment guidance",
      "Clear sections for services, prices, gallery, reels, studio and contact",
      "Suitable for nail salons, nailart services and modern beauty ateliers",
    ],
  },
};
