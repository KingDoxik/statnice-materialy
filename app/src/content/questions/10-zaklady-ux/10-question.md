---
title: "Chyby v HCI: slips vs. mistakes a prevence"
subject: "Zaklady UX"
subjectSlug: "10-zaklady-ux"
order: 10
question: "Rozlište slip a mistake a propojte tento rozdíl s rámcem SRK (skill–rule–knowledge). Na příkladu kritického formuláře (např. platba, dávkování léku) navrhněte vrstvy prevence chyb a zotavení (constraints, validace, potvrzení, undo) a zdůvodněte je kognitivně."
relatedChapters: ["Human-Computer Interaction (východiska z kognitivní psychologie)", "Designové principy založené na psychologickém výzkumu (Locus of Control, minimalistický design, estetika, použitelnost)"]
---### Slip vs. mistake
- **Slip:** uživatel ví, co chce, ale provede to špatně (nepozornost, automatizace, podobnost prvků).
- **Mistake:** špatný záměr/strategie (nesprávný mentální model).

### SRK rámec
- **Skill-based:** automatizované akce → typicky slipy.
- **Rule-based:** aplikace pravidel → chyby výběru pravidla.
- **Knowledge-based:** nový problém → chyby interpretace a inference.

### Vrstvy prevence a recovery
1. **Constraints (omezení):** znemožnit neplatné akce (např. jednotky dávky jen z výběru).
2. **Validace v čase zadávání:** chytit chybu co nejdřív (např. IBAN formát, extrémní dávka).
3. **Jasná hierarchie akcí:** snížit záměnu (primární vs. destruktivní tlačítka).
4. **Potvrzení u nevratných kroků:** jen tam, kde dává smysl (jinak habituace).
5. **Undo / možnost obnovy:** snížit dopad nevyhnutelných chyb.
6. **Srozumitelné chybové zprávy:** konkrétní, akční, v jazyce uživatele.

### Kognitivní zdůvodnění
- omezená pozornost a pracovní paměť → externalizace pravidel a stavu,
- negativní transfer a automatizace → potřeba konzistence a odlišení rizikových akcí.
