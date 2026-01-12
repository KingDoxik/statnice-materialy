---
title: "Human-Computer Interaction (východiska z kognitivní psychologie)"
subject: "Zaklady UX"
subjectSlug: "10-zaklady-ux"
order: 2
---
## Úvod

Human-Computer Interaction (HCI) zkoumá a navrhuje interakce mezi lidmi a výpočetními systémy tak, aby byly efektivní, srozumitelné, bezpečné a zároveň podporovaly kvalitní prožitek používání. Jde o interdisciplinu na pomezí informatiky, kognitivní psychologie, designu a ergonomie, která stojí v jádru UX praxe, protože kvalita interakce se neodvíjí jen od „funkčnosti“, ale i od toho, jak se systém potkává s lidskou kognicí, emocemi, motorikou a omezeními pozornosti.

V tomto materiálu budeme pracovat s několika základními pojmy. UX (User Experience) označuje celkový prožitek uživatele při interakci se systémem, zahrnující použitelnost, emoce, očekávání, důvěru i kontext. Použitelnost (usability) v duchu ISO 9241-11 znamená míru, s jakou mohou konkrétní uživatelé v konkrétním kontextu dosahovat stanovených cílů účinně, efektivně a se spokojeností. Uživatelské rozhraní (UI) je „povrch“ systému, tedy prvky a chování, skrze něž uživatel vnímá stav systému a zadává akce. Kognice zahrnuje mentální procesy jako percepce, pozornost, paměť, učení a rozhodování. Mentální model je vnitřní představa uživatele o tom, jak systém funguje; řídí očekávání, interpretaci zpětné vazby a volbu akcí.

Těžiště textu tvoří východiska z kognitivní psychologie, protože právě ta vysvětlují, proč uživatelé něco přehlédnou, proč chybují, jak se učí ovládání a jaké limity mají pozornost či paměť. Současně jde o základní oporu pro argumentaci u magisterských státnic: místo izolovaných „doporučení“ umožňuje vysvětlovat mechanismus, z něhož doporučení plyne, a propojit jej s návrhovými důsledky v UX.

## Kontext

HCI historicky vyrůstá z ergonomie a z oblasti human factors, které se původně soustředily na bezpečnost a výkon člověka při obsluze technických zařízení a pracovních systémů, často v kritických doménách jako letectví, zdravotnictví či průmysl. Ergonomie v tomto rámci optimalizuje vztah člověka a artefaktu tak, aby byl systém bezpečný, efektivní a komfortní, zatímco human factors představují širší inženýrsko‑psychologický rámec pro porozumění lidskému výkonu, chybám a bezpečnosti ve vztahu k technologiím. S nástupem osobních počítačů a grafických rozhraní se důraz posunul od čistě fyzických parametrů ovládání k mentálním procesům, které rozhodují o tom, zda uživatel porozumí stavům systému, najde funkci, vyhodnotí důsledky akce a dokáže se z chyb zotavit. Tento posun byl podpořen kognitivní vědou a experimentální psychologií, které přinesly metodologii měření času, chybovosti, učení či zátěže a umožnily formulovat nejen „doporučení“, ale i predikční modely.

Proměnila se také paradigma interakce: od desktopového prostředí s okny a kurzorem, přes mobilní rozhraní orientované na dotyk a krátké epizody používání, až po ubiquitous computing, kde interakce probíhá napříč zařízeními, často implicitně a v prostředí, které uživatele rozptyluje. Paradigma interakce zde chápeme jako relativně stabilní model toho, jak je interakce v dané éře a třídě zařízení koncipována, a tedy i jako zdroj očekávání uživatelů. Změna paradigmatu je vždy změnou očekávání a mentálních modelů, což má přímé důsledky pro použitelnost.

Důležitým teoretickým mostem mezi vnímáním a návrhem je pojem afordance a jeho doplnění o signifier. V klasickém, „gibsonovském“ smyslu je afordance možnost akce daná vztahem mezi vlastnostmi prostředí a schopnostmi aktéra; nejde tedy primárně o to, co uživatel „vidí“, ale o to, co je objektivně možné udělat. V designové praxi (v návaznosti na Normana) se však ukazuje, že sama možnost akce nestačí, protože uživatel ji musí rozpoznat a správně interpretovat, a proto se klíčově řeší vnímaná afordance a zejména signifiery. Signifier je vnímatelný signál v rozhraní, který uživateli napovídá, jakou akci prvek umožňuje a jak ji provést. Dobře navržené rozhraní tímto způsobem propojuje „možnost“ a „čitelnost možnosti“ a snižuje potřebu pokus‑omyl.

Rozhraní se navíc nikdy nepoužívá mimo situaci, proto je určující kontext použití, tedy souhrn fyzických, sociálních a technických podmínek, v nichž je systém používán, včetně motivace, rušení, zařízení a rizik. Respekt ke kontextu zvyšuje šanci, že kognitivní procesy budou pracovat „ve prospěch“ cíle, nikoli proti němu.

### 2.1 Vztah HCI a kognitivní psychologie

Kognitivní psychologie poskytuje HCI vysvětlující rámec: uživatel není „racionální procesor“ s neomezenou kapacitou, ale bytost s omezenou pozorností, omezenou pracovní pamětí a adaptivními strategiemi učení. Návrh rozhraní proto není jen estetické skládání prvků, ale vytváření podmínek pro percepci, rozhodování a kontrolu chyb. Percepce zde znamená organizaci a interpretaci senzorických vstupů do smysluplných objektů a vztahů, pozornost je mechanismus selekce informací pro další zpracování a pracovní paměť je systém pro dočasné udržení a manipulaci s informacemi během řešení úloh. Učení postupně snižuje náklady na výkon a rozhodování propojuje kognitivní limity s motivacemi, heuristikami a kontextem.

