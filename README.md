# Memory Game 🃏

Ein browserbasiertes Memory-Spiel mit Glassmorphism-Design, gebaut mit Vanilla JavaScript und ES-Modulen.

## Spielablauf

1. **Start** — Auf „Spielen!" klicken
2. **Spielername** eingeben und Kartenzahl wählen (8 / 16 / 24 Karten)
3. **Kategorie** auswählen: 🌿 Natur · 🚗 Autos
4. **Paare finden** — Karten aufdecken und alle Paare finden
5. **Gewonnen!** — Zeit und Rekord werden angezeigt

## Features

- 3 Schwierigkeitsstufen (8 / 16 / 24 Karten)
- Bestzeiten-Rekord pro Schwierigkeitsstufe (gespeichert im localStorage)
- Animierter Win-Screen mit Partikeleffekten
- Glassmorphism-UI mit animierten Hintergrund-Orbs

## Starten

Da das Projekt ES-Module verwendet, muss es über einen lokalen Server geöffnet werden — **nicht** direkt als `file://`.

**Option 1 – VS Code Live Server:**  
Rechtsklick auf `index.html` → „Open with Live Server" (läuft auf Port 5501)

**Option 2 – Python:**
```bash
python3 -m http.server 8080
```
Dann im Browser: `http://localhost:8080`

## Technologien

- HTML5 / CSS3 (Glassmorphism, CSS-Animationen)
- Vanilla JavaScript (ES-Module, kein Framework, kein Build-Tool)
- localStorage für Spielername und Rekorde
