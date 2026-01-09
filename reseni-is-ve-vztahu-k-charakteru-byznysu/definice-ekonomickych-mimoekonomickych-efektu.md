# Definice očekávaných ekonomických a mimoekonomických efektů

## Typy efektů

Při obhajobě IT řešení (Business Case) musíme definovat, co nám investice přinese. Rozlišujeme efekty tvrdé (ekonomické) a měkké (mimoekonomické).

## 1. Ekonomické efekty (Hard Benefits)

Jsou kvantifikovatelné, měřitelné v penězích a přímo ovlivňují finanční výkazy (Cash Flow, P&L).

### A. Úspora nákladů (Cost Reduction)
*   **Snížení pracnosti (FTE):** Automatizace rutinních činností (např. automatická fakturace z Timesheetů).
    *   *Metrika:* Počet ušetřených hodin x hodinová sazba.
*   **Úspora infrastruktury:** Přechod do cloudu (vypínání serverů v noci), konsolidace licencí.
*   **Snížení chybovosti:** Chyba ve software stojí peníze (oprava bugu v produkci je 100x dražší než v designu).

### B. Zvýšení výnosů (Revenue Growth)
*   **Zrychlení Time-to-market:** Rychlejší nasazení nového produktu znamená dřívější generování tržeb.
*   **Lepší vytížení zdrojů (Billable Utilization):** Zvýšení % fakturovatelného času konzultantů díky lepšímu plánování (PSA systém). Každé % navíc je čistý zisk.
*   **Snížení Churn Rate:** Udržení zákazníka díky lepšímu CRM/Service Desku.

### C. Metriky hodnocení investic
*   **ROI (Return on Investment):** `(Přínosy - Náklady) / Náklady * 100 %`.
*   **TCO (Total Cost of Ownership):** Celkové náklady na vlastnictví (nejen cena licence, ale i implementace, support, školení, infrastruktura za 3-5 let).
*   **Payback Period (Doba návratnosti):** Kdy se investice zaplatí.

## 2. Mimoekonomické efekty (Soft Benefits)

Jsou kvalitativní, obtížně přepočitatelné na peníze, ale často strategicky důležitější.

### A. Kvalita a Zákaznická zkušenost (CX)
*   **Spokojenost zákazníka (NPS):** Zákazník dostane službu rychleji a kvalitněji.
*   **Transparentnost:** Zákazník vidí stav svého požadavku v portálu.
*   **Reputace a Brand:** Firma, která má moderní procesy, působí profesionálněji.

### B. Zaměstnanecká zkušenost (EX) a Kultura
*   **Retence talentů:** Vývojáři nechtějí pracovat se starými nástroji. Moderní stack (Slack, Jira, CI/CD) je benefit.
*   **Snížení frustrace:** Eliminace "monkey business" (přepisování dat).
*   **Znalostní báze:** Uchování know-how ve firmě i po odchodu experta.

### C. Strategické efekty a Rizika
*   **Compliance:** Snížení rizika pokuty (GDPR) nebo ztráty dat.
*   **Škálovatelnost:** Připravenost na rychlý růst (když přijde velká zakázka, procesy se nezhroutí).
*   **Rozhodování:** Management se rozhoduje na základě dat (Data-driven), ne pocitů.

## 3. Specifické efekty v IT firmě

| Oblast | Efekt | Typ |
| :--- | :--- | :--- |
| **DevOps** | Zkrácení doby nasazení (Deployment Lead Time) z týdnů na minuty. | Ekonomický (úspora času) i Mimoekonomický (agility) |
| **Cloud** | Přechod z CAPEX (investice) na OPEX (provozní náklady). | Ekonomický (Cash flow) |
| **Support** | Zkrácení MTTR (Mean Time To Recovery) - rychlejí opravený výpadek. | Mimoekonomický (důvěra) -> Ekonomický (sankce SLA) |
| **Testing** | Automatizované testy odhalí chyby dříve. | Ekonomický (levnější oprava) |

## 4. Problémy vykazování efektů

*   **Izolace vlivu:** Zvýšil se prodej díky novému CRM, nebo protože se zlepšil trh?
*   **Časový posun:** Náklady jsou hned, přínosy přicházejí postupně.
*   **Subjektivita:** "Zlepšení komunikace" se špatně měří.
*   **Baseline:** Často nevíme, jaký byl stav PŘED změnou, takže nemáme s čím srovnávat.

**Doporučení:** Definujte metriky úspěchu (Success Criteria) ještě PŘED zahájením projektu.
