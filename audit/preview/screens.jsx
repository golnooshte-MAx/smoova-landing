// Smoova Audit — screens

const { useState, useEffect, useRef, useMemo } = React;

// ─────────────────────────────────────────────────────────────────────────────
// Shared bits

function Eyebrow({ children }) {
  return <span className="eyebrow">{children}</span>;
}

function Nav({ lang, setLang }) {
  const c = COPY[lang];
  return (
    <header className="nav">
      <a className="nav__logo" href="#">smoova<span className="dot">.</span></a>
      <nav className="nav__links" aria-label="primary">
        <a href="#">{c.nav_home}</a>
        <a href="#">{c.nav_meet}</a>
      </nav>
      <div className="nav__lang">
        <button className={lang === "nl" ? "active" : ""} onClick={() => setLang("nl")}>NL</button>
        <span>/</span>
        <button className={lang === "en" ? "active" : ""} onClick={() => setLang("en")}>EN</button>
      </div>
    </header>);

}

function Footer({ lang }) {
  const c = COPY[lang];
  return (
    <footer className="foot">
      <span>{c.foot_copy} · {c.foot_rights}</span>
      <span>info@smoova.studio</span>
    </footer>);

}

// ─────────────────────────────────────────────────────────────────────────────
// 1) FORM SCREEN — single elegant column, max-w 520, soft 12px corners