Tyto konstrukty se v HCI překlápějí do návrhových principů, například do důrazu na snižování kognitivní zátěže, na konzistenci, na viditelnost stavu systému či na preferenci rozpoznávání před vybavováním. Pro státnicovou odpověď bývá užitečné ukázat právě tento překlad: popsat mechanismus (například omezenou pracovní paměť) a z něj odvodit konkrétní návrhové důsledky (například potřebu externalizovat stav a nabídnout volby k rozpoznání).

### 2.2 Úrovně analýzy v HCI (od člověka po systém)

HCI pracuje s více úrovněmi analýzy, které je třeba držet pohromadě, protože problém zřídka vzniká jen „v hlavě uživatele“ nebo jen „v UI“. Na úrovni jednotlivce řešíme kognitivní a motorické procesy, které ovlivňují rychlost, chybovost i subjektivní náročnost. Na úrovni úkolu popisujeme, co má uživatel udělat a jaké kroky musí vykonat k dosažení cíle; úkol je cílená jednotka činnosti, například „odeslat objednávku“ nebo „zadat dávku léčiva“. V praxi se úkoly realizují v pracovním postupu, tedy v návaznosti kroků a rozhodovacích bodů v reálném procesu, často napříč rolemi či systémy. Na úrovni rozhraní pak studujeme, zda UI kroky podporuje, signalizuje a bezpečně provází. A konečně na úrovni sociotechnického systému zohledňujeme organizaci práce, odpovědnosti, prostředí a rizika; sociotechnický systém je celek tvořený lidmi, technologiemi, procesy a pravidly, kde změna jedné části mění chování ostatních.

Toto rámování je podstatné i pro praxi: zejména v enterprise aplikacích bývá zdroj UX problémů často v tom, že UI odráží datový model, role a oprávnění nebo procesní nastavení, které nejsou pro uživatele srozumitelné. HCI analýza pak pomáhá rozlišit, zda je třeba upravit prezentaci, konceptuální model, nebo samotný workflow.

### 2.3 Kanonické principy a heuristiky jako „mapa“ doporučení

Řada doporučení v HCI a UX se opakovaně vrací ve formě kanonických rámců. Nielsenovy heuristiky a Normanovy designové principy poskytují společný jazyk, který u státnic často pomáhá: mnoho jevů popsaných v tomto textu lze přiřadit k principům jako viditelnost stavu systému, zpětná vazba, omezení (constraints), mapování, konzistence, prevence chyb, rozpoznávání před vybavováním nebo práce s konceptuálním modelem. Smyslem není mechanicky vyjmenovat pravidla, ale ukázat, že jednotlivé kognitivní mechanismy a návrhové důsledky lze ukotvit v rámcích, které jsou v HCI komunitě stabilně sdílené a zkouškově „čitelné“.

## Hlavní pojmy

### 3.1 Model lidského zpracování informace (Model Human Processor) jako sjednocující rámec

Pro propojení percepčních, kognitivních a motorických kapitol je užitečné explicitně uvést Model Human Processor (Card, Moran, Newell). Tento model popisuje člověka jako systém složený z percepčního, kognitivního a motorického „procesoru“, které spolupracují s paměťovými systémy. Percepční část přijímá a strukturuje smyslové informace, kognitivní část interpretuje, plánuje a rozhoduje a motorická část realizuje akce. Pro HCI je důležité, že každý subsystém má omezenou kapacitu a typické časové konstanty, a že interakční výkon lze do určité míry predikovat z toho, jak se střídají percepční, mentální a motorické kroky. Právě na tento rámec pak přirozeně navazují predikční modely jako KLM, které rozkládají úlohu na elementární operace.

Tento model také pomáhá argumentovat, proč je návrh „kognitivně‑motorický“ problém: změna velikosti cíle ovlivní motorickou fázi, změna struktury menu ovlivní kognitivní fázi rozhodování a změna kontrastu či hierarchie ovlivní percepční fázi, která rozhoduje, co se vůbec dostane do zpracování.

### 3.2 Percepce a vnímání (zrak, sluch, haptika) v HCI

Percepce určuje, zda uživatel vůbec zaznamená podnět, rozliší varianty a dokáže číst či interpretovat informaci bez nadměrného úsilí. Ve vizuální oblasti se setkáváme s limity zrakové ostrosti, s vlivem kontrastu, velikosti písma a prostorového uspořádání, ale také s tím, že zrak je extrémně citlivý na změny a pohyb. To může být výhoda pro upozornění, ale i riziko rušení. Percepční práh, tedy minimální intenzita či rozdíl podnětu, který je člověk schopen spolehlivě zaznamenat, se navíc mění s podmínkami a kontextem. Psychofyzika zároveň ukazuje, že vnímání není lineární: „stejná“ změna intenzity nemusí být vnímána stejně, a proto je nutné navrhovat čitelnost robustně, zejména pro horší světelné podmínky a pro uživatele se zrakovým omezením.

Multimodální interakce kombinuje kanály, například vizuální notifikaci se zvukem či haptikou. Tím může snížit riziko přehlédnutí, ale současně zvyšuje senzorickou zátěž, pokud je redundantní, příliš častá nebo špatně prioritizovaná. Senzorická zátěž zde znamená míru, s jakou jsou smysly zatíženy podněty, což může vést k únavě, ignorování signálů nebo chybám. V automobilovém rozhraní například může být varování kombinováno vizuálním symbolem, zvukem a krátkou vibrací volantu, ale pokud systém vibruje a pípá i u nevýznamných událostí, řidič si vytvoří návyk signály ignorovat a kritický alarm ztratí účinnost.

### 3.3 Pozornost a kognitivní zátěž

