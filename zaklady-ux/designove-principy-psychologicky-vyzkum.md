# Designové principy založené na psychologickém výzkumu (Locus of Control, minimalistický design, estetika, použitelnost)

## Krátký úvod (co a proč)
Psychologický výzkum pomáhá převést „intuici“ v designu na **ověřené principy**. V UX jde často o práci s tím, jak lidé vnímají, rozhodují se, dělají chyby a jaký mají pocit kontroly.

## Cíle učení
- Vysvětlit Locus of Control a jeho dopady na UX (kontrola, predikovatelnost, možnost opravy).
- Rozlišit minimalistický design jako prostředek (nižší zátěž) vs „ochuzení“ informací.
- Popsat vztah estetiky a použitelnosti (aesthetic-usability effect) a limity.
- Umět aplikovat vybrané psych principy (Gestalt, kognitivní zátěž, rozpoznání vs vybavení, konzistence).

## Klíčové pojmy (glosář)
- **Locus of Control (LoC)**: míra, do jaké člověk vnímá, že má kontrolu nad výsledkem.
- **Minimalismus**: redukce šumu a nadbytečností při zachování srozumitelnosti.
- **Aesthetic-usability effect**: estetické rozhraní je často vnímáno jako „použitelnější“.
- **Gestalt principy**: seskupování a vnímání celků (blízkost, podobnost, uzavřenost…).
- **Rozpoznání vs vybavení (recognition vs recall)**: snadnější je poznat než si vybavit.
- **Heuristika**: mentální „zkratka“ v rozhodování; rychlá, ale může vést ke zkreslení.
- **Framing (rámování)**: způsob prezentace stejné volby mění rozhodnutí.
- **Default effect**: lidé často ponechají výchozí volbu (status quo).
- **Nudge vs sludge**: „postrčení“ k prospěšné volbě vs umělé tření, které brání odchodu/odmítnutí.

## Klíčové modely a autoři
- **Julian B. Rotter**: Locus of Control (psychologický konstrukt; UX dopady skrze kontrolu a predikovatelnost).
- **Daniel Kahneman / Amos Tversky**: heuristiky a zkreslení, rozhodování v nejistotě (prospect theory).
- **John Sweller**: cognitive load theory (kognitivní zátěž a učení).
- **Donald Norman**: signifiers, mentální modely, emocionalita v designu (a dopad na vnímání použitelnosti).
- **Gestalt psychologie** (Wertheimer/Köhler/Koffka): principy seskupování ve vnímání.
- **B. J. Fogg**: model změny chování (Behavior Model).
- **Susan Michie a kol.**: rámec COM-B (Capability, Opportunity, Motivation → Behavior).

## Studijní poznámky
### 1) Locus of Control (LoC): pocit kontroly nad výsledkem
**LoC** popisuje, zda člověk vnímá, že výsledky jsou převážně:
- **Interní**: „mám to ve svých rukou“ (moje volby vedou k výsledku),
- **Externí**: „děje se to náhodně / systém je proti mně“.

V UX nejde o „diagnózu“ osobnosti, ale o to, že rozhraní může:
- posilovat **kompetenci a předvídatelnost**,
- nebo vyvolávat **bezmoc** (learned helplessness) skrze nejasné chování a nemožnost opravy.

**Návrhové důsledky (posiluj interní LoC)**:
- **Predikovatelnost**: konvence, konzistence, jasné pojmenování akcí.
- **Vysvětlení příčin**: když se něco stane, uživatel ví proč („Proč to nejde odeslat?“).
- **Možnost opravy**: undo, vratné kroky, editace, historie.
- **Kontrola nad daty**: export/smazání, nastavení soukromí, přehled oprávnění.
- **Kontrola nad tokem**: možnost uložit a pokračovat později, progress, návrat zpět.

**Co interní LoC oslabuje**:
- nepředvídatelné automatické změny („systém mi to přepsal“),
- nečitelná pravidla (skryté limity, tiché validace),
- chybové hlášky bez návodu,
- nevratné akce bez varování.

