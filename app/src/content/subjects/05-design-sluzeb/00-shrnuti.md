---
title: "Shrnutí"
subject: "Design sluzeb"
subjectSlug: "05-design-sluzeb"
order: 0
---
## Úvod

Design služeb (*service design*) je integrující disciplína na pomezí UX, procesního řízení (BPM), IT service managementu (ITIL/ITSM), enterprise architektury (EA) a řízení změny. Jejím jádrem je end-to-end návrh a řízení služby jako **socio-technického systému**, kde kvalita zákaznické zkušenosti (CX) typicky nevzniká (jen) v UI, ale zejména v backstage: v pravidlech, datech, handoverech, kapacitách, odpovědnostech a governance. Pro státnice je klíčové umět: (1) přesně definovat pojmy a odlišit příbuzné artefakty (CJM vs. blueprint vs. BPMN), (2) popsat proces (Double Diamond + iterace), (3) ukázat most „návrh → implementace → adopce → dopad“ (ToC + change management + měření), (4) propojit s byznys/strategií (BMC, portfolio, design leadership).

> **Klíčové:** Zapamatujte si větu: **„CX je špička ledovce, service design řeší ledovec.“** (frontstage je vidět, backstage tvoří realitu).

---

## 0. Jak se učit (repetitivní režim pro státnice)

### Doporučený cyklus opakování
1) **Definice pojmů** (slovník) →  
2) **Proces** (Double Diamond, framing, iterace) →  
3) **Artefakty** (CJM, blueprint, ToC) →  
4) **Implementace + governance** (service owner, standardy, DoD) →  
5) **Změna** (adopce, readiness, role, modely) →  
6) **Měření/evaluace** (baseline, KPI mix, evaluační design) →  
7) **Strategie** (BMC, portfolio, leadership, maturity).

### „Zkoušková kostra“ odpovědi (1–2 min)
- Definice služby + service design  
- Mindset/principy (user-centered, co-creative, sequential, evidencing, holistic)  
- End-to-end proces (Double Diamond, iterace)  
- Výzkum + triangulace (discovery/validation/evaluation)  
- CJM + blueprint (+ most k BPM/ITSM/EA)  
- Implementace + governance + change management (adopce jako „done“)  
- Metriky & evaluace (baseline, leading/lagging, Goodhart)  
- Strategický přesah (BMC, portfolio, design leadership).

> **Klíčové:** Na státnicích často vyhrává struktura: **pojmy → proces → artefakty → provoz → změna → metriky → strategie**.

### Hloubka
Stručně vysvětlete praktickou část; detail přidejte podle tématu otázky (mapování / výzkum / change / leadership).

---

## 1. Klíčové pojmy a definice (memorizační seznam)

> **Cíl sekce:** mít slovník a umět **odlišovat** podobné pojmy (typická zkoušková past).

### 1.1 Základní pojmy designu služeb

> **Definice:** Design služeb (*service design*) je systematický přístup k porozumění, návrhu a řízení služby jako **end-to-end systému interakcí, procesů, lidí a technologií** s cílem maximalizovat hodnotu (*value*) pro uživatele i poskytovatele.

> **Definice:** Služba je opakovatelný způsob vytváření hodnoty prostřednictvím kombinace činností, zdrojů a interakcí, který řeší potřebu uživatele v určitém kontextu.

> **Definice:** Hodnota (*value*) v designu služeb není jen finanční; zahrnuje čas, riziko, důvěru, pohodlí; ve veřejném sektoru i spravedlnost, dostupnost, legitimitu a transparentnost.

> **Definice:** UX (*user experience*) je prožitek uživatele při interakci s konkrétním systémem/rozhraním; CX (*customer experience*) je širší zkušenost se službou/značkou napříč kanály a časem.

> **Definice:** Touchpoint (kontaktní bod) je konkrétní místo interakce zákazníka se službou (web, pobočka, call centrum, e-mail, aplikace, faktura…).

> **Definice:** Frontstage je část služby viditelná zákazníkovi; backstage je interní část služby (procesy, systémy, pravidla, data, koordinace), kterou zákazník přímo nevidí.

> **Klíčové:** „UX řeší interakci, CX řeší zkušenost, service design řeší **mechanismus**, který zkušenost vytváří.“

### 1.2 Systémové a organizační pojmy

> **Definice:** Service ecosystem je síť aktérů, organizací, procesů a technologií, které společně umožňují poskytování služby a spoluvytváření hodnoty.

> **Definice:** Service-dominant logic je perspektiva, podle níž hodnota vzniká spoluutvářením (*co-creation*) v užití služby, nikoli jen dodáním „hotového produktu“.

> **Definice:** Silo efekt je organizační jev izolovaných týmů/útvarů s lokální optimalizací, která zhoršuje end-to-end výkon a konzistenci služby.

