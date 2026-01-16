---
title: "Typografie, mikrokopie a prevence chyb"
subject: "Design uzivatelskych rozhrani"
subjectSlug: "07-design-uzivatelskych-rozhrani"
order: 7
question: "Na příkladu formuláře (registrace/platba) vysvětlete, jak se typografie a mikrokopie společně podílejí na prevenci chyb. Jak byste navrhli labely, nápovědu, validaci a chybové zprávy včetně vizuálních stavů?"
relatedChapters: ["Vizuální design (barva, kompozice, typografie, metody vizuální prezentace informací)", "Přístupnost a nástroje"]
---### Proč typografie + mikrokopie
- Text v UI je často **signifikátor** i **instrukce**.
- Cíl: snížit nejistotu → méně chyb, vyšší dokončení.

### 1) Labely a struktura
- Label má být:
  - jednoznačný,
  - konzistentní (stejný styl, stejné umístění),
  - vizuálně odlišený od hodnoty.
- Nezaměňovat label za placeholder (placeholder je nestabilní a mizí).

### 2) Nápověda
- Krátká, kontextová, pod polem.
- Použít tehdy, když pravidlo není zřejmé (např. formát hesla).

### 3) Validace a chybové zprávy
- Kdy validovat:
  - průběžně (inline) pro jasná pravidla,
  - při opuštění pole,
  - při odeslání (minimálně).
- Chybová zpráva má říkat:
  - co je špatně,
  - proč,
  - jak opravit.
- Umístit co nejblíže k problému.

### 4) Vizuální stavy
- Default / focus / error / success / disabled / loading.
- Error stav musí být **redundantní**: barva + text + případně ikona.
- Focus state nesmí být potlačen (klíčové pro klávesnici).

### 5) Přístupnost
- „Nejen barvou“, kontrast i pro netextové indikátory.
- V implementaci zajistit oznámení chyby (např. aria-invalid) a logický fokus.

### Typický návrh registrace
- Heslo: nápověda pravidel + indikátor síly (nejen barvou) + jasná chyba.
- Odeslání: loading stav, aby uživatel neklikal opakovaně.

### Shrnutí
Prevence chyb vzniká spojením: **jasný jazyk + konzistentní typografie + správné stavy + zpětná vazba**.
