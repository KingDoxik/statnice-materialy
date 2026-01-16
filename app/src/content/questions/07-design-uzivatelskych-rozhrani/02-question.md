---
title: "Barva: sémantika, kontrast a redundance"
subject: "Design uzivatelskych rozhrani"
subjectSlug: "07-design-uzivatelskych-rozhrani"
order: 2
question: "Navrhněte, jak byste v produktu nastavili barevný systém tak, aby byl sémantický, přístupný a udržitelný. Jak byste řešili stavové barvy, kontrast a situace, kdy barva nesmí být jediným nosičem informace?"
relatedChapters: ["Vizuální design (barva, kompozice, typografie, metody vizuální prezentace informací)", "Přístupnost a nástroje", "Design Operations (design systém, optimalizace, nástroje, měření, integrace atd.)"]
---### 1) Sémantika barev (co barva „říká“)
- Definujte významové role:
  - **text** (primary/secondary/inverse),
  - **pozadí** (canvas/surface),
  - **hranice** (border),
  - **akce** (primary/secondary/destructive),
  - **stavy** (success/warning/error/info).
- Důležité: **stabilita významu** napříč obrazovkami (konzistence).

### 2) Přístupnost a kontrast (co je čitelné)
- Ověřujte kontrast dle WCAG:
  - běžný text: **min. 4,5:1 (AA)**,
  - velký text: **min. 3:1 (AA)**,
  - netextové UI indikátory (ohraničení inputu, ikony v ovládacích prvcích, focus ring): typicky **min. 3:1**.
- Kontrast testujte na **reálných komponentech** (velikost/řez písma mění vnímaný kontrast).
- U dark mode se vyhněte čistě bílé na čistě černé → pracujte s „off‑white“ a zvednutou luminancí pozadí.

### 3) Redundance signálu (nejen barvou)
- Stavy komunikujte kombinací:
  - barva + text (chybová hláška),
  - barva + ikona,
  - barva + tvar/outline + umístění,
  - a v implementaci i sémantika (např. aria-invalid).

### 4) Udržitelnost: tokeny a témata
- Oddělte:
  - **core palety** (škály odstínů),
  - **semantic tokeny** (např. `color.status.error`),
  - mapování do **themes** (light/dark/high-contrast).
- Výhoda: změna vizuálu bez přepisování komponent.

### 5) Typické chyby
- příliš mnoho akcentních barev → rozpad hierarchie,
- slabé focus stavy kvůli estetice,
- sémantika „červená = vše důležité“ → zahlcení a stres.

### Shrnutí
Správný návrh barvy = **význam + čitelnost + systém** (sémantika, WCAG kontrast, tokenizace) + **redundance signálu**.
