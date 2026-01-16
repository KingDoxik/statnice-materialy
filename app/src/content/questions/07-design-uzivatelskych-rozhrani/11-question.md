---
title: "Stavy UI a zpětná vazba (feedback)"
subject: "Design uzivatelskych rozhrani"
subjectSlug: "07-design-uzivatelskych-rozhrani"
order: 11
question: "Popište, jak byste navrhli systém zpětné vazby v UI (loading, success, error) pro kritický proces (např. platba). Jak volíte formu (toast/banner/inline/dialog) podle závažnosti a kontextu a jak do toho vstupuje vizuální hierarchie a přístupnost?"
relatedChapters: ["Vizuální design (barva, kompozice, typografie, metody vizuální prezentace informací)", "Přístupnost a nástroje", "UI komponenty (komponentový přístup k rozhraní)"]
---### 1) Co má feedback řešit
- Nejistotu: „Co se děje?“
- Kontrolu: „Co můžu udělat dál?“
- Prevenci chyb: zabránit opakovaným akcím, vysvětlit chyby.

### 2) Formy feedbacku a kdy je použít
- **Inline** (u pole/sekce):
  - validace, lokální chyba, nejvyšší relevance.
- **Banner/alert** (na stránce):
  - důležitá informace, která nesmí zmizet.
- **Toast** (dočasně):
  - nedestruktivní potvrzení, které neblokuje tok.
- **Dialog**:
  - vysoká závažnost, vyžaduje rozhodnutí (destruktivní akce, kritická chyba).

### 3) Proces platby (příklad)
- Po odeslání: **loading** stav (disabled CTA + spinner/progress + text „Zpracováváme…“).
- Úspěch: potvrzení + další kroky (doklad, návrat).
- Chyba: konkrétní sdělení + akce (zkusit znovu, jiná karta, kontakt).
- U vhodných situací preferovat **undo** místo přehnaného potvrzování.

### 4) Vizuální hierarchie a severity
- Závažnost musí být čitelná:
  - typografie, barva (s redundancí), ikona, umístění.
- Nepřehánět agresivní barvy u běžných informací.

### 5) Přístupnost
- Feedback nesmí být pouze vizuální.
- Chyby musí být asociované s konkrétním místem.
- Fokus u dialogů a klávesnicové ovládání.

### Shrnutí
Zpětná vazba je návrh „stavového rozhovoru“: **správná forma podle závažnosti + jasný další krok + přístupná komunikace stavu**.