Pozornost je úzké hrdlo kognitivního systému a UX problémy často nejsou „nepochopení“, ale selhání pozornosti v okamžiku, kdy rozhraní soutěží o mentální kapacitu uživatele. Selektivní pozornost způsobuje, že uživatel v danou chvíli zpracuje jen malou část dostupných informací; i viditelný prvek může být fakticky „neviditelný“, pokud nezapadá do očekávání nebo není dostatečně nápadný. Nápadnost (salience) je proto ambivalentní: může efektivně navést pozornost, ale zároveň může rozbíjet hierarchii a vytvářet falešná „poplašná“ místa, která odvádějí od cíle.

Klíčové je také přepínání úkolů (task switching), které nese náklady: uživatel musí obnovit kontext, znovu sestavit záměr a zorientovat se ve stavu systému. V prostředí notifikací a přerušení se navíc objevuje attention residue, tedy zbytkové zaměření na přerušený úkol, které zvyšuje chybovost a snižuje výkon v nové činnosti. Návrh rozhraní proto pracuje s redukcí vizuálního šumu, s podporou návratu do kontextu a s jasnými stavy, které minimalizují nutnost „rekonstrukce situace“ po přerušení.

Kognitivní zátěž obecně označuje nárok, který úkol a jeho reprezentace v rozhraní kladou na pracovní paměť a pozornost. Pro státnice bývá užitečné doplnit rámec Cognitive Load Theory, který rozlišuje zátěž danou samotnou složitostí úkolu (intrinsic load), zátěž způsobenou způsobem prezentace a interakce (extraneous load) a zátěž spojenou s učením a tvorbou schémat (germane load). V UX se typicky snažíme nepopírat intrinsic zátěž tam, kde je úkol přirozeně složitý, ale minimalizovat extraneous zátěž způsobenou nekonzistencí, nejasnými pojmy, špatným členěním, slabou zpětnou vazbou nebo nutností držet příliš mnoho informací „v hlavě“. Současně chceme umožnit germane zátěž, tedy podporovat učení a tvorbu stabilních mentálních modelů, například konzistencí, dobrými signifiery a srozumitelným konceptuálním modelem.

V podnikové aplikaci pro zadávání objednávek například může být akce „Smazat“ vizuálně stejně silná jako „Uložit“, čímž se zvyšuje riziko, že uživatel ve spěchu klikne na destruktivní volbu. Úpravou hierarchie akcí, odlišením destruktivní volby a vhodným potvrzením u vysoce rizikových kroků se zde snižuje extraneous zátěž i pravděpodobnost slipu.

### 3.4 Paměť (senzorická, pracovní, dlouhodobá) a návrh rozhraní

Paměť v HCI není jen „kolik si uživatel pamatuje“, ale jak lze návrhem snižovat potřebu udržovat informace v hlavě. Senzorická paměť zajišťuje velmi krátké uchování podnětů a pomáhá vysvětlit, proč je načasování přechodů a animací důležité. Pracovní paměť umožňuje aktivní manipulaci s informacemi, ale je kapacitně omezená a citlivá na rušení, zatímco dlouhodobá paměť drží znalosti, pojmy i procedury a umožňuje automatizaci.

Pro návrh je zásadní princip rozpoznávání před vybavováním: uživatel by měl častěji rozpoznat možnost v UI, než si ji muset vybavit z hlavy. Pokud rozhraní nutí uživatele pamatovat si kódy, názvy kroků nebo přesné umístění funkcí bez nápovědy, zatěžuje pracovní paměť a zvyšuje pravděpodobnost chyb. Přirozeným nástrojem je chunking, tedy seskupování do smysluplných celků odpovídajících mentálním kategoriím uživatele, čímž se zmenšuje počet prvků, jež musí pracovní paměť současně držet. V dlouhém formuláři pro založení účtu lze údaje rozdělit do logických kroků jako identita, kontakt a bezpečnost, přičemž každý krok dává uživateli jasný smysl; alternativou je jediná stránka s desítkami polí, kde uživatel snadno ztratí orientaci a bude opakovaně opravovat chyby.

### 3.5 Učení, automatizace a vznik návyků

Uživatelské rozhraní je vždy prostředím pro učení: i když uživatel nechce „studovat“, vytváří si pravidla, očekávání a procedury, které příště automatizuje. Rozdíl mezi nováčkem a expertem se projevuje v tom, že nováček potřebuje výrazné signály a průvodce krok za krokem, zatímco expert preferuje zkratky, vyšší hustotu informací a minimalizaci potvrzovacích dialogů.

Procedurální paměť, tedy složka dlouhodobé paměti uchovávající dovednosti a postupy vykonávané automaticky, je pro výkon zásadní. Konzistence napříč systémem i mezi systémy podporuje transfer, tedy přenos učení: pokud se podobné věci ovládají podobně, uživatel rychleji generalizuje a méně chybuje. Transfer však může být i negativní, pokud se podobné prvky chovají odlišně a uživatel automaticky provede špatnou akci. Vznik návyků je užitečný pro plynulost, ale nebezpečný tam, kde se kontext mění a automatická akce může mít závažné důsledky; v kritických procesech je někdy žádoucí záměrně přerušit automatizaci výrazným varováním, rekapitulací nebo změnou režimu.

Zkušený uživatel účetního systému může rutinně potvrzovat dialogy klávesou Enter; pokud se v určité situaci objeví dialog s opačně seřazenými akcemi, návyk vede k potvrzení destruktivního kroku. Z toho plyne návrhový důraz na stabilní pořadí akcí u rizikových rozhodnutí a na jasné signifiery, které i experta „zastaví“ ve chvíli, kdy je to bezpečnostně žádoucí.

### 3.6 Mentální modely, konceptuální model a mapování

