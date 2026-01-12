---
title: "Přístupy k porozumění problému"
subject: "Design zamereny na cloveka"
subjectSlug: "08-design-zamereny-na-cloveka"
order: 2
---
## Úvod

Porozumění problému v designu zaměřeném na člověka představuje cílenou, metodickou snahu rozpoznat, co je skutečnou podstatou obtíže dříve, než tým začne generovat řešení. V této fázi nejde o „vymýšlení lepšího rozhraní“, ale o vyjasnění, koho se problém týká, v jakém kontextu se objevuje, jaké má příčiny a jaké důsledky vytváří pro uživatele, organizaci i širší systém. V rámci modelu Double Diamond je porozumění problému jádrem první poloviny procesu: nejprve se prostor záměrně rozšiřuje v objevování (discovery), aby se následně zúžil v definování (define) do přesné, testovatelné formulace, která teprve dává smysl ideaci, prototypování a doručování.

Design zaměřený na člověka (HCD) je přístup k navrhování, který vychází z empirického poznání lidí v jejich kontextu a z iterativního ověřování návrhů tak, aby výsledné řešení odpovídalo reálným potřebám, schopnostem a omezením uživatelů. Designové myšlení je pak širší rámec pro řešení komplexních problémů skrze střídání divergentního a konvergentního uvažování, typicky za použití výzkumu, syntézy, ideace, prototypování a testování. Double Diamond tento procesní princip konkretizuje do čtyř fází objevování, definování, rozvíjení a doručování a zdůrazňuje rytmus „rozšířit–zúžit“ jak v poznání, tak v návrzích.

Klíčovým nástrojem této části práce je problémové rámování (problem framing), tedy způsob, jak problém vymezit tak, aby byl srozumitelný, sdílený v týmu, zasazený do kontextu a zároveň otevřený smysluplným návrhovým intervencím. Rámování je úzce svázané s výzkumnými otázkami, které explicitně říkají, co potřebujeme zjistit, aby bylo porozumění dostatečné pro rozhodnutí, a které zároveň řídí volbu metod i interpretaci dat. Z výzkumu nevzniká „pravda sama“, ale data, která se teprve v syntéze proměňují v insighty, tedy interpretované závěry odhalující mechanismy, motivace nebo skryté souvislosti s přímými důsledky pro formulaci problému. Nad insighty se následně formulují hypotézy, tedy předběžná testovatelná tvrzení o vztahu mezi příčinou a důsledkem v chování nebo zkušenosti, na něž lze navázat prototypování a ověřování dopadu.

## Kontext

Kvalita výsledného návrhu v HCD je v praxi překvapivě často limitována nikoli dovedností „vytvořit řešení“, ale přesností pochopení, co má být řešeno. Porozumění problému proto stojí na vztahu mezi primárním a sekundárním výzkumem, následnou syntézou a překladem poznatků do formulace problému, která je akceschopná pro tým a zároveň ukotvená v evidenci. Tento vztah lze chápat jako řetězec, v němž každé oslabení vede k řetězové reakci: povrchní data vyústí ve slabé insighty, ty se promítnou do vágního zadání a ideace pak produkuje návrhy, které sice mohou být kreativní, ale míjejí podstatu potřeb.

Primární výzkum znamená sběr původních dat přímo od uživatelů nebo z jejich chování v reálném prostředí, typicky pomocí rozhovorů, pozorování či analýzy používání. Sekundární výzkum naopak pracuje s existujícími zdroji poznání, jako jsou studie, interní reporty, analytické přehledy, regulace, normy, standardy a poznatky doménových expertů. V obou případech se tým pohybuje mezi perspektivami stakeholderů, tedy jednotlivců či skupin, které mají na problému či řešení zájem, vliv nebo odpovědnost, a mezi perspektivou uživatelů v jejich kontextu použití, který zahrnuje cíle, prostředí, omezení, technologie, čas i sociální vztahy.

V klasickém toku práce, který odpovídá literatuře zaměřené na interakční design a HCD, se nejprve sbírají data, potom se data syntetizují do sdíleného porozumění a teprve následně se formuluje otázka typu How Might We, která otevírá prostor ideace, prototypování, testování a iterace. U Cooperova přístupu, například v tradici goal-directed design známé z knihy *About Face*, je patrný důraz na to, že návrh má být veden cíli a chováním lidí, nikoli pouhým seznamem požadavků, protože požadavky bez porozumění motivacím a kontextu často popisují řešení, nikoli problém. Pro řízení kvality je klíčové rozlišovat, kdy ověřujeme, že stavíme správnou věc, a kdy pouze kontrolujeme, že ji stavíme „správně“, protože bez tohoto rozlišení se týmy snadno soustředí na technickou bezchybnost řešení, které však řeší špatně vymezený problém.

> **Definice (terminologicky zrádné):** Validace znamená ověřování, zda řešíme správný problém a zda navržené řešení přináší zamýšlenou hodnotu v reálném kontextu, zatímco verifikace znamená ověřování, zda řešení splňuje specifikaci a je technicky či procesně správně implementováno. V produktové praxi se tyto termíny někdy používají nejednotně, ale pro akademický kontext je důležité držet jednu konzistentní definici a umět ji obhájit na příkladu.

### 2.1 Proč dochází k nepochopení problému

Neporozumění problému vzniká často nenápadně a systémově, protože organizace i týmy mají přirozenou tendenci směřovat rychle k řešení. Typickým mechanismem je záměna symptomu za příčinu, kdy se tým snaží „opravit obrazovku“ nebo „zrychlit proces“, aniž by ověřil, proč k potížím dochází a zda nejde o důsledek širšího nastavení služby, motivací uživatelů či organizačních omezení. Zároveň působí kognitivní zkreslení zadavatelů i týmu: stakeholder může přinést silnou preferenci konkrétního řešení a tým, pod tlakem času a hierarchie, může tuto preferenci převzít jako problémovou definici. Vedle toho se objevuje falešná shoda v týmu, kdy členové přeceňují míru společného porozumění, protože používají stejná slova, ale myslí odlišné věci, a dále stereotypy o uživatelích, které vedou k „navrhování pro sebe“. Neméně nebezpečná je práce s metrikami bez kontextu: čísla mohou signalizovat odchylku, ale bez kvalitativního vysvětlení často podporují mylné kauzální závěry a posilují solution bias, tedy tendenci preferovat konkrétní řešení dříve, než dojde k dostatečnému pochopení a vymezení problému. V tomto prostředí se snadno uplatní i confirmation bias, kdy tým vyhledává data potvrzující původní představu a přehlíží signály, které jí odporují, a vzniká „optimalizace“ proxy metrik, které mohou zachycovat jev zkresleně nebo pouze částečně.

