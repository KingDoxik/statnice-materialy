# Etika designu (etické standardy, udržitelnost, etika výzkumu, GDPR)

## Krátký úvod (co a proč)
Etika v UX řeší, **jak navrhovat produkty, které jsou pro uživatele férové, bezpečné a respektující soukromí**. V praxi často vyvažuje cíle byznysu, zákonné povinnosti a dopad na lidi.

## Cíle učení
- Umět popsat základní etické principy a typické konflikty (uživatel vs byznys).
- Rozpoznat manipulativní praktiky (dark patterns) a navrhnout etičtější alternativy.
- Zvládnout etiku výzkumu (souhlas, citlivá data, zranitelné skupiny).
- Chápat GDPR v kontextu UX (privacy-by-design, minimalizace dat, transparentnost).

## Klíčové pojmy (glosář)
- **Autonomie**: uživatel má kontrolu a rozumí důsledkům.
- **Neškodit (non-maleficence)**: minimalizace rizik a škod.
- **Spravedlnost (justice/fairness)**: nediskriminace, dostupnost, férovost.
- **Transparentnost**: jasná komunikace, srozumitelná pravidla.
- **Dark patterns**: návrh, který uživatele tlačí proti jeho zájmům.
- **Privacy-by-design**: ochrana soukromí zabudovaná do návrhu od začátku.
- **Value Sensitive Design (VSD)**: přístup, který systematicky zohledňuje lidské hodnoty v návrhu.
- **Contextual integrity**: soukromí jako „správnost“ toků informací v daném kontextu (ne jen utajení).
- **DPIA** (Data Protection Impact Assessment): posouzení vlivu na ochranu osobních údajů u rizikového zpracování.
- **LINDDUN**: rámec pro threat modeling zaměřený na soukromí.

## Klíčové modely a autoři
- **Belmont Report (1979)**: respekt k osobám (souhlas), beneficence (minimalizace škod), justice (férovost) – silně relevantní pro etiku výzkumu.
- **Value Sensitive Design (Friedman, Kahn, Borning)**: systematické zohlednění hodnot (soukromí, autonomie, férovost) v návrhu.
- **Contextual Integrity (Helen Nissenbaum)**: soukromí jako vhodnost toků informací v kontextu (ne jen „utajení“).
- **Privacy by Design (Ann Cavoukian)**: privacy-by-design/by-default jako princip návrhu.
- **Dark patterns**: Brignull + novější taxonomie (Gray a kol.) – popis a klasifikace manipulativních vzorců.

## Studijní poznámky
### 1) Základní etické principy v UX (prakticky)
V UX se často točíme kolem těchto principů:
- **Neškodit**: minimalizovat rizika (finanční, psychická, bezpečnostní).
- **Autonomie**: uživatel rozumí, co se děje, a má reálnou volbu.
- **Spravedlnost/férovost**: nediskriminovat, nezneužívat asymetrii informací.
- **Transparentnost**: jasná komunikace, čitelné podmínky, srozumitelné důsledky.
- **Odpovědnost**: umět obhájit rozhodnutí a dopady (accountability).

Typický konflikt:
- **Byznys cíle** (růst, konverze) vs **uživatelský zájem** (kontrola, soukromí, klid).

#### 1.1) Rychlá mapa etických teorií (aby ses neztratil v pojmech)
Pro zkoušku se hodí umět vysvětlit „odkud se bere“ etický argument:
- **Deontologie (povinnosti/práva)**: některé věci se nedělají „i kdyby to fungovalo“ (např. klamání v souhlasu).
- **Utilitarismus (důsledky)**: hodnotí se celkový užitek a škody (např. notifikace vs well-being).
- **Etika ctností / care ethics**: důraz na vztahy, důvěru, zranitelné skupiny.

#### 1.2) Value Sensitive Design (VSD) v praxi
VSD typicky kombinuje 3 typy „šetření“:
- **konceptuální**: jaké hodnoty jsou ve hře (autonomie, soukromí, důvěra, férovost) a kdo jsou stakeholders,
- **empirické**: jak to vnímají uživatelé (výzkum, testy, kvalita informovanosti),
- **technické**: jaké mechaniky systému hodnoty podporují nebo narušují (defaulty, oprávnění, logování, retence).

