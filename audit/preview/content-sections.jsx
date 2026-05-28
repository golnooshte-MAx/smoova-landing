// Smoova Audit — long-form content (SEO + AEO)
// Five pillar deep-dives + FAQ. Bilingual.

const { useState: useStateLF, useEffect: useELF, useRef: useRefLF } = React;

// Scroll-reveal hook: adds .is-visible to [data-anim] children as they enter view
function useRevealLF(ref) {
  useELF(() => {
    if (!ref.current) return;
    const els = Array.from(ref.current.querySelectorAll("[data-anim]"));
    const reveal = (el) => el.classList.add("is-visible");

    if (!("IntersectionObserver" in window)) {
      els.forEach(reveal);
      return;
    }
    const vh = () => window.innerHeight || document.documentElement.clientHeight;
    const inView = (el) => {
      const r = el.getBoundingClientRect();
      return r.top < vh() * 0.95 && r.bottom > 0;
    };
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            reveal(e.target);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -4% 0px" }
    );
    els.forEach((el) => {
      if (inView(el)) reveal(el);
      else io.observe(el);
    });
    const t = setTimeout(() => {
      els.forEach((el) => { if (inView(el)) reveal(el); });
    }, 1500);
    return () => { io.disconnect(); clearTimeout(t); };
  }, [ref]);
}

