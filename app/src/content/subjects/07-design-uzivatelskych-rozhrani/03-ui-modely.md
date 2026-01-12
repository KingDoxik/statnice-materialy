---
title: "UI modely (Fitts's law, Hick's law, GOMS, Keystroke-level model)"
subject: "Design uzivatelskych rozhrani"
subjectSlug: "07-design-uzivatelskych-rozhrani"
order: 3
---
## Úvod

Tato kapitola podává přehled nejpoužívanějších prediktivních a analytických modelů v designu uživatelských rozhraní a v oboru HCI, konkrétně Fittsova zákona, Hickova zákona (včetně zobecnění Hick–Hyman), rodiny modelů GOMS a Keystroke-Level Modelu (KLM). Spojuje je společný cíl: umožnit návrháři odhadovat výkon uživatele a odvozovat návrhová rozhodnutí ještě před tím, než je k dispozici plnohodnotný produkt nebo rozsáhlé uživatelské testování. V praxi to znamená, že modely lze využít k porovnání variant rozhraní, k identifikaci zbytečných kroků v pracovním postupu i k racionalizaci diskuse v týmu, protože poskytují oporu v kvantitativních argumentech namísto čisté intuice. Současně je dobré držet v hlavě, že tyto modely typicky predikují především čas a strukturu interakce; chybovost a selhání zachycují spíše nepřímo (například přes „efektivní šířku“ u Fittse) a pro systematickou analýzu chyb se často používají jiné rámce.

> **Definice:** HCI (Human–Computer Interaction) je interdisciplinární obor zkoumající interakci lidí s výpočetními systémy se záměrem navrhovat rozhraní, která jsou efektivní, bezpečná, srozumitelná a přiměřená lidským kognitivním i motorickým schopnostem.

> **Definice:** Usability (použitelnost) je míra, v níž mohou konkrétní uživatelé v konkrétním kontextu použití dosahovat stanovených cílů efektivně, účinně a se spokojeností.

> **Definice:** Prediktivní model je formální popis, který umožňuje předpovědět hodnoty pozorovatelných metrik, typicky času provedení úlohy nebo pravděpodobnosti chyb, na základě vlastností úkolu, uživatele a rozhraní.

> **Definice:** Čas provedení úlohy je výkonnostní metrika vyjadřující dobu potřebnou k dokončení definované úlohy včetně interakcí a případných latencí systému.

> **Definice:** Kognitivní zátěž označuje nároky kladené na pozornost, pracovní paměť a rozhodovací procesy uživatele během interakce.

> **Definice:** Trade-off je nevyhnutelná výměna mezi dvěma (či více) cíli návrhu, například mezi rychlostí a přesností nebo mezi jednoduchostí rozhraní a dostupností pokročilých funkcí.

V dalším textu bude patrné, že jednotlivé modely pokrývají odlišné vrstvy interakce: Fittsův zákon se soustředí na motoriku a míření, Hickův zákon na rozhodování mezi možnostmi a GOMS/KLM na sekvenční strukturu úloh. Jejich síla spočívá nejen v samostatném použití, ale i v kombinování při analýze reálných scénářů, kde se rozhodování, vizuální vyhledávání a motorická akce typicky střídají.

## Kontext

UI modely se historicky rozvíjely v prostředí ergonomie, kognitivní psychologie a inženýrsky orientovaného přístupu k použitelnosti, který později vešel do širšího povědomí mimo jiné díky tradici usability engineering. V metodologickém rámci návrhu rozhraní představují modely jednu z cest analytické evaluace: umožňují hodnotit návrh bez přímého sběru dat od uživatelů, a to buď v raných fázích návrhu, nebo jako doplněk empirických metod. Je užitečné si uvědomit, že tento přístup nepopírá význam testování; naopak nabízí způsob, jak testování lépe zaměřit, rychleji iterovat a v některých případech předběžně odhadnout, zda má varianta vůbec šanci být konkurenceschopná z hlediska efektivity.

> **Definice:** Analytická evaluace je posouzení použitelnosti založené na expertním rozboru, modelech a pravidlech bez přímého pozorování uživatelů.

> **Definice:** Empirická evaluace je posouzení použitelnosti založené na datech získaných od uživatelů, typicky pomocí uživatelského testování, experimentů nebo analýzy telemetrie.

> **Definice:** Výkonnostní metriky jsou kvantitativní ukazatele výkonu, nejčastěji čas na úkol a chybovost, případně počet kroků nebo míra nutných korekcí.

> **Definice:** ISO 9241-11 vymezuje použitelnost skrze efektivitu, účinnost a spokojenost v konkrétním kontextu použití, čímž zdůrazňuje závislost metrik na uživateli, úloze, zařízení a prostředí.

> **Definice:** Heuristiky použitelnosti jsou obecné zásady pro identifikaci problémů v rozhraní, typicky používané při expertních inspekcích.

Vedle inženýrského rámce se UI modely dobře doplňují s návrhovými patterny. Patterny popisují osvědčené formy řešení opakujících se problémů v rozhraní, zatímco modely umožňují v konkrétním kontextu odhadnout, jak se pattern promítne do času, kognitivní zátěže nebo chybovosti. Tím se z návrhových pravidel stává evidence-based rozhodování, které je obhajitelné i v mezioborových týmech, kde se střetává produktová strategie, vývojová omezení a potřeby uživatelů.

### Zařazení v procesu návrhu (Design workflow)

V iterativním designu se modely přirozeně vážou na fáze, kdy existují alternativy informační architektury, layoutu nebo interakčních toků a je potřeba je rychle porovnat. V této situaci lze využít prototyp, ať už nízké nebo vysoké věrnosti, jako artefakt, z nějž se „čtou“ parametry pro odhad, například vzdálenosti a velikosti cílů pro Fittsův zákon, entropie relevantních voleb pro Hick–Hymanův zákon nebo přesná sekvence kroků pro KLM. V praxi bývají modely ukotveny v design systému, protože standardizované komponenty s definovanými aktivními plochami (hit areas), typografií a chováním zvyšují konzistenci a tím i platnost odhadů napříč produktem.

> **Definice:** Iterativní design je postup založený na opakovaných cyklech návrhu, evaluace a úprav, jehož cílem je postupně snižovat rizika a zvyšovat kvalitu řešení.

> **Definice:** Prototyp je reprezentace budoucího rozhraní určená k ověřování hypotéz, přičemž low fidelity prototyp preferuje rychlost a konceptuální validaci, zatímco high fidelity prototyp je blíže finálnímu vzhledu a chování.

> **Definice:** Design systém je soubor pravidel, komponent, tokenů a procesů, který zajišťuje konzistenci návrhu a usnadňuje škálování napříč týmy a platformami.

### Typy úloh a kontext použití

Aby byly UI modely aplikovatelné, je nutné mít jasno v tom, jaký typ úlohy analyzujeme a jaký kontext použití předpokládáme. Výběrové úlohy jsou charakterizovány volbou z možností, typicky v menu, seznamu nebo ve formuláři, a pro jejich rozhodovací složku je relevantní Hickův zákon, respektive Hick–Hymanův zákon, pokud jsou volby nerovnoměrně pravděpodobné. Manipulační úlohy staví do popředí rychlé a přesné míření na cíle, což je doména Fittsova zákona, ať už jde o kurzorové ukázání, nebo dotyk prstem. Sekvenční úlohy, například vyplnění objednávky nebo založení projektu v aplikaci, mají strukturu kroků a podkroků a jejich efektivitu je možné analyzovat pomocí GOMS či praktičtěji pomocí KLM. V reálných scénářích se tyto typy prolínají, a proto je užitečné uvažovat o kritické cestě úlohy, tedy o té sekvenci akcí, která určuje minimální čas potřebný k dokončení cíle při ideálním průchodu.