### 2) Minimalistický design: snížení šumu, ne snížení srozumitelnosti
Minimalismus v UX je hlavně o:
- **redukování zbytečných podnětů**,
- posílení **hierarchie**,
- snížení **kognitivní zátěže**.

Pozor: minimalistická estetika (hodně whitespace, jemné linky) ≠ minimalistická interakce.

**Návrhové důsledky (dělej)**:
- Prioritizuj: 1 primární cíl obrazovky, zbytek sekundárně.
- Používej **progressive disclosure (postupné odhalování)**: základ hned, detaily na vyžádání.
- Udržuj konzistentní vizuální systém (typografie, spacing, komponenty).
- Přidej „signifiers“ i v čistém designu (hover, podtržení, ikonky s textem).

**Nedělej**:
- Neschovávej kritické funkce jen kvůli „čistotě“ (discoverability klesá).
- Nepoužívej ikonky bez popisků tam, kde nejsou univerzálně srozumitelné.
- Nezjednodušuj texty tak, že ztratí význam (právní/bezpečnostní dopady).

### 3) Estetika a použitelnost: aesthetic-usability effect (a jeho limity)
Lidé často vnímají hezčí rozhraní jako:
- důvěryhodnější,
- „snazší“,
- profesionálnější.

To může krátkodobě zlepšit toleranci k drobným problémům, ale:
- **nezachrání** špatnou IA, nejasné toky ani chybějící feedback,
- může vytvořit falešné sebevědomí týmu („vypadá to dobře, takže to funguje“).

**Praktické důsledky**:
- Estetika podporuje **processing fluency** (snadné zpracování) → méně stresu.
- Důvěra je část UX (zejména u financí, zdravotnictví, státní správy).
- Vždy validuj použitelnost testem – i když je UI krásné.

### 4) Gestalt principy (rychlé připomenutí pro UI)
- **Blízkost**: prvky u sebe = patří k sobě (skupiny ve formuláři).
- **Podobnost**: stejné vizuály = stejná funkce (konzistence tlačítek).
- **Figura–pozadí**: jasné oddělení důležitého od méně důležitého.
- **Uzavřenost**: mozek doplňuje tvary → opatrně s „příliš jemnými“ hranicemi.

### 5) Kognitivní zátěž (cognitive load): kdy už je toho moc
Signály přetížení:
- uživatel častěji chybuje,
- zastavuje se („co teď?“),
- přeskakuje podstatné informace.

Snižování zátěže:
- chunking (seskupování), jasná hierarchie,
- méně rozhodnutí najednou (viz Hick–Hyman v `human-computer-interaction.md`),
- předvyplnění a smart defaults (eticky, transparentně),
- průběžné shrnutí (např. objednávka).

### 6) Rozpoznání vs vybavení (recognition vs recall)
Pro UX je typicky lepší:
- nabídnout seznam, autocomplete, šablony,
než:
- nutit pamatovat si kódy, názvy, syntaxi.

Výjimky: expertní nástroje (kde rychlost a zkratky dávají smysl), ale i tam je dobrá nápověda.

### 7) Konzistence (consistency): snižuje učení i chyby
Konzistence má úrovně:
- **v rámci obrazovky** (tlačítka, labely),
- **napříč produktem** (stejný pattern pro stejné úkoly),
- **napříč platformou** (konvence iOS/Android/Web).

Konzistence podporuje:
- rychlejší učení,
- vyšší pocit kontroly (LoC),
- méně chyb.

### 8) Heuristiky a kognitivní zkreslení: proč lidé volí „nelogicky“
V praxi UX se rozhodování často řídí rychlým režimem (Kahneman: „System 1“) – rychlé, intuitivní, úsporné. To je výhodné, ale vede ke zkreslením, která design může **zesílit** nebo **zmírnit**.

