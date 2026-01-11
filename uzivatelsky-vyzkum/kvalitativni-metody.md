# Kvalitativní metody (uživatelské rozhovory, uživatelské testování, expertní analýza, heuristická analýza)

## Krátký úvod (co a proč)
Kvalitativní výzkum v UX odpovídá hlavně na otázky **„proč?“ a „jak?“**: jak lidé uvažují, jaké mají cíle, motivace, obavy a co přesně se děje při interakci s produktem. Typicky pracuje s **menším počtem účastníků**, ale jde do **větší hloubky** – výstupem jsou zjištění (findings), insighty (interpretace významu) a návrhové implikace.

Kvalitativní metody jsou zvlášť silné, když:
- teprve objevuješ problémový prostor (Discovery),
- potřebuješ pochopit chování (Define),
- chceš rychle odhalit bariéry a chyby v návrhu (Develop/Deliver – evaluativní fáze).

## Cíle učení
- Rozlišit hlavní kvalitativní metody (rozhovory, uživatelské testování, expertní/heuristická analýza) a vědět, kdy je použít.
- Umět připravit kvalitativní výzkum: cíle, výzkumné otázky, rekrutace, scénář, etika.
- Umět sbírat a analyzovat data: pozorování, poznámky, kódování/tematizace, syntéza.
- Umět formulovat nálezy: evidence → zjištění → insight → doporučení a prioritizace dopadu.

## Klíčové pojmy (glosář)
- **Výzkumná otázka (research question)**: otevřená otázka, kterou má výzkum zodpovědět (např. „Proč lidé nedokončí registraci?“).
- **Zjištění (finding)**: konkrétní pozorování podložené daty („3/5 účastníků nepochopili, co znamená ‚ověření‘“).
- **Insight**: interpretace významu zjištění („Uživatelé očekávají potvrzení přes e‑mail; SMS vnímají jako rizikové“).
- **Doporučení**: návrhový důsledek (co změnit a proč).
- **Triangulace**: ověření závěrů kombinací metod/zdrojů (kval + kvant, různé segmenty).
- **Saturace**: bod, kdy další rozhovory přinášejí málo nových témat (závisí na heterogenitě populace).
- **Moderátor**: osoba vedoucí rozhovor/test; cílem je minimalizovat bias a získat data.
- **Bias**: systematické zkreslení (např. leading questions, potvrzovací zkreslení, sociální žádoucnost).

## Studijní poznámky

### 1) Kdy zvolit kvalitativní metody (a kdy ne)
**Hodí se**, když:
- potřebuješ pochopit motivace, mentální modely, obavy, kontext,
- hledáš kořenové příčiny problémů („proč se to děje?“),
- chceš rychle zlepšit návrh skrze evaluaci použitelnosti.

**Méně se hodí**, když:
- potřebuješ přesné odhady prevalence („kolik % uživatelů…“) – to je typicky kvant,
- potřebuješ statisticky významné srovnání variant – A/B test, experiment,
- rozhodnutí stojí primárně na metrikách (např. změna konverze) bez doplnění „proč“.

Prakticky: kvalitativní výzkum často generuje hypotézy a řešení; kvantitativní je ověřuje ve větším měřítku.

### 2) Základní proces kvalitativního výzkumu (end-to-end)
Společný „skelet“ pro rozhovory i testování:
1. **Zadání a cíle**: co se má rozhodnout, co je riziko špatného rozhodnutí.
2. **Výzkumné otázky**: 3–6 dobře formulovaných otázek (otevřených, bez řešení).
3. **Metoda a design**: rozhovor vs test; moderované/remote; individuální vs skupina (fokus).
4. **Rekrutace**: definice segmentu, screener, incentivy, no-show strategie.
5. **Materiály**: scénář/diskusní guide, úlohy, prototyp, consent, poznámková šablona.
6. **Pilot**: vyzkoušet si scénář (časování, srozumitelnost úloh, technika).
7. **Sběr dat**: rozhovor/test, nahrávky, poznámky, debrief po každé seanci.
8. **Analýza a syntéza**: kódování, tematizace, affinity mapping, prioritizace.
9. **Komunikace**: report, storytelling, doporučení, next steps, uložení do repozitáře poznatků.

