---
title: "Dashboard: hierarchie KPI a prezentace insightů"
subject: "Design uzivatelskych rozhrani"
subjectSlug: "07-design-uzivatelskych-rozhrani"
order: 9
question: "Navrhněte principy vizuálního a informačního designu dashboardu pro rozhodování. Jak byste určili vizuální prioritu KPI, jak byste řešili anotace, práci s nejistotou dat a progressive disclosure?"
relatedChapters: ["Vizuální design (barva, kompozice, typografie, metody vizuální prezentace informací)", "Přístupnost a nástroje"]
---### 1) Cíl dashboardu
- Ne „ukázat data“, ale umožnit **rychlé rozhodnutí**.

### 2) Hierarchie KPI
- Určete:
  - 1–3 klíčové KPI jako dominanty,
  - sekundární metriky jako podpůrné.
- Nástroje: velikost, kontrast, whitespace, typografie, poloha (nad fold).

### 3) Volba vizualizací
- Pro KPI často:
  - číslo + kontext (změna, jednotka),
  - malý trend (sparkline),
  - možnost drill-down.
- Vyhnout se „grafům pro efekt“ bez akční hodnoty.

### 4) Anotace a storytelling
- Používejte anotace k vysvětlení výkyvů (např. „nasazení verze“).
- Zkracují interpretaci a snižují riziko chybné kauzality.

### 5) Nejistota a správnost
- Označujte:
  - neúplná období,
  - odhady vs. měření,
  - filtry, které změnily definici metrik.
- UI má komunikovat omezení, i když „kazí estetiku“.

### 6) Progressive disclosure
- Základní přehled → detail až na vyžádání:
  - tooltipy,
  - drill-down do tabulky,
  - segmentace přes filtry.

### 7) Přístupnost
- Nejen barvou (styly čar, popisky),
- alternativní text / shrnutí trendu,
- kontrast a čitelnost.

### Shrnutí
Dashboard musí mít jasnou hierarchii, minimalizovat šum a být pravdivý: **priorita KPI + vhodné kódování + kontext + transparentnost dat**.