> **Definice:** Provozní/operační model (*operating model*) je způsob, jak organizace dlouhodobě dodává hodnotu: kombinace procesů, rolí, kompetencí, governance, technologií a metrik.

> **Definice:** Omnichannel je koordinované poskytování služby napříč kanály tak, aby zákazník plynule přecházel se sdíleným kontextem a organizace měla konzistentní data a řízení.

### 1.3 Procesní a mapovací artefakty (umět rozdíl)

> **Definice:** Double Diamond je model procesu Discover–Define–Develop–Deliver, kde se střídá divergence (rozšíření) a konvergence (zúžení do rozhodnutí).

> **Definice:** Customer Journey Map (CJM) je mapa zkušenosti uživatele v čase (fáze, cíle, emoce, pain points, touchpointy, metriky, důkazy), ve variantě as-is/to-be.

> **Definice:** Service Blueprint je mapa služby, která překládá journey do provozu (zákaznické akce, frontstage, backstage, podpůrné procesy, technologie/data) a ukazuje line of visibility.

> **Definice:** BPMN je formální notace procesů pro jednoznačný, auditovatelný popis toku práce (brány, výjimky, role/swimlanes, události).

> **Definice:** ITSM/ITIL je rámec řízení IT služeb; klíčové pojmy: incident (porucha), service request (požadavek), SLA/OLA (dohody o úrovni služby), katalog služeb.

> **Klíčové:** CJM = „co prožívá“; blueprint = „co musí proběhnout uvnitř“; BPMN = „jak přesně řídíme práci a výjimky“ (viz §6.4).

### 1.4 Výzkum, validita a evidence

> **Definice:** Triangulace je kombinování více metod, zdrojů dat, výzkumníků nebo teorií pro zvýšení důvěryhodnosti a interpretovatelnosti závěrů.

> **Definice:** Validita je míra, zda výzkum měří to, co měřit má, a zda jsou závěry oprávněné; reliabilita je spolehlivost/konzistence postupu.

> **Definice:** Bias (zkreslení) je systematická odchylka ve výběru/sběru/interpretaci dat (např. selection bias, confirmation bias, sociální žádoucnost).

> **Definice:** Generalizace je přenos zjištění mimo vzorek; statistická vyžaduje reprezentativní výběr, analytická přenáší vysvětlený mechanismus do podobných kontextů.

> **Definice:** Finding je konkrétní zjištění z dat; insight je zhuštěné vysvětlení mechanismu + návrhová implikace (co s tím).

> **Definice:** Discovery/validation/evaluation jsou účely výzkumu v čase: porozumění problému → ověření návrhu → vyhodnocení dopadu po implementaci.

### 1.5 Změna, řízení a metriky

> **Definice:** Teorie změny (*Theory of Change, ToC*) je explicitní popis, jak a proč mají aktivity v kontextu vést k výsledkům a dopadům, včetně předpokladů, rizik a indikátorů.

> **Definice:** Adopce je míra, v jaké cílové skupiny skutečně používají novou službu/proces stabilně v čase (adopce = „skutečné dokončení“ změny).

> **Definice:** Readiness je připravenost organizace změnu absorbovat; change fatigue je únava ze změn z kumulace iniciativ.

> **Definice:** Sponzor změny je seniorní stakeholder zajišťující legitimitu, zdroje a odstraňování překážek; change agent změnu aktivně prosazuje v týmech.

> **Definice:** Business case je zdůvodnění investice: přínosy, náklady, rizika, horizont (často včetně ROI).

> **Definice:** ROI (Return on Investment) je návratnost investice; běžné definice: (gain−cost)/cost nebo gain/cost—vždy uveďte vzorec a časový horizont.

> **Definice:** Benefit realization je řízení a ověřování dosažení plánovaných přínosů; benefit owner je vlastník přínosu odpovědný za dosažení cílové hodnoty.

> **Definice:** KPI jsou klíčové ukazatele výkonu pro stabilní řízení služby; OKR propojují ambiciózní cíle s měřitelnými výsledky pro změnu/zlepšování.

> **Definice:** Baseline je výchozí stav metrik před změnou; leading indikátor předpovídá trend, lagging potvrzuje výsledek se zpožděním.

> **Definice:** Goodhartův zákon: jakmile se metrika stane cílem, přestává být dobrým měřítkem (riziko „gaming“).

> **Definice:** NPS měří ochotu doporučit (loajalita/brand), CSAT spokojenost s interakcí/službou, CES vnímané úsilí.

### 1.6 Strategické a leadership pojmy

> **Definice:** Design leadership určuje směr, kulturu rozhodování, etiku a práci s nejistotou; design management řídí kapacity, procesy, standardy, rozpočty a dodávky.

> **Definice:** Governance je soubor pravidel, rolí a rozhodovacích mechanismů pro konzistentní řízení služby a změn (včetně kontrol).

