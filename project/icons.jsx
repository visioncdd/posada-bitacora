/* SVG icons — náutico, simple, en línea */

const ShipWheel = ({ size = 28, color = "currentColor", strokeWidth = 1.6 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round">
    <circle cx="16" cy="16" r="6" />
    <circle cx="16" cy="16" r="11" />
    <line x1="16" y1="2" x2="16" y2="8" />
    <line x1="16" y1="24" x2="16" y2="30" />
    <line x1="2"  y1="16" x2="8"  y2="16" />
    <line x1="24" y1="16" x2="30" y2="16" />
    <line x1="6"  y1="6"  x2="10" y2="10" />
    <line x1="22" y1="22" x2="26" y2="26" />
    <line x1="6"  y1="26" x2="10" y2="22" />
    <line x1="22" y1="10" x2="26" y2="6" />
    <circle cx="16" cy="16" r="1.4" fill={color} stroke="none" />
  </svg>
);

const Shell = ({ size = 80, color = "currentColor", strokeWidth = 1 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round">
    <path d="M50 12 C 22 14, 8 50, 18 78 C 28 90, 72 90, 82 78 C 92 50, 78 14, 50 12 Z" />
    <path d="M50 12 L 50 88" />
    <path d="M50 16 C 38 30, 30 60, 28 84" />
    <path d="M50 16 C 62 30, 70 60, 72 84" />
    <path d="M50 18 C 44 32, 38 62, 38 86" />
    <path d="M50 18 C 56 32, 62 62, 62 86" />
    <path d="M22 60 C 30 56, 70 56, 78 60" opacity="0.5" />
  </svg>
);

const Boat = ({ size = 22, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 20 L 6 24 Q 16 28 26 24 L 29 20 Z" fill={color} fillOpacity="0.15" />
    <line x1="16" y1="6" x2="16" y2="20" />
    <path d="M16 8 L 24 18 L 16 18 Z" fill={color} fillOpacity="0.15" />
  </svg>
);

const Wave = ({ width = 80, color = "currentColor" }) => (
  <svg width={width} height="12" viewBox="0 0 80 12" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round">
    <path d="M2 6 Q 12 1, 22 6 T 42 6 T 62 6 T 78 6" />
  </svg>
);

const IconWifi = (p) => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" {...p}><path d="M2 8.5C8 3.5 16 3.5 22 8.5"/><path d="M5 12.5C9.5 9, 14.5 9, 19 12.5"/><path d="M8.5 16.5C10.5 15, 13.5 15, 15.5 16.5"/><circle cx="12" cy="20" r="1" fill="currentColor"/></svg>;
const IconAir = (p) => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" {...p}><circle cx="12" cy="12" r="2"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l3 3M16 16l3 3M5 19l3-3M16 8l3-3"/></svg>;
const IconPool = (p) => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" {...p}><path d="M2 18 Q 5 16, 8 18 T 14 18 T 22 18"/><path d="M2 22 Q 5 20, 8 22 T 14 22 T 22 22"/><path d="M7 14V6a2 2 0 0 1 4 0v8M13 14V6a2 2 0 0 1 4 0v8"/></svg>;
const IconKitchen = (p) => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" {...p}><rect x="4" y="4" width="16" height="16" rx="2"/><line x1="4" y1="10" x2="20" y2="10"/><circle cx="8" cy="14" r="1.5"/><circle cx="14" cy="14" r="1.5"/></svg>;
const IconCar = (p) => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" {...p}><path d="M3 14l2-6h14l2 6v5h-3v-2H6v2H3z"/><circle cx="7" cy="17" r="1.5"/><circle cx="17" cy="17" r="1.5"/></svg>;
const IconBeach = (p) => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" {...p}><path d="M2 18 Q 7 15, 12 18 T 22 18"/><path d="M2 21 Q 7 19, 12 21 T 22 21"/><circle cx="18" cy="6" r="2"/><path d="M18 8v8"/></svg>;
const IconHammock = (p) => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" {...p}><path d="M3 8v3M21 8v3"/><path d="M3 11 Q 12 18, 21 11"/><path d="M3 11 Q 12 14, 21 11"/></svg>;

const IconBed = (p) => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" {...p}><path d="M3 18V8M21 18v-6a2 2 0 0 0-2-2H3"/><circle cx="7" cy="12" r="2"/><path d="M3 18h18"/></svg>;
const IconBath = (p) => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" {...p}><path d="M3 12h18v3a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4z"/><path d="M6 12V6a2 2 0 0 1 4 0"/><line x1="3" y1="19" x2="3" y2="21"/><line x1="21" y1="19" x2="21" y2="21"/></svg>;
const IconUsers = (p) => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" {...p}><circle cx="9" cy="8" r="3"/><path d="M3 20c0-3 3-5 6-5s6 2 6 5"/><circle cx="17" cy="9" r="2.5"/><path d="M15 20c0-2 2-4 4-4s2.5 1 2.5 3"/></svg>;
const IconAC = (p) => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" {...p}><rect x="3" y="5" width="18" height="8" rx="1.5"/><path d="M7 17v1M12 17v2M17 17v1"/></svg>;
const IconFridge = (p) => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" {...p}><rect x="6" y="3" width="12" height="18" rx="1.5"/><line x1="6" y1="11" x2="18" y2="11"/><line x1="9" y1="7" x2="9" y2="9"/><line x1="9" y1="14" x2="9" y2="17"/></svg>;

const IconWhatsapp = (p) => <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.3c1.4.8 3.1 1.3 4.8 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18c-1.6 0-3-.4-4.3-1.1l-.3-.2-3 .8.8-3-.2-.3C4.4 15 4 13.5 4 12c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8zm4.5-6c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1-.2.2-.6.7-.7.8-.1.1-.3.2-.5.1-.2-.1-1-.4-1.9-1.2-.7-.6-1.2-1.4-1.3-1.6-.1-.2 0-.4.1-.5.1-.1.2-.3.4-.4.1-.1.2-.2.2-.4.1-.2 0-.3 0-.4 0-.1-.5-1.3-.7-1.7-.2-.4-.4-.4-.5-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 2s.8 2.3.9 2.5c.1.2 1.7 2.5 4.1 3.5.6.2 1 .4 1.4.5.6.2 1.1.2 1.5.1.5-.1 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.1l-.4-.2z"/></svg>;
const IconInsta = (p) => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>;
const IconPin = (p) => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" {...p}><path d="M12 22s7-7 7-13a7 7 0 0 0-14 0c0 6 7 13 7 13z"/><circle cx="12" cy="9" r="2.5"/></svg>;

Object.assign(window, {
  ShipWheel, Shell, Boat, Wave,
  IconWifi, IconAir, IconPool, IconKitchen, IconCar, IconBeach, IconHammock,
  IconBed, IconBath, IconUsers, IconAC, IconFridge,
  IconWhatsapp, IconInsta, IconPin,
});
