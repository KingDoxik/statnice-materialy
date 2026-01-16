---
title: "Layout a vizuální hierarchie: mřížky a whitespace"
subject: "Design uzivatelskych rozhrani"
subjectSlug: "07-design-uzivatelskych-rozhrani"
order: 3
question: "Popište, jak byste navrhovali layout obrazovky s více sekcemi (např. dashboard nebo nastavení), aby byla rychle skenovatelná a konzistentní. Jak pracujete s mřížkou, zarovnáním, whitespace a vertikálním rytmem?"
relatedChapters: ["Vizuální design (barva, kompozice, typografie, metody vizuální prezentace informací)"]
---### Cíl layoutu
- Umožnit uživateli **rychle rozpoznat strukturu**, najít klíčové informace a provést akci.

### 1) Mřížka a zarovnání
- Zvolte **grid** (sloupce, gutters, okraje) podle platformy.
- Držte konzistentní **zarovnání** (neviditelné vodicí linie).
- U textu zvažte **baseline grid** a navázání na typografii.

### 2) Whitespace jako strukturální prvek
- Whitespace není „prázdno“: 
  - odděluje sekce,
  - podporuje seskupování,
  - snižuje vizuální šum.
- Pracujte se **škálou rozestupů** (spacing tokens), ne s náhodnými hodnotami.

### 3) Vizuální hierarchie v layoutu
- Vytvořte jasnou dominantu (např. KPI, primární CTA).
- Podporujte skenování: 
  - skupiny, nadpisy, konzistentní „hlavička–tělo–akce“.
- Omezte počet „rovnocenných dominant“ (Hickův zákon + kognitivní zátěž).

### 4) Konzistence napříč obrazovkami
- Stejné typy sekcí mají stejné rozměry a spacing.
- Rozhodnutí stabilizujte v design systému (layout pravidla, spacing/typography tokeny).

### 5) Aplikace na dashboard / nastavení
- Dashboard: definujte **priority** (KPI musí být na první pohled), sekundární metriky potlačit.
- Nastavení: silné **seskupování** (sekce, podsekce), jasné signifikátory přepínačů a stavů.

### Typické chyby
- nekonzistentní odsazení → uživatel „nevidí“ strukturu,
- přepálena hustota informací bez hierarchie,
- přílišná kartičkovitost → rozmělňuje hierarchii.

### Shrnutí
Dobrý layout = **disciplinovaná mřížka + konzistentní spacing + hierarchie + nízký šum**.