> **Definice:** Design governance je governance specificky pro kvalitu návrhu a konzistenci (standardy, review, výjimky).

> **Definice:** Service standards jsou požadavky na návrh a provoz služby (kvalita, měření, zlepšování).

> **Definice:** Definition of Done (pro službu) je dohoda, co znamená „hotovo“: nejen funkce, ale provozní připravenost, podpora, měření, aktualizované artefakty.

> **Definice:** Design maturity je míra, v níž je design integrován do rozhodování a strategie; design capability je opakovatelná schopnost organizace doručovat kvalitní služby.

> **Definice:** Design ops / research ops jsou provozní disciplíny zajišťující repozitáře, šablony, verzování, dohledatelnost a napojení na backlogy.

> **Definice:** Business Model Canvas (BMC) je rámec 9 bloků popisující logiku tvorby, doručení a zachycení hodnoty (CS, VP, CH, CR, RS, KR, KA, KP, CS).

---

## 2. Co je design služeb a proč existuje (mindset + cíle hodnoty)

### 2.1 Jednotka návrhu: služba vs. UX vs. produkt

> **Definice:** Produkt je nabízený artefakt/kombinace funkcí; služba je způsob realizace hodnoty v čase, často napříč produkty a kanály.

Design služeb se liší „jednotkou návrhu“:
- **UX**: rozhraní/interakce (typicky digitální touchpoint).
- **Produktový design**: produkt, jeho funkce a životní cyklus.
- **Service design**: **end-to-end služba** včetně provozní realizace (role, procesy, pravidla, data, integrace).

> **Klíčové:** Čím více je jednotka návrhu „služba“, tím více je nutná **organizační změna** → governance + change management (viz §8–§9).

### 2.2 Trojice kritérií desirability–feasibility–viability

> **Definice:** Desirability = žádoucnost pro uživatele; feasibility = proveditelnost pro organizaci/technologie; viability = životaschopnost ekonomicky/udržitelně (ve veřejném sektoru i legitimita/spravedlnost).

**Propojení s BMC (viz §12):**
- Pravá strana (CS, VP, CH, CR, RS) ≈ **desirability + delivery**
- Levá strana (KR, KA, KP) ≈ **feasibility**
- Spodní (CS, RS) ≈ **viability**

> **Klíčové:** „Hezká journey bez viability je marketing; viability bez desirability je byrokracie; feasibility bez governance je chaos.“

### 2.3 Mindset a principy designu služeb (školní)

Klasické principy:
- **user-centered** (orientace na cíle a kontext člověka),
- **co-creative** (spolutvorba se stakeholdery; i jako governance princip),
- **sequential** (služba je cesta v čase; důraz na přechody),
- **evidencing** (důkazy služby: statusy, potvrzení, transparentnost),
- **holistic** (end-to-end + ekosystém).

> **Klíčové:** Sekvenčnost + omnichannel = potřeba **konzistentních handoverů** a „stavové komunikace“ (status, co se děje, kdy, co dál).

### 2.4 Hodnota a „skryté náklady“ špatné služby

Typické skryté náklady:
- čekání, opakované kontakty, eskalace,
- rework, vratky, kompenzace,
- ruční přepisy dat, shadow procesy,
- churn, reputační škody, zátěž zaměstnanců.

> **Klíčové:** CX signály bez provozních metrik = **slepota na příčiny** (viz metriky §10).

---

## 3. Služba jako socio-technický systém (frontstage/backstage, ekosystém, operating model)

### 3.1 Vrstevnatý model služby

Základní vrstvy (odpovídá logice blueprintu):
- zákaznické akce (journey),
- frontstage aktivity (lidé/systémy viditelné zákazníkovi),
- backstage aktivity (interní práce),
- podpůrné procesy,
- technologie/data/integrace.

> **Definice:** Line of visibility je hranice mezi tím, co zákazník vidí (frontstage) a co je skryté (backstage).

> **Klíčové:** **Většina problémů CX vzniká v backstage**: handovery, kapacity, data, pravidla, konfliktní KPI.

### 3.2 Ekosystém a governance mezi aktéry

Služba běží v **ekosystému**: interní útvary + partneři + regulátor + dodavatelé (platformy, identita, logistika…).

Bez governance (ownership, standardy, rozhraní odpovědnosti) hrozí:
- rozpad na lokální optimalizace (silos),
- nekonzistence mezi kanály,
- „experience gap“ (slib vs realita).

> **Příklad:** Digitální onboarding v bance vypadá moderně, ale backstage kontrola dokumentů má jiné SLA → zákazník neví kdy bude hotovo; problém je governance a SLA alignment, ne UI.

### 3.3 Operating model a service promise

> **Definice:** Service promise (slib služby) je to, co zákazníkovi explicitně/implicitně garantujeme (co, kdy, jak, s jakou jistotou).

