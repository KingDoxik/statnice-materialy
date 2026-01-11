# Kvantitativní metody (dotazníky, datová analytika)

## Krátký úvod (co a proč)
Kvantitativní metody v UX odpovídají hlavně na otázky **„kolik?“, „jak často?“, „jak se to mění?“ a „je mezi A a B rozdíl?“**. Pracují s většími vzorky a měřením, takže umožňují:
- odhadnout **prevalenci** jevu (např. kolik % lidí narazí na problém),
- sledovat **trendy v čase** (zlepšuje se onboarding?),
- porovnávat varianty (experiment/A/B) a segmenty,
- kvantifikovat dopad změn (konverze, retence, chybovost).

V UX se kvant nejčastěji opírá o dvě disciplíny:
- **Dotazníky** (survey): strukturované otázky, škály, percepce a self-report.
- **Datovou analytiku** (behaviorální data): logy, eventy, funnel, kohorty – co lidé skutečně dělají.

## Cíle učení
- Umět rozhodnout, kdy použít kvantitativní metody a jak je kombinovat s kvalitativními.
- Umět navrhnout dotazník: cíle, výběr škál, sampling, eliminace bias, interpretace.
- Umět definovat a interpretovat produktové metriky a analytické pohledy (funnel, retence, kohorty).
- Umět poznat typické chyby: špatná instrumentace, vanity metriky, špatný sampling, špatná interpretace korelace.

## Klíčové pojmy (glosář)
- **Metrika**: měřitelný ukazatel (např. dokončení registrace, počet aktivních uživatelů).
- **North Star Metric**: hlavní metrika hodnoty (pozor: musí odrážet hodnotu pro uživatele i business).
- **Guardrail metriky**: ochranné metriky (např. chybovost, refundy), aby optimalizace „neškodila“.
- **Sampling**: výběr vzorku respondentů/uživatelů.
- **Bias**: zkreslení (např. self-selection, survivorship, non-response).
- **Reliabilita**: stabilita měření (opakované měření dává podobné výsledky).
- **Validita**: měříme to, co chceme měřit (ne něco jiného).
- **Signifikance**: pravděpodobnost, že pozorovaný rozdíl není náhoda (v A/B a inferenci).
- **Efekt (effect size)**: jak velký je rozdíl (praktická významnost).

## Studijní poznámky

### 1) Kdy zvolit kvantitativní metody (a kdy ne)
**Hodí se**, když:
- potřebuješ znát rozsah problému (kolik lidí je ovlivněno),
- chceš sledovat vývoj v čase (před/po změně),
- potřebuješ rozhodovat mezi variantami na základě metrik,
- chceš identifikovat segmenty s odlišným chováním.

**Méně se hodí**, když:
- nevíš, **co přesně** měřit (nejdřív discovery/qual),
- nemáš dost dat nebo je instrumentace nekvalitní,
- problém je v „proč“ a „jak“ (kvant ti řekne, že se to děje, ale ne proč).

### 2) Dotazníky (survey): co umí a co neumí
Dotazník je typicky **self-report**: lidé popisují zkušenost, postoj, spokojenost, záměr. Je rychlý a škáluje, ale má rizika:
- paměťová zkreslení („myslím, že…“),
- sociální žádoucnost,
- self-selection (odpovídají specifické typy lidí),
- špatně položené otázky vytvoří „data“, která nic neznamenají.

#### 2.1 Typy dotazníků v UX
- **Post-task / post-test**: hned po úloze (např. po testu prototypu).
- **NPS/CSAT**: rychlé „pulse“ měření, spíš trend než absolutní pravda.
- **SUS (System Usability Scale)**: standardizovaná škála použitelnosti (10 položek).
- **Product/market feedback**: percepce hodnoty, problémy, důvody odchodu (churn).

#### 2.2 Konstrukce dotazníku: praktický postup
1. **Definuj cíl**: co se má rozhodnout a jaký indikátor to reprezentuje.
2. **Rozbij na proměnné**: co přesně chceš měřit (spokojenost? důvěra? porozumění?).
3. **Vyber typ položek**:
   - Likert škály (souhlas 1–5/1–7),
   - frekvenční škály (nikdy–často),
   - sémantický diferenciál (např. „matoucí–jasné“),
   - jednovýběr/vícevýběr,
   - otevřená otázka (opatrně, je to kval data).