const PILLAR_LONGFORM = [
  {
    num: "01",
    title: {
      nl: "Hoe belangrijk zijn Google Reviews voor een salon?",
      en: "How much do Google Reviews actually matter for a salon?",
    },
    body: {
      nl: "Google Reviews zijn vaak het eerste dat nieuwe klanten over je salon zien, nog voor je website of je Instagram. 81% van de consumenten leest Google-reviews om lokale bedrijven te beoordelen (BrightLocal, Local Consumer Review Survey 2024), en 49% vertrouwt ze net zoveel als een persoonlijke aanbeveling. Salons onder de 4,2 sterren verliezen al klanten voordat ze de deur uit zijn. De audit checkt je gemiddelde score, het aantal recente beoordelingen, of je reageert binnen 48 uur, en hoe je presteert tegenover vergelijkbare salons in jouw stad.",
      en: "Google Reviews are often the first thing new customers see about your salon, before your website or your Instagram. 81% of consumers read Google reviews to evaluate local businesses (BrightLocal, 2024), and 49% trust them as much as a personal recommendation. Salons below 4.2 stars lose customers before they walk in. The audit checks your average rating, recent review volume, whether you respond within 48 hours, and how you compare to similar salons in your city.",
    },
    stat: { nl: "81% leest reviews", en: "81% read reviews", src: "BrightLocal 2024" },
  },
  {
    num: "02",
    title: {
      nl: "Wat is een Google Bedrijfsprofiel en waarom maakt het uit?",
      en: "What is a Google Business Profile and why does it matter?",
    },
    body: {
      nl: "Je Google Bedrijfsprofiel is het paneel dat verschijnt rechts in de zoekresultaten: foto's, openingstijden, telefoonnummer, route, 'Nu boeken'. Voor zoekopdrachten als 'kapper in de buurt' of 'balayage Utrecht' beslist dit profiel of iemand belt of doorscrolt. Bedrijven met complete profielen krijgen volgens Google 7 keer meer profielklikken dan bedrijven zonder. De audit checkt of je profiel geclaimd en geverifieerd is, of je recente foto's hebt geüpload, of je categorieën kloppen, en of je actief Google Posts plaatst.",
      en: "Your Google Business Profile is the panel on the right of search results: photos, opening hours, phone number, directions, 'Book now'. For searches like 'hairdresser near me' or 'balayage Utrecht', this panel decides whether someone calls or scrolls past. Businesses with complete profiles get 7 times more profile clicks than businesses without, per Google. The audit checks whether your profile is claimed and verified, whether you've uploaded recent photos, whether your categories are correct, and whether you post Google Posts regularly.",
    },
    stat: { nl: "7× meer klikken", en: "7× more clicks", src: "Google" },
  },
  {
    num: "03",
    title: {
      nl: "Heb ik een eigen website nodig als ik op Treatwell sta?",
      en: "Do I need my own website if I'm already on Treatwell?",
    },
    body: {
      nl: "Ja. Een eigen website is de enige plek waar klanten kunnen boeken zonder dat jij commissie afdraagt, en het is wat zoekmachines vertrouwen als jouw officiële identiteit. Zonder eigen site ben je een vermelding op iemand anders zijn platform. De audit checkt of je een eigen domein bezit, of je site werkt op mobiel (waar 78% van salonzoekopdrachten plaatsvindt volgens Think with Google), hoe snel de pagina laadt, of er een boekingsknop above-the-fold staat, en of de structuur duidelijk vertelt welk type salon je hebt.",
      en: "Yes. Your own website is the only place customers can book without you paying commission, and it's what search engines trust as your real identity. Without one, you're a listing on someone else's platform. The audit checks whether you own your domain, whether your site works on mobile (where 78% of salon searches happen, per Think with Google), how fast the page loads, whether there's a booking button above the fold, and whether the page structure clearly tells search engines what kind of salon you run.",
    },
    stat: { nl: "78% zoekt mobiel", en: "78% search on mobile", src: "Think with Google" },
  },
  {
    num: "04",
    title: {
      nl: "Wat is lokale SEO en hoe werkt het voor salons?",
      en: "What is local SEO and how does it work for salons?",
    },
    body: {
      nl: "Lokale SEO bepaalt of je in de drie kaart-resultaten bovenaan Google verschijnt, het 'Local Pack'. Dat is waar 44% van de klikken naartoe gaat bij lokale zoekopdrachten (BrightLocal, 2024). De audit checkt of je NAP-gegevens (naam, adres, telefoon) overal hetzelfde staan, of je vermeld bent in relevante NL-gidsen zoals Treatwell, Salonkee en Yelp, of je website een duidelijke locatie-pagina heeft, en op welke positie je staat voor 3 tot 5 zoektermen die jouw klanten daadwerkelijk gebruiken.",
      en: "Local SEO decides whether you appear in the three map results at the top of Google, the 'Local Pack.' That's where 44% of clicks go for local searches (BrightLocal, 2024). The audit checks whether your NAP data (name, address, phone) is consistent everywhere, whether you're listed in relevant local directories like Treatwell, Salonkee, and Yelp, whether your website has a clear location page, and where you currently rank for 3 to 5 search terms your customers actually use.",
    },
    stat: { nl: "44% klikt op Local Pack", en: "44% click the Local Pack", src: "BrightLocal 2024" },
  },
  {
    num: "05",
    title: {
      nl: "Word ik gevonden in ChatGPT en Google AI?",
      en: "Will I get found in ChatGPT and Google AI?",
    },
    body: {
      nl: "Misschien wel, misschien niet. Volgens Bain & Company (2024) gebruikt 80% van de consumenten 'zero-click' zoekresultaten, oftewel antwoorden uit AI-overzichten of samenvattingen, voor minstens 40% van hun zoekopdrachten. Sinds 2025 vragen klanten steeds vaker direct aan ChatGPT, Perplexity of Google AI Overviews: 'wat is de beste salon in Utrecht voor balayage?' Als jouw salon niet in dat antwoord staat, besta je voor die klant niet. De audit checkt of je salon genoemd wordt in AI-antwoorden voor 3 relevante zoektermen, en welke concurrenten wél worden genoemd.",
      en: "Maybe, maybe not. According to Bain & Company (2024), 80% of consumers rely on 'zero-click' results — answers from AI summaries — for at least 40% of their searches. Since 2025, customers increasingly ask ChatGPT, Perplexity, or Google AI Overviews directly: 'what's the best salon in Utrecht for balayage?' If your salon isn't in that answer, you don't exist for that customer. The audit checks whether your salon gets mentioned in AI answers for 3 relevant search terms, and which competitors do get mentioned.",
    },
    stat: { nl: "80% zero-click", en: "80% zero-click", src: "Bain & Company 2024" },
  },
];

const INTRO_COPY = {
  eyebrow: { nl: "Wat checkt de audit", en: "What the audit checks" },
  title: {
    nl: ["Vijf pijlers.", "Eén score per pijler.", "Geen vaagheid, geen jargon."],
    en: ["Five pillars.", "One score per pillar.", "No vagueness, no jargon."],
  },
  sub: {
    nl: "We kijken alleen naar wat publiek zichtbaar is — Google, je website, lokale gidsen, AI-antwoorden. Geen toegang tot je accounts nodig.",
    en: "We only look at what's publicly visible — Google, your website, local directories, AI answers. No account access needed.",
  },
};

