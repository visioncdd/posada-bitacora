/* Habitaciones, paseos, testimonios, FAQ, ubicación, reservas, footer */

const featIconMap = {
  bed: IconBed, bath: IconBath, ac: IconAC, users: IconUsers, fridge: IconFridge,
};

/* HABITACIONES ----------------------------------------- */
const Habitaciones = ({ cardStyle }) => (
  <section id="habitaciones">
    <div className="wrap">
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 24, marginBottom: 48 }}>
        <div>
          <div className="eyebrow">Hospedaje</div>
          <h2>Habitaciones para cada tribu.</h2>
        </div>
        <p style={{ maxWidth: 360, color: "var(--ink-soft)" }}>
          Desde matrimoniales para una escapada en pareja hasta séxtuples para toda la familia. Todas con baño privado y aire acondicionado.
        </p>
      </header>

      <div className="grid grid-3" data-cards={cardStyle}>
        {ROOMS.map(r => <RoomCard key={r.id} room={r} />)}
      </div>

      <div style={{ textAlign: "center", marginTop: 56 }}>
        <a className="btn btn-coral" href="#reservar"><IconWhatsapp /> Consultar disponibilidad</a>
      </div>
    </div>
  </section>
);

const ROOM_PHOTOS = {
  "sextuple-a":  window.__resources.sextupleA,
  "sextuple-b":  window.__resources.sextupleB,
  "quintuple":   window.__resources.quintuple,
  "triple":      window.__resources.triple,
  "matrimonial": window.__resources.matrimonial,
};

const RoomCard = ({ room }) => {
  const photo = ROOM_PHOTOS[room.id];
  return (
  <article className="card">
    <div className="card-img">
      {photo
        ? <img src={photo} alt={room.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        : <div className="placeholder"><span>Foto · {room.name}</span></div>}
      <div style={{
        position: "absolute", top: 14, left: 14,
        background: "var(--sand-soft)",
        padding: "5px 12px", borderRadius: 999,
        fontSize: "0.75rem", fontFamily: "var(--font-mono)",
        letterSpacing: "0.1em", textTransform: "uppercase",
        color: "var(--teal-deep)",
        border: "1px solid var(--line)",
      }}>
        {room.tag}
      </div>
    </div>
    <div className="card-body">
      <div className="card-title">
        <h3>{room.name}</h3>
        <span className="price">{room.capacity} pers.</span>
      </div>
      <p style={{ fontSize: "0.95rem", color: "var(--ink-soft)" }}>{room.summary}</p>
      <ul className="card-feats">
        {room.features.map((f, i) => {
          const Ico = featIconMap[f.icon];
          return (
            <li key={i}>
              <span style={{ color: "var(--teal)", display: "inline-flex" }}><Ico /></span>
              {f.text}
            </li>
          );
        })}
      </ul>
    </div>
  </article>
  );
};

/* PASEOS ------------------------------------------------ */
const Paseos = ({ showShells }) => (
  <section id="paseos" style={{ background: "var(--sand)" }}>
    {showShells && <div className="shells-bg" />}
    <div className="wrap">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "stretch" }}>
        <div style={{ position: "relative", borderRadius: 14, overflow: "hidden", minHeight: 420 }}>
          <img src={window.__resources.lanchaCuare} alt="Lancha en aguas turquesas rumbo al Refugio de Cuare" style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", inset: 0 }} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div className="eyebrow"><Boat size={16} /> Hospedaje y Paseos</div>
          <h2>Paseos al Refugio de Fauna Silvestre de Cuare.</h2>
          <p style={{ marginTop: 22, fontSize: "1.05rem", color: "var(--ink-soft)" }}>
            Navegamos por uno de los humedales más bellos del Caribe venezolano. Manglares, aves, cayos de agua transparente y rincones donde el tiempo se detiene.
          </p>
          <ul style={{ listStyle: "none", marginTop: 28, display: "grid", gap: 14 }}>
            {[
              "Salidas en lancha con guía local",
              "Rutas a Cayo Sal, Cayo Sombrero y Boca Seca",
              "Avistamiento de aves y manglares",
              "Coordinamos según el clima y tu grupo",
            ].map((t, i) => (
              <li key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                <span style={{ color: "var(--coral-deep)", marginTop: 4 }}><Wave width={28} /></span>
                <span style={{ color: "var(--ink)" }}>{t}</span>
              </li>
            ))}
          </ul>
          <div style={{ marginTop: 36 }}>
            <a className="btn btn-primary" href="#reservar"><IconWhatsapp /> Pregunta por los paseos</a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* TESTIMONIOS ------------------------------------------- */