Přání stakeholdera proto nelze zaměňovat za potřebu uživatele. Přání často přichází ve tvaru návrhu řešení („přidejte X“), zatímco potřeba je to, co uživatel skutečně potřebuje k dosažení cíle v daném kontextu, i když to neumí explicitně pojmenovat. Profesionální porozumění problému znamená umět tyto roviny oddělit a převést přání na ověřitelné hypotézy o příčinách a dopadech.

> **Příklad:** Tým dostane zadání „přidejte do aplikace chatbota“, protože call centrum nestíhá. Výzkum ale ukáže, že největší část dotazů vzniká kvůli nejasně formulovaným stavům objednávky a nekonzistentním notifikacím. Skutečný problém tedy není absence chatbota, ale nepochopitelnost a netransparentnost procesu, kterou chatbot pouze zakryje.

### 2.2 Etika a odpovědnost při porozumění problému

Etická rovina porozumění problému je nedílnou součástí HCD, protože výzkum pracuje s lidmi, jejich zkušenostmi, často i zranitelností, a výsledky návrhu mohou mít přímé dopady na jejich životní šance. V okamžiku sběru dat je klíčové, aby účastníci rozuměli, proč data poskytují, jak budou použita a jak bude zajištěna jejich ochrana; zároveň je nutné přemýšlet o minimalizaci dat a o tom, zda je vůbec legitimní určitý typ dat sbírat. U citlivých skupin, jako jsou děti, senioři, lidé s hendikepem nebo osoby v sociální nouzi, nabývá odpovědnost ještě větší váhy, protože asymetrie moci mezi výzkumníkem a účastníkem může vést k nechtěnému nátlaku či zkreslení.

Etika se však netýká jen sběru, ale i interpretace a dopadů: návrh může generovat nechtěné důsledky, posilovat nerovnosti nebo vytvářet bariéry. Inkluzivní perspektiva proto vyžaduje uvažovat o různorodosti uživatelů, o okrajových případech a o férovosti rozhodnutí napříč skupinami. Do praxe k tomu patří i institucionální rámce, zejména GDPR, které vynucuje jasný účel zpracování, minimalizaci, přiměřené zabezpečení a práci s anonymizací či pseudonymizací dat podle rizik. V produktovém prostředí je navíc užitečné pojmenovat etické napětí v růstových metrikách: optimalizace krátkodobých ukazatelů může vést k manipulativním pobídkám a dark patterns, které sice zlepší čísla, ale zhorší důvěru, autonomii a dlouhodobou hodnotu.

> **Definice:** Informovaný souhlas je dobrovolný souhlas účastníka se zapojením do výzkumu, založený na srozumitelném vysvětlení účelu, průběhu, rizik, nakládání s daty a možnosti kdykoli účast ukončit.

> **Definice:** Privacy by design je princip, podle něhož je ochrana soukromí začleněna do návrhu produktu či služby od počátku, nikoli doplněna až dodatečně.

> **Definice:** Harm reduction je přístup, který usiluje o minimalizaci škod a negativních dopadů, i když nelze rizika zcela odstranit.

> **Definice:** Inkluzivní design je navrhování, které systematicky zohledňuje rozmanitost lidí a snaží se odstraňovat bariéry, jež vylučují určité skupiny z plnohodnotného používání produktu či služby.

## Hlavní pojmy

### 3.1 Typy problémů a úrovně formulace

V HCD je užitečné chápat, že „problém“ může existovat na různých úrovních a jeho formulace se mění podle toho, zda míříme na inovaci, optimalizaci nebo systémovou změnu. Základní distinkcí je symptom versus příčina: symptom je pozorovatelný projev, zatímco příčina je mechanismus, který symptom generuje. Dále se odlišují uživatelské problémy, které se týkají cílů, motivací a bariér lidí, produktové problémy, které souvisí s vlastnostmi konkrétního řešení, procesní problémy, které se týkají průběhu služby či interních workflow, a systémové problémy, které vyplývají ze struktury širšího systému, například regulace, ekonomických pobídek či organizačního uspořádání. Každá úroveň přináší jiný typ omezení a jiný typ kompromisu, přičemž špatně zvolená úroveň vede k tomu, že řešíme „lokální optimum“ a přehlížíme skutečný zdroj potíží.

Pojem root cause je v tomto kontextu užitečný jako orientační ambice jít pod povrch symptomu, ale v sociotechnických systémech často nejde o jednu „kořenovou“ příčinu v lineárním smyslu. Častější je souhra více příčin a zpětných vazeb, které problém udržují, a proto je hledání příčin lépe chápat jako práci s hypotézami o kauzalitě, které je potřeba dále ověřovat. Nástroje typu fishbone diagram pomáhají strukturovat možné příčiny do kategorií a vytvářet přehled, ale samy o sobě nejsou důkazem; kauzální tvrzení vyžadují další evidenci, například cílené pozorování, porovnání variant, nebo experimentální či kvazi-experimentální ověření.

> **Definice:** Root cause je základní příčina nebo mechanismus, jehož odstranění sníží pravděpodobnost opětovného vzniku symptomu; v komplexních systémech může jít spíše o soubor spolupůsobících příčin než o jediný bod.

> **Definice:** Symptom je pozorovatelný projev problému, který může být důsledkem více různých příčin.

> **Definice:** Systém je soubor vzájemně provázaných prvků a vztahů, které společně vytvářejí chování celku, jež nelze plně vysvětlit pouze vlastnostmi jednotlivých částí.

> **Definice:** Omezení (constraints) jsou podmínky, které vymezují prostor návrhu, například právní požadavky, technologická omezení, rozpočet, čas či organizační kapacity.

> **Definice:** Trade-off je kompromis, v němž zlepšení jedné vlastnosti typicky zhoršuje jinou, například rychlost versus přesnost, personalizace versus soukromí nebo jednoduchost versus flexibilita.

> **Příklad:** Pokud uživatelé „nedokončují registraci“, může být symptomem nízká konverze ve funnelu, produktovou příčinou špatně navržený formulář, procesní příčinou nutnost ověřování přes více kanálů a systémovou příčinou regulatorní požadavek na identifikaci. Správné rámování rozhodne, zda je cílem kosmetická úprava formuláře, redesign celého onboarding procesu, nebo změna identity systému v souladu s regulací.

### 3.2 Výzkumné přístupy pro porozumění problému (Discovery)