const FAQ = [
  {
    q: { nl: "Hoe lang duurt de audit?", en: "How long does the audit take?" },
    a: {
      nl: "Ongeveer 30 seconden. Vier vragen, geen account, geen wachttijd. Je krijgt direct je scorecard te zien, niet later in een e-mail.",
      en: "About 30 seconds. Four questions, no account, no waiting. You see your scorecard immediately, not later in an email.",
    },
  },
  {
    q: { nl: "Wat checkt de audit precies?", en: "What does the audit actually check?" },
    a: {
      nl: "Vijf pijlers van online vindbaarheid: Google Reviews, Google Bedrijfsprofiel, je eigen website, lokale SEO en AI-zichtbaarheid in ChatGPT, Perplexity en Google AI Overviews. Per pijler krijg je een score van 0 tot 10 en de drie belangrijkste verbeterpunten.",
      en: "Five pillars of online visibility: Google Reviews, Google Business Profile, your own website, local SEO, and AI visibility in ChatGPT, Perplexity, and Google AI Overviews. For each pillar you get a score from 0 to 10 and the three most important improvement points.",
    },
  },
  {
    q: { nl: "Is de audit echt gratis?", en: "Is the audit really free?" },
    a: {
      nl: "Ja, en ja, ook zonder addertjes. Geen account, geen creditcard, geen verplichte e-mail. We bouwen websites voor salons, dus we vinden het logisch om eerst te laten zien wat we kunnen. Of je daarna iets afsluit is helemaal jouw beslissing.",
      en: "Yes, and yes, no strings. No account, no credit card, no required email. We build websites for salons, so it makes sense to show what we can do first. Whether you sign up for anything afterward is entirely your call.",
    },
  },
  {
    q: { nl: "Wat gebeurt er met mijn gegevens?", en: "What happens to my data?" },
    a: {
      nl: "We slaan alleen geanonimiseerde scores op om de audit zelf te verbeteren. Je salonnaam, adres en cijfers worden niet gedeeld met derden, niet verkocht, en niet gebruikt voor reclame. Je krijgt geen marketingmails van ons tenzij je daar zelf om vraagt.",
      en: "We only store anonymized scores to improve the audit itself. Your salon name, address, and numbers are not shared with third parties, not sold, and not used for advertising. You won't get marketing emails from us unless you ask for them.",
    },
  },
  {
    q: { nl: "Wat als mijn salon niet gevonden wordt?", en: "What if my salon isn't found?" },
    a: {
      nl: "Dat is op zich al een uitkomst. Dan zien we precies waar de gaten zitten, meestal in je Google Bedrijfsprofiel of je vermelding op kaart-resultaten. We laten je in dat geval ook zien welke eerste stap het meest oplevert, vaak een verificatie die je in 10 minuten zelf kunt doen.",
      en: "That's already a useful result. It shows exactly where the gaps are, usually in your Google Business Profile or your local map listings. In that case we also show you which first step pays off most, often a verification you can do yourself in 10 minutes.",
    },
  },
  {
    q: { nl: "Krijg ik na de audit een verkoopgesprek?", en: "Will I get a sales call after the audit?" },
    a: {
      nl: "Nee. Tenzij je er zelf om vraagt. Je krijgt je scorecard, je drie eerste stappen per pijler, en de keuze. Als je wil weten wat Smoova voor je gaten kan doen, plan je zelf een gesprek. Als je het zelf wil oplossen, ook prima.",
      en: "No. Unless you ask for one. You get your scorecard, your three first steps per pillar, and the choice. If you want to know what Smoova can do for your gaps, you book a call yourself. If you'd rather fix it on your own, also fine.",
    },
  },
];

// ─────────────────────────────────────────────────────────────────────────────