4. **Napiš otázky** (jasně, bez žargonu, jedna věc v jedné otázce).
5. **Pilot**: otestuj porozumění (kognitivní interview, „co si pod tím představíš?“).
6. **Nasazení**: definuj sample, sběr, incentive, dobu sběru.
7. **Analýza**: čištění dat, segmentace, interpretace + limity.

#### 2.3 Jak psát dobré otázky (checklist)
- Používej jazyk uživatelů, ne interní názvy.
- Vyhni se dvojitým otázkám: „Bylo to rychlé a jednoduché?“
- Vyhni se hodnotícímu framingu: „Jak moc se ti líbil náš skvělý nový design?“
- Dejte jasnou časovou kotvu: „Za posledních 7 dní…“
- Nabídni „nevím / netýká se“ tam, kde dává smysl.
- U škál popiš kotvy (co znamená 1 a 5), buď konzistentní v orientaci.

#### 2.4 Sampling a zkreslení (tohle je u státnic zásadní)
Nejčastější zkreslení:
- **Self-selection bias**: odpovídají ti jen extrémy (nadšení/naštvaní).
- **Survivorship bias**: měříš jen ty, kdo zůstali (churn už tam není).
- **Non-response bias**: neodpovídá určité publikum (např. méně technicky zdatní).
- **Coverage bias**: dotazník se nedostane k části populace (např. jen web, ne mobil).

Mitigace:
- promyšlené kanály sběru (in-app, e-mail, panel),
- segmentace a vážení (pokud máš referenční distribuce),
- transparentní uvedení limitů v závěrech.

#### 2.5 Vyhodnocení: co typicky reportovat
- základní popis (N, segmenty, období),
- distribuce odpovědí (ne jen průměry),
- trend v čase (pokud jde),
- rozdíly mezi segmenty (opatrně na malé N),
- u standardizovaných škál (např. SUS) interpretace v kontextu benchmarků (pokud existují).

Pozor: „statisticky významné“ ≠ „prakticky důležité“. V produktových rozhodnutích je často klíčový **dopad** a **náklady změny**.

### 3) Datová analytika: behaviorální data v UX
Datová analytika sleduje, **co uživatelé dělají**, ne co říkají. Typické otázky:
- Kde se uživatelé v toku ztrácí (drop-off)?
- Jak dlouho trvá dokončit úlohu?
- Které funkce jsou používané a v jakém pořadí?
- Jaká je retence (vrací se)?

#### 3.1 Instrumentace (bez toho je všechno ostatní k ničemu)
Základ je mít:
- dobře definované **eventy** (co se loguje),
- konzistentní názvy a vlastnosti (properties),
- identitu uživatele/relace (user_id, session_id),
- definice metrik (jednotné napříč týmem).

Praktická šablona „definition of done“ pro měření:
- event name + kdy se spouští,
- required properties (např. plan, device, experiment variant),
- pravidla deduplikace,
- testovací scénář (jak ověřit, že data tečou správně).

#### 3.2 Funnel (konverzní trychtýř)
Funnel = kroky toku (např. landing → signup → verify → first action). Sleduješ:
- konverzi mezi kroky,
- drop-off,
- čas mezi kroky.

Typické interpretace:
- drop-off na kroku „verify“ může být problém použitelnosti, ale taky politika (např. povinné SMS).
- funnel bez segmentace může skrýt rozdíly (noví vs vracející, mobile vs desktop).

#### 3.3 Retence a kohorty
- **Retence**: kolik uživatelů se vrací po D1/D7/D30.
- **Kohorty**: skupiny uživatelů podle data startu/akvizice nebo vlastnosti (např. plan).

Kohorty pomáhají odlišit:
- sezónnost,
- dopad releasu,
- kvalitu akvizičních kanálů.

#### 3.4 Segmentace a „proč je průměr nebezpečný“
Průměr může lhát (Simpsonův paradox): celkově to vypadá lépe, ale v klíčovém segmentu je to horší. Proto:
- segmentuj (noví vs power users, mobile vs desktop, země, jazyk),
- sleduj distribuce, ne jen průměry.

#### 3.5 Typické metriky v UX (příklady)
- **Task success rate**: úspěšné dokončení úlohy (z testu nebo z logů, pokud jde definovat).
- **Time on task**: čas k dokončení.
- **Error rate**: chybové stavy, validace, retries.
- **Adoption**: kolik lidí vyzkouší novou funkci.
- **Engagement**: frekvence/hloubka použití (pozor na „vanity“).
- **Support tickets / feedback tags**: kvantifikace témat (hybrid).

