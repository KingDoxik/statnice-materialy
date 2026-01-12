---
title: "Shrnutí"
subject: "Design zamereny na cloveka"
subjectSlug: "08-design-zamereny-na-cloveka"
order: 0
---
## Úvod

**Design zaměřený na člověka (HCD)** se u státnic vyplatí obhajovat jako způsob, jak ve složitých a nejistých situacích dělat lepší rozhodnutí – ne jako snahu „udělat hezčí UI“. V praxi totiž většina selhání nevzniká tím, že by tým neuměl navrhnout obrazovku, ale tím, že příliš brzy uvěří prvnímu výkladu problému, zamění symptom za příčinu a pak už jen efektivně implementuje špatný směr. HCD proto stojí na důkazech, iteracích a disciplíně ve framingu: nejdřív pochopit, co se lidem v jejich situaci děje, a teprve potom rozhodnout, co navrhovat a proč.

Model **dvojího diamantu** je pro státnicovou argumentaci užitečný právě tím, že jasně odděluje **problémový prostor** od **prostoru řešení**. Tím chrání tým před předčasným skokem k implementaci a zároveň dává srozumitelný jazyk pro stakeholdery: dokážeme pojmenovat, kdy „teď objevujeme“ a kdy „teď už volíme a ověřujeme koncept“. V kontextu ISO pohledu na HCD (viz kapitola 1) je to praktická vizualizace iterativního procesu založeného na **kontextu použití** a průběžném vyhodnocování.

## Dvojí diamant jako příběh učení: od nejistoty k rozhodnutím

Dvojí diamant je nejlepší chápat jako narativ toho, jak se tým učí: dvakrát se vědomě rozšíří prostor možností a dvakrát se zúží do rozhodnutí. První vlna divergence a konvergence patří porozumění problému – sbíráme různé perspektivy, data a hypotézy, a pak je syntézou zredukujeme do sdíleného rámování. Druhá vlna pak patří návrhu – generujeme varianty řešení, a následně konvergujeme na koncepty, které mají nejlepší poměr očekávané hodnoty, proveditelnosti a ověřitelnosti.

Podstatné je zdůraznit, že nejde o vodopád. Fáze se překrývají a cyklí, ale existují vědomé **rozhodovací brány (gates)**: chvíle, kdy tým řekne „tomuhle framingu věříme natolik, že podle něj budeme navrhovat“ a později „tenhle koncept je náš nejlepší kandidát, jdeme ho ověřit“. Právě tato explicitnost je opakem designového chaosu, kdy se střídá brainstorming, prototypování a vývoj bez jasného učení.

V praxi diamant funguje i jako komunikační smlouva se stakeholdery. Když umíme jasně pojmenovat, že jsme v režimu Discover/Define, legitimizujeme investici do výzkumu a syntézy jako do práce, která snižuje riziko špatného rozhodnutí. A zároveň se tím dobře propojuje s agilním prostředím: **Agile/Scrum** typicky řídí rytmus dodávky („jak dodáváme“), zatímco diamant pomáhá zjistit „co a proč dodávat“ – tedy discovery nadstavbu nad backlogem (viz kapitola 1). V Lean UX se to potká na úrovni rychlých experimentů, ale diamant hlídá, aby rychlost nebyla vykoupena tím, že jen rychle testujeme špatně definovaný problém.

## Disciplína práce s důkazy: empatie jako metoda, ne jako dojem

V HCD se často mluví o empatii, ale na magisterské úrovni je dobré ji vysvětlit jako metodickou snahu snížit projekce a předsudky. Nejde o „vcítění“, které končí pocitem, ale o systematický sběr a vyhodnocování důkazů o tom, co lidé dělají, proč to dělají a v jakých podmínkách. Jinými slovy, empatie je tu nástrojem **evidence-based** rozhodování (viz kapitola 1), ne emocionálním argumentem.

Kvalita rozhodnutí přitom nezávisí na množství dat, ale na tom, jak dobře data odpovídají otázce a jak přísně oddělíme **pozorování** od **interpretace**. Týmy často selžou tak, že z jedné výpovědi udělají „pravdu o uživatelích“, nebo naopak z velkých čísel v analytice vyvozují kauzalitu bez mechanismu. Zralý přístup znamená pracovat s nejistotou: skládat důkazy z více zdrojů (triangulace), přiznat limity vzorku, hledat kontrapříklady a udržet dohledatelnost, odkud se který závěr vzal.

