---
title: "Fitts a Hick: dopad na vizuální návrh"
subject: "Design uzivatelskych rozhrani"
subjectSlug: "07-design-uzivatelskych-rozhrani"
order: 5
question: "Na příkladu mobilní obrazovky (např. výběr tarifu nebo checkout) vysvětlete, jak se Fittsův a Hickův zákon promítají do vizuálního designu a layoutu. Jaké konkrétní změny byste navrhli a jak je obhájili?"
relatedChapters: ["UI modely (Fitts's law, Hick's law, GOMS, Keystroke-level model)", "Vizuální design (barva, kompozice, typografie, metody vizuální prezentace informací)"]
---### Fittsův zákon → míření na cíle
- Čas zásahu roste s **vzdáleností (D)** a klesá s **velikostí cíle (W)**.
- Praktické důsledky:
  - zvětšit **tap targety** (např. ~44×44 pt iOS / ~48×48 dp Android jako rozumný základ),
  - zvětšit aktivní plochu i u textových odkazů,
  - oddělit destruktivní akce dostatečným spacingem,
  - umístit primární akci do dosažitelné zóny (thumb zone).

### Hickův zákon → rozhodování mezi možnostmi
- Čas rozhodnutí roste s počtem a „entropií“ voleb.
- Praktické důsledky:
  - redukovat počet rovnocenných možností,
  - seskupit volby (chunking),
  - použít progressive disclosure,
  - zvýraznit doporučenou volbu (ale eticky, bez manipulace).

### Aplikace: výběr tarifu
- Hick: 5 tarifů → seskupit do 2 kategorií + 1 doporučený.
- Fitts: radio tlačítko malé → udělat klikací **celou kartu/řádek**.
- Vizuál: jedna jasná dominanta (doporučený tarif), ostatní vizuálně klidnější.

### Aplikace: checkout
- Hick: příliš mnoho polí najednou → rozdělit do bloků (doprava/platba/adresa) s jasným pořadím.
- Fitts: CTA „Zaplatit“ dostatečně velké, oddělené od sekundárních akcí.

### Obhajoba
- Fitts: snížení chybovosti a času míření.
- Hick: snížení kognitivní zátěže a nejistoty.
- Důkaz: lze ověřit time-on-task, error rate, task success.

### Pozor na trade-off
- Přílišná redukce voleb může skrývat důležité možnosti → použijte progressive disclosure.

### Shrnutí
Fitts řeší **motoriku**, Hick **rozhodování**; vizuální design je aplikuje přes velikosti cílů, spacing a strukturování voleb.
