---
title: "Service blueprint a překlad do provozu (BPM/ITSM)"
subject: "Design sluzeb"
subjectSlug: "05-design-sluzeb"
order: 5
question: "Vysvětlete service blueprint (vrstvy, line of visibility) a ukažte, jak z něj uděláte most k BPMN/ITSM/enterprise architektuře. Kdy je blueprint dostačující a kdy musí následovat formální procesní modelování?"
relatedChapters: ["Design služeb (mindset, proces, nástroje a metody)"]
---## Co je service blueprint
Blueprint překládá customer journey do **provozní reality** a typicky obsahuje vrstvy:
- zákaznické akce
- frontstage aktivity (zaměstnanci/systémy)
- backstage aktivity
- podpůrné procesy
- technologie/data

Klíčový prvek: **line of visibility** (co zákazník vidí vs. nevidí).

## Co blueprint odhaluje
- bottlenecky, čekání, handovery
- závislosti na systémech a datech
- místa rizik (compliance, bezpečnost)
- nesoulad mezi „slibem služby“ a provozem

## Blueprint jako „most“
### K BPMN (procesní řízení)
- blueprint odpovídá: „co musí nastat end-to-end“
- BPMN odpovídá: „jak přesně proces běží včetně větvení, výjimek, auditovatelnosti“
- typický postup: z to-be blueprintu vybrat kritické backstage části a převést je do BPMN/workflow specifikace.

### K ITSM (ITIL/ITSM)
- blueprint pomáhá zmapovat:
  - incidenty a opakované service requesty
  - SLA/OLA a eskalační cesty
  - změny v katalogu služeb
  - dopady na support (1st/2nd line)

### K enterprise architektuře (EA)
- blueprint dává kontext pro:
  - business capabilities
  - aplikační služby a integrace
  - sdílené datové entity
  - architektonická rozhodnutí a governance

## Kdy blueprint stačí
- pro sjednocení porozumění a identifikaci hlavních závislostí
- pro rozhodnutí o směru (trade-offy, priority)
- pro první plán implementace a backlog

## Kdy je nutná formalizace (BPMN apod.)
- regulované procesy (audit, compliance)
- složité větvení a výjimky
- automatizace workflow
- potřeba jednoznačné specifikace rolí a rozhodovacích bran

## Příklad
Telekomunikace slibuje okamžitou aktivaci tarifu.
Blueprint odhalí dávkové zpracování 1× denně v legacy systému.
Rozhodnutí:
- změnit slib/komunikaci (frontstage)
- nebo investovat do integrace (backstage) a upravit SLA/operating model.

## Co zkouší zkoušející
- schopnost vysvětlit rozdíl účelu blueprintu vs. BPMN
- schopnost napojit návrh na ITSM/EA a provozní řízení.