Promise se musí opírat o:
- blueprint (co se musí stát),
- provozní schopnosti (operating model),
- service standards + SLA/KPI.

> **Klíčové:** Nesoulad promise ↔ blueprint ↔ operating model = **experience gap** (viz §6–§8).

---

## 4. End-to-end proces designu služeb (Double Diamond + framing + prioritizace)

### 4.1 Double Diamond a iterace

> **Definice:** Double Diamond: Discover (poznávání) → Define (vymezení) → Develop (tvorba) → Deliver (dodání/ověření/škálování).

Divergence ≠ kreativní chaos; konvergence ≠ „zabíjení nápadů“.

> **Klíčové:** Iterace = **řízení nejistoty**: učíme se, snižujeme riziko špatné investice (propojit s validací/evaluací v §5 a §10).

### 4.2 Framing problému (od symptomů ke kořenovým příčinám)

> **Definice:** Problémový rámec (*problem framing*) je vymezení a pojmenování problému, včetně scope/constraints a perspektivy.

Postup:
- symptomy („lidi si stěžují“, „nízká konverze“),
- root cause (5 Why, systémové vazby),
- problem statement / design challenge (pro koho, v jakém kontextu, jaký dopad).

> **Příklad:** „Zlepšit formulář reklamace“ → framing odhalí, že bolest je nejistota a nejasná pravidla → zadání: „navrhnout end-to-end reklamaci se sledovatelným stavem a transparentní policy“.

### 4.3 Prioritizace a trade-offs

Kritéria:
- dopad × náročnost,
- riziko (compliance, reputace, provoz),
- kdo nese náklady vs. kdo má přínosy (politika služby).

> **Klíčové:** Transparentní rozhodování + **decision log** snižuje „dojmologii“ a politické kličky (viz research ops §5.5).

### 4.4 Od konceptu k MVP/pilotu

> **Definice:** MVP u služeb je minimální kombinace procesu, podpory, rolí a měření (ne jen funkce), která umožní bezpečné použití a validní zpětnou vazbu.

MVP/pilot zároveň:
- validuje design (desirability/feasibility),
- testuje ToC (mechanismus dopadu) (viz §9.1).

---

## 5. Výzkum v designu služeb (plánování, triangulace, analýza, syntéza)

### 5.1 Účely výzkumu v čase (discovery–validation–evaluation)

> **Definice:** Discovery = porozumění potřebám, kontextu, mechanismům služby; validation = ověření návrhu před/ během delivery; evaluation = posouzení dopadu po go-live.

> **Klíčové:** U státnic často padá otázka „kdy co a proč“:  
- před návrhem: discovery (framing),  
- během návrhu: validation (prototypy),  
- po spuštění: evaluation (dopad + continuous improvement).

### 5.2 Plánování výzkumu

Pojmy:
- výzkumný cíl, otázka, hypotéza,
- protokol, sampling, rekrutace, pilotáž,
- etika + GDPR (souhlas, minimalizace dat).

Rizika:
- selection bias,
- sociální žádoucnost,
- confirmation bias.

> **Definice:** Protokol je standardizovaný postup sběru dat (rozhovor/test/pozorování) pro srovnatelnost a auditovatelnost.

> **Definice:** Pilotáž je zkušební provedení výzkumu na malém vzorku pro odhalení problémů před ostrým sběrem.

### 5.3 Triangulace (metodická disciplína)

Typy triangulace:
- metod (rozhovory + pozorování + data),
- dat (segmenty/kanály/čas),
- výzkumníků (peer debriefing),
- teorií (různé rámce interpretace).

> **Definice:** Konvergence = různé zdroje vedou ke stejnému závěru (vyšší důvěryhodnost); discrepance = rozpor, který vyžaduje vysvětlení (často odhalí segmenty nebo „oficiální vs reálný“ proces).

> **Klíčové:** Discrepance není chyba—je to **signál**: segment, kanál, měření nebo shadow proces.

### 5.4 Analýza a syntéza (překlad do rozhodnutí)

**Analýza (jak z dat udělám strukturu):**
- kódování, tematická analýza,
- affinity mapping,
- patterny,
- root cause (5 Why).

**Syntéza (jak ze struktury udělám směr):**
- findings → insights → HMW,
- návrhové principy,
- designové hypotézy.

> **Definice:** Insight je interpretačně zhutněné porozumění, které vysvětluje „proč“ a naznačuje „co s tím“ (akční implikace).

> **Příklad:** Finding: „uživatelé volají po podání“; Insight: „volají kvůli nejistotě o stavu → řešit statusovou komunikaci + integraci dat.“

> **Klíčové:** CJM/blueprint musí být **evidence-backed** (citace, metriky, zdroje), jinak je to design theatre (viz §13.4).

### 5.5 Research ops (provoz výzkumu)

> **Definice:** Research repository je úložiště výzkumných dat a výstupů pro opakované použití a snížení duplicity.

