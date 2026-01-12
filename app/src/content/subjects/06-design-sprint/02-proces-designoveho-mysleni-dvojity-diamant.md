---
title: "Proces designového myšlení na základě struktury dvojího diamantu"
subject: "Design sprint"
subjectSlug: "06-design-sprint"
order: 2
---
## Úvod

Proces designového myšlení lze chápat jako disciplinovaný způsob, jak pod nejistotou proměňovat nejasné potřeby lidí a organizací v ověřená řešení s měřitelnou hodnotou. V tomto textu je designové myšlení vyloženo prostřednictvím modelu dvojího diamantu, který explicitně odděluje práci v problémovém prostoru od práce v prostoru řešení a zdůrazňuje střídání rozšiřování a zužování možností. Zároveň je tento rámec propojen s praxí Design Sprintu (Google Ventures/GV), tedy workshopově řízeného, časově ohraničeného experimentu, který „komprimuje“ klíčové kroky do několika dnů.

> **Definice:** Designové myšlení je iterativní, na člověka orientovaný přístup k inovacím, který kombinuje porozumění uživatelům, kreativní generování variant a ověřování hypotéz prostřednictvím prototypů a dat.

> **Definice:** Dvojí diamant (Double Diamond) je procesní model Design Council, který strukturuje designovou práci do čtyř fází Discover–Define–Develop–Deliver a do dvou cyklů divergence a konvergence, nejprve v problémovém prostoru a poté v prostoru řešení.

> **Definice:** Divergence a konvergence jsou komplementární režimy práce, kdy divergence záměrně rozšiřuje prostor zjištění či nápadů, zatímco konvergence jej zúží na prioritní problém či řešení na základě kritérií a důkazů.

> **Definice:** Framing neboli zarámování problému je proces, při němž tým formuluje, „co přesně řeší“, jaké předpoklady přijímá, jaké hranice má scope a jak se bude poznávat úspěch.

> **Definice:** Hypotéza je testovatelný předpoklad o uživatelském chování nebo dopadu řešení, který má být potvrzen či vyvrácen důkazy; iterace je opakované dolaďování porozumění nebo návrhu na základě zpětné vazby a nových poznatků.

> **Definice:** Prototyp je zjednodušená reprezentace budoucího řešení určená k učení, komunikaci a testování; validace je ověřování, zda navržené řešení skutečně naplňuje potřeby uživatelů a cíle organizace, a to na základě empirických dat, nikoli pouze subjektivních dojmů.

## Kontext (Background / Context)

Model dvojího diamantu se nejčastěji spojuje s britskou institucí Design Council, která jej popularizovala jako srozumitelný obraz toho, co se v kvalitním designu děje „pod kapotou“: nejprve je třeba svět problému otevřít a skutečně pochopit, teprve potom má smysl rychle a cíleně navrhovat a ověřovat řešení. Tento pohled je přirozeně kompatibilní s human-centered designem (HCD) i s disciplínou UX, protože obě staví do středu pozornost k uživateli, jeho cílům a kontextu použití. Zároveň se dvojí diamant dobře srovnává s jinými procesními modely, například s přístupem IDEO, s Lean UX nebo s agile discovery: všude se objevují podobné motivy průběžného učení, prototypování a minimalizace rizik, liší se však důraz na formální fáze, artefakty a „rozhodovací brány“.

V praxi se navíc setkáte se dvěma paralelními „slovníky“. Design Council mluví o Discover/Define/Develop/Deliver, zatímco produktové a agilní týmy často používají pojmy discovery a delivery pro průběžné objevování a doručování. V tomto textu jsou oba jazyky propojené: fáze dvojího diamantu slouží jako procesní mapa a pojmy discovery/delivery pomáhají zasadit tuto mapu do rytmu agilního vývoje.

Designové myšlení v HCD je zároveň možné akademicky ukotvit standardem ISO 9241-210, který popisuje principy a aktivity human-centered designu pro interaktivní systémy. Zatímco dvojí diamant je primárně komunikační a procesní model, ISO 9241-210 poskytuje obecnější „normativní“ rámec pro to, že návrh má vycházet z porozumění kontextu použití, iterovat a evaluovat s uživateli; tyto aktivity lze do dvojího diamantu přirozeně mapovat.

V agilních organizacích se často objevuje potřeba sladit „objevování“ s „dodáváním“, tedy discovery a delivery. Dvojí diamant je pro toto sladění užitečný tím, že explicitně říká, kdy sbíráme důkazy a kdy se rozhodujeme, kdy máme ještě rozšiřovat poznání a kdy už uzavírat volby. Design Sprint do této krajiny vstupuje jako intenzivní, facilitovaný formát, který v krátkém čase vytvoří sdílené porozumění, vybere slibnou variantu a rychle ji ověří na uživatelích. To je mimořádně efektivní, ale zároveň to má své limity: sprint neumí nahradit hluboký výzkum u komplexních domén ani dlouhodobé zavádění změn do organizace a jeho výstupy mají nejvyšší hodnotu tehdy, když jsou navázané na implementaci a následné měření dopadu.