> **Definice:** Task analysis (analýza úloh) je systematický rozbor úloh uživatele s cílem pochopit cíle, kroky, rozhodovací body a kontext, ve kterém se interakce odehrává.

> **Definice:** Scénář je narativní popis situace použití, který propojuje uživatele, jeho cíle, prostředí a očekávaný průběh interakce.

> **Definice:** Kritická cesta (critical path) je nejkratší možná sekvence nezbytných kroků vedoucích k dokončení úlohy, která určuje dolní mez času provedení při absenci chyb a odboček.

> **Příklad:** Při „odeslání platby“ v bankovní aplikaci se uživatel nejprve rozhoduje, kterou šablonu nebo příjemce zvolit (výběrová úloha), následně míří na konkrétní pole a tlačítka (manipulační úloha) a celý proces tvoří sekvence kroků včetně potvrzení a případného ověření (sekvenční úloha). Praktická analýza proto často kombinuje Hick–Hymanův, Fittsův i KLM přístup.

## Hlavní pojmy

### 1) Fittsův zákon (Fitts’s law)

Fittsův zákon patří k nejrobustnějším kvantitativním pravidlům v HCI, protože se opírá o opakovaně potvrzený vztah mezi rychlostí a přesností cíleného pohybu. V kontextu uživatelských rozhraní modeluje čas potřebný k rychlému ukázání na cíl jako funkci vzdálenosti k cíli a jeho velikosti. Intuitivně říká, že čím je cíl dál a čím je menší, tím déle trvá jej spolehlivě zasáhnout. V UI se to promítá do návrhu tlačítek, ikon, položek menu, posuvníků i do prostorového uspořádání akcí, přičemž model je relevantní jak pro myš, touchpad a stylus, tak pro dotyk prstem, byť s odlišnými parametry a variabilitou.

> **Definice:** Amplituda neboli vzdálenost (D) je vzdálenost od počáteční pozice ukazatele či prstu k cíli, obvykle měřená ve směru pohybu.

> **Definice:** Šířka cíle (W) je efektivní velikost cílové oblasti v ose pohybu, tedy rozměr, který „odpouští“ nepřesnost při míření.

> **Definice:** Index obtížnosti (ID) je míra náročnosti míření vyjádřená logaritmickou funkcí poměru vzdálenosti a velikosti cíle; vyšší ID znamená pomalejší a obtížnější akci.

> **Definice:** Speed–accuracy trade-off vyjadřuje, že zvýšení rychlosti pohybu typicky zvyšuje chybovost, zatímco snaha o vyšší přesnost vyžaduje zpomalení.

> **Definice:** Cílová oblast (target) je aktivní plocha prvku, která reaguje na kliknutí nebo dotyk; v návrhu je důležité odlišovat vizuální velikost od skutečné hit area (aktivní plochy).

#### Formulace a parametry modelu

Typická formulace Fittsova zákona pro jednorozměrné míření používá vztah mezi časem pohybu a indexem obtížnosti. V nejběžnější Shannonově podobě je index obtížnosti dán výrazem \( ID = \log_2\!\left(\frac{D}{W} + 1\right) \) a čas pohybu se zapisuje jako \( MT = a + b \cdot ID \), kde \(a\) a \(b\) jsou empiricky zjištěné konstanty závislé na zařízení, uživateli a podmínkách. Prakticky to znamená, že samotný model neurčuje jediný „správný“ čas pro všechny situace; místo toho poskytuje strukturu, kterou je možné kalibrovat, a především relativní srovnání variant: změna velikosti cíle nebo jeho polohy se promítne do změny ID a tím i do predikce času.

> **Definice:** Regrese je statistická metoda používaná k odhadu parametrů a a b tak, aby model co nejlépe odpovídal naměřeným datům.

> **Definice:** Kalibrace modelu je proces přizpůsobení parametrů modelu konkrétnímu zařízení, populaci uživatelů a úloze tak, aby predikce byly realistické.

U reálných interakcí se často pracuje s dvourozměrným cílením, kde je relevantní nejen velikost, ale i tvar cíle a směr pohybu. Dále se zavádí pojem efektivní šířky (effective width, často značené \(W_e\)), která reflektuje skutečnou variabilitu zásahů uživatelů a tedy implicitně zahrnuje chybovost. Na této bázi se používá i efektivní index obtížnosti \(ID_e\), typicky počítaný analogicky se Shannonovou formulí, jen s \(W_e\) místo \(W\). V moderní HCI praxi se pak výkon ukazovacích zařízení často shrnuje metrikou propustnosti (throughput), která se standardně interpretuje jako poměr „kolik obtížnosti“ uživatel zvládne za jednotku času, tedy přibližně \( TP \approx \frac{ID_e}{MT} \) (v bitech za sekundu). Díky tomu throughput kombinuje rychlost i přesnost a umožňuje porovnávat vstupní modality nebo nastavení zařízení v kontrolovaném měření.

> **Definice:** Efektivní šířka (effective width, \(W_e\)) je odhad „skutečné“ šířky cíle odvozený z rozptylu zásahů, který umožňuje zahrnout chybovost do výpočtů.

> **Definice:** Propustnost (throughput, TP) je metrika vyjadřující efektivitu ukazovacího zařízení v rámci Fittsova modelu, často počítaná jako \(ID_e/MT\) a interpretovaná jako kombinovaná míra rychlosti a přesnosti.

> **Příklad:** Pokud v desktopové aplikaci přesunete primární tlačítko „Uložit“ z pravého horního rohu dialogu do blízkosti posledního editovaného pole, zmenšíte průměrnou vzdálenost D. I když ponecháte stejnou velikost W, index obtížnosti klesne a model predikuje kratší dobu míření, což se v součtu opakovaných akcí typicky projeví jako měřitelná úspora času.

#### Návrhové implikace

Z Fittsova zákona plynou velmi konkrétní návrhové důsledky. Nejjednodušší, ale často nejúčinnější strategií je zvětšování aktivních ploch (hit areas), především u často používaných nebo kritických akcí, přičemž platí, že důležitá je aktivní plocha, nikoli pouze vizuální obrys. Stejně významné je zkracování vzdáleností, tedy umísťování často používaných ovládacích prvků blíže místu, kde se uživatel typicky nachází kurzorem, pohledem nebo palcem. Specifickým případem jsou okraje a rohy obrazovky v klasickém kurzorovém prostředí: hranice displeje omezuje pohyb ukazatele, a tím v relevantním směru zvyšuje „toleranci“ zásahu, protože uživatel nemůže přejet za okraj. Tento efekt je směrově podmíněný a závisí na konkrétní geometrii a kontextu, například na tom, zda je prvek skutečně na absolutním okraji, zda okraj není „přerušen“ (více monitorů), jak se chová systémová lišta či dok a jaké je nastavení akcelerace ukazatele; přesto jde o klasickou a prakticky využívanou implikaci Fittsova modelu.

> **Definice:** Hotspot je místo nebo prvek, který uživatelé používají často a očekávají jeho rychlou dosažitelnost; v návrhu se vyplatí minimalizovat vzdálenost k hotspotům.

