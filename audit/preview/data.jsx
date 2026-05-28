// Smoova audit — content data (bilingual NL/EN)

const COPY = {
  nl: {
    nav_home: "Home",
    nav_meet: "Kennismaking",
    eyebrow: "Salon audit · gratis",
    hero_title: ["Check je online", "vindbaarheid", "in 30 seconden."],
    hero_sub: "Vier vragen. Geen account. Geen wachttijd. Vijf pijlers, één score per pijler, direct in beeld.",
    field_salon: "Salon",
    field_salon_placeholder: "Bijv. Atelier Margaux",
    field_city: "Stad",
    field_city_placeholder: "Bijv. Amsterdam",
    field_type: "Type salon",
    field_booking: "Boekingssysteem",
    field_booking_hint: "Meerdere mogelijk",
    cta_start: "Start audit",
    cta_note: "Duurt ongeveer 30 seconden",
    scan_eyebrow: "Audit loopt",
    scan_title: ["We scannen", "je salon."],
    scan_sub: "Vijf checks op rij. Geen vraag aan de klant, geen e-mail nodig — we kijken alleen naar wat publiek zichtbaar is.",
    scan_status_pending: "In wachtrij",
    scan_status_active: "Scannen",
    scan_status_done: "Klaar",
    pillars: [
      { num: "01", name: "Google Reviews", desc: "Sterren, reageer-snelheid, recente volume." },
      { num: "02", name: "Google Bedrijfsprofiel", desc: "Geclaimd, foto's, categorieën, posts." },
      { num: "03", name: "Eigen website", desc: "Domein, snelheid, mobiel, boekingsknop." },
      { num: "04", name: "Lokale SEO", desc: "Local Pack, NAP, vermeldingen, ranking." },
      { num: "05", name: "AI-zichtbaarheid", desc: "Wordt je salon genoemd door ChatGPT en AI Overviews?" },
    ],
    result_eyebrow: "Audit resultaat",
    score_label: "Totaalscore",
    result_meta_pillars: "5 pijlers",
    result_meta_time: "Gescand zojuist",
    result_meta_region: "Regio NL",
    detail_findings: "Bevindingen",
    detail_actions: "Eerste stappen",
    cta_book_eyebrow: "Wat nu",
    cta_book_title: ["Twee scores omhoog", "in dertig dagen."],
    cta_book_p: "Plan een gesprek van 20 minuten. We lopen de audit met je door en laten zien welke gaten Smoova zelf dichtmaakt — geen verkoopgesprek, gewoon de cijfers.",
    cta_book_primary: "Plan een gesprek",
    cta_book_secondary: "Bekijk wat Smoova doet",
    not_found_num: "404",
    not_found_title: "Salon niet gevonden.",
    not_found_p: "We konden geen publieke vermelding vinden voor deze naam in deze stad. Dat is op zich al een uitkomst — meestal ontbreekt een Google Bedrijfsprofiel of staat de NAP-data niet op één lijn.",
    not_found_again: "Probeer opnieuw",
    not_found_help: "Hulp nodig?",
    err_num: "—",
    err_title: "Er ging iets mis.",
    err_p: "De audit kon niet voltooid worden. Probeer het over een minuut opnieuw, of mail ons direct.",
    err_again: "Probeer opnieuw",
    err_help: "DM ons",
    foot_copy: "© 2026 Smoova B.V.",
    foot_rights: "Alle rechten voorbehouden",
  },
  en: {
    nav_home: "Home",
    nav_meet: "Intro call",
    eyebrow: "Salon audit · free",
    hero_title: ["Check your online", "discoverability", "in 30 seconds."],
    hero_sub: "Four questions. No account. No waiting. Five pillars, one score per pillar, on screen immediately.",
    field_salon: "Salon",
    field_salon_placeholder: "e.g. Atelier Margaux",
    field_city: "City",
    field_city_placeholder: "e.g. Amsterdam",
    field_type: "Salon type",
    field_booking: "Booking system",
    field_booking_hint: "Multiple allowed",
    cta_start: "Start audit",
    cta_note: "Takes about 30 seconds",
    scan_eyebrow: "Audit in progress",
    scan_title: ["We're scanning", "your salon."],
    scan_sub: "Five checks in a row. No questions to your customers, no email required — we only look at what's publicly visible.",
    scan_status_pending: "Queued",
    scan_status_active: "Scanning",
    scan_status_done: "Done",
    pillars: [
      { num: "01", name: "Google Reviews", desc: "Stars, response speed, recent volume." },
      { num: "02", name: "Google Business Profile", desc: "Claimed, photos, categories, posts." },
      { num: "03", name: "Own website", desc: "Domain, speed, mobile, booking button." },
      { num: "04", name: "Local SEO", desc: "Local Pack, NAP, citations, ranking." },
      { num: "05", name: "AI visibility", desc: "Are you mentioned by ChatGPT and AI Overviews?" },
    ],
    result_eyebrow: "Audit result",
    score_label: "Overall score",
    result_meta_pillars: "5 pillars",
    result_meta_time: "Scanned just now",
    result_meta_region: "Region NL",
    detail_findings: "Findings",
    detail_actions: "First steps",
    cta_book_eyebrow: "What's next",
    cta_book_title: ["Two scores up", "in thirty days."],
    cta_book_p: "Book a 20-minute call. We walk the audit with you and show which gaps Smoova closes for you — no sales pitch, just the numbers.",
    cta_book_primary: "Book a call",
    cta_book_secondary: "See what Smoova does",
    not_found_num: "404",
    not_found_title: "Salon not found.",
    not_found_p: "We couldn't find a public listing for this name in this city. That's a useful result in itself — usually it means a missing Google Business Profile or NAP data that doesn't line up.",
    not_found_again: "Try again",
    not_found_help: "Need help?",
    err_num: "—",
    err_title: "Something went wrong.",
    err_p: "The audit couldn't be completed. Try again in a minute, or email us directly.",
    err_again: "Try again",
    err_help: "DM us",
    foot_copy: "© 2026 Smoova B.V.",
    foot_rights: "All rights reserved",
  }
};

