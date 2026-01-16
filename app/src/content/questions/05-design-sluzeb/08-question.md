---
title: "Prototypování služeb a testování v realitě"
subject: "Design sluzeb"
subjectSlug: "05-design-sluzeb"
order: 8
question: "Porovnejte prototypování UI a prototypování služby. Jaké typy prototypů služeb použijete (roleplay, service walkthrough, wizard-of-oz, pilot) a jak zvolíte metriky a evaluační design tak, aby se minimalizovalo riziko „přelití“ zátěže mezi kanály?"
relatedChapters: ["Design služeb (mindset, proces, nástroje a metody)", "Teorie změn a metodika řízení změn"]
---## Prototypování UI vs. služby
- UI prototyp: ověřuje interakce v jednom touchpointu.
- Prototyp služby: ověřuje **interakce + proces + role + pravidla + data + koordinaci kanálů**.

## Typy prototypů služeb
### 1) Roleplay / service walkthrough
- „odehrání“ služby podle scénáře
- rychle odhalí handovery, chybějící informace, konflikty rolí

### 2) Wizard-of-oz
- zákazník vidí „automatizaci“, ale část běží manuálně
- ověřuje hodnotu bez nákladné integrace

### 3) Pilot (MVP služby)
- test v reálném provozu v omezeném rozsahu
- musí zahrnovat minimální provozní zajištění (support, SOP, eskalace)

## Volba metrik
- **CX**: CSAT/CES v klíčových krocích, kvalitativní zpětná vazba
- **provoz**: doba vyřízení, chybovost, rework, opakované kontakty, SLA
- **adopce**: podíl transakcí novým způsobem, míra obcházení

## Minimalizace „přelití“ mezi kanály
- měřit dopady napříč kanály současně
- sledovat contact reason a objem kontaktů v call centru/pobočkách
- uvažovat kvaziexperiment:
  - postupný rollout po regionech/pobočkách
  - before/after s kontrolou sezónnosti
  - difference-in-differences, pokud je obhajitelné

## Příklad
Změna textů ve formuláři může zvýšit online dokončení, ale současně zvýšit dotazy na podporu kvůli nejasnému dalšímu kroku.
Proto v pilotu sleduji nejen konverzi, ale i počet kontaktů, jejich důvody a dobu vyřízení.

## Co zkouší zkoušející
- schopnost prototypovat službu jako sociotechnický systém
- schopnost navrhnout měření, které zachytí systémové vedlejší efekty.