const Testimonios = () => (
  <section id="testimonios">
    <div className="wrap">
      <div style={{ textAlign: "center", marginBottom: 56 }}>
        <div className="eyebrow" style={{ justifyContent: "center" }}>Lo que cuentan los huéspedes</div>
        <h2>Bitácoras compartidas.</h2>
      </div>
      <div className="grid grid-3">
        {TESTIMONIALS.map((t, i) => (
          <figure key={i} style={{
            background: "var(--sand-soft)",
            border: "1px solid var(--line)",
            borderRadius: 14,
            padding: "32px 28px",
            position: "relative",
          }}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "3.5rem", color: "var(--coral)", lineHeight: 0.5, marginBottom: 8 }}>"</div>
            <blockquote style={{ fontSize: "1.05rem", lineHeight: 1.55, color: "var(--ink)" }}>
              {t.quote}
            </blockquote>
            <figcaption style={{ marginTop: 24, paddingTop: 18, borderTop: "1px solid var(--line)" }}>
              <div style={{ fontWeight: 500 }}>{t.name}</div>
              <div className="mono" style={{ color: "var(--ink-soft)", marginTop: 4 }}>{t.origin} · {t.stay}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);

/* FAQ --------------------------------------------------- */
const FAQ = () => {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" style={{ background: "var(--sand)" }}>
      <div className="wrap" style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 64, alignItems: "flex-start" }}>
        <div>
          <div className="eyebrow">Preguntas frecuentes</div>
          <h2>¿Dudas antes de zarpar?</h2>
          <p style={{ marginTop: 18, color: "var(--ink-soft)" }}>
            Respondemos lo más común. Para cualquier otra cosa, escríbenos directo por WhatsApp.
          </p>
        </div>
        <div>
          {FAQS.map((f, i) => (
            <div key={i} style={{ borderTop: "1px solid var(--line)", padding: "20px 0" }}>
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", textAlign: "left", gap: 24 }}
              >
                <span style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem", color: "var(--ink)" }}>{f.q}</span>
                <span style={{
                  flexShrink: 0, width: 28, height: 28, borderRadius: "50%",
                  background: open === i ? "var(--teal)" : "transparent",
                  border: "1px solid " + (open === i ? "var(--teal)" : "var(--line)"),
                  color: open === i ? "#fff" : "var(--teal)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "all .2s",
                }}>
                  {open === i ? "−" : "+"}
                </span>
              </button>
              {open === i && (
                <p style={{ marginTop: 14, color: "var(--ink-soft)", maxWidth: "60ch" }}>{f.a}</p>
              )}
            </div>
          ))}
          <div style={{ borderTop: "1px solid var(--line)" }} />
        </div>
      </div>
    </section>
  );
};

/* UBICACION --------------------------------------------- */
const Ubicacion = () => (
  <section id="ubicacion">
    <div className="wrap">
      <div style={{ textAlign: "center", marginBottom: 48 }}>
        <div className="eyebrow" style={{ justifyContent: "center" }}><IconPin /> Cómo llegar</div>
        <h2>A orilla de playa, en Chichiriviche.</h2>
      </div>

      <div style={{
        position: "relative",
        aspectRatio: "16/7",
        borderRadius: 18,
        overflow: "hidden",
        border: "1px solid var(--line)",
        background: "var(--sand)",
      }}>
        <MapPlaceholder />
      </div>

      <div className="grid grid-3" style={{ marginTop: 40 }}>
        <RouteCard title="Desde Caracas" time="≈ 4 hrs" detail="Por la autopista regional, vía Valencia → Morón → Chichiriviche." />
        <RouteCard title="Desde Valencia"  time="≈ 2 hrs"   detail="Tomando la vía Morón hasta Chichiriviche." />
        <RouteCard title="Desde Punto Fijo" time="≈ 4 hrs"  detail="Bajando por la troncal 3 hacia el oriente del estado." />
      </div>
    </div>
  </section>
);