### 1. Geneze a motivace dvojího diamantu

Zobrazení procesu jako dvou „diamantů“ vychází z jednoduché, ale důležité zkušenosti: týmy často skáčou do návrhu příliš brzy, protože návrh působí produktivněji než nejisté mapování problému. První diamant proto reprezentuje disciplínu porozumění, kdy divergence rozšiřuje záběr na uživatele, situace a omezení, a následná konvergence vytváří jasné vymezení toho, co je vlastně problém, pro koho a proč. Druhý diamant na tento základ navazuje: nejprve se otevře prostor možných řešení, aby se tým neuzamkl do prvního nápadu, a poté se řešení konverguje do podoby, která je ověřená, implementovatelná a měřitelná.

Tento model je zároveň implicitní odpovědí na napětí mezi kreativitou a řízením: divergence podporuje kreativitu a objevování, konvergence podporuje rozhodnutí, odpovědnost a schopnost dodat výsledek. Právě tato oscilace je v praxi zdrojem kvality, protože inovace nevzniká pouze kreativitou, ale i schopností uzavřít volby na základě důkazů a pokračovat vpřed.

### 2. Vztah k Design Sprintu a produktovému vývoji

Design Sprint lze chápat jako workshopovou metodu, která se v organizacích používá k rychlému posunu v situaci nejistoty, zatímco dvojí diamant je spíše procesní mapa, která může rámovat delší období discovery i delivery. Pro státnicovou přesnost je důležité říct, že existuje více běžných interpretací kroků sprintu, ale kanonická pětidenní verze podle Jakea Knappa (GV) se obvykle popisuje jako Understand/Map, Sketch, Decide, Prototype a Test. V některých organizacích se navíc objevuje krok „Define“ jako explicitně pojmenovaný moment, typicky jako výstup prvního dne (například formulace cíle, sprint questions, výběr targetu na mapě), nikoli nutně jako samostatný „oficiální“ den.

Tyto kroky se dobře překládají do logiky dvojího diamantu: začátek sprintu zahušťuje Discover a konvergenci v Define tím, že tým rychle mapuje kontext, sdílí znalosti, vytvoří mapu end-to-end flow a z ní vybere cílový moment (target), na který se zaměří prototyp. Střed sprintu otevírá prostor řešení v Develop skrze skicování a alternativní koncepty a následně konverguje rozhodnutím, co prototypovat. Závěr sprintu směřuje k Deliver v jeho „sprintové“ podobě, kdy se vytvoří prototyp a ověří se v testování s uživateli. Rozdíl je v časovém měřítku a v tom, že sprint pracuje s přísným timeboxingem a s facilitací jako klíčovým mechanismem, jak udržet tempo, rovnost hlasů a jasné rozhodování.

Volba sprintu dává smysl tehdy, když je potřeba rychle snížit riziko špatné investice, sjednotit stakeholdery nebo ověřit klíčovou hypotézu. Prakticky se dá říct, že sprint je nejsilnější jako nástroj rychlé redukce rizika ve čtyřech dimenzích: desirability (dává to lidem smysl a chtějí to), usability (dokážou to použít a dokončit klíčový úkol), feasibility (je to realizovatelné při rozumných technických předpokladech) a viability (dává to smysl pro business, procesy a provoz). Naopak delší discovery je vhodné tam, kde doména vyžaduje více zdrojů důkazů, kde jsou zásadní legislativní či technická omezení, nebo kde je problém příliš široký a vyžaduje postupné zužování scope; v takových situacích je sprint bez kvalitních vstupů a návaznosti častým antipatternem, protože vytváří dojem pokroku bez skutečného učení.

## Hlavní pojmy (Core Concepts)

### 1. Struktura dvojího diamantu: čtyři fáze a jejich cíle

Dvojí diamant rozděluje práci na Discover, Define, Develop a Deliver. Každá fáze má typické vstupy, výstupy a rozhodovací momenty, které pomáhají týmu postupovat od nejistoty k akci. Discover sbírá materiál pro porozumění, Define jej syntetizuje do rozhodnutelného zadání, Develop generuje a zkoumá varianty řešení a Deliver vybírá, ověřuje a uvádí řešení do praxe. Zde je důležité explicitně zdůraznit, že Deliver v pojetí Design Council není pouze „test prototypu“, ale završení výběru a uvedení řešení do reality, včetně iterací na základě provozních dat a zkušeností z nasazení; sprint typicky končí dříve, tedy validací prototypu, zatímco „plné Deliver“ pokračuje implementací, adopcí a měřením dopadu.