Mentální model uživatele je praktická teorie o tom, „co systém dělá“, a z této teorie plyne volba akce i interpretace výsledku. Návrhář pracuje s konceptuálním modelem, tedy s tím, jak systém „má“ fungovat a jaké entity a vztahy v něm existují. Pokud UI konceptuální model nekomunikuje konzistentně, uživatel si vytvoří alternativní mentální model, který může být křehký nebo nebezpečný.

Klasickým popisem problému jsou mezery provedení a vyhodnocení. Mezera provedení (gulf of execution) je rozdíl mezi záměrem uživatele a možnostmi akcí, které rozhraní zjevně nabízí, zatímco mezera vyhodnocení (gulf of evaluation) je rozdíl mezi stavem systému a schopností uživatele tento stav správně interpretovat vzhledem ke svému cíli. Mapování ovládacích prvků na účinky je v tomto ohledu klíčové: pokud vztah mezi akcí a dopadem není přirozený, uživatel je nucen odhadovat, učit se nazpaměť nebo dělat pokus‑omyl, což zvyšuje zátěž i chybovost.

Metafory rozhraní mohou pomoci, pokud odpovídají zkušenosti uživatele, ale mohou také škodit, pokud vytvářejí falešná očekávání. V cloudovém úložišti může metafora „složek“ usnadnit orientaci, ale pokud systém ve skutečnosti pracuje hlavně se štítky a vyhledáváním, uživatel může očekávat jediné „umístění“ souboru a být překvapen, že soubor patří do více kategorií. Návrh musí metaforu buď konzistentně podpořit, nebo ji otevřeně nahradit jiným konceptuálním modelem.

### 3.7 Rozhodování a heuristiky (kognitivní zkreslení)

Rozhodování v UI se často odehrává pod časem, s neúplnými informacemi a s omezenou pozorností, což vede k využívání heuristik. Heuristika je jednoduché pravidlo či strategie, která zrychluje rozhodování, ale může vést k předvídatelným chybám. Kognitivní zkreslení (bias) pak označuje systematickou odchylku v úsudku a rozhodování vznikající z heuristik, emocí a kontextu.

Default efekt ukazuje, že uživatelé často ponechávají přednastavenou volbu, protože ji interpretují jako doporučení nebo se vyhýbají nákladům změny. Framing mění volby tím, jak je informace formulována, a ukotvení ovlivňuje odhady na základě prvního čísla či varianty, kterou uživatel uvidí. Pro propojení s behaviorální ekonomií je zároveň užitečné připomenout loss aversion, tedy tendenci vnímat ztrátu jako psychologicky silnější než srovnatelný zisk, což vysvětluje citlivost na poplatky, storna nebo „ztrátu benefitu“ při změně volby. V designu se tyto jevy promítají do toho, jak se formulují důsledky akcí, jak se nastavují defaulty a jak se strukturuje porovnání variant.

Z hlediska etiky je podstatné, zda návrh heuristiky používá k podpoře informovaného rozhodnutí, nebo k manipulaci výhodné primárně pro poskytovatele služby. Při výběru tarifu může být prostřední varianta označena jako „doporučená“ a vizuálně zvýrazněna; pokud zvýraznění odpovídá reálně nejčastějším potřebám a je doplněno srozumitelným srovnáním, jde o užitečné vedení, ale pokud je „doporučení“ motivováno pouze vyšší marží a informace o omezeních je skryta, návrh sklouzává k manipulaci.

### 3.8 Chyby, slips a mistakes (human error) a prevence včetně SRK

V HCI se chyby nevykládají jako morální selhání uživatele, ale jako predikovatelné důsledky návrhu a kontextu. Rozlišuje se mezi slip a mistake: slip je chyba provedení, kdy uživatel ví, co chce udělat, ale provede to špatně, typicky kvůli nepozornosti, automatizaci nebo podobnosti prvků. Mistake je chyba záměru či pravidla, kdy uživatel jedná podle nesprávného mentálního modelu nebo zvolí špatnou strategii.

Pro magisterskou úroveň je užitečné propojit tuto distinkci s Rasmussenovým rámcem SRK (skill–rule–knowledge). Na úrovni dovednosti (skill‑based) jsou akce automatizované a rychlé, a chyby zde mají často podobu slipů vyvolaných rušením nebo špatným rozlišením prvků. Na úrovni pravidel (rule‑based) uživatel aplikuje naučené postupy „když nastane X, udělej Y“ a chyby mohou vznikat z nesprávného výběru pravidla nebo z nejednoznačné situace. Na úrovni znalostí (knowledge‑based) uživatel řeší nový problém, inferuje a improvizuje; chyby zde souvisejí s nedostatkem informací, špatným konceptuálním modelem nebo s nesprávnou interpretací důsledků. Toto členění pomáhá odvodit intervenci: slipy typicky řešíme motorickou bezpečností, jasnou hierarchií a prevencí záměny, zatímco mistakes řešíme zlepšením konceptuálního modelu, terminologie, feedforwardu a zpětné vazby.

Prevence chyb kombinuje několik vrstev. Omezení (constraints) brání neplatným akcím, validace zachytí chyby v okamžiku zadávání, potvrzení chrání před destruktivními kroky a mechanismy obnovy jako undo snižují důsledky nevyhnutelných selhání. Zároveň platí, že potvrzovací dialogy mají smysl u nevratných nebo vysoce rizikových akcí, ale pokud se používají plošně, vedou k habituaci a uživatel je odklikává bez čtení, čímž se bezpečnost paradoxně snižuje. V nemocničním systému pro předepisování léků může být záměna jednotek nebo dávkování fatální; proto je vhodné kombinovat omezení (výběr jednotek z kontrolovaného seznamu), validaci (varování při atypicky vysoké dávce) a zřetelné zobrazení kontextu pacienta i léku před finálním potvrzením.

