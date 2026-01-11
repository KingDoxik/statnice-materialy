# Human-Computer Interaction (východiska z kognitivní psychologie)

## Krátký úvod (co a proč)
HCI (Human-Computer Interaction) zkoumá, **jak lidé vnímají, chápou a ovládají** interaktivní systémy. V UX je klíčové převést poznatky z kognitivní psychologie do návrhu rozhraní, aby bylo **srozumitelné, efektivní a odolné vůči chybám**.

## Cíle učení
- Vysvětlit základní kognitivní procesy relevantní pro UX (pozornost, paměť, učení, rozhodování).
- Umět aplikovat vybrané „zákony“ a principy (Fitts, Hick–Hyman, zpětná vazba, prevence chyb).
- Umět odvodit návrhové důsledky pro UI (hierarchie, texty, formuláře, navigace).

## Klíčové pojmy (glosář)
- **Pozornost (attention)**: omezená kapacita; přepínání je nákladné.
- **Pracovní paměť (working memory)**: drží málo položek; zátěž roste s komplexitou.
- **Mentální model (mental model)**: jak si uživatel vysvětluje fungování systému.
- **Affordance / signifier**: co lze udělat (a jak to rozhraní naznačí).
- **Zpětná vazba (feedback)**: potvrzení akce a stavu systému.
- **Kognitivní zátěž (cognitive load)**: nároky na pozornost a paměť při interakci.

## Klíčové modely a autoři
- **Don Norman**: mentální a konceptuální modely, „gulfs“, chyby a zotavení (error & recovery).
- **Card, Moran, Newell (HCI)**: modelování výkonu (MHP, GOMS/KLM).
- **Jakob Nielsen / Ben Shneiderman**: heuristiky a pravidla použitelnosti (praktická pravidla návrhu).
- **ISO 9241-11 / ISO 9241-210**: definice použitelnosti a rámec human-centred design.

## Studijní poznámky
### 1) Člověk jako „informační procesor“ (zjednodušený model)
Pro UX je užitečné uvažovat o řetězci:
- **Vstup** (vnímání) → **zpracování** (pozornost, interpretace, rozhodnutí) → **výstup** (akce) → **zpětná vazba**.

Klíčové: lidé nejsou „racionální stroje“ – mají omezenou kapacitu, dělají chyby a spoléhají na zkratky (heuristics).

### 1.1) Použitelnost: definice a měření (ISO 9241-11)
V HCI je užitečné držet se „tvrdších“ definic:
- **Použitelnost (usability)** = míra, do jaké specifikovaní uživatelé dosáhnou specifikovaných cílů s:
  - **účinností (effectiveness)**: přesnost a úplnost dosažení cíle,
  - **efektivitou (efficiency)**: vynaložené zdroje (čas, kroky, kognitivní námaha),
  - **spokojeností (satisfaction)**,
  v daném **kontextu použití**.

Praktické metriky (typicky u zkoušky stačí umět vyjmenovat a uvést příklad):
- **Task success rate**, **time on task**, **error rate** (a závažnost), **SUS** (System Usability Scale), **SEQ** (Single Ease Question), **UMUX-Lite**, **NASA-TLX** (zátěž).

Pozn.: UX je širší než usability; usability je „podmnožina“ (výkon + kontext), UX zahrnuje i emoce, očekávání a dlouhodobý vztah (viz i `designove-principy-psychologicky-vyzkum.md`).

### 1.2) Norman: cyklus akce a „gulfs“
Don Norman popisuje interakci jako **cyklus akce** (často 7 kroků):
1) vytvoření cíle, 2) záměr, 3) specifikace akce, 4) provedení, 5) vnímání stavu, 6) interpretace, 7) vyhodnocení.

Klíčové „mezery“:
- **Gulf of execution**: uživatel neví *co* udělat (chybí signifiers, mapping, jasná akce).
- **Gulf of evaluation**: uživatel neví *co se stalo / zda to dopadlo dobře* (chybí feedback, stav, vysvětlení).

**Návrhový důsledek**: zmenšuj obě mezery pomocí signifiers, konzistence, dobrého mappingu a rychlé/čitelně interpretovatelné zpětné vazby.

### 1.3) Modelování výkonu: MHP, GOMS a KLM (Card–Moran–Newell)
HCI má i „inženýrské“ modely predikce výkonu (typicky pro srovnání variant UI):
- **Model Human Processor (MHP)**: člověk jako percepční + kognitivní + motorický procesor se zpožděními.
- **GOMS**: cíle (Goals), operátory (Operators), metody (Methods), výběrová pravidla (Selection rules).
- **Keystroke-Level Model (KLM)**: zjednodušený GOMS pro expertní uživatele; odhaduje čas úkolu jako součet primitiv (stisk, point, homing, mental preparation…).

Kdy se to hodí:
- když máš dvě varianty stejného tasku a chceš rychle odhadnout, která bude rychlejší pro experta,
- pro argumentaci návrhu (např. klávesové zkratky, bulk akce).

Limity:
- neřeší emoce, učení, chyby začátečníků ani špatnou informační architekturu.

