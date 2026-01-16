---
title: "Kvantitativní evidence: významnost a A/B testy"
subject: "Design zamereny na cloveka"
subjectSlug: "08-design-zamereny-na-cloveka"
order: 12
question: "Jak byste použili kvantitativní data a experimenty v rámci designu zaměřeného na člověka? Vysvětlete statistickou významnost (a její limity), velikost efektu a uveďte, kdy je A/B test nevhodný nebo eticky problematický."
relatedChapters: ["Proces designového myšlení na základě struktury dvojího diamantu"]
---### Role kvantitativních dat v HCD
- Odpovídají na „kolik, jak často, kde je problém největší“.
- Často navazují na kvalitativní hypotézy (triangulace).

### Statistická významnost
- p-hodnota: pravděpodobnost pozorovat data alespoň tak extrémní při platnosti nulové hypotézy a modelu.
- **Neříká** velikost efektu ani praktickou důležitost.
- Nutné doplnit:
  - **velikost efektu**
  - intervaly spolehlivosti
  - doménovou relevanci

### A/B testování
- Smysl: kauzálnější inference při správném návrhu.
- Rizika: sezónnost, novostní efekt, změny populace, multiple comparisons.

### Kdy není A/B vhodné
- nízký traffic
- silné síťové efekty (varianta ovlivní i druhé)
- nestabilní instrumentace/definice metrik
- citlivé zásahy (etika), zásahy do bezpečnosti
- když neznáme mechanismus a potřebujeme nejdřív kvalitativně vysvětlit „proč“

### Etická dimenze
- Experiment nesmí zhoršit přístupnost/spravedlnost.
- Pozor na optimalizaci metrik pomocí manipulací (dark patterns).

### Správná interpretace pro rozhodnutí
- I signifikantní rozdíl může být zanedbatelný; naopak nesignifikantní může být prakticky relevantní (malý vzorek).
- Rozhodnutí má stát na kombinaci: evidence, rizika, nákladů a hodnot.