V praxi se mezi fázemi vytvářejí artefakty, které umožňují sdílený jazyk napříč rolami. Současně se formují kritéria úspěchu, protože bez nich nelze konvergenci provádět transparentně a obhajitelně.

#### 1.1 Discover (Divergence v problémovém prostoru)

Fáze Discover je charakteristická širokým sběrem poznatků o uživatelích, kontextu a doméně. Cílem není potvrdit existující předpoklady, ale odhalit neznámé a vytvořit bohatý obraz reality, včetně toho, co lidé skutečně dělají, jaké mají cíle, jaké strategie volí a kde narážejí na bariéry. V UX se zde potkává kvalitativní a kvantitativní výzkum: rozhovory a etnografické pozorování umí vysvětlit motivace a významy, zatímco analytická data a dotazníky pomáhají odhadnout rozšířenost problémů a identifikovat vzorce chování.

V Discover je důležité nezůstat pouze u „uživatele“ v úzkém slova smyslu, protože digitální produkt často funguje jako součást služby. Proto se mapují i interní procesy, tok informací, omezení daná bezpečností a legislativou a očekávání businessu. Tato šíře je důvodem, proč jde o divergenci: tým vědomě rozšiřuje perspektivu, aby později nebyl překvapen faktory, které mohly být odhaleny dříve.

Představme si tým, který redesignuje přihlašování do interního portálu. V Discover zjistí z rozhovorů, že hlavním problémem není samotná obrazovka loginu, ale časté blokace účtů kvůli změně zařízení, které vyvolává bezpečnostní politika, a z toho plynoucí nápor na helpdesk. Tento poznatek posouvá problém z „udělejme hezčí login“ k „navrhněme bezpečný a srozumitelný proces obnovy přístupu“.

#### 1.2 Define (Konvergence v problémovém prostoru)

Define převádí rozptýlené poznatky do jasného vymezení problému. Syntéza zde není mechanické shrnutí, ale interpretace: tým hledá vzorce, příčiny a příležitosti, které mají vysoký dopad na uživatele i organizaci. Typické je afinitní diagramování, pojmenování klíčových insightů a formulace problem statement, který je dostatečně konkrétní, aby umožnil návrh, a zároveň dostatečně otevřený, aby nepředepisoval jedno řešení. Důležitým nástrojem jsou otázky How Might We, které převádějí problém do jazyka možností a vytvářejí most do následující divergence v prostoru řešení.

Konvergence v Define vyžaduje prioritizaci, protože i dobrý výzkum odhalí více problémů, než je možné řešit najednou. Zde se propojují uživatelské potřeby s hodnotovou nabídkou a s kritérii úspěchu. Pokud tým nezformuluje, jakou hodnotu chce přinést a jak ji pozná, riskuje, že bude v Develop generovat varianty bez jasného měřítka, podle něhož vybrat.

#### 1.3 Develop (Divergence v prostoru řešení)

V Develop se pozornost přesune od „co je problém“ k „jaké existují možnosti řešení“. Divergence v prostoru řešení je záměrně štědrá, protože inovace často vzniká porovnáním alternativních konceptů, nikoli z jediné lineární cesty. Ideace může mít podobu skicování, design studií, práce s návrhovými vzory a analýzy inspirací, přičemž kvalitní tým dokáže kombinovat kreativitu s disciplínou: i nápady jsou zde chápány jako kandidáti na testovatelné hypotézy. V tomto smyslu se Develop stává mostem mezi abstraktním rámováním problému a konkrétním ověřováním.

Důležité je, že divergence není samoúčelná. V Develop se rozšiřuje prostor možností v rámci omezení, která byla pojmenována v Define, a s ohledem na hypotézy, které stojí za to otestovat. Pokud tým generuje nápady mimo rámec kritérií úspěchu, vzniká „falešná divergence“, která sice produkuje množství výstupů, ale nepomáhá posunu k rozhodnutí.

U samoobslužného portálu může tým vytvořit tři koncepty resetu hesla. První staví na e-mailovém ověření, druhý na mobilní aplikaci s push notifikací, třetí na podpoře přes chatbot s eskalací na operátora. Každý koncept je spojen s hypotézou o rychlosti dokončení, míře chyb a vnímané důvěry, takže je jasné, co se bude při testu sledovat.

#### 1.4 Deliver (Konvergence v prostoru řešení)