Volba výzkumných metod v objevování (discovery) není otázkou preference, ale otázkou epistemické přiměřenosti: různé metody dávají odpovědi na různé typy otázek. Kvalitativní přístup je vhodný, když potřebujeme pochopit motivace, významy, mentální modely a kontextové faktory, zatímco kvantitativní přístup pomáhá odhadnout rozsah jevů, popsat rozložení v populaci a odhalit vzorce v chování. V praxi se nejvyšší kvality dosahuje triangulací, tedy kombinací více zdrojů a metod tak, aby se vzájemně doplňovaly a korigovaly slabiny jednotlivých přístupů.

Rychlý průzkum má smysl v rané orientaci, kdy potřebujeme rychle zmapovat prostor a rizika, ale jeho limitem je povrchnost; hluboký ponor je nezastupitelný, pokud je doména komplexní, citlivá nebo pokud následky špatného rozhodnutí budou nákladné. Zároveň je nutné rozlišit reprezentativnost a validitu: discovery často nepotřebuje statisticky reprezentativní vzorek, ale potřebuje validní vhled do mechanismů, které stojí za chováním. Tato věta však není „omluva“ pro libovolně slabý výzkum; znamená, že v kvalitativním výzkumu typicky neusilujeme o statistickou generalizaci četností na populaci, ale o analytickou generalizaci, tedy přenos vysvětlení, mechanismu nebo hypotézy do dalších situací, kde platí podobné podmínky. Jinými slovy, kvalitativní vzorek obvykle negarantuje, kolik procent uživatelů zažívá určitý jev, ale může velmi dobře vysvětlit, proč se jev děje, za jakých okolností vzniká, a jaké podmínky by musely být splněny, aby se změnil.

> **Definice:** Kvalitativní výzkum je přístup zaměřený na porozumění významům, motivacím a kontextu chování, typicky prostřednictvím rozhovorů, pozorování a interpretativní analýzy.

> **Definice:** Kvantitativní výzkum je přístup zaměřený na měření a statistický popis jevů, testování hypotéz a odhad velikosti efektů na základě numerických dat.

> **Definice:** Triangulace je strategie zvyšování důvěryhodnosti závěrů kombinováním více metod, zdrojů dat nebo perspektiv tak, aby se ověřila konzistence zjištění.

> **Definice:** Reprezentativnost je míra, v níž vzorek odpovídá cílové populaci v relevantních charakteristikách, což ovlivňuje možnost statistické generalizace.

> **Definice:** Validita je zastřešující pojem, jehož význam se liší podle kontextu: může jít o validitu měření (zda nástroj skutečně měří zamýšlený konstrukt), o interní validitu kauzálních tvrzení (zda je odůvodněné tvrdit příčinu a důsledek) nebo o validitu interpretace (zda kvalitativní závěry odpovídají datům a jsou obhajitelně vyvozené).

#### 3.2.1 Kvalitativní metody (pochopení potřeb, motivací, kontextu)

Kvalitativní metody jsou páteří porozumění problému, protože umožňují vidět realitu uživatele v její situovanosti. Polostrukturované rozhovory poskytují kombinaci srovnatelnosti a otevřenosti: výzkumník sleduje scénář, ale zároveň může jít do hloubky tam, kde se objeví významný moment. Kontextové dotazování a pozorování jsou obzvlášť cenné, protože odhalují rozdíl mezi tím, co lidé říkají, a tím, co skutečně dělají, a zachycují vliv prostředí, nástrojů a přerušení. Stínování a etnografické techniky rozšiřují perspektivu na rutiny, sociální normy a neartikulované strategie, jimiž lidé překonávají bariéry. Deníkové studie jsou vhodné pro procesy rozložené v čase, kdy jednorázový rozhovor nedokáže zachytit proměnlivost a kontextové spouštěče. Think aloud může být užitečný pro porozumění workflow a rozhodování, ale je třeba opatrnosti, protože verbalizace může chování ovlivnit a ne všechny kognitivní procesy jsou přístupné introspekci.

Ve všech těchto metodách je klíčové systematické zpracování dat, typicky skrze kódování a identifikaci témat. Právě zde se často láme kvalita: příliš brzké pojmenování témat může předčasně uzavřít interpretaci, míchání úrovní abstrakce vede k tomu, že vedle sebe stojí „konkrétní UI problém“ a „existenciální nejistota“ bez rozlišení, a confirmation bias může způsobit, že analýza „najde“ to, co tým očekával. V praxi pomáhá držet přísné oddělení mezi pozorováním, interpretací a implikací pro návrh, pracovat iterativně s kódováním a porovnávat případy, které hypotézu podporují i ty, které ji narušují. Pokud se analýza dělá týmově, je užitečné explicitně řešit intersubjektivní shodu v kódování, tedy dohodu o tom, jaký význam kódy nesou a proč; nejde o mechanické „stejné štítky“, ale o sdílené pochopení interpretace.

Saturace v kvalitativním výzkumu navíc není mechanické „počítání, kdy se opakují témata“. Závisí na šíři výzkumných otázek, heterogenitě vzorku, variabilitě kontextů a na tom, jaké rozhodnutí má výzkum podpořit; jiná míra saturace je přiměřená pro rychlou orientaci, jiná pro rizikovou doménu, kde je potřeba vysoká jistota o mechanismech.

> **Definice:** Saturace je stav, kdy další sběr kvalitativních dat přináší jen minimální nové informace vzhledem k výzkumným otázkám; její dosažení závisí mimo jiné na heterogenitě vzorku, rozsahu otázek a cíli rozhodnutí.

> **Definice:** Kódování dat je proces označování segmentů dat významovými štítky, které umožňují následnou analýzu a syntézu.

> **Definice:** Témata (themes) jsou opakující se významové vzorce napříč daty, které vyjadřují klíčové problémy, motivace či bariéry.

> **Příklad:** Při kontextovém dotazování v nemocniční ambulanci výzkumník zjistí, že sestry obcházejí systém tím, že si kritické informace zapisují na papír, protože software je pomalý a přerušuje práci. Rozhovor sám o sobě by mohl vést k tvrzení „systém je nepřehledný“, ale pozorování ukáže konkrétní mechanismus: časový tlak, přerušování a potřeba rychlé orientace v prioritách.

#### 3.2.2 Kvantitativní a behaviorální data (zjištění rozsahu a vzorců)

Kvantitativní data pomáhají určit, jak rozšířený problém je, zda se týká specifických skupin a jak se projevuje v čase. Dotazníky mohou rychle pokrýt širší vzorek a poskytnout srovnání mezi segmenty, ale jejich slabinou je závislost na formulaci otázek a na schopnosti respondentů správně sebereflektovat; z hlediska validity měření je proto klíčové, jak jsou otázky operacionalizované a zda skutečně měří zamýšlený konstrukt, nikoli jeho náhražku. Behaviorální data, jako jsou logy a produktová analytika, mají výhodu pozorování skutečného chování ve velkém měřítku, ale bez kvalitativního doplnění často nevíme, proč se chování děje. V prostředí analytiky je navíc třeba hlídat kvalitu evidence i technicky: změny v trackingu, rozdílné definice eventů, ztráty dat nebo selekce (například jen přihlášení uživatelé) mohou vytvářet zdánlivé trendy. I zde tedy platí, že validita není jen otázkou „správné statistiky“, ale i správné instrumentace a interpretace.