> **Definice:** Audit trail je dohledatelná stopa, jak tým došel od dat k závěrům.

> **Definice:** Decision log je záznam klíčových rozhodnutí a jejich zdůvodnění (napojení na governance).

> **Klíčové:** Bez ops vznikají „plakáty bez života“: mapy bez ownera, poznatky bez dopadu, opakovaný výzkum.

---

## 6. Mapování zkušenosti a provozu: CJM, blueprint a most k BPM/ITSM/EA

### 6.1 Customer Journey Map (CJM)

CJM má obsahovat:
- fáze cesty, cíle,
- otázky/očekávání,
- emoce,
- pain points,
- touchpointy/kanály,
- metriky,
- důkazy (citace, data).

As-is vs. to-be:
- **as-is** = realita (variabilita, výjimky),
- **to-be** = cílový stav (musí být proveditelný → blueprint).

> **Definice:** Moment of truth je kritický bod cesty s disproporčním dopadem na důvěru/loajalitu (např. reklamace, identita, platba, chyba).

### 6.2 Typické chyby CJM

- marketingová „ideální“ cesta místo reality,
- bez evidence,
- zaměněná za procesní mapu,
- ignoruje backstage a výjimky,
- bez metrik → plakát.

> **Klíčové:** CJM bez metrik a evidence se nedá použít pro prioritizaci ani evaluaci (navázat na baseline §10.1).

### 6.3 Service Blueprint

Vrstvy blueprintu:
- zákaznické akce,
- frontstage aktivity,
- backstage aktivity,
- podpůrné procesy,
- technologie/data.

Blueprint odhaluje:
- handovery a bottlenecky,
- SLA nesoulady,
- integrační závislosti,
- rizika a místa reworku.

> **Příklad:** Frontstage slibuje „okamžitě“, ale legacy systém zpracovává dávkově 1× denně → řešit promise (komunikaci) nebo investici do integrace (operating model).

### 6.4 Most k BPMN, ITIL/ITSM a enterprise architektuře (EA)

> **Klíčové (zkoušková formulace):**
- **CJM** = „mapa prožívání“ (co a jak zákazník zažívá),
- **Blueprint** = „překlad do provozu“ (co se musí stát uvnitř),
- **BPMN** = „formální řízení práce“ (přesná logika, výjimky, audit).

**ITSM vazby:**
- incidenty/requests jako symptomy selhání služby,
- katalog služeb = co organizace poskytuje,
- SLA/OLA = provozní kontrakty,
- eskalace = definované cesty, kdo rozhoduje (navázat na policy design §7.2 a governance §8).

**EA vazby (TOGAF/ArchiMate logika):**
- business capabilities,
- aplikační služby,
- datové entity,
- integrace a závislosti.

> **Klíčové:** Service design dává end-to-end směr; BPM/ITSM/EA dávají jazyk pro standardizaci, rizika, implementaci a dlouhodobou udržitelnost.

---

## 7. Ideace, koncept služby, policy design a prototypování služeb

### 7.1 Od insightů ke konceptům a value proposition

Artefakty:
- service concept cards (hodnota, segment, touchpointy, předpoklady),
- storyboardy/scénáře,
- value proposition jako testovatelná hypotéza.

> **Definice:** Hypotéza je testovatelný předpoklad o mechanismu a dopadu změny (např. „statusové notifikace sníží opakované kontakty“).

### 7.2 Policy design (pravidla služby) a výjimky

> **Definice:** Policy design je návrh rozhodovacích pravidel služby (kdo rozhoduje, kdy, podle čeho) včetně výjimek, eskalací, férovosti a auditovatelnosti.

Proč: bez policy designu lidé improvizují → nekonzistence → vyšší náklady + riziko + „experience gap“.

> **Klíčové:** Policy design + compliance = prevence improvizace a stínových procesů (viz §13.3, §13.5).

### 7.3 Prototypování služeb (low-fi až pilot)

Metody:
- roleplay / service walkthrough,
- wizard-of-oz (část služby „naoko“ manuálně),
- pilot v provozu.

> **Definice:** Prototyp služby je zjednodušená, testovatelná reprezentace služby zahrnující nejen UI, ale i proces, komunikaci, role a pravidla.

> **Klíčové:** „Služby ≠ UI“: testujte i zaměstnance, výjimky, handovery a data (service usability jako proveditelnost pro obě strany).

---

## 8. Implementace, provoz a governance služby (od návrhu k realitě)

### 8.1 Přenos do delivery a provozu

Klíčové prvky:
- **service owner** (end-to-end odpovědnost),
- service standards, SLA/KPI,
- eskalační cesty,
- handshake to operations,
- go-live (spuštění do ostrého provozu).

> **Definice:** Go-live je okamžik uvedení služby do ostrého provozu mimo pilotní prostředí.

> **Klíčové:** Bez „handshake do operations“ končí projekty „dodáním“ – a služba degraduje.

