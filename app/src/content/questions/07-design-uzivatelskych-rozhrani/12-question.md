---
title: "Design systém ve vizuálním designu (tokeny)"
subject: "Design uzivatelskych rozhrani"
subjectSlug: "07-design-uzivatelskych-rozhrani"
order: 12
question: "Vysvětlete, jak design systém stabilizuje vizuální design v čase. Jak byste navrhli tokenizaci pro barvy, typografii a spacing (core vs semantic tokeny) a jak byste řešili theming (dark mode, high-contrast)?"
relatedChapters: ["Design Operations (design systém, optimalizace, nástroje, měření, integrace atd.)", "Vizuální design (barva, kompozice, typografie, metody vizuální prezentace informací)"]
---### 1) Proč design systém
- Zajišťuje **konzistenci** (stejné významy = stejné řešení).
- Umožňuje **škálování** (více týmů, více platforem).
- Snižuje **design i technický dluh**.

### 2) Tokenizace: vrstvy
1. **Core tokeny** (surové hodnoty)
   - např. škála šedi 50–900, typografické velikosti, spacing škála.
2. **Semantic tokeny** (význam)
   - např. `color.text.primary`, `color.status.error`, `space.section`.
3. (Volitelně) **Component tokeny**
   - např. `button.background.default`.

### 3) Typografie a spacing v systému
- Definujte:
  - text styles (heading/body/label),
  - škálu spacing (xs/s/m/l) jako jediný zdroj rozestupů,
  - pravidla rytmu (vertikální rytmus, baseline grid).

### 4) Theming
- Theme = mapování semantic tokenů na konkrétní core hodnoty.
- Pro dark mode/high-contrast:
  - mění se mapování, komponenty zůstávají stejné.
- Výhoda: neřešíte „přebarvení obrazovek“, ale systém.

### 5) Governance a udržitelnost
- Změny tokenů musí být verzované a komunikované.
- Testování: kontrast a regresní kontroly napříč tématy.

### Shrnutí
Design systém není katalog obrazovek: je to **systém významů**, který se přes tokeny propisuje do komponent a témat.
