# APLICONC · Estudio Digital — Sitio web

Sitio estático en HTML/CSS/JS puro. Sin dependencias ni build.

## Estructura

```
austral/
├── index.html          ← página principal
├── css/
│   └── styles.css       ← todos los estilos
├── js/
│   └── main.js          ← interacciones (menú, scroll, formulario)
└── img/                 ← logo y favicons (debes agregarlos)
    ├── favicon-16.png
    ├── favicon-32.png
    ├── apple-touch-icon.png
    └── logo.svg          (opcional)
```

## Cómo verlo en VS Code

1. Abre la carpeta `austral` en VS Code.
2. Instala la extensión **Live Server**.
3. Clic derecho en `index.html` → **Open with Live Server**.

## Pendientes antes de publicar

1. **Favicon**: agrega tus archivos en `img/`:
   - `favicon-32.png` (32×32)
   - `favicon-16.png` (16×16)
   - `apple-touch-icon.png` (180×180)
   Puedes generarlos en https://realfavicongenerator.net
2. **Logo**: en `index.html` reemplaza el texto del logo (hay 2: header y footer)
   por una imagen, por ejemplo:
   ```html
   <a href="#" class="logo"><img src="img/logo.svg" alt="AUSTRAL" height="28"></a>
   ```
3. **WhatsApp**: busca `wa.me/56912345678` en `index.html` y pon tu número real.

## Subir a Hostinger

Sube el contenido de la carpeta `austral/` a `public_html` por el File Manager
o por FTP. Listo.
# Apliconc