### 8.2 Kontinuální zlepšování

> **Definice:** Continuous improvement je průběžné zlepšování služby na základě dat a zpětné vazby s jasným ownershipem a metrikami.

Mechaniky:
- backlog zlepšení,
- pravidelné provozní review,
- aktualizace CJM/blueprintu (artefakty jako živé).

### 8.3 Design ops (operationalizace designu)

Obsah:
- repozitář, šablony, verzování,
- napojení na backlogy (produktové i změnové),
- měření dopadů.

> **Klíčové:** Ops je „pojistka proti design theatre“: bez provozní disciplíny se design neškáluje (viz §11.4).

---

## 9. Teorie změny (ToC) a change management (adopce jako „skutečné dokončení“)

### 9.1 Theory of Change (ToC) jako most „návrh → dopad“

> **Definice:** ToC modeluje řetězec inputs → activities → outputs → outcomes → impact + předpoklady/risks + indikátory + baseline/target.

ToC jako artefakt:
- má vlastníka (často service owner + change manager),
- iteruje se podle pilotů a dat po go-live.

> **Definice:** Output je bezprostřední produkt aktivit (např. formulář, integrace, SOP); outcome je změna chování/výkonu (např. více online podání, kratší doba vyřízení); impact je dlouhodobý dopad (např. důvěra, snížení administrativní zátěže).

### 9.2 Change management: účel, role, readiness

> **Definice:** Řízení změn je soubor praktik pro dosažení adopce (komunikace, participace, školení, podpora, práce s odporem, governance).

Rozdíl:
- projektové řízení: čas/rozsah/rozpočet,
- změnové řízení: **adopce/chování/udržitelnost**.

Role:
- sponzor, change agent, superuživatelé,
- L&D, interní komunikace, steering committee.

> **Definice:** RACI rozlišuje Responsible (vykonává), Accountable (nese odpovědnost), Consulted, Informed.

> **Klíčové:** Typické selhání RACI: více „A“, nejasná úroveň rozhodnutí → paralýza a obcházení.

### 9.3 Vybrané modely (srovnání)

| Model | K čemu je silný | Typická slabina / riziko |
|---|---|---|
| Kotter (8 kroků) | mobilizace leadershipu, naléhavost, koalice, quick wins | hůř sedí na iterativní nejistotu, může být „příliš lineární“ |
| ADKAR | diagnostika adopce u jednotlivců (A-D-K-A-R) | může ignorovat systémové incentivy a strukturu |
| Lewin + Bridges | fáze změny + psychologický přechod (neutral zone, bezpečí) | riziko zjednodušení v komplexním systému |
| Agile/Lean zavádění | iterace, MVP, učení v provozu, postupný rollout | v regulaci nutné guardrails a auditovatelnost |

> **Definice:** Quick wins jsou rychlé viditelné přínosy posilující důvěru a energii změny.

> **Definice:** Psychologická bezpečnost je klima, kde je možné přiznat nejistotu a chybu bez trestu (kritické v neutral zone).

> **Definice:** Enablement je zajištění změny kombinací školení, podpory, materiálů, úprav nástrojů a koučinku.

### 9.4 Portfoliová perspektiva změn

- změnové kapacity jsou omezené,
- kumulace iniciativ → change fatigue,
- závislosti mezi rollouty a týmy → nutná portfolio governance.

> **Klíčové:** I dobrá změna selže, když je organizace „přeplněná změnami“ (kapacity, timing, sezónnost provozu).

---

## 10. Měření, evaluace a řízení přínosů (CX + provoz + ekonomika)

### 10.1 Co měřit a proč (baseline + causal opatrnost)

> **Definice:** Baseline je výchozí hodnota metrik před změnou; bez baseline nelze interpretovat zlepšení.

> **Definice:** Goodhartův zákon varuje před „gaming“: metrika jako cíl deformuje chování.

> **Klíčové:** Metriky mají být **vyvážené**: CX + provoz + adopce + ekonomika (jinak optimalizujete špatnou věc).

### 10.2 Sada metrik (minimální „balíček“)

**CX (signály):**
- NPS (loajalita/brand; pozor na interpretaci),
- CSAT (konkrétní interakce),
- CES (tření/úsilí; často citlivé na procesní změny).

**Provoz (příčiny):**
- lead time pro zákazníka (od požadavku po vyřízení),
- doba vyřízení, chybovost, rework,
- FCR (first contact resolution),
- počet eskalací, dodržení SLA.

**Adopce (skutečné používání):**
- podíl transakcí novým kanálem,
- míra obcházení (shadow procesy),
- kvalita dat (úplnost, chybovost).

**Ekonomika:**
- unit economics (náklad na jednotku služby),
- náklad na obsluhu,
- ROI (s definicí výpočtu),
- benefit realization (vlastníci přínosů).