Funnel analýza pomáhá identifikovat místa odpadávání, kohorty odhalují rozdíly mezi uživateli podle času vstupu či charakteristik a trendové analýzy ukazují změny po zásahu. A/B testování může být užitečné i explorativně, například k porovnání dvou konkurenčních hypotéz, je však metodicky i prakticky nákladné, typicky vyžaduje existující provoz, dostatečný traffic a stabilní instrumentaci; proto bývá v raném discovery méně vhodné než kvalitativní metody a rychlé prototypové testy. Při interpretaci kvantitativních výsledků je nutné hlídat konfúzní proměnné (confounders), které mohou vytvářet zdánlivé vztahy, a také rozlišovat statistickou významnost od praktické relevance, protože i „signifikantní“ rozdíl může být v praxi zanedbatelný nebo naopak eticky problematický, pokud je dosažen manipulativní pobídkou.

> **Definice:** Funnel je model kroků, kterými uživatel prochází k cílové akci, přičemž na každém kroku může část uživatelů odpadnout.

> **Definice:** Kohorta je skupina uživatelů sdílející určitou charakteristiku, například datum registrace nebo zdroj akvizice, sledovaná v čase.

> **Definice:** Statistická významnost je pravděpodobnostní vyjádření, že pozorovaný rozdíl není náhodný při daných předpokladech testu, avšak sama o sobě neříká nic o velikosti a smysluplnosti efektu.

> **Definice:** Confounders jsou proměnné, které ovlivňují jak předpokládanou příčinu, tak důsledek, a mohou tím zkreslit interpretaci vztahů v datech.

> **Příklad:** Analytika ukazuje, že uživatelé na mobilu častěji opouštějí krok „ověření identity“. Kvalitativní rozhovory ale odhalí, že část uživatelů to dělá v MHD s nestabilním signálem a proces vyžaduje nahrání fotografie dokladu. Problém tedy není pouze „mobilní UI“, ale kombinace prostředí použití, technických nároků a požadavků procesu.

#### 3.2.3 Sekundární výzkum a doménové zdroje

Sekundární výzkum umožňuje rychle zmapovat doménu, terminologii, existující poznání a omezit riziko opakování již vyřešených otázek. Desk research zahrnuje akademické i průmyslové zdroje, interní dokumentaci, zákaznické stížnosti a historii změn produktu. Analýza konkurence a benchmarking pomáhají pochopit, jak různé organizace řeší podobné potřeby, ale je třeba vyhnout se slepému kopírování, protože rozdíly v kontextu mohou být zásadní. Heuristické hodnocení existujících řešení poskytuje rychlou diagnostiku z hlediska použitelnosti, avšak nenahrazuje porozumění potřebám a kontextu.

Regulace a standardy, včetně přístupnosti, představují často nevyjednatelná omezení, která musí být do rámování problému integrována, nikoli přidána až v závěru jako „compliance“. V českém kontextu je užitečné rozlišit, že norma (například ČSN/EN/ISO) je standard, který bývá formálně dobrovolný, a závazným se typicky stává tehdy, když na něj odkazuje legislativa, smlouva, výběrové řízení nebo interní politika organizace. Tato nuance je důležitá, protože pomáhá správně rámovat omezení: co je skutečně právně vyžadované, co je smluvně dohodnuté a co je „best practice“, která může být přiměřená, ale nemusí být univerzálně správná.

> **Definice:** Benchmarking je systematické srovnání vlastností, procesů či výsledků s referenčními řešeními s cílem identifikovat rozdíly a příležitosti ke zlepšení.

> **Definice:** Heuristiky jsou obecné zásady použitelnosti a interakční kvality, podle nichž lze expertně hodnotit návrh, například konzistence nebo viditelnost stavu systému.

> **Definice:** Norma je standard (například ČSN/EN/ISO), který může být formálně dobrovolný, ale závazným se typicky stává tehdy, když je vyžadován regulací, smlouvou nebo interní politikou.

> **Definice:** Best practice je osvědčený postup v dané oblasti, který se opírá o zkušenost a empirii, ale nemusí být univerzálně správný pro každý kontext.

### 3.3 Syntéza poznatků a převod dat na porozumění (Define)

Syntéza je mostem mezi empirickým sběrem dat a formulací problému, přičemž její kvalita rozhoduje o tom, zda tým získá skutečné porozumění, nebo pouze „hromadu poznámek“. Základním krokem je transformace surových dat do struktury, která umožňuje vidět vzorce: afinitní mapování a tematická analýza pomáhají shlukovat pozorování, výroky a situace podle významu. V této fázi je metodicky zásadní rozlišovat pozorování a interpretaci. Pozorování popisuje, co se stalo a v jakém kontextu, zatímco interpretace navrhuje, proč se to stalo a jaký mechanismus za tím stojí; smíšení obou rovin vede k tomu, že se domněnky tváří jako fakta.

Pro magisterskou úroveň je důležité umět přeložit obecné „dělejme syntézu“ do konkrétních kvalitativních postupů a rizik. Při tematické analýze a afinitním mapování se typicky chybuje v tom, že se témata pojmenovávají příliš brzy, že se do jednoho shluku míchají data různé úrovně abstrakce, nebo že se z viditelné „častosti“ automaticky vyvozuje důležitost, aniž by se zohlednil dopad a kontext. Kvalitu zvyšuje disciplinovaná práce s citacemi a evidencí, explicitní hledání kontrapříkladů, dokumentace rozhodnutí při slučování a přejmenovávání témat a průběžné ověřování, zda témata skutečně odpovídají výzkumným otázkám. Praktickým kritériem je i to, zda je z témat možné odvodit akceschopné designové implikace bez skoků v logice.

Syntéza se dále opírá o identifikaci potřeb, pain points, motivací a překážek a často je užitečné pracovat s rámcem jobs-to-be-done, protože posouvá pozornost od „uživatelů jako demografických kategorií“ k „uživatelům jako aktérům, kteří se snaží něco vykonat“.

> **Definice:** Afinitní diagram je technika, při níž se jednotlivé poznatky zapisují jako samostatné jednotky a následně se shlukují podle podobnosti a významu, aby se odhalily vzorce a témata.