### 3.9 Motorika a výkon: Fittsův zákon, Hick–Hymanův zákon a reakční čas

Motorické aspekty interakce jsou v UX často podceňované, přestože přímo určují rychlost a spolehlivost ovládání. Fittsův zákon popisuje, že čas potřebný k zacílení roste se vzdáleností cíle a klesá s velikostí cílové plochy; v praxi to znamená, že malé a vzdálené prvky jsou pomalé a chybové, zejména na dotyku. Hick–Hymanův zákon doplňuje, že čas volby roste s počtem a entropií možností; rozsáhlá menu a složité volby zvyšují reakční čas, pokud nejsou strukturovány nebo pokud uživatel nemá silné vodítko. Reakční čas se prodlužuje i s nízkou očekávatelností a s kognitivní zátěží, což propojuje výkonové modely s kapitolou o pozornosti.

V HCI se výkon někdy vyjadřuje throughputem, který propojuje rychlost a přesnost a hodí se při porovnávání variant ovládání. V mobilní aplikaci je například problematické umístit drobnou ikonu „Zavřít“ do rohu, kam uživatel dosahuje hůře a navíc ji zakrývá prstem; zvětšení cíle a posun do snadno dosažitelné oblasti zlepší rychlost i sníží počet chybných klepnutí. Podobně je rizikové umístění „Smazat“ vedle „Uložit“, protože při rychlé práci a malé vzdálenosti roste pravděpodobnost slipu; bezpečnější je destruktivní akci oddělit, snížit její nápadnost a případně doplnit undo.

### 3.10 Gestalt principy a vizuální organizace

Vizuální organizace je mechanismus, kterým uživatel vytváří z rozhraní smysl ještě před tím, než začne číst texty. Gestalt principy popisují, jak mozek spontánně seskupuje prvky podle blízkosti, podobnosti, uzavřenosti či kontinuity, což se přímo promítá do layoutu, hierarchie a navigace. Vizuální hierarchie je uspořádání prvků tak, aby bylo zřejmé, co je primární, sekundární a jaké jsou vztahy mezi částmi obsahu.

Princip figura–pozadí je kritický pro čitelnost a orientaci: uživatel musí snadno rozlišit, co je interaktivní objekt a co je jen pozadí či doprovodná informace. Pokud jsou tlačítka a běžné textové odkazy stylizovány stejně, porušuje se podobnost jako signál funkce a uživatel musí více přemýšlet, co je klikatelné; naopak konzistentní vizuální jazyk umožňuje rychlé „skenování“ stránky. Správné seskupování zároveň snižuje kognitivní zátěž, protože uživatel „vidí strukturu“ bez nutnosti ji odvozovat.

### 3.11 Zpětná vazba, feedforward a stav systému

Interakce je dialog: uživatel dává systému podnět a systém musí odpovědět způsobem, který zmenšuje nejistotu. Zpětná vazba (feedback) informuje o tom, co se stalo, zatímco feedforward informuje o tom, co se stane, pokud uživatel akci provede; oba mechanismy společně podporují správné plánování a interpretaci. Viditelnost stavu systému je jedním ze základních pilířů použitelnosti, protože bez ní uživatel nemůže tvořit správné mentální modely ani se bezpečně rozhodovat.

Latence je přitom nejen technický, ale i kognitivní problém: pokud odezva nepřijde v očekávaném časovém okně, uživatel začne opakovat akci, přepínat kontext nebo ztrácí důvěru. Animace může být užitečná tehdy, když vysvětluje kontinuitu změny a podporuje orientaci, nikoli když je samoúčelná a zdržuje. Při odesílání platby je proto vhodné okamžitě změnit stav tlačítka na „Odesílám…“, zabránit opakovanému odeslání a zároveň zobrazit jasné potvrzení výsledku; tím se sníží riziko dvojité transakce vyvolané nejistotou z latence.

### 3.12 Emoce, motivace a prožitek (UX) v kognitivním rámci

Emoce nejsou v HCI „navíc“, ale spoluurčují pozornost, paměť i interpretaci situace. Pozitivní afektivní stav může podporovat exploraci a toleranci k drobným nedostatkům, zatímco frustrace zužuje pozornost, zvyšuje impulzivitu a zhoršuje schopnost řešit problémy. Motivace je klíčová zejména u produktů, kde uživatel nemusí úkol splnit „povinně“, zatímco u podnikových systémů se často váže na snížení tření, jistotu a rychlost. Důvěra se buduje transparentností, predikovatelností a konzistencí a rychle se ztrácí při nevysvětlitelných chybách nebo podezřelých požadavcích na data.

Affective computing se zabývá rozpoznáváním, modelováním a případně i ovlivňováním emocí pomocí výpočetních systémů. V praxi UX se však často ukazuje, že „delight“ nebývá primárně výsledkem dekorativních efektů, ale plynulosti, pocitu kompetence a kontroly. U bankovní aplikace může drobná vizuální „příjemnost“ pomoci, ale rozhodující pro UX je pocit bezpečí a kontroly, například jasné potvrzení transakce, srozumitelná historie a rychlá možnost blokace karty.

### 3.13 Kognitivní modely v HCI (GOMS/KLM, ACT-R) a jejich využití

Kognitivní modely umožňují formalizovat, jak uživatel vykonává úlohu, a predikovat výkon bez nutnosti okamžitě testovat s velkým vzorkem. GOMS rozkládá chování na cíle, operátory, metody a pravidla výběru a pomáhá porovnat návrhy z hlediska struktury kroků. KLM (Keystroke‑Level Model) jde blíž k interakčním „atomům“ a odhaduje čas na úrovni úhozů, pohybů a mentálních kroků; jeho logika dobře navazuje na Model Human Processor tím, že pracuje s typickými časy percepčních, kognitivních a motorických operací. ACT‑R představuje širší kognitivní architekturu, jež simuluje interakci paměti, učení a rozhodování, a hodí se tam, kde potřebujeme uvažovat i o tom, jak se výkon mění se zkušeností.

