# Memory — Itaka Post-Tour (referencia detallada)

Detalles secundarios del proyecto. Se referencia desde `CLAUDE.md` y se lee on-demand cuando hace falta tocar la zona correspondiente.

---

## Estructura `Images/`

Subcarpetas:
- `Images/banners/` — fondos de hero
- `Images/Categorias/` — fondos del acordeón de restaurantes
- `Images/fotografia/` — galería y hero de fotografía
- `Images/tours/` — tarjetas de tours

---

## Hero del index (`index.html` + `css/style.css`)

- **Grid de CTAs:** 3 columnas (`repeat(3, 1fr)`, `max-width: 720px`, `gap: 1rem`)
- **Bloque de opinión** (`.cta-opinion-group`): debajo del grid, centrado, con 2 tarjetas (Google + TripAdvisor) que abren en nueva pestaña. Iconos SVG inline: Google en colores oficiales, TripAdvisor en `currentColor` (dorado)
- `.hero-eyebrow` oculto en desktop (`@media (min-width: 641px)`) — se superponía al nav; visible solo en móvil
- Indicador "Explorar" eliminado del HTML (se superponía a las tarjetas)
- `.hero-full`: `padding-bottom: 5rem` en base; el breakpoint móvil lo sobreescribe a `3rem`

---

## Sección de video (debajo del hero del index)

- Embed: `https://www.youtube.com/embed/F05SgvXtL6o?start=18&rel=0&modestbranding=1`
- Título: "Venecia, a través de nuestros ojos"
- Eyebrow: "Enterate de más"
- Estilos: `.video-section`, `.video-eyebrow`, `.video-title`, `.video-wrapper` (proporción 16:9 con `padding-bottom: 56.25%`)

---

## Fotografía (`fotografia.html`)

- **Hero**: `Images/fotografia/DSC09859.jpg`, `background-position: center 30%`
- **Galería**: 8 fotos, grid 3/2/1 col, lightbox con flechas y teclado
- **Video**: `https://www.youtube.com/embed/UdObR4InuNs`
- **Paquetes**: Básico €80 · Estándar €150 · Premium €280
- **Contacto**: botón WhatsApp (`wa.me/393716650295`) con mensaje predeterminado *"Hola Julián, me gustaría reservar una sesión de fotos en Venecia"*. Reemplazó al formulario Netlify (`name="reserva-foto"`) porque la página de contacto no funcionaba.

---

## Tours disponibles (`tours.html`)

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
