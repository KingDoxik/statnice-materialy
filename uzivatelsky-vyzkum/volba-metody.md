# Volba metody na základě výzkumných otázek a fáze designového procesu

## Krátký úvod (co a proč)
Nejčastější chyba v UX výzkumu není „špatně udělaný rozhovor“, ale **špatně zvolená metoda**: tým chce odpovědět na „proč“, ale sbírá „kolik“ (nebo naopak). Tato kapitola dává praktický rámec, jak volit metody podle:
- **výzkumných otázek** (jaký typ důkazu potřebuju),
- **fáze procesu** (Discovery/Define/Develop/Deliver),
- **omezení** (čas, rozpočet, přístup k uživatelům, riziko rozhodnutí).

## Cíle učení
- Umět přeložit business/design problém na výzkumné cíle a výzkumné otázky.
- Umět vybrat metodu (nebo mix metod) podle typu otázky a fáze procesu.
- Umět popsat trade-off: rychlost vs hloubka vs škálování vs rizika bias.
- Umět navrhnout „minimálně životaschopný“ výzkumný plán (MVRP) pod omezeními.

## Klíčové pojmy (glosář)
- **Explorační (generativní) výzkum**: objevování potřeb a problémů (typicky kval).
- **Evaluativní výzkum**: hodnocení návrhu/řešení (testování použitelnosti, concept testing).
- **Měřící (deskriptivní) výzkum**: kolik/jak často (typicky kvant, analytika).
- **Kauzální výzkum**: co způsobilo změnu (experiment/A/B).
- **Triangulace**: kombinace zdrojů pro vyšší důvěryhodnost závěrů.
- **Riziko rozhodnutí**: cena špatného rozhodnutí (čas, peníze, reputace, právní dopady).

## Studijní poznámky

### 1) Překlad problému na výzkumné otázky
Začni od rozhodnutí, které má výzkum podpořit:
- „Máme přidat ověřování přes SMS?“
- „Proč se lidé v registraci ztrácí?“
- „Která varianta onboarding obrazovky zlepší dokončení toku?“

Pak si dej strukturu:
- **Co potřebujeme vědět** (unknowns),
- **Jaký typ důkazu** to vyžaduje (porozumění vs prevalence vs kauzalita),
- **Jaký výstup** očekáváme (insighty, návrhové implikace, metriky, benchmark).

Praktická pomůcka: formuluj otázky tak, aby **neobsahovaly řešení**.
- Špatně: „Máme přidat tooltip?“
- Dobře: „Kde a proč lidé nechápou pojem X?“

### 2) Volba podle typu otázky (jaký důkaz potřebuješ)
Nejjednodušší mapování:
- **Proč / jak** → kvalitativní metody (rozhovory, usability test, field).
- **Kolik / jak často / kdo** → kvantitativní metody (dotazník, analytika).
- **Je A lepší než B** → experiment (A/B), kvant benchmark + guardrails.

Pozor: v praxi často chceš mix:
- nejdřív kval (co je problém) → pak kvant (jak je velký) → pak A/B (co ho zlepší).

### 3) Volba podle fáze designového procesu (Double Diamond)
Zjednodušeně:
- **Discover (rozšiřování)**: hledáme problémový prostor.
  - metody: rozhovory, kontextové pozorování, diary study, analýza supportu, analýza trhu.
- **Define (zúžení)**: formulujeme problém, segmenty, hypotézy.
  - metody: syntéza, mapy cest, JTBD, validace hypotéz (kval + lehký kvant).
- **Develop (rozšiřování řešení)**: generujeme a iterujeme návrhy.
  - metody: usability testy prototypů, concept testing, card sorting/tree testing (podle IA).
- **Deliver (zúžení a uvedení)**: ověřujeme dopad a stabilitu v provozu.
  - metody: analytika, A/B, benchmark testy, post-release survey, monitoring guardrails.

### 4) Rozhodovací rámec podle omezení (čas/rozpočet/přístup)
Někdy nejde vybrat „ideální“ metodu, ale „nejlepší dostupnou“.

#### 4.1 Čas
- **1–2 dny**: expertní/heuristická analýza, rychlý usability test 3–5 lidí, analýza existujících dat (analytics, support).
- **1–2 týdny**: 5–10 rozhovorů + syntéza, iterativní testy, dotazník + sběr a analýza.
- **Měsíc+**: diary study, robustní benchmark, longitudinal, A/B s dostatečným trafficem.

#### 4.2 Přístup k uživatelům
- Když uživatele nemáš: začni existujícími daty (support, analytics), interními proxy (pozor na bias), rekrutuj přes panely, komunitu, partnerství.
- Když máš úzký segment (B2B): investuj do kvalitní rekrutace a plánuj no-show.

#### 4.3 Riziko rozhodnutí
Čím vyšší riziko (např. regulatorní, bezpečnost), tím víc:
- triangulace,
- důraz na kvalitu dat,
- dokumentace a audit trail (viz Research Ops).

### 5) Tabulka: typ otázky → metoda → výstup → náročnost → rizika
| Typ otázky / potřeba | Doporučené metody | Typický výstup | Čas / náročnost | Typická rizika |
|---|---|---|---|---|
| Proč lidé něco dělají / nedělají | rozhovory, kontextové pozorování, usability test | zjištění + insighty + doporučení | střední | moderátor bias, nereprezentativnost |
| Kde se v toku ztrácí a jak moc | analytics, funnel, logy | drop-off, segmenty, trendy | nízká–střední | špatná instrumentace, špatné definice |
| Kolik % je nespokojených / co si myslí | dotazník (CSAT/NPS/SUS) | distribuce odpovědí, segmentace | střední | self-selection, špatné otázky |
| Je varianta A lepší než B | A/B test, experiment | rozdíl v metrice + guardrails | střední–vysoká | malé N, „lokální“ optimum, etika |
| Je IA srozumitelná | card sorting, tree testing | struktura kategorií, úspěšnost hledání | střední | špatně zvolené karty/úlohy |
| Rychlý audit kvality UX | expertní/heuristická analýza | seznam nálezů se severity | nízká | expert blind spots, bez validace uživateli |

