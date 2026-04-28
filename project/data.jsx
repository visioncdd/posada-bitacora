/* Datos del sitio */

const ROOMS = [
  {
    id: "sextuple-a",
    name: "Habitación Séxtuple",
    capacity: 6,
    accent: "👨‍👩‍👧‍👦",
    summary: "La más amplia, ideal para familias grandes.",
    features: [
      { icon: "bed",  text: "2 matrimoniales + 2 individuales aéreas" },
      { icon: "bath", text: "Baño privado" },
      { icon: "ac",   text: "Aire acondicionado" },
      { icon: "users", text: "Lencería básica de cama" },
    ],
    tag: "Para familias",
  },
  {
    id: "sextuple-b",
    name: 'Habitación Séxtuple "B"',
    capacity: 6,
    accent: "👥",
    summary: "Misma capacidad, con litera para los más chicos.",
    features: [
      { icon: "bed",  text: "2 matrimoniales + 1 litera" },
      { icon: "bath", text: "Baño privado externo" },
      { icon: "ac",   text: "Aire acondicionado" },
      { icon: "users", text: "Lencería básica de cama" },
    ],
    tag: "Para grupos",
  },
  {
    id: "quintuple",
    name: "Habitación Quíntuple",
    capacity: 5,
    accent: "🖐️",
    summary: "Versátil, mezcla camas para grupos medianos.",
    features: [
      { icon: "bed",  text: "1 matrimonial + 1 individual + 1 litera" },
      { icon: "bath", text: "Baño privado" },
      { icon: "ac",   text: "Aire acondicionado" },
      { icon: "users", text: "Lencería básica de cama" },
    ],
    tag: "Mediana",
  },
  {
    id: "triple",
    name: "Habitación Triple",
    capacity: 3,
    accent: "☘️",
    summary: "Para tres viajeros que comparten aventura.",
    features: [
      { icon: "bed",  text: "1 matrimonial + 1 individual" },
      { icon: "bath", text: "Baño privado" },
      { icon: "ac",   text: "Aire acondicionado" },
      { icon: "users", text: "Lencería básica de cama" },
    ],
    tag: "Acogedora",
  },
  {
    id: "matrimonial",
    name: "Habitación Matrimonial",
    capacity: 2,
    accent: "❤️",
    summary: "Privacidad para dos, con nevera ejecutiva.",
    features: [
      { icon: "bed",    text: "1 cama matrimonial" },
      { icon: "fridge", text: "Nevera ejecutiva" },
      { icon: "bath",   text: "Baño privado" },
      { icon: "users",  text: "Lencería básica de cama" },
    ],
    tag: "Para parejas",
  },
];

const AMENITIES = [
  { icon: "wifi",    label: "WiFi" },
  { icon: "air",     label: "Aire acondicionado" },
  { icon: "pool",    label: "Piscina" },
  { icon: "kitchen", label: "Cocina compartida" },
  { icon: "car",     label: "Estacionamiento" },
  { icon: "beach",   label: "Acceso directo al mar" },
  { icon: "hammock", label: "Hamacas y áreas comunes" },
];

const TESTIMONIALS = [
  {
    quote: "Una experiencia inolvidable. Los niños no querían irse, y Cuare nos dejó sin palabras.",
    name: "Carla M.",
    origin: "Caracas",
    stay: "Familia · 4 noches",
  },
  {
    quote: "La posada se siente como casa. Hamacas, café por la mañana y el mar a dos pasos.",
    name: "Andrés y Liliana",
    origin: "Valencia",
    stay: "Pareja · 3 noches",
  },
  {
    quote: "El paseo al refugio fue lo mejor del viaje. Atención impecable, muy familiar.",
    name: "Familia Rojas",
    origin: "Maracay",
    stay: "Familia · 5 noches",
  },
];

const INCLUDED = [
  { icon: "🚤", title: "Traslado de cortesía", text: "1 traslado a Cayo Sal o Cayo Muerto incluido en tu estadía." },
  { icon: "🛥️", title: "Embarque exclusivo", text: "Muelle privado dentro de la posada — directo a los cayos." },
  { icon: "🚗", title: "Estacionamiento privado", text: "Tu vehículo dentro de la posada, con seguridad." },
  { icon: "⚡", title: "Planta eléctrica nocturna", text: "Respaldo básico de 10:00 PM a 6:00 AM." },
  { icon: "🌐", title: "WiFi en las instalaciones", text: "Conectividad mientras te desconectas." },
  { icon: "💦", title: "Agua mineral de cortesía", text: "Hidratación durante toda tu estadía." },
];

