/* Secciones del sitio */
const { useState, useEffect } = React;

/* HERO -------------------------------------------------- */
const Hero = ({ heroLayout, showShells }) => {
  if (heroLayout === "split") return <HeroSplit showShells={showShells} />;
  if (heroLayout === "postal") return <HeroPostal showShells={showShells} />;
  return <HeroCentered showShells={showShells} />;
};

const HeroCentered = ({ showShells }) => (
  <section id="inicio" style={{ paddingTop: "calc(140px * var(--density))", paddingBottom: "calc(80px * var(--density))" }}>
    {showShells && <div className="shells-bg" />}
    <div className="wrap center">
      <div className="eyebrow" style={{ justifyContent: "center" }}>
        <IconPin /> Chichiriviche, Falcón · Venezuela
      </div>
      <h1>
        Tu próximo capítulo<br />
        empieza junto al <span style={{ color: "var(--teal)", fontStyle: "italic" }}>mar</span>
      </h1>
      <p style={{ margin: "26px auto 0", fontSize: "1.1rem", color: "var(--ink-soft)", maxWidth: "560px" }}>
        Posada familiar a orilla de playa. Habitaciones para todos los tamaños de tribu, paseos al Refugio de Cuare, y un ritmo que te invita a quedarte.
      </p>
      <div className="divider" style={{ maxWidth: "320px", margin: "36px auto" }}>
        <ShipWheel size={26} />
      </div>
      <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
        <a className="btn btn-primary" href="#reservar"><IconWhatsapp /> Reservar por WhatsApp</a>
        <a className="btn btn-ghost" href="#habitaciones">Ver habitaciones</a>
      </div>
      <HeroImage />
    </div>
  </section>
);

const HeroSplit = ({ showShells }) => (
  <section id="inicio" style={{ paddingTop: "calc(120px * var(--density))", paddingBottom: "calc(80px * var(--density))" }}>
    {showShells && <div className="shells-bg" />}
    <div className="wrap" style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 64, alignItems: "center" }}>
      <div>
        <div className="eyebrow"><IconPin /> Chichiriviche, Falcón</div>
        <h1>
          Posada <span className="script" style={{ color: "var(--teal)", fontSize: "1.1em" }}>Bitácora</span>,<br />
          <span style={{ color: "var(--ink-soft)", fontStyle: "italic" }}>hospedaje y paseos</span>
        </h1>
        <p style={{ marginTop: 24, fontSize: "1.08rem", color: "var(--ink-soft)" }}>
          Una posada familiar a orilla de playa, donde cada huésped escribe su propia bitácora de mar, manglares y atardeceres en Cuare.
        </p>
        <div style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
          <a className="btn btn-primary" href="#reservar"><IconWhatsapp /> Reservar</a>
          <a className="btn btn-ghost" href="#habitaciones">Habitaciones →</a>
        </div>
      </div>
      <div style={{ position: "relative", aspectRatio: "4/5", borderRadius: 18, overflow: "hidden", boxShadow: "0 30px 60px -30px rgba(0,0,0,0.3)" }}>
        <img src={window.__resources.posadaFrente} alt="Frente de la Posada Bitácora con el mar" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
    </div>
  </section>
);

