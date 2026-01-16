---
title: "Heuristická analýza: principy a proces"
subject: "Uzivatelsky vyzkum"
subjectSlug: "09-uzivatelsky-vyzkum"
order: 12
question: "Vysvětlete heuristickou analýzu jako metodu: jaké jsou Nielsenovy heuristiky (v rovině významu, ne výčtu), jak probíhá proces s více evaluátory, jak se dělá konsolidace a jaké jsou typické chyby (heuristická slepota, checklistové myšlení)."
relatedChapters: ["Heuristická analýza (heuristická evaluace)", "Expertní analýza (inspekční hodnocení expertem)"]
---## Co je heuristická analýza
- Strukturované expertní hodnocení rozhraní podle sady heuristik.
- Cíl: rychle identifikovat porušení principů použitelnosti a navrhnout nápravy.

## Význam heuristik (interpretace)
- Heuristiky jsou **rámec**, ne mechanický checklist.
- Příklady významu:
  - viditelnost stavu systému = průběžná zpětná vazba,
  - shoda se světem uživatele = jazyk a koncepty domény,
  - prevence chyb = design, který chybám předchází,
  - rozpoznání vs. vybavování = snižování paměťové zátěže.

## Proces s více evaluátory
1. Vymezit scope, cíle, uživatele a scénáře.
2. Připravit úlohy/flow pro systematické procházení.
3. **Nezávislé hodnocení** každým evaluátorem.
4. Agregace a **konsolidace**:
   - deduplikace,
   - mapování na heuristiky,
   - evidence (screenshot, popis),
   - severity.
5. Report a návrhy doporučení.

## Počet evaluátorů
- Každý zachytí jen část problémů → více evaluátorů zvyšuje pokrytí.
- Platí diminishing returns (hledat optimum náklad/přínos).

## Typické chyby
- **Heuristická slepota**: ignorování doménového kontextu.
- Checklistové myšlení: generuje neakční nálezy.
- Považování nálezů za definitivní pravdu (nutná validace s uživateli).

## Doporučení
- Heuristiku používat jako společný jazyk pro tým + jako vstup pro cílené testování.
