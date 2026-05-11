# Itaka Post-Tour — Página Web para Turistas en Venecia

**Host:** Cloudflare Pages — `itaka-post-tour.pages.dev`
**Stack:** HTML + CSS + JS vanilla. Sin build step.

Página post-tour para turistas de **Itaka Tours** en Venecia. Estilo elegante, moderno, negro/blanco/dorado.

> Para detalles extensos (subcarpetas de imágenes, specs del hero, paquetes de fotografía, lista de tours, roadmap) → leer [`memory.md`](./memory.md) on-demand.

---

## Mapa del sitio

| Archivo | Rol |
|---------|-----|
| `index.html` | Hero fullscreen + 3 CTAs + opinión (Google/TripAdvisor) + video YouTube |
| `tours.html` | Grid de los 5 tours disponibles |
| `restaurantes.html` | Acordeón con 6 categorías gastronómicas |
| `fotografia.html` | Galería, video, paquetes y CTA WhatsApp |
| `feedback.html` | **Desactivada** — el archivo existe pero sin links desde nav/footer (las reseñas se canalizan vía Google + TripAdvisor) |

---

## Convenciones críticas (no romper)

- **`Images/` con I mayúscula** — Cloudflare Pages es case-sensitive, nunca `images/`
- **Acordeón de restaurantes** arranca cerrado: ningún `.accordion-item.open` ni `aria-expanded="true"` en el HTML inicial
- **Responsive del hero index:** ajustes solo en el bloque base o `@media (min-width: 641px)`. Nunca tocar `@media (max-width: 640px)` sin necesidad explícita
- **Nav sincronizado** entre las 5 páginas (header desktop, mobile-nav, footer "Páginas"): cualquier cambio debe replicarse en todos los archivos HTML