### 4) Kvant × kval: jak se doplňují (prakticky)
Typický postup:
- kvant ukáže **kde** a **jak moc** (např. drop-off 40 %),
- kval vysvětlí **proč** (mentální model, bariéra),
- změna se ověří kvantem (pokles drop-off, růst success rate).

Užitečná triangulace:
- analytics + usability test,
- survey + rozhovory,
- A/B + kvalitativní debrief (pro interpretaci).

### 5) Etika a soukromí v kvantitativním měření
- Minimalizuj sběr osobních dat (sbírej jen to, co potřebuješ).
- U citlivých domén (zdraví, finance) zvaž anonymizaci, agregaci, retention.
- Transparentnost: co sbíráš a proč (právní a důvěryhodnostní rozměr).
- Přístupová práva k dashboardům a exportům (viz Research Ops).

## Praktické příklady / mini-case

### Mini-case 1: Drop-off ve funnelu registrace
Data: 10 000 návštěv → 2 000 signup → 1 100 verify → 700 first action.  
Kvant závěr: největší drop-off je na verify.  
Co dál: kvalitativní test odhalí, že SMS kód chodí pozdě a copy nevysvětluje proč je to nutné; navrhne se úprava a ověří se pokles drop-off.

### Mini-case 2: Dotazník spokojenosti (CSAT) po podpoře
Cíl: zjistit trend spokojenosti po kontaktu se supportem.  
Riziko: odpovídají hlavně extrémy.  
Mitigace: stabilní sběrný kanál, sledování trendu, doplnění o tematickou analýzu otevřené otázky „co bylo špatně“.

### Mini-case 3: A/B test vs interpretace
A/B ukáže +1.2 p.b. konverze, ale guardrail metrika „refund rate“ roste.  
Závěr: optimalizace může být krátkodobá a škodlivá (etika, důvěra). Rozhodnutí musí vycházet z více metrik a kontextu.

## Časté chyby a jak jim předejít
- **Vanity metriky** (např. pageviews bez vazby na hodnotu) → definuj metriky hodnoty a guardrails.
- **Špatná instrumentace** → nejdřív data quality, až pak interpretace.
- **Korelace ≠ kauzalita** → pro kauzalitu experiment / přirozený experiment; jinak opatrnost.
- **Nejasné definice metrik** („aktivní uživatel“) → sepsat definice a držet je konzistentně.
- **Slepé průměrování** → segmentace, distribuce, kohorty.
- **Přesná čísla z nepřesných dat** → reportuj limity, bias, intervaly/rozsahy, ne falešnou jistotu.
- **Dotazníky bez pilotu** → pilot + úprava wording.

## Shrnutí (tl;dr)
- Kvantitativní metody odpovídají na **„kolik“** a umožňují měřit dopad a trendy.
- Dotazníky jsou rychlé, ale jsou self-report a trpí bias; analytika měří chování, ale potřebuje dobrou instrumentaci.
- Nejlepší praxe je triangulace: kvant najde „kde a jak moc“, kval vysvětlí „proč“.

## Otázky k opakování
1. Jaké typy otázek zodpovídá kvantitativní výzkum v UX?
2. Jaký je rozdíl mezi validitou a reliabilitou? Uveď příklad v dotazníku.
3. Vyjmenuj 3 typická zkreslení (bias) v dotaznících a jak je zmírnit.
4. Proč je instrumentace klíčová a co má obsahovat dobrá definice eventu?
5. Co je funnel a jaké jsou 2 typické chyby při jeho interpretaci?
6. Co jsou kohorty a kdy jsou užitečnější než „celkové“ metriky?
7. Vysvětli rozdíl mezi North Star metrikou a guardrail metrikami.
8. Proč „statisticky významné“ nemusí znamenat „prakticky důležité“?
9. Jak bys kombinoval analytics a usability test pro zlepšení checkoutu?
10. Uveď 2 etické zásady při sběru behaviorálních dat.

## Doporučená literatura
- Travis, D. & Hodgson, P. (2019). *Think Like a UX Researcher.* (mix metod, interpretace)
- Krug, S. (2012). *Rocket Surgery Made Easy.* (měření a interpretace v praxi)
- Sauro, J. & Lewis, J. R. (2016). *Quantifying the User Experience.* (benchmarking, metriky použitelnosti)

## Související kapitoly
- [Kvalitativní metody](kvalitativni-metody.md)
- [Volba metody na základě výzkumných otázek a fáze designového procesu](volba-metody.md)
- [Research operations](research-operations.md)