Častá zkreslení (a co z toho plyne pro UI):
- **Default effect / status quo bias**: lidé nechají výchozí volbu.
  - **Důsledek**: výchozí nastavení je extrémně silné → musí být obhajitelné (viz `etika-designu.md`).
- **Framing effect**: „90 % úspěšnost“ vs „10 % neúspěch“.
  - **Důsledek**: důležité volby (zdraví/finance) rámuj transparentně; doplň kontext a srovnání.
- **Loss aversion** (averze ke ztrátě): ztráty bolí víc než stejně velké zisky.
  - **Důsledek**: copy typu „Přijdeš o…“ je silné → snadno sklouzne do manipulace (guilt-tripping).
- **Anchoring**: první číslo/varianta ukotví vnímání.
  - **Důsledek**: pořadí plánů a „původní cena“ výrazně ovlivní volbu.
- **Availability**: lidé přeceňují snadno vybavitelné příklady.
  - **Důsledek**: výrazné incidenty (např. bezpečnost) mění důvěru; komunikuj rizika srozumitelně.
- **Social proof**: „ostatní to dělají“.
  - **Důsledek**: recenze a počty uživatelů jsou přesvědčivé – musí být pravdivé a auditovatelné.
- **Scarcity/urgency**: nedostatek a časový tlak.
  - **Důsledek**: používat jen, když je to pravda; jinak typický dark pattern.

### 9) Rozhodování v nejistotě: prospect theory (zkratka)
Tversky a Kahneman ukázali, že lidé posuzují volby relativně k „referenčnímu bodu“ a reagují asymetricky na zisky vs ztráty.

Prakticky v UX:
- „Ztráta“ (např. zrušení benefitu) vyvolá silnější reakci než stejně velký „zisk“.
- Malé pravděpodobnosti se často přeceňují (důležité u rizik, pojištění, bezpečnosti).

**Návrhový důsledek**: u rizikových/cenových rozhodnutí doplň jasné srovnání a vyhni se nátlakovému rámování.

### 10) Mentální model vs konceptuální model (Norman)
- **Mentální model**: představa uživatele „jak to funguje“ (často neúplná).
- **Konceptuální model**: model, který „komunikuje“ systém skrze UI (pojmy, struktura, stavy, pravidla).

Pokud jsou modely v rozporu, roste chybovost (mistakes) a klesá pocit kontroly (LoC).

Designové strategie:
- používej pojmy z domény uživatele (ne interní),
- dělej pravidla systému viditelná (limity, stavy),
- používej konzistentní mapping a signifiers (viz `human-computer-interaction.md`).

### 11) Změna chování: Fogg, COM-B a etická hranice
Behaviorální rámce se používají pro onboarding, návyky a adherence.
- **Fogg Behavior Model**: chování nastane, když je současně **motivace**, **schopnost** (ability) a **spouštěč** (prompt).
- **COM-B**: chování = **capability** (dovednost), **opportunity** (prostředí), **motivation** (vnitřní/vnější) → často se používá pro systematické návrhy intervencí.

**Etická poznámka**: stejné mechanismy umí pomoci (např. zdraví), ale i škodit (nátlak, závislost). Uvažuj „kdo profituje“ a jestli je možné volbu snadno odmítnout/vrátit (viz `etika-designu.md`).

### Mini-tabulka: princip → dělej / nedělej
| Princip | Dělej | Nedělej |
|---|---|---|
| LoC | undo, vysvětlení pravidel, predikovatelnost | tiché změny, nevratné akce bez varování |
| Minimalismus | hierarchie, progressive disclosure, signifiers | schovávání funkcí kvůli „čistotě“ |
| Estetika×použitelnost | důvěryhodný vizuál + testování | spoléhat na vzhled jako důkaz použitelnosti |
| Gestalt | seskupování, konzistentní styly | náhodné rozestupy a „stejné věci jinak“ |