### 3) Uživatelské rozhovory
#### 3.1 Typy rozhovorů (kdy který)
- **Generativní (explorační)**: zjišťuje potřeby, cíle, kontext, jazyk uživatelů (Discovery/Define).
- **Evaluativní**: hodnotí reakci na koncept/prototyp, porozumění value proposition, očekávání (Develop).
- **Kontextový rozhovor / contextual inquiry**: v prostředí uživatele, s pozorováním práce (silné pro workflow, enterprise).

Pozor: rozhovor sám o sobě měří **deklarované** chování („co říkají“). Proto je často dobré doplnit ho **pozorováním** (test/field) nebo daty.

#### 3.2 Struktura dobrého rozhovoru
- **Úvod**: představení, cíl, délka, souhlas s nahráváním, „nejsou správné odpovědi“.
- **Warm-up**: kontext, role, rutina, současné nástroje.
- **Hlavní část**: témata dle výzkumných otázek, hloubkové „proč“ (laddering).
- **Konkrétní příklady**: „Řekni mi o poslední situaci, kdy…“ (past behavior > opinions).
- **Závěr**: shrnutí, co bylo důležité, doplňující otázky, poděkování, incentive.

#### 3.3 Otázky: co dělat a nedělat
**Dělej**:
- ptej se na konkrétní minulost („naposledy“, „minulý týden“) místo hypotetického „co bys dělal“,
- používej otevřené otázky („Jak…?“, „Co se stalo potom…?“),
- ověřuj porozumění („Když říkáš ‚ověření‘, co tím myslíš?“),
- nechávej ticho (účastník doplní).

**Nedělej**:
- **leading questions** („A nebylo to pro tebe matoucí?“),
- dvojité otázky („Jak se ti to líbilo a co bys změnil?“),
- prodejní pitch nebo obhajobu řešení,
- sběr „feature requests“ bez pochopení potřeby („chci tlačítko X“ → proč?).

#### 3.4 Bias a jak ho snižovat
- **Sociální žádoucnost**: uživatel chce vypadat kompetentně → normalizuj chyby („Tohle je běžné…“).
- **Potvrzovací zkreslení moderátora**: hledáš to, co chceš slyšet → předepsané otázky, peer review scénáře.
- **Priming**: příliš brzy ukážeš řešení → nejdřív zjišťuj potřeby, až pak prezentuj koncept.
- **Selektivní paměť**: „myslím, že…“ → ptej se na konkrétní situace, logy, artefakty.

#### 3.5 Výstupy z rozhovorů
- **Persony / segmenty** (pokud je to součást scope; pozor na „marketingové persony“ bez dat),
- **Jobs-to-be-done** (situace → motivace → očekávaný výsledek),
- **Journey / scénáře** (kroky, pain points, emoce, překážky),
- **Seznam témat a bariér** + citace jako evidence.

### 4) Uživatelské testování (usability testing)
Uživatelské testování je **pozorování**, jak lidé plní úlohy v produktu/prototypu. Primárně odhaluje:
- problémy s porozuměním, navigací, texty,
- místa, kde se lidé zaseknou,
- nesoulad mentálního modelu s návrhem.

#### 4.1 Varianty testování
- **Moderované**: moderátor vede seanci, může doptávat (silné pro hlubší porozumění).
- **Nemoderované**: účastník plní úlohy sám (škáluje, ale méně „proč“).
- **Remote** vs **laboratorní**: remote je rychlejší a levnější; lab dává lepší kontrolu a signály (řeč těla).
- **Kvalitativní** (nejčastější) vs **kvantitativní benchmark** (více účastníků, metriky, srovnání).

#### 4.2 Kolik účastníků?
Často se používá pravidlo „~5 účastníků“ pro odhalení velké části výrazných problémů v jednom cílovém segmentu, ale:
- pokud máš **více segmentů**, testuj per segment,
- pokud je tok komplexní a variabilní, potřebuješ víc seancí,
- pokud chceš benchmark, jdeš do vyšších N a měříš metriky (viz kvant kapitola).

U státnic je důležité umět argumentovat: velikost vzorku závisí na cíli (diagnostika vs měření).

#### 4.3 Jak navrhnout dobré úlohy
Úloha má být:
- **realistická** (odpovídá reálné motivaci),
- **neprozrazující** (neříká, kam kliknout),
- **ověřitelná** (víš, kdy je hotovo).

Příklad špatné úlohy: „Najdi tlačítko ‚Založit projekt‘.“  
Příklad dobré úlohy: „Chceš založit nový projekt pro klienta X a pozvat kolegu. Jak bys postupoval?“

