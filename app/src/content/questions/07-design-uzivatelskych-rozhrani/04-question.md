---
title: "Gestalt principy v praxi UI"
subject: "Design uzivatelskych rozhrani"
subjectSlug: "07-design-uzivatelskych-rozhrani"
order: 4
question: "Vysvětlete gestalt principy a ukažte, jak je prakticky použít v návrhu formuláře nebo nastavení. Jak byste pomocí gestaltu zlepšili srozumitelnost bez přidávání rámečků a čar?"
relatedChapters: ["Vizuální design (barva, kompozice, typografie, metody vizuální prezentace informací)"]
---### Co je Gestalt v UI
Gestalt principy popisují, jak lidé **automaticky seskupují** vizuální prvky do celků.

### Klíčové principy a jejich použití
1. **Blízkost (proximity)**
   - prvky blízko sebe vnímáme jako skupinu.
   - použití: label + input + nápověda + chyba tvoří kompaktní blok.
2. **Podobnost (similarity)**
   - stejné tvary/styly znamenají „stejný typ věci“.
   - použití: všechny sekundární akce mají stejný vizuální styl.
3. **Figura–pozadí (figure-ground)**
   - odlišení aktivní vrstvy od pozadí.
   - použití: modal/overlay musí jasně vystoupit (a pozadí se „odsunout“).
4. **Uzavřenost a kontinuita (closure/continuity)**
   - mozek doplňuje tvary a sleduje „linie“.
   - použití: sekce lze naznačit whitespace a zarovnáním, bez boxů.

### Aplikace: formulář / nastavení
- Použijte **vertikální rytmus**: každá sekce má stejný spacing.
- **Seskupujte** související položky (např. notifikace) menším rozestupem uvnitř skupiny a větším mezi skupinami.
- Využijte **typografii**: nadpis sekce + krátký popis → jasný kontext.
- Zajistěte konzistentní zarovnání labelů a ovládacích prvků.

### Co tím testujete
- Porozumění vztahům: „co patří k sobě“ bez explicitních hranic.
- Schopnost obhájit, kdy jsou čáry/rámce nutné (např. pro figure-ground u modalu).

### Typické chyby
- náhodné rozestupy → falešné skupiny,
- různé styly stejné funkce → rozpad podobnosti,
- slabý kontrast vrstvy modalu → uživatel jedná „v pozadí“.

### Shrnutí
Gestalt umožňuje „kreslit strukturu“ pomocí prostoru, konzistence a hierarchie místo dekorativních rámečků.