Deliver představuje konvergenci směrem k řešení, které je prokazatelně použitelné, hodnotné a proveditelné, a zároveň jeho uvedení do praxe. V této fázi se proto přirozeně potkává validace s implementací: vzniká potřeba handoffu, tedy předání specifikace, prototypů, rozhodnutí a kontextu vývojovému týmu, a následně i potřeba sledovat dopad po nasazení a iterovat podle provozních dat. V digitálních produktech je časté, že sprintové „Deliver“ končí testem prototypu, zatímco A/B testování je typický nástroj až post-launch validace v produkčním prostředí po implementaci, pokud je to možné a eticky i metodologicky obhajitelné.

Konvergence však neznamená konec učení, protože zavedení do praxe často odhalí nové bariéry a vyvolá iterace, které mohou vracet tým zpět do Develop, někdy i do Define. To je praktický důvod, proč je užitečné chápat Deliver jako „doručení a učení v realitě“, nikoli jen jako jednorázovou evaluaci prototypu.

## Divergence a konvergence: rozhodování pod nejistotou

Střídání divergence a konvergence je ve své podstatě mechanismus rozhodování pod nejistotou. Divergence uznává, že na začátku nevíme dost, a proto rozšiřuje záběr, aby zvýšila šanci, že tým narazí na relevantní signály. Konvergence naopak uznává, že zdroje jsou omezené a že produkt vzniká volbou, nikoli nekonečným zkoumáním. V této fázi se uplatňuje role kritérií a evidence: tým by měl být schopen obhájit, proč něco zahrnul a něco vyloučil, a opřít se o důkazy z výzkumu, testů a dat, protože bez toho se rozhodování snadno zvrhne v politiku nebo v boj intuitivních preferencí.

Typickými chybami jsou předčasná konvergence, kdy tým zúží možnosti dříve, než porozumí problému, a falešná divergence, kdy tým generuje množství nápadů bez jasného cíle, takže se reálně nikam neposouvá. Zralé týmy proto pracují s explicitními rozhodovacími momenty, se stopami rozhodnutí a s vědomou volbou, kdy má smysl ještě rozšiřovat a kdy už uzavírat. Významnou roli zde hrají i kognitivní zkreslení, tedy systematické odchylky v úsudku, které vedou k předvídatelným chybám v rozhodování, například k přeceňování prvních informací nebo k vyhledávání potvrzení vlastního názoru.

## Formulace problému a „framing“

Formulace problému je intelektuální jádro celého procesu, protože špatně zarámovaný problém vede k elegantně provedenému, ale irelevantnímu řešení. V praxi se často ukazuje, že počáteční zadání popisuje symptom, nikoli příčinu. Proto je součástí framingu práce s root cause, tedy s odhalováním mechanismu, který problém vytváří, a s tím související práce se scopem, tedy s rozhodnutím, co řešení zahrnuje a co už je mimo záběr. Současně je framing vyjednáváním mezi omezeními businessu, technologií a práva a mezi tím, co je žádoucí pro uživatele.

Zarámování také vyžaduje sladění stakeholderů, protože různí stakeholderové mohou mít různé definice úspěchu. Bez sladění očekávání se může stát, že tým sice vygeneruje dobré UX řešení, ale organizace jej nebude schopna přijmout, financovat nebo provozovat. Kvalitní framing proto propojuje uživatelskou hodnotu s organizačním kontextem a překládá je do společně sdílených kritérií.

## Artefakty a výstupy napříč fázemi

Artefakty jsou v designovém procesu více než dokumentace; jsou to nástroje myšlení a komunikace. V Discover vzniká typicky výzkumný plán (research plan) a mapa stakeholderů, aby bylo jasné, koho a co budeme zkoumat a proč. V Define se často objevují journey mapy, service blueprinty a první verze informační architektury, protože právě zde se ukazuje struktura služby i systému a místa, kde dochází k selhání. V Develop se artefakty posouvají k wireframům, storyboardům, návrhům toků a prototypům, které umožňují rychle diskutovat o konkrétních trade-offech. V Deliver pak přibývají testovací scénáře, reporty z testování, rozhodovací záznamy a materiály pro handoff, které zajišťují, že se poznatky neztratí při přechodu k vývoji a následné iteraci.

## Role v procesu a týmová spolupráce

Dvojí diamant je často prezentován jako proces, ale v praxi je to především sociální systém spolupráce. UX designér typicky nese odpovědnost za kvalitu interakcí a za převod poznatků do návrhů, výzkumník za kvalitu sběru a interpretace dat, product manager za propojení s produktovou strategií a prioritami a tech lead za proveditelnost a rizika implementace. Klíčová je role facilitátora, zejména ve sprintu, protože kvalitní facilitace chrání divergenci před dominancí hlasitých osobností a chrání konvergenci před nekonečnou diskusí bez rozhodnutí.