> **Definice:** Cíle na okraji (edge targets) jsou cíle umístěné u okrajů obrazovky, které mohou být rychleji dosažitelné díky omezení pohybu ukazatele hranou displeje v relevantním směru.

V mobilním a dotykovém prostředí je přímá analogie „okrajových zarážek“ slabší než u kurzoru, protože prst nemá stejné mechanické omezení pohybu jako ukazatel a navíc kontakt prstu není bodový. Okraje však mohou interakci přesto ovlivňovat, například tím, že poskytují hmatovou nebo prostorovou referenci a snižují nejistotu pohybu v některých gestech. Moderní návrh navíc pracuje s konceptem zóny palce (thumb zone), tedy pravděpodobných dosahových oblastí palce, které závisejí na velikosti zařízení a držení. Z hlediska Fittsovy logiky se tak layout optimalizuje nejen geometricky, ale i ergonomicky.

> **Definice:** Zóna palce (thumb zone) je oblast displeje, do níž uživatel při typickém držení telefonu dosáhne palcem snadno, rychle a s menším rizikem chyby.

#### Fitts a mobilní/dotykové rozhraní

V dotykových rozhraních do hry vstupují specifické faktory, které Fittsův zákon sám o sobě neřeší, ale které lze interpretovat jako změny efektivní šířky \(W_e\) a nárůst variability. Typickým problémem je „fat-finger“ efekt, kdy prst zakrývá cíl a snižuje vizuální kontrolu, a také zakrytí obsahu rukou (occlusion) během interakce. Postura, pohyb v prostoru a rušení prostředí mohou zvýšit chybovost a prodloužit čas, což znamená, že návrh musí být konzervativnější v dimenzování cílů a jejich rozestupů, zejména v bezpečnostně citlivých situacích.

> **Definice:** Fat-finger problem je jev, kdy relativně velká kontaktní plocha prstu oproti malým prvkům UI zvyšuje riziko nepřesného zásahu.

> **Definice:** Occlusion je zakrytí cíle nebo relevantní zpětné vazby prstem či rukou během dotykové interakce, které komplikuje kontrolu přesnosti.

> **Příklad:** Pokud je v mobilní aplikaci ikonka „smazat“ umístěna těsně vedle ikonky „upravit“ a obě jsou malé, Fittsovská interpretace říká, že malá W a malý rozestup sníží efektivní toleranci zásahu. V důsledku se zvýší čas potřebný k opatrnému míření a současně stoupne riziko destruktivního omylu, což může vyžadovat buď zvětšení aktivních ploch, nebo zavedení ochranného potvrzení či možnosti vrácení akce.

### 2) Hickův zákon (Hick’s law / Hick–Hyman law)

Hickův zákon modeluje dobu rozhodování jako funkci informační náročnosti volby. V jednoduchém pojetí, kdy jsou možnosti přibližně stejně pravděpodobné a uživatel má naučené mapování „stimulus–odpověď“, se reakční čas zvyšuje logaritmicky s počtem alternativ. Typická „zkoušková“ formulace se zapisuje jako \( RT = a + b \cdot H \), kde \(RT\) je reakční čas, \(a\) a \(b\) jsou empirické konstanty a \(H\) je entropie volby. V nejzákladnějším případě se entropie často aproximuje jako \( H \approx \log_2(n + 1) \) (v některých konvencích \( \log_2(n) \)), kde \(n\) je počet relevantních možností. V designu rozhraní se tento vztah využívá při návrhu menu, navigačních struktur, výběrů ve formulářích a obecně všude tam, kde uživatel musí z množiny možností vybrat jednu.

> **Definice:** Reakční čas (reaction time, RT) je doba od prezentace voleb do iniciace odpovědi, tedy do okamžiku, kdy uživatel začne provádět volbu.

> **Definice:** Počet voleb (n) je počet relevantních alternativ, které uživatel v daném okamžiku zvažuje jako kandidáty k výběru.

> **Definice:** Entropie (H) v tomto kontextu vyjadřuje množství informace spojené s volbou; roste, pokud jsou možnosti podobně pravděpodobné a uživatel nemá silný předpoklad, kterou zvolí.

> **Definice:** Logaritmický vztah znamená, že přidání další možnosti má menší dopad na RT, pokud už je množina možností velká, než když je malá.

#### Hick–Hyman varianta (nerovnoměrné pravděpodobnosti)

Reálné volby v UI bývají nerovnoměrné: některé položky jsou vybírány výrazně častěji než jiné. Hick–Hymanovo zobecnění proto definuje entropii přes pravděpodobnosti voleb \(p_i\) jako \( H = -\sum_i p_i \log_2 p_i \) a zachovává tvar \( RT = a + b \cdot H \). Důsledek je návrhově zásadní: pokud má uživatel silnou apriorní pravděpodobnost volby (prior probability), tedy očekávání dané zkušeností, kontextem nebo frekvencí používání, může být rozhodování rychlé i při relativně velkém počtu dostupných možností, protože mentálně „hledá“ primárně očekávanou volbu. To podporuje využívání rozumných výchozích voleb, personalizaci a adaptivní řazení, ale zároveň vyžaduje opatrnost vůči překvapivému chování systému: když se „nejčastější volba“ změní kontextem, může dojít k automatickým zachycovacím chybám (capture errors), kdy uživatel zvolí to, co dělá obvykle, nikoli to, co v dané situaci zamýšlí.

> **Definice:** Apriorní pravděpodobnost volby (prior probability) je předchozí pravděpodobnost volby určité položky daná zkušeností, kontextem nebo frekvencí používání.

> **Definice:** Tendence volit nejčastější položku je jev, kdy uživatelé zkracují rozhodování tím, že „automaticky“ míří na nejfrekventovanější volbu; zvyšuje to rychlost, ale může to zvyšovat riziko zachycovacích chyb při změně kontextu.

> **Příklad:** V aplikaci pro správu úkolů může být volba „Dnes“ vybírána výrazně častěji než „Za tři týdny“. Pokud je „Dnes“ viditelná a konzistentně umístěná, uživatel ji volí téměř automaticky, takže efektivní rozhodovací zátěž je nižší než by odpovídalo prostému počtu možností.

#### Návrhové implikace

Hickův zákon podporuje návrhové strategie, které snižují kognitivní zátěž ve chvíli volby. Prakticky to znamená kategorizaci a hierarchizaci možností, protože rozdělení velké množiny do smysluplných skupin umožňuje uživateli seskupování (chunking), tedy zpracování po větších jednotkách. Často se uplatňuje postupné odkrývání (progressive disclosure), kdy jsou pokročilé volby záměrně skryty a odhalují se až v okamžiku potřeby, čímž se snižuje zatížení nováčků a zároveň se zachovává funkční bohatost pro experty. V mnoha informačně bohatých systémech se navíc vyplatí kombinovat procházení s vyhledáváním, protože vyhledávání může transformovat rozhodování z „volím z n“ na „ověřuji shodu“, což může být při dobrém značení a filtru rychlejší a méně zatěžující.

> **Definice:** Chunking (seskupování) je strategie seskupování prvků do větších smysluplných jednotek, která snižuje nároky na pracovní paměť a zrychluje orientaci.

> **Definice:** Informační stopa (information scent) je míra, s níž prvky navigace a popisky naznačují, kam povedou a zda odpovídají uživatelovu záměru.