Praktický výstup VSD je často „trade-off“ argumentace: co chráním, co obětuju, jak minimalizuju škody a jak dávám uživateli kontrolu.

### 2) Persuaze vs manipulace
- **Persuaze**: pomáhá uživateli k cíli, který je i v jeho zájmu (např. připomenutí nedokončené objednávky).
- **Manipulace**: tlačí uživatele proti jeho zájmům (např. skrytý souhlas, záměrně matoucí volby).

Rychlý test:
- Kdyby byl uživatel plně informovaný a měl čas, udělal by to samé?
- Může rozhodnutí snadno vzít zpět (undo, snadné zrušení)?
Pozn.: v praxi často manipulace využívá limity pozornosti a rozhodování (viz `human-computer-interaction.md`) a oslabuje pocit kontroly (LoC; viz `designove-principy-psychologicky-vyzkum.md`).

### 3) Dark patterns (typy) a etičtější alternativy
Časté kategorie:
- **Obstruction (překážky)**: zrušit předplatné jde složitěji než ho založit.
- **Sneaking (podstrčení)**: předzaškrtnuté volby, přidané položky v košíku.
- **Interface interference**: vizuální zvýhodnění jedné volby, matoucí wording.
- **Forced action**: „nejde pokračovat bez souhlasu s marketingem“.
- **Nagging**: opakované nátlakové výzvy (pop-upy, modály).
- **Scarcity / urgency**: nepravdivé „poslední kusy“, odpočty.

Etické alternativy („good patterns“):
- Symetrie: zrušit/odhlásit stejně snadno jako přihlásit.
- Jasné volby: „Souhlasím / Nesouhlasím“ se stejnou váhou.
- Pravdivost: žádné falešné urgence; transparentní důvody a dopady.
- Kontrola: snadná změna nastavení, audit trail, přístup k datům.

#### 3.1) Nudge vs sludge (a proč je to relevantní)
- **Nudge**: „postrčení“ k volbě, která je v zájmu uživatele, bez odebrání možnosti volbu odmítnout (např. bezpečné defaulty, jasné vysvětlení).
- **Sludge**: umělé tření a překážky (např. odhlášení newsletteru přes 5 kroků, skryté odmítnutí cookies).

Dobré zkouškové kritérium: je možné volbu snadno odmítnout, pochopit důsledky a vrátit zpět?

## Rychlé srovnávací tabulky
| Oblast | Neférový / rizikový vzor | Etická alternativa |
|---|---|---|
| Souhlas (marketing/cookies) | předzaškrtnuté, „odmítnout“ schované | symetrie tlačítek, nepředzaškrtnuté, snadná změna |
| Zrušení služby | více kroků, přes support, guilt-tripping | stejná snadnost jako založení, jasné důsledky, potvrzení |
| Urgence/scarcity | falešné odpočty, „poslední kusy“ bez pravdy | pravdivé informace, vysvětlení, bez nátlaku |

### 4) Udržitelnost v designu (pragmaticky)
Udržitelnost (sustainability) v digitálu se nejčastěji projeví jako:
- **Datová a energetická efektivita**: velikost stránek, obrázků, video autoplay.
- **Dlouhodobá použitelnost**: aktualizace bez rozbití přístupnosti, podpora starších zařízení.
- **Omezení „nekonečných“ stimulů**: notifikace, doomscrolling (dopad na well-being).

Praktické zásady:
- Preferuj lehké formáty, lazy-loading, rozumné animace.
- Defaulty nastavuj tak, aby šetřily zdroje i pozornost (např. vypnuté autoplay).

