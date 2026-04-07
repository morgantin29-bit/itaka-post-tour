# Itaka Post-Tour — Página Web para Turistas en Venecia

**Host:** Cloudflare Pages — `itaka-post-tour.pages.dev`

Página post-tour para turistas de **Itaka Tours** en Venecia. Estilo elegante, moderno, negro/blanco/dorado.

---

## Páginas del sitio (todas completas)

| Archivo | Descripción |
|---------|-------------|
| `index.html` | Hero fullscreen con 4 CTAs: Tours, Dónde Comer, Fotografía, Tu Opinión |
| `tours.html` | Grid de los 5 tours disponibles |
| `restaurantes.html` | Acordeón con 6 categorías gastronómicas |
| `fotografia.html` | Galería, video, paquetes y formulario de reserva |
| `feedback.html` | Formulario de valoración del tour |

---

## Convenciones críticas

### Rutas de imágenes
- Carpeta **`Images/`** con I mayúscula — Cloudflare Pages es case-sensitive, nunca `images/`
- Subcarpetas: `Images/banners/`, `Images/Categorias/`, `Images/fotografia/`, `Images/tours/`

### Acordeón de restaurantes
- Todos arrancan **cerrados** al cargar: ningún `.accordion-item` con clase `open`, ningún `.accordion-header` con `aria-expanded="true"` en el HTML inicial

### Hero del index (`index.html` + `css/style.css`)
- Grid de CTAs: **4 columnas** (`repeat(4, 1fr)`, `max-width: 920px`, `gap: 1rem`) — no volver a 3
- `.hero-eyebrow` oculto en desktop (`@media (min-width: 641px)`) — se superponía al nav; visible en móvil
- Indicador "Explorar" eliminado del HTML (se superponía a las tarjetas)
- `.hero-full`: `padding-bottom: 5rem` en base; el breakpoint móvil lo sobreescribe a `3rem`
- **Regla responsive:** ajustes de hero solo en `@media (min-width: 641px)` o en el bloque base — nunca tocar `@media (max-width: 640px)`

---

## Fotografía (`fotografia.html`)

- **Hero**: `Images/fotografia/DSC09859.jpg`, `background-position: center 30%`
- **Galería**: 8 fotos, grid 3/2/1 col, lightbox con flechas y teclado
- **Video**: `https://www.youtube.com/embed/UdObR4InuNs`
- **Paquetes**: Básico €80 · Estándar €150 · Premium €280
- **Formulario**: Netlify Forms `name="reserva-foto"`

---

## Tours disponibles

| # | Nombre | Duración | Precio |
|---|--------|----------|--------|
| 1 | Centro de Venecia: San Marcos | 2h | Gratis |
| 2 | Freetour Murano y Burano | 4h 30m | Gratis |
| 3 | Guetto Judío | 1h 15m | 15€ |
| 4 | Prostitutas, Comerciantes y Piratas | 1h 45m | — |
| 5 | Leyendas, Crímenes y Misterios | 2h | — |

---

## Roadmap

- Galería de fotos ampliada
- Más tours