const RouteCard = ({ title, time, detail }) => (
  <div style={{
    background: "var(--sand-soft)",
    border: "1px solid var(--line)",
    borderRadius: 14,
    padding: "26px 24px",
  }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
      <h3 style={{ fontSize: "1.1rem" }}>{title}</h3>
      <span className="tag">{time}</span>
    </div>
    <p style={{ marginTop: 12, color: "var(--ink-soft)", fontSize: "0.95rem" }}>{detail}</p>
  </div>
);

const MapPlaceholder = () => (
  <svg viewBox="0 0 1200 525" width="100%" height="100%" style={{ display: "block" }}>
    <defs>
      <pattern id="seapat" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M0 20 Q 10 15, 20 20 T 40 20" stroke="var(--teal-soft)" strokeWidth="1" fill="none" opacity="0.4" />
      </pattern>
    </defs>
    {/* Sea */}
    <rect width="1200" height="525" fill="var(--teal)" opacity="0.18" />
    <rect width="1200" height="525" fill="url(#seapat)" />
    {/* Coast */}
    <path d="M0 380 C 200 360, 360 400, 560 380 C 720 365, 880 410, 1080 395 L 1200 410 L 1200 525 L 0 525 Z"
          fill="var(--sand)" stroke="var(--coral)" strokeWidth="1.5" strokeDasharray="3 4" />
    {/* Cayo Sal — izquierda */}
    <ellipse cx="320" cy="220" rx="58" ry="22" fill="var(--sand)" stroke="var(--coral)" strokeWidth="1.2" strokeDasharray="3 4" />
    {/* Cayo Muerto — al frente (centro, arriba del pin) */}
    <ellipse cx="620" cy="180" rx="48" ry="20" fill="var(--sand)" stroke="var(--coral)" strokeWidth="1.2" strokeDasharray="3 4" />
    {/* Cayo Peraza — detrás (más arriba, hacia el horizonte) */}
    <ellipse cx="620" cy="90" rx="70" ry="24" fill="var(--sand)" stroke="var(--coral)" strokeWidth="1.2" strokeDasharray="3 4" />
    {/* Varadero — derecha */}
    <ellipse cx="900" cy="240" rx="64" ry="22" fill="var(--sand)" stroke="var(--coral)" strokeWidth="1.2" strokeDasharray="3 4" />

    {/* Línea punteada del trayecto al cayo */}
    <path d="M 620 395 Q 620 280, 620 200" stroke="var(--coral-deep)" strokeWidth="1.4" strokeDasharray="2 5" fill="none" opacity="0.7" />

    {/* Pin */}
    <g transform="translate(620, 395)">
      <circle r="38" fill="var(--coral)" opacity="0.25" />
      <circle r="20" fill="var(--coral)" opacity="0.4" />
      <circle r="9" fill="var(--teal)" />
      <circle r="3" fill="#fff" />
      <text x="0" y="-30" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="11" fill="var(--ink)" letterSpacing="2">POSADA BITÁCORA</text>
    </g>
    {/* Labels */}
    <text x="320" y="200" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="10" fill="var(--ink-soft)" letterSpacing="2">CAYO SAL</text>
    <text x="620" y="160" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="10" fill="var(--ink-soft)" letterSpacing="2">CAYO MUERTO</text>
    <text x="620" y="68" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="10" fill="var(--ink-soft)" letterSpacing="2">CAYO PERAZA</text>
    <text x="900" y="220" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="10" fill="var(--ink-soft)" letterSpacing="2">VARADERO</text>
    <text x="100" y="490" fontFamily="var(--font-display)" fontSize="22" fill="var(--ink)" fontStyle="italic" opacity="0.7">Chichiriviche</text>
    <text x="60" y="40"  fontFamily="var(--font-mono)" fontSize="11" fill="var(--ink-soft)" letterSpacing="3">MAR CARIBE</text>
    {/* Compass */}
    <g transform="translate(1100, 90)">
      <circle r="32" fill="var(--sand-soft)" stroke="var(--line)" />
      <path d="M0 -22 L 5 0 L 0 22 L -5 0 Z" fill="var(--teal)" />
      <path d="M-22 0 L 0 5 L 22 0 L 0 -5 Z" fill="var(--coral)" />
      <text x="0" y="-12" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="10" fill="var(--ink)">N</text>
    </g>
  </svg>
);

/* RESERVAR ---------------------------------------------- */
const Reservar = () => (
  <section id="reservar" style={{ background: "var(--teal-deep)", color: "#fff" }}>
    <div className="wrap" style={{ textAlign: "center" }}>
      <div className="eyebrow" style={{ color: "var(--coral)", justifyContent: "center" }}>Reservar</div>
      <h2 style={{ color: "#fff" }}>
        Escríbenos.<br />
        Te respondemos <span className="script" style={{ color: "var(--coral)", fontSize: "1.4em" }}>al instante</span>.
      </h2>
      <p style={{ margin: "26px auto 0", color: "rgba(255,255,255,0.75)", maxWidth: 520 }}>
        La forma más rápida es por WhatsApp. Cuéntanos las fechas, cuántos vienen, y armamos tu estadía.
      </p>
      <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginTop: 36 }}>
        <a className="btn btn-coral" href="https://wa.me/584128880624" target="_blank" rel="noopener">
          <IconWhatsapp /> +58 412-8880624
        </a>
        <a className="btn btn-ghost" href="https://instagram.com/posadabitacora" target="_blank" rel="noopener" style={{ color: "#fff", borderColor: "rgba(255,255,255,0.3)" }}>
          <IconInsta /> @posadabitacora
        </a>
      </div>
    </div>
  </section>
);

