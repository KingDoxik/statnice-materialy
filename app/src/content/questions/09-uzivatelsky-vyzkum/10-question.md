---
title: "Expertní analýza: postup a role v procesu"
subject: "Uzivatelsky vyzkum"
subjectSlug: "09-uzivatelsky-vyzkum"
order: 10
question: "Vysvětlete, co je expertní analýza (expert review) a jak se liší od uživatelského testování. Navrhněte praktický postup expertní analýzy včetně vymezení scope, risk-based přístupu, dokumentace nálezů a návaznosti na ověření s uživateli."
relatedChapters: ["Expertní analýza (inspekční hodnocení expertem)", "Volba metody na základě výzkumných otázek a fáze designového procesu"]
---## Co je expertní analýza
- Inspekční evaluace bez uživatelů, založená na odbornosti, principech a rámcích.
- Výstup: rychlé odhalení rizik, „quick wins“, standardizační dluh.

## Rozdíl vs. uživatelské testování
- Expert = rychlý diagnostický filtr, ale riziko **false positives/false negatives**.
- Testování = ověření na reálném chování, vyšší relevance pro mentální modely.

## Doporučený postup
1. **Scope a cíle**
   - které části produktu, pro koho, pro jaké scénáře.
2. **Rámec**
   - guideline review (např. design system, WCAG),
   - kognitivní průchod pro naučitelnost,
   - heuristická evaluace pro principy použitelnosti.
3. **Risk-based evaluation**
   - zaměřit se na kritické cesty a místa s vysokým dopadem.
4. **Inspekce a dokumentace**
   - problém v kontextu, screenshot, dopad, návrh nápravy.
5. **Konsolidace a prioritizace**
   - severity / riziko.
6. **Návaznost**
   - expertní nálezy chápat jako hypotézy → cílené uživatelské testování.

## Kdy je to ideální
- Před testováním (odstraní „hygienu“ a zefektivní test).
- Při auditu existujícího systému.
- Když nejsou rychle dostupní uživatelé.

## Limity
- Doménový kontext a mentální modely mohou expertům unikat.
- Nutná transparentnost a následná triangulace.
