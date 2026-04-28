/* Secciones nuevas: incluido, áreas comunes, tarifas, horarios, políticas, checklist */

/* INCLUIDO ---------------------------------------- */
const Incluido = () => (
  <section id="incluido" style={{ background: "var(--sand)" }}>
    <div className="wrap">
      <div style={{ textAlign: "center", marginBottom: 56 }}>
        <div className="eyebrow" style={{ justifyContent: "center" }}>Cortesía de la casa</div>
        <h2>Tu estadía incluye.</h2>
        <p style={{ margin: "20px auto 0", color: "var(--ink-soft)", maxWidth: 560 }}>
          Lo esencial para que solo te preocupes por disfrutar.
        </p>
      </div>
      <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
        {INCLUDED.map((it, i) => (
          <div key={i} style={{
            background: "var(--sand-soft)",
            border: "1px solid var(--line)",
            borderRadius: 14,
            padding: "28px 24px",
            position: "relative",
          }}>
            <div style={{ fontSize: "2rem", marginBottom: 14 }}>{it.icon}</div>
            <h3 style={{ fontSize: "1.1rem", marginBottom: 8 }}>{it.title}</h3>
            <p style={{ fontSize: "0.95rem", color: "var(--ink-soft)" }}>{it.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ÁREAS COMUNES ------------------------------------ */
const AreasComunes = () => (
  <section id="areas">
    <div className="wrap">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 56, alignItems: "center" }}>
        <div>
          <div className="eyebrow">Áreas comunes</div>
          <h2>Espacios para compartir, descansar y mirar el horizonte.</h2>
          <ul style={{ listStyle: "none", marginTop: 32, display: "grid", gap: 22 }}>
            {COMMON_AREAS.map((a, i) => (
              <li key={i} style={{ borderLeft: "2px solid var(--coral)", paddingLeft: 18 }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem", color: "var(--ink)" }}>{a.title}</div>
                <p style={{ marginTop: 4, color: "var(--ink-soft)", fontSize: "0.95rem" }}>{a.text}</p>
              </li>
            ))}
          </ul>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <div style={{ aspectRatio: "3/4", borderRadius: 14, overflow: "hidden", position: "relative" }}>
            <img src={window.__resources.piscina} alt="Piscina ecológica marina con vista al mar" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <div style={{ display: "grid", gap: 16, marginTop: 36 }}>
            <div style={{ aspectRatio: "1", borderRadius: 14, overflow: "hidden", position: "relative" }}>
              <img src={window.__resources.mirador} alt="Mirador panorámico al atardecer con vista al mar y lanchas" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div style={{ aspectRatio: "1", borderRadius: 14, overflow: "hidden", position: "relative" }}>
              <img src={window.__resources.cocina} alt="Cocina equipada de la posada" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* TARIFAS ------------------------------------------- */
const Tarifas = () => (
  <section id="tarifas" style={{ background: "var(--teal-deep)", color: "#fff" }}>
    <div className="wrap">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "flex-start" }}>
        <div>
          <div className="eyebrow" style={{ color: "var(--coral)" }}>Tarifas</div>
          <h2 style={{ color: "#fff" }}>
            Presupuestos a la medida de tu <span className="script" style={{ color: "var(--coral)", fontSize: "1.3em" }}>tribu</span>.
          </h2>
          <p style={{ marginTop: 22, color: "rgba(255,255,255,0.78)", fontSize: "1.02rem" }}>
            Cobramos por grupo, no por persona. Para darte un presupuesto exacto, escríbenos por WhatsApp con tres datos:
          </p>
          <ul style={{ listStyle: "none", marginTop: 28, display: "grid", gap: 14 }}>
            {[
              { ic: "🗓️", t: "Fecha tentativa" },
              { ic: "🌙", t: "Cantidad de noches" },
              { ic: "👥", t: "Número de personas" },
            ].map((x, i) => (
              <li key={i} style={{ display: "flex", alignItems: "center", gap: 14, fontSize: "1.05rem" }}>
                <span style={{ fontSize: "1.4rem" }}>{x.ic}</span>
                <span>{x.t}</span>
              </li>
            ))}
          </ul>
          <a className="btn btn-coral" href="https://wa.me/584128880624" target="_blank" rel="noopener" style={{ marginTop: 36 }}>
            <IconWhatsapp /> Pedir presupuesto
          </a>
        </div>

        <div style={{
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: 14,
          padding: "32px 30px",
        }}>
          <div className="mono" style={{ color: "var(--coral)", marginBottom: 18 }}>Tasas y métodos de pago</div>
          <div style={{ display: "grid", gap: 18 }}>
            <Row label="Lunes a jueves (temp. baja)" value="Tasa Dólar BCV" />
            <Row label="Viernes a domingo" value="Tasa Euro BCV" />
            <Row label="Temporada alta y feriados" value="Tasa Euro BCV" />
          </div>
          <div style={{ height: 1, background: "rgba(255,255,255,0.12)", margin: "24px 0" }} />
          <div className="mono" style={{ color: "var(--coral)", marginBottom: 14 }}>Métodos aceptados</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {["Pago Móvil", "Transferencia", "Zelle", "Divisas"].map(m => (
              <span key={m} style={{
                padding: "6px 12px",
                borderRadius: 999,
                background: "rgba(255,255,255,0.08)",
                fontSize: "0.85rem",
              }}>{m}</span>
            ))}
          </div>
          <p style={{ marginTop: 22, fontSize: "0.85rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.5 }}>
            La tarifa es la misma en bolívares o divisas. Se aplica la tasa oficial del día del pago. La reserva se garantiza únicamente con el pago.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const Row = ({ label, value }) => (
  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 18 }}>
    <span style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.95rem" }}>{label}</span>
    <span style={{ fontFamily: "var(--font-display)", color: "#fff" }}>{value}</span>
  </div>
);

/* HORARIOS Y POLÍTICAS ----------------------------- */
const Horarios = () => (
  <section id="horarios">
    <div className="wrap">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56 }}>
        <div>
          <div className="eyebrow">Horarios</div>
          <h2>El ritmo de la casa.</h2>
          <div style={{ marginTop: 36, display: "grid", gap: 0 }}>
            {SCHEDULE.map((s, i) => (
              <div key={i} style={{
                display: "flex", justifyContent: "space-between", alignItems: "center",
                padding: "20px 0",
                borderBottom: "1px solid var(--line)",
              }}>
                <span style={{ color: "var(--ink-soft)" }}>{s.label}</span>
                <span style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", color: "var(--teal)" }}>{s.value}</span>
              </div>
            ))}
          </div>
          <p style={{ marginTop: 24, fontSize: "0.9rem", color: "var(--ink-soft)" }}>
            Pueden disfrutar del malecón y volver a la hora que deseen, siempre coordinando con nosotros para su ingreso.
          </p>
        </div>

        <div>
          <div className="eyebrow">Políticas de reserva</div>
          <h2>Para que todo fluya.</h2>
          <div style={{ marginTop: 36, display: "grid", gap: 18 }}>
            <Policy title="Cambios de fecha" text="Solo si avisas con al menos 7 días de anticipación. La nueva estadía debe usarse en máximo 60 días continuos, sujeta a disponibilidad." />
            <Policy title="Inasistencias" text="Si no te presentas el día de la reserva sin aviso previo de una semana, la reserva se considera perdida." />
            <Policy title="Diferencia de tarifa" text="Si la nueva fecha cae en otra temporada, se cancela la diferencia correspondiente." />
            <Policy title="Visitas" text="Por seguridad, no se permiten acompañantes que no estén en el presupuesto inicial." />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Policy = ({ title, text }) => (
  <div style={{ paddingLeft: 18, borderLeft: "2px solid var(--teal-soft)" }}>
    <div style={{ fontFamily: "var(--font-display)", fontSize: "1.05rem", color: "var(--ink)" }}>{title}</div>
    <p style={{ marginTop: 4, fontSize: "0.92rem", color: "var(--ink-soft)" }}>{text}</p>
  </div>
);

/* CHECKLIST ---------------------------------------- */
const Checklist = () => (
  <section id="checklist" style={{ background: "var(--sand)" }}>
    <div className="wrap">
      <div style={{ textAlign: "center", marginBottom: 48 }}>
        <div className="eyebrow" style={{ justifyContent: "center" }}>Antes de zarpar</div>
        <h2>Lo que te recomendamos traer.</h2>
        <p style={{ margin: "18px auto 0", color: "var(--ink-soft)", maxWidth: 520 }}>
          Para que no te falte nada al llegar al paraíso.
        </p>
      </div>
      <div className="grid grid-3">
        {CHECKLIST.map((c, i) => (
          <div key={i} style={{
            background: "var(--sand-soft)",
            border: "1px solid var(--line)",
            borderRadius: 14,
            padding: "32px 28px",
            textAlign: "center",
          }}>
            <div style={{ fontSize: "2.2rem", marginBottom: 14 }}>{c.icon}</div>
            <h3 style={{ fontSize: "1.1rem", marginBottom: 10 }}>{c.title}</h3>
            <p style={{ fontSize: "0.95rem", color: "var(--ink-soft)" }}>{c.text}</p>
          </div>
        ))}
      </div>
      <p style={{ textAlign: "center", marginTop: 36, fontSize: "0.88rem", color: "var(--ink-soft)", maxWidth: 600, marginInline: "auto" }}>
        Los utensilios de la posada deben permanecer dentro de las instalaciones. Gracias por ayudarnos a mantener el orden.
      </p>
    </div>
  </section>
);

Object.assign(window, { Incluido, AreasComunes, Tarifas, Horarios, Checklist });
