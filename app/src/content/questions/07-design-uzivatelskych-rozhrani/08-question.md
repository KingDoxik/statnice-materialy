---
title: "Vizualizace dat: volba kódování a grafu"
subject: "Design uzivatelskych rozhrani"
subjectSlug: "07-design-uzivatelskych-rozhrani"
order: 8
question: "Kdy byste v UI použili text, tabulku a kdy graf? Vysvětlete principy signal vs. noise a data‑ink ratio a obhajte volbu kódování dat (pozice/délka/plocha/barva). Uveďte typické chyby a jak jim předcházet."
relatedChapters: ["Vizuální design (barva, kompozice, typografie, metody vizuální prezentace informací)"]
---### 1) Volba reprezentace
- **Text**: přesné, rychlé pro jednoduché sdělení (např. „Zbývá 3 dny“).
- **Tabulka**: nejlepší pro **přesné hodnoty** a skenování atributů.
- **Graf**: nejlepší pro **trendy, porovnání, vzorce** (když je důležitý tvar, ne jen číslo).

### 2) Signal vs. noise a data‑ink ratio
- Cíl: maximalizovat informaci a minimalizovat dekorace.
- „Inkoust“ má buď nést data, nebo podporovat čtení (osy, popisky).

### 3) Kódování dat (percepční spolehlivost)
- Pro přesné porovnání:
  1. **pozice na společné ose** (nejlepší),
  2. pozice na ne společné ose,
  3. **délka**,
  4. plocha/objem,
  5. úhel (koláč),
  6. barva/sytost (slabé pro přesnost).

### 4) Praktická pravidla
- Porovnání kategorií → sloupcový graf.
- Trend v čase → čárový graf.
- Distribuce → histogram/boxplot (podle gramotnosti uživatele).
- Vztah dvou proměnných → scatterplot.

### 5) Typické chyby
- Koláčový graf pro mnoho kategorií (špatná čitelnost úhlů).
- Dvojité osy → zavádějící interpretace.
- Ořezaná osa bez kontextu → zveličení rozdílů.
- Barva jako jediný rozdíl serií → nepřístupné.

### 6) Progressive disclosure
- Přehled (sumarizace) + detail na vyžádání (tooltip, drill-down, tabulka).

### Shrnutí
Volba grafu je volba **otázky**, kterou má UI zodpovědět; pro přesnost preferujte pozici/délku, pro orientaci může stačit barva – vždy s rozmyslem a s ohledem na přístupnost.