> **Příklad:** Dlouhý seznam typů dokumentů ve formuláři lze zrychlit tím, že se rozdělí na několik jasných kategorií a nejčastější typy se zobrazí nahoře. Uživatel pak nevyhodnocuje desítky položek, ale nejprve volí kategorii a následně vybírá z menší sady, přičemž vizuální hierarchie podporuje rychlý sken.

#### Kdy Hickův zákon neplatí přímo

Ačkoli je Hickův zákon užitečný, nelze jej mechanicky aplikovat na všechny volby v rozhraní. Klasická měření Hick–Hyman vycházejí z experimentů, kde jsou alternativy jasně definované a mapování stimul–odpověď je naučené; v UI však mapování často teprve vzniká interpretací textových popisků, ikon a kontextu. Rozhodování proto často není čistě informační, ale sémantické: podobnost položek, kvalita popisků a mentální model uživatele mohou dominovat nad pouhým počtem možností. Dále se uplatňuje učení a expertiza; expert může volbu provádět na základě prostorové paměti nebo rutiny, takže reálný čas je kratší, než by predikoval model pro neznámou množinu. Nezanedbatelnou roli hraje i vizuální vyhledávání (visual search), kdy uživatel skenuje obrazovku, a čas je pak ovlivněn typografií, kontrastem a rozmístěním položek, tedy faktory, které Hickův zákon sám explicitně nemodeluje; v praxi se proto Hickova logika často kombinuje s poznatky o vizuálním hledání.

> **Definice:** Vizuální vyhledávání (visual search) je proces vizuálního hledání cíle mezi distraktory, jehož čas závisí na salienci, uspořádání a podobnosti položek.

> **Definice:** Expertní výkon (expert performance) je výkon založený na automatizaci a procedurální znalosti, kdy se rozhodovací fáze zkracuje díky zkušenosti a předvídatelnosti rozhraní.

### 3) GOMS (Goals, Operators, Methods, Selection rules)

GOMS označuje rodinu kognitivních modelů, které rozkládají úlohu na cíle, elementární operátory, metody jejich dosažení a pravidla volby mezi metodami. Těžiště GOMS je v analýze výkonu expertního uživatele, který dělá minimum chyb a postupuje „optimálně“ v rámci znalosti rozhraní. To je zdánlivě omezení, ale zároveň výhoda: model poskytuje dolní odhad času a umožňuje porovnat alternativní návrhy pracovních postupů, aniž by se do výpočtu promítala náhodná selhání nebo nejistota typická pro nováčky. V kontextu státnic je důležité chápat GOMS jako formální dekompozici úlohy (task decomposition), která vytváří explicitní mapu toho, co musí uživatel udělat, aby dosáhl cíle, a umožňuje odhalit redundantní kroky či nevhodné přepínání režimů.

> **Definice:** Goal (cíl) je stav, kterého chce uživatel dosáhnout, například „odeslat zprávu“ nebo „přejmenovat soubor“.

> **Definice:** Operator (operátor) je elementární akce uživatele nebo systému, například stisk klávesy, přesun ukazatele, vizuální kontrola či mentální příprava.

> **Definice:** Method (metoda) je konkrétní postup, tedy sekvence operátorů, kterou lze dosáhnout cíle.

> **Definice:** Selection rule (pravidlo volby) určuje, kdy uživatel zvolí jednu metodu místo jiné, například „pokud mám ruce na klávesnici, použij zkratku“.

> **Definice:** Expert user (expertní uživatel) je uživatel, který zná rozhraní a postupy natolik, že provádí úlohy rutinně a s minimálními chybami.

#### Typy modelů v rodině GOMS

Rodina GOMS zahrnuje několik variant, které se liší mírou detailu a tím, co považují za relevantní při predikci. CMN-GOMS je klasická forma spojená se jmény Card, Moran a Newell a soustředí se na hierarchickou strukturu metod a operátorů. NGOMSL je více procedurálně orientovaná a hodí se také k odhadům učitelnosti (learnability), protože explicitně pracuje s tím, jak se uživatel může naučit metody krok za krokem. CPM-GOMS naopak reflektuje možnost paralelního překryvu perceptuálních, kognitivních a motorických procesů, čímž umožňuje realističtěji modelovat situace, kdy uživatel například čte a současně přesouvá ukazatel.

> **Definice:** Procedurální znalost je znalost „jak to udělat“, tedy internalizované postupy, které se s praxí automatizují.

> **Definice:** Paralelizace je možnost, že některé dílčí procesy probíhají současně, například vizuální kontrola během motorické akce.

#### Postup tvorby GOMS analýzy

Tvorba GOMS analýzy začíná volbou reprezentativní úlohy a explicitním vymezením cíle včetně hranic, co do úlohy patří a co už ne. Následně se identifikují operátory relevantní pro dané zařízení a rozhraní a konstruují se metody, tedy konkrétní postupy, kterými lze cíle dosáhnout. Tam, kde existuje více metod, například klávesová zkratka versus menu, se formulují pravidla volby, která často odkazují na stav rozhraní nebo na kontext, například na to, zda je prvek aktuálně viditelný nebo zda uživatel právě drží zařízení jednou rukou. Důležitým krokem je zpřesnění předpodmínek a následných podmínek (preconditions a postconditions), aby bylo jasné, kdy je metoda použitelná a jaký stav systému zanechává.

> **Definice:** Stav (state) je popis relevantního stavu rozhraní a kontextu, který ovlivňuje dostupnost akcí a volbu metod.

> **Definice:** Předpodmínka a následná podmínka (precondition a postcondition) jsou podmínky před zahájením a po dokončení metody, které zajišťují, že model je konzistentní a kontrolovatelný.

> **Příklad:** U cíle „vložit odkaz do textu“ může existovat metoda založená na ikoně v panelu nástrojů a metoda založená na klávesové zkratce. Pravidlo volby může znít, že pokud uživatel píše a má ruce na klávesnici, zvolí zkratku, zatímco při práci s myší a vizuálním formátováním zvolí ikonu. Takto formulovaná pravidla umožní realisticky srovnat varianty rozhraní pro různé styly práce.

#### Krátká ukázka formálního zápisu (metoda a pravidlo volby)

Pro státnicový kontext je užitečné umět ukázat, jak může vypadat „formální“ zápis jedné metody. U cíle „Přejmenovat položku“ může být metoda M1 (přes klávesnici) zapsána jako sekvence operátorů ve stylu: Goal: Rename item; Method M1: Select item → Press F2 → Type new name → Press Enter. Alternativní metoda M2 (přes menu) může být: Select item → Open context menu → Choose Rename → Type new name → Press Enter. Pravidlo volby (selection rule) pak lze vyjádřit například tak, že pokud má uživatel ruce na klávesnici a zkratku zná, použije M1, jinak použije M2; tím model explicitně říká, že různé kontexty a úrovně dovednosti vedou k různým metodám.

#### Co GOMS umožňuje

GOMS je mimořádně silný při porovnávání alternativních UI postupů a při hledání míst, kde rozhraní nutí uživatele k nadbytečným krokům. Protože explicitně zachycuje metody a pravidla volby, pomáhá také uvažovat o návrhu zkratek a o tom, jak zajistit koexistenci cest pro nováčky a experty. V NGOMSL tradici je navíc možné uvažovat o učitelnosti (learnability), protože složitost metod a jejich konzistence ovlivňují, jak snadno si uživatel postup osvojí. V praxi se tak GOMS používá jako argumentační nástroj při redesignu pracovních postupů, zejména v profesionálních systémech, kde se malá úspora času na jeden průchod násobí vysokou frekvencí.

