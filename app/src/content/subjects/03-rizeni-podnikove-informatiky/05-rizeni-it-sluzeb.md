---
title: "Řízení IT služeb (IT Service Management)"
subject: "Rizeni podnikove informatiky"
subjectSlug: "03-rizeni-podnikove-informatiky"
order: 5
---

# Řízení IT služeb (IT Service Management)

Tento dokument shrnuje problematiku řízení ICT služeb, jejich životní cyklus, architekturu, definici a oceňování. Vychází z 1. a 12. kapitoly knihy *Principy a modely řízení podnikové informatiky*.

---

## 1. Definice a podstata ICT služby

Poskytování zdrojů (HW, SW, data) formou služeb je klíčovým trendem v moderním řízení IT.

### Co je to ICT služba?
> **ICT služba** je soubor aktivit a/nebo informací dodávaných poskytovatelem (interním ICT útvarem nebo externí firmou) zákazníkovi, které přinášejí zákazníkovi hodnotu tím, že podporují jeho výsledky bez nutnosti vlastnit specifické náklady a rizika.

**Rozdíl mezi službou a produktem:**
1.  **Nehmotnost**: Službu nelze skladovat.
2.  **Zapojení zákazníka**: Zákazník je často součástí procesu poskytování služby (specifikuje požadavky, účastní se implementace).
3.  **Přenos znalostí**: Se službou se dodává i know-how.
4.  **Obtížná měřitelnost kvality**: Kvalita závisí na vnímání zákazníka a je nutné ji explicitně definovat (SLA).

### Model ICT služeb
Služby tvoří **rozhraní** mezi byznysem a technologiemi.
*   **Byznys (Zákazník)**: Poptává služby pro podporu svých procesů.
*   **ICT Služby**: Abstrakce, která skrývá složitost technologií.
*   **ICT Zdroje a Procesy**: To, co je "pod kapotou" (servery, aplikace, administrátoři).

---

## 2. Životní cyklus ICT služby

Životní cyklus služby zahrnuje fáze od nápadu až po její vyřazení. Metodika MMDIS rozlišuje tyto fáze:

1.  **Plánování a návrh**:
    *   Identifikace potřeby byznysu.
    *   Návrh řešení (interní vs. externí).
    *   Definice SLA a zařazení do katalogu.
2.  **Realizace**:
    *   Vývoj nebo nákup aplikace.
    *   Zajištění infrastruktury.
    *   Nastavení procesů podpory.
3.  **Instalace a aktivace**:
    *   Školení uživatelů.
    *   Nasazení do provozu (Go-live).
4.  **Provoz a dodávka**:
    *   Každodenní provozování.
    *   Monitoring a reporting (plnění SLA).
    *   Řízení incidentů a problémů.
    *   Účtování.
5.  **Údržba a změny**:
    *   Optimalizace, upgrady.
6.  **Ukončení**:
    *   Vyřazení služby, archivace dat.

---

## 3. Katalog a architektura služeb

### Katalog vs. Portfolio
*   **Katalog služeb**: Nabídka pro zákazníky (menu). Obsahuje služby, které si zákazník může objednat.
*   **Portfolio služeb**: Interní seznam všech služeb (včetně těch připravovaných, interních technických služeb a vyřazených).

### Architektura služeb (Granularita)
Jak velké mají služby být?
*   **Jemná granularita**: Služba = jedna funkce (např. "Ověř adresu"). Vhodné pro SOA (Service Oriented Architecture) a automatizaci procesů. Nevýhodou je složitá správa velkého množství služeb.
*   **Hrubá granularita**: Služba = celý modul nebo aplikace (např. "Vedení účetnictví"). Vhodné pro běžné uživatele a snazší správu (méně SLA smluv).

### Varianty strukturace katalogu
1.  **Podle byznys procesů**: Služba "Podpora prodeje". (Ideální pro byznys, ale technicky se překrývá).
2.  **Podle softwaru**: Služba "SAP", "Email". (Srozumitelné technicky, ale nerespektuje procesy).
3.  **Podle uživatelů**: Služba "Pracoviště účetní". (Komplexní balíček pro roli).

---

## 4. SLA (Service Level Agreement)

SLA je klíčový dokument definující parametry služby. Je to dohoda o úrovni poskytované služby.

### Obsah SLA (dle MMDIS)
1.  **Identifikace**: Kdo poskytuje (provider) a kdo odebírá (customer).
2.  **Cíle a efekty**: Proč službu provozujeme (např. zrychlení odbavení zákazníka).
3.  **Obsah**: Co služba dělá (funkcionalita).
4.  **Objem**: Počet uživatelů, transakcí, dat.
5.  **Kvalita**: Parametry jako dostupnost, odezva, podpora.
6.  **Cena**: Kolik služba stojí (paušál + variabilní složka).
7.  **Sankce a bonusy**: Co se stane při neplnění/přeplnění parametrů.

### Klíčové metriky kvality v SLA
*   **Dostupnost (Availability)**: % času, kdy služba funguje (např. 99,9 %). Důležité je i vymezení servisního okna (kdy se může odstavit).
*   **Doba odezvy (Response Time)**: Rychlost reakce systému (např. do 2 sekund).
*   **Reakční doba (Reaction Time)**: Za jak dlouho začne support řešit nahlášený problém.
*   **Doba vyřešení (Resolution Time)**: Maximální čas do opravy chyby.
*   **Spolehlivost (MTBF)**: Střední doba mezi poruchami.

---

## 5. Cenová politika ICT služeb

Jak stanovit cenu služby?

### Cenové modely
1.  **Předplatné (Subscription)**: Fixní platba za období (např. za uživatele/měsíc). Nezávisí na tom, jak moc se služba využívá.
2.  **Podle spotřeby (Pay-as-you-go)**: Platba za skutečně odebrané jednotky (GB dat, CPU time, počet transakcí).
3.  **Kombinované**: Paušál za připravenost + variabilní složka za nadlimitní spotřebu.
4.  **Freemium**: Základ zdarma, pokročilé funkce placené.

### Vnitropodnikové účtování (Chargeback)
Proč účtovat služby interním útvarům?
*   **Regulace poptávky**: Když je služba "zadarmo", uživatelé chtějí všechno. Cena je nutí zvažovat přínos.
*   **Srovnání s trhem**: Umožňuje porovnat interní náklady s nabídkou externích poskytovatelů (outsourcing).
*   **Spravedlivé rozdělení nákladů**: Útvary platí za to, co spotřebují.

---

## 6. Řízení dodavatelského řetězce

Služba je často složena z sub-služeb.
*   **SLA**: Smlouva se zákazníkem.
*   **OLA (Operational Level Agreement)**: Interní dohoda mezi týmy v IT (např. síťaři garantují konektivitu pro aplikační tým).
*   **UC (Underpinning Contract)**: Smlouva s externím dodavatelem (např. poskytovatel internetu, dodavatel HW podpory).

> **Cíl:** SLA musí být pokryto odpovídajícími OLA a UC. Nemohu slíbit zákazníkovi opravu do 4 hodin, když mám s dodavatelem HW smlouvu na opravu do 24 hodin.
