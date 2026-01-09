# Metodiky a řízení projektů pro IT firmu

**Vertikála:** IT firma (softwarový vývoj, systémová integrace, IT služby)

---

## 1. Úvod do metodik

Metodiky, metody a vzory jsou **vždy významnou součástí řízení a řešení projektů** informačních systémů. Výběr vhodné metodiky je klíčovým rozhodnutím, které ovlivňuje úspěšnost celého projektu.

### Klíčové otázky při výběru metodiky

Podle publikace "IT a anatomie firmy" je třeba zvážit:

- Do jaké míry povede daná metodika ke **zvýšení kvality analýzy a výkonnosti týmu**?
- Metodika musí **odpovídat charakteru a typu projektu** (ERP, BI, vývoj na míru)
- Je důležité aplikovat pravidlo **"adapt, do not adopt"** – metodiku přizpůsobit, ne slepě přijmout
- Výběr metodiky by neměl být **dogma**, ale výsledkem diskuse

---

## 2. Přehled metodik pro IT projekty

### 2.1 Agilní metodiky

#### Scrum

**Charakteristika:**
- Iterativní přístup s fixními sprinty (typicky 2 týdny)
- Definované role: Product Owner, Scrum Master, Development Team
- Ceremonie: Sprint Planning, Daily Standup, Sprint Review, Retrospective

**Kdy použít v IT firmě:**
- Vývoj nových produktů s nejasně definovanými požadavky
- Projekty vyžadující rychlou zpětnou vazbu od zákazníka
- Týmy 5-9 vývojářů

**Efekty:**
- Rychlé dodávání hodnoty zákazníkovi
- Flexibilita při změně požadavků
- Transparentnost průběhu projektu

**Problémy:**
- Vyžaduje aktivní zapojení zákazníka (Product Owner)
- Obtížné pro projekty s pevně daným scope a cenou
- Náročné na zkušenost týmu s metodikou

---

#### Kanban

**Charakteristika:**
- Kontinuální tok práce bez fixních iterací
- Vizualizace práce na Kanban boardu
- Omezení work-in-progress (WIP limits)
- Měření lead time a cycle time

**Kdy použít v IT firmě:**
- Údržba a provoz existujících systémů
- Support a helpdesk týmy
- Týmy s nepředvídatelným příchodem požadavků

**Efekty:**
- Optimalizace průtoku práce
- Identifikace úzkých míst v procesu
- Flexibilita bez nutnosti fixních sprintů

**Problémy:**
- Méně strukturovaný než Scrum
- Vyžaduje disciplínu při dodržování WIP limitů
- Obtížnější plánování kapacity

---

#### SAFe (Scaled Agile Framework)

**Charakteristika:**
- Škálování agilních praktik na úrovni podniku
- Program Increment (PI) Planning
- Agile Release Trains (ART)

**Kdy použít v IT firmě:**
- Velké organizace s více agilními týmy
- Komplexní produkty vyžadující koordinaci
- Enterprise projekty

**Efekty:**
- Koordinace velkého počtu týmů
- Strategické plánování na úrovni portfolia
- Standardizace agilních praktik

**Problémy:**
- Vysoká komplexita implementace
- Významná byrokratická zátěž
- Náročné na zavedení a udržení

---

### 2.2 Tradiční (vodopádové) metodiky

#### Waterfall

**Charakteristika:**
- Sekvenční fáze: Analýza → Návrh → Implementace → Testování → Nasazení
- Detailní dokumentace na začátku projektu
- Pevně definovaný scope, čas a rozpočet

**Kdy použít v IT firmě:**
- Projekty s jasně definovanými požadavky
- Regulované prostředí (finance, zdravotnictví)
- Fixní cena projektu s penalizací za změny

**Efekty:**
- Předvídatelnost nákladů a termínů
- Jasná dokumentace pro audity
- Snadné řízení pro nezkušené PM

**Problémy:**
- Nízká flexibilita při změnách
- Pozdní odhalení problémů
- Zákazník vidí výsledek až na konci

---

#### PRINCE2

**Charakteristika:**
- Procesně orientovaná metodika řízení projektů
- Definované role a odpovědnosti
- Řízení výjimkami (management by exception)
- Zaměření na business justification

**Kdy použít v IT firmě:**
- Velké enterprise projekty
- Projekty pro veřejný sektor
- Projekty vyžadující formální governance

**Efekty:**
- Jasná struktura řízení
- Kontrolované prostředí projektu
- Měřitelné business přínosy

**Problémy:**
- Vysoká administrativní zátěž
- Může vést k "paper war"
- Vyžaduje certifikované manažery

---

### 2.3 Hybridní přístupy

#### Water-Scrum-Fall

**Charakteristika:**
- Vodopádové fáze pro analýzu a nasazení
- Agilní vývoj ve střední fázi
- Kombinace výhod obou přístupů

**Kdy použít v IT firmě:**
- Projekty s pevným rozpočtem ale flexibilním scope
- Organizace v přechodu na agilní způsob práce
- Integrace s legacy systémy