// Salon-type options
const SALON_TYPES = {
  nl: ["Kapsalon", "Nagelstudio", "Skincare studio", "Barbershop", "Spa / wellness", "Beauty atelier"],
  en: ["Hair salon", "Nail studio", "Skincare studio", "Barbershop", "Spa / wellness", "Beauty atelier"],
};

const BOOKING_SYSTEMS = [
  "Treatwell", "Salonkee", "Salonized", "Fresha",
  "Booksy", "Phorest", "Eigen systeem", "Geen"
];

// Demo result — for "Atelier Margaux, Utrecht, Kapsalon, Treatwell"
const DEMO_RESULT = {
  salon: "Atelier Margaux",
  city: "Utrecht",
  type: { nl: "Kapsalon", en: "Kapsalon" },
  systems: ["Treatwell"],
  overall: 6.4,
  pillars: [
    {
      num: "01",
      key: "reviews",
      score: 8.2,
      summary: {
        nl: "Sterke reviewbasis met één scheur: reageer-snelheid loopt achter.",
        en: "Strong review base with one crack: response speed lags behind."
      },
      findings: {
        nl: [
          { tone: "good", title: "4,7 sterren over 312 reviews", body: "Boven het stadgemiddelde van 4,3 voor kapsalons in Utrecht." },
          { tone: "good", title: "31 nieuwe reviews in de laatste 90 dagen", body: "Consistent volume, geen daling sinds 2024." },
          { tone: "warn", title: "Reactietijd 6,4 dagen", body: "Google beloont reactie binnen 48 uur. Klanten zien je nu als afwezig." },
          { tone: "bad",  title: "Geen reactie op 3 reviews onder 3 sterren", body: "Negatieve reviews zonder antwoord wegen drie keer zwaarder dan positieve mét." },
        ],
        en: [
          { tone: "good", title: "4.7 stars across 312 reviews", body: "Above the city average of 4.3 for Utrecht kapsalons." },
          { tone: "good", title: "31 new reviews in the last 90 days", body: "Consistent volume, no decline since 2024." },
          { tone: "warn", title: "Response time 6.4 days", body: "Google rewards a reply within 48 hours. Customers currently see you as absent." },
          { tone: "bad",  title: "No reply on 3 reviews under 3 stars", body: "Negative reviews without a response weigh three times as heavily as positive ones with." },
        ]
      },
      actions: {
        nl: [
          { title: "Beantwoord de drie open negatieve reviews", time: "20 min" },
          { title: "Zet een dagelijkse reminder voor nieuwe reviews", time: "5 min" },
          { title: "Activeer post-afspraak review-link via SMS", time: "1 dag" },
        ],
        en: [
          { title: "Reply to the three open negative reviews", time: "20 min" },
          { title: "Set a daily reminder for new reviews", time: "5 min" },
          { title: "Activate post-appointment review link via SMS", time: "1 day" },
        ]
      }
    },
    {
      num: "02",
      key: "gbp",
      score: 7.1,
      summary: {
        nl: "Profiel staat, maar verouderde foto's en lege Posts kosten je klikken.",
        en: "Profile is live, but stale photos and empty Posts cost you clicks."
      },
      findings: {
        nl: [
          { tone: "good", title: "Profiel geclaimd en geverifieerd sinds 2021", body: "Eigenaarsrechten in orde, contactgegevens compleet." },
          { tone: "good", title: "Hoofdcategorie correct: 'Kapsalon'", body: "Plus twee zinvolle subcategorieën." },
          { tone: "warn", title: "Laatste foto 87 dagen oud", body: "Google geeft voorrang aan profielen met content binnen 30 dagen." },
          { tone: "bad",  title: "Geen Google Posts in de laatste 60 dagen", body: "Posts beïnvloeden direct hoe je in 'in de buurt' zoekopdrachten scoort." },
        ],
        en: [
          { tone: "good", title: "Profile claimed and verified since 2021", body: "Ownership clean, contact details complete." },
          { tone: "good", title: "Primary category correct: 'Kapsalon'", body: "Plus two relevant secondary categories." },
          { tone: "warn", title: "Latest photo 87 days old", body: "Google prioritizes profiles with content from the last 30 days." },
          { tone: "bad",  title: "No Google Posts in the last 60 days", body: "Posts directly affect how you rank for 'near me' searches." },
        ]
      },
      actions: {
        nl: [
          { title: "Upload 6 verse foto's, vier momenten van de week", time: "30 min" },
          { title: "Plan wekelijkse Google Post (aanbod of nieuw lid)", time: "15 min/wk" },
          { title: "Voeg 3 ontbrekende attributen toe (wifi, kaartbetaling, rolstoel)", time: "5 min" },
        ],
        en: [
          { title: "Upload 6 fresh photos across four moments of the week", time: "30 min" },
          { title: "Schedule a weekly Google Post (offer or new staff)", time: "15 min/wk" },
          { title: "Add 3 missing attributes (wifi, card payment, wheelchair)", time: "5 min" },
        ]
      }
    },
    {
      num: "03",
      key: "site",
      score: 4.8,
      summary: {
        nl: "Je site werkt, maar laadt traag op mobiel en mist een directe boekingsknop.",
        en: "Your site works, but is slow on mobile and missing a direct booking button."
      },
      findings: {
        nl: [
          { tone: "good", title: "Eigen domein actief: ateliermargaux.nl", body: "Goed: Google ziet jou als de officiële bron, niet Treatwell." },
          { tone: "warn", title: "Mobile speed: 4,8s LCP", body: "Doel is onder 2,5s. Klanten verlaten de pagina bij meer dan 3s." },
          { tone: "bad",  title: "Geen 'Nu boeken'-knop above-the-fold", body: "Bezoekers moeten scrollen of doorklikken naar Treatwell — daar verlies je de boeking én betaal je commissie." },
          { tone: "bad",  title: "Schema markup ontbreekt", body: "Geen 'LocalBusiness' structured data — Google kent je openingstijden en behandelingen niet uit je site." },
        ],
        en: [
          { tone: "good", title: "Own domain active: ateliermargaux.nl", body: "Good: Google sees you as the official source, not Treatwell." },
          { tone: "warn", title: "Mobile speed: 4.8s LCP", body: "Target is under 2.5s. Customers leave the page after 3s." },
          { tone: "bad",  title: "No 'Book now' button above the fold", body: "Visitors have to scroll or click through to Treatwell — you lose the booking and pay commission." },
          { tone: "bad",  title: "Schema markup missing", body: "No 'LocalBusiness' structured data — Google doesn't read your hours and services from your site." },
        ]
      },
      actions: {
        nl: [
          { title: "Vervang Treatwell-link door directe boekingswidget", time: "Smoova" },
          { title: "Compresseer hero-afbeelding, schakel lazy loading in", time: "1 uur" },
          { title: "Voeg LocalBusiness + Service schema toe", time: "Smoova" },
        ],
        en: [
          { title: "Replace Treatwell link with a direct booking widget", time: "Smoova" },
          { title: "Compress hero image, enable lazy loading", time: "1 hour" },
          { title: "Add LocalBusiness + Service schema", time: "Smoova" },
        ]
      }
    },
    {
      num: "04",
      key: "seo",
      score: 6.0,
      summary: {
        nl: "Je staat in het Local Pack voor je merknaam, niet voor de zoektermen die klanten echt typen.",
        en: "You appear in the Local Pack for your brand name, not for the terms customers actually type."
      },
      findings: {
        nl: [
          { tone: "good", title: "Top-1 voor 'Atelier Margaux Utrecht'", body: "Merknaam-zoekopdrachten zijn op orde." },
          { tone: "warn", title: "Positie 6 voor 'kapper Utrecht'", body: "Buiten de top-3 kaartresultaten. 44% van de klikken gaat daar naartoe." },
          { tone: "bad",  title: "Positie 14 voor 'balayage Utrecht centrum'", body: "Long-tail zoektermen — hoge intentie, lage concurrentie — laat je liggen." },
          { tone: "warn", title: "NAP-inconsistentie in 4 directories", body: "Yelp en Treatwell tonen een ander telefoonnummer dan Google. Google twijfelt aan welk nummer klopt." },
        ],
        en: [
          { tone: "good", title: "Top-1 for 'Atelier Margaux Utrecht'", body: "Brand-name searches are in order." },
          { tone: "warn", title: "Position 6 for 'hairdresser Utrecht'", body: "Outside the top-3 map results. 44% of clicks go there." },
          { tone: "bad",  title: "Position 14 for 'balayage Utrecht center'", body: "Long-tail terms — high intent, low competition — left on the table." },
          { tone: "warn", title: "NAP inconsistency in 4 directories", body: "Yelp and Treatwell list a different phone number than Google. Google doesn't know which one to trust." },
        ]
      },
      actions: {
        nl: [
          { title: "Synchroniseer NAP-data over alle 12 directories", time: "Smoova" },
          { title: "Publiceer 3 locatie-pagina's voor de buurten waar klanten wonen", time: "Smoova" },
          { title: "Bouw 5 lokale backlinks (krant, gids, partner)", time: "2 weken" },
        ],
        en: [
          { title: "Sync NAP data across all 12 directories", time: "Smoova" },
          { title: "Publish 3 location pages for the neighborhoods your customers live in", time: "Smoova" },
          { title: "Build 5 local backlinks (paper, guide, partner)", time: "2 weeks" },
        ]
      }
    },
    {
      num: "05",
      key: "ai",
      score: 3.2,
      summary: {
        nl: "Voor AI-zoekopdrachten besta je nog niet. Je drie grootste concurrenten wel.",
        en: "For AI searches you don't exist yet. Your three biggest competitors do."
      },
      findings: {
        nl: [
          { tone: "bad",  title: "Niet genoemd in ChatGPT-antwoord voor 'beste kapper Utrecht'", body: "Antwoord noemt drie andere shops. Bron: gestructureerde data + persvermeldingen." },
          { tone: "bad",  title: "Niet in Perplexity top-5", body: "Perplexity bouwt op TripAdvisor en lokale gidsen — daar sta je niet vermeld." },
          { tone: "warn", title: "Geen FAQ schema op je site", body: "AI-tools halen direct uit FAQ-schema. Zonder dat zien ze je expertise niet." },
          { tone: "warn", title: "Google AI Overview noemt drie concurrenten", body: "Twee daarvan staan op een vergelijkbaar reviewniveau als jij." },
        ],
        en: [
          { tone: "bad",  title: "Not mentioned in ChatGPT for 'best hairdresser Utrecht'", body: "Answer cites three other shops. Source: structured data + press mentions." },
          { tone: "bad",  title: "Not in Perplexity top-5", body: "Perplexity pulls from TripAdvisor and local guides — you're not listed there." },
          { tone: "warn", title: "No FAQ schema on your site", body: "AI tools pull directly from FAQ schema. Without it they can't see your expertise." },
          { tone: "warn", title: "Google AI Overview names three competitors", body: "Two of them sit at a comparable review level to yours." },
        ]
      },
      actions: {
        nl: [
          { title: "Publiceer 8 FAQ's met FAQPage schema", time: "Smoova" },
          { title: "Plaats 2 buurtgidsen / lokaal nieuws (pitch sjabloon)", time: "1 week" },
          { title: "Voeg expertise-pagina toe over je signature treatments", time: "Smoova" },
        ],
        en: [
          { title: "Publish 8 FAQs with FAQPage schema", time: "Smoova" },
          { title: "Pitch 2 neighborhood guides / local news (template)", time: "1 week" },
          { title: "Add expertise page about your signature treatments", time: "Smoova" },
        ]
      }
    }
  ],

  // The three highest-impact, salon-specific recommendations
  // ranked by impact, each starts with a verb
  top3: {
    nl: [
      "Vervang de Treatwell-link op je homepage door een directe boekingsknop above-the-fold, zodat klanten zonder commissie boeken.",
      "Publiceer een FAQ-pagina met FAQPage-schema, zodat ChatGPT en Google AI Overviews je antwoorden citeren bij 'beste kapper Utrecht'.",
      "Synchroniseer telefoonnummer en openingstijden over Google, Yelp en Treatwell, zodat het Local Pack je opnieuw vertrouwt.",
    ],
    en: [
      "Replace the Treatwell link on your homepage with a direct booking button above the fold, so customers book without commission.",
      "Publish an FAQ page with FAQPage schema, so ChatGPT and Google AI Overviews cite your answers for 'best hairdresser Utrecht'.",
      "Sync your phone number and opening hours across Google, Yelp and Treatwell, so the Local Pack trusts you again.",
    ],
  },
};

