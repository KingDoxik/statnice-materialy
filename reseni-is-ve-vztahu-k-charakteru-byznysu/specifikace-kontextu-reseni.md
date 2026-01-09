# Specifikace potřebného kontextu řešení

## Princip kontextu

Žádné IT řešení neexistuje ve vakuu. Analytik musí vnímat firmu jako živý organismus, kde změna jedné části (např. nasazení nového CRM) ovlivní části ostatní (obchod, marketing, finance, IT support).
**Kontext** znamená pochopení vazeb a souvislostí v rámci **Anatomie firmy** i mimo ni.

## 1. Interní kontext (Vazby uvnitř IT firmy)

IT firma má svá specifika v toku hodnoty. Typický řetězec je: **Marketing -> Prodej -> Delivery (Vývoj/Implementace) -> Support -> Fakturace**.

### Vazby mezi oblastmi řízení:

*   **Obchod <-> Delivery:** Kritická vazba.
    *   *Riziko:* Obchodník prodá "modré z nebe" (Vaporware) s nereálným termínem, Delivery tým to nestihne nebo dodá nekvalitně.
    *   *Požadavek:* Presales proces – technici musí validovat nabídky před podpisem.

*   **Delivery <-> HR:**
    *   *Vazba:* Projekty potřebují lidi. HR musí vědět, jaké technologie se prodávají, aby nabíralo správné profily.
    *   *Nástroj:* Resource Planning (plánování kapacit).

*   **Delivery <-> Finance:**
    *   *Vazba:* Vykazování práce (Timesheety) je podkladem pro fakturaci.
    *   *Problém:* Pokud vývojáři nevykazují včas a přesně, firma má špatné cash-flow.

*   **Dev <-> Ops (DevOps):**
    *   *Vazba:* Vývojáři píší kód, Operations jej provozují.
    *   *Cíl:* Odstranit bariéru "It works on my machine". Sdílená odpovědnost za běh aplikace.

## 2. Externí kontext (Vazby na okolí)

IT firma je silně propojena se svým ekosystémem.

### A. Technologičtí partneři (Vendoři)
Vztah s Microsoft, AWS, Google, Oracle, SAP atd.
*   **Vliv:** Změna licenční politiky vendora může zničit marži IT firmy. Ukončení podpory produktu (EOL) vynucuje upgrady u zákazníků.
*   **Kontext:** Nutnost udržovat partnerské úrovně (Gold/Platinum), certifikace zaměstnanců.

### B. Zákazníci a jejich prostředí
IT firma se stává součástí procesů zákazníka.
*   **Integrace:** Naše systémy se musí napojit na ERP/CRM zákazníka.
*   **Bezpečnost:** Musíme splňovat bezpečnostní standardy zákazníka (např. banky mají velmi přísné požadavky na dodavatele).
*   **Kultura:** Agilní dodavatel vs. konzervativní korporátní zákazník – střet kultur (kontext metodiky).

### C. Legislativa a Regulace
*   **GDPR:** IT firma zpracovává data klientů – je v roli zpracovatele. Musí mít DPA (Data Processing Agreements).
*   **Pracovní právo:** Specifika zaměstnávání IT specialistů (Švarcsystém, autorská práva k dílu).

### D. Trh práce (Freelanceři, Bodyshop)
*   IT firmy si často navzájem půjčují kapacity (Bodyshopping).
*   Kontext: Nutnost řídit externisty stejně bezpečně a kvalitně jako kmenové zaměstnance.

## 3. Komponenty anatomie firmy a jejich kontext

Při řešení úlohy musíme zohlednit všechny komponenty anatomie:

1.  **Úlohy a Procesy:** Jaké činnosti se mění?
2.  **Lidé a Role:** Kdo to bude dělat? Má na to kvalifikaci?
3.  **Informace a Data:** Máme potřebná data? Jsou kvalitní?
4.  **Aplikace a Technologie:** Podporuje to stávající SW?
5.  **Infrastruktura:** Máme na to servery/cloud kapacitu?
6.  **Legislativa/Normy:** Je to legální? (např. ukládání dat mimo EU).

## 4. Příklad: Kontext nasazení AI do Service Desku

Chceme nasadit AI Chatbota pro automatizaci supportu.
*   **Procesní kontext:** Změní se práce support operátorů (budou řešit jen složité případy).
*   **Datový kontext:** Chatbot se musí naučit z historie ticketů (jsou data čistá?).
*   **Technologický kontext:** Integrace s Jira Service Desk a Slackem.
*   **HR kontext:** Možná budeme potřebovat méně L1 supportů, ale více AI trenérů.
*   **Zákaznický kontext:** Budou zákazníci ochotni mluvit s robotem? (User Experience).