> **Definice:** Pain point je konkrétní místo v procesu nebo zkušenosti, kde uživatel naráží na překážku, frustraci, riziko chyby nebo zbytečné náklady.

> **Definice:** Jobs-to-be-done (JTBD) je rámec popisující, jaký „úkol“ se uživatel snaží v dané situaci vykonat a jaké má funkční i emoční kritérium úspěchu.

> **Příklad:** Pozorování „uživatel třikrát kontroluje e-mail, zda přišlo potvrzení“ se v syntéze může proměnit v insight „uživatel nevěří, že systém jeho akci zaznamenal, protože zpětná vazba je opožděná a nejednoznačná; nejistota zvyšuje stres a vede k opakovaným kontrolám“. Z tohoto insightu již lze odvodit návrhový princip transparentnosti stavu.

#### 3.3.1 Formulace problému a designových zadání

Formulace problému je disciplinovaná redukce složitosti: z bohatého pole poznatků vybíráme takové vymezení, které je pravdivé vzhledem k evidenci, sdílené mezi aktéry a současně produktivní pro návrh. Kvalitní problem statement typicky explicitně uvádí, pro koho problém platí, v jaké situaci se objevuje, jak se projevuje a jaký dopad má. Součástí definování by měly být cíle a kritéria úspěchu, která umožní pozdější ověření, zda návrh skutečně pomohl, a také vymezení scope, aby se tým nenechal vtáhnout do nekontrolovaného rozšiřování zadání. Převod do otázek How Might We je pak klíčovým krokem, protože otevírá prostor k řešením, ale zároveň udržuje vazbu na definovaný problém; kvalitní HMW otázka je dostatečně konkrétní, aby se týkala skutečného pain pointu, a dostatečně otevřená, aby nepředepisovala řešení.

> **Definice:** Problem statement je strukturovaná formulace problému, která shrnuje cílového uživatele, kontext, bariéru a dopad, a slouží jako společné východisko pro návrh.

> **Definice:** Kritéria úspěchu jsou měřitelné nebo pozorovatelné podmínky, podle nichž lze posoudit, zda návrh dosáhl zamýšleného efektu.

> **Definice:** HMW (How Might We) je formulace návrhové otázky, která převádí definovaný problém do otevřené výzvy k hledání řešení bez předčasného uzavření prostoru možností.

> **Příklad:** Místo vágního „uživatelé mají problém s registrací“ lze formulovat problem statement jako „noví uživatelé, kteří se registrují na mobilu v situaci časového tlaku, často opouštějí ověření identity, protože proces vyžaduje přepínání mezi aplikacemi a opakované nahrávání fotek; to vede k frustraci a k nedokončení aktivace“. Z toho přirozeně plyne HMW otázka „Jak bychom mohli snížit nejistotu a počet kroků v ověření identity na mobilu, aniž bychom porušili regulatorní požadavky?“.

#### 3.3.2 Prioritizace problémů

V reálných projektech je téměř vždy více relevantních problémů, než lze v daném čase a rozpočtu řešit, a proto je prioritizace nevyhnutelná. Smyslem prioritizace není „vybrat to, co se líbí managementu“, ale transparentně rozhodnout na základě dopadu, náročnosti, rizik a nejistot. Přístupy jako impact/effort pomáhají rychle strukturovat diskusi, zatímco rámce typu RICE přidávají rozměr dosahu a míry jistoty. MoSCoW je užitečné zejména v okamžiku, kdy je třeba dohodnout minimální rozsah dodávky a oddělit nutné od volitelného. Důležitým doplňkem je decision log, protože umožňuje zpětně dohledat, proč bylo rozhodnuto určitým způsobem, na jakých předpokladech a s jakými riziky, což je zásadní pro učení a pro pozdější revize, pokud se ukáže, že některý předpoklad neplatil. Prioritizace je zároveň proces vyjednávání se stakeholdery, v němž se střetávají obchodní cíle, technické možnosti a potřeby uživatelů, a kvalita argumentace stojí na stopě k evidenci.

> **Definice:** Decision log je dokumentace klíčových rozhodnutí, jejich důvodů, použitých dat, zvažovaných alternativ a rizik.

### 3.4 Modelování uživatelského chování (behaviorální modely)

Behaviorální modely slouží jako kognitivní artefakty, které překládají komplexní realitu do sdílené reprezentace, s níž může tým pracovat. Nejde o „hezké dokumenty“, ale o nástroje myšlení a komunikace: umožňují konsolidovat poznatky, odhalit mezery v porozumění a udržet fokus na cílech a kontextu uživatele. Modely mají však vždy omezení, protože zjednodušují; jejich užitečnost je přímo úměrná tomu, jak dobře jsou ukotveny v datech a jak aktivně jsou udržovány aktuální. Pokud se z nich stane statický artefakt bez vazby na rozhodování, rychle degradují na formální povinnost.

Pro zkouškový i praktický kontext je užitečné umět pojmenovat i rizika reifikace, tedy situaci, kdy tým začne personu nebo mapu cesty brát jako „realitu“ místo jako hypotetický model založený na datech. Typickým anti-patternem je demografická persona bez cílů a chování, která nemá rozhodovací sílu, nebo journey mapa bez datové stopy, která spíše kopíruje interní procesní představu než skutečnou zkušenost uživatele. Dobrá persona je naopak poznatelná tím, že je dohledatelně ukotvená v evidenci, že obsahuje cíle, motivace, chování a kontext, a že při návrhové debatě skutečně pomáhá volit mezi alternativami. Stejně tak dobrá mapa cesty uživatele není ilustrace, ale argument: je jasné, z jakých dat vychází, jaké předpoklady obsahuje a jaký dopad má na rozhodnutí.

V praxi se často kombinuje více modelů, protože každý zachycuje jiný aspekt: mentální model vysvětluje, jak uživatel chápe doménu, persona shrnuje archetypální cíle a chování, scénáře a use cases popisují situace a požadavky, mapa cesty uživatele (user journey map) ukazuje zkušenost v čase a service blueprint propojuje uživatelskou zkušenost s organizačním zázemím. Pro terminologickou čistotu je vhodné chápat „mapu cesty uživatele“ jako obecný HCD artefakt zaměřený na zkušenost a kontext, zatímco „customer journey“ se v marketingu často pojí s akvizičními a retenčními fázemi; v praxi se tyto pojmy překrývají, ale u státnic je dobré jasně říct, jaký typ mapy používáte a proč.

> **Definice:** Mentální model je vnitřní reprezentace toho, jak uživatel rozumí systému nebo doméně, která ovlivňuje očekávání, rozhodování a interpretaci zpětné vazby.

> **Definice:** Persona je daty podložený archetyp uživatele reprezentující cíle, motivace, chování a kontext, používaný k řízení návrhových rozhodnutí.