// Verdict line based on score band
const VERDICT = {
  high: {
    nl: "Sterk fundament. Een paar verfijningen weg van uitstekend.",
    en: "Strong foundation. A few refinements away from excellent.",
  },
  mid: {
    nl: "Goede basis. Drie hefbomen kunnen het verschil maken.",
    en: "Good base. Three levers can make the difference.",
  },
  low: {
    nl: "Veel onbenut potentieel. Hier ligt de grootste winst.",
    en: "A lot of untapped potential. The biggest wins live here.",
  },
};
function getVerdict(score, lang) {
  const band = score >= 8 ? "high" : score >= 5 ? "mid" : "low";
  return VERDICT[band][lang];
}

// Editorial closing for the result state
const RESULT_CTA = {
  eyebrow: { nl: "Wat nu", en: "What's next" },
  heading: {
    // {salon} and {score} placeholders, replaced at render time
    nl: "Wij brengen {salon} van {score}/10 naar 8+/10 in 14 dagen.",
    en: "We take {salon} from {score}/10 to 8+/10 in 14 days.",
  },
  sub: {
    nl: "Plan een gesprek van 20 minuten. Geen verkooppraatje, alleen jouw plan.",
    en: "Book a 20-minute call. No sales pitch, just your plan.",
  },
  primary: { nl: "Plan een gesprek", en: "Book a call" },
  secondary: { nl: "Of bekijk eerst wat Smoova doet", en: "Or see what Smoova does first" },
  recent_label: { nl: "Recent", en: "Recent" },
  recent_clients: ["Bloem & Co", "Volta", "Casa Solana"],
  pullout_label: {
    nl: "De drie hefbomen met de grootste impact voor {salon}",
    en: "The three highest-impact levers for {salon}",
  },
};

Object.assign(window, { COPY, SALON_TYPES, BOOKING_SYSTEMS, DEMO_RESULT, VERDICT, getVerdict, RESULT_CTA });
