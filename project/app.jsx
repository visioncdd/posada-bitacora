/* App principal con Tweaks */
const { useState: useStateApp } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "style": "bitacora",
  "heroLayout": "split",
  "cardStyle": "default",
  "showShells": true,
  "density": 1,
  "fontDisplay": "Fraunces",
  "fontBody": "Inter"
}/*EDITMODE-END*/;

const FONT_DISPLAY_OPTIONS = [
  { value: "Fraunces",         label: "Fraunces" },
  { value: "Playfair Display", label: "Playfair" },
  { value: "DM Serif Display", label: "DM Serif" },
  { value: "Cormorant Garamond", label: "Cormorant" },
];
const FONT_BODY_OPTIONS = [
  { value: "Inter",         label: "Inter" },
  { value: "Manrope",       label: "Manrope" },
  { value: "Work Sans",     label: "Work Sans" },
  { value: "Nunito Sans",   label: "Nunito" },
];

function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Apply CSS vars
  React.useEffect(() => {
    document.documentElement.dataset.style = tweaks.style;
    document.documentElement.dataset.cards = tweaks.cardStyle;
    document.documentElement.style.setProperty("--density", tweaks.density);
    document.documentElement.style.setProperty("--shells", tweaks.showShells ? 1 : 0);
    document.documentElement.style.setProperty("--font-display", `"${tweaks.fontDisplay}", Georgia, serif`);
    document.documentElement.style.setProperty("--font-body", `"${tweaks.fontBody}", system-ui, sans-serif`);
  }, [tweaks]);

  // Inject shell SVG as background
  React.useEffect(() => {
    const shellSvg = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' fill='none' stroke='%23D08878' stroke-width='0.7' stroke-linecap='round'>
<path d='M50 12 C 22 14, 8 50, 18 78 C 28 90, 72 90, 82 78 C 92 50, 78 14, 50 12 Z'/>
<path d='M50 12 L 50 88'/>
<path d='M50 16 C 38 30, 30 60, 28 84'/>
<path d='M50 16 C 62 30, 70 60, 72 84'/>
<path d='M50 18 C 44 32, 38 62, 38 86'/>
<path d='M50 18 C 56 32, 62 62, 62 86'/>
</svg>`).replace(/%23/g, "%23")}`;
    document.documentElement.style.setProperty("--shell-svg", `url("${shellSvg}")`);
  }, []);

  return (
    <>
      <Nav />
      <Hero heroLayout={tweaks.heroLayout} showShells={tweaks.showShells} />
      <AmenitiesStrip />
      <Sobre showShells={tweaks.showShells} />
      <Habitaciones cardStyle={tweaks.cardStyle} />
      <Incluido />
      <AreasComunes />
      <Paseos showShells={tweaks.showShells} />
      <Tarifas />
      <Horarios />
      <Testimonios />
      <Ubicacion />
      <Checklist />
      <FAQ />
      <Reservar />
      <Footer />

      <TweaksPanel title="Tweaks">
        <TweakSection title="Estilo visual">
          <TweakSelect
            label="Dirección"
            value={tweaks.style}
            onChange={(v) => setTweak("style", v)}
            options={[
              { value: "bitacora", label: "Bitácora cálida" },
              { value: "costa",    label: "Costa fresca" },
              { value: "vintage",  label: "Náutico vintage" },
            ]}
          />
          <TweakToggle label="Patrón de conchas" value={tweaks.showShells} onChange={(v) => setTweak("showShells", v)} />
        </TweakSection>

        <TweakSection title="Layout del hero">
          <TweakRadio
            value={tweaks.heroLayout}
            onChange={(v) => setTweak("heroLayout", v)}
            options={[
              { value: "centered", label: "Centrado" },
              { value: "split",    label: "Dividido" },
              { value: "postal",   label: "Postal" },
            ]}
          />
        </TweakSection>

        <TweakSection title="Tarjetas de habitación">
          <TweakRadio
            value={tweaks.cardStyle}
            onChange={(v) => setTweak("cardStyle", v)}
            options={[
              { value: "default", label: "Tarjeta" },
              { value: "postal",  label: "Postal" },
              { value: "ticket",  label: "Ticket" },
            ]}
          />
        </TweakSection>

        <TweakSection title="Tipografía">
          <TweakSelect label="Titulares" value={tweaks.fontDisplay} onChange={(v) => setTweak("fontDisplay", v)} options={FONT_DISPLAY_OPTIONS} />
          <TweakSelect label="Cuerpo"     value={tweaks.fontBody}    onChange={(v) => setTweak("fontBody", v)}    options={FONT_BODY_OPTIONS} />
        </TweakSection>

        <TweakSection title="Densidad">
          <TweakSlider label="Escala" min={0.85} max={1.15} step={0.05} value={tweaks.density} onChange={(v) => setTweak("density", v)} />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
