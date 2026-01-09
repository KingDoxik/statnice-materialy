# Návrh vhodných typů aplikací pro realizaci řešení

## Kontext: IT firma

V IT firmě musíme rozlišovat dvě skupiny aplikací:
1.  **Aplikace pro vlastní řízení firmy (Backoffice):** Aby firma fungovala ekonomicky a procesně.
2.  **Aplikace pro produkci (Production/Engineering):** Nástroje, kterými se vytváří hodnota pro zákazníka.

## 1. Typy aplikací podle charakteru úloh

### A. Evidenční a Transakční aplikace (Core Systems)
Zajišťují sběr dat a realizaci procesů.

*   **ERP (Enterprise Resource Planning):**
    *   *Role v IT firmě:* "Páteř" pro finance, účetnictví, majetek a mzdy.
    *   *Specifikum:* Musí umět pracovat s projektovým účetnictvím (náklady a výnosy na projekt).
    *   *Příklady:* SAP S/4HANA, NetSuite, Helios, ABRA.

*   **PSA (Professional Services Automation):**
    *   *Role v IT firmě:* Klíčový systém pro IT služby. Je to "ERP pro služby".
    *   *Funkce:* Řízení projektů, Resource Management (plánování lidí), Time Tracking (vykazování práce), Fakturace služeb, Projektová profitabilita.
    *   *Příklady:* Jira (s pluginy Tempo/BigPicture), Mavenlink, Scoro.

*   **CRM (Customer Relationship Management):**
    *   *Role v IT firmě:* Řízení obchodního procesu (Pipeline), evidence kontaktů, marketing.
    *   *Specifikum:* Integrace s Outlookem/Gmailem, sledování komunikace.
    *   *Příklady:* Salesforce, HubSpot, MS Dynamics 365.

*   **HRIS (Human Resources Information System):**
    *   *Role v IT firmě:* Evidence zaměstnanců, nábor (ATS), hodnocení, vzdělávání.
    *   *Příklady:* Workday, BambooHR.

### B. Produkční a Vývojové nástroje (Dev Stack)
Specifické pro IT vertikálu. Zde tráví zaměstnanci 80 % času.

*   **Issue Tracking & Project Management:**
    *   *Funkce:* Řízení úkolů, bugů, backlogu, sprintů.
    *   *Příklady:* **Jira**, Asana, Trello, Azure DevOps.

*   **Knowledge Management & Dokumentace:**
    *   *Funkce:* Wiki, technická dokumentace, zápisy z porad.
    *   *Příklady:* **Confluence**, Notion, SharePoint.

*   **Version Control & CI/CD (DevOps):**
    *   *Funkce:* Správa zdrojového kódu, automatizace buildů a nasazení.
    *   *Příklady:* **GitHub**, GitLab, Bitbucket, Jenkins.

*   **Monitoring & Observability:**
    *   *Funkce:* Dohled nad běžícími systémy a službami.
    *   *Příklady:* Datadog, Splunk, Prometheus, Grafana, New Relic.

*   **ITSM / Service Desk:**
    *   *Funkce:* Ticketing systém pro hlášení incidentů od zákazníků.
    *   *Příklady:* Jira Service Management, ServiceNow, Freshdesk.

### C. Analytické a Plánovací aplikace (BI & CPM)
Nadstavba nad transakčními systémy pro podporu rozhodování.

*   **BI (Business Intelligence):**
    *   *Funkce:* Vizualizace dat, dashboardy.
    *   *Typické reporty IT firmy:* Utilizace (využití) konzultantů, Marže projektů, Churn rate, Burn-down charty.
    *   *Příklady:* Power BI, Tableau, Looker.

*   **CPM (Corporate Performance Management):**
    *   *Funkce:* Finanční plánování, budgety, konsolidace.

## 2. Kritéria pro výběr aplikací (Best-of-Breed vs. All-in-One)

*   **Best-of-Breed (Skládačka):**
    *   Vybírám nejlepší nástroj pro každou oblast (Salesforce na CRM + Jira na projekty + Xero na účetnictví).
    *   *Výhoda:* Špičková funkcionalita v každé oblasti, milují to uživatelé.
    *   *Nevýhoda:* "Integration Hell" – nutnost složitě propojovat data.

*   **All-in-One (Platforma):**
    *   Jeden velký systém (např. SAP nebo Dynamics 365), který dělá všechno.
    *   *Výhoda:* Integrovaná data, jeden dodavatel.
    *   *Nevýhoda:* Často průměrná funkcionalita v dílčích oblastech, drahé, robustní.

**Trend v IT firmách:** Spíše **Best-of-Breed** integrovaný přes moderní API nebo integrační platformy (Zapier, Make). Vývojáři chtějí používat specifické nástroje (Git, Jira), nechtějí pracovat v účetním ERP.

## 3. Cloud vs. On-premise

V IT sektoru jednoznačně vítězí **Cloud (SaaS)**.
*   *Důvody:* Rychlost nasazení, podpora remote work, škálovatelnost, odpadá údržba HW.
*   *Výjimky:* Extrémní bezpečnostní požadavky (např. práce pro armádu/vládu), kde musí být data "doma".