### 6) Minimálně životaschopný výzkumný plán (MVRP)
Když máš málo času, drž se jednoduché šablony:
1. **Cíl** (1 věta): jaké rozhodnutí podpoříme.
2. **Výzkumné otázky** (3–5): bez řešení.
3. **Metoda**: proč je zvolená (typ důkazu).
4. **Vzorek**: koho a proč (kritéria, N).
5. **Materiály**: scénář/úlohy, consent, co sbíráme.
6. **Analýza**: jak poznáme, že máme odpověď (kritéria, artefakty).
7. **Deliverable**: komu a v jaké formě (report/workshop).

### 7) Příklady zadání a doporučený mix metod (5–8 scénářů)

#### Scénář 1: „Uživatelé nedokončí registraci.“
- Začni: analytics funnel + segmentace (kde to padá).
- Pak: 5–7 usability testů (proč, jaké bariéry, jazyk/copy).
- Ověření: A/B test (pokud máš traffic) + guardrails (chybovost, support).

#### Scénář 2: „Nevíme, jaký problém má náš produkt řešit.“
- Rozhovory (8–12) + kontext (pokud jde).
- Syntéza: JTBD / journey + hypotézy.
- Lehké ověření: mini survey (prioritizace potřeb) nebo concept testing.

#### Scénář 3: „Chceme přeorganizovat menu / IA.“
- Card sorting (otevřený pro discovery kategorií, uzavřený pro validaci).
- Tree testing (najdou lidi správně informace?).
- Doplň: 3–5 usability testů pro kritické toky.

#### Scénář 4: „Zlepšujeme checkout, ale bojíme se dopadu na důvěru.“
- Usability test + copy review (důvěra, transparentnost).
- Analytics: drop-off a error rate v checkoutu.
- Pokud experiment: A/B + guardrails (refundy, support, stížnosti).

#### Scénář 5: „Potřebujeme benchmark použitelnosti oproti konkurenci.“
- Kvant benchmark test (úspěšnost, čas, SUS) na větším N.
- Doplň kval: pozorování hlavních bariér (pro návrh zlepšení).

#### Scénář 6: „Podpora hlásí, že lidé nechápou pojem X.“
- Analýza ticketů + tematizace.
- 5 rozhovorů/testů zaměřených na mentální model.
- Iterace copy + rychlý re-test.

#### Scénář 7: „Máme mnoho návrhů funkcí; co prioritizovat?“
- Kval: rozhovory/JTBD (co je skutečná potřeba).
- Kvant: survey s prioritizací (např. MaxDiff) nebo behaviorální proxy metriky.
- Výstup: roadmapa založená na hodnotě + rizika.

#### Scénář 8: „Po releasu klesla retence.“
- Analytics: kohorty, segmenty, časové srovnání.
- Kval: rozhovory s churned uživateli (když jde) + testování klíčových toků.
- Změna: experiment/iterace + monitorování.

## Časté chyby a jak jim předejít
- **Method-first** („pojďme udělat rozhovory“) místo goal-first → začít rozhodnutím a otázkami.
- **Záměna evaluace a discovery**: ptáš se uživatelů na řešení místo na potřebu → nejdřív problém, pak řešení.
- **Špatné signály úspěchu**: metriky bez vazby na hodnotu → definovat North Star + guardrails.
- **Ignorování omezení**: metoda se rozpadne na rekrutaci/čas → MVRP, pilot, realistický scope.
- **Nedokumentované závěry**: „všichni víme“ → zapsat evidence, limity, a uložit do repozitáře (Research Ops).

## Shrnutí (tl;dr)
- Metodu vybíráš podle **typu otázky** a **fáze procesu**, ne podle preference týmu.
- Kval odpovídá na „proč/jak“, kvant na „kolik“ a experiment na „A vs B“.
- Ve většině reálných situací je nejlepší **mix metod** a triangulace.

## Otázky k opakování
1. Jak převedeš business problém na výzkumné otázky bez podsouvání řešení?
2. Jaké typy otázek typicky řeší kvalitativní vs kvantitativní výzkum?
3. Co je rozdíl mezi explorací, evaluací a měřením (deskripcí)?
4. Jak bys zvolil metody pro problém „drop-off v registraci“ a proč?
5. Kdy dává smysl A/B test a jaké guardrail metriky bys hlídal?
6. Jaké jsou trade-offy mezi rychlou expertní analýzou a usability testem?
7. Proč je segmentace důležitá při interpretaci dat?
8. Co je minimálně životaschopný výzkumný plán (MVRP) a co obsahuje?
9. Jak řešíš situaci, kdy nemáš přístup k cílovým uživatelům?
10. Kdy a proč použiješ triangulaci?

## Doporučená literatura
- Travis, D. & Hodgson, P. (2019). *Think Like a UX Researcher.*
- Krug, S. (2012). *Rocket Surgery Made Easy.* (rychlé testování a rozhodování)
- Portigal, S. (2013). *Interviewing Users.* (když volíš rozhovory)

## Související kapitoly
- [Kvalitativní metody](kvalitativni-metody.md)
- [Kvantitativní metody](kvantitativni-metody.md)
- [Research operations](research-operations.md)
