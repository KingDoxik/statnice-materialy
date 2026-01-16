---
title: "Práce s rizikem a assumption mapping ve sprintu"
subject: "Design sprint"
subjectSlug: "06-design-sprint"
order: 4
question: "Vysvětlete design sprint jako nástroj řízení rizika. Jak byste identifikovali kritické předpoklady (assumptions), vybrali „must-learn“ a odvodili z toho rozsah prototypu a testovací úlohy?"
relatedChapters: ["Metodologie design sprintu", "Rozhodování, prioritizace a práce s rizikem"]
---## Sprint jako risk-reduction mechanismus
Design sprint optimalizuje pro **rychlost učení**, ne pro rychlost dodání. Zaměřuje se na **kritické riziko**: předpoklad s vysokým dopadem a vysokou nejistotou.

## Postup: od předpokladů k must-learn
1. **Sepsat předpoklady** (uživatel, hodnota, použitelnost, proveditelnost, byznys).
2. **Assumption mapping / risk matrix**:
   - osa X: nejistota,
   - osa Y: dopad.
3. Vybrat top předpoklady = **kritická rizika**.
4. Přeložit do **sprint questions** a **hypotéz** (must-learn).

## Od must-learn k prototypu
- Prototyp obsahuje jen to, co je nutné, aby se kritický předpoklad projevil v chování.
- Rozsah určuje **target** v mapě: prototypuje se kritický úsek, zbytek se může simulovat.

## Od must-learn k úlohám v testu
- Úlohy musí vyvolat situace, kde se rozhoduje o hypotéze.
- Zadání bez „návodu“ (neprozrazovat termíny z UI).
- Definovat pozorovací kritéria: úspěch, chyby, porozumění, důvěra.

## Příklad
Kritické riziko: „Uživatelé nepochopí rozdíl mezi tarify.“
- Must-learn: „Dokážou vybrat správný tarif a vysvětlit proč?“
- Prototyp: srovnání tarifů + potvrzení dopadu (co se změní).
- Úloha: „Vyberte tarif pro firmu se 3 uživateli a měsíčním limitem X.“

## Rozhodnutí po testu
- Výsledek není jen seznam problémů, ale rozhodnutí: pokračovat / iterovat / pivot + navazující experiment backlog.