Pro státnice je také silná distinkce **output–outcome–impact**. Můžeme dodat výstup (nová funkce, formulář, obrazovka), ale výsledkem má být změna v chování nebo metrice a dopadem dlouhodobější změna v systému (např. snížení administrativní zátěže nebo posílení důvěry). Tohle je praktická ochrana proti „optimalizaci artefaktů“: bez této logiky se snadno zlepší klikání, ale zhorší se porozumění, důvěra nebo férovost.

Evidence-based přístup je přitom lepidlo mezi všemi fázemi diamantu. V Discover sbíráme důkazy o realitě, v Define z nich děláme závazný framing, v Develop z framingu odvozujeme varianty a **hypotézy**, v prototypování a Deliver hypotézy střetáváme s chováním. A/B testy a metriky do toho patří, ale nejsou náhradou porozumění: bez vysvětlení „proč“ dávají jen falešnou jistotu a mohou vést k metricky řízeným slepým uličkám (viz kapitola 1–2).

## Discover: primární výzkum jako práce s kontextem (ne se „zákaznickým názorem“)

Discover typicky začíná zadáním od stakeholderů, které často popisuje symptom („lidé nedokončují registraci“) nebo rovnou preferované řešení („přidejme chatbot“). Smysl Discover je toto zadání rozložit na výzkumné otázky a zjistit, co se lidem ve skutečnosti děje v jejich situacích – tedy pracovat s **kontextem použití** ve smyslu ISO (viz kapitola 1). Prakticky to znamená přemýšlet v ose uživatelé–úkoly–prostředí–technologie: kdo to dělá, čeho chce dosáhnout, co mu do toho vstupuje (časový tlak, stres, přerušení, sociální okolí) a jaké nástroje a omezení u toho má.

Volba metod se pak řídí tím, jaký typ nejistoty snižujeme. Kvalitativní metody (rozhovory, pozorování, kontextové šetření) jsou vhodné, když potřebujeme pochopit význam a mechanismus, tedy proč něco vzniká. Kvantitativní metody (dotazník, analytika, logy) pomáhají, když potřebujeme vědět, jak je jev rozšířený, v jakých segmentech a kde je problém největší. Nejlepší praxe je obvykle kombinace – triangulace podle rizik rozhodnutí: pokud bude špatné rozhodnutí drahé nebo eticky citlivé, nestačí jeden zdroj dat.

Etika tu není „příloha“, ale součást kvality výzkumu. Informovaný souhlas, práce s citlivými daty, minimalizace sběru a bezpečné nakládání (včetně GDPR logiky) přímo ovlivňují, co si vůbec můžeme dovolit zjišťovat a jak interpretujeme. Stejně tak **inkluzivní nábor** není až závěrečná kontrola – už ve výzkumu rozhoduje, koho považujeme za „normálního uživatele“ a koho nevidíme. A protože kontext použití později určuje testovací scénáře, úlohy i kritéria přístupnosti, dává smysl řešit **přístupnost a inkluzi** už tady: mění to, koho zveme, co považujeme za úspěch a jaké bariéry bereme jako systémové, ne okrajové.

## Define: syntéza jako okamžik, kdy se z dat stává směr (a vzniká framing)

Syntéza není administrativní krok po výzkumu, ale okamžik, kdy tým provede „epistemický zlom“: z mnoha pozorování udělá několik tvrzení, kterým bude věřit natolik, že podle nich začne jednat. Tím vzniká **framing** – ne jediná pravda, ale zvolený výklad, který je obhajitelný evidencí a současně použitelný pro návrh (viz kapitola 1–2).

Dobrá syntéza obvykle postupuje od jednotlivých výřezů dat přes shlukování a témata až k insightům a designovým implikacím. Kritické je udržet **traceability**: když řekneme „uživatelé nevěří systému“, musíme umět ukázat, z jakých situací a dat to plyne, a zároveň zohlednit kontrapříklady, které interpretaci narušují. Právě tady se často rodí metodická zralost: ne v tom, že „máme personu“, ale že umíme obhájit, proč persona vypadá tak, jak vypadá, a co by ji mohlo vyvrátit.

Insight se pak překládá do problem statement a do otázek typu **How Might We** tak, aby držely tři vlastnosti: jsou konkrétní (uživatel, situace, bariéra, dopad), neobsahují řešení, a zároveň respektují reálná omezení (regulace, bezpečnost, kapacity organizace). Tím se Define stává mostem mezi lidskou perspektivou a business realitou: framing musí být lidsky pravdivý, ale také organizačně akceschopný. Do toho patří i prioritizace jako konvergence problému – rozhodnutí, co budeme řešit teď a co vědomě odložíme, včetně scope, kritérií úspěchu a decision logu pro dohledatelnost.

