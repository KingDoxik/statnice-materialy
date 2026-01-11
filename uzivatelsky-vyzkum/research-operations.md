# Research operations (ResearchOps)

## Krátký úvod (co a proč)
Research Operations (ResearchOps) je soubor procesů, lidí, nástrojů a pravidel, které umožňují dělat UX výzkum **opakovaně, bezpečně a ve škále**. Neřeší „jednu studii“, ale celý ekosystém kolem:
- jak rekrutujeme a pracujeme s účastníky,
- jak chráníme data (zejména citlivá) a jak sdílíme poznatky,
- jak udržujeme kvalitu a konzistenci napříč týmy,
- jak výzkum „doručujeme“ stakeholderům tak, aby vedl ke změně.

V praxi ResearchOps rozhoduje o tom, zda se výzkum stane:
- „nárazovou aktivitou“ (ad‑hoc),
nebo:
- **spolehlivým systémem** podporujícím rozhodování.

## Cíle učení
- Vysvětlit, co je ResearchOps a proč je klíčové pro kvalitu a dopad výzkumu.
- Umět popsat základní governance: souhlasy, ukládání, přístupy, retention, sdílení.
- Umět navrhnout „research stack“ (nástroje) a pravidla jeho používání.
- Umět nastavit repozitář poznatků (taxonomie, šablony, dohledatelnost, lifecycle).
- Umět popsat proces rekrutace a incentiv včetně rizik.
- Umět prezentovat výzkum: storytelling, advokacie poznatků, workshopy a změnový dopad.

## Klíčové pojmy (glosář)
- **PII (personally identifiable information)**: osobní identifikovatelné údaje (jméno, e‑mail…).
- **Citlivá data**: data se zvýšeným rizikem (zdravotní, finanční, děti, biometrie…).
- **Informed consent**: informovaný souhlas účastníka (co se děje a proč).
- **Retention**: jak dlouho data uchováváme a kdy je mažeme.
- **Anonymizace vs pseudonymizace**: anonymizace = nelze zpětně identifikovat; pseudonymizace = jde, ale přes klíč.
- **Research repository**: místo pro ukládání poznatků (findings/insights) s vyhledáváním a tagy.
- **Demokratizace výzkumu**: umožnit týmům dělat „nějaký“ výzkum, ale s guardrails (kvalita, etika).

## Studijní poznámky

### 1) Ukládání citlivých dat a sdílení poznatků (governance)
Základní principy:
- **Minimalizace**: sbírej jen to, co je nezbytné.
- **Oddělení identit**: PII udržuj odděleně od výzkumných dat (poznámky, transkripty).
- **Need-to-know přístup**: přístupy pouze pro role, které je potřebují.
- **Transparentnost**: účastník ví, co se nahrává, proč, kdo to uvidí a jak dlouho.

#### 1.1 Co typicky ukládáš (a jak to chránit)
- **PII / rekrutační data** (kontakty, screener odpovědi): přísně omezený přístup (ResearchOps / recruiter).
- **Nahrávky** (audio/video, screen): často nejcitlivější – řízené sdílení, expirace, watermarking (dle politiky).
- **Poznámky a transkripty**: ideálně pseudonymizované (Participant 01).
- **Reporty a insighty**: sdílené širším týmem, ale bez identifikátorů.

#### 1.2 Praktická politika (minimum, které by měla mít organizace)
Můžeš si představit jednoduchou tabulku „co–kde–kdo–jak dlouho“:
- **Typ dat**: PII / nahrávky / transkripty / reporty
- **Úložiště**: schválený nástroj
- **Přístup**: role
- **Retention**: např. 90 dní pro nahrávky, 1 rok pro transkripty (příklad – vždy dle politiky)
- **Sdílení**: co je povolené (odkazy, exporty, stahování)

#### 1.3 Souhlasy, GDPR a etika (konceptuálně)
I bez právnických detailů musíš umět:
- vysvětlit, že osobní data mají právní rámec (např. GDPR),
- popsat informovaný souhlas a právo účastníka odstoupit,
- popsat anonymizaci/pseudonymizaci a minimalizaci rizika.