Tyto modely jsou vhodné pro rané porovnání variant, pro optimalizaci pracovních postupů a pro situace, kde je testování drahé či rizikové, ale nenahrazují uživatelské testování tam, kde je klíčová interpretace významu, emoce, důvěra nebo nečekané strategie uživatelů. Při návrhu interního nástroje pro call centrum lze pomocí KLM porovnat, zda je rychlejší přepínat mezi záložkami myší, nebo používat klávesové zkratky; následné uživatelské testování však může odhalit, že operátoři preferují jednu variantu kvůli nižší chybovosti v hlučném prostředí a lepší kontrole nad stavem.

## Aplikace

Převod kognitivních principů do praxe UX znamená, že návrhová rozhodnutí nejsou jen otázkou vkusu, ale práce s evidencí, riziky a kontextem. Z principů pozornosti, paměti a rozhodování se v praxi rodí návrhové principy a design patterny, tedy opakovatelná řešení typických problémů, která lze odůvodnit empiricky a ověřovat měřením. Evidence‑based design zdůrazňuje, že volby by měly být opřeny o data, výzkum a validaci, nikoli pouze o preference stakeholderů.

V kritických systémech, jako je zdravotnictví nebo automotive, se navíc přidává požadavek na situační povědomí (situational awareness), tedy schopnost uživatele vnímat, co je relevantní, chápat význam a předvídat, co bude následovat. Zde je HCI úzce spjato s bezpečnostním inženýrstvím: nestačí zobrazit mnoho dat, je nutné podpořit rychlou interpretaci trendů, jasně odlišit alarmy od informativních změn a minimalizovat falešné poplachy, protože ty narušují pozornost a vedou k ignorování signálů.

Pedagogicky je užitečné si v této části uvědomit typickou zkouškovou logiku: dobrá odpověď obvykle propojí kognitivní mechanismus, návrhový princip a metodu ověření. Například omezená pracovní paměť vede k externalizaci stavu a postupnému odhalování, které následně ověřujeme uživatelským testem, metrikami chybovosti a subjektivní zátěže.

### 4.1 Informační architektura a navigace

Informační architektura převádí způsob, jak lidé kategorizují svět, do struktury obsahu a funkcí tak, aby se snižovala zátěž pracovní paměti a zvyšovala předvídatelnost. Uživatelé při navigaci využívají informační vůni (information scent), tedy vnímanou pravděpodobnost, že určitá volba povede k cíli, odvozovanou z názvů, popisků, kontextu a předchozí zkušenosti. Taxonomie a navigační model musí odpovídat mentálním modelům uživatelů a jejich jazykovým kategoriím; jinak bude navigace působit jako bludiště, i když je „logická“ z pohledu organizace.

E‑shop může mít interně perfektně strukturované kategorie podle skladové logiky, ale uživatel hledá „dárek pro běžce“. Doplnění navigace o tematické vstupy, filtry a vyhledávání s dobrými návrhy posiluje informační vůni a snižuje potřebu držet si v hlavě hypotézy typu „kde co asi je“. Ve veřejné správě bývá analogicky často srozumitelnější členění podle životních situací než podle názvů odborů, protože odpovídá tomu, jak uživatelé formulují cíle.

### 4.2 Návrh formulářů, chybových stavů a mikrocopy

Formuláře jsou laboratoří kognitivní zátěže: vyžadují pozornost, přesnost, porozumění požadavkům a často i rozhodování pod nejistotou. Mikrocopy, tedy krátké texty v UI, funguje jako signifier pro mentální model, protože vysvětluje, co se očekává, proč to systém chce a co se stane dál. Validace by měla být načasovaná tak, aby chytala chyby co nejdříve, ale neobtěžovala při přirozeném psaní; chybová hláška má být srozumitelná, konkrétní a akční, aby zmenšila mezeru vyhodnocení. Postupné odhalování (progressive disclosure) je důležité tehdy, když má uživatel k dispozici mnoho voleb, ale většina z nich je relevantní jen v určitém kontextu; tím se snižuje vizuální šum i rozhodovací náklady.

V registraci lze například nejprve vyžádat e‑mail a heslo a teprve po ověření e‑mailu zobrazit doplňující údaje; uživatel tak nevyplňuje dlouhý formulář „do prázdna“ a systém může dříve zachytit chyby typu překlep v e‑mailu. U hesel může mikrocopy typu „Heslo musí mít alespoň 12 znaků a obsahovat číslo“ spolu s okamžitou validací snížit počet pokusů a frustraci, přičemž možnost zobrazení hesla snižuje slipy způsobené překlepy.

### 4.3 Přístupnost (a11y) jako aplikace poznatků o percepci a kognici

Přístupnost není speciální režim pro menšinu, ale důsledek respektu k variabilitě percepce, motoriky a kognice v populaci. Kontrast a čitelnost navazují na psychofyzické limity vnímání, zatímco srozumitelnost textů, konzistence a předvídatelnost snižují kognitivní zátěž a podporují tvorbu stabilních mentálních modelů. Kognitivní přístupnost se projevuje mimo jiné tím, že rozhraní pracuje s jednoduchými větami, jasnou strukturou, omezuje zbytečné rušení a podporuje bezpečné zotavení z chyb.