// Pillar-card illustrations — custom SVG, brand palette, conceptually tied to each topic
function PillarIcon({ kind }) {
  switch (kind) {
    case "01": // Reviews — star bloom with twinkles
      return (
        <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <radialGradient id="p1bg" cx="50%" cy="42%" r="60%">
              <stop offset="0%" stopColor="#F8E4DD" />
              <stop offset="100%" stopColor="#E8DFD3" />
            </radialGradient>
            <linearGradient id="p1star" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#E5C893" />
              <stop offset="100%" stopColor="#C19A5B" />
            </linearGradient>
          </defs>
          <rect width="120" height="120" rx="16" fill="url(#p1bg)" />
          <path d="M60 22 L67.5 47 L94 47 L72.5 63 L80.5 88 L60 73 L39.5 88 L47.5 63 L26 47 L52.5 47 Z" fill="url(#p1star)" stroke="#6B2630" strokeWidth="0.6" strokeLinejoin="round" />
          <circle cx="28" cy="32" r="2.4" fill="#C19A5B" opacity="0.75" />
          <circle cx="96" cy="38" r="1.8" fill="#C19A5B" opacity="0.6" />
          <circle cx="92" cy="96" r="3" fill="#C19A5B" opacity="0.85" />
          <circle cx="26" cy="92" r="2" fill="#C19A5B" opacity="0.7" />
          <path d="M101 80 L103 76 L105 80 L109 82 L105 84 L103 88 L101 84 L97 82 Z" fill="#C19A5B" opacity="0.5" />
        </svg>
      );
    case "02": // Google Business Profile — storefront awning + door
      return (
        <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <linearGradient id="p2bg" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#F0E0E2" />
              <stop offset="100%" stopColor="#E8DFD3" />
            </linearGradient>
          </defs>
          <rect width="120" height="120" rx="16" fill="url(#p2bg)" />
          {/* striped awning */}
          <path d="M22 44 Q60 30 98 44 L98 56 L22 56 Z" fill="#6B2630" />
          <path d="M30 44 Q33 38 38 38 L38 56 L30 56 Z" fill="#C19A5B" opacity="0.85" />
          <path d="M48 38 L58 38 L58 56 L48 56 Z" fill="#C19A5B" opacity="0.85" />
          <path d="M68 38 L78 38 L78 56 L68 56 Z" fill="#C19A5B" opacity="0.85" />
          <path d="M82 38 Q87 38 90 44 L90 56 L82 56 Z" fill="#C19A5B" opacity="0.85" />
          {/* awning trim */}
          <line x1="22" y1="56" x2="98" y2="56" stroke="#2B0810" strokeWidth="1.2" />
          {/* doorway arch */}
          <path d="M44 96 L44 76 Q44 64 60 64 Q76 64 76 76 L76 96 Z" fill="#2B0810" />
          <circle cx="68" cy="82" r="1.5" fill="#C19A5B" />
          {/* base */}
          <rect x="20" y="96" width="80" height="3" fill="#2B0810" />
        </svg>
      );
    case "03": // Own website — browser window with cursor + flow
      return (
        <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <linearGradient id="p3bg" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#F4E9DB" />
              <stop offset="100%" stopColor="#E8DFD3" />
            </linearGradient>
          </defs>
          <rect width="120" height="120" rx="16" fill="url(#p3bg)" />
          {/* browser shadow */}
          <rect x="24" y="30" width="72" height="56" rx="8" fill="#2B0810" opacity="0.08" transform="translate(2 3)" />
          {/* browser window */}
          <rect x="22" y="28" width="72" height="56" rx="8" fill="#FBF7F2" stroke="#2B0810" strokeWidth="1.2" />
          {/* top bar */}
          <line x1="22" y1="40" x2="94" y2="40" stroke="#2B0810" strokeWidth="0.8" opacity="0.4" />
          <circle cx="30" cy="34" r="1.8" fill="#6B2630" />
          <circle cx="36" cy="34" r="1.8" fill="#C19A5B" />
          <circle cx="42" cy="34" r="1.8" fill="#5A7A4A" />
          {/* content lines */}
          <rect x="30" y="48" width="32" height="3" rx="1.5" fill="#2B0810" />
          <rect x="30" y="56" width="48" height="2" rx="1" fill="#8A6B6F" />
          <rect x="30" y="62" width="40" height="2" rx="1" fill="#8A6B6F" />
          {/* book now button */}
          <rect x="30" y="71" width="32" height="9" rx="4.5" fill="#2B0810" />
          <rect x="36" y="74.5" width="20" height="2" rx="1" fill="#FBF7F2" />
          {/* cursor */}
          <path d="M70 86 L70 100 L74 96 L77 102 L80 100 L77 94 L82 94 Z" fill="#C19A5B" stroke="#2B0810" strokeWidth="0.6" strokeLinejoin="round" />
        </svg>
      );
    case "04": // Local SEO — map pin with radar rings
      return (
        <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <linearGradient id="p4pin" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8A2638" />
              <stop offset="100%" stopColor="#2B0810" />
            </linearGradient>
            <radialGradient id="p4bg" cx="50%" cy="55%" r="55%">
              <stop offset="0%" stopColor="#F4E9DB" />
              <stop offset="100%" stopColor="#E8DFD3" />
            </radialGradient>
          </defs>
          <rect width="120" height="120" rx="16" fill="url(#p4bg)" />
          {/* radar rings */}
          <ellipse cx="60" cy="92" rx="38" ry="9" fill="none" stroke="#C19A5B" strokeWidth="1" opacity="0.35" />
          <ellipse cx="60" cy="92" rx="28" ry="6.5" fill="none" stroke="#C19A5B" strokeWidth="1" opacity="0.55" />
          <ellipse cx="60" cy="92" rx="18" ry="4" fill="none" stroke="#C19A5B" strokeWidth="1.2" opacity="0.8" />
          {/* pin */}
          <path d="M60 22 C46 22 36 32 36 46 C36 60 60 90 60 90 C60 90 84 60 84 46 C84 32 74 22 60 22 Z" fill="url(#p4pin)" stroke="#2B0810" strokeWidth="0.8" />
          <circle cx="60" cy="46" r="8" fill="#FBF7F2" />
          <circle cx="60" cy="46" r="4" fill="#C19A5B" />
          {/* pin shadow */}
          <ellipse cx="60" cy="92" rx="9" ry="2" fill="#2B0810" opacity="0.25" />
        </svg>
      );
    case "05": // AI visibility — 4-pointed sparkle with satellites
      return (
        <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <linearGradient id="p5sp" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#E5C893" />
              <stop offset="100%" stopColor="#C19A5B" />
            </linearGradient>
            <radialGradient id="p5bg" cx="50%" cy="50%" r="60%">
              <stop offset="0%" stopColor="#F8E9D6" />
              <stop offset="100%" stopColor="#E8DFD3" />
            </radialGradient>
          </defs>
          <rect width="120" height="120" rx="16" fill="url(#p5bg)" />
          {/* large sparkle */}
          <path d="M60 22 Q63 50 88 60 Q63 70 60 98 Q57 70 32 60 Q57 50 60 22 Z" fill="url(#p5sp)" stroke="#6B2630" strokeWidth="0.6" />
          {/* mid sparkle top-right */}
          <path d="M94 28 Q95.5 38 102 40 Q95.5 42 94 52 Q92.5 42 86 40 Q92.5 38 94 28 Z" fill="#6B2630" opacity="0.7" />
          {/* small sparkle bottom-left */}
          <path d="M26 86 Q27 92 32 93 Q27 94 26 100 Q25 94 20 93 Q25 92 26 86 Z" fill="#6B2630" opacity="0.5" />
          {/* tiny dot */}
          <circle cx="102" cy="92" r="2" fill="#C19A5B" opacity="0.7" />
          <circle cx="22" cy="32" r="2.5" fill="#C19A5B" opacity="0.55" />
        </svg>
      );
    default:
      return null;
  }
}