function FormScreen({ lang, form, setForm, onSubmit }) {
  const c = COPY[lang];

  const setField = (k, v) => setForm((f) => ({ ...f, [k]: v }));
  const toggleSys = (s) =>
  setForm((f) => {
    const has = f.systems.includes(s);
    return { ...f, systems: has ? f.systems.filter((x) => x !== s) : [...f.systems, s] };
  });

  const missing = [];
  if (!form.salon.trim()) missing.push(lang === "nl" ? "salonnaam" : "salon name");
  if (!form.city.trim()) missing.push(lang === "nl" ? "stad" : "city");
  if (!form.type) missing.push(lang === "nl" ? "type salon" : "salon type");
  const canSubmit = missing.length === 0;

  // Friendly status: count of completed fields and next action
  const completed = 3 - missing.length;
  const statusText = canSubmit ?
  c.cta_note :
  lang === "nl" ?
  missing.length === 3 ?
  "Vul je salonnaam in om te starten" :
  `Nog ${missing.length}: ${missing.join(", ")}` :
  missing.length === 3 ?
  "Add your salon name to begin" :
  `${missing.length} to go: ${missing.join(", ")}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (canSubmit) onSubmit();
  };

  // Slow-motion ref for the hero background video — and force-mute via JS property
  const heroVideoRef = useRef(null);
  useEffect(() => {
    if (heroVideoRef.current) {
      heroVideoRef.current.muted = true;
      heroVideoRef.current.volume = 0;
      heroVideoRef.current.playbackRate = 0.7;
    }
  }, []);

  return (
    <div className="page-inner page-inner--hero">
      <section className="form-hero fade-up">
        <video
          ref={heroVideoRef}
          className="form-hero__bg"
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
        >
          <source src="assets/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="form-hero__veil" aria-hidden="true" />

        <div className="form-hero__form">
          <div><Eyebrow>{c.eyebrow}</Eyebrow></div>
          <h1 className="form-hero__title fade-up fade-up--d1">
            {lang === "nl" ?
            <>Check je online <em>vindbaarheid</em> in 30 seconden.</> :
            <>Check your online <em>discoverability</em> in 30 seconds.</>}
          </h1>
          <p className="form-hero__sub fade-up fade-up--d2">{c.hero_sub}</p>

          <form
            className="form-stack fade-up fade-up--d3"
            aria-label={c.eyebrow}
            onSubmit={handleSubmit}
            noValidate>
            
            <div className="form-progress" aria-hidden="true">
              {[0, 1, 2].map((i) =>
              <span
                key={i}
                className={`form-progress__dot ${i < completed ? "is-done" : ""}`} />

              )}
              <span className="form-progress__label">
                {completed}/3 {lang === "nl" ? "ingevuld" : "completed"}
              </span>
            </div>

            <div className="form-stack__row">
              <label className="field-label" htmlFor="f-salon">
                <span>{c.field_salon}</span>
              </label>
              <input
                id="f-salon"
                className="input"
                type="text"
                placeholder={c.field_salon_placeholder}
                value={form.salon}
                onChange={(e) => setField("salon", e.target.value)}
                autoComplete="organization"
                required />
              
            </div>

            <div className="form-stack__row">
              <label className="field-label" htmlFor="f-city">
                <span>{c.field_city}</span>
              </label>
              <input
                id="f-city"
                className="input"
                type="text"
                placeholder={c.field_city_placeholder}
                value={form.city}
                onChange={(e) => setField("city", e.target.value)}
                autoComplete="address-level2"
                required />
              
            </div>

            <div className="form-stack__row">
              <span className="field-label" id="lbl-type"><span>{c.field_type}</span></span>
              <div className="chip-row" role="radiogroup" aria-labelledby="lbl-type">
                {SALON_TYPES[lang].map((t) =>
                <button
                  key={t}
                  type="button"
                  role="radio"
                  aria-checked={form.type === t}
                  className={`chip ${form.type === t ? "chip--active" : ""}`}
                  onClick={() => setField("type", t)}>
                  
                    {t}
                  </button>
                )}
              </div>
            </div>

            <div className="form-stack__row">
              <span className="field-label" id="lbl-booking">
                <span>{c.field_booking}</span>
                <span className="field-label__hint">{c.field_booking_hint}</span>
              </span>
              <div className="chip-row" role="group" aria-labelledby="lbl-booking">
                {BOOKING_SYSTEMS.map((s) =>
                <button
                  key={s}
                  type="button"
                  aria-pressed={form.systems.includes(s)}
                  className={`chip ${form.systems.includes(s) ? "chip--active" : ""}`}
                  onClick={() => toggleSys(s)}>
                  
                    {s}
                  </button>
                )}
              </div>
            </div>

            <div className="submit-row">
              <button
                className={`btn ${!canSubmit ? "btn--soft" : ""}`}
                disabled={!canSubmit}
                type="submit">
                
                {c.cta_start} <span className="arr">→</span>
              </button>
              <span className="submit-note" role="status" aria-live="polite">
                {statusText}
              </span>
            </div>
          </form>
        </div>
      </section>
    </div>);

}

// ─────────────────────────────────────────────────────────────────────────────
// 2) SCAN SCREEN

function ScanScreen({ lang, form, onDone }) {
  const c = COPY[lang];
  const [progress, setProgress] = useState(0);
  const [activeIdx, setActiveIdx] = useState(0);
  const totalMs = 7000;
  const steps = c.pillars;

  useEffect(() => {
    const start = performance.now();
    let raf;
    const tick = () => {
      const elapsed = performance.now() - start;
      const p = Math.min(1, elapsed / totalMs);
      setProgress(p);
      setActiveIdx(Math.min(steps.length - 1, Math.floor(p * steps.length)));
      if (p < 1) raf = requestAnimationFrame(tick);else
      setTimeout(onDone, 350);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="page-inner">
      <section className="scan-wrap fade-up">
        <Eyebrow>{c.scan_eyebrow}</Eyebrow>
        <div className="scan-pct">{Math.round(progress * 100)}<sup>%</sup></div>
        <div className="scan-rule">
          <div className="scan-rule__fill" style={{ width: `${progress * 100}%` }} />
        </div>
        <p className="scan-sub">{c.scan_sub}</p>

        <ul className="scan-list">
          {steps.map((s, i) => {
            const state = i < activeIdx ? "done" : i === activeIdx ? "active" : "pending";
            return (
              <li key={s.num} className={`scan-item scan-item--${state}`}>
                <span className="scan-item__num">{s.num}</span>
                <span className="scan-item__name">{s.name}</span>
                <span className="scan-item__status">
                  {state === "active" && <span className="spin" aria-hidden="true"></span>}
                  {state === "done" && <span className="dot" aria-hidden="true"></span>}
                  {state === "pending" && <span className="dot dot--pending" aria-hidden="true"></span>}
                  {state === "active" ? c.scan_status_active : state === "done" ? c.scan_status_done : c.scan_status_pending}
                </span>
              </li>);

          })}
        </ul>
      </section>
    </div>);

}

// ─────────────────────────────────────────────────────────────────────────────
// 3) RESULT SCREEN — editorial spread

function scoreBand(score) {
  return score >= 8 ? "high" : score >= 5 ? "mid" : "low";
}
function scoreClass(score) {
  return `s-${scoreBand(score)}`;
}

function ResultsScreen({ lang, result, onReset }) {
  const c = COPY[lang];
  const rc = RESULT_CTA;
  const otherLang = lang === "nl" ? "en" : "nl";
  const salon = result.salon;
  const score = result.overall;

  // Pillar row expand/collapse state
  const [openRow, setOpenRow] = useState(null);

  // Sticky CTA bar: appears after the score-block scrolls out of view
  const [stickyOn, setStickyOn] = useState(false);
  const scoreRef = useRef(null);
  useEffect(() => {
    if (!scoreRef.current || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      ([e]) => setStickyOn(!e.isIntersecting && e.boundingClientRect.top < 0),
      { threshold: 0 }
    );
    io.observe(scoreRef.current);
    return () => io.disconnect();
  }, []);

  const verdictNl = getVerdict(score, "nl");
  const verdictEn = getVerdict(score, "en");

  const pulloutLabelNl = rc.pullout_label.nl.replace("{salon}", salon);
  const pulloutLabelEn = rc.pullout_label.en.replace("{salon}", salon);

  const closingHeadNl = rc.heading.nl.replace("{salon}", salon).replace("{score}", score.toFixed(1));
  const closingHeadEn = rc.heading.en.replace("{salon}", salon).replace("{score}", score.toFixed(1));

  // Top finding = first non-good finding (warn or bad), falls back to first
  const topFinding = (p) => {
    const arr = p.findings[lang] || [];
    return arr.find((f) => f.tone !== "good") || arr[0];
  };
  const topAction = (p) => (p.actions[lang] || [])[0];

  return (
    <div className="page-inner">
      <section className="result">
        <div className="result__eyebrow fade-up">
          <Eyebrow>
            {lang === "nl" ? "Audit voor" : "Audit for"} {salon} · {result.city}
          </Eyebrow>
        </div>

        {/* Verdict — italic, large */}
        <h1 className="verdict fade-up fade-up--d1">
          {lang === "nl" ? verdictNl : verdictEn}
          <span className="bi">{lang === "nl" ? verdictEn : verdictNl}</span>
        </h1>

        {/* Big score */}
        <div className="score-block fade-up fade-up--d2" ref={scoreRef}>
          <span className="score-num">
            {score.toFixed(1)}<span className="score-num__suffix">/10</span>
          </span>
          <span className="score-tag">
            <span className="score-tag__salon">{salon}</span>
            <em>{result.city} · {result.type[lang]}</em>
          </span>
        </div>

        {/* Pillar typographic table — rows expand on click */}
        <div className="pillar-table-hint" aria-hidden="true">
          {lang === "nl" ? "Klik een rij om details te zien" : "Click a row to see details"}
        </div>
        <ol className="pillar-table fade-up fade-up--d3">
          {result.pillars.map((p, idx) => {
            const pillarMeta = COPY[lang].pillars.find((x) => x.num === p.num);
            const isOpen = openRow === idx;
            const tf = topFinding(p);
            const ta = topAction(p);
            return (
              <li
                className={`pillar-row ${isOpen ? "pillar-row--open" : ""}`}
                key={p.num}>
                
                <button
                  type="button"
                  className="pillar-row__toggle"
                  aria-expanded={isOpen}
                  aria-controls={`pillar-detail-${idx}`}
                  onClick={() => setOpenRow(isOpen ? null : idx)}>
                  
                  <span className="pillar-row__name">
                    <span className="pillar-row__name-num">{p.num}</span>
                    {pillarMeta ? pillarMeta.name : p.key}
                  </span>
                  <span className="pillar-row__gap">
                    {p.summary[lang]}
                  </span>
                  <span className={`pillar-row__score ${scoreClass(p.score)}`}>
                    {p.score.toFixed(1)}<span className="pillar-row__score-suffix">/10</span>
                  </span>
                  <span className="pillar-row__chev" aria-hidden="true">{isOpen ? "−" : "+"}</span>
                </button>
                {isOpen &&
                <div
                  id={`pillar-detail-${idx}`}
                  className="pillar-row__detail">
                  
                    <div className="pillar-row__detail-col">
                      <div className="pillar-row__detail-label">
                        {lang === "nl" ? "Belangrijkste bevinding" : "Top finding"}
                      </div>
                      <div className="pillar-row__finding">
                        <span className={`finding-dot finding-dot--${tf?.tone || "warn"}`} aria-hidden="true" />
                        <div>
                          <strong>{tf?.title}</strong>
                          <p>{tf?.body}</p>
                        </div>
                      </div>
                    </div>
                    <div className="pillar-row__detail-col">
                      <div className="pillar-row__detail-label">
                        {lang === "nl" ? "Eerste stap" : "First step"}
                      </div>
                      <div className="pillar-row__action">
                        <div className="pillar-row__action-title">{ta?.title}</div>
                        <div className="pillar-row__action-time">{ta?.time}</div>
                      </div>
                    </div>
                  </div>
                }
              </li>);

          })}
        </ol>

        {/* Pull-out — the three levers */}
        <aside className="pullout fade-up fade-up--d4">
          <h2 className="pullout__label">
            {pulloutLabelNl}
            <span className="bi">{pulloutLabelEn}</span>
          </h2>
          <ol className="pullout__list">
            {result.top3.nl.map((line, i) =>
            <li className="pullout__item" key={i}>
                <span className="pullout__num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                <p className="pullout__text">
                  {line}
                  <span className="bi">{result.top3.en[i]}</span>
                </p>
              </li>
            )}
          </ol>
        </aside>

        {/* Editorial closing — booking CTA */}
        <section className="closing fade-up">
          <Eyebrow>{rc.eyebrow[lang]}</Eyebrow>
          <h2 className="closing__head">
            {closingHeadNl}
            <span className="bi">{closingHeadEn}</span>
          </h2>
          <p className="closing__sub">
            {rc.sub.nl}
            <span className="bi">{rc.sub.en}</span>
          </p>
          <div className="closing__cta">
            <a className="btn" href="https://smoova.studio/book">
              {rc.primary[lang]} <span className="arr">→</span>
            </a>
            <button type="button" className="link-quiet" onClick={onReset}>
              {rc.secondary[lang]}
            </button>
          </div>
          <p className="closing__proof">
            <strong>{rc.recent_label[lang]}</strong>
            {rc.recent_clients.join(" · ")}
          </p>
        </section>
      </section>

      {/* Sticky compact CTA — slides up after score scrolls out of view */}
      <div
        className={`sticky-cta ${stickyOn ? "is-on" : ""}`}
        aria-hidden={!stickyOn}>
        
        <div className="sticky-cta__inner">
          <div className="sticky-cta__score">
            <span className="sticky-cta__num">{score.toFixed(1)}<span className="sticky-cta__num-suffix">/10</span></span>
            <span className="sticky-cta__salon">{salon}</span>
          </div>
          <a className="btn btn--sm" href="https://smoova.studio/book">
            {rc.primary[lang]} <span className="arr">→</span>
          </a>
        </div>
      </div>
    </div>);

}

// ─────────────────────────────────────────────────────────────────────────────
// 4) EMPTY STATES

function EmptyScreen({ lang, kind, onReset }) {
  const c = COPY[lang];
  const isErr = kind === "error";
  const num = isErr ? c.err_num : c.not_found_num;
  const title = isErr ? c.err_title : c.not_found_title;
  const body = isErr ? c.err_p : c.not_found_p;
  const again = isErr ? c.err_again : c.not_found_again;
  const help = isErr ? c.err_help : c.not_found_help;

  return (
    <div className="page-inner">
      <section className="empty fade-up">
        <div className="empty__num">{num}</div>
        <Eyebrow>{isErr ? lang === "nl" ? "Foutmelding" : "Error" : lang === "nl" ? "Geen resultaat" : "No result"}</Eyebrow>
        <h2 className="empty__title">{title}</h2>
        <p className="empty__body">{body}</p>
        <div className="empty__row">
          <button className="btn" onClick={onReset} type="button">
            {again} <span className="arr">→</span>
          </button>
          <a className="btn btn--ghost" href="https://instagram.com/smoova.studio" target="_blank" rel="noopener">
            {help}
          </a>
        </div>
      </section>
    </div>);

}

Object.assign(window, {
  Nav, Footer, FormScreen, ScanScreen, ResultsScreen, EmptyScreen, Eyebrow
});