---
title: "Typografie: hierarchie, čitelnost a technika"
subject: "Design uzivatelskych rozhrani"
subjectSlug: "07-design-uzivatelskych-rozhrani"
order: 6
question: "Jak byste navrhli typografii pro produkt, který obsahuje jak dlouhé čtení (např. nápověda), tak husté UI (tabulky, formuláře)? Vysvětlete rozdíl mezi legibility a readability a popište technické a přístupnostní aspekty digitální typografie."
relatedChapters: ["Vizuální design (barva, kompozice, typografie, metody vizuální prezentace informací)", "Přístupnost a nástroje", "Platformy (desktop, mobil - iOS, Android, tablet)"]
---### 1) Dva režimy typografie
- **Dlouhé čtení**: cílem je plynulost a komfort.
- **UI texty / data**: cílem je rychlé skenování, přesnost a konzistence.

### 2) Hierarchie a text styles
- Definujte konzistentní **text styles** (např. heading, body, label, meta).
- Hierarchie musí odpovídat IA: stejné role textu vypadají stejně napříč produktem.

### 3) Legibility vs readability
- **Legibility** = rozpoznatelnost znaků (čitelnost jednotlivých znaků/slov).
- **Readability** = čitelnost souvislého textu jako celku (rytmus, proklad, délka řádku).

### 4) Parametry pro dlouhé čtení
- přiměřená **délka řádku** (orientačně desítky znaků, typicky ~45–75),
- dostatečný **proklad (leading)**,
- stabilní zarovnání (často vlevo),
- kontrast a „neoslňující“ řešení v dark mode.

### 5) Parametry pro UI a tabulky
- konzistentní velikosti a váhy pro label/value,
- zarovnání čísel (často doprava),
- kompaktnost, ale bez ztráty čitelnosti,
- pozor na ellipsis – neskrýt klíčovou informaci bez alternativy.

### 6) Technické aspekty
- rendering se liší mezi platformami,
- webfonty mohou způsobit **FOIT/FOUT**,
- **fallback fonty** a metriky (aby se layout „nerozsypal“),
- variabilní fonty: výhody (méně souborů), ale testovat kompatibilitu.

### 7) Přístupnost typografie
- respektovat systémové zvětšení textu (např. Dynamic Type),
- návrh otestovat na „extrémech“ (velké písmo, zoom),
- nepoužívat extrémně tenké řezy pro klíčové texty,
- sémantická struktura (nadpisy) je stejně důležitá jako vizuální styl.

### Shrnutí
Typografie je infrastruktura hierarchie: kombinujte stylový systém (text styles), ergonomii čtení a technickou realitu platforem.
