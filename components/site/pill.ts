// Shared pill-button classes used for links and buttons across the site.
const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 disabled:opacity-60"

export const pill = {
  sun: `${base} bg-sun text-bark shadow-[0_6px_20px_-8px_rgba(239,125,45,0.7)] hover:bg-amber hover:-translate-y-0.5`,
  bark: `${base} bg-bark text-white hover:bg-bark-deep hover:-translate-y-0.5`,
  outlineLight: `${base} border border-white/70 text-white hover:bg-white hover:text-bark`,
  outlineDark: `${base} border border-bark/25 bg-white text-bark hover:border-bark hover:bg-sand-soft`,
}