Pro téma Design Sprintu je užitečné doplnit i kanonické sprintové role podle Knappa. Sprint stojí na roli Decidera, tedy osoby s mandátem učinit konečné rozhodnutí ve sporných místech; tato role je praktickým protějškem „rozhodovací brány“ a zároveň kontrolovaným způsobem, jak pracovat s organizační realitou HiPPO efektu, aniž by sprint sklouzl do čistě mocenského rozhodování bez důkazů. Dále je zásadní Facilitator, který udržuje strukturu, čas, psychologické bezpečí a férovost procesu, a potom experts, tedy přizvaní odborníci na doménu (právo, bezpečnost, podpora, sales, operations), kteří vstupují v konkrétních blocích, aby tým získal kritické informace bez toho, že by byl sprint zahlcen příliš velkou skupinou po celou dobu.

Spolupráce stojí na společném jazyce, který vytvářejí artefakty a rozhodovací záznamy. Bez nich se tým snadno vrací k dřívějším debatám, protože chybí paměť organizace o tom, proč se rozhodlo tak či onak.

## Mapování dvojího diamantu na Design Sprint (praktický převod)

Převod dvojího diamantu do praxe Design Sprintu je nejlépe pochopitelný, když sprint nevnímáme jako „celý diamant“, ale jako komprimovaný úsek procesu, který potřebuje kvalitní přípravu a stejně kvalitní návaznost. Pre-sprint fáze odpovídá zejména Discover a části Define: tým si vyjasňuje cíle, shromažďuje dostupná data, připravuje rekrutaci pro testování a formuluje sprint questions, tedy klíčové otázky, na které má sprint dát odpověď. Praktickým a pro sprint typickým artefaktem je také mapa (map), tedy sdílené zjednodušené end-to-end zmapování toku služby či procesu; z této mapy tým v konvergenci vybírá target, tedy konkrétní moment či část toku, která bude prototypována a testována, protože právě tam leží největší riziko nebo největší příležitost k učení. Pokud je pre-sprint zanedbán, sprint často sklouzne k debatám bez dat a k prototypu, který se testuje na špatně vybraných respondentech.

Samotný sprint pak typicky zhušťuje Define a Develop do prvních dní a Deliver do závěru, kdy vzniká prototyp a probíhá test. Z perspektivy dvojího diamantu je to extrémně rychlá oscilace divergence a konvergence, která stojí na facilitaci a na timeboxingu. Po sprintu následuje post-sprint fáze, která odpovídá skutečné delivery: interpretace výsledků, rozhodnutí o dalším kroku, přenos do backlogu, plán implementace, případně doplnění dalšího výzkumu nebo technického ověření. V této fázi se často ukáže, zda sprint byl skutečným nástrojem řízení rizika, nebo jen „výstupem pro prezentaci“.

Tým může například chystat sprint na novou funkci „žádost o změnu tarifu“ v zákaznickém portálu. Pre-sprintem získá data z analytiky, že lidé odcházejí na stránce s porovnáním tarifů, a z podpory zjistí, že často nerozumí dopadům změny na fakturaci. Ve sprintu proto prototypuje pouze srovnání tarifů a potvrzovací krok s vysvětlením dopadu, zatímco zbytek portálu simuluje. Po testu se výsledky přetaví do backlogu a do rozhodnutí, zda pokračovat MVP, nebo upravit framing.

Protože pět dní v kuse je v praxi někdy obtížně realizovatelných, setkáte se i s variantami sprintu. Běžná je zkrácená čtyřdenní verze, kde se některé aktivity prvního dne více připraví předem, a také remote sprint, který přesouvá práci na online tabule a vyžaduje ještě přísnější facilitataci, kratší bloky a promyšlenou práci s energií týmu. V organizacích se objevují i adaptace typu „Sprint 2.0“, které zachovávají logiku Map–Sketch–Decide–Prototype–Test, ale upravují délku, účast a rozsah prototypu podle kontextu.

## Metody a techniky (Průřez napříč procesem)

Volba metod není otázkou preference, ale vhodnosti k cíli konkrétní fáze. V Discover jsou metody orientované na porozumění a sběr, v Define na syntézu a rozhodnutí, v Develop na generování a rychlé ověřování a v Deliver na validaci a přípravu implementace a nasazení. Kvalitu poznání zvyšuje triangulace, tedy kombinace více zdrojů dat, a také vědomá práce se zkreslením, například s tím, že respondenti mohou deklarovat jiné chování, než jaké skutečně vykazují. Zvlášť v akademickém i profesionálním kontextu je nezbytné nezapomínat na etiku výzkumu, informovaný souhlas a ochranu dat, protože kvalita procesu se neposuzuje jen podle výsledku, ale i podle toho, jak bylo poznání získáno.

### 1. Výzkumné metody (Discover)

