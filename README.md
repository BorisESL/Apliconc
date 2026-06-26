# APLICONC · Estudio Digital — Sitio web

Sitio estático en HTML/CSS/JS puro. Sin dependencias ni build.

## Estructura

```
Apliconc/
├── index.html           ← página principal
├── robots.txt           ← directivas para crawlers
├── sitemap.xml          ← mapa del sitio para buscadores
├── css/
│   └── styles.css        ← todos los estilos
├── js/
│   └── main.js           ← interacciones (menú, scroll, formulario)
└── img/
    ├── favicon-16.png        (16×16)
    ├── favicon-32.png        (32×32)
    ├── apple-touch-icon.png  (180×180)
    ├── logo_tarjeta1.webp    ← logo del hero (primario)
    ├── logo_tarjeta1.png     ← logo del hero (fallback)
    └── og-image.png          ← imagen para compartir en redes
```

## Cómo verlo en VS Code

1. Abre la carpeta `Apliconc` en VS Code.
2. Instala la extensión **Live Server**.
3. Clic derecho en `index.html` → **Open with Live Server**.

## Deploy

Publicado en **GitHub Pages**: https://borisesl.github.io/apliconc/

Las URLs absolutas (canonical, Open Graph, sitemap, JSON-LD) apuntan a ese
dominio. Si se migra a un dominio propio (p. ej. Hostinger), hay que
actualizarlas en `index.html`, `robots.txt` y `sitemap.xml`.

## Notas técnicas

- **Imágenes**: el logo del hero se sirve como WebP (~25 KB) con PNG de
  respaldo vía `<picture>`. La imagen OG (`og-image.png`) solo la usan los
  crawlers de redes sociales, no la carga de la página.
- **Cabeceras de seguridad**: GitHub Pages no ejecuta `.htaccess` ni permite
  cabeceras personalizadas. HTTPS se fuerza desde la configuración del repo
  (Settings → Pages → *Enforce HTTPS*). En el HTML se incluye
  `<meta name="referrer">` como medida disponible en estático.