> **Definice:** Efektivita (efficiency) je míra, s jakou uživatel dosahuje cíle při minimálních nákladech, typicky v čase, počtu kroků a chybovosti.

> **Definice:** Učitelnost (learnability) je míra, s jakou se uživatel dokáže naučit provádět úlohy efektivně; v GOMS kontextu souvisí s konzistencí metod a jejich kognitivní náročností.

### 4) Keystroke-Level Model (KLM)

KLM lze chápat jako praktickou, operacionalizovanou podobu GOMS, která se zaměřuje na rychlý odhad času rutinní úlohy pomocí součtu časů elementárních operátorů. Základní myšlenka je zkouškově jednoduchá: definujete „happy path“ úlohy pro expertního uživatele bez chyb, přepíšete jej do posloupnosti operátorů a jejich standardních časů a tyto časy sečtete. Formálně se KLM často zapisuje jako \( T \approx \sum t_i \), tedy jako součet časů jednotlivých operátorů, přičemž význam modelu je především v porovnání dvou variant téhož cíle.

> **Definice:** K (keystroke) je operátor stisku klávesy nebo ekvivalentní diskrétní akce; v klasickém KLM se sem obvykle řadí i kliknutí tlačítkem myši jako „stisk“ (v některých notacích se pro klik používá samostatné B jako button press).

> **Definice:** P (pointing) je operátor ukázání (pointing), tedy přesun ukazatele na cíl; v přísné notaci nezahrnuje samotný „klik“, který je samostatný elementární akt (K/B). V praxi se někdy P a klik agregují pro rychlý odhad, ale je vhodné uvést, že jde o zjednodušení.

> **Definice:** H (homing) je operátor přesunu ruky mezi zařízeními, například z klávesnice na myš a zpět.

> **Definice:** M (mental) je operátor mentální přípravy, rozhodnutí nebo kontroly, který reprezentuje kognitivní zpracování mezi akcemi.

> **Definice:** R (response) je operátor odezvy systému (response), tedy dobu, kdy uživatel nemůže pokračovat v kritické cestě kvůli latenci.

> **Definice:** Rutinita úlohy označuje, že uživatel zná postup a provádí jej bez významného váhání; KLM je pro takové situace nejpřesnější.

Pro státnice je obvykle užitečné znát i orientační „standardní“ časy z klasické literatury Card–Moran–Newell, které se používají jako výchozí konstanty pro expertní výkon. Často se uvádí, že stisk klávesy nebo klik (K/B) je zhruba 0,2 s, ukázání myší (P) je přibližně 1,1 s, přesun ruky mezi klávesnicí a myší (H) kolem 0,4 s a mentální operátor (M) přibližně 1,35 s; odezva systému (R) není „konstanta člověka“, ale přímo měřená či předpokládaná latence konkrétního systému. Tyto hodnoty je potřeba chápat jako typické a kalibrovatelné, nikoli jako univerzální pravdu, ale pro zkoušku slouží jako referenční rámec, díky němuž lze z hlavy ukázat, proč například jedna varianta s méně ukazováním a homingem vychází výrazně rychleji.

#### Sestavení KLM výpočtu

Při sestavení KLM výpočtu se nejprve stabilizuje definice úlohy a její „happy path“, aby bylo jasné, co přesně počítáme. Poté se konkrétní kroky mapují na operátory K, P, H, M a R a jejich časy se sečtou. V praxi je důležité korektně zachytit odezvu systému: pokud je odezva krátká, může se částečně překrýt s jinými aktivitami (například s vizuální kontrolou nebo přípravou další akce), ale pokud překročí určitou mez a blokuje pokračování v kritické cestě, projeví se jako plnohodnotný operátor R, který přímo prodlužuje dokončení úlohy. KLM tedy není jen o mechanickém „počtu kliků“, ale i o práci s latencí a s tím, zda je odezva blokující, nebo překrytelná.

> **Definice:** Čas odezvy systému (system response time) je čas mezi akcí uživatele a viditelnou či funkční odezvou systému.

> **Definice:** Latence je zpoždění, které narušuje plynulost interakce; v UX se často posuzuje podle prahů, kdy uživatel začne vnímat systém jako pomalý.

> **Definice:** Kritická (blokující) latence je taková latence, která blokuje pokračování v úloze a přímo prodlužuje čas kritické cesty.

> **Příklad:** Pokud po stisku „Uložit“ systém reaguje okamžitě, může uživatel v KLM modelu plynule pokračovat další akcí. Pokud však ukládání trvá několik sekund a UI neumožní další práci, přidá se výrazný operátor R, který může převážit úspory dosažené optimalizací počtu kroků.

KLM navíc umožňuje zpřesnit operátor P: místo používání pevné konstanty lze čas ukázání odhadovat pomocí Fittsova zákona, tedy jako \( P \approx a + b \cdot ID \), kde \(ID\) vychází z vzdálenosti a velikosti cíle v konkrétním layoutu. V praxi se tak Fittsův model stává „motorem“ pro část KLM výpočtu, zejména když porovnáváte varianty s odlišnou geometrií (jiné rozmístění a velikosti prvků).

#### Umístění mentálního operátoru (M)

Nejcitlivější částí KLM je práce s mentálním operátorem M, protože rozhoduje o tom, zda model realisticky zachytí kognitivní zátěž. M se typicky vkládá před akce, které vyžadují rozhodnutí, kontrolu stavu, přepnutí pozornosti nebo ověření výsledku; v klasické KLM praxi se jeho umisťování řídí heuristikami, které mají zachytit „mentální pauzu“ před volbou nebo kontrolou, ale nemají uměle přidávat M před každou elementární motorickou akci v rutině. Pokud návrhář M zanedbá, může dojít k tomu, že dvě varianty vypadají časově podobně, i když jedna ve skutečnosti vyžaduje více interpretace, čtení nebo opatrnosti. Naopak nadužívání M může model přecenit kognitivní náročnost a zastřít, že některé kroky se při rutině automatizují. Proto je vhodné chápat M jako operacionalizaci kognitivního zpracování a vnímat jeho umístění jako argumentovatelnou hypotézu, kterou lze později ověřit empiricky.

> **Definice:** Přepnutí pozornosti (attention shift) je přepnutí pozornosti mezi prvky nebo modalitami, například z textu na panel nástrojů, které může vyžadovat dodatečné kognitivní zpracování.

> **Definice:** Kognitivní zpracování (cognitive processing) je zpracování informací zahrnující interpretaci, rozhodnutí a kontrolu, které není redukovatelné na čistě motorické akce.

#### Porovnání variant

KLM se v praxi často používá k porovnání dvou variant téhož cíle, přičemž klíčové je, že model odhalí, kdy je zkratka skutečně rychlejší a kdy jen přesouvá náročnost jinam. Klávesová zkratka například eliminuje operátory P a často i H, ale vyžaduje, aby uživatel zkratku znal, což se v modelu experta projeví nízkým M; u nováčka by se však rozhodovací náklady (a tedy M) mohly zvýšit, případně by se objevily chyby mimo rámec „happy path“. Podobně inline editace může ušetřit otevření dialogu a čekání, ale může přidat kognitivní náklady kontroly, pokud není zpětná vazba dostatečně jasná a uživatel musí ověřovat, zda změna skutečně proběhla.