#### 4.4 Moderování: think-aloud a debrief
- **Think-aloud**: účastník nahlas popisuje, co očekává a proč něco dělá.
- Moderátor má být neutrální, **nepomáhat** (pokud to není specificky v designu studie), jen vracet otázky: „Co bys čekal, že se stane?“
- **Debrief**: po úloze se doptat na vnímání, důvěru, srozumitelnost; oddělit „výkon“ od „dojmů“.

#### 4.5 Co sbírat během testu (data)
- **Pozorování**: chyby, váhání, návraty, slepé uličky.
- **Citace**: očekávání vs realita („Čekal jsem, že…“).
- **Kontext**: zařízení, prostředí, úroveň zkušenosti.
- Volitelně metriky (i v kval testu): čas na úlohu, úspěšnost, počet chyb (opatrně s interpretací při malém N).

#### 4.6 Výstupy z testování
- seznam problémů s **prioritou** (dopad × četnost × závažnost),
- evidence (video timecode, citace, screenshoty),
- doporučení (konkrétní změny) + návrh, co ověřit v dalším kole.

### 5) Expertní analýza vs heuristická analýza
Obě metody jsou „bez uživatelů“ – expert hodnotí produkt na základě znalostí UX a pravidel. Jsou rychlé a levné, ale hrozí:
- slepota ke specifickému kontextu cílové skupiny,
- přeceňování „správných“ patternů bez validace.

#### 5.1 Expertní analýza (expert review)
- Má volnější rámec: expert prochází klíčové toky a hodnotí je dle zkušenosti a best practices.
- Silná pro rychlý audit, návrhy zlepšení, identifikaci zjevných chyb v IA/UI/copy.

#### 5.2 Heuristická analýza (heuristic evaluation)
- Používá explicitní sadu heuristik (často Nielsenových 10), aby byla kontrola systematická.
- Typicky probíhá tak, že více evaluátorů projde produkt nezávisle a pak sjednotí nálezy.

**Příklad heuristik (zkráceně)**:
- viditelnost stavu systému,
- shoda se světem uživatele,
- kontrola a svoboda (undo),
- konzistence a standardy,
- prevence chyb,
- rozpoznání vs vybavení,
- flexibilita a efektivita,
- minimalistický design,
- pomoc při chybách,
- nápověda a dokumentace.

#### 5.3 Jak psát nálezy (pro expert/heuristic review)
Dobrá struktura jednoho nálezu:
- **Problém**: co je špatně (jednou větou).
- **Kde**: obrazovka/krok toku.
- **Evidence**: screenshot / popis situace.
- **Proč je to problém**: porušená heuristika/princip; dopad na uživatele.
- **Závažnost (severity)**: např. 0–4 (cosmetic → catastrophe).
- **Doporučení**: konkrétní změna a očekávaný efekt.

### 6) Analýza kvalitativních dat: od poznámek k insightům
#### 6.1 Záznam dat
Minimum:
- strukturované poznámky (co řekl/udělal, citace, otázky),
- označené momenty (timecodes),
- jasné metadata: segment, zkušenost, kontext.

#### 6.2 Syntéza: tematizace / affinity mapping
Praktický postup:
1. Přepiš klíčové momenty do „kartiček“ (citace/pozorování).
2. Seskup do témat (affinity).
3. Pojmenuj témata jazykem problému (ne řešení).
4. Přidej interpretaci: proč to vzniká (insight).
5. Navrhni dopady a doporučení.

#### 6.3 Finding vs insight vs doporučení (častý zmatek)
- **Finding**: „Uživatelé si pletou ‚Uložit‘ a ‚Odeslat‘.“
- **Insight**: „Uživatelé očekávají, že ‚Uložit‘ je bezpečné a vratné; ‚Odeslat‘ je finální. UI to nerozlišuje.“
- **Doporučení**: „Rozdělit akce, změnit copy, přidat potvrzení a jasný status; otestovat na 5 uživatelích.“

### 7) Etika a ochrana účastníků (minimum, které musíš umět)
- **Informovaný souhlas**: co se nahrává, k čemu se použije, kdo uvidí data, možnost odmítnout.
- **Minimalizace citlivých dat**: sbírat jen to, co opravdu potřebuješ.
- **Anonymizace/pseudonymizace**: v reportu používat kódy, odstraňovat identifikátory.
- **Bezpečné ukládání**: řídit přístupy, retention, sdílení (viz kapitola Research Ops).
- **Zranitelné skupiny**: vyšší opatrnost, vhodné incentivy, bezpečné prostředí.