### 2) Repozitář poznatků (knowledge management)
Bez repozitáře se poznatky „ztratí“ v slidech a nikdo je nenajde.

#### 2.1 Co ukládat (a v jaké granularitě)
Užitečná hierarchie:
- **Study** (výzkumný projekt): cíl, metoda, vzorek, linky, datum, vlastníci.
- **Finding**: konkrétní pozorování s evidencí.
- **Insight**: interpretace a „proč to tak je“.
- **Recommendation / opportunity**: návrhová implikace.

#### 2.2 Taxonomie a tagy (aby to šlo hledat)
Dobré tagy jsou konzistentní a vyhledatelné:
- produktová oblast (Onboarding, Checkout…),
- typ uživatele (Nový, Power user…),
- fáze journey (Discover → Purchase → Support),
- téma (Důvěra, Srozumitelnost, Chyby…),
- metoda (Interview, Usability test, Analytics…),
- datum / verze produktu.

#### 2.3 Šablona insightu (doporučený standard)
- **Název** (stručný, problémový)
- **Kontekst** (segment, situace)
- **Evidence** (citace/timecode, screenshot)
- **Insight** (interpretace)
- **Dopad** (na uživatele + business)
- **Doporučení** (co udělat / co ověřit)
- **Důvěryhodnost / limity** (N, bias, přenositelnost)

### 3) Nástroje (Research stack) a kritéria výběru
Cílem není „mít hodně nástrojů“, ale mít **jasný tok práce**. Typické kategorie:
- **Rekrutace a správa účastníků** (CRM/panel, screener, komunikace)
- **Scheduling** (kalendář, time zones, reminders)
- **Nahrávání / remote seance** (video, screen, consent)
- **Transkripce** (automat + ruční korekce podle citlivosti)
- **Analýza** (kódování, affinity, tematizace)
- **Repository** (vyhledávání insightů, tagy)
- **Reporting** (slidy, wiki, workshopy)

Kritéria výběru (typicky relevantní u státnic):
- bezpečnost a compliance (přístupy, audit),
- integrace (SSO, export/import),
- použitelnost pro tým,
- náklady a škálování,
- data portability (nezamknout poznatky v jednom vendorovi).

### 4) Demokratizace výzkumu (předávání know-how) – jak to dělat bezpečně
Smysl demokratizace: výzkum není úzké hrdlo; produktové týmy umí udělat základní validaci.

Riziko: nekvalitní výzkum může vést ke špatným rozhodnutím. Proto guardrails:
- **Trénink**: základy moderování, bias, etika, psaní nálezů.
- **Šablony**: research brief, guide, report, insight template.
- **Kvalitativní review**: UXR/ResearchOps schvaluje scénáře u rizikových studií.
- **Office hours**: konzultace.
- **Knihovna metod**: „kdy použít co“ + příklady (prolink na `volba-metody.md`).

### 5) Rekrutace (participant operations)
Rekrutace je často největší úzké hrdlo. Základní části:

#### 5.1 Screener
Screener má:
- ověřit, že účastník splňuje kritéria (segment),
- vyloučit konfliktní profily (např. konkurence, profíci na testování, pokud nechceš),
- zachovat etiku (neptat se na zbytečná citlivá data).

Pozor na „leading screener“: otázky nesmí naznačit „správnou odpověď“.

#### 5.2 Incentivy a no-show
- Incentivy nastav férově (čas účastníka je hodnota).
- Počítej s no-show (např. over-recruit, waitlist, reminder).
- U B2B může být motivací i „přispět ke zlepšení nástroje“, ale incentive stále pomáhá.

#### 5.3 Reprezentativita vs účelový výběr
- Kvalitativní výzkum často používá **účelový výběr** (purposeful sampling): hledáš typické profily a extrémy.
- Kvantitativní potřebuje reprezentativitu (nebo aspoň uvést limity výběru).

### 6) Prezentace, storytelling a advokacie poznatků
Výzkum má dopad jen tehdy, když se z něj stane **rozhodnutí a změna**.