V Discover se často kombinuje interview s kontextovým zkoumáním, protože samotný rozhovor může být zatížen racionalizací a paměťovými zkresleními. Contextual inquiry umožňuje pozorovat práci v přirozeném prostředí a zachytit detaily, které by respondent sám nepovažoval za důležité. Diary study je užitečná tam, kde se chování rozprostírá v čase a nejde jej snadno pozorovat v jedné seanci. Vedle toho desk research a konkurenční analýza pomáhají zmapovat existující řešení a očekávání uživatelů, zatímco analytika (analytics) odhaluje reálné vzorce v digitálním chování.

### 2. Syntéza a prioritizace (Define)

Syntéza v Define často využívá afinitní mapování, které umožňuje převést velké množství poznámek do tematických okruhů a následně do insightů. Jobs To Be Done pomáhá přepsat potřeby do funkčního jazyka „co se uživatel snaží dosáhnout“, čímž se snižuje riziko fixace na konkrétní rozhraní. Prioritizační rámce jako Kano nebo impact/effort matice pak umožňují transparentně zvažovat, co přináší největší hodnotu a co je realistické. Důležitým vyústěním Define je také formulace hypotéz a metrik, protože bez nich nelze v další fázi smysluplně rozhodovat.

### 3. Ideace a koncepty (Develop)

V Develop se často používají strukturované techniky jako Crazy 8s, které záměrně tlačí na rychlost a množství variant, aby tým překonal fixaci na první nápad. SCAMPER podporuje systematické hledání alternativ pomocí transformací existujícího řešení. Design studio jako spolupracující skicování umožňuje konfrontovat perspektivy a rychle vytvářet sdílený směr. Z hlediska UX je klíčové, že ideace by měla ústit do návrhu toků (user flow) a do konceptů, které lze prototypovat. V prostředí organizací s design systémem je pak ideace současně disciplínou konzistence, protože kreativita se odehrává v rámci komponent, pravidel a governance.

### 4. Prototypování a testování (Deliver)

V Deliver je prototypování prostředkem k získání důkazů. Low-fidelity prototypy jsou levné a vhodné pro ověření struktury a konceptu, high-fidelity prototypy umožní testovat jemnější aspekty interakce a důvěry. Wizard-of-Oz technika je užitečná tehdy, když technologie ještě neexistuje nebo je drahá, ale tým chce ověřit, jak by uživatelé reagovali na určitou funkcionalitu. Testování může být moderované i nemoderované, přičemž volba závisí na složitosti úloh a na potřebě hlubšího porozumění. Heuristická evaluace se hodí jako rychlá expertní kontrola, ale nenahrazuje testování s uživateli, protože expertní pohled nemusí zachytit reálné mentální modely cílové skupiny.

U usability testování je vhodné explicitně chápat „pět uživatelů“ jako heuristické pravidlo pro odhalení většiny hlavních problémů v konkrétním rozhraní, nikoli jako univerzální standard kvality. V Design Sprintu je typické otestovat přibližně pět rozhovorů/uživatelů během jednoho dne testování, protože to dobře odpovídá časovým možnostem sprintu a zároveň často poskytne dost signálů pro rozhodnutí o dalším kroku; pokud však potřebujete statistickou jistotu nebo segmentové srovnání, je nutné doplnit kvantitativní validaci nebo navazující výzkum.

## Aplikace (Applications)

Dvojí diamant se v praxi uplatňuje nejen u digitálních produktů, ale i u služeb a interních informačních systémů. Jeho přínos spočívá v řízení rizik: oddělení problémového prostoru od prostoru řešení snižuje pravděpodobnost, že organizace investuje do funkcionality, která neřeší skutečnou potřebu, nebo že vytvoří řešení, které je v konfliktu s interními procesy a omezeními. Design Sprint v tomto kontextu funguje jako akcelerátor učení, zvlášť když je potřeba rychle validovat klíčový tok, ověřit desirability a usability konceptu a získat shodu stakeholderů na tom, co a proč se bude stavět.

### 1. Případové použití v UX a IS

V UX se dvojí diamant často využívá při redesignu klíčového toku, například onboardingu, kde se snadno zamění estetické zlepšení za skutečné snížení bariér. U návrhu nové funkce pomáhá zejména vyjasnit, zda je potřeba reálná, jak se projevuje v chování a jaké alternativy uživatelé dnes používají. U zlepšení self-service portálu je přínosem propojení journey mapy s interními procesy, protože uživatelův problém často vzniká na hranici systémů. U interních workflow může dvojí diamant odhalit, že zdroj neefektivity leží v organizačních pravidlech a ne v UI, což mění typ řešení od „nová obrazovka“ k „změna procesu a podpůrné automatizace“.