### 2) Vnímání (perception): co uživatel skutečně „vidí“
- **Kontrast a čitelnost**: bez dostatečného kontrastu nefunguje ani sebelepší IA.
- **Gestalt principy** (blízkost, podobnost, uzavřenost): mozek automaticky seskupuje.
- **Pre-attentive znaky**: barva/velikost/tvar „vyletí“ i bez vědomé pozornosti.

**Návrhové důsledky**:
- Seskupuj související prvky (formulářové sekce), odděluj nesouvisející.
- Primární akce musí být vizuálně jednoznačná (ne „kde je vlastně CTA“).

### 3) Pozornost (attention): je omezená a drahá
- **Selektivní pozornost**: uživatel ignoruje většinu podnětů.
- **Přepínání kontextu** (task switching) je nákladné a chybové.

**Návrhové důsledky**:
- Nenuť uživatele přeskakovat mezi obrazovkami jen kvůli jedné informaci.
- Notifikace a modály používej střídmě: jsou „daň“ na pozornost.

### 4) Paměť: rozpoznání je levnější než vybavení
- **Pracovní paměť (working memory)**: velmi omezená; přetížení = chyby.
- **Dlouhodobá paměť**: funguje přes schémata a asociace (uživatelské zvyky).
- Zásada: **recognition > recall** (poznat > vybavit si).

**Návrhové důsledky**:
- Preferuj výběr z možností (dropdown, autosuggest) před volným psaním.
- U složitých toků dej uživateli „opěrné body“: progress, shrnutí, návrat.

### 5) Mentální modely: uživatel si tvoří „teorii systému“
Uživatel nečte manuál; interakční model si odvozuje z:
- předchozí zkušenosti (konvence platformy),
- nápověd (signifiers),
- chování systému (feedback).

**Návrhové důsledky**:
- Dodržuj konvence platformy (iOS/Android/Web) pokud nemáš silný důvod.
- Pokud systém dělá něco „nečekaného“, musí to vysvětlit (proč a co dál).

### 6) Affordance, signifiers, mapping a feedback
- **Affordance**: co objekt umožňuje.
- **Signifier**: jak rozhraní naznačí, co je možné (např. podtržení odkazu).
- **Mapping**: vztah ovládání ↔ výsledek (např. posuvník hlasitosti).
- **Feedback**: potvrzení, že systém akci zaregistroval a co se stalo.

**Návrhové důsledky**:
- Klikatelné prvky musí „vypadat klikatelné“ (ne jen barevný text bez pravidla).
- Každá akce musí mít rychlou odezvu (i kdyby jen skeleton/loading state).

### 7) Rozhodování a volby: Hick–Hyman
Princip: čím více možností (a čím hůř jsou strukturované), tím déle trvá rozhodnutí.

**Návrhové důsledky**:
- Sniž počet konkurujících CTA v jednom kontextu.
- Strukturovej volby: skupiny, filtry, výchozí volby (ale pozor na etiku).
- Progressive disclosure (postupné odhalování): ukazuj „základ“, detaily na vyžádání.

### 8) Motorika a cílení: Fittsův zákon (intuitivně)
Rychlost zásahu cíle závisí na:
- **velikosti cíle** (větší = rychlejší),
- **vzdálenosti** (blíž = rychlejší).

**Návrhové důsledky**:
- Primární CTA dělej dostatečně velké, s pohodlnou aktivní plochou.
- Na mobilu respektuj palec (thumb zone) a nedávej kritické prvky do rohů bez důvodu.

### 9) Chyby: prevence a zotavení (recoverability)
Chyby jsou normální (překlepy, nepozornost, špatné odhady).

**Návrhové důsledky**:
- Prevence: validace, masky, dobré defaulty, jasné labely.
- Zotavení: **undo**, možnost opravy, jasné chybové hlášky „co a jak opravit“.

#### 9.1) Typy chyb (slips vs mistakes) a „mode errors“
Pro hlubší porozumění se často používá rozlišení:
- **Slip**: uživatel má správný cíl, ale provede špatnou akci (nepozornost, podobné prvky, špatné signifiers).
- **Mistake**: uživatel má špatný mentální model / zvolí špatný plán (nejasná pravidla systému, zavádějící pojmy).

Speciální problém jsou **mode errors**: stejná akce dělá něco jiného podle skrytého „módu“ (např. klávesa, která v jiném režimu smaže vs přepíše).

**Návrhové důsledky**:
- pro slips: zlepšit odlišitelnost, zpomalit destruktivní akce, potvrzení/undo,
- pro mistakes: vysvětlit pravidla, příklady, průběžná validace a srozumitelné chyby.

#### 9.2) Chybová hlášení: minimální struktura, která se učí dobře
Dobré error message typicky obsahuje:
- **co** se stalo (jasně),
- **proč** (pokud je to užitečné),
- **jak to opravit** (konkrétní krok),
- **co dál** (zotavení: retry, undo, kontakt).

### 10) Učení a expertíza
Začátečník potřebuje vedení, expert rychlost.