> **Klíčové:** NPS/CSAT/CES samy o sobě neříkají „proč“—propojte s provozními metrikami a root cause (viz §5.4).

### 10.3 Evaluační design v praxi

Možnosti:
- before/after (+ hlídat sezónnost),
- postupný rollout (stepped-wedge),
- difference-in-differences (když existují paralelní trendy),
- A/B testy (opatrně v end-to-end službách),
- contribution analysis / realistická evaluace (kontext–mechanismus–outcome).

> **Definice:** Attribution = připsání dopadu jedné intervenci; contribution = plausibilní tvrzení, že intervence přispěla (realističtější u komplexních služeb).

> **Klíčové:** U služeb často nelze čistě experimentovat; cílem je metodická poctivost, ne laboratorní dokonalost.

---

## 11. Strategická vrstva: design leadership, design management, zralost a inovace

### 11.1 Design leadership vs. design management

> **Definice:** Design leadership vytváří směr, kulturu rozhodování, etiku a práci s nejistotou; design management buduje kapacity, procesy, standardy, review a dodavatelské řízení.

> **Klíčové:** „Leadership chrání kvalitu a smysl; management zajišťuje opakovatelnost a škálování.“

### 11.2 Governance a standardy kvality

Nástroje governance:
- service standards,
- design review,
- guardrails (privacy/security/accessibility),
- Definition of Done pro službu.

> **Klíčové:** Governance nemá být „schvalovací brzda“, ale **zrychlovač správných rozhodnutí** (jasná pravidla a vzory).

### 11.3 Organizační modely a role

Modely:
- centralizovaný (konsistence),
- federovaný (rychlost, blízkost týmům),
- hybrid (nejčastěji funkční kompromis).

Role (minimální set v service změnách):
- service designer, UX researcher,
- product owner,
- service owner,
- change manager,
- provoz + IT architektura/compliance.

> **Klíčové:** Častý zdroj problémů: ownership kanálu/produktu bez end-to-end ownershipu služby.

### 11.4 Design maturity a design capability

Referenční logiky:
- Danish Design Ladder (styl → proces → strategie),
- NN/g maturity (ad hoc → integrované → strategické).

Roadmapa capability typicky zahrnuje:
- repozitář výzkumu,
- standardizace map (CJM/blueprint),
- pravidelná review,
- vazba na portfolio a metriky.

### 11.5 Strategie umožňující inovace

- discovery vs delivery (kontinuální discovery),
- exploration vs exploitation (ambidextrie),
- inovační portfolio (riziko × horizont × přínos),
- řízení ekosystému partnerů a závislostí.

> **Klíčové:** Bez investice do discovery organizace jen „dodává funkce“ a kumuluje dluh (technický i procesní).

---

## 12. Business Model Canvas (BMC) a napojení na service design

### 12.1 9 bloků BMC (nutné vyjmenovat)

> **Definice:** BMC je rámec pro popis a sdílení logiky tvorby, doručení a zachycení hodnoty v 9 blocích.

1. **Customer Segments (CS)** – pro koho  
2. **Value Proposition (VP)** – jakou hodnotu/slib  
3. **Channels (CH)** – kudy doručuji (omnichannel)  
4. **Customer Relationships (CR)** – jaký vztah/podpora  
5. **Revenue Streams (RS)** – jak vznikají příjmy (nebo financování)  
6. **Key Resources (KR)** – co musím mít (lidé, data, systémy)  
7. **Key Activities (KA)** – co musím dělat (procesy, provoz)  
8. **Key Partners (KP)** – kdo mi umožní službu (ekosystém)  
9. **Cost Structure (CS)** – náklady/cost drivers

> **Klíčové:** BMC je „jedna stránka“ pro sladění stakeholderů; detailní specifikaci doplňuje blueprint, operating model a business case.

### 12.2 BMC jako sada hypotéz (Lean logika validace)

- každý blok obsahuje předpoklady,
- validujeme experimenty (výzkum, prototypy, pilot),
- rozhodnutí pivot vs persevere.

> **Definice:** Pivot je zásadní změna směru (segment, kanál, VP…); persevere je pokračování ve směru s iterativním zlepšováním.

### 12.3 Překlad z CJM/blueprint do BMC (typické vazby)

- CJM → Channels, Customer Relationships, Value Proposition,
- stakeholder mapa → Key Partners/Resources,
- blueprint → Key Activities, cost drivers, SLA potřeby,
- provozní realita → operating model (feasibility) + cost structure (viability).

> **Klíčové:** Změna služby téměř vždy mění cost drivers (rework, kontakty, integrace) → BMC je dobrý „radar dopadů“ design rozhodnutí.

---

## 13. Výzvy, omezení a „anti-patterny“ (co umět vyjmenovat)

### 13.1 Organizační bariéry
- silos, konfliktní KPI,
- nejasný ownership,
- stakeholder alignment selhává,
- change fatigue.