> **Definice:** Zkratka (shortcut) je alternativní metoda dosažení cíle, která zkracuje sekvenci operátorů, typicky pro expertní uživatele.

> **Definice:** Režim (mode) je stav rozhraní, ve kterém stejné akce mají odlišné efekty; režimy mohou zvyšovat chybovost a kognitivní zátěž.

> **Příklad:** Přejmenování položky v seznamu může mít variantu A, kde uživatel otevře kontextové menu, zvolí „Přejmenovat“, napíše text a potvrdí, a variantu B, kde stačí stisknout F2, napsat text a potvrdit. KLM typicky ukáže výraznou úsporu díky eliminaci ukázání a volby v menu, což je argument pro podporu zkratek v profesionálních nástrojích.

### 5) Srovnání modelů a jejich vztahy

Fittsův zákon, Hickův (Hick–Hymanův) zákon a GOMS/KLM se liší rozsahem i předpoklady a jejich vhodnost závisí na tom, kterou složku interakce chcete optimalizovat. Fittsův zákon je nejpřímočařejší pro motorické úkony míření na cíle, Hick–Hymanův zákon pro volbu mezi alternativami v situacích s relativně jasně definovanými možnostmi a GOMS a KLM jsou nejvhodnější pro sekvenční úlohy a pracovní postupy, kde je důležité porovnat metody, zkratky a strukturu kroků. V praxi se modely často kombinují: výběr položky v menu zahrnuje rozhodování (Hick–Hyman), následné ukázání na položku (Fitts) a zbytek toku lze zapsat v KLM jako sekvenci operátorů. Taková kombinace zvyšuje vysvětlovací sílu, ale také klade vyšší nároky na explicitní formulaci předpokladů, jinak hrozí nepřiměřená generalizace.

> **Definice:** Rozsah platnosti (scope) je rozsah situací, pro které je model vhodný a kde jsou jeho předpoklady splněny.

> **Definice:** Validita je míra, s jakou modelové predikce odpovídají realitě v daném kontextu použití.

> **Definice:** Generalizace je schopnost přenést závěry z jedné situace do jiné; u UI modelů je limitována rozdíly v zařízení, uživatelích a úlohách.

> **Definice:** Předpoklady (assumptions) jsou předpoklady, na nichž model stojí, například absence chyb, expertní znalost nebo stabilní kontext.

## Aplikace

Použití UI modelů je nejpřínosnější tam, kde je třeba udělat návrhové rozhodnutí rychle, obhajitelně a s omezenými zdroji. V produktové praxi lze modely chápat jako „kalkulačku“ efektivity, která umožňuje vytvořit benchmark pro varianty a stanovit očekávané dopady na KPI, například na čas na úkol. Zároveň se tím zlepšuje komunikace v týmu: designér může zaznamenat rozhodnutí do záznamu návrhového rozhodnutí (design decision record) a opřít jej o argument typu „tato varianta snižuje index obtížnosti míření“ nebo „tato navigační struktura snižuje entropii volby na první úrovni“. Modely přitom nehodnotí estetiku ani emoce, ale přispívají k racionální kontrole efektivity a mohou předcházet situacím, kdy je rozhraní vizuálně čisté, ale operativně pomalé.

> **Definice:** Varianta A/B je dvojice návrhů, které se porovnávají z hlediska dopadu na vybranou metriku, ať už analyticky nebo empiricky.

> **Definice:** Benchmark je referenční hodnota nebo scénář, vůči němuž se měří zlepšení či zhoršení, například čas dokončení klíčové úlohy.

> **Definice:** KPI (Key Performance Indicator) je klíčový ukazatel výkonnosti, například průměrný čas na úkol nebo úspěšnost dokončení procesu.

> **Definice:** Záznam návrhového rozhodnutí (design decision record) je stručná, ale explicitní dokumentace návrhového rozhodnutí včetně kontextu, variant a zdůvodnění.

### Návrh ovládacích prvků a layoutu (Fitts)

Fittsovská perspektiva je zvláště praktická při dimenzování aktivních ploch, nastavování vnitřního odsazení (padding) a rozestupů (spacing) a při volbě umístění primárních akcí. V desktopu se často řeší, zda mít primární tlačítko vpravo dole v dialogu, nebo jej přiblížit místu, kde uživatel dokončil zadávání, a tím snížit vzdálenost D; u kurzorových zařízení se navíc někdy využívají okraje, ale s vědomím, že efekt je podmíněn směrem přiblížení a konkrétním prostředím (například více monitorů). V mobilu se analogicky rozhoduje mezi plovoucím tlačítkem akce a spodní navigační lištou; volba závisí na zóně palce a na tom, jak často je akce používána. Fittsův zákon zde neposkytne estetické doporučení, ale nabídne rámec pro odhad, zda bude akce dosažitelná rychle a s nízkým rizikem chyb.

> **Definice:** Aktivní plocha (hit area) je skutečná aktivní plocha prvku, která reaguje na dotyk nebo kliknutí, často větší než vizuální ikonka.

> **Definice:** Padding je vnitřní odsazení, které může zvětšit aktivní plochu bez nutnosti zvětšit vizuální symbol, a tím zlepšit dosažitelnost.

> **Definice:** Primární akce (primary action) je hlavní akce obrazovky nebo kroku procesu, která by měla být nejlépe dostupná a nejméně chybová.

> **Příklad:** Pokud má ikonka „koš“ v seznamu položek malý vizuální symbol, ale dostatečný padding zvětší její aktivní plochu, uživatel bude rychlejší a přesnější, aniž by byl narušen vizuální rytmus. Fittsovská interpretace zde podporuje „neviditelné“ zvětšení W, které je zvlášť důležité na mobilu.

### Návrh navigace a menu (Hick–Hyman)

Hick–Hymanův zákon se promítá do návrhu informační architektury, taxonomií a do toho, kolik možností má být na jedné úrovni navigace. V praxi to vede k hledání rovnováhy mezi příliš hlubokou hierarchií a příliš širokou nabídkou, přičemž samotný počet položek je jen část příběhu: smysluplná kategorizace a dobré popisky snižují entropii volby, protože uživatel má silnější očekávání, kam má jít. Zároveň se často vyplatí podporovat vyhledávání a filtry, které mění povahu úlohy z procházení na cílené zúžení možností; kognitivní náklady se pak přesunou od „vybírám z mnoha“ k „ověřuji shodu“, což může být rychlejší, a to i s ohledem na vizuální vyhledávání.

> **Definice:** Informační architektura (information architecture) je strukturování obsahu a funkcí tak, aby uživatelé dokázali efektivně najít a použít to, co potřebují.

> **Definice:** Taxonomie (taxonomy) je systém kategorizace a pojmenování, který ovlivňuje, jak uživatelé interpretují volby a jak rychle se rozhodují.

> **Definice:** Postupné odkrývání (progressive disclosure) je princip postupného odhalování možností, který chrání uživatele před přetížením a odhaluje komplexitu až při potřebě.

> **Příklad:** V nastavení aplikace lze pokročilé volby skrýt do sekce „Rozšířené“. Uživatel pak na první úrovni vidí menší počet významných kategorií, což snižuje rozhodovací nároky, a zároveň je zachována dostupnost detailů pro ty, kdo je potřebují.

### Optimalizace pracovních postupů (GOMS/KLM)

