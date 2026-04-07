# Itaka Post-Tour — Página Web para Turistas en Venecia

## Descripción del proyecto

Página post-tour para turistas que acaban de hacer un tour con **Itaka Tours** en Venecia. El objetivo es ofrecer una experiencia elegante y moderna que supere la web original ([grupoitaka.com](https://grupoitaka.com)).

El proyecto irá creciendo con el tiempo: se agregarán bares, heladerías, más fotos, más tours, etc.

**Host:** Cloudflare Pages — `itaka-post-tour.pages.dev`

---

## Estética y diseño

- **Colores**: negro, blanco y dorado (inspirados en Itaka Tours)
- **Estilo**: elegante, moderno, sofisticado — mejor que la web original
- **Referencia visual**: grupoitaka.com

---

## Páginas del sitio

| Archivo | Descripción | Estado |
|---------|-------------|--------|
| `index.html` | Hero de bienvenida con 4 CTAs (Tours, Dónde Comer, Fotografía, Tu Opinión) | ✅ Completa |
| `tours.html` | Grid de los 5 tours disponibles | ✅ Completa |
| `restaurantes.html` | Acordeón con 6 categorías gastronómicas | ✅ Completa |
| `fotografia.html` | Galería, video, paquetes y formulario de reserva | ✅ Completa |
| `feedback.html` | Formulario de valoración del tour | ✅ Completa |

---

## Convenciones importantes

### Rutas de imágenes
- La carpeta de imágenes es **`Images/`** con I mayúscula — crítico para Cloudflare Pages (case-sensitive)
- Usar siempre `Images/` en todas las rutas, nunca `images/`
- Subcarpetas: `Images/banners/`, `Images/Categorias/`, `Images/fotografia/`, `Images/tours/`

### Acordeón de restaurantes
- Todos los acordeones deben arrancar **cerrados** por defecto al cargar la página
- Ningún `.accordion-item` debe tener la clase `open` en el HTML inicial
- Ningún botón `.accordion-header` debe tener `aria-expanded="true"` en el HTML inicial

### Hero del index — decisiones de layout (2025-04-07)
- El grid de CTAs usa **4 columnas** (`repeat(4, 1fr)`, `max-width: 920px`, `gap: 1rem`) para que las 4 tarjetas quepan en una sola fila en desktop. **No volver a 3 columnas.**
- El `.hero-eyebrow` ("Itaka Tours · Venecia") está **oculto en desktop** (`@media (min-width: 641px)`) porque se superponía visualmente al nav — sigue visible en móvil
- El indicador de scroll "Explorar" fue **eliminado** del `index.html` (era redundante y se superponía a las tarjetas)
- `.hero-full` tiene `padding-bottom: 5rem` en desktop y `padding-bottom: 3rem` en móvil (sobreescrito en el breakpoint `max-width: 640px`)
- **Regla:** cualquier ajuste del hero solo puede hacerse con `@media (min-width: 641px)` o en el bloque base — el breakpoint `max-width: 640px` no se toca para no afectar móvil

---

## Estructura de carpetas de imágenes

```
Images/
├── logo.png
├── banners/              ← fotos para heroes de páginas interiores
├── Categorias/           ← banners del acordeón de restaurantes
│   ├── restaurantes.png
│   ├── pizzerias.png
│   ├── heladerias.png
│   ├── bares.png
│   ├── sin-gluten.png
│   └── vegetarianos.png
├── fotografia/           ← fotos para la página fotografia.html
│   ├── DSC08885-Mejorado-NR.jpg
│   ├── 02.jpg
│   ├── 03.jpg
│   ├── 0112.jpg
│   ├── DSC08688.jpg
│   ├── DSC09859.jpg      ← hero de fotografia.html (carnaval)
│   ├── DSC09678.jpg
│   └── DSC00239.jpg
└── tours/
    ├── san-marco.jpg
    ├── murano-burano.jpg
    ├── guetto-judio.jpg
    ├── prostitutas-comerciantes-piratas.jpg
    └── leyendas-crimenes-misterios.jpg
```

---

## Tours disponibles

| # | Nombre | Duración | Precio | URL |
|---|--------|----------|--------|-----|
| 1 | Centro de Venecia: San Marcos | 2h | Gratis | grupoitaka.com/venecia/san-marco/ |
| 2 | Freetour Murano y Burano | 4h 30m | Gratis | grupoitaka.com/venecia/freetour-murano-y-burano/ |
| 3 | Guetto Judío | 1h 15m | 15€ | grupoitaka.com/venecia/guetto-judio/ |
| 4 | Prostitutas, Comerciantes y Piratas | 1h 45m | — | grupoitaka.com/prostitutas-comerciantes-y-piratas/ |
| 5 | Leyendas, Crímenes y Misterios | 2h | — | grupoitaka.com/venecia/leyendas-crimenes-misterios/ |

---

## Restaurantes recomendados

### Categoría: Restaurantes (8)
Dallo Zio Santa Margherita, Al Grill, Spicy Puppa, Alla Corte Ristorante, La Piazza, Al Mariner, Al Timon, Trattoria Al Gazzettino

### Categoría: Pizzerías
Antico Forno, 1000 Gourmet, y otros

### Categoría: Heladerías
(ver restaurantes.html)

### Categoría: Bares
(ver restaurantes.html)

### Categoría: Sin Gluten / Celíacos (7)
Da Poggi, Ae Oche San Giacomo, Vecia Cavana, Antico Dolo, Al Giardinetto da Severino, Al Vecio Canton, Al Gallo d'Oro

### Categoría: Vegetarianos / Veganos (3)
Al Theatro, La Zucca, La Tecia Vegana

---

## Fotografía (fotografia.html)

- **Hero**: `Images/fotografia/DSC09859.jpg` (carnaval), `background-position: center 30%`
- **Galería**: 8 fotos en grid 3/2/1 col con lightbox (flechas + teclado)
- **Video**: embed YouTube `https://www.youtube.com/embed/UdObR4InuNs`
- **Paquetes**: Básico €80 (1h · 20 fotos), Estándar €150 (2h · 50 fotos + video), Premium €280 (medio día · ilimitadas + video)
- **Formulario**: Netlify Forms con `name="reserva-foto"` — campos: nombre, email, teléfono, fecha, paquete, mensaje

---

## Próximas secciones (roadmap)

- Más fotos / galería ampliada
- Más tours