> **Definice:** Mapa cesty uživatele (user journey map) je mapování uživatelské zkušenosti napříč časem a touchpointy, včetně emocí, očekávání a pain points.

#### 3.4.1 Persony (Cooper) a archetypy

V tradici Coopera jsou persony především nástrojem návrhového rozhodování: mají pomoci týmu volit mezi alternativami podle toho, jak dobře podporují cíle primární persony, nikoli podle toho, co je populární nebo technologicky zajímavé. Důležitým principem je rozlišení primární a sekundární persony, protože není realistické optimalizovat produkt pro všechny stejně, a proto je nutné explicitně pojmenovat, pro koho je řešení primárně. Persona by měla obsahovat cíle, chování, kontext, frustrace a relevantní omezení, a zároveň být dostatečně konkrétní, aby vedla k rozhodnutí, ale ne tak detailní, aby vytvářela iluzi přesnosti. Validace person spočívá v jejich ukotvení v datech, v konzistenci s pozorovaným chováním a v jejich praktické použitelnosti při rozhodování. V některých situacích může být vhodné persony nepoužít, například když je cílová skupina příliš homogenní nebo když se tým opírá o jiné modely, které lépe zachycují systémové vztahy. Anti-persona pak pomáhá explicitně vymezit uživatele, pro něž řešení není určeno, což může být důležité pro řízení scope a očekávání stakeholderů.

> **Příklad:** V interním systému pro schvalování faktur může být primární personou účetní, která potřebuje rychle a bezchybně zpracovat vysoký objem položek, zatímco sekundární personou je manažer, který schvaluje menší množství, ale vyžaduje přehled a dohledatelnost. Návrh se pak rozhoduje podle toho, zda nezhorší průchodnost práce účetní, i kdyby to znamenalo menší komfort v okrajových funkcích pro manažera.

#### 3.4.2 Scénáře, use cases a task analysis

Scénáře zachycují uživatele „v životě“ a tím umožňují vidět, jak do používání vstupují motivace, přerušení, sociální interakce nebo stres. Use cases jsou naopak užitečné pro formalizaci funkčních toků a pro komunikaci s vývojem, protože jasně vymezují aktéry, předpoklady a alternativní průběhy. Task analysis, zejména ve formě hierarchického rozkladu úloh, pak pomáhá odhalit kritické kroky, místa s vysokou chybovostí a zbytečné kognitivní nároky. V porozumění problému je důležité, že analýza úloh není pouze popisem „jak to je“, ale nástrojem k pochopení, které kroky jsou pro uživatele smysluplné a které jsou pouze administrativní zátěží, často způsobenou interními procesy organizace.

#### 3.4.3 Mapa cesty uživatele a service blueprint

Mapa cesty uživatele poskytuje end-to-end perspektivu, která je v HCD zásadní, protože uživatel neprožívá „obrazovky“, ale kontinuální zkušenost napříč touchpointy. Díky tomu lze identifikovat momenty pravdy, tedy situace, kdy se rozhoduje o důvěře, pokračování nebo opuštění procesu, a zároveň lze vidět, jak se akumulují drobné frustrace. Service blueprint doplňuje mapu cesty tím, že propojuje frontstage, tedy to, co uživatel vidí, s backstage procesy, které zkušenost umožňují nebo sabotují. Tím se porozumění problému posouvá od „navrhněme lepší UI“ k „změňme proces a odpovědnosti tak, aby se zlepšení vůbec mohlo projevit“. Blueprint je proto klíčový v service designu a ve veřejných službách, kde je uživatelská zkušenost často determinována organizačními vazbami, legislativou a kapacitami.

> **Příklad:** Mapa cesty eGovernment služby může ukázat, že největší frustrace nevzniká při vyplnění formuláře, ale v čekání na výsledek bez informace o stavu. Blueprint následně odhalí, že stav nelze zobrazit, protože interní systémy nejsou propojené a odpovědnost za aktualizaci je rozptýlená mezi odděleními. Problém se pak rámuje jako systémový a procesní, nikoli pouze produktový.

### 3.5 Vizualizační a kreativní techniky pro porozumění (nikoli jen pro ideaci)

Vizualizace není v HCD ornamentem, ale způsobem, jak zviditelnit strukturu problému a vyjednat společné porozumění. Myšlenkové a konceptuální mapy pomáhají pojmenovat pojmy a vztahy, diagramy příčin a důsledků umožňují hledat možné mechanismy a systémové mapy ukazují, jak se problémy udržují skrze zpětné vazby v organizaci nebo v chování uživatelů. Techniky jako rich pictures jsou užitečné v rané syntéze, kdy je situace nejasná a vyžaduje zachytit mnoho perspektiv najednou. Rozlišující hranicí je účel: pokud vizualizace slouží ke zpřesnění porozumění a k syntéze dat, jsme ve fázi definování; pokud primárně generuje nové nápady bez opory v evidenci, posouvá se k ideaci. V praxi se obě roviny mohou prolínat, ale je metodicky důležité vědět, ve které právě jsme, aby se brainstormované hypotézy nezaměnily za poznatky.

### 3.6 Přenos porozumění do ideace a návrhu

Dobře formulovaný problém funguje jako „designový kompas“: omezuje prostor ideace na relevantní směry, pomáhá odmítat lákavé, ale irelevantní nápady a umožňuje vytvářet návrhové principy, které drží konzistenci řešení napříč částmi produktu či služby. Přenos porozumění do návrhu typicky probíhá skrze formulaci hypotéz a návrhových směrů, které jsou explicitně navázány na insighty a kritéria úspěchu. Hypotéza v tomto kontextu propojuje návrh s očekávaným dopadem, a tím umožňuje plánovat testování a validaci.

Prakticky pomáhá držet hypotézy ve srozumitelném formátu, který podporuje dohledatelnost, například ve tvaru: pokud uděláme změnu X pro uživatele Y v situaci Z, povede to k chování A, což zlepší ukazatel B, protože mechanismus C. Takový zápis nutí tým explicitně pojmenovat předpoklady, kontext a očekávaný mechanismus, a tím snižuje riziko, že se z návrhu stane jen preference bez evidence. Ze stejné logiky lze plynule odvodit i návrhové principy: pokud insight ukazuje, že uživatelé zažívají nejistotu kvůli nejednoznačnému stavu, může se to přeložit do principu „Systém musí v každém kroku jasně signalizovat stav a další očekávaný vývoj“, což následně ovlivní konkrétní rozhodnutí, například že upřednostníme průběžný stavový indikátor a potvrzení akce před přidáváním dalších funkcí. Součástí profesionální praxe jsou také stop-kritéria, tedy signály, kdy se má tým vrátit do výzkumu, například když testy opakovaně selhávají, když se objevují nové segmenty uživatelů, nebo když se ukáže, že původní problémové rámování neodpovídá realitě. Tím se HCD udržuje jako iterativní cyklus učení, nikoli lineární „pipeline“ dokumentů.

