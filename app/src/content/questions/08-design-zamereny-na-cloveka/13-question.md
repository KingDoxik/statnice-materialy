---
title: "Iterace, handoff a měření dopadu po nasazení"
subject: "Design zamereny na cloveka"
subjectSlug: "08-design-zamereny-na-cloveka"
order: 13
question: "Popište, jak v Deliver fázi řídíte iterace od zjištění z testů až po implementaci. Jak stanovíte „dost dobré“ kritérium pro release, jak řešíte design handoff a jak měříte output/outcome/impact po nasazení?"
relatedChapters: ["Proces designového myšlení na základě struktury dvojího diamantu"]
---### Iterace jako cyklus učení
1. zjištění z testu
2. hypotéza příčiny
3. úprava návrhu
4. re-test (ověření, že se problém odstranil a nevznikly nové)

### Kdy je řešení „dost dobré“
- předem definovaná kritéria:
  - minimální úspěšnost úloh
  - limity chybovosti
  - splnění přístupnosti
  - splnění klíčových akceptačních kritérií
- rozhodnutí je řízené rizikem (bezpečnost, regulace, reputace).

### Design handoff
- Nejen „obrazovky“, ale:
  - interakční pravidla a stavy
  - chybové stavy a výjimky
  - záměry (rationale) a evidence
  - akceptační kritéria pro verifikaci
- Cíl: minimalizovat interpretační ztrátu.

### Měření po nasazení
- **Output:** nasazená funkce/změna.
- **Outcome:** krátkodobá změna chování/metrik (např. dokončení toku).
- **Impact:** dlouhodobý efekt (např. snížení opakovaných kontaktů, důvěra).

### Jak přemýšlet o kauzalitě
- Ošetřit alternativní vysvětlení: sezónnost, změny v populaci, novost.
- Pokud potřebujeme kauzální závěr: experiment, kvazi-experiment, pilot.

### Typické selhání
- „dodáno“ bez monitoringu → nevíme, zda to funguje
- měření proxy metrik bez vazby na mechanismus
- chybějící decision log: tým opakuje stejné debaty