### 13.2 Metodická rizika
- bias, nízká validita,
- špatná generalizace,
- korelace ≠ kauzalita,
- falešná jistota z triangulace (mnoho zdrojů ≠ pravda).

### 13.3 Technologická a datová omezení
- legacy, drahá integrace,
- nekonzistentní data,
- bezpečnost/regulace,
- nutnost kompromisů + transparentní komunikace limitů.

### 13.4 Design theatre
- artefakty bez ownera,
- bez metrik/baseline,
- bez napojení na backlog/portfolio,
- „workshop jako substitut rozhodnutí“.

> **Klíčové:** Poznáte to tak, že CJM/blueprint nemají vlastníka a po workshopu se už nikdy nepoužijí.

### 13.5 Etika, inkluze, compliance
- GDPR, privacy/security by design,
- přístupnost,
- dark patterns,
- férovost dopadů (zejména veřejné služby).

> **Klíčové:** Etika má být součást governance (guardrails), ne „poznámka pod čarou“.

---

## 14. Propojení a souvislosti (mapa vztahů napříč kapitolami)

- **Mindset → proces → artefakty → změna → provoz:**  
  human-centered + systémové myšlení → Double Diamond → CJM/Blueprint → ToC + change mgmt → operating model + governance.

- **Evidence-based design jako lepidlo:**  
  výzkum/triangulace → insights → hypotézy → prototyp/pilot → evaluace → continuous improvement.

- **CJM vs. blueprint vs. BPMN/ITSM/EA:**  
  zkušenost → provozní překlad → formální proces/řízení IT/architektura (viz §6.4).

- **Business motivace ↔ metriky ↔ business case:**  
  skryté náklady → volba KPI mixu → ROI/benefit realization (viz §10 a §1.5).

- **Design leadership/management ↔ capability:**  
  leadership dává směr a chrání kvalitu/etiku; management buduje opakovatelnost (standards, ops, governance) (viz §11).

- **BMC ↔ desirability/feasibility/viability:**  
  design rozhodnutí mění partnerské závislosti i cost drivers; BMC strukturuje validaci (viz §2.2 a §12).

> **Klíčové:** U státnic explicitně pojmenujte alespoň 2–3 vazby (např. blueprint → operating model → SLA → metriky → ToC).

---

## 15. Praktická aplikace (typické scénáře + jak postupovat)

### 15.1 Typické use-cases
- Redesign reklamací end-to-end (omnichannel, stavová komunikace, integrace dat).
- Digitalizace podání ve veřejné správě (inkluzivní strategie kanálů).
- Zavedení CRM / změna interní služby (IT self-service, katalog služeb).
- Onboarding zákazníka (identity, SLA, handovery).

### 15.2 Šablona postupu (co říct u státnic)
1. **Vymezit službu + hodnotu + segmenty** (UX/CX, touchpointy, omnichannel; vazba na BMC).  
2. **As-is evidence** (výzkum + data + procesní metriky) → CJM (evidence-backed).  
3. **Root cause** (backstage: pravidla, data, kapacity; 5 Why).  
4. **Blueprint to-be** (handovery, role, SLA, integrace; most k BPMN/ITSM/EA).  
5. **ToC + change plán** (adopce, enablement, governance, RACI).  
6. **Pilot/MVP** (měření leading indikátorů; test ToC).  
7. **Go-live + evaluace** (baseline, KPI mix; contribution/kvazi-experiment).  
8. **Kontinuální zlepšování** (backlog, ownership, aktualizace map).

> **Příklad:** Reklamace: zavedu statusové notifikace (frontstage evidence) + integraci skladu a ticketingu (backstage) + SOP a školení podpory (enablement) + KPI: CES, počet opakovaných kontaktů, lead time reklamace.

---

## Klíčové takeaway pro státnice (rychlé opakování)

- **Definujte čistě:** služba, service design, UX vs CX, touchpoint, frontstage/backstage, operating model, omnichannel, silo efekt.  
- **Proces:** Double Diamond + iterace = řízení nejistoty; framing odděluje symptom vs root cause.  
- **Artefakty:** CJM (zkušenost) ≠ blueprint (provozní překlad) ≠ BPMN (formální proces).  
- **Výzkum:** discovery/validation/evaluation + triangulace + findings vs insights; evidence-backed mapy.  
- **Implementace:** service owner, service standards, SLA/KPI, handshake to operations, continuous improvement.  
- **Změna:** ToC jako most k dopadu; change management řeší adopci (role, readiness, enablement; Kotter/ADKAR/Lewin+Bridges/Agile).  
- **Měření:** baseline, leading/lagging, Goodhart; KPI mix (CX + provoz + adopce + ekonomika).  
- **Strategie:** design leadership vs management; maturity/capability; BMC jako hypotézy a propojení s CJM/blueprintem.
