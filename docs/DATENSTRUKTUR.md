# Datenstruktur und Aufbau des Repos

Diese Seite ist eine **statische HTML/CSS/JS-Anwendung** ohne Build-Prozess.

## 1) Architektur auf einen Blick

- `index.html`
  - Definiert das Seitenlayout (Sektionen, Container, Modal).
  - Bindet alle Daten-Dateien (`js/data_*.js`) und danach die Logik (`js/quickref.js`) ein.
- `js/data_*.js`
  - Enthalten jeweils Arrays von Einträgen (z. B. `data_action`, `data_movement`).
  - Jeder Eintrag ist ein Objekt mit den Schlüsseln:
    - `title`
    - `icon`
    - `subtitle`
    - `description`
    - `reference`
    - `bullets` (Array von Strings)
- `js/quickref.js`
  - Rendert Einträge als Kacheln (`add_quickref_item`).
  - Öffnet Modal mit Detailtext (`show_modal`).
  - Verknüpft Datensätze mit HTML-Zielcontainern (`fill_section` / `init`).
- `css/quickref.css` und `css/icons.css`
  - Zuständig für Layout, Farben, Spaltenverhalten und Icon-Darstellung.

## 2) Wie die aktuellen Kategorien zusammenspielen

Aktuell werden diese Kategorien in `init()` befüllt:

- Bewegung → `data_movement` → Zielcontainer `basic-movement`
- Aktion → `data_action` → `basic-actions`
- Bonus Aktion → `data_bonusaction` → `basic-bonus-actions`
- Reaktion → `data_reaction` → `basic-reactions`
- Zustand → `data_condition` → `basic-conditions`
- Umgebungseffekte (4 Unterblöcke):
  - `data_environment_obscurance` → `environment-obscurance`
  - `data_environment_light` → `environment-light`
  - `data_environment_vision` → `environment-vision`
  - `data_environment_cover` → `environment-cover`

Die Seite rendert nur, was sowohl
1. als HTML-Container existiert,
2. als Datenarray vorhanden ist,
3. in `init()` via `fill_section(...)` verbunden wird.

---

## 3) Neue Kategorie hinzufügen (z. B. "Freie Aktion")

### Schritt A: Daten-Datei anlegen

Neue Datei `js/data_freeaction.js`:

```js
data_freeaction = [
  {
    title: "Waffe ziehen",
    icon: "sword",
    subtitle: "Interaktion mit Objekt",
    description: "Ziehe eine Waffe als freie Interaktion im Zug.",
    reference: "PHB, pg. 190.",
    bullets: [
      "Eine Interaktion mit Objekt ist normalerweise kostenlos.",
      "Zusätzliche Interaktionen kosten die Aktion Use Object."
    ]
  }
]
```

### Schritt B: HTML-Sektion ergänzen

In `index.html` innerhalb von `<div class="page ...">` einen neuen Abschnitt ergänzen:

```html
<div id="section-free-action" class="section-container">
  <div class="section-title">
    Freie Aktion <span class="float-right">situativ</span>
  </div>
  <div class="section-content">
    <div class="section-row section-subtitle text fontsize">
      Kleine Interaktionen, die in der Regel keine eigene Aktion verbrauchen.
    </div>
    <div class="section-row" id="basic-free-actions"></div>
  </div>
</div>
```

### Schritt C: Script in HTML einbinden

In `index.html` bei den Script-Tags (Datenblöcke), **vor** `js/quickref.js`:

```html
<script type="text/javascript" src="js/data_freeaction.js" charset="utf-8"></script>
```

### Schritt D: In `init()` verdrahten

In `js/quickref.js` ergänzen:

```js
fill_section(data_freeaction, "basic-free-actions", "Freie Aktion");
```

Dann erscheint die neue Kategorie mit denselben Karten-/Modal-Mechaniken wie die bestehenden Kategorien.

---

## 4) Weitere Felder pro Eintrag hinzufügen (z. B. "kosten", "voraussetzung")

Wenn du nicht nur neue Kategorien, sondern auch **zusätzliche Datenfelder** pro Eintrag willst:

1. In den Datenobjekten neue Keys einfügen, z. B.:

```js
{
  title: "Waffe ziehen",
  icon: "sword",
  subtitle: "Interaktion",
  kosten: "frei",
  voraussetzung: "mindestens eine freie Hand",
  description: "...",
  reference: "...",
  bullets: ["..."]
}
```

2. In `show_modal(...)` in `js/quickref.js` diese Felder auslesen und ins Modal rendern (z. B. als zusätzliche Zeilen vor den Bullets).

3. Optional CSS ergänzen, wenn du eigene Labels/Badges für diese Felder möchtest.

Hinweis: Unbekannte Felder werden aktuell ignoriert, solange `quickref.js` sie nicht anzeigt.

---

## 5) Typische Fehlerquellen

- Container-ID in HTML stimmt nicht exakt mit `fill_section(..., "id", ...)` überein.
- Neue `data_*.js` Datei wird nicht in `index.html` eingebunden.
- Script-Reihenfolge falsch (Daten müssen vor `quickref.js` geladen sein).
- Tippfehler im Array-Namen (`data_freeaction` vs `data_free_action`).

Wenn du möchtest, kann ich dir im nächsten Schritt eine konkrete neue Kategorie direkt im Code anlegen (inkl. 2–3 Beispieldatensätzen).