### 5) Etika uživatelského výzkumu
Zásady:
- **Informovaný souhlas**: kdo, proč, co se sbírá, jak dlouho, jak bude použito.
- **Minimalizace dat**: sbírat jen to, co skutečně potřebuješ.
- **Citlivá data**: zdraví, finance, děti… vyšší opatrnost; často anonymizace/pseudonymizace.
- **Zranitelné skupiny**: extra ochrana, vhodné odměny, bezpečné prostředí.
- **Bezpečné zacházení s daty**: přístupová práva, šifrování, retention, mazání.
- **Deception** (klamání): pouze výjimečně a s odůvodněním; ideálně debrief.

#### 5.1) Belmont Report (výzkumná etika) jako „tvrdý“ rámec
Belmont (1979) se často používá jako základ:
- **Respect for persons**: informovaný souhlas, možnost kdykoliv odejít.
- **Beneficence**: minimalizace rizik, bezpečné prostředí.
- **Justice**: férový výběr účastníků (nezneužívat zranitelné).

Praktický IRB-like checklist pro UX výzkum:
- Má účastník jasně: účel, průběh, rizika, odměnu, práci s daty a kontakt?
- Je záznam (audio/video) volitelný a popsaný?
- Je definovaná retence, přístupy a způsob anonymizace?
- Je připravený debrief, pokud byl použit deception?

### 6) GDPR pro UX: co musí UX designer v praxi vědět
GDPR není jen právní text; v UX se projeví jako požadavek na:
- **Transparentnost**: jasné informace o zpracování.
- **Právní základ (lawful basis)**: typicky smlouva, oprávněný zájem, souhlas.
- **Minimalizaci**: sbírat a zobrazovat jen nutné.
- **Omezení účelu**: data nepoužít „na něco jiného“ bez důvodu.
- **Retention**: jak dlouho data držíme a proč.
- **Práva subjektu**: přístup, oprava, výmaz, přenositelnost, námitka.
- **Privacy-by-design/by-default**: nejvíc soukromí jako default, ne jako volitelný doplněk.

#### 6.1) GDPR principy (článek 5) – co si odnést do návrhu
Prakticky se hodí umět vyjmenovat principy a říct, co znamenají v UI:
- **lawfulness, fairness, transparency** → srozumitelná komunikace a férové volby,
- **purpose limitation** → nepoužít data „na něco jiného“ bez důvodu,
- **data minimisation** → sbírat jen nutné,
- **accuracy** → možnost opravy, aktuálnost,
- **storage limitation** → retence, mazání,
- **integrity & confidentiality** → bezpečnost, přístupy,
- **accountability** → umět doložit, proč a jak se zpracovává.

#### 6.2) Privacy threat modeling (LINDDUN) + kdy řešit DPIA
Pro „systematičnost“ je užitečné znát aspoň zkratku LINDDUN:
- **L**inkability, **I**dentifiability, **N**on-repudiation, **D**etectability, **D**isclosure of information, **U**nawareness, **N**on-compliance.

Použití: projdi tok dat (sběr → uložení → sdílení → retence) a ptej se, které hrozby vznikají a jak je mitigovat (minimalizace, pseudonymizace, access control, transparentnost, opt-out).

**DPIA** se typicky dělá, když zpracování pravděpodobně vede k vysokému riziku pro práva a svobody (např. rozsáhlé profilování, citlivá data, systematické monitorování).

#### 6.3) Férovost a bias (základy pro UX)
Férovost není jen „AI téma“. Bias vzniká i v UX:
- **výběrový bias**: testuju na „snadno dostupných“ lidech → špatné závěry,
- **měřicí bias**: metrika (např. konverze) ignoruje škody (stížnosti, churn, well-being),
- **interface bias**: wording a vizuální váha tlačí některé skupiny k horším výsledkům.

Praktiky zmírnění:
- testování s diverzitou účastníků, accessible design, férové defaulty,
- audit rozhodovacích bodů (kde UI „tlačí“), transparentní vysvětlení důsledků.

#### GDPR checklist (UX)
- **Formuláře**:
  - Každé pole má jasný účel; povinné jen nutné.
  - Marketingový souhlas je oddělený, nepředzaškrtnutý, srozumitelný.
  - Odkaz na zásady zpracování je dostupný v kontextu (ne schovaný).