## Praktické příklady / mini-case

### Mini-case 1: Rozhovory pro Discovery (nová funkce)
Zadání: „Chceme přidat plánování úkolů do aplikace.“  
Špatně: ptát se „Chtěl bys kalendář?“  
Dobře: zjistit situace, kdy lidé plánují, jaké mají workaroundy, co je blokuje, jaké mají spouštěče („kdy si řekneš: teď to musím naplánovat?“).

### Mini-case 2: Kvalitativní usability test prototypu
Zadání: otestovat onboarding a první klíčový tok (registrace → vytvoření prvního projektu).  
Postup: 5 moderovaných remote seancí, 45 min, 4 úlohy, think-aloud, debrief.  
Výstup: 12 problémů, z toho 3 kritické (blokují dokončení), doporučení změn a plán retestu.

### Mini-case 3: Heuristická analýza jako „rychlá diagnostika“
Zadání: zvýšená chybovost ve formuláři.  
Postup: 2 evaluátoři projdou tok a mapují porušení heuristik (prevence chyb, pomoc při chybách, rozpoznání vs vybavení).  
Výstup: seznam nálezů se severity + návrh úprav validací, chybových hlášek a copy.

## Časté chyby a jak jim předejít
- **Nejasné cíle**: „pojďme něco zjistit“ → přepsat na rozhodnutí, které má výzkum podpořit.
- **Příliš mnoho otázek**: 20 výzkumných otázek → zúžit na 3–6 a zbytek odložit.
- **Návodné otázky**: moderátor podsouvá odpověď → peer review scénáře, neutral wording.
- **Míchání role moderátora a prodejce**: obhajoba produktu → nastavit očekávání, držet neutralitu.
- **Záměna názorů za chování**: „líbí/nelíbí“ → sbírat konkrétní příklady a pozorování.
- **Chybějící evidence**: report bez citací/timecodů → vždy uvádět důkazy.
- **Přeskok syntézy**: rovnou doporučení bez insightu → držet řetězec evidence → finding → insight → recommendation.

## Shrnutí (tl;dr)
- Kvalitativní metody odpovídají na **„proč“ a „jak“** a pomáhají pochopit chování do hloubky.
- Rozhovory jsou silné pro kontext a motivace; testování pro odhalení bariér v návrhu; expertní/heuristická analýza pro rychlé audity.
- Klíčová je kvalita přípravy (otázky, úlohy, rekrutace) a kvalita syntézy (evidence → insight → doporučení).

## Otázky k opakování
1. Vysvětli rozdíl mezi kvalitativní a kvantitativní metodou v UX a uveď typické výstupy.
2. Jaký je rozdíl mezi „finding“, „insight“ a „doporučením“? Uveď příklad.
3. Popiš strukturu dobrého uživatelského rozhovoru a 3 pravidla pro otázky.
4. Co je think-aloud a jaké jsou jeho limity?
5. Jak navrhneš dobrou úlohu pro usability test? Uveď špatný a dobrý příklad.
6. Kdy použiješ expertní analýzu a kdy heuristickou analýzu? Jaký je rozdíl?
7. Jak bys hodnotil závažnost problému (severity) a proč je to užitečné?
8. Co je triangulace a proč zvyšuje důvěryhodnost závěrů?
9. Co znamená saturace a kdy hrozí, že jí nedosáhneš?
10. Vyjmenuj 3 etické zásady při kvalitativním výzkumu (nahrávání, citlivá data, souhlas).

## Doporučená literatura
- Portigal, S. (2013). *Interviewing Users: How to Uncover Compelling Insights.*
- Travis, D. & Hodgson, P. (2019). *Think Like a UX Researcher.*
- Krug, S. (2012). *Rocket Surgery Made Easy.* (praktický přístup k testování)
- Nielsen, J. (1994+). *Usability heuristics* (heuristická evaluace)

## Související kapitoly
- [Kvantitativní metody](kvantitativni-metody.md)
- [Volba metody na základě výzkumných otázek a fáze designového procesu](volba-metody.md)
- [Research operations](research-operations.md)
