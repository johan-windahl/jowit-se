# Jowit - Innovationsstudio

Modern dark landing page för Jowit, en innovationsstudio som bygger och lanserar nya digitala företag.

## Funktioner

- Modern dark theme design
- Responsiv layout för alla enheter
- Smooth scroll och interaktiva animationer
- Optimerad för GitHub Pages
- SEO-vänlig struktur

## GitHub Pages Deployment

### Steg 1: Push till GitHub
```bash
git add .
git commit -m "Add Jowit landing page"
git push origin main
```

### Steg 2: Aktivera GitHub Pages
1. Gå till repository settings på GitHub
2. Navigera till "Pages" i sidomenyn
3. Under "Source", välj "main" branch
4. Klicka på "Save"

### Steg 3: Vänta på deployment
GitHub Pages kommer automatiskt att bygga och deploya din sida. Detta tar vanligtvis 1-2 minuter.

Din sida kommer att vara tillgänglig på: `https://[username].github.io/jowit-se/`

## Lokal utveckling

För att testa sidan lokalt, öppna helt enkelt `index.html` i din webbläsare, eller använd en lokal server:

```bash
# Med Python
python -m http.server 8000

# Med Node.js (npx)
npx serve

# Med PHP
php -S localhost:8000
```

Öppna sedan `http://localhost:8000` i din webbläsare.

## Struktur

```
.
├── index.html      # Huvudfil med HTML-struktur
├── styles.css      # Alla styles för dark theme
├── script.js       # Interaktiva element och animationer
└── README.md       # Denna fil
```

## Anpassning

### Färger
Färgerna kan enkelt anpassas genom att ändra CSS-variablerna i `styles.css`:

```css
:root {
    --bg-primary: #0a0a0a;
    --bg-secondary: #111111;
    --accent-primary: #6366f1;
    --accent-secondary: #8b5cf6;
}
```

### Innehåll
Uppdatera innehållet direkt i `index.html`. Texten är på svenska och kan enkelt redigeras.

### Kontakt
Ändra email-adressen i kontaktsektionen till din faktiska kontakt-email.

## Teknologi

- HTML5
- CSS3 (Custom Properties, Grid, Flexbox)
- Vanilla JavaScript
- Google Fonts (Inter)

## Licens

© 2024 Jowit. Alla rättigheter förbehållna.