V tradici Coopera a **goal-directed designu** (viz kapitola 1–2) se tu osvědčuje držet návrh vedený cíli a scénáři: persony, cíle a scénáře nejsou dekorace, ale způsob, jak se vyhnout návrhu podle seznamu funkcí. Define tím připravuje půdu pro Develop tak, aby ideace nebyla „nápady do větru“, ale odpověď na jasně formulovanou bariéru v konkrétní situaci.

## Modely a vizualizace jako „nástroje myšlení“ napříč fázemi

Vizualizace v HCD nejsou kosmetika, ale způsob, jak udržet komplexitu „na stole“ a domluvit se na významu. V týmu obvykle nestačí, že si každý něco myslí; potřebujeme sdílenou reprezentaci, která dovolí zpochybňovat předpoklady, hledat mezery v porozumění a transparentně rozhodovat. Proto se modely používají průřezově: část pomáhá syntetizovat realitu (Define), část strukturuje návrh (Develop) a část pomáhá vysvětlit rozhodnutí stakeholderům.

Typicky se vyplatí rozlišovat, jakou otázku který model řeší:

- **Persony a cíle** pomáhají rozhodovat, pro koho optimalizujeme a co je pro něj úspěch.
- **Scénáře, use cases a task analysis** odhalují workflow, výjimky, přerušování a místa chybovosti.
- **User flow** dává návrhu strukturu a ukazuje, kde se lidé ztrácejí nebo kde systém nedává smysluplnou zpětnou vazbu.
- **Journey map** a **service blueprint** posouvají optiku na end-to-end zkušenost a na backstage příčiny: často se ukáže, že „UX problém“ je ve skutečnosti procesní nebo organizační problém.

Důležitá je obrana proti reifikaci: model se snadno stane „pravdou“, kterou už nikdo neaktualizuje. Profesionální použití znamená, že model zůstává napojený na data a rozhodnutí: když se mění kontext nebo se objeví nový segment, model se buď upraví, nebo přiznáme, že už neplatí. Zvlášť journey a blueprint bývají silné v tom, že přesunou problém z UI do procesu – a tím změní i ideaci a prototypování, protože najednou neprototypujeme jen obrazovky, ale službu.

## Develop: ideace jako řízená divergence (kreativita ukotvená v kritériích)

Ideace v druhém diamantu není začátek práce, ale pokračování syntézy: dobré nápady typicky vznikají z napětí mezi insighty, omezeními a cíli, ne z volného brainstormingu. Pokud Define udělalo svou práci, ideace má jasné mantinely – a právě ty paradoxně podporují kreativitu, protože tým hledá různé cesty, jak naplnit konkrétní potřebu v konkrétním kontextu.

Ko-kreace je tady praktický nástroj kvality. Zapojení vývoje, produktu i provozu snižuje riziko, že vznikne „krásný koncept“, který je nerealizovatelný, neudržitelný nebo rozbíjí interní procesy. Zároveň to pomáhá odhalit příležitosti, které by čistě designová perspektiva přehlédla, například možnost změnit handoff, automatizovat část práce nebo upravit komunikační skripty místo další obrazovky.

Facilitace řídí kvalitu divergence i konvergence. V divergenční části chrání šíři nápadů skrze psychologickou bezpečnost a timeboxing, v konvergenční části naopak umožňuje věcnou kritiku podle kritérií, nikoli podle autority. Konvergence na konci Develop má být rozhodování pod nejistotou: vybíráme koncepty, které dávají nejlepší šanci na dopad, a současně se dají rychle ověřit. Důležitý výstup proto nejsou jen vybrané návrhy, ale explicitní **designové hypotézy** a akceptační kritéria, která povedou prototypování a testování. A hlavně: konvergence v Develop musí navazovat na konvergenci v Define, jinak se jen vrátí solution bias a tým optimalizuje první nápad.

## Prototypování: zlevňování rizik před implementací

Prototyp v HCD je především experimentální médium. Nejde o mini-produkt, ale o způsob, jak co nejlevněji odhalit, že některý předpoklad je chybný – dřív než do něj investujeme implementační náklady. Proto volba **fidelity** není estetické rozhodnutí, ale strategie: co přesně ověřuji a jaký druh signálu potřebuji.

Prakticky se vyplatí volit formu prototypu podle toho, zda testujeme spíš tok a strukturu (skica, wireframe), nebo interakční detaily a důvěryhodnost (klikací prototyp s realistickým obsahem), případně procesní stránku služby (role play, pilot). U služeb je klíčové prototypovat i „neviditelné“ části – handoffy, komunikaci, pravidla a backstage procesy – protože UX často nevzniká na obrazovce, ale v tom, co organizace skutečně zvládne doručit.

