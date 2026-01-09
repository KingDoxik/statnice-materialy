# Určení vhodné metodiky či metody pro řešení projektu/úlohy

## Kontext: IT firma

IT firmy jsou specifické tím, že metodiky nejen používají pro své řízení, ale často je i prodávají nebo implementují u zákazníků. Volba správné metodiky je kritická pro efektivitu ("Time-to-market") a kvalitu dodávek.

**Základní pravidlo:** Metodika je dobrý sluha, ale zlý pán. Vždy platí princip **"Adapt, do not adopt"** (přizpůsob, nepřebírej slepě).

## 1. Kategorizace metodik

V prostředí IT firmy rozlišujeme tři základní roviny metodik, které se vzájemně prolínají:

### A. Metodiky řízení projektů (Project Management)
Zaměřují se na řízení času, nákladů, rozsahu a rizik.

*   **PRINCE2 (Projects IN Controlled Environments):**
    *   *Charakteristika:* Procesně orientovaná, formální, silný důraz na zdůvodnění projektu (Business Case) a definované role.
    *   *Vhodné pro:* Velké, komplexní projekty, státní správu, korporátní klienty, fix-price kontrakty.
    *   *Výhoda v IT:* Jasné řízení změn a odpovědnosti.

*   **PMBOK (Project Management Body of Knowledge):**
    *   *Charakteristika:* Soubor standardů a best practices (není to metodika v pravém slova smyslu, ale standard).
    *   *Vhodné pro:* Univerzální použití, certifikace PMP je v IT vysoce ceněná.

### B. Metodiky vývoje software (Software Development Lifecycle - SDLC)
Zaměřují se na technickou realizaci a organizaci vývojového týmu.

*   **Agilní metodiky (Scrum, Kanban):**
    *   *Charakteristika:* Iterativní vývoj, flexibilita, časté dodávky, těsná spolupráce se zákazníkem.
    *   *Vhodné pro:* Vývoj produktů, projekty s nejasným zadáním, startupy, Time-and-Material kontrakty.
    *   *Výhoda v IT:* Rychlá zpětná vazba, snížení rizika vyvinutí nepotřebného softwaru.

*   **Vodopád (Waterfall):**
    *   *Charakteristika:* Sekvenční fáze (Analýza -> Návrh -> Vývoj -> Test -> Nasazení).
    *   *Vhodné pro:* Projekty s jasně definovaným a neměnným zadáním, regulatorní projekty, kritické systémy (kde chyba stojí životy/obrovské peníze).

*   **DevOps:**
    *   *Charakteristika:* Propojení vývoje (Dev) a provozu (Ops). Důraz na automatizaci, CI/CD, monitoring.
    *   *Vhodné pro:* SaaS produkty, cloudová řešení, kontinuální vývoj.

### C. Metodiky řízení IT služeb a Governance
Zaměřují se na provoz, kvalitu služeb a strategické řízení.

*   **ITIL (Information Technology Infrastructure Library):**
    *   *Charakteristika:* De facto standard pro ITSM. Procesy jako Incident Mgmt, Change Mgmt, Service Desk.
    *   *Vhodné pro:* Řízení supportu, infrastruktury, SLA kontraktů.

*   **COBIT:**
    *   *Charakteristika:* Rámec pro IT Governance, řízení rizik a compliance. Propojuje IT cíle s byznys cíli.
    *   *Vhodné pro:* Audity, strategické řízení IT, zajištění souladu s předpisy.

## 2. Kritéria pro výběr metodiky

Analytik nebo projektový manažer musí zvolit metodiku na základě následujících faktorů:

1.  **Typ kontraktu:**
    *   *Fix-price (Pevná cena):* Tlačí spíše k Waterfallu nebo PRINCE2 (nutnost definovat rozsah předem).
    *   *Time & Material:* Ideální pro Agile/Scrum.

2.  **Kultura zákazníka:**
    *   Je zákazník schopen agilní spolupráce (má Product Ownera)? Pokud ne, čistý Agile selže.
    *   Vyžaduje zákazník formální dokumentaci a schvalování? (Korporát, Banka) -> PRINCE2/Waterfall prvky.

3.  **Povaha projektu:**
    *   *Výzkum/Inovace:* Agile.
    *   *Migrace databáze/Rollout HW:* Waterfall (sekvenční kroky).
    *   *Support/Údržba:* Kanban, ITIL.

4.  **Velikost týmu a lokace:**
    *   Malý kolokovaný tým -> Scrum.
    *   Velký distribuovaný tým -> SAFe (Scaled Agile Framework) nebo formalizovanější přístupy.

## 3. Hybridní přístupy ("Water-Scrum-Fall")

V praxi IT firem je nejčastější kombinace metodik:
*   **Projektová vrstva (Vůči managementu/zákazníkovi):** PRINCE2 (fáze, reporty, budget, rizika).
*   **Vývojová vrstva (Uvnitř týmu):** Scrum (sprinty, daily standupy, backlog).

## 4. Referenční modely a vzory

Při návrhu řešení se nezačíná "na zelené louce", ale využívají se:
*   **Referenční modely odvětví:** (např. eTOM pro telekomunikace, BIAN pro bankovnictví).
*   **Design Patterns (Návrhové vzory):** Ověřená řešení technických problémů (např. Microservices, MVC).
*   **Best Practices vendorů:** SAP Best Practices, Microsoft Cloud Adoption Framework.

Použití referenčních modelů zrychluje analýzu a snižuje riziko chyb ("nevyvíjet znovu kolo").