Organizace může například řešit, že zaměstnanci obcházejí interní systém schvalování nákupů a posílají žádosti e-mailem. Discover ukáže, že systém je pomalý a nejasně komunikuje stav, ale Define odhalí i root cause: schvalovací pravidla jsou natolik složitá, že lidé nevědí, kdo je schvalovatel. Develop proto generuje varianty, které kombinují zjednodušení pravidel, transparentní přehled odpovědnosti a automatické návrhy schvalovatelů. Deliver ověří prototyp na reálných scénářích a předá rozhodnutí do implementace spolu s metrikou snížení „e-mailových obcházek“.

### 2. Integrace do agilního vývoje

V agilním vývoji se dvojí diamant přirozeně propojuje s dual-track agile, kde discovery a delivery běží paralelně. Discovery generuje poznatky, hypotézy a prototypy, zatímco delivery implementuje a nasazuje ověřené kroky. Aby tato integrace fungovala, musí být výstupy Define a Deliver přeloženy do backlogu a refinementu a musí existovat jasná kritéria pro Definition of Ready a Definition of Done. Jinak hrozí, že designové výstupy zůstanou „vedle“ vývoje, nebo že vývoj začne implementovat neověřené nápady bez kontextu.

### 3. Měření dopadu (produktové a UX metriky)

Měření dopadu je pojítkem mezi Deliver a dlouhodobou hodnotou. V raných fázích jsou užitečné leading metriky, které indikují směr, například úspěšnost dokončení úkolu v prototypu, míra porozumění nebo snížení chyb. Po nasazení se více uplatní lagging metriky, například snížení kontaktů na podporu, růst konverze, zkrácení času procesu nebo dopad na tržby. Experimentální design je zde klíčový, protože bez něj se snadno zamění korelace za kauzalitu. V praxi to znamená jasně definovat hypotézu, metriky, segmenty a podmínky experimentu, a zároveň interpretovat signály v kontextu, protože metriky mohou růst i klesat z více důvodů než jen kvůli designové změně.

## Výzvy a omezení (Challenges and Considerations)

Implementace dvojího diamantu často selhává ne proto, že by byl model špatný, ale proto, že organizace podcení podmínky jeho fungování. Jedním rizikem je design theater, kdy se používá jazyk a rituály designu, ale bez reálné vazby na rozhodování, implementaci a měření dopadu. Dalším rizikem je scope creep, kdy se v průběhu divergence přidávají nové cíle bez následné konvergence, takže proces ztrácí ostrost. Významnou roli hraje organizační zralost a governance, protože bez jasných rozhodovacích kompetencí, bez ochrany času lidí a bez návaznosti na delivery se i dobře provedený sprint či discovery rozplyne. Zvláštní kategorií jsou etické a legislativní aspekty, například GDPR, které ovlivňují výzkum i návrh datových toků.

### 1. Předčasná konvergence a řešení bez porozumění problému

Předčasná konvergence se projevuje tím, že tým velmi rychle „ví, co udělat“, často na základě jednotlivých názorů nebo historických řešení, a výzkum slouží jen jako potvrzení. Důsledkem je slabý problem-solution fit, tedy nesoulad mezi řešením a skutečnou potřebou. Prevence spočívá v minimálním, ale cíleném výzkumu, v explicitních kritériích a v ochraně divergence pomocí timeboxingu, aby se otevřel prostor pro více perspektiv, aniž by se proces stal nekonečným.

### 2. Kognitivní zkreslení a skupinová dynamika

Skupinové rozhodování je citlivé na confirmation bias, tedy tendenci hledat potvrzení vlastního názoru, na groupthink, kdy skupina potlačí odlišné názory ve jménu harmonie, a na HiPPO efekt, kdy rozhodne nejvýše postavená osoba bez ohledu na kvalitu důkazů. V Design Sprintu se proto používají facilitátorské techniky, které oddělují generování od hodnocení a umožňují férovější vyjádření preferencí, například tiché skicování a strukturované hlasování. Praktickým stabilizátorem rozhodování je i role Decidera, která dává procesu jasný „bod konvergence“, ale současně klade nárok na to, aby rozhodnutí bylo opřené o mapu problému, o kritéria a o poznatky od expertů, nikoli pouze o organizační autoritu.

Důležité je také vytvářet psychologické bezpečí, aby lidé mohli nesouhlasit bez sankcí, protože právě nesouhlas často odhalí skryté předpoklady.

### 3. Reprezentativnost výzkumu a kvalita důkazů

Design Sprint typicky pracuje s malými vzorky, což je pro kvalitativní testování použitelnosti často dostačující k odhalení hlavních problémů, ale není to důkaz o statistické rozšířenosti. Riziko spočívá v chybné external validity, kdy tým přenáší závěry na populaci, pro kterou data nebyla získána, nebo kdy rekrutace zkreslí výsledky, například výběrem „příliš zkušených“ uživatelů. Proto je důležitá triangulace, práce se saturací a vědomé vymezení toho, co výsledky dokazují a co pouze naznačují. V některých případech je pak nutné doplnit sprint o robustnější výzkum nebo o kvantitativní validaci.

