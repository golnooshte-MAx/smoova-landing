// Smoova Audit — main app

const { useState: useS, useEffect: useE } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "state": "form",
  "lang": "nl",
  "theme": "light",
  "showFooter": true
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Form state
  const [form, setForm] = useS({
    salon: "Atelier Margaux",
    city: "Utrecht",
    type: "",   // set after lang load
    systems: ["Treatwell"],
  });

  // Set initial type to first option based on current lang
  useE(() => {
    if (!form.type) {
      const opt = SALON_TYPES[t.lang][0]; // "Kapsalon"
      setForm((f) => ({ ...f, type: opt }));
    }
  }, [t.lang]);

  // Apply theme
  useE(() => {
    document.documentElement.dataset.theme = t.theme;
  }, [t.theme]);

  const goto = (s) => setTweak("state", s);

  const onSubmit = () => {
    // Soft validation: if salon name is "xxx" or "test", go to notfound
    const s = form.salon.trim().toLowerCase();
    if (s === "test" || s === "xxx" || s === "notfound") {
      goto("scanning");
      setTimeout(() => goto("notfound"), 7500);
    } else {
      goto("scanning");
    }
  };

  const reset = () => goto("form");

  const result = {
    ...DEMO_RESULT,
    salon: form.salon || DEMO_RESULT.salon,
    city: form.city || DEMO_RESULT.city,
    type: { nl: form.type || DEMO_RESULT.type.nl, en: form.type || DEMO_RESULT.type.en },
    systems: form.systems.length ? form.systems : DEMO_RESULT.systems,
  };

  return (
    <>
      <Nav lang={t.lang} setLang={(l) => setTweak("lang", l)} />

      <main className="page" data-screen-label={`Smoova Audit — ${t.state}`}>
        {t.state === "form" && (
          <>
            <FormScreen lang={t.lang} form={form} setForm={setForm} onSubmit={onSubmit} />
            <IntroSection lang={t.lang} />
            <FAQSection lang={t.lang} />
            <PillarLongform lang={t.lang} />
            <FinalCTA lang={t.lang} />
          </>
        )}
        {t.state === "scanning" && (
          <ScanScreen
            lang={t.lang}
            form={form}
            onDone={() => goto("results")}
          />
        )}
        {t.state === "results" && (
          <ResultsScreen lang={t.lang} result={result} onReset={reset} />
        )}
        {t.state === "notfound" && (
          <EmptyScreen lang={t.lang} kind="notfound" onReset={reset} />
        )}
        {t.state === "error" && (
          <EmptyScreen lang={t.lang} kind="error" onReset={reset} />
        )}
      </main>

      {t.showFooter && <Footer lang={t.lang} />}

      <TweaksPanel title="Tweaks">
        <TweakSection label={t.lang === "nl" ? "Scherm" : "Screen"} />
        <TweakRadio
          label={t.lang === "nl" ? "Status" : "State"}
          value={t.state}
          options={["form", "scanning", "results", "notfound", "error"]}
          onChange={(v) => setTweak("state", v)}
        />

        <TweakSection label={t.lang === "nl" ? "Weergave" : "Display"} />
        <TweakRadio
          label={t.lang === "nl" ? "Taal" : "Language"}
          value={t.lang}
          options={["nl", "en"]}
          onChange={(v) => setTweak("lang", v)}
        />
        <TweakRadio
          label={t.lang === "nl" ? "Thema" : "Theme"}
          value={t.theme}
          options={["light", "dark"]}
          onChange={(v) => setTweak("theme", v)}
        />
        <TweakToggle
          label={t.lang === "nl" ? "Footer" : "Footer"}
          value={t.showFooter}
          onChange={(v) => setTweak("showFooter", v)}
        />

        <TweakSection label={t.lang === "nl" ? "Snelle acties" : "Quick actions"} />
        <TweakButton
          label={t.lang === "nl" ? "Naar resultaten" : "Jump to results"}
          onClick={() => setTweak("state", "results")}
        />
        <TweakButton
          label={t.lang === "nl" ? "Reset formulier" : "Reset form"}
          onClick={() => {
            setForm({ salon: "", city: "", type: "", systems: [] });
            setTweak("state", "form");
          }}
        />
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
