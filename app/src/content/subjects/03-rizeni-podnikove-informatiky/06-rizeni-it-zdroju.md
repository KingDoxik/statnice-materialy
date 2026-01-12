---
title: "Řízení ICT zdrojů a konfigurací"
subject: "Rizeni podnikove informatiky"
subjectSlug: "03-rizeni-podnikove-informatiky"
order: 6
---

# Řízení ICT zdrojů a konfigurací

Tento dokument se zabývá správou hardwaru, softwaru, dat a infrastruktury. Vychází z 1. a 10. kapitoly knihy *Principy a modely řízení podnikové informatiky*.

---

## 1. Definice a struktura ICT zdrojů

**ICT zdroje** jsou všechny komponenty nezbytné pro vybudování a provoz informačního systému. Člení se do čtyř základních kategorií:

1.  **Hardware**: Fyzická zařízení (servery, PC, síťové prvky, úložiště).
2.  **Software**: Programové vybavení (OS, databáze, aplikační servery, aplikace).
3.  **Data**: Informační aktiva (databáze, dokumenty, multimédia).
4.  **Lidé**: Pracovníci (administrátoři, vývojáři, uživatelé).

> **Technologická infrastruktura** je podmnožina zdrojů (HW + systémový SW + sítě), která tvoří "podvozek" pro provoz podnikových aplikací.

---

## 2. Konfigurační řízení (Configuration Management)

Cílem konfiguračního řízení je mít dokonalý přehled o tom, **co** v IT máme, **kde** to je a **jak** to spolu souvisí.

### Konfigurační položka (CI - Configuration Item)
Základní jednotka evidence. CI může být:
*   Fyzický server.
*   Instalovaná softwarová instance.
*   Smlouva (SLA).
*   Dokumentace.

### CMDB (Configuration Management Database)
Databáze, která eviduje všechny CI a především **vztahy** mezi nimi.
*   **Příklad vztahu**: *Aplikace X* běží na *Serveru Y*, využívá *Databázi Z* a je garantována *Smlouvou S*.

**Význam CMDB:** Bez CMDB nelze efektivně řídit změny (nevím, co způsobí vypnutí serveru) ani řešit incidenty (nevím, co všechno postihl výpadek).

---

## 3. Procesy řízení zdrojů

Řízení zdrojů zahrnuje tři hlavní okruhy činností:

### A. Analýza stavu a řízení kvality
Pravidelné zjišťování, zda zdroje vyhovují potřebám.
*   **Sledování výkonnosti**: Stačí kapacita serverů? Je síť dost rychlá?
*   **Metriky**: Dostupnost (%), Využití kapacity (%), Počet incidentů na zařízení.

### B. Řízení obnovy a rozvoje (Life Cycle)
Každý zdroj má svůj životní cyklus:
1.  **Plánování**: Potřebujeme nový server?
2.  **Výběr a pořízení**: Nákup, instalace.
3.  **Provoz a údržba**: Patchování, opravy.
4.  **Upgrade**: Rozšíření paměti, nová verze SW.
5.  **Vyřazení (Decommissioning)**: Bezpečná likvidace, skartace dat.

### C. Standardizace
Snaha o snížení rozmanitosti používaných technologií.
*   **Výhody**: Nižší náklady na správu (administrátoři umí jeden systém dokonale), hromadné nákupy, snazší integrace.
*   **Příklady**: "Všichni mají Windows 10 a Office 2019", "Servery kupujeme jen od Dellu".

---

## 4. Řízení datových zdrojů

Data jsou specifickým, vysoce hodnotným zdrojem.

### Kvalita dat
Data musí být kvalitní, jinak jsou k ničemu ("Garbage in, Garbage out").
**Dimenze kvality dat:**
1.  **Přesnost**: Odpovídají realitě?
2.  **Úplnost**: Nechybí údaje?
3.  **Konzistence**: Jsou stejná data ve všech systémech stejná?
4.  **Aktuálnost**: Jsou data čerstvá?
5.  **Dostupnost**: Dostane se k nim ten, kdo je potřebuje?

### Master Data Management (MDM)
Řízení kmenových (master) dat. Kmenová data jsou klíčové číselníky (Zákazníci, Produkty, Zaměstnanci), které se používají napříč mnoha systémy.
*   **Cíl MDM**: Mít "jednu verzi pravdy". Aby zákazník "Novák" byl v účetnictví i v CRM ten samý "Novák" se stejnou adresou.

---

## 5. Metriky řízení zdrojů

Co měříme, abychom věděli, zda zdroje řídíme dobře?

*   **Počet softwarových licencí**: Platíme jen za to, co používáme? (Software Asset Management).
*   **Využití kapacity**: Nejsou servery vytížené jen na 5 %? (Virtualizace pomáhá).
*   **Stáří techniky**: Jaká část PC je starší 5 let?
*   **Počet nelegálních instalací**: Riziko postihu.
*   **Dostupnost infrastruktury**: Uptime klíčových prvků.

---

## Shrnutí

Řízení ICT zdrojů není jen o "údržbě železa", ale o:
1.  Znalosti toho, co vlastníme (**CMDB**).
2.  Efektivním nákupu a obnově (**Životní cyklus**).
3.  Zajištění, aby data byla použitelná (**Data Quality**).
4.  Standardizaci prostředí pro snížení nákladů a rizik.