// New pillar-card data — short desc + stat
const PILLAR_CARDS = [
  {
    num: "01", img: "assets/pillars/reviews.jpg",
    name: { nl: "Google Reviews", en: "Google Reviews" },
    desc: {
      nl: "Je sterren, je recente beoordelingen, en hoe snel je reageert.",
      en: "Your stars, recent reviews, and how fast you reply.",
    },
    stat: {
      nl: "81% van klanten leest reviews voor ze boeken.",
      en: "81% of customers read reviews before booking.",
    },
  },
  {
    num: "02", img: "assets/pillars/business-profile.jpg",
    name: { nl: "Google Bedrijfsprofiel", en: "Google Business Profile" },
    desc: {
      nl: "Foto's, openingstijden, categorieën, en of je actief Posts plaatst.",
      en: "Photos, opening hours, categories, and whether you post regularly.",
    },
    stat: {
      nl: "7× meer profielklikken bij complete profielen.",
      en: "7× more profile clicks with a complete profile.",
    },
  },
  {
    num: "03", img: "assets/pillars/website.jpg",
    name: { nl: "Eigen website", en: "Own website" },
    desc: {
      nl: "Eigen domein, mobiel werkend, snelle laadtijd, duidelijke boekingsknop.",
      en: "Own domain, mobile-ready, fast loading, clear booking button.",
    },
    stat: {
      nl: "78% van salon-zoekopdrachten gebeurt op mobiel.",
      en: "78% of salon searches happen on mobile.",
    },
  },
  {
    num: "04", img: "assets/pillars/local-seo.jpg",
    name: { nl: "Lokale SEO", en: "Local SEO" },
    desc: {
      nl: "Verschijn je in het Local Pack, en kloppen je gegevens overal.",
      en: "Whether you show up in the Local Pack, and your data is consistent.",
    },
    stat: {
      nl: "44% van lokale clicks gaat naar het Local Pack.",
      en: "44% of local clicks go to the Local Pack.",
    },
  },
  {
    num: "05", img: "assets/pillars/ai-visibility.jpg",
    name: { nl: "AI-zichtbaarheid", en: "AI visibility" },
    desc: {
      nl: "Word je genoemd in ChatGPT, Perplexity en Google AI.",
      en: "Whether you're cited in ChatGPT, Perplexity and Google AI.",
    },
    stat: {
      nl: "80% gebruikt AI-antwoorden in 40%+ van hun zoekopdrachten.",
      en: "80% use AI answers for 40%+ of their searches.",
    },
  },
];