## Aplikace

Porozumění problému se v praxi promítá do různých typů projektů, od návrhu digitálních produktů přes service design až po interní nástroje či veřejné služby. V digitálních produktech je často největší výzvou propojit kvalitativní porozumění s analytikou, aby se tým nenechal svést k optimalizaci dílčích metrik na úkor celkové zkušenosti, a současně aby byla analytická evidence skutečně validní, tedy založená na správně definovaných událostech, stabilním trackingu a interpretaci bez záměny korelace za kauzalitu. V service designu je naopak klíčové mapování end-to-end procesů a práce s organizační realitou, protože uživatelské pain points bývají důsledkem interních rozhraní mezi odděleními. U interních nástrojů se porozumění problému často odehrává v prostředí vysoké doménové komplexity a specifické terminologie, kde je nutné respektovat expertizu uživatelů a současně odhalovat, jak se práce skutečně dělá, včetně obcházení systému. Ve veřejných službách přistupují navíc právní a etické požadavky, nerovný přístup k technologiím a potřeba inkluzivního designu, kde může dávat smysl i participativní design a co-design jako způsob poznání i jako zdroj legitimity rozhodnutí v prostředí více aktérů. V agilním prostředí se porozumění problému typicky realizuje jako kontinuální discovery paralelně s delivery, což vyžaduje schopnost škálovat výzkum v týmu a udržovat sdílené artefakty aktuální.

### 4.1 Praktický workflow „od dat k definovanému problému“

Praktický postup začíná výzkumným plánem, který vychází z cíle projektu a z nejistot, jež je potřeba snížit. V této fázi se formulují výzkumné otázky, volí se metody a stanoví se protokol, aby sběr dat probíhal konzistentně a eticky. Aby výzkumná otázka nebyla jen „téma“, je užitečné ji chápat jako závazek k tomu, co bude možné zodpovědět evidencí. Deskriptivní otázky typicky mapují, jak se něco děje a v jakých situacích, explanační otázky míří na mechanismus „proč“, a evaluační otázky ověřují, zda určitý návrh nebo změna vede k zamýšlenému efektu. Z těchto otázek se následně stává operacionalizace: explanační otázka o důvěře v systém se například musí přeložit do pozorovatelných indikátorů, jako je opakované kontrolování stavu, dotazy na podporu, nebo verbální projevy nejistoty v rozhovoru, a evaluační otázka se překládá do testovatelných hypotéz a metrik, které dávají smysl vzhledem k mechanismu.

Následuje sběr dat, během něhož se průběžně kontroluje, zda data skutečně odpovídají výzkumným otázkám, a zda se neukazuje potřeba upravit rekrutaci či zaměření. Poté přichází syntéza, kde se data převádějí do témat a insightů a kde se explicitně oddělují pozorování od interpretací. Syntetizované poznatky se přetaví do problem statement a do jedné či více HMW otázek, které vymezí prostor ideace. Následně tým formuluje první hypotézy a návrhové směry, přičemž každá hypotéza by měla být dohledatelně navázána na konkrétní insight. Teprve poté se volí metriky úspěchu a plán testování, protože metrika bez jasné hypotézy a bez kontextu se snadno stane proxy, která vede k chybnému optimalizačnímu chování. Celý proces je veden jako evidence-based design, kde argumentace stojí na datech a kde jsou předpoklady explicitně zaznamenány.

> **Příklad:** Tým řeší pokles využívání funkce „uložit na později“. Workflow může ukázat, že nejprve je třeba ověřit, zda pokles souvisí se změnou rozhraní nebo se změnou skladby uživatelů, poté kvalitativně pochopit, v jakých situacích lidé tuto funkci používají, syntetizovat, že jádrem je potřeba připomenutí v čase, a teprve potom formulovat HMW otázku zaměřenou na návrat do úlohy, nikoli na samotné tlačítko.

### 4.2 Artefakty a výstupy, které se očekávají u státnic

U státnic se typicky očekává, že student dokáže obhájit nejen výsledné artefakty, ale především logiku, která k nim vedla, a dohledatelnost od dat k rozhodnutí. To zahrnuje schopnost formulovat výzkumné otázky tak, aby byly skutečně zodpověditelné, zdůvodnit volbu metod vzhledem k typu nejistoty a k omezením projektu, prezentovat insighty tak, aby nebyly pouhým přepisem citací, ale vysvětlením mechanismu, a následně ukázat, jak se tyto insighty promítly do problem statement, HMW otázek, prioritizace a návrhových principů. Důležitá je také schopnost reflektovat rizika, předpoklady a etické aspekty, protože profesionální porozumění problému je vždy podmíněno nejistotou a odpovědností.

### 4.3 Napojení na použitelnost a přístupnost

Porozumění problému zásadně ovlivňuje, jak se navrhují testovací scénáře, úkoly a kritéria úspěchu v použitelnostním testování. Pokud je problém správně vymezen, test neověřuje pouze „zda to jde používat“, ale zda návrh podporuje konkrétní cíle a eliminuje identifikované bariéry v reálném kontextu. Přístupnost se v tomto smyslu nemá chápat jako dodatečná kontrola, ale jako součást kontextu použití a jako sada požadavků, které ovlivňují rámování problému už od počátku. Pokud například výzkum ukáže, že produkt používají i lidé se zrakovým omezením nebo v situacích nízkého kontrastu, stává se přístupnost součástí definice problému a následně i kritérií úspěchu. V profesionální praxi to znamená, že se WCAG a další standardy propojují s empirickým poznáním uživatelů, nikoli že stojí mimo něj.

## Výzvy a omezení

Metody porozumění problému mají limity a jejich použití přináší rizika, která je třeba aktivně řídit. Malý kvalitativní vzorek poskytuje hloubku, ale svádí k nepřiměřené generalizaci; naopak velká kvantitativní data mohou vytvářet falešnou jistotu a podporovat interpretace bez porozumění mechanismům. Zkreslení výzkumníka se může projevit v moderování rozhovoru, ve výběru citací i ve způsobu, jakým se tvoří témata, a selection bias může vést k tomu, že do výzkumu přizveme jen „snadno dostupné“ uživatele. Dalším častým problémem jsou vymyšlené persony, které jsou pouhou projekcí přání týmu, a overfitting insightů, kdy se z jedné výrazné historky udělá obecné pravidlo bez opory v širších datech. V praxi se také opakovaně objevuje konflikt obchodních a uživatelských cílů, který nelze zamést pod koberec: profesionální porozumění problému znamená tento konflikt pojmenovat a hledat řešení, která jsou obhajitelná vzhledem k hodnotě, rizikům i etice. Časový tlak pak často vede k přeskočení syntézy a k předčasnému uzavření problému, což se následně vrací jako nákladná přepracování.

