---
title: "Prototypování: fidelity, fake it a Wizard-of-Oz"
subject: "Design sprint"
subjectSlug: "06-design-sprint"
order: 9
question: "Jak byste rozhodli o vhodné věrnosti prototypu (lo-fi vs. hi-fi) v design sprintu? Vysvětlete princip „fake it“ a techniku Wizard-of-Oz a uveďte, jaké typy rizik umí (a neumí) prototyp otestovat."
relatedChapters: ["Den 4 – Prototypování (Prototype)", "Metodologie design sprintu"]
---## Volba fidelity podle rizika
- **Lo-fi** (wireframe, papír, jednoduché klikání):
  - vhodné pro: strukturu, IA, základní tok, porozumění krokům,
  - výhoda: rychlost, levné iterace.
- **Hi-fi** (vizuálně realistický prototyp):
  - vhodné pro: důvěryhodnost, microcopy, vnímanou hodnotu, jemné interakční detaily,
  - riziko: „halo efekt“ (vypadá hotově → falešná jistota).

## „Fake it“ princip
- Cíl: vytvořit **přesvědčivou iluzi funkčnosti** v rozsahu nutném pro test.
- Nejde o mini-produkt, ale o experimentální reprezentaci.

## Wizard-of-Oz
- Uživatel má dojem, že systém funguje automaticky, ale reakce simuluje člověk.
- Užitečné, když je implementace drahá/neexistuje (např. AI doporučení, schvalování).

## Co prototyp typicky otestuje dobře
- **Usability**: projde uživatel tok bez nápovědy?
- **Porozumění**: chápe pojmy, stavy, důsledky voleb?
- **Desirability signály**: dává to smysl v jeho scénáři?

## Co prototyp neumí validovat (nebo jen omezeně)
- Výkon, stabilita, edge-cases v produkci.
- Dlouhodobé chování (retence, habituace).
- Skutečný obchodní dopad (bez produkčního měření).

## Praktické rozhodovací pravidlo
Fidelity zvolím tak, aby byl test „realistický v tom, co je kritické“ a zároveň aby prototyp šel dokončit v timeboxu a zachoval fokus na must-learn.
