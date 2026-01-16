---
title: "Konceptuální vs logický model"
subject: "Informační modelování"
subjectSlug: "01-informacni-modelovani"
order: 2
question: "Jaký je rozdíl mezi konceptuálním a logickým datovým modelem? Popište proces transformace konceptuálního modelu na logický a uveďte příklady."
relatedChapters: ["02-pristupy", "03-transformace"]
---

# Očekávaná odpověď

Konceptuální a logický datový model představují dvě různé úrovně abstrakce při modelování dat. Pochopení jejich rozdílů a procesu transformace je zásadní pro úspěšný návrh informačních systémů.

## Konceptuální datový model

**Charakteristiky:**
- Nezávislý na implementaci
- Popisuje "co" systém obsahuje, ne "jak"
- Používá business terminologii
- Slouží ke komunikaci s business stakeholdery

**Typické prvky:**
- Entity (zákazník, objednávka, produkt)
- Vztahy (zákazník zadává objednávku)
- Klíčové atributy
- Business pravidla na vysoké úrovni

## Logický datový model

**Charakteristiky:**
- Detailnější než konceptuální
- Stále nezávislý na konkrétní technologii
- Definuje přesnou strukturu dat
- Určen pro technické týmy

**Typické prvky:**
- Normalizované tabulky
- Všechny atributy včetně datových typů
- Primární a cizí klíče
- Kardinalita vztahů

## Proces transformace

1. **Identifikace entit** → Tabulky
2. **Mapování atributů** → Sloupce s datovými typy
3. **Definice klíčů** → Primární klíče, unikátní klíče
4. **Řešení vztahů**:
   - 1:N → Cizí klíč
   - M:N → Spojovací tabulka
   - 1:1 → Sloučení nebo cizí klíč
5. **Normalizace** → 3NF nebo BCNF

## Příklad transformace

**Konceptuální:** Zákazník zadává mnoho objednávek

**Logický:**
- Tabulka `Customer` (customer_id PK, name, email)
- Tabulka `Order` (order_id PK, customer_id FK, date, total)
- Vztah 1:N realizován cizím klíčem