#### 6.1 Storytelling struktura (jednoduchá)
- **Kontext**: proč jsme to řešili, co bylo riziko.
- **Metoda a vzorek**: stručně, ale transparentně (důvěryhodnost).
- **Hlavní zjištění**: 3–5 top findings (ne 25 drobností).
- **Evidence**: citace, klipy, screenshoty.
- **Insight a doporučení**: co to znamená a co dělat dál.
- **Next steps**: co ověřit, co monitorovat, co je rozhodnutí.

#### 6.2 Formáty doručení
- „Readout“ prezentace (15–30 min) + Q&A
- Workshop se stakeholdery (společná syntéza a prioritizace)
- Asynchronní artefakt (wiki/repository entry, krátké video klipy)

#### 6.3 Advokacie (research advocacy)
Praktiky:
- propoj nálezy na cíle týmu (OKR, metriky),
- ukaž dopad na uživatele i business (nejen „uživatelé si myslí“),
- měj připravené „objections“ (limity vzorku, bias) a transparentně je přiznej,
- navrhni „malé“ další kroky (iterace + re-test), aby se změna opravdu stala.

## Praktické příklady / mini-case

### Mini-case 1: Únik nahrávek do veřejného sdílení
Problém: nahrávky jsou v nástroji, který umožňuje veřejný link bez expirační doby.  
ResearchOps řešení: schválené úložiště, role-based access, expirace linků, watermark, školení týmu.

### Mini-case 2: „Nikdo nečte reporty“
Řešení: místo 40 slidů udělat 20min readout + 3 videoklipy + workshop prioritizace + uložit insighty do repozitáře s tagy.

### Mini-case 3: Demokratizace bez guardrails
Problém: tým udělal rozhovory s kolegy (proxy) a vyvodil závěry pro celou populaci.  
Řešení: metoda-first checklist, povinný screener, review scénáře a povinné uvedení limitů.

## Časté chyby a jak jim předejít
- **Ukládání dat „kdekoliv“**: chybí governance → schválená úložiště, přístupy, retention.
- **Nejasná vlastnictví**: nikdo není accountable → role (ResearchOps owner, repo owner).
- **Ztráta poznatků**: reporty bez repozitáře → standardizace insightů a tagů.
- **Přetížení stakeholderů**: příliš detailu → top findings + evidence + jasné doporučení.
- **Demokratizace bez kvality**: výzkum dělá kdokoliv jakkoliv → trénink, šablony, review.

## Shrnutí (tl;dr)
- ResearchOps je „infrastruktura“ výzkumu: data, procesy, nástroje, škála, dopad.
- Klíčové oblasti: governance citlivých dat, repozitář poznatků, rekrutace, nástroje, demokratizace, storytelling.
- Bez ResearchOps se výzkum špatně opakuje, špatně sdílí a často nemá dopad.

## Otázky k opakování
1. Co je ResearchOps a čím se liší od „dělání jedné studie“?
2. Jaké jsou 3 základní principy práce s citlivými daty ve výzkumu?
3. Vysvětli rozdíl mezi anonymizací a pseudonymizací a proč na tom záleží.
4. Jak by měla vypadat minimální politika pro ukládání a sdílení výzkumných dat?
5. Co ukládat do research repository a jak navrhnout taxonomii/tagy?
6. Jaké jsou kategorie nástrojů v research stacku a 2 kritéria výběru?
7. Co je demokratizace výzkumu a jaké guardrails potřebuje?
8. Jak navrhneš screener a jaká jsou rizika špatného screeneru?
9. Jak řešit no-show a incentivy?
10. Popiš strukturu dobrého research readoutu (storytelling).

## Doporučená literatura
- Travis, D. & Hodgson, P. (2019). *Think Like a UX Researcher.* (procesy, komunikace, dopad)
- Krug, S. (2012). *Rocket Surgery Made Easy.* (praktické doručování zjištění)
- Portigal, S. (2013). *Interviewing Users.* (etika a práce s daty v rozhovorech)

## Související kapitoly
- [Kvalitativní metody](kvalitativni-metody.md)
- [Kvantitativní metody](kvantitativni-metody.md)
- [Volba metody na základě výzkumných otázek a fáze designového procesu](volba-metody.md)