Prototypování má smysl jen tehdy, když navazuje na hypotézy z Define/Develop. Bez hypotézy se z prototypu stane artefakt pro prezentaci, ne nástroj učení; tým pak snadno sklouzne k debatám o vzhledu místo o tom, zda se zmenšila bariéra, kterou jsme identifikovali v kontextu.

## Deliver: testování, použitelnost, přístupnost a iterace jako uzavření smyčky učení

Testování v Deliver je střet hypotéz s realitou chování. Pokud se test zredukuje na „líbí/nelíbí“, ztrácí HCD svůj základ; relevantní jsou situace, kde uživatel něco skutečně dělá, naráží na bariéry, volí strategie a dělá chyby. Proto mají úlohy a scénáře vycházet z kontextu z Discover a kritéria úspěchu z Define: teprve tehdy dává testování směr a výsledek je rozhodnutí, ne seznam názorů.

Zralý výstup z testu zahrnuje nejen problémy, ale i jejich závažnost, hypotézy příčin a plán úprav s re-testem. Tady se vyplatí umět vysvětlit rozdíl mezi **použitelností** a širším **UX**: použitelnost je nutný základ (úkoly jdou dokončit efektivně a bez chyb), ale UX zahrnuje i důvěru, emoce a dlouhodobou zkušenost, takže někdy potřebujeme i longitudinální pohled nebo doplňkové metody (viz kapitola 1).

**Přístupnost** je v Deliver standard kvality, ne specializace „pro menšinu“. Prakticky to znamená kombinovat automatické kontroly s manuálním ověřením (klávesnice, fokus, čitelnost, srozumitelnost) a ideálně zapojovat lidi s různými schopnostmi a asistivními technologiemi. Důležité je propojit to s etikou: přístupnost zvyšuje robustnost v reálném světě a současně chrání před vylučováním, které by bylo důsledkem našich návrhových rozhodnutí.

Deliver končí rozhodnutím o „dost dobré“ verzi na základě akceptačních kritérií, následuje handoff do vývoje a měření po nasazení. Tím se vrací distinkce output–outcome–impact: nasazení je teprve výstup, skutečná práce pokračuje telemetrií a návratem do dalšího Discover v režimu kontinuální discovery.

## Co se v praxi kazí a jak to obhájit u státnic: rizika, trade-offy, „minimum procesu“

Profesionální odpověď u státnic obvykle nevypadá jako idealistický seznam metod, ale jako schopnost pojmenovat rizika a navrhnout přiměřený postup. Typické průšvihy se opakují napříč organizacemi: předčasná konvergence a **solution bias**, konfirmační zkreslení ve výzkumu i syntéze, **design theatre** (rituály bez učení), metriky bez kontextu a záměna korelace za kauzalitu, nebo slabý přenos do implementace, kdy se předá „vzhled“, ale ne záměr, chování a kritéria.

Když jsou podmínky omezené, dá se obhájit „minimum procesu“, které stále generuje důkazy pro rozhodnutí. Typicky jde o krátký cyklus, kde každá část má jasnou otázku a výstup:

- cílený primární výzkum na nejrizikovější nejistotu,
- rychlá syntéza s dohledatelností a jasnou HMW,
- low-fi prototyp přesně k ověření klíčové hypotézy,
- krátké testování zaměřené na chování a rozhodnutí o iteraci.

Důležitá je i práce se stakeholdery: dvojí diamant tu slouží jako nástroj alignmentu. Když máme transparentní kritéria rozhodování a decision log, konflikt se méně vede jako boj názorů a více jako práce s důkazy a trade-offy. A etika a inkluze jsou průřez: od náboru a práce s daty až po prevenci dark patterns v návrhu – nejsou to „extra kapitoly“, ale kvalita rozhodování.

## Závěr

Dvojí diamant lze shrnout jako řízené střídání divergence a konvergence, které převádí porozumění lidem na ověřitelná rozhodnutí: nejdřív se učíme v problémovém prostoru, pak se učíme v prostoru řešení. Pro státnice je dobré držet jednu linii argumentu: kvalitní HCD není množství metod, ale dohledatelná logika od kontextu a dat přes framing a hypotézy k prototypům, testům a měřenému dopadu. A pokud to má být opravdu HCD, musí být součástí téhle logiky i přístupnost, inkluze a etika – ne jako přívěsek, ale jako podmínka kvalitního a obhajitelného návrhu.
