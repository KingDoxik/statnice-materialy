---
title: "Testování: scénáře, metriky a interpretace"
subject: "Design zamereny na cloveka"
subjectSlug: "08-design-zamereny-na-cloveka"
order: 9
question: "Navrhněte plán testování použitelnosti pro prototyp (moderované vs nemoderované). Jak formulujete hypotézy, volíte úlohy/scénáře, kritéria úspěchu a jak překládáte zjištění do iterací bez záměny „názoru“ za důkaz?"
relatedChapters: ["Proces designového myšlení na základě struktury dvojího diamantu"]
---### 1) Začít hypotézami
- Test ověřuje **designové hypotézy** (ne „líbí/nelíbí“).
- Hypotéza propojuje změnu → očekávané chování → metrika/indikátor.

### 2) Úlohy a scénáře
- Úlohy musí odpovídat:
  - cílům persony
  - kritickým místům toku
  - reálnému kontextu (časový tlak, mobil, přerušení)

### 3) Kritéria úspěchu
- Úspěšnost dokončení, chybovost, čas, potřeba nápovědy.
- Závažnost problémů (severity) + pravděpodobná příčina.

### 4) Moderované vs nemoderované
- **Moderované:** hloubka, doplňující otázky, kontrola zadání.
- **Nemoderované:** škála, rychlost, ale riziko samovýběru a nepochopení zadání.

### 5) Think-aloud
- Pomáhá odhalit uvažování, ale může změnit chování; používat uvážlivě.

### 6) Interpretace: důkaz z interakce
- Zjištění nejsou „názory“, ale:
  - pozorované bariéry
  - vzorce chování
  - hypotézy o příčině (např. mentální model, vizuální hierarchie)
- Doporučení: vždy uvést *co jsme viděli → proč si myslíme → co změníme → jak re-testujeme*.

### 7) Výstup testu
- Seznam problémů se závažností, návrhy změn, otevřené otázky, plán iterací.

### Typické chyby
- test bez kritérií → nelze rozhodnout „dost dobré“
- dotazování na preference místo pozorování výkonu
- skok z problému rovnou na řešení bez hypotézy příčiny