GOMS a KLM se nejlépe uplatní při optimalizaci workflow v systémech, kde se úlohy opakují a kde se vyplatí investovat do zkratek, automatizace a konzistence postupů. Analýza „happy path“ umožní identifikovat kroky, které nepřidávají hodnotu, například redundantní potvrzení, přepínání mezi obrazovkami nebo neefektivní editaci v dialogu. KLM pak rychle ukáže, zda navržená změna skutečně zkrátí kritickou cestu, nebo zda jen přesune náklady do mentálního operátoru M či do odezvy systému R. Pro návrh pro experty je klíčové umožnit „rychlé cesty“, aniž by rozhraní ztratilo srozumitelnost pro nováčky, což typicky vede k paralelním metodám a explicitním pravidlům volby v duchu GOMS.

> **Definice:** Workflow je posloupnost kroků, kterou uživatel provádí k dosažení cíle v rámci systému, často napříč více obrazovkami a stavy.

> **Definice:** Happy path je ideální průchod úlohou bez chyb a odboček, který reprezentuje cílovou efektivitu systému.

> **Definice:** Chyba režimu (mode error) je chyba způsobená tím, že uživatel jedná v nesprávném režimu rozhraní, přičemž stejná akce má jiný efekt, než očekává.

> **Příklad:** V profesionálním editoru může být export dokumentu dostupný přes menu, ale současně přes klávesovou zkratku. GOMS/KLM analýza často ukáže, že zkratka dramaticky zkracuje kritickou cestu pro experta, zatímco menu zůstává srozumitelnou metodou pro nováčka, pokud jsou položky dobře kategorizované.

### Evaluace bez uživatelů a triangulace

Modely umožňují prediktivní evaluaci, která je zvlášť cenná při raném prototypování nebo při porovnání variant, kde ještě není vhodné investovat do plnohodnotného testování. Současně je však metodologicky silné modely triangulovat s heuristickou evaluací a následně s empirickým testováním, protože modely jsou primárně prediktivní, zatímco heuristiky a testy často odhalují diagnostické příčiny problémů, například nejasné popisky nebo nesprávnou mentální reprezentaci uživatele. Tato kombinace poskytuje stabilnější základ pro rozhodování než jakákoli metoda samotná.

> **Definice:** Triangulace metod je kombinování více metod evaluace tak, aby se vzájemně doplňovaly a snižovaly riziko jednostranné interpretace.

> **Definice:** Prediktivní vs. diagnostická evaluace odlišuje přístup, který odhaduje výkon a metriky, od přístupu, který vysvětluje, proč uživatelé selhávají nebo váhají.

### Integrující mini-scéna: jak modely kombinovat v jednom odhadu

Pro představu „jak by to vypadalo dohromady“ si vezměme jednoduchý scénář: uživatel chce změnit stav úkolu a vybere položku z menu, poté klikne na konkrétní akci a systém potvrdí změnu. Rozhodovací část výběru lze popsat Hick–Hymanovsky jako \( RT = a + b \cdot H \), kde \(H\) odpovídá entropii relevantních položek v menu (a tedy nejen jejich počtu, ale i pravděpodobnostem). Následné ukázání na položku v menu je motorická část, kterou lze odhadnout Fittsovým zákonem jako \( MT = a + b \cdot ID \) podle vzdálenosti k položce a její efektivní šířky v ose pohybu. V KLM pak celý tok zapíšeme jako sekvenci typu M (příprava/rozhodnutí) + P (ukázání) + K/B (klik) + případně R (odezva systému), přičemž P lze místo konstanty odvodit z Fittse a rozhodovací pauzu lze opřít o Hick–Hyman jako „vstup“ do M. Taková kombinace dává studentovi i týmu jednotnou šablonu: explicitně rozdělit čas na volbu, ukázání, stisk a odezvu a u každé části říct, jaké vlastnosti UI ji nejvíc ovlivňují.

## Výzvy a omezení

UI modely poskytují svůdnou přesnost, ale jejich síla může vést k chybné jistotě, pokud se ignorují předpoklady a kontext. Zásadní je otázka ekologické validity: modely typicky vznikaly v kontrolovaných podmínkách a předpokládají stabilní pozornost a relativně jednoduché úkoly, zatímco reální uživatelé pracují pod tlakem, s přerušeními, na různých zařízeních a s různou motivací. Dále je významná interindividuální variabilita: rozdíly ve zkušenosti, motorice, věku nebo v preferované strategii mohou změnit parametry natolik, že „průměrná“ predikce je pro část populace nepřesná. Zároveň se uplatňuje efekt učení (learning effect), tedy zlepšování výkonu s praxí, které znamená, že optimalizace pro experty nemusí zlepšit první použití, a naopak.

> **Definice:** Ekologická validita je míra, s jakou jsou výsledky a predikce použitelné v reálných podmínkách mimo laboratorní nebo idealizovaný kontext.

> **Definice:** Interindividuální variabilita označuje rozdíly mezi jednotlivci, které ovlivňují výkon, strategie a chybovost při interakci.

> **Definice:** Efekt učení (learning effect) je změna výkonu v čase v důsledku učení a habituace na rozhraní a úlohy.

> **Definice:** Hlediska přístupnosti (accessibility considerations) jsou hlediska přístupnosti, která zohledňují potřeby uživatelů s různými typy omezení a používání asistivních technologií.

### Předpoklady a zjednodušení modelů

Častým zjednodušením Fittsova, Hick–Hymanova i GOMS/KLM přístupu je implicitní předpoklad „ideálního“ průběhu bez chyb a bez emočních či motivačních faktorů. V reálném UX však chybovost a nejistota zásadně ovlivňují jak čas, tak spokojenost, přičemž uživatelé často volí pomalejší, ale bezpečnější strategii. Dalším omezením je slabé zachycení sémantiky a mentálních modelů: uživatel může váhat nikoli proto, že je možností mnoho, ale proto, že popisky nejsou srozumitelné nebo jsou položky významově příliš podobné. U KLM je pak kritické, že odhaduje výkon rutinní úlohy; pokud je úloha nová, obsahuje výjimky nebo vyžaduje interpretaci, mentální operátory se stávají dominantní složkou a standardní časy přestávají být stabilní.

> **Definice:** Chybovost (error rate) je podíl nebo pravděpodobnost chyb při provádění úlohy; v UX je často stejně důležitá jako rychlost.

> **Definice:** Spokojenost (satisfaction) je subjektivní spokojenost uživatele, která může být ovlivněna jasností, důvěrou a kontrolou, nejen rychlostí.

> **Definice:** Mentální model uživatele je vnitřní reprezentace toho, jak systém funguje; nesoulad mentálního modelu s realitou vede k váhání a chybám.

### Kontext zařízení a prostředí

Platnost predikcí významně závisí na vstupní modalitě (input modality), tedy na tom, zda uživatel pracuje myší, touchpadem, dotykem, stylusem, klávesnicí nebo třeba hlasem. Tyto modality mají odlišnou přesnost i dynamiku pohybu, což mění parametry Fittsova vztahu a často i strategii míření; zároveň mohou měnit i „cenu“ jednotlivých operátorů v KLM. Podobně systémová latence a její variabilita ovlivňují KLM operátor R a může znehodnotit jinak optimalizovaný tok. Mobilní prostředí navíc přináší rušení, chůzi, jednoruční ovládání a omezenou pozornost, což zvyšuje kognitivní zátěž a mění pravděpodobnosti voleb, tedy i podmínky Hick–Hyman interpretace. Z toho plyne, že analytické modelování má být vždy svázáno s explicitním popisem kontextu použití ve smyslu ISO 9241-11.

