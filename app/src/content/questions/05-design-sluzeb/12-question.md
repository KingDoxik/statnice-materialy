---
title: "Měření dopadu změny: baseline, KPI a kauzalita"
subject: "Design sluzeb"
subjectSlug: "05-design-sluzeb"
order: 12
question: "Jak nastavíte měření úspěchu služby a evaluaci změny? Vysvětlete baseline, leading/lagging indikátory, riziko Goodhartova zákona a zvolte vhodný evaluační design (A/B, postupný rollout, difference-in-differences, contribution analysis) pro end-to-end změnu služby."
relatedChapters: ["Teorie změn a metodika řízení změn", "Design služeb (mindset, proces, nástroje a metody)"]
---## 1) Začít cíli a ToC
- metriky musí odpovídat mechanismu změny (ToC)
- jinak hrozí optimalizace „špatného čísla“

## 2) Baseline
- výchozí stav metrik před intervencí
- bez baseline nelze seriózně tvrdit zlepšení

## 3) Leading vs. lagging indikátory
- **leading**: včasné signály (adopce, chybovost, čekání, dostupnost dat)
- **lagging**: potvrzení dopadu (NPS, retence, náklady)

## 4) Goodhartův zákon
Jakmile se metrika stane cílem, může přestat měřit kvalitu.
- příklad: zkrácení doby hovoru → horší vyřešení, více opakovaných kontaktů
Řešení: vyvážená sada metrik + kontrola vedlejších efektů.

## 5) Volba evaluačního designu
### A/B test
- vhodné pro dílčí digitální změny (texty, pořadí kroků)
- u služeb pozor na přelití do jiných kanálů

### Postupný rollout (stepped roll-out)
- nasazení po regionech/pobočkách
- umožní srovnávat trendy a učit se

### Difference-in-differences
- když existuje srovnatelná kontrolní skupina a obhajitelné paralelní trendy

### Contribution analysis
- realistická pro komplexní end-to-end změny
- sbírá důkazy pro články ToC + pracuje s alternativními vysvětleními

## 6) Praktická sada metrik pro službu
- CX: CSAT/CES po klíčové interakci
- provoz: lead time vyřízení, rework, eskalace, FCR
- ekonomika: náklad na obsluhu, unit economics
- adopce: podíl transakcí novým procesem, míra obcházení

## Co se hodnotí
- schopnost vybrat metodicky poctivý design vzhledem k realitě služby
- schopnost vysvětlit omezení kauzality a pracovat s kontribucí.