- **Cookies/analytics**:
  - Volby jsou férové (odmítnout ≈ přijmout).
  - Uživatel může nastavení kdykoliv změnit.
- **Nastavení účtu**:
  - Export dat a smazání účtu je dohledatelné a pochopitelné.
  - U výmazu jasně popsat důsledky (co se smaže / co musí zůstat ze zákona).
- **Komunikace**:
  - „Lidský“ jazyk, minimum právničtiny; vysvětlení dopadů.

## Příklady / mini-case
### Mini-case 1: Cookie lišta (férový vs neférový design)
Neférově: „Přijmout vše“ velké, „Odmítnout“ schované v nastavení, 3 kliky.  
Férově: „Přijmout“ a „Odmítnout“ stejně viditelné, stručné vysvětlení, možnost detailů.

### Mini-case 2: Zrušení předplatného
Neférově: zrušení přes support, „neviditelné“ tlačítko, guilt-tripping texty.  
Férově: zrušení v nastavení, potvrzení důsledků, možnost pauzy, okamžité potvrzení.

### Mini-case 3: Uživatelský výzkum se záznamem
Eticky: předem vysvětlit záznam, kdo ho uvidí, jak dlouho se drží; nabídnout „bez záznamu“ variantu; bezpečně uložit a smazat dle retention.

## Záměny pojmů / časté chyby a jak jim předejít
- **Zaměnění „legal compliance“ za etiku**: něco může být legální, ale pořád neférové.
- **„Souhlas“ jako donucení**: souhlas musí být svobodný; odděluj ho od nezbytných funkcí.
- **Přehnané sbírání dat** („kdyby se hodilo“) → minimalizovat a zdůvodnit.
- **Etika výzkumu až na konci**: řešit před náborem a před sběrem dat.
- **Udržitelnost jen jako marketing**: skutečné změny jsou často v default nastaveních a technických volbách (autoplay, velikost).

## Typické zkouškové otázky (otázky k opakování)
1. Jaké jsou základní etické principy v UX a jak se projeví v návrhu?
2. Kdy je persuaze ještě v pořádku a kdy už je manipulace? Uveď příklad.
3. Vyjmenuj 3 typy dark patterns a navrhni etickou alternativu.
4. Proč je „symetrie“ (stejně snadné přihlásit i odhlásit) eticky důležitá?
5. Co znamená privacy-by-design a jak se projeví v UI?
6. Jaké jsou klíčové zásady etiky uživatelského výzkumu?
7. Co musí obsahovat informovaný souhlas pro UX výzkum?
8. Jaké jsou základní principy GDPR (aspoň 4) a co z nich plyne pro formuláře?
9. Jak by mělo vypadat férové cookie/analytics nastavení?
10. Uveď 2 praktické způsoby, jak může UX přispět k udržitelnosti digitálního produktu.
11. Co je Value Sensitive Design a jak bys ho použil na příkladu cookie lišty?
12. Vyjmenuj principy GDPR (čl. 5) a ukaž, jak se projeví ve formuláři.
13. Co znamená LINDDUN a k čemu se používá (aspoň 2 hrozby + mitigace)?
14. Popiš Belmont principy a uveď 1 riziko ve výzkumu + jak ho minimalizovat.

## Doporučená literatura / odkazy
- Norman, D. (2013). *The Design of Everyday Things.* (odpovědnost designu, chyby, kontrola)
- Midal, A. (2019). *Design by Accident.* (historický a společenský kontext designu)
- ISO 9241-210 (human-centred design) + GDPR text (principy, práva subjektu)
- Doporučení k doplnění (volitelné): literatura k dark patterns (Harry Brignull; výzkum katalogizace dark patterns)
- Friedman, B., Kahn, P. H., Borning, A. (VSD) – přehledové texty k Value Sensitive Design
- Nissenbaum, H. (2010). *Privacy in Context.* (contextual integrity)

**Vazby na další kapitoly**: `human-computer-interaction.md`, `designove-principy-psychologicky-vyzkum.md`, `historie-designu.md`