---

#### DevOps / SRE

**Charakteristika:**
- Propojení vývoje a provozu
- Continuous Integration / Continuous Deployment
- Infrastructure as Code
- Monitoring a observability

**Kdy použít v IT firmě:**
- SaaS produkty s kontinuálním releasem
- Cloudové aplikace
- Vysoké nároky na dostupnost a spolehlivost

**Efekty:**
- Rychlé dodávání změn do produkce
- Vysoká spolehlivost a stabilita
- Automatizace rutinních úkolů

**Problémy:**
- Vyžaduje investice do toolingu
- Kulturní změna v organizaci
- Náročné na kompetence týmu

---

## 3. Kritéria výběru metodiky

### 3.1 Charakteristiky projektu

| Kritérium | Agilní | Tradiční |
|-----------|--------|----------|
| Jasnost požadavků | Nízká | Vysoká |
| Změnitelnost scope | Vysoká | Nízká |
| Zapojení zákazníka | Kontinuální | Na začátku a konci |
| Velikost týmu | Malý-střední | Libovolná |
| Doba trvání | Kratší | Delší |
| Riziko | Technologické | Business |

### 3.2 Charakteristiky organizace

- **Kultura organizace** – hierarchická vs. plochá struktura
- **Zkušenost týmu** – s konkrétní metodikou
- **Požadavky stakeholderů** – na reporting a governance
- **Regulatorní požadavky** – certifikace, audity

### 3.3 Charakteristiky zákazníka

- **Dostupnost zákazníka** – pro pravidelné review
- **Technická gramotnost** – schopnost definovat požadavky
- **Typ kontraktu** – time & material vs. fixed price

---

## 4. Argumentace výběru pro IT projekty

### 4.1 Vývoj nového SaaS produktu

**Doporučená metodika:** Scrum + DevOps

**Argumentace:**
- Nejasné požadavky vyžadují iterativní přístup
- Potřeba rychlé zpětné vazby od uživatelů
- Kontinuální release vyžaduje CI/CD praktiky
- Flexibilita při pivotu produktu

---

### 4.2 Implementace ERP systému

**Doporučená metodika:** Hybridní (PRINCE2 pro governance + Scrum pro implementaci)

**Argumentace:**
- Významná investice vyžaduje formální řízení
- Typový software má definovanou funkcionalitu
- Customizace může být řešena agilně
- Potřeba business justification (PRINCE2)

---

### 4.3 Údržba a rozvoj legacy systému

**Doporučená metodika:** Kanban

**Argumentace:**
- Nepředvídatelný příchod požadavků (bugfixy, změny)
- Potřeba rychlé reakce na incidenty
- Kontinuální tok práce bez sprintů
- Vizualizace backlogu a WIP

---

### 4.4 Systémová integrace

**Doporučená metodika:** Waterfall s agilními prvky

**Argumentace:**
- Pevně definované rozhraní mezi systémy
- Potřeba detailní technické specifikace
- Koordinace s více stranami (vendor management)
- Testování vyžaduje kompletní end-to-end prostředí

---

## 5. Metodiky pro specifické oblasti IT

### 5.1 Řízení IT služeb

**ITIL (Information Technology Infrastructure Library)**
- Nejlepší praktiky pro IT service management
- Procesy: Incident, Problem, Change, Release Management
- Service Level Management (SLA, SLO, SLI)

### 5.2 Vývoj software

**BUCHALCEVOVÁ, A.: Metodiky vývoje a údržby informačních systémů**
- Referenční metodika pro český kontext
- Integrace s českými normami a standardy

### 5.3 Řízení kvality

**ISO/IEC 25010** (kvalita software)
- Funkční vhodnost, spolehlivost, výkonnost
- Bezpečnost, udržovatelnost, přenositelnost

---

## 6. Hlavní doporučení

> **Znalost metodik, metod a technik analýzy je základní výbavou analytika, ale jejich použití by nemělo znamenat omezení invence a iniciativy příslušných analytiků.**

### Klíčové principy

1. **Adapt, do not adopt** – metodiku přizpůsobte kontextu
2. **Metodika není dogma** – diskutujte a upravujte
3. **Referenční modely** – využívejte zkušenosti z minulých projektů
4. **Komunikace** – metodika musí být pochopena všemi stakeholdery
5. **Měření** – sledujte efektivitu zvolené metodiky

### Varování před problémy

- Přílišné lpění na metodice může vést k **"paper war"**
- Projektový manažer musí rozumět **byznysu, nejen metodice**
- Metodika dodavatele bývá vázána na **konkrétní produkt**

---

## Zdroj

Zpracováno na základě publikace:
> NOVOTNÝ, O., POUR, J., STANOVSKÁ, I.: **IT a anatomie firmy - principy**, kapitola 3.8

> BUCHALCEVOVÁ, A.: **Metodiky vývoje a údržby informačních systémů**, Praha, Grada 2005