> **Definice:** Vstupní modalita (input modality) je způsob vstupu, například myš, klávesnice, dotyk nebo hlas, který určuje motorické a kognitivní charakteristiky interakce.

> **Definice:** Rozpočet latence (latency budget) je „rozpočet“ přijatelné latence pro danou úlohu tak, aby nebyla narušena plynulost a důvěra uživatele.

> **Definice:** Ergonomie je disciplína zkoumající přizpůsobení systémů lidským možnostem a omezením, v UI typicky skrze držení, dosah a únavu.

### Přístupnost a inkluzivní design

Z pohledu přístupnosti je důležité, že modely často implicitně předpokládají standardní motorické a kognitivní schopnosti. Fittsovská doporučení proto mohou a mají být rozšířena pro uživatele s motorickým omezením, kde menší přesnost a vyšší variabilita zásahů znamenají potřebu větších cílů, větších rozestupů a alternativních cest. Hick–Hymanova perspektiva se zase dotýká kognitivní přístupnosti: příliš mnoho možností, nejasná kategorizace nebo slabá vizuální hierarchie zvyšují kognitivní zátěž a mohou zhoršit použitelnost pro uživatele s kognitivními obtížemi nebo při stresu. V praxi je vhodné kombinovat modely s požadavky WCAG a s testováním s asistivními technologiemi, protože alternativní vstupy jako ovládání klávesnicí, přepínače a skenování (switch control) nebo čtečky obrazovky mění povahu operátorů i jejich časy; v extrému se pak „počet voleb“ stává sekundární vůči tomu, jak je řešen fokus, pořadí procházení a rychlost skenování.

> **Definice:** WCAG je soubor doporučení pro tvorbu přístupného webového obsahu, který se v praxi používá jako referenční rámec i pro širší digitální produkty.

> **Definice:** Asistivní technologie (assistive technologies) jsou technologie podporující přístup, například čtečky obrazovky, alternativní ukazovací zařízení nebo spínače.

> **Definice:** Kognitivní přístupnost (cognitive accessibility) je oblast přístupnosti zaměřená na snižování kognitivních bariér skrze srozumitelnost, předvídatelnost a redukci zbytečné komplexity.

### Riziko „optimalizace špatné metriky“

Zvláštním rizikem je optimalizace čistě na čas, která může vést k horšímu uživatelskému zážitku, vyšší chybovosti nebo nižší důvěře. Kratší čas neznamená automaticky lepší UX, zejména u bezpečnostně citlivých úloh, kde je žádoucí zpomalení a explicitní potvrzení destruktivní akce. Důležitá je práce s ochrannými mechanismy (guardrails), tedy návrhovými opatřeními, která brání fatálním omylům, i když prodlužují kritickou cestu. V extrému může „optimalizace na výkon“ sklouznout k temným vzorcům (dark patterns), kdy je uživatel manipulován k rychlému rozhodnutí bez porozumění; analytické modely jsou v takovém případě užitečné spíše jako kontrastní nástroj, který připomíná, že metrika času musí být vyvažována účinností, bezpečností a spokojeností.

> **Definice:** Ochranné mechanismy (guardrails) jsou ochranná návrhová opatření, která snižují riziko závažných chyb, například potvrzení, undo nebo zřetelné oddělení destruktivních akcí.

> **Definice:** Bezpečnostně kritické rozhraní (safety-critical UI) je rozhraní, kde chyba může vést k významné škodě, takže návrh preferuje bezpečnost a správnost před rychlostí.

> **Definice:** Temné vzorce (dark patterns) jsou manipulativní návrhové praktiky, které uživatele vedou k rozhodnutím výhodným pro produkt, nikoli pro uživatele, často skrze zkreslení volby.

## Související témata

UI modely nelze oddělit od vizuálního designu, protože vizuální hierarchie a kompozice ovlivňují rychlost vizuálního vyhledávání a tím i reálné projevy Hick–Hymanovy logiky v rozhraní. Stejně tak jsou úzce propojeny s informační architekturou a popisky (labelingem), protože sémantická srozumitelnost rozhoduje o tom, zda uživatel možnosti skutečně vnímá jako rozlišitelné a smysluplně kategorizované. V oblasti UI komponent a patternů poskytují modely kvantitativní oporu pro volby mezi menu, panely nástrojů, dialogy a inline editací a lze je propojit s prototypováním, kde se parametry aktivních ploch, toků a latencí dají rychle simulovat. Přístupnost představuje další přirozený průnik, protože velikosti cílů, ovladatelnost klávesnicí a kognitivní zátěž jsou zároveň tématy WCAG a inkluzivního designu. Konečně se modely dotýkají měření a Design Operations, protože umožňují formulovat metriky efektivity, instrumentovat kritické cesty a kontinuálně zlepšovat zkušenost na základě dat, přičemž se přirozeně doplňují s metodami evaluace použitelnosti, jako je heuristická evaluace, uživatelské testování a cognitive walkthrough. Teoretické pozadí těchto přístupů je ukotveno v modelech lidského výkonu, například v rámci Model Human Processor, a v širším tématu analýzy chybovosti, které připomíná, že efektivita nesmí být vytržena z kontextu bezpečnosti a porozumění.

### Poznámka k literatuře (volitelná součást kapitoly)

V literatuře bývají UI modely zasazovány do širšího rámce usability engineering, kde se vedle měření a testování uplatňují i analytické a inspekční metody, a současně do tradice patternů a pattern language, která popisuje osvědčená řešení opakujících se problémů v UI. Tento průnik podporuje evidence-based design, v němž se patterny neberou jako dogma, ale jako návrhové hypotézy, které lze kvantitativně podpořit prediktivními modely a následně ověřit empiricky.

> **Definice:** Evidence-based design je přístup k návrhu, který opírá rozhodnutí o kombinaci teorie, dat a ověřitelných argumentů namísto pouhé intuice.

> **Definice:** Pattern language je systém vzájemně propojených patternů, které společně popisují řešení v určité doméně tak, aby se daly konzistentně aplikovat.

## Závěr

Fittsův zákon, Hick–Hymanův zákon, GOMS a Keystroke-Level Model (KLM) tvoří komplementární sadu modelů, které pokrývají motorickou, rozhodovací i sekvenční složku interakce a umožňují odhadnout efektivitu rozhraní bez nutnosti okamžitého uživatelského testování. Jejich největší přínos spočívá v porovnávání variant a v transparentním zdůvodňování návrhových rozhodnutí, ať už jde o dimenzování a umístění cílů, strukturu menu a navigace, nebo optimalizaci pracovních postupů a podporu zkratek. Pro státnicový kontext je klíčové umět uvést nejen intuici, ale i standardní formulace, tedy například \(RT = a + b \cdot H\) s entropií volby u Hick–Hyman a typické operátory a časy v KLM, a současně umět říct, kdy jsou tyto předpoklady splněny. Současně je nezbytné respektovat limity modelů, reflektovat kontext zařízení a prostředí, zahrnout hlediska přístupnosti a vyhnout se zúžené optimalizaci na jedinou metriku času. V praxi proto dávají nejlepší výsledky tehdy, když jsou používány jako součást triangulace metod: jako rychlý prediktivní kompas, který se následně ověřuje heuristikami a empirickými daty v reálném kontextu použití.
