---
title: "Komparativní test: within vs. between design"
subject: "Uzivatelsky vyzkum"
subjectSlug: "09-uzivatelsky-vyzkum"
order: 7
question: "Porovnejte komparativní uživatelské testování v režimu within-subject a between-subject. Jaké jsou výhody/nevýhody, jak řešit learning effect a counterbalancing a kdy byste naopak komparaci nedoporučili?"
relatedChapters: ["Uživatelské testování (testování použitelnosti)", "Volba metody na základě výzkumných otázek a fáze designového procesu"]
---## Základní rozdíl
- **Within-subject**: každý účastník testuje více variant.
- **Between-subject**: každý účastník testuje jen jednu variantu.

## Within-subject
### Výhody
- Menší N (variabilita mezi lidmi se částečně „vyruší“).
- Citlivé na rozdíly mezi variantami.

### Nevýhody
- **Learning effect** a pořadový efekt.
- Kontaminace: druhá varianta může testovat „naučenou doménu“, ne UI.

### Ošetření
- **Counterbalancing** pořadí variant/úloh.
- Pečlivá volba úloh (aby se nepřekrývaly „paměťově“).

## Between-subject
### Výhody
- Menší riziko učení a přenosu strategie.
- Čistší pro zásadně odlišné flow.

### Nevýhody
- Potřeba většího vzorku.
- Variabilita mezi lidmi může maskovat efekt.

## Kdy komparaci nedělat
- Když jsou flow tak odlišné, že within-subject nebude interpretovatelný.
- Když hrozí silný efekt učení (např. onboarding učí doménu).
- Když prototyp neumožňuje stabilně měřit kritéria.

## Doporučení
- Pokud je cílem rychlá iterativní diagnostika: často testovat jednu variantu a iterovat.
- Pokud je cílem rozhodnout mezi variantami: komparaci navrhnout s ohledem na rizika učení a na potřebu standardizace.