U čtení a porozumění je užitečné rozlišit čitelnost a srozumitelnost. Čitelnost se týká toho, zda lze text percepčně pohodlně přečíst, tedy například velikosti písma, kontrastu, délky řádku a mezery mezi řádky; srozumitelnost se týká toho, zda uživatel rozumí významu, tedy volby slov, struktury instrukcí a toho, zda text nepřetěžuje pracovní paměť. Dlouhé instrukce a podmínky, které vyžadují držet několik pravidel najednou, zvyšují extraneous zátěž a vedou k chybám; rozdělení instrukcí na kroky, zviditelnění stavu a dobré microcopy naopak podporují error recovery.

Standardy jako WCAG poskytují principový rámec, který v praxi znamená navrhovat vnímatelně, ovladatelně, srozumitelně a robustně. Z kognitivního hlediska je například důležitá „predictable“ složka: předvídatelné chování snižuje náklady na přepínání a rekonstrukci mentálního modelu, protože uživatel nemusí po každé akci znovu odhadovat, co se stalo a proč. Pokud aplikace používá barvu jako jediný nosič informace, například červená versus zelená bez doprovodného textu, porušuje percepční předpoklady části uživatelů; doplnění ikonky, textového štítku a dostatečného kontrastu zlepší přístupnost i celkovou použitelnost.

### 4.4 Interakční návrh pro mobilní a dotyková rozhraní

Mobilní rozhraní zdůrazňuje motorické a kontextové aspekty HCI. Dotykové cíle musí být navrženy s ohledem na Fittsův zákon a na skutečnost, že prst zakrývá obsah a snižuje přesnost; occlusion (zakrytí prstem) zhoršuje vnímání zpětné vazby v okamžiku akce, a proto je důležitá jasná odezva mimo zakrytou oblast. Gesta mohou zrychlovat práci expertů, ale často trpí nízkou objevností, pokud nejsou podpořena signifiery a nápovědou.

Mobilní kontext navíc znamená fragmentovanou pozornost, krátké interakční epizody a časté rušení, proto je důležitá jednoduchost, možnost pokračování po přerušení a práce s prioritami. Navigace v mobilní aplikaci pro MHD například musí umožnit rychlé znovuzachycení kontextu po zamčení telefonu; zobrazení posledního vyhledání a jasné tlačítko „Pokračovat“ snižuje náklady na návrat po přerušení a podporuje plynulost v reálných podmínkách.

### 4.5 Metody UX výzkumu inspirované kognitivní psychologií

UX výzkum přebírá z experimentální psychologie důraz na kontrolu podmínek, měření výkonu a práci s validitou závěrů. Experiment umožňuje testovat kauzální vliv změny v UI na výkon, ale vyžaduje kontrolu konfuzních proměnných, tedy faktorů, které by mohly výsledek vysvětlit alternativně, například rozdíly ve zkušenosti účastníků. Vedle experimentů jsou důležité observační studie a terénní výzkum, které zachytí reálné strategie, improvizace a problémy v kontextu, i když hůře podporují kauzální inference.

Kognitivní výkon se často měří časem dokončení úkolu, úspěšností a chybovostí, ale důležitá je i subjektivní zátěž, například pomocí škály NASA‑TLX. Eye‑tracking poskytuje data o vizuální pozornosti, ale vyžaduje opatrnou interpretaci, protože „dívat se“ neznamená „chápat“. Think‑aloud pomáhá odhalit mentální modely a rozhodovací kroky, i když může měnit průběh výkonu, protože verbalizace zatěžuje pracovní paměť. A/B testy jsou užitečné v produkci pro porovnání variant na velkých vzorcích, ale bez pochopení mechanismu mohou vést k povrchním optimalizacím a mohou být citlivé na kontextové změny.

Pokud A/B test ukáže, že varianta s výraznějším tlačítkem zvyšuje kliky, nemusí to znamenat lepší UX; bez kvalitativního vysvětlení může jít o manipulativní zvýšení akce, které později sníží důvěru a zvýší storna. Triangulace metod, tedy kombinace měření výkonu, pozorování a rozhovorů, pomáhá propojit „co se stalo“ s „proč se to stalo“ a je často nejbezpečnější cestou k obhajitelným závěrům.

## Výzvy a omezení

Přenos poznatků kognitivní psychologie do praxe HCI naráží na limity generalizace, protože laboratorní podmínky často zjednodušují realitu. Ekologická validita označuje míru, s jakou výsledky výzkumu odpovídají chování v reálném prostředí, a generalizace je oprávněnost přenést závěry z určitého vzorku, úkolu a kontextu na jiné uživatele a situace. V praxi se navíc uplatňují individuální rozdíly v percepci, zkušenosti, motivaci či kognitivních strategiích, což znamená, že „průměrný uživatel“ je často špatným cílem.

Návrh se proto pohybuje v trade‑off mezi rychlostí a bezpečností, mezi jednoduchostí pro nováčky a efektivitou pro experty, nebo mezi atraktivitou a stabilitou. Významnou výzvou jsou také etické otázky, zejména dark patterns, které zneužívají kognitivní zkreslení a pozornostní limity. Zároveň je třeba uznat, že UX metriky mohou být v konfliktu: zlepšení času na úkol nemusí zvýšit důvěru a subjektivní spokojenost může být ovlivněna očekáváním či značkou více než samotným UI.

### 5.1 Ekologická validita a kontext: proč uživatelé v praxi selhávají jinak než v labu

V reálném prostředí jsou uživatelé vystaveni rušení, multitaskingu, stresu a časovému tlaku, což zásadně mění pozornost i rozhodování. Laboratorní testy často pracují s motivovanými účastníky v klidném prostředí, zatímco v praxi může uživatel řešit více věcí najednou a systém používat jen „na půl oka“. To vysvětluje, proč některé chyby v terénu vznikají i u rozhraní, která v labu působí bezproblémově.