**Návrhové důsledky**:
- Přidej zkratky pro pokročilé (klávesové, bulk actions), ale ne na úkor srozumitelnosti.
- Konzistence napříč produktem = rychlejší učení.

### 11) Principy dialogu člověk–systém (ISO 9241-110) + heuristiky
V HCI se často očekává znalost „jmenovaných“ principů, které se používají při návrhu i evaluaci.

**ISO 9241-110 (dialogue principles)** – typicky se uvádí 7 zásad:
- **vhodnost pro úkol (suitability for the task)**
- **srozumitelnost systému (self-descriptiveness)**
- **ovladatelnost (controllability)**
- **soulad s očekáváním uživatele (conformity with user expectations)**
- **tolerance chyb (error tolerance)**
- **možnost individualizace (suitability for individualization)**
- **vhodnost pro učení (suitability for learning)**

**Nielsen (10 heuristik použitelnosti)** – užitečné jako „kontrolní seznam“:
- viditelnost stavu systému
- shoda se světem uživatele
- kontrola a svoboda
- konzistence a standardy
- prevence chyb
- rozpoznání místo vybavení
- flexibilita a efektivita
- estetika a minimalismus
- pomoc při chybách
- nápověda a dokumentace

**Shneiderman (Eight Golden Rules)** – podobný účel, jiná formulace:
- konzistence
- zkratky pro experty
- informativní feedback
- dialogy s jasným ukončením
- prevence chyb + jednoduché zotavení
- snadné vrácení akcí (undo)
- interní LoC (uživatel má kontrolu)
- snížení nároků na paměť

Pozn.: Tyto seznamy se překrývají; u zkoušky je často důležitější umět je **aplikovat na konkrétní UI** než je odříkat.

## Rychlé srovnávací tabulky
| Princip | Stručně | Typický důsledek pro UI |
|---|---|---|
| Fittsův zákon | velikost a vzdálenost cíle ovlivňuje čas zásahu | větší CTA, pohodlná „hit area“, mobilní thumb zone |
| Hick–Hyman | více možností → delší rozhodování | jedna primární akce, skupiny, progressive disclosure |
| Recognition > recall | poznat je snazší než si vybavit | nabídky, autocomplete, nápověda, historie |

## Příklady / mini-case
### Mini-case 1: Formulářová chyba bez recoverability
Špatně: „Něco se pokazilo.“ + smazaný formulář.  
Dobře: zvýraznit konkrétní pole, vysvětlit problém, zachovat data, nabídnout opravu (undo/„zkusit znovu“).

### Mini-case 2: Hick–Hyman v praxi (příliš mnoho CTA)
Produktová stránka s 5 stejně výraznými tlačítky („Koupit“, „Vyzkoušet“, „Kontakt“, „Ceník“, „Demo“) zvyšuje rozhodovací čas. Řešení: 1 primární CTA + sekundární odkazy + skupiny.

### Mini-case 3: Fitts na mobilu
„Odeslat“ jako malá ikonka vpravo nahoře vs velké tlačítko dole. Druhá varianta je rychlejší, méně chybová a dostupnější.

## Záměny pojmů / časté chyby a jak jim předejít
- **Přetížení obrazovky**: moc informací najednou → rozdělit, seskupit, progressive disclosure.
- **Slabý feedback**: uživatel neví, zda se něco děje → loading/success/error stavy.
- **„Kreativní“ porušení konvencí** bez přínosu → držet konvence, odchylky testovat.
- **Chybové hlášky bez návodu**: říct nejen „co“, ale i „jak to opravit“.
- **Mikrotexty bez ohledu na mental model**: používat slovník uživatelů, ne interní terminologii.

## Typické zkouškové otázky (otázky k opakování)
1. Co je mentální model a jak ho uživatel získává?
2. Vysvětli rozdíl mezi affordance a signifier a uveď příklad.
3. Proč je „rozpoznání“ v UI výhodnější než „vybavení“?
4. Jak se projeví přetížení pracovní paměti v UX a jak tomu předejít?
5. Kdy dává smysl progressive disclosure a jaké má riziko?
6. Popiš Hick–Hyman princip a dvě návrhové strategie, jak snížit rozhodovací zátěž.
7. Popiš Fittsův zákon intuitivně a aplikuj ho na mobilní CTA.
8. Jaké jsou dvě hlavní strategie práce s chybami (prevence vs zotavení) a příklady?
9. Proč je feedback klíčový i u „rychlých“ akcí?

## Doporučená literatura / odkazy
- Norman, D. (2013). *The Design of Everyday Things.* (mentální modely, chyby, feedback)
- Nielsen, J. (1994+). *Usability heuristics* (praktické zásady použitelnosti)
- Shneiderman, B. (Eight Golden Rules). (konzistence, feedback, prevence chyb)
- ISO 9241-210: Human-centred design for interactive systems (rámec UCD)

**Vazby na další kapitoly**: `designove-principy-psychologicky-vyzkum.md` (principy z psychologie), `etika-designu.md` (férové volby, manipulace), `historie-designu.md` (vývoj interakčního designu)