### 5.1 Kvalita dat a spolehlivost závěrů

Posuzování důvěryhodnosti zjištění vyžaduje disciplínu v dokumentaci i v analytickém procesu. V kvalitativním výzkumu se vedle pojmů jako validita a reliabilita často pracuje s kritérii důvěryhodnosti, která lépe vystihují interpretativní povahu práce. Credibility odpovídá tomu, zda jsou závěry přesvědčivě podloženy daty a dávají smysl vzhledem ke kontextu; dependability se týká konzistence postupu v čase, tedy zda je jasné, jak analýza probíhala a co by se stalo při její opakované aplikaci na srovnatelná data; confirmability míří na to, zda lze dohledat, že závěry nevznikly jako projekce přání, ale jako obhajitelná interpretace dat; a transferability odpovídá tomu, do jaké míry lze mechanismus a závěry přenášet do podobných kontextů, pokud jsou explicitně popsány podmínky.

Audit trail, tedy stopa toho, jak se data sbírala, kódovala a syntetizovala, umožňuje zpětně kontrolovat, zda závěry nejsou arbitrární. Triangulace pomáhá ověřit konzistenci z více úhlů a peer review, tedy konzultace analýzy s dalšími členy týmu, snižuje riziko individuálního zkreslení. Member checking může být užitečný pro ověření, zda interpretace dává účastníkům smysl, i když je třeba jej používat uvážlivě, protože účastníci nemusí mít odstup od vlastního chování nebo mohou být ovlivněni sociální žádoucností. Důležitým profesním úsudkem je rozhodnutí „kdy máme dost“, které se neřídí pouze počtem rozhovorů, ale stavem saturace, stabilitou témat a mírou zbylé nejistoty vzhledem k rozhodnutí, které má být učiněno.

V kvantitativním výzkumu a produktové analytice se kvalita často láme jinde: na validitě instrumentace, tedy zda metriky a eventy zachycují to, co mají, a na interní validitě kauzálních závěrů, tedy zda je rozdíl skutečně způsoben intervencí, nikoli confoundery nebo změnou ve složení uživatelů. Pro státnice je proto užitečné umět říct, zda mluvíte o validitě měření, validitě kauzality, nebo validitě interpretace, a proč je to v dané situaci relevantní.

### 5.2 Komunikace a facilitace v týmu

Porozumění problému je kolektivní výsledek a vyžaduje facilitaci, protože týmové porozumění nevzniká automaticky z individuálních poznatků. Workshopové formy syntézy, například společné afinitní mapování, podporují alignment, protože nutí tým explicitně pojmenovat významy a dohodnout se na interpretacích. Facilitace konfliktů se stává klíčovou ve chvíli, kdy se střetnou perspektivy designu, vývoje, obchodu a provozu, nebo když stakeholder přichází se silným solution bias. V této situaci pomáhá stakeholder mapping a průběžná dokumentace rozhodnutí, protože snižují riziko, že se diskuse bude točit v kruhu a že se ztratí dohledatelnost mezi evidencí a volbou směru. U komplexních služeb může být součástí této práce i participativní přístup, kdy jsou uživatelé a front-line pracovníci přizváni k mapování problémového prostoru, protože jejich perspektiva často odhalí bariéry, které by čistě „externí“ výzkum nebo interní workshop nepostihl.

### 5.3 Přenos poznatků do rozhodnutí (od insightu k dopadu)

Klíčovým momentem je přechod do vrstvy „So what?“, tedy explicitní překlad insightu do návrhového požadavku, principu nebo hypotézy. Insight bez tohoto překladu zůstává zajímavou informací, ale nevytváří změnu. Návrhový požadavek by měl být formulován tak, aby byl ověřitelný a aby vycházel z definovaného problému, nikoli z přání řešení. Měření dopadu pak musí respektovat kontext a logiku intervence: KPI nebo OKR mají smysl pouze tehdy, když je jasné, jaké leading indikátory signalizují, že se systém posouvá správným směrem, a jaké lagging indikátory potvrdí dlouhodobý efekt. Tím se snižuje riziko optimalizace proxy metrik, které mohou krátkodobě vypadat dobře, ale dlouhodobě zhoršují zkušenost nebo vytvářejí eticky problematické pobídky.

## Související témata

Na kapitolu o přístupech k porozumění problému přirozeně navazují témata procesního rámování v Double Diamond a v designovém myšlení, detailní metodika primárního výzkumu v UX/HCD včetně rozhovorů, pozorování a dotazníků, syntéza poznatků a formulace HMW, kreativní techniky ideace, vizualizační techniky pro mapování problémového prostoru, modelování uživatelského chování prostřednictvím person, mentálních modelů, scénářů a mapy cesty uživatele, prototypování a testování, použitelnost a přístupnost včetně heuristik, uživatelského testování a standardu WCAG, designové rozhodování a prioritizace a konečně etika výzkumu, práce s daty a inkluzivní design jako průřezové kompetence.

## Závěr

Porozumění problému v HCD je rozhodující fáze, která určuje, zda bude následná ideace řešit příčiny, nebo pouze symptomy. V praxi stojí na promyšlené kombinaci kvalitativních, kvantitativních a sekundárních zdrojů, na disciplinované syntéze od pozorování k insightům a na přesné formulaci problem statement a HMW otázek, které dávají ideaci směr. Kvalitní práce zde znamená nejen „zvolit metody“, ale umět obhájit, jakým typem generalizace závěry stojí, jaká kritéria důvěryhodnosti jsou přiměřená kvalitativní analýze a jak rozlišujeme validitu měření, kauzality a interpretace. Behaviorální modely a vizualizační techniky slouží jako sdílené reprezentace, jež umožňují týmu komunikovat komplexitu a rozhodovat transparentně, pokud jsou ukotvené v datech a nejsou reifikované jako „definitivní pravda“. Etika a inkluze pak zajišťují, že porozumění lidem nevede ke škodám ani k vylučování a že se opírá o odpovědné nakládání s daty včetně institucionálních požadavků. V konečném důsledku je kvalita návrhu funkcí kvality porozumění: čím lépe je problém vymezen, tím efektivněji lze navrhovat, ověřovat hypotézy a dosahovat dopadů, které jsou obhajitelné jak z hlediska uživatelů, tak z hlediska organizace.