Proto je důležitý terénní výzkum a triangulace metod. U mobilní aplikace pro řidiče rozvážkové služby může laboratorní test potvrdit použitelnost trasování, ale teprve pozorování v terénu odhalí, že uživatelé často přepínají mezi navigací, hovorem a potvrzováním doručení, což vyžaduje jinou práci se stavem a přerušením.

### 5.2 Kognitivní rozmanitost a inkluzivní design

Uživatelé se liší zkušeností, věkem, jazykovou kompetencí i kognitivním stylem a tyto rozdíly nejsou okrajové, ale strukturální. Inkluzivní design zohledňuje rozmanitost uživatelů a snaží se minimalizovat vylučující bariéry v interakci. Neurodiverzita připomíná, že některé kognitivní profily nejsou „poruchou“ v jednoduchém smyslu, ale odlišným způsobem zpracování, který vyžaduje flexibilitu v prezentaci informací a v interakčních možnostech. Stárnutí pak přináší věkem podmíněné zhoršení některých funkcí, jako je zrak, motorika či rychlost zpracování, což posiluje požadavky na čitelnost, velikost cílů a jednoduchost.

Rozdíl mezi nováčkem a expertem se promítá do potřeb podpory učení versus efektivity. V účetním systému mohou experti pracovat téměř výhradně z klávesnice; pokud redesign odstraní zkratky nebo změní pořadí polí bez jasného důvodu, dojde k propadu výkonu a nárůstu slipů, zatímco nováčkům může nový vizuální layout pomoci. Inkluzivní návrh proto často znamená nabídnout více cest k cíli při zachování jednotného konceptuálního modelu a konzistence.

### 5.3 Etika a manipulace: hranice mezi persuasive design a zneužitím

Persuasive design může být legitimní, pokud podporuje cíle uživatele, například pomáhá vytvořit návyk zdravého chování nebo zvyšuje bezpečnost. Hranice se překračuje tehdy, když je uživatel manipulován proti svým zájmům, když je mu bráněno odmítnout nebo když je volba záměrně zamlžena. Autonomie uživatele a informovaný souhlas jsou zde klíčové, protože právě tyto principy chrání uživatele před zneužitím default efektu, framingu nebo asymetrické frikce.

Eticky citlivé jsou zejména defaulty a ztěžování odmítnutí, protože využívají averzi k námaze a status quo tendence. Dlouhodobým dopadem manipulativních vzorců je eroze důvěry, která se obtížně obnovuje a může mít i regulatorní důsledky. Pokud je odhlášení z newsletteru schované za několika kroky, zatímco přihlášení je na jedno kliknutí, jde o asymetrii využívající kognitivní zátěž jako nátlak; férový návrh zachová srovnatelnou snadnost obou voleb.

### 5.4 Měření UX vs. výkonové metriky

Měření v HCI a UX se pohybuje mezi objektivními výkonovými metrikami a subjektivními zkušenostmi. Validita a reliabilita jsou zásadní, protože bez nich mohou čísla vytvářet falešnou jistotu. Subjektivní škály zachycují vnímání a emoce, ale jsou citlivé na kontext, očekávání i pořadí otázek. Interpretaci může zkreslovat konfirmační zkreslení, kdy výzkumník i tým preferují data potvrzující původní hypotézu.

V praxi je proto důležité kombinovat metriky, spojovat kvantitativní výstupy s kvalitativním vysvětlením a přiznávat nejistotu. Někdy je relevantnější snížení chyb v kritických krocích než zrychlení celého procesu a jindy je naopak důležitější důvěra a srozumitelnost než maximální rychlost. U státnic často pomůže ukázat, že „lepší metrika“ není univerzální, ale závisí na cílech, rizicích a kontextu.

## Související témata

Kognitivní východiska HCI se přirozeně propojují s širším kurikulem UX a informačních systémů. Poskytují teoretický základ pro heuristické hodnocení, uživatelský výzkum, informační architekturu, interakční designové vzory, přístupnost a inkluzivní návrh, evaluaci pomocí UX metrik, prototypování a testování, kognitivní aspekty vizualizace informací i etiku v UX včetně dark patterns a regulací digitálních služeb. V organizační rovině navazují na sociotechnické systémy a na to, jak kontext, procesy a kultura ovlivňují výslednou interakci. V rozhodovacích tématech se pak překlápějí do behaviorální ekonomie, která doplňuje kognitivní heuristiky o motivace a incentivy v reálném světě.

## Závěr

Východiska HCI v kognitivní psychologii ukazují, že kvalita interakce není primárně otázkou estetického vkusu, ale důsledkem sladění rozhraní s lidskými mechanismy vnímání, pozornosti, paměti, učení, rozhodování a motoriky. Model Human Processor poskytuje užitečný sjednocující rámec pro pochopení toho, proč některé návrhové volby mění výkon a chybovost, a proč na něj logicky navazují predikční modely jako KLM. Klíčovou roli hrají mentální modely a jejich vztah ke konceptuálnímu modelu systému, protože právě zde vznikají omyly, nejistota i frustrace, zatímco dobře navržená zpětná vazba, feedforward a viditelnost stavu minimalizují mezery provedení a vyhodnocení.

Praktické aplikace se promítají do informační architektury, formulářů, mikrocopy, přístupnosti a návrhu pro mobilní kontext, přičemž výzkumné metody inspirované kognitivní psychologií umožňují návrhy ověřovat jak výkonově, tak prožitkově. Současně je nutné reflektovat omezení ekologické validity, kognitivní rozmanitost uživatelů a etické hranice persuasivních technik, protože dobré HCI a UX musí být nejen efektivní, ale také férové, bezpečné a důvěryhodné.