const COMMON_AREAS = [
  { title: "Piscina ecológica marina", text: "Con beneficios terapéuticos en un entorno privado, frente al mar." },
  { title: "Mirador panorámico", text: "Una vista inigualable del horizonte para los atardeceres." },
  { title: "Cocina equipada", text: "Nevera, utensilios y gas a disposición del grupo." },
  { title: "Ubicación estratégica", text: "A pocos minutos del malecón y la zona comercial." },
];

const SCHEDULE = [
  { label: "Check-in",         value: "12:00 PM" },
  { label: "Check-out",        value: "10:00 AM" },
  { label: "Cocina y playa",   value: "Hasta 10:00 PM" },
  { label: "Retorno de cayos", value: "Máx. 5:45 PM" },
];

const CHECKLIST = [
  { title: "Higiene y confort",   text: "Toallas personales y artículos de aseo.", icon: "🚿" },
  { title: "Tu kit de playa",     text: "Sillas plegables o sombrillas extra para máxima comodidad en la arena.", icon: "🏖️" },
  { title: "Utensilios de viaje", text: "Cubiertos o utensilios desechables para tus paseos a los cayos.", icon: "🍴" },
];

const FAQS = [
  {
    q: "¿Cómo se calcula el precio de mi estadía?",
    a: "Las tarifas son por grupo y se confirman a Tasa Euro BCV del día. De lunes a jueves en temporada baja, el resto del pago aplica a Tasa Dólar BCV; viernes a domingo, feriados y temporada alta aplica Tasa Euro BCV. Escríbenos por WhatsApp con tu fecha tentativa, número de noches y cantidad de personas, y te armamos un presupuesto exacto.",
  },
  {
    q: "¿Qué métodos de pago aceptan?",
    a: "Pago Móvil, transferencia, Zelle y divisas. La tarifa es la misma para todos los métodos, en bolívares o divisas. La reserva solo se garantiza con el pago.",
  },
  {
    q: "¿Cuál es el horario de check-in y check-out?",
    a: "Check-in desde las 12:00 PM y check-out hasta las 10:00 AM. Si quieres aprovechar al máximo el primer día, puedes encargar tu almuerzo con al menos 24 horas de antelación para que esté listo al ingresar.",
  },
  {
    q: "¿Aceptan niños y bebés?",
    a: "¡Totalmente! Niños menores de 3 años (de 0 a 2 años) tienen estadía de cortesía, compartiendo cama con sus padres. Es un ambiente familiar pensado para que toda la tribu descanse.",
  },
  {
    q: "¿Qué incluyen los paseos a los cayos?",
    a: "Tu estadía incluye 1 traslado de cortesía a Cayo Sal o Cayo Muerto, con embarque desde nuestro muelle privado. El retorno máximo es a las 5:45 PM sujeto a disponibilidad. Cualquier traslado adicional tiene costo aparte y se paga antes del zarpe.",
  },
  {
    q: "¿Cómo es el agua de la posada?",
    a: "Al estar frente al mar, el agua de las tuberías es salobre (natural de la zona), ideal para el aseo. Si prefieres servicio de cisterna de agua dulce, podemos coordinarlo con un proveedor externo (40 € adicionales).",
  },
  {
    q: "¿Puedo cambiar mi fecha si surge un imprevisto?",
    a: "Sí, siempre que avises con al menos 7 días de anticipación. La nueva estadía debe usarse en un máximo de 60 días continuos, sujeta a disponibilidad. De no presentarte sin avisar con una semana, la reserva se considera perdida.",
  },
  {
    q: "¿Puedo recibir visitas durante mi estadía?",
    a: "Por seguridad, no se permiten acompañantes que no estén en el presupuesto inicial. Buscamos un ambiente de relax y respeto entre huéspedes — no es un lugar para fiestas o eventos ruidosos.",
  },
];

Object.assign(window, { ROOMS, AMENITIES, TESTIMONIALS, FAQS, INCLUDED, COMMON_AREAS, SCHEDULE, CHECKLIST });