### 4. Přenos výsledků do implementace (handoff a udržitelnost)

I kvalitní sprint může ztroskotat na handoffu, pokud se ztratí kontext, pokud nejsou zaznamenána rozhodnutí nebo pokud implementace nemá oporu v design systému. Udržitelnost vyžaduje design system governance, aby komponenty a pravidla byly spravované, a decision log, který uchovává, proč se tým rozhodl určitým směrem a jaké důkazy jej k tomu vedly. Tím se snižuje riziko, že se v pozdější fázi někdo vrátí k již uzavřeným diskusím nebo že se v implementaci udělají změny, které znehodnotí ověřené principy.

### 5. Etika, přístupnost a inkluze

Etika a inkluze nejsou doplňkem, ale kvalitou procesu. Ve výzkumu to znamená respekt k účastníkům, minimalizaci rizik a odpovědné zacházení s daty. V návrhu to znamená přístupnost podle WCAG, aby řešení fungovalo pro lidi s různými schopnostmi, a inkluzivní design, který aktivně počítá s rozmanitostí uživatelů, nikoli s „průměrným“ uživatelem. Privacy by design pak vyžaduje, aby ochrana soukromí byla vestavěná do návrhu od začátku, nikoli dodatečně.

## Doporučená struktura pro zkouškové odpovědi (Státnicový rámec)

U státnic je výhodné téma vystavět jako argumentačně soudržný celek: nejprve přesně definovat designové myšlení a dvojí diamant, vysvětlit logiku divergence a konvergence a oddělení problémového prostoru od prostoru řešení, následně projít čtyři fáze s typickými metodami a artefakty a explicitně ukázat, jak se tento rámec mapuje na Design Sprint v kanonické pětidenní verzi (Map, Sketch, Decide, Prototype, Test) i s uvedením toho, že „Define“ bývá v originálu spíše výstupem prvního dne. Poté je vhodné uvést konkrétní případ z praxe, na němž se ukáže framing, hypotézy, prototyp a validace, a závěrem pojmenovat rizika jako předčasná konvergence, bias, nereprezentativnost a slabý handoff včetně mitigací. Pokud je prostor, vyplatí se doplnit i sprintové role (Decider, Facilitator, experts) a stručně okomentovat, jak sprint adaptovat do reality (remote či zkrácené varianty), aniž by se ztratil jeho smysl.

## Související témata (See Also)

Dvojí diamant a Design Sprint se přirozeně propojují s hlubším studiem design sprintu v pojetí GV včetně rolí, artefaktů a facilitace, s teorií design thinking a HCD, s metodologií UX research v kvalitativní i kvantitativní rovině a se service designem, zejména s customer journey map a service blueprint. V praxi se téma dále opírá o Lean UX a dual-track agile, o prototypování a testování použitelnosti, o informační architekturu a návrh interakcí, o produktové metriky, OKR a experimentování včetně A/B testů, o etiku výzkumu, GDPR a přístupnost podle WCAG, o design systémy a design governance a také o facilitaci workshopů a rozhodování v týmu.

## Reference a doporučené zdroje (pro studium)

Pro akademickou přípravu je klíčové vycházet z původních materiálů Design Council k Double Diamond, z knihy „Sprint“ od Jakea Knappa a kolektivu (Google Ventures) a z metodických textů Nielsen Norman Group k UX výzkumu, testování a metrikám. Pro standardizované ukotvení HCD je vhodné studovat ISO 9241-210, který formuluje principy human-centered designu včetně iterativního cyklu a zapojení uživatelů. Doporučit lze také literaturu k Lean UX a produktovému experimentování, která posiluje propojení mezi designem, vývojem a měřením dopadu.

## Závěr

Dvojí diamant nabízí srozumitelnou, ale metodicky hlubokou mapu designového myšlení: nejprve divergovat a konvergovat v problémovém prostoru, poté divergovat a konvergovat v prostoru řešení, přičemž každá konvergence má být opřená o kritéria a důkazy. Design Sprint (Google Ventures/GV) lze chápat jako intenzivní, časově komprimovanou realizaci klíčových kroků, která rychle snižuje nejistotu skrze prototyp a test, přičemž kanonická struktura je Map (Understand), Sketch, Decide, Prototype a Test a „Define“ je typicky spíše výstupem prvního dne než samostatnou oficiální fází. Pro praxi UX a informačních systémů je rozhodující schopnost správně zarámovat problém, řídit rozhodování pod nejistotou, pracovat se zkresleními a zajistit udržitelný handoff, a zároveň nezapomínat na etiku, přístupnost a ochranu soukromí jako integrální součást kvality návrhu.