/* FOOTER ----------------------------------------------- */
const Footer = () => (
  <footer style={{ background: "var(--ink)", color: "rgba(255,255,255,0.7)", padding: "60px 0 40px" }}>
    <div className="wrap" style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr", gap: 48 }}>
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <ShipWheel size={32} color="var(--coral)" />
          <div>
            <div className="script" style={{ fontSize: "2rem", color: "var(--coral)", lineHeight: 1 }}>Bitácora</div>
            <div className="mono" style={{ color: "rgba(255,255,255,0.5)", marginTop: 2 }}>Hospedaje y Paseos</div>
          </div>
        </div>
        <p style={{ marginTop: 20, fontSize: "0.92rem", maxWidth: 320 }}>
          Posada familiar a orilla de playa en Chichiriviche, estado Falcón.
        </p>
      </div>
      <div>
        <div className="mono" style={{ color: "var(--coral)", marginBottom: 14 }}>Navegar</div>
        <ul style={{ listStyle: "none", display: "grid", gap: 10, fontSize: "0.92rem" }}>
          <li><a href="#habitaciones">Habitaciones</a></li>
          <li><a href="#paseos">Paseos</a></li>
          <li><a href="#tarifas">Tarifas y pago</a></li>
          <li><a href="#ubicacion">Ubicación</a></li>
          <li><a href="#faq">Preguntas frecuentes</a></li>
        </ul>
      </div>
      <div>
        <div className="mono" style={{ color: "var(--coral)", marginBottom: 14 }}>Contacto</div>
        <ul style={{ listStyle: "none", display: "grid", gap: 10, fontSize: "0.92rem" }}>
          <li>WhatsApp · +58 412-8880624</li>
          <li>Instagram · @posadabitacora</li>
          <li>Chichiriviche, Falcón</li>
        </ul>
      </div>
    </div>
    <div className="wrap" style={{ marginTop: 56, paddingTop: 24, borderTop: "1px solid rgba(255,255,255,0.1)", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 14, fontSize: "0.82rem", color: "rgba(255,255,255,0.5)" }}>
      <div>© 2026 Posada Bitácora · Todos los derechos reservados.</div>
      <div className="mono">Hecho con cariño a orilla de playa</div>
    </div>
  </footer>
);

/* NAV --------------------------------------------------- */
const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0,
      zIndex: 100,
      padding: scrolled ? "12px 0" : "20px 0",
      background: scrolled ? "rgba(250, 243, 231, 0.92)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      borderBottom: scrolled ? "1px solid var(--line)" : "1px solid transparent",
      transition: "all .25s ease",
    }}>
      <div className="wrap" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <a href="#inicio" style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <ShipWheel size={26} color="var(--teal)" />
          <span className="script" style={{ fontSize: "1.7rem", color: "var(--teal)", lineHeight: 1 }}>Bitácora</span>
        </a>
        <div style={{ display: "flex", gap: 28, alignItems: "center" }} className="navlinks">
          <a href="#habitaciones" style={{ fontSize: "0.92rem" }}>Habitaciones</a>
          <a href="#paseos" style={{ fontSize: "0.92rem" }}>Paseos</a>
          <a href="#tarifas" style={{ fontSize: "0.92rem" }}>Tarifas</a>
          <a href="#ubicacion" style={{ fontSize: "0.92rem" }}>Ubicación</a>
          <a href="#faq" style={{ fontSize: "0.92rem" }}>FAQ</a>
          <a href="#reservar" className="btn btn-primary" style={{ padding: "10px 18px", fontSize: "0.88rem" }}>
            <IconWhatsapp /> Reservar
          </a>
        </div>
      </div>
    </nav>
  );
};

Object.assign(window, { Habitaciones, Paseos, Testimonios, FAQ, Ubicacion, Reservar, Footer, Nav });