## Rychlé srovnávací tabulky
| Koncept | Co je častá záměna | Jak to poznat v UI |
|---|---|---|
| Minimalistická estetika vs interakce | „vypadá čistě“ ≠ „je to jednoduché použít“ | chybí labely, signifiers, nápověda → tápání |
| Kontrola vs přetížení volbami | víc nastavení ≠ víc kontroly | paradox volby, nárůst chyb; lepší defaulty + advanced |
| Důvěra vs „hezky“ | hezké ≠ bezpečné/transparentní | skryté poplatky, nejasné důsledky → etický problém |

## Příklady / mini-case
### Mini-case 1: LoC a „undo“
Uživatel omylem smaže položku.
- Slabý LoC: „Smazáno.“ bez možnosti návratu.
- Silný LoC: toast „Smazáno“ + **Zpět (Undo)** + případně koš s obnovou.

### Mini-case 2: Minimalismus vs discoverability
Ikonky bez textu vypadají čistě, ale noví uživatelé tápou.
- Řešení: ikonka + text, nebo aspoň tooltip a konzistentní umístění; pro kritické akce vždy text.

### Mini-case 3: Estetika a důvěra u platby
Hezky zpracovaný checkout (jasná typografie, přehledné shrnutí, bezpečnostní signály) zvyšuje důvěru. Pokud ale chybí transparentnost cen (skryté poplatky), eticky i UXově to selže.

## Záměny pojmů / časté chyby a jak jim předejít
- **Přehnaný minimalismus**: odstranění labelů, hintů a signifiers → doplnit hierarchii a vodítka.
- **Příliš mnoho nastavení** ve jménu „kontroly“: paradox volby → dobré defaulty + pokročilé nastavení skryté.
- **Nejasná pravidla systému** (limity, podmínky): komunikovat předem, validovat průběžně.
- **Záměna estetiky za kvalitu**: hezké UI bez použitelnosti → testovat, měřit chybovost a čas.
- **Nekonzistentní komponenty**: stejné věci vypadají jinak → zavést design systém a review.

## Typické zkouškové otázky (otázky k opakování)
1. Co je Locus of Control a jak ho může UI posilovat nebo oslabovat?
2. Uveď 3 konkrétní návrhové prvky, které zvyšují pocit kontroly (LoC).
3. Vysvětli rozdíl mezi minimalistickou estetikou a minimalistickou interakcí.
4. Kdy minimalismus zhorší UX? Uveď příklad a opravu.
5. Co je aesthetic-usability effect a jaké má limity v praxi?
6. Vyjmenuj 2 Gestalt principy a ukaž, jak se projeví ve formuláři.
7. Proč je rozpoznání typicky lepší než vybavení? Kdy může být výjimka?
8. Jak konzistence souvisí s rychlostí učení a chybovostí?
9. Jak bys snížil kognitivní zátěž u složitého checkoutu?
10. Vysvětli default effect a uveď příklad etického vs neetického použití.
11. Co je framing effect a proč je rizikový u finančních/zdravotních rozhodnutí?
12. Vysvětli rozdíl mezi mentálním a konceptuálním modelem (Norman) na příkladu.
13. Popiš Fogg Behavior Model nebo COM-B a ukaž, jak bys ho použil v onboardingu.

## Doporučená literatura / odkazy
- Norman, D. (2013). *The Design of Everyday Things.* (kontrola, chyby, signifiers/feedback)
- Kahneman, D. (2011). *Thinking, Fast and Slow.* (heuristiky, rozhodování; užitečné pro kontext)
- Tversky, A., Kahneman, D. (1979). *Prospect Theory: An Analysis of Decision under Risk.* (základní článek)
- Thaler, R. H., Sunstein, C. R. (2008). *Nudge.* (postrčení vs etika volby)
- Doporučení k doplnění (volitelné): literatura k Gestalt a kognitivní zátěži; praktické UX principy (Nielsen heuristics)

**Vazby na další kapitoly**: `human-computer-interaction.md` (kognitivní základy), `etika-designu.md` (férovost, kontrola, manipulace), `historie-designu.md` (vývoj minimalismu a systémovosti)
