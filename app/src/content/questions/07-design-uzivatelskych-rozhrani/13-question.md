---
title: "Konzistence vs lokální optimalizace (výjimky)"
subject: "Design uzivatelskych rozhrani"
subjectSlug: "07-design-uzivatelskych-rozhrani"
order: 13
question: "Popište, kdy je legitimní porušit pravidla design systému a kdy je to škodlivé. Jak byste procesně a argumentačně řešili design exception, aby se nezvyšoval design debt a současně se zlepšila použitelnost?"
relatedChapters: ["Design Operations (design systém, optimalizace, nástroje, měření, integrace atd.)", "Vizuální design (barva, kompozice, typografie, metody vizuální prezentace informací)"]
---### 1) Proč konzistence
- Zrychluje učení a snižuje chyby.
- Umožňuje škálování vývoje a designu.

### 2) Kdy je výjimka legitimní
- Když prokazatelně zlepšuje:
  - použitelnost v konkrétním kontextu,
  - přístupnost,
  - výkon / technické limity,
  - doménovou správnost.

### 3) Kdy je škodlivá
- Když je motivací jen „lokální estetika“ nebo preference.
- Když vytváří další variantu bez jasné potřeby.
- Když rozbíjí mentální model (stejné věci vypadají jinak).

### 4) Jak řídit design exception
- Proces:
  1. popsat problém a kontext,
  2. porovnat varianty (včetně systémové),
  3. doložit důkazy (testování, metriky, a11y),
  4. rozhodnout: dočasná výjimka vs. rozšíření systému,
  5. zdokumentovat (governance, versioning).
- Důležité: plán „co dál“ (začlenit / odstranit).

### 5) Argumentace u zkoušky
- ukažte trade-off mezi lokálním ziskem a systémovými náklady,
- propojte s design debt a governance.

### Shrnutí
Výjimka je v pořádku, když je **zdůvodněná, měřitelná a řízená**; jinak je to nekontrolované tříštění systému.