const HeroPostal = ({ showShells }) => (
  <section id="inicio" style={{ paddingTop: "calc(120px * var(--density))", paddingBottom: "calc(60px * var(--density))" }}>
    {showShells && <div className="shells-bg" />}
    <div className="wrap">
      <div style={{
        background: "var(--sand-soft)",
        border: "1px solid var(--line)",
        borderRadius: 6,
        padding: "clamp(40px, 6vw, 80px)",
        boxShadow: "0 30px 60px -30px rgba(0,0,0,0.25), 0 0 0 8px var(--bg), 0 0 0 9px var(--line)",
        position: "relative",
        textAlign: "center",
      }}>
        <div style={{ position: "absolute", top: 24, left: 24, fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.18em", color: "var(--coral-deep)" }}>
          BITÁCORA · No. 001
        </div>
        <div style={{ position: "absolute", top: 24, right: 24, fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.18em", color: "var(--coral-deep)" }}>
          12°N · 68°W
        </div>
        <div className="eyebrow" style={{ justifyContent: "center" }}><IconPin /> Chichiriviche, Falcón</div>
        <h1>
          Bienvenidos a casa,<br />
          <span className="script" style={{ color: "var(--teal)", fontSize: "1.4em" }}>viajeros del mar</span>
        </h1>
        <p style={{ margin: "26px auto 0", fontSize: "1.08rem", color: "var(--ink-soft)", maxWidth: 560 }}>
          Posada familiar a orilla de playa. Hospedaje, paseos al Refugio de Cuare, y todo el ritmo del Caribe venezolano.
        </p>
        <div className="divider" style={{ maxWidth: 280, margin: "32px auto" }}>
          <ShipWheel size={24} />
        </div>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <a className="btn btn-primary" href="#reservar"><IconWhatsapp /> Reservar</a>
          <a className="btn btn-ghost" href="#habitaciones">Ver habitaciones</a>
        </div>
      </div>
    </div>
  </section>
);

const HeroImage = () => (
  <div style={{
    marginTop: 56,
    aspectRatio: "21/9",
    borderRadius: 18,
    overflow: "hidden",
    position: "relative",
    boxShadow: "0 40px 80px -40px rgba(0,0,0,0.3)",
  }}>
    <img src={window.__resources.posadaFrente} alt="Frente de la Posada Bitácora con el mar" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }} />
  </div>
);

/* AMENITIES STRIP -------------------------------------- */
const AmenitiesStrip = () => {
  const map = { wifi: IconWifi, air: IconAir, pool: IconPool, kitchen: IconKitchen, car: IconCar, beach: IconBeach, hammock: IconHammock };
  return (
    <section style={{ padding: "40px 0", background: "var(--teal)", color: "#fff" }}>
      <div className="wrap" style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: 24 }}>
        {AMENITIES.map(a => {
          const Ico = map[a.icon];
          return (
            <div key={a.label} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: "0.92rem" }}>
              <Ico /> {a.label}
            </div>
          );
        })}
      </div>
    </section>
  );
};

/* SOBRE -------------------------------------------------- */
const Sobre = ({ showShells }) => (
  <section id="sobre" style={{ background: "var(--sand)" }}>
    {showShells && <div className="shells-bg" />}
    <div className="wrap" style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 64, alignItems: "center" }}>
      <div style={{ aspectRatio: "4/5", borderRadius: 14, overflow: "hidden", position: "relative" }}>
        <img src={window.__resources.areasComunes} alt="Áreas comunes de la Posada Bitácora" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
      <div>
        <div className="eyebrow">Nuestra historia</div>
        <h2>Una posada que se siente como tu casa de playa.</h2>
        <p style={{ marginTop: 22, fontSize: "1.05rem", color: "var(--ink-soft)" }}>
          Estamos a orilla de playa en Chichiriviche, listos para recibirte como recibimos a los nuestros. Aquí no hay prisa: hay piscina, hamacas, cocina compartida y el mar siempre a dos pasos.
        </p>
        <p style={{ marginTop: 16, fontSize: "1.05rem", color: "var(--ink-soft)" }}>
          Y cuando quieras escribir un nuevo capítulo, te llevamos a navegar por el Refugio de Fauna Silvestre de Cuare — uno de los rincones más bellos del Caribe venezolano.
        </p>
        <div style={{ display: "flex", gap: 32, marginTop: 36, flexWrap: "wrap" }}>
          <Stat n="5" label="habitaciones" />
          <Stat n="20" label="personas máx." />
          <Stat n="0m" label="al mar" />
        </div>
      </div>
    </div>
  </section>
);

const Stat = ({ n, label }) => (
  <div>
    <div style={{ fontFamily: "var(--font-display)", fontSize: "2.6rem", color: "var(--teal)", lineHeight: 1 }}>{n}</div>
    <div className="mono" style={{ marginTop: 6, color: "var(--ink-soft)" }}>{label}</div>
  </div>
);

Object.assign(window, { Hero, AmenitiesStrip, Sobre });