function IntroSection({ lang }) {
  const c = INTRO_COPY;
  const ref = useRefLF(null);
  useRevealLF(ref);

  const openLongform = (i) => {
    const expander = document.querySelector(".longform-expander");
    if (!expander) return;
    // Open the expander (set data-open="true") then scroll to it
    expander.dataset.open = "true";
    expander.querySelector(".longform-expander__toggle")?.setAttribute("aria-expanded", "true");
    requestAnimationFrame(() => {
      const items = expander.querySelectorAll(".longform-expander__item");
      const target = items[i] || expander;
      const nav = document.querySelector(".nav");
      const offset = (nav?.offsetHeight || 80) + 16;
      const y = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    });
  };

  return (
    <section className="intro" ref={ref} aria-labelledby="intro-h">
      <div className="intro__head">
        <div data-anim>
          <Eyebrow>{c.eyebrow[lang]}</Eyebrow>
          <h2 id="intro-h" className="intro__title">
            {lang === "nl" ? "Wat checkt " : "What the "}
            <em>{lang === "nl" ? "de audit" : "audit checks"}</em>
            {lang === "nl" ? "?" : "."}
          </h2>
        </div>
        <p className="intro__sub" data-anim>{c.sub[lang]}</p>
      </div>

      <ol className="pillar-grid" aria-label={c.eyebrow[lang]}>
        {PILLAR_CARDS.map((p, i) => (
          <li
            key={p.num}
            className="pillar-card"
            data-anim
            style={{ "--d": `${i * 60}ms` }}
          >
            <div className="pillar-card__media">
              <img src={p.img} alt="" loading="lazy" />
            </div>
            <span className="pillar-card__num">{p.num}</span>
            <h3 className="pillar-card__name">{p.name[lang]}</h3>
            <p className="pillar-card__desc">{p.desc[lang]}</p>
            <p className="pillar-card__stat">{p.stat[lang]}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

function PillarLongform({ lang }) {
  // Collapsed-by-default longform expander, shown below the FAQ
  const [open, setOpen] = useStateLF(false);
  return (
    <section
      className="longform-expander"
      data-open={open ? "true" : "false"}
      aria-label={lang === "nl" ? "Pijlers uitgelegd" : "Pillars explained"}
    >
      <button
        type="button"
        className="longform-expander__toggle"
        aria-expanded={open}
        aria-controls="longform-panel"
        onClick={() => setOpen((v) => !v)}
      >
        {open
          ? (lang === "nl" ? "Verberg uitleg" : "Hide explainer")
          : (lang === "nl" ? "Lees meer over de vijf pijlers" : "Read more about the five pillars")}
        <span className="arr" aria-hidden="true">→</span>
      </button>

      {open && (
        <div className="longform-expander__panel" id="longform-panel">
          {PILLAR_LONGFORM.map((p) => (
            <article
              key={p.num}
              className="longform-expander__item"
              itemScope
              itemType="https://schema.org/Question"
            >
              <span className="longform-expander__num">{p.num}</span>
              <div>
                <h3 className="longform-expander__title" itemProp="name">{p.title[lang]}</h3>
                <p className="longform-expander__text" itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
                  <span itemProp="text">{p.body[lang]}</span>
                </p>
              </div>
              <aside className="longform-expander__stat">
                <div className="longform-expander__stat-num">{p.stat[lang]}</div>
                <div className="longform-expander__stat-src">{p.stat.src}</div>
              </aside>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

function FAQSection({ lang }) {
  const [open, setOpen] = useStateLF(0);
  return (
    <section
      className="faq"
      aria-labelledby="faq-h"
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <div className="faq__head">
        <Eyebrow>{lang === "nl" ? "Veelgestelde vragen" : "FAQ"}</Eyebrow>
        <h2 id="faq-h" className="faq__title">
          {lang === "nl"
            ? <>Vragen & <em>antwoorden.</em></>
            : <>Questions & <em>answers.</em></>}
        </h2>
        <p className="faq__intro">
          {lang === "nl"
            ? "Alles wat je wilt weten voor je de audit start."
            : "Everything worth asking before you start the audit."}
        </p>
        <div className="faq__ornament" aria-hidden="true">
          <span className="faq__orn-dot" />
          <span className="faq__orn-line" />
          <span className="faq__orn-dot" />
        </div>
        <p className="faq__contact">
          {lang === "nl"
            ? <>Nog een vraag? <a href="mailto:hello@smoova.studio">Schrijf ons</a>.</>
            : <>Still wondering? <a href="mailto:hello@smoova.studio">Write us</a>.</>}
        </p>
      </div>

      <div className="faq__list">
        {FAQ.map((f, i) => (
          <article
            key={i}
            className={`faq__item ${open === i ? "faq__item--open" : ""}`}
            itemScope
            itemProp="mainEntity"
            itemType="https://schema.org/Question"
          >
            <button
              className="faq__q"
              onClick={() => setOpen(open === i ? -1 : i)}
              aria-expanded={open === i}
              type="button"
            >
              <span className="faq__q-mark" aria-hidden="true">Q.</span>
              <span className="faq__q-num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
              <span className="faq__q-text" itemProp="name">{f.q[lang]}</span>
              <span className="faq__q-icon" aria-hidden="true">
                <svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
                  <line x1="8" y1="3" x2="8" y2="13" className="faq__q-icon-v" />
                  <line x1="3" y1="8" x2="13" y2="8" />
                </svg>
              </span>
            </button>
            <div
              className="faq__a-wrap"
              itemScope
              itemProp="acceptedAnswer"
              itemType="https://schema.org/Answer"
            >
              <div className="faq__a-inner">
                <div className="faq__a">
                  <span className="faq__a-mark" aria-hidden="true">A.</span>
                  <p itemProp="text">{f.a[lang]}</p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function FinalCTA({ lang }) {
  const c = COPY[lang];
  return (
    <section className="final-cta">
      <div className="final-cta__inner">
        <div className="final-cta__text">
          <span className="final-cta__eyebrow">
            {lang === "nl" ? "Klaar voor de volgende stap" : "Ready for what's next"}
          </span>
          <h2 className="final-cta__title">
            <span className="final-cta__title-line">
              {lang === "nl" ? "Eerst de cijfers." : "Numbers first."}
            </span>
            <em className="final-cta__title-line final-cta__title-line--gold">
              {lang === "nl" ? "Daarna een gesprek." : "Then a conversation."}
            </em>
          </h2>
          <p className="final-cta__sub">
            {lang === "nl"
              ? "Twintig minuten, geen verkooppraatje. We lopen je scorecard met je door en laten zien welke gaten Smoova zelf dichtmaakt, en welke je beter zelf kunt oplossen."
              : "Twenty minutes, no sales pitch. We walk your scorecard with you and show which gaps Smoova closes for you, and which you're better off fixing yourself."}
          </p>
          <div className="final-cta__row">
            <a className="final-cta__btn" href="https://smoova.studio/book">
              {RESULT_CTA.primary[lang]} <span className="arr">→</span>
            </a>
            <a className="final-cta__link" href="https://smoova.studio/">
              {RESULT_CTA.secondary[lang]}
            </a>
          </div>
          <p className="final-cta__proof">
            <span className="final-cta__proof-label">
              {lang === "nl" ? "Recent" : "Recent"}:
            </span>
            {" "}Bloem & Co · Volta · Casa Solana
          </p>
        </div>

        {/* Decorative anchor — giant italic "S." brandmark */}
        <div className="final-cta__deco" aria-hidden="true">
          <span className="final-cta__deco-glyph">S.</span>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, {
  IntroSection, PillarLongform, FAQSection, FinalCTA,
});
