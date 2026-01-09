Autoři by rádi touto cestou poděkovali za pomoc a diskuse při přípravě jednotlivých
částí textu těmto kolegům a spolupracovníkům:

	Ing. Václav Baron, Uniwise, a.s.
	Ing. Václav Derfler, ITS, a.s.
	prof. Ing. Jan Dohnal, CSc.
	Petr Franc, MSc., MBA
	Ing. Jan Halama, AVAST, a.s.
	Ing. Martin Hladík, MBA, Ph.D., KPMG.
	Ing. Miloslav Kopecký, ČD Cargo.
	Ing. Miloslav Peterka, Solitea, a.s.
	Ing. Lumír Srch, ITS, a.s.
	Ing. Oleg Svatoš, KIT VŠE.
	Ing. Jiří Snítil, JSN s.r.o.
	Ing. Vlado Štefaňák, MIBCON NDC, a.s.
	prof. Ing. Jiří Voříšek, CSc. KIT VŠE Praha, Universita Auto Škoda.
	Ing. Tomáš Vrzák, Enehano, a.s.

      a našemu kamarádovi Honzovi.

1. Úvodní poznámky

Současné informační systémy a informační technologie nabízejí obrovskou škálu mož-
ností,  funkcí,  využití,  ale  také  mnoho  problémů  a  nedostatků,  které  původní  záměry
a očekávané přínosy někdy degradují a přinášejí svým uživatelům spíše rozpaky. Tyto
stavy  a  výsledky  vyvolávají  otázky,  kde  je  podstata  a  příčina  takových  omezení.  Ty
mohou  a  často  jsou  hodně  různorodé  od  chyb  v  řízení  IT  a  projektů,  přes  problémy
v technologiích až po kvalitu analýzy a návrhu informačních systémů a jejich aplikací.

Smyslem  tohoto  textu  není  v  žádném  případě  negovat  nebo  zpochybňovat  posuny
a úspěchy, které je možné v informatice běžně sledovat a ve své podstatě i obdivovat.
Text  se  snaží  alespoň  v  omezené  míře  přispět  k  dalšímu  rozvoji  v  práci  informatiků,
případně  i  uživatelů,  a  to  zejména  v  oblasti  analýzy  a  návrhu  informačních  systémů
v podnikové praxi. Zkušenosti autorů textu z praxe totiž ukazují, že jedním z klíčových
problémů je často úroveň pochopení obsahu a potřeb byznysu ze strany analytiků,
tedy  znalost  obsahu  firmy  a  jejího  řízení.  Pro  objektivizaci  pohledu  na  tento  problém
a problémy analýzy vůbec oslovili autoři řadu špičkových analytiků (byznys analytiků,
byznys konzultantů) z české praxe a na základě připomínek a diskusí zformulovali hlav-
ní  problémy,  spojené  s  řešením  podnikových  informačních  systémů.  Výsledek  těchto
diskusí je obsahem kapitoly 3 tohoto textu a je současně jedním z hlavních východisek
pro formulaci pojetí tzv. „anatomie firmy“.

Problematika analytického pochopení a prezentace obsahu řízení firem je natolik roz-
sáhlá a komplikovaná, že vložit ji do jedné publikace by znamenalo několik set, spíše
tisíců stran a bylo by to pro čtenáře i autory značně neracionální. Proto byla autory kon-
cipovaná a postupně připravovaná řada textů, jejichž obsah a návaznosti dokumentuje
Obrázek 1‑1, představující postup od obecného ke konkrétnímu, a to:

	IT a anatomie firmy I – principy, vymezující hlavní principy analýzy, obsahující
náplň práce analytika a požadavky na jeho znalosti, důvody pro anatomii firmy,
vymezení podstatných komponent řízení firmy a jejich souvislostí atd.

	IT a anatomie firmy II – obsah, poskytující relativně detailní pohled na obsah
podle  jednotlivých  oblastí  řízení  firmy  na  základě  komponent  řízení,  definova-
ných v textu I – principy.

	IT a anatomie firmy III – odvětví, konkretizující obsah řízení firem podle několi-
ka typů nebo odvětví, s konkretizací obsahu oblastí řízení, definovaných v textu
II – obsah promítnutím specifik daného odvětví a doplněním těch oblastí řízení,
které jsou pro dané odvětví zcela speciální, jako např. „Technická příprava výro-
by“ pro firmu podnikající ve strojírenství.

Cílem tohoto textu je na základě zmíněných vstupů prezentovat analýzu při řešení pod-
nikových informačních systémů primárně jako řešení obsahu projektů, resp. obsahu
řízení a fungování firmy. Znalosti takového zaměření budeme nadále označovat jako
„analytická znalost obsahu“. K jejímu opodstatnění se vrátíme v dalších kapitolách.
Vyjádření analytických znalostí podnikového obsahu je pak v našem případě prezen-

11

továno  pracovním  termínem  „anatomie  firmy“,  resp.  „IT  a  anatomie  firmy“.  K  jeho
vysvětlení a odůvodnění se rovněž vrátíme následně. Jak vyplývá z názvu textu i z dal-
ších poznámek, díváme se na anatomii firmy ve vztahu k IT, a to zejména ve vztahu
k řízení IT.

Obrázek 1‑1: Struktura a návaznosti textů věnovaných IT a anatomii firmy

Text je určen pro studenty IT i ekonomických oborů VŠ, zejména pro ty, kteří směřují
do  pozic  byznys  nebo  IT  analytiků  a  projektových  manažerů.  Vzhledem  k  tomu,  že
i práce vývojářů je velmi často spojena s nezbytným rozsahem analýzy, lze ho využít
v přiměřené míře i pro tyto profese.

Obrázek 1‑2: Struktura textu „IT a anatomie firmy I – principy“

12

Ze struktury textu vyplývá, že poslední kapitola části A je věnována již principům ana-
tomie firmy. Její součástí je i vymezení jednotlivých typů úloh, kterým jsou s ohledem
na rozsah věnovány zvláštní kapitoly v části B publikace. Část C se věnuje řízení IT
z pohledu jejich vztahů k byznysu. To ukazuje Obrázek 1‑2:

Poznámky:

Informace, které jsou uvedeny v tomto textu, vycházejí většinou ze stránek portálu MBI,
který se využívá na VŠE. V obrázcích, které jsou zde použity, se proto můžeme setkat
s logem tohoto portálu, případně i s identifikačními kódy, které se na tomto portálu po-
užívají. Portál je na adrese https://mbi.vse.cz, je však momentálně z bezpečnostních
důvodů  přístupný  uživatelům,  využívajícím  pouze  doménu  vse.cz.  Za  to  se  autoři
textu čtenářům mimo VŠE omlouvají.

V textu jsou použity termíny „podnik“ i „firma“ ve stejném nebo obdobném smyslu. Vy-
užíváme je podle obvyklých použití v praxi.

13

Část A:
IT a anatomie firmy – hlavní principy

Část A je zaměřena na vytvoření východiska pro formulaci anatomie firmy, tj. vyhodno-
cení její potřeby z pohledu problémů a nároků analýzy při řešení informačních systémů,
jaké hlavní principy by její formulace měla respektovat. Má odpovědět na tyto otázky:

1)  Jaké je místo a potřeba analýzy v řešení informačních systémů?

2)  Jak lze rozlišit analýzu a analytiku, resp. byznys analytiku?

3)  Jaké jsou aktuální problémy analýzy?

4)  Co se zde rozumí analytickou znalostí obsahu firmy a jak se liší od manažerské znalosti?

5)  Jaká je potřeba, důvody a základní principy řešení anatomie firmy?

14

2. Analýza, analytika, analytik

 S termíny „analýza“ a „analytika“ se lze setkávat poměrně často a časté
a různé jsou také jejich výklady. Od toho se pak odvíjí chápání pozice a ná-
plň práce analytika, resp. byznys analytika. Účelem kapitoly je alespoň pra-
covně pro potřeby dalších kapitol vymezit a rozlišit oba termíny a součas-
ně charakterizovat pozici analytika při řešení informačního systému a jeho
vztahů k zákazníkovi, resp. uživateli.

Termíny „analýza“ a „analytika“ se váží jak k řešení informačních systémů, tak k podni-
kovému řízení. Budeme je chápat následujícím způsobem.

2.1 Analýza – principy, obsah

Termín „analýza“ (angl. „analysis“) se váže zejména k jednotlivým etapám řešení in-
formačního systému, resp. projektu, který je s využitím IT spojen a které dokumentuje
Obrázek 2‑1.

Obrázek 2‑1: Analytické činnosti v etapách řešení projektu

Podrobná náplň jednotlivých etap je k dispozici v publikaci (Bruckner a další, 2012). Je
nezbytné zdůraznit, že analýza má v těchto různých etapách různý obsah i význam.
Navíc každá z uvedených etap zahrnuje nejen analytické, ale i další organizační, ško-

15

licí, technické a další činnosti, na kterých se analytik musí rovněž podílet. Obrázek 2‑1
zdůrazňuje pouze ty hlavní, analytické. Pokud se podíváme v souhrnu na postup ře-
šení, pak podstata analýzy zde spočívá v těchto činnostech:

	zjišťování a identifikace problémů a požadavků zákazníka a jejich nezbytná

dokumentace,

	vyhodnocení problémů a požadavků zákazníka vzhledem:

o  k cílům a celkové koncepci fungování a rozvoje firmy,
o  k podstatě problémů a požadavků z pohledu jejich řešitelnosti a k před-

pokládaným nárokům na řešení (ekonomickým i pracovním),

o  k  podstatným  souvislostem  a  vazbám  v  rámci  řízení  firmy  (procesům,

organizaci, personálním zdrojům),

	konsolidace problémů a požadavků mezi jejich nositeli, resp. autory, tj. mezi

vlastníky, manažery a klíčovými pracovníky firmy,

	verifikace problémů a požadavků v rámci diskusí s vedením firmy a jednotli-

vými specialisty,

	návrhy na řešení obsahu problémů a požadavků:

o  nově nastavenými firemními procesy,
o  úpravami organizace firmy,
o  plánovaným rozvojem kvalifikace pracovníků firmy,
o  specifikovanou novou funkcionalitou IT aplikací a nástrojů,

	verifikace navrhovaných řešení, obvykle na bázi pilotních aplikací,

	kooperace na realizaci navrhovaných řešení, customizací typového software

nebo vývojem nových aplikací.

Jde v tomto případě o zobecnění obvyklých analytických činností, ale vesměs lze kon-
statovat, že uvedené činnosti s respektováním podmínek konkrétního prostředí se musí
v různém rozsahu realizovat. To samozřejmě ovlivní i přístupy k řešení projektů (vodo-
pádové / iterativní, rigorózní / agilní), ale i tak je podstata stále stejná a liší se převážně
jejich uspořádáním a organizací.

2.2 Analytika – principy, obsah

Termín „analýza“ se tak v našem kontextu váže k řešení informačních systémů v rám-
ci projektů a jejich částí, etap, úloh. Na druhé straně „analytika“ (angl. „analytics“) se
obvykle váže k analytickým a plánovacím úlohám v rámci řízení firmy. Proto se s ní pojí
termíny jako „podniková analytika“, „business analytika“, „datová analytika“, „po-
kročilá analytika“ a pak jejich jednotlivé specifické části jako „business intelligence“,
„self service business intelligence“, „competitive intelligence“, nebo „prediktivní analyti-
ka“, „data science“ atd. Tedy, zatímco analýza se zde chápe jako součást řešení infor-
mačního systému, analytika jako součást řízení firmy.

16

Činnosti spojené s analytikou, resp. podnikovou analytikou, lze podle uplatnění členit
následovně:

	analytika podle oblastí řízení, tj. finanční analytika, analytika prodeje, nákupu,

majetku apod., ale i analytika pro řízení podnikového IT,

	analytika podle odvětví, např. v IT firmách, výrobních firmách, v maloobchodě,

stavebnictví, veřejné správě atd.

Podle analytických operací s daty lze vymezit následující skupiny:

	analytika  podnikových  ukazatelů  (metrik)  podle  vymezených  analytických  di-
menzí představuje zejména „business intelligence“, „self service business inte-
lligence“,

	analytika časového vývoje metrik označovaná jako „time intelligence“,

	pokročilá analytika zahrnující obvykle tyto formy:

o  „data mining“,
o  „text mining“
o  „process mining“,
o  „prediktivní analytiku“,
o  „data science“ a případně další.

Obdobně lze členit i plánovací úlohy, které se s podnikovou analytikou úzce váží.

Poznámka:  I  při  návrhu,  vývoji  a  implementaci  podnikové  analytiky  probíhá  analýza
problémů a potřeb a tedy vše, co je v tomto textu s obsahem firmy a kompetencemi
analytiků také spojeno.

2.3 Role analytika

„Analytik“, jak naznačila už předchozí podkapitola, se může objevovat v nejrůznějších
rolích podle toho, v jakých oblastech působí. Lze se tedy setkat s rolí „byznys analyti-
ka“ nebo „IT analytika“, někdy se používá pro takové působení i termín „konzultant“.
Většinou přitom jde o specialisty zaměřené na analýzu a návrh informačních systémů
(podkapitola 2.1) a podnikových SW aplikací, tedy na zajišťování činností, popsaných
v uvedené podkapitole.

Na druhé straně jsou běžně používané role jako „podnikový analytik“, „finanční ana-
lytik“, „marketingový analytik“ apod. spojené s „analytikou“, resp. „podnikovou analy-
tikou“ (podkapitola 2.2).

Na tomto místě se zaměříme výlučně na roli analytika (resp. byznys analytika) při
řešení  informačního  systému.  Předmětem  zájmu  nyní  bude  jeho  pozice  ve  vztahu
k  zákazníkovi,  resp.  uživateli  informačních  systémů,  a  to  zejména  z  toho  pohledu,
co zákazník od analytika očekává, nebo může očekávat. Analytik může být součástí
vlastního IT útvaru firmy, je tedy interní, nebo týmu dodavatele projektu, tedy externí.

17

Předpokládejme tedy činnosti uvedené v podkapitole 2.1 a můžeme rozlišit následu-
jící krajní situace:

	zákazník má jasnou představu a nároky na řešení, má jasně formulované pro-
blémy  a  požadavky,  zhodnocené  podle  potřeb  firmy  a  pak  už  „jen“  vyžaduje
jejich přesné a úplné plnění,

	zákazník má pouze rámcovou představu o řešení projektu, rámcově formulo-
vané problémy a očekává, že analytik nejen, že rozumí obsahu byznysu zákaz-
níka, ale je schopen formulovat (i na bázi IT) efektivní návrhy řešení jeho problé-
mů, resp. problémů firmy.

Samozřejmě  existuje  mnoho  „mezivariant“,  které  odpovídají  konkrétním  podmínkám
dané  firmy  a  jednotlivým  manažerům  nebo  uživatelům.  Je  třeba  zdůraznit,  že  těchto
mezivariant je v praxi naprostá většina. V každé variantě je ale podstatná znalost ob-
sahu byznysu na straně analytika, v druhé krajní variantě je ale tato potřeba výrazně
vyšší. Znalost tohoto typu tedy označujeme jako „analytickou znalost obsahu“ řízení
firmy.

 Z kapitoly vyplývají následující hlavní závěry:

	Zatímco termín „analýza“ se obvykle vztahuje k řešení informačního
systému a projektů v jejich jednotlivých etapách, termín „analytika“
se váže k podnikovému řízení a specificky k jeho analytickým a plá-
novacím úlohám.

	„Analytik“ pak vystupuje jak v roli „byznys analytika“, nebo „IT ana-
lytika“ při řešení informačního systému a na druhé straně „podniko-
vého analytika“ pro řešení analytických a plánovacích úloh v řízení
podniku.

18

3. Otázky a problémy analýzy

 Pozice analytika je v personálním zajištění informačních systémů většinou
klíčová. Primárně se budeme zabývat prací byznys analytika, jak jsme ho
vymezili v kapitole 2.

Práce byznys analytika není často přesně vymezena a s tím pak souvisejí
i nejasnosti spojené s nároky na jeho úkoly, znalosti, schopnosti a doved-
nosti.  To  pak  vyvolává  řadu  problémů,  někdy  i  konfliktů,  ať  už  ve  vztahu
k  zákazníkovi,  nebo  uvnitř  analytického,  resp.  řešitelského  či  servisního
týmu. Účelem kapitoly je identifikovat obvyklé problémy v práci byznys ana-
lytiků, analyzovat jejich důvody a formulovat alespoň základní doporučení
pro jejich řešení.

V dalším textu se snažíme problémy i doporučení doplnit příběhy z reálné
praxe.

Povaha výše uvedených problémů je úzce spojena s praxí, resp. s praktickou realiza-
cí analytických činností. Proto autoři při přípravě kapitoly oslovili špičkové analytiky
z české IT praxe, kteří oponenturou dokumentů připravených autory textu, případně
v rámci různých diskusí se podělili o své zkušenosti. Dále prezentované problémy a do-
poručení tedy odpovídají vesměs aktuální realitě a potřebám informatických projektů.
V rámci přípravy byla vybrána pouze některá hlavní témata, která se pak stala i nápl-
ní jednotlivých debat, úvah a návrhů. Zahrnují:

a) způsob kooperace mezi analytikem a zákazníkem, resp. uživatelem, realizace pra-

covních schůzek, jejich přípravy i průběhu,

b) úrovně a principy komunikace mezi analytikem a zákazníkem,

c) prezentace  nabídek,  návrhů,  řešení,  např.  v  rámci  výběrových  řízení,  vstupních

jednání se zákazníkem, jednání v rámci projektových milníků apod.,

d) otázky zaměřené na cílové efekty řešení projektů,

e) otázky  a  problémy  spojené  s  analytickými  materiály  jako  součástí  projektových

dokumentů nebo speciálních analytických studií,

f)  problémy analýzy ve vztahu k IT ve smyslu pochopení a vyhodnocení možností,
zejména omezení disponibilních produktů informačních technologií a s nimi spoje-
ných služeb,

g) problematika řízení projektů, která je po stránce organizační a personální v kon-

krétních podmínkách zatížena řadou otevřených otázek a problémů,

h) využití projektových metodik, metod, referenčních modelů, vzorů, jejich možnosti

a rizika,

i)  přístupy k procesnímu modelování, procesnímu reegineeringu, procesnímu řízení

a jejich využití v praxi,

19

j)  genetický kód organizace jako zakonzervovaná pravidla ve fungování firmy, které

analytik musí brát nutně v úvahu,

k) problémy spojené se znalostí či neznalostí podnikového obsahu.

Další text kapitoly nemá charakter metodiky nebo uceleného návodu na řešení analytic-
kých prací, ale jde pouze o přehled reálných praktických problémů a na ně navazu-
jících doporučení. Je nutné připustit, že na uvedená témata mohou být v teorii i v praxi
různé názory autorů, verifikované a doplněné zmíněnou skupinou expertů. Současně
připouštíme, že mnohdy jde o otázky a problémy zcela banální, ale i ty se v praxi čas-
to vyskytují a přiznejme i velmi často, a mají na řešení projektů velmi negativní, někdy
zásadní dopad. Proto i takové „banality“ rovněž do dalších podkapitol zařazujeme.

3.1 Problémy kooperace analytika se zákazníkem

Celé spektrum problémů se ukazuje ve způsobu komunikace a spolupráce se zá-
kazníkem.  Zaměříme  se  v  tomto  případě  na  přípravu  a  průběh  pracovních  schůzek
směřujících ke specifikaci a hodnocení potřeb firmy a zadání projektu, schůzek k dílčím
řešením, k verifikaci návrhů apod. Vycházíme z předpokladu, že se na problémy a do-
poručení budeme dívat z pohledu externího analytika.

3.1.1  Příprava pracovní schůzky

Přípravu pracovní schůzky má obvykle na starosti manažer projektu dodavatele, vedou-
cí analytického týmu, případně pověřený analytik. V této situaci je dobré brát v úvahu
následující problémy a možná doporučení:

	Před termínem schůzky je účelné poslat druhé straně, tj. představiteli zákazníka

i dalším pracovníkům firmy, agendu jednání, tedy:

o  program  jednání  s  uvedením  času,  místa,  jednotlivých  bodů  jednání,
předpokládané doby trvání schůzky (vytvářet program na místě je výra-
zem velké neprofesionality),

o  podkladové materiály k prostudování na straně zákazníka, pokud to si-

tuace vyžaduje,

o  složení analytického týmu, který se jednání účastní.

	Před jednáním je nezbytné, aby na jednání přišli analytici maximálně připravení

a prostudovali dostupné materiály a dokumenty zákazníka, a to:

o  interní  dokumenty,  dříve  poskytnuté  zákazníkem  za  přesně  dohodnu-
tých  podmínek  (většinou  jsou  poskytovány  na  základě  oboustranně  po-
depsaného NDA, dohody o utajování skutečností, proto je vhodné podpis
této dohody zajistit předem, tedy před první žádostí o poskytnutí interních
materiálů zákazníka),

o  volně dostupné informační zdroje, např. v obchodním rejstříku, na in-
ternetu, v časopisech apod., které se k zákazníkovi a problematice řešení
jeho systému / projektu váží.

20

	Zejména v případech, kdy jde o schůzku k řešení konkrétních problémů v projek-
tu, je účelné, aby si analytici připravili sadu klíčových analytických otázek ve
vztahu k tématu:

o  první a někdy i jediná vstupní otázka analytika „Co potřebujete?“ vyvolá
dojem nepřipravenosti, nebo jeho slabé znalosti řešeného problému,

o  možným zdrojem pro výchozí formulaci otázek mohou být tzv. „Scénáře“,

ke kterým se vrátíme v dalším textu,

o  analytické otázky je pak nutné konkretizovat a vázat věcně k dostupným

materiálům, případně k výsledkům minulých jednání.

	Interview  nebo  pracovní  schůzka  jsou  pouze  jednou  z  metod  byznys  analýzy

a vždy je nutné komunikovat s adekvátními zástupci zákazníka, tj.:

o  s dostatečnou rozhodovací pravomocí vzhledem k danému problému

nebo části řešeného projektu,

o  s odpovídající znalostí analyzované byznys oblasti, ideální jsou často pra-
covníci zákazníka se znalostí firmy jako celku, se znalostí jejího dosa-
vadního vývoje a rozvoje a se strategickým uvažováním.

	Podle  úrovně  a  pozice  zákazníka  je  vhodné  volit  i  adekvátní  oděv  analytika,

resp. celého analytického týmu:

o  jinak se analytik v tomto smyslu připraví na jednání s manažery společ-

nosti a jinak na jednání v dílně (což se často nerespektuje…).

	Pokud  se  jednání  zúčastní  za  analytický  tým  víc  než  jeden  člen  týmu,  pak  je
nezbytné v rámci přípravy zcela jasně určit role jednotlivých členů, zejména:

o  kdo bude diskusi řídit; řídit musí pouze jeden – tím se samozřejmě ne-

myslí omezování názorů ostatních členů týmů,

o  kdo bude připravovat protokol z jednání schůzky a bude zajišťovat jeho

další administraci.

3.1.2  Průběh a závěry pracovní schůzky

Průběh a závěry pracovní schůzky by měly brát v úvahu následující doporučení:

	V  průběhu  jednání  a  následně  po  něm  je  nezbytné  připravit  zápis,  resp.  pro-

tokol:

o  měl by být standardizovaný tak, aby na stejném místě byla stále stejná

témata,

o  protokol  je  účelné  nechat  schválit  a  potvrdit  zákazníkem  (často  až  při
čtení protokolu se ukáže, že podstatu jednání a jeho závěry druhá strana
nepochopila nebo interpretuje sdělení jinak, než bylo míněno).

21

	Již v průběhu jednání, ale zejména na závěr je třeba formulovat pracovní závě-

ry schůzky, v rámci toho je třeba určit:

o  úkoly na další období pro obě strany,
o  termíny plnění úkolů,
o  případně obsah a formu předpokládaných výsledků,
o  zodpovědné strany a pracovníci za plnění úkolů,
o  je‑li to možné, tak i termín další schůzky.

	V případě potřeby je nezbytné projevit potřebnou dávku empatie, pokud se jed-

na ze stran projeví příliš agresivně:

o  často tím pouze dává najevo svůj strach z nového, nebo neznalost,
o  v některých případech se analytik může setkat s tvrzením zákazníka, že
předložené  návrhy  jsou  „jen  taková  teorie“,  což  většinou  představuje
„krycí manévr“ tam, kde návrhy přinášejí nároky na pořádek, změny, nebo
vyšší pracovní zatížení uživatelů. Jediné doporučení je nereagovat…

	Je třeba brát v úvahu i rozdíly v komunikaci:

o  on‑premise, tedy osobní schůzce se zákazníkem se obvykle dává před-

nost, osobní kontakt má vždy mnoho výhod,

o  jiná možnost je komunikace „remote“, ať už prostřednictvím videokonfe-

rence nebo telekonference,

o  řešení jakýchkoli problémů nebo konfliktů je obecně jednodušší v osob-
ním kontaktu; i přes veškeré výhody možných on‑line konferencí je zřej-
mě dobré preferovat alespoň někdy v průběhu projektu možnost osobní
schůzky. V případě „remote“ komunikace je vhodné alespoň na začátku
schůzky  mít  zapnuté  kamery  a  určitě  mít  u  svého  účtu  aktuální  osobní
fotografii, aby druhá strana alespoň trochu tušila, s kým hovoří.

 Příběh 1:

Probíhalo  řešení  jedné  z  částí  relativně  většího  projektu  ve  společnosti  působí-
cí  v  telekomunikacích.  Řešení  se  uskutečňovalo  v  kooperaci  několika  interních
a našich, tj. externích analytiků, a to především na jednotlivých pracovních schůz-
kách. Bylo poněkud překvapující, že interní tým vždy doslova „přiběhl“ na schůzku
z jiné předcházející pracovní schůzky, aby v průběhu jednání bedlivě sledoval čas
a mohl včas „doběhnout“ na následující schůzku. Bylo zřejmé, že pracovní dobu
tak trávil přesuny ze schůzky na schůzku. V  dané situaci už bylo méně překva-
pující,  že  přesnější  agenda  schůzek,  připravené  podklady,  průběžné  zpracování
protokolů  atd.  byly  více  či  méně  neznámou  věcí  a  přinejmenším  „přítěží“…    Na
otázku, kdy pracují, byla odpověď „Večer nebo v noci“. Na zaslaný protokol ani na
třetí prosbu o revizi nikdo nereagoval.

Závěr:  Analytické  schůzky  se  mnohdy,  ne  vždy  oprávněně,  považují  za  jádro
a hlavní formu samotného řešení. Jediné, co z toho plyne, je počet schůzek omezit
a věnovat čas spíše jejich kvalitní přípravě a následnému zpracování.

22

 Hlavní doporučení:

	Analytik musí udržet vzhledem k zákazníkovi v průběhu celé komunikace
a kooperace vysokou profesionalitu, a to při přípravě, v dokumentaci, při
řízení úkolů i vzhledem k odpovídající společenské úrovni.

	Je  velmi  nutné  zachovávat  vůči  zákazníkovi  potřebný  respekt  k  jeho
názorům, znalostem i zkušenostem. Každý má svou specializaci a dávat
najevo,  že  „kdo  zná  SQL  nebo  Javu…  je  něco  víc“,  k  dobré  kooperaci
nevede.

3.2 Úrovně a principy komunikace

Komunikace ohledně požadovaných dílčích funkcionalit systémů bývá u rozsáhlejších
projektů vícestupňová, např. takto:

a)  komunikace mezi uživatelem (vybranými zástupci zákazníka) a analytikem zá-

kazníka,

b)  komunikace mezi analytikem zákazníka a analytikem dodavatele,

c)  komunikace mezi analytikem a programátorem,

d)  komunikace mezi programátorem a správcem programových komponent a da-

tabáze.

Zákazník  je  zde  někdo,  kdo  věcně  definuje  problém  nebo  požadavek,  jehož  řešení
obvykle  přináší  celkový  přínos;  je  většinou  sponzorem  projektu.  Je  proto  nutné  vždy
hodnotit celkový přínos projektu. Lze zdůraznit následující doporučení:

	Komunikace na základní úrovni ad a):

o  vhodnou formou komunikace je textový zápis (např. dokumenty Word),
o  analytické  nástroje  a  technologie  se  postupně  přidávají  v  dalších  kro-

cích,

o  pokud  je  uživatel  „nucen“  používat  sofistikované  analytické  nástroje
hned zpočátku, pak to může být důvod, že se spolupráci na projektu vy-
hýbá, a to i zkušený uživatel s věcnou znalostí řešené problematiky, což
je samozřejmě zcela zbytečná ztráta.

	Mezi jednotlivými úrovněmi obvykle probíhá transformace problému a poža-
davku do „vyšší“ formy, a zároveň se může postupně přidávat definování vlivu
na okolí, které bude projektem, respektive jeho řešením zasaženo.

	Slučování (kumulace) komunikačních vrstev:

o  u jednodušších projektů by mělo být sloučení maximálně mezi dvěma

sousedními úrovněmi,

o  není zpravidla žádoucí, aby např. programátor na úrovni c) komunikoval
s  koncovým  uživatelem  ad  a),  každý  z  nich  popisuje  stejnou  věc  jinými
komunikačními prostředky,

23

o  u  menších  projektů  jsou  ale  situace,  kdy  uživatel  komunikuje  přímo
s analytikem zpracovatele, tj. slučuje se a) a b), případně role analytika
a programátora zpracovatele je sloučena do role „analytik-vývojář“,

o  do posuzování „hotové“ funkcionality by měl být koncový uživatel za-
pojen co nejdříve a musí mu být podaná ve srozumitelné formě (stovkám
use case „obrázků“ bez popisu většinou nerozumí nebo po pár stránkách
dokumentu přestane vnímat detaily a raději analýzu odsouhlasí, než by
studoval další desítky stran).

	Projektový manažer:

o  musí hlídat v tomto kontextu (mimo jiné) termíny a kvalitu komunikace
(adekvátnost,  srozumitelnost,  podrobnost,  vzájemné  porozumění),  a  to
i mezi jednotlivými úrovněmi komunikace,

o  musí řešit i problém, kdy ambiciózní analytik zákazníka si „navymýšlí“
spoustu funkcionalit a zkomplikuje projekt tak, že koncový uživatel se už
v něm ztrácí, a nakonec ho odmítá jako celek.

 Příběh 2:

Menší  firma,  působící  ve  finančním  poradenství,  se  rozhodla  zcela  inovovat
svůj informační systém v dané době založený na několika oddělených aplika-
cích,  provozovaných  na  spíše  „příručních“  databázích.  Měla  se  vytvořit  kon-
cepce a návrh nového systému jako podklad pro poptávkový dokument. Pro-
blém  byl  v  tomto  případě  v  tom,  že  přidělenou  styčnou  osobou  pro  přípravu
takového návrhu a dokumentu byl jediný, a tedy i vedoucí pracovník tamějšího
IT útvaru a současně i vývojář a provozovatel zmíněných aplikací. Do jisté míry
jeho další postoj k řešení byl pochopitelný, ty aplikace představovaly evidentně
podstatnou část jeho života a nemínil se s nimi rozloučit. Bylo až neuvěřitelné,
jaké překážky pro nové řešení si dokázal tento vzácný muž vymyslet. Až i ve-
dení firmy uznalo obtížnost situace a do přípravy tendru se vložilo samo.

Závěr: Většina úloh v oblasti analýzy má své příznivce a odpůrce, což je dáno
jejich osobními zájmy a někdy i zkušenostmi. Je-li v zájmu firmy a jejího vedení
skutečné řešení problémů, pak je třeba odpůrce citlivě odfiltrovat.

 Hlavní doporučení:

	Je podstatné stále sledovat a ověřovat si, aby v rámci jednotlivých kroků

byla forma komunikace naprosto srozumitelná pro obě strany.

	Velmi vhodné je analýzu doplnit byznys slovníkem s vysvětlením hlavních

pojmů, které používá zákazník, a zároveň jsou využity v projektu.

3.3 Prezentace nabídek, návrhů, řešení

Prezentace analytika zákazníkovi je další specifickou oblastí, kde je dobré si připo-
menout některé osvědčené přístupy, které mohou mít výrazný vliv na úspěch dalšího
řešení a na dobré (nejlépe přátelské) vztahy obou stran. Zahrnuje např. prezentace na-

24

bídek v rámci tendrů, návrhů koncepcí řešení, dílčích nebo finálních řešení, představení
pilotních řešení apod. Shrňme si některá užitečná pravidla:

	Před prezentací:

o  je vysoce efektivní, pokud to lze, zjistit si složení účastníků, poslucha-
čů, zda jde převážně o manažery, uživatelskou sféru, nebo vedení a spe-
cialisty z interních IT útvarů,

o  pokud je to možné a schůdné, je dobré alespoň rámcově zjistit očekává-

ní na zákaznické straně,

o  je  pak  velmi  účelné  respektovat  složení  účastníků,  jejich  znalosti,
představy,  zájmy,  priority,  např.  pro  management  firmy  minimalizovat
informace  o  používaných  technologiích,  ale  naopak  se  věnovat  byznys
obsahu řešení a předpokládaným byznys efektům.

	V případě úvodních prezentací, zejména v rámci výběrových řízení:

o  doporučuje se přiměřeně omezit upozorňování na obchodní úspěchy
vlastní firmy, tzv. „strmé křivky“ – grafy dokumentující „obrovský“ nárůst
projektů, počtu zákazníků dodavatele apod. Pokud zákazník v rámci pre-
zentací vidí takové úspěchy od různých firem několikrát po sobě, začne
ztrácet trpělivost a pozornost a může mu uniknout podstata nabízeného
řešení. Pokud je třeba prezentovat úspěchy dodavatele, je účelné nechat
je na závěr nebo v příloze prezentace,

o  při větších výběrových řízeních je podstatný výběr prezentujícího týmu,
vedle představitele dodavatele musí být přítomni i specialisté podle typu
řešení, případně i zástupci kooperujících firem,

o  pokud je tak stanoveno, je nezbytné přesně dodržovat určené časové
termíny, případně i odzkoušet průběh prezentace, aby byl dostatečný ča-
sový prostor na klíčové části řešení (oproti okrajovým informacím),

o  je  vhodné  předem  zjistit,  jaká  prezentační  technika  bude  k  dispozici
včetně typu připojení, aby většina času vymezeného na prezentaci neby-
la spotřebována např. zprovozňováním projektoru ve spojení s notebooky
prezentujících.

	Při prezentacích navrhovaných řešení se doporučuje:

o  při předpokládané znalosti složení účastníků prezentace ze strany zákaz-
níka  je  účelné  prezentovat  navrhovaná  řešení  s  respektováním  jejich
priorit, tedy očima zákazníků, při prezentaci je tak dobré „vžít se do my-
šlení druhé strany….“,

o  podle složení zástupců zákazníka a typu projektu formulovat potenciál-

ní ekonomické i mimoekonomické efekty řešení (viz dále),

o  při vyšší dislokaci byznys jednotek zákazníka zařadit zástupce disloko-

vaných jednotek (závodů, obchodních poboček apod.),

25

o  v případě posuzování pilotních řešení je představit, pokud možno, na
datech  zákazníka,  nebo  alespoň  obdobných,  nikoli  obecných  vlastních
příkladech, které s byznysem zákazníka nemají moc společného.

 Příběh 3:

Jedna z velkých strojírenských firem se rozhodla připravit a vypsat výběro-
vé řízení na dodavatele komplexního informačního systému. Jak to bývá,
součástí  byla  prezentace  dodavatelů,  jejich  řešení,  produktů  a  případně
i subdodavatelů. Jedním z požadavků zadávající firmy bylo představení ná-
vrhu a realizace jednoho z hlavních procesů firmy ve strojírenství, aby se
dokumentovala kompetence dodavatele ve strojírenském průmyslu.

V rámci svých prezentací takových procesů zástupci dodavatelů (byli cel-
kem  4)  dokazovali  své  kompetence  s  využitím  příslušných  prezentačních
nástrojů (obvykle PowerPoint), s procesy respektujícími všechny významné
standardy (BPMN apod.), s využitím moderních modelovacích technik a ná-
strojů (Architect apod.). Problém byl v tom, že diváci těchto představení byli
vesměs vedoucí výroby, výrobní dispečeři, technici, plánovači. Již po dru-
hém, natož pak třetím takovém představení bylo zcela zřejmé, že účastníci
se naprosto nudí, přímo je předváděné návrhy otravují, a nakonec to dávali
i znát.

Čtvrtý dodavatel situaci zcela změnil. Nastoupil postarší muž, jehož oblek
už asi pamatoval i lepší časy. Ten nejprve vypnul dataprojektor, pak smazal
v koutě tabuli a začal vybraný proces postupně malovat křídou. Bez stan-
dardů, bez PowerPointu, ale s obrázky, které se jevily jako výmluvné (stroje,
lidé atd.), se znalostí strojírenské věci a s aktivitou, vedoucí postupně k vzá-
jemné a velmi čilé debatě v celém sále. Úspěch byl zaručen a zakázka pro
dodavatele také.

Závěr: Zmíněné standardy a nástroje mají svůj nepopíratelný význam a pří-
nos. Tady však byly použity na nepravém místě a v nepravou dobu. Vždy
bychom ale měli respektovat to, že prezentujeme pro konkrétní lidi, a ti mo-
hou mít své představy, znalosti i očekávání.

 Hlavní doporučení:

	Je  dobré  prezentovat  nabídky,  řešení  a  produkty  zejména  z  pohledu
zákazníka, nikoli pohledem dodavatele – pro zákazníka mohou být vý-
znamné úplně jiné aspekty řešení, než jak se na ně dívá analytik – do-
davatel.

3.4 Otázky efektů řešení

Jak jsme zmínili v předchozí podkapitole, je dobré při prezentacích nabídek nebo plá-
novaných projektů se, kromě jiného, orientovat na ekonomické i mimoekonomické
efekty,  které  má  řešení  zákazníkovi  přinést.  Zákazníka  –  manažera  logicky  ani  tak
nezajímá na jakém serveru nebo databázi aplikace poběží, ale především to, co mu

26

v ekonomice, obchodu, výrobě přinese, když už do ní musí investovat nemalé pení-
ze a čas. Pro formulaci těchto částí prezentací nebo jednání se doporučuje zvážit tyto
principy:

	někdy se zaměňuje prezentace funkcionality a efektů. Rozdíl je zjednoduše-
ně v tom, že funkcionalita říká, „co aplikace dělá“ a prezentace efektů „co přináší,
jaký prospěch zákazníkovi“,

	to  samozřejmě  neznamená,  že  charakteristika  funkcionality  má  menší  vý-
znam, je rovněž potřebná, touto poznámkou se jen snažíme upozornit, že speci-
fikace funkcí ještě neříká, „co skutečně aplikace přináší“,

	specifikace efektů je dobré členit na ekonomické, obvykle i vyčíslitelné (např.
„zvýšení tržeb o“, „snížení nákladů na“ apod.) a mimoekonomické, které se vy-
číslují obtížněji, ale často mají větší strategický význam (např. „zvýšení celkové
úrovně kooperace včetně komunikace s obchodními partnery“, „zvýšení kvalifi-
kace a spokojenosti pracovníků firmy“),

	další pohled na strukturu efektů je přes oblasti řízení, které aplikace pokrývá,

např. finance, prodej, nákup, sklady atd.,

	je  velmi  účelné,  když  efekty  reflektují  poznané  problémy  zákazníka,  pokud

k takovému poznání již došlo,

	je rovněž efektivní, když lze formulované efekty podpořit zkušenostmi z minu-

lých projektů, pokud je to možné a takové zkušenosti existují.

 Příběh 4:

Formulace očekávaných a sledování skutečných efektů řešených projektů
je někdy trochu neobvyklá, ale pro daný byznys zásadní. Ve firmě, orien-
tované na mediální byznys, probíhalo jednání k vyhodnocení ukončeného
projektu a již provozovaných aplikací z oblasti podnikové analytiky, zejména
business  intelligence.  Probíraly  se  zkušenosti  z  řešení  i  provozní  otázky
aplikací, spolupráce s dodavatelem a další. V průběhu diskuse vznesl jeden
z účastníků dotaz, jaké efekty řešení přineslo a jak byly vyčísleny. Odpovědi
se ujal přímo generální manažer společnosti, evidentně muž se značnými
zkušenostmi z dané sféry byznysu. Jeho odpověď byla jasná: „Víte, to, jestli
ušetřím dvě účetní a spočítám příslušné úspory, to mě tady nezajímá. Pod-
statné pro mě je, že když do byznys analytiky investovat nebudu a konku-
rence ano, pak za chvíli na tom trhu nebudu existovat“. Již jsme zdůraznili,
že šlo o zkušeného manažera….

Závěr: Efekty mohou být pro firmy významné a dokonce nejvýznamnější,
i když nejsou vypočítány přesně na tři desetinná místa… Spíše záleží na
očekávání i zkušenostech vedení firmy a jeho představách, čeho chce po-
mocí IT reálně dosáhnout.

27

 Hlavní doporučení:

	Byť je otázka očekávaných efektů z pohledu analytika dodavatele mnoh-
dy minoritní, má pro zákazníka (zejména vlastníky a manažery) klíčový
význam. Pro kvalifikovanou formulaci takových efektů je předpokladem
alespoň přiměřená znalost byznysu zákazníka a jeho problémů.

3.5 Analytické materiály

Analytickými  materiály  můžeme  chápat  analytické  části  projektů,  nebo  specifické
analytické  studie.  I  v  tomto  případě  je  dobré  upozornit  na  některé  otevřené  otázky
a problémy, byť se budou vázat nebo částečně překrývat s podkapitolou prezentací:

	Informativní části analytických materiálů by měly obsahovat:

o  na začátku materiálu by měl být jasně vymezen jeho účel a určení, co má
řešit, pro koho a jak a kde se mají jeho výsledky využít. V řadě případů
není totiž pak jasné, jaký je důvod jeho zařazení do celého projektu nebo
jiného komplexního dokumentu či studie,

o  je účelné poměrně jasně specifikovat zdroje řešení, např. podkladové
podnikové dokumenty, dokumenty veřejného nebo obecného charakteru
apod.,

o  součástí  je  rekapitulace  pracovních  schůzek,  jejichž  výsledky  jsou
do  analytického  materiálu  promítnuty,  případně  i  s  odkazy  na  protokoly
z těchto schůzek, účastníky schůzek a doby jejich konání,

o  nezapomenout na terminologický slovník (jak bylo uvedeno v předcho-

zí podkapitole).

	V souvislosti s vlastní analytickou náplní materiálu je dobré upozornit na tyto

aspekty:

o  při zpracování významných částí, zaměřených na určitou část řešeného
objektu nebo problému, by mělo být zařazeno vlastní hodnocení stavu
nebo situace, tedy, co je dobře a co špatně. Lze se setkat s dokumenty,
např. při analýze organizace podniku, že je popsána až do neúměrných
detailů,  ale  co  z  toho  pro  řešení  nebo  čtenáře  vyplývá,  nebo  co  se  má
řešit, není jasné,

o  každá dílčí, logicky uzavřená část dokumentu by měla obsahovat pracov-
ní analytické závěry, tedy nikoli shrnutí toho, co bylo předtím napsáno,
ale toho, co z předchozího textu vyplývá pro další nebo celkové řešení,

o  popisným částem se analytické materiály asi nevyhnou, ale měly by mít
spíše rekapitulační, stručný charakter. Zařadit např. popisy funkčních
míst z podnikové dokumentace je zcela zbytečné, to si zákazník může ve
vlastních dokumentech přečíst také…

28

 Příběh 5:

Problémem analytických materiálů může být, kromě výše uvedených, i jejich
otevřenost, případně uplatněná taktika. Ve firmě, vystupující jako význam-
ný dodavatel energií, byl náš analytický tým pověřen jejím managementem
zpracováním analytické studie k problémům řízení, výkonnosti firmy, úrov-
ně podnikových procesů apod. Když problémy, tak problémy, a studie jich
nakonec obsahovala podstatně víc než pozitivních zjištění. Problém se na-
konec ukázal jako prozaický, přesto velmi významný. Firma měla vlastníka,
který se o studii začal velmi intenzivně zajímat a je jasné, že to nemohlo
vést k pochvalám a prémiím. Problémy se nakonec „objektivně“ vysvětlily,
ale hlavní důvod byl v nekompetentnosti našeho týmu. Dejme tomu, ale to
už bylo v daném prostředí očekávatelné….

Závěr: Analytické materiály musí mít svou kvalitu, ale je tu i jistá etika. Ta
říká, že je dobré si ujasnit, co zákazník od studie očekává. Pokud to má být
něco „bez ohledu na skutečnost“, pak je lépe do toho nejít….

 Hlavní doporučení:

	Analytické materiály by měly být skutečně analytické, nikoli popisné
nebo „opisné“, tedy hlavní náplní by mělo být hodnocení stavu, situ-
ací, zdrojů, procesů, problémů, požadavků a potřeb firmy s příslušnými
analytickými závěry.

3.6 Otázky analýzy ve vztahu k IT

Charakter projektů informačních systémů je značně rozmanitý a nelze zde reálně všech-
ny podstatné aspekty jejich vztahů k IT pokrýt. Na druhé straně jde z pohledu analýzy
o oblast velmi podstatnou. Proto se soustředíme alespoň na základní otázky, spojené
převážně s projekty aplikačního charakteru:

	Na začátku i v průběhu projektů je nutné respektovat rozdíly v typech projektů

a v typech aplikací (ERP, BI atd.). Musí se přitom zohlednit:

o  rozdíly v celkovém přístupu, v organizaci řešení a v zapojení uživatelů,
např. v projektech ERP je spolupráce klíčových uživatelů prakticky povin-
ná, oproti tomu projekty BI jsou více či méně postaveny na zájmu a in-
venci manažerů a podnikových analytiků, tady by „povinnost“ spolupráce
zřejmě měla negativní dopady na charakter práce,

o  využití adekvátních metodik a metod. Je zcela evidentní, že firmy i teo-
retická pracoviště disponují specifickými metodikami a metodami pro im-
plementace ERP, BI, CRM apod.,

o  je nutné respektovat různé nároky projektů a aplikací na základní tech-

nologie včetně řízení jejich provozu.

29

	Pro analytika je podstatná i znalost IT strategie firmy a cílové podnikové, apli-

kační i datové architektury:

o  již  na  počátku  řešení  projektů  musí  být  analytikem  dobře  pochopená
situace a pozice firmy z pohledu možností, a naopak omezení různých
typů aplikací a technologických nástrojů,

o  aplikační architektura, kromě složení a vazeb aplikací vyjadřuje cílový
stav a priority jejího naplňování, což musí analytik rovněž dobře pochopit
a s tím i pochopit strategické záměry vedení firmy i vedení IT,

o  datová architektura je potřeba hlavně pro pochopení disponibilních da-

tových zdrojů, interních i externích a jejich kvality,

o  zavádění nových aplikací pro podporu byznysu je někdy vnucováno vlast-
ním IT oddělením, například z důvodu potřeby technologického upgrade,
aniž by existovala byznys potřeba anebo aniž by existoval byznys sponzor.

	Analytik se v případě typových aplikačních software velmi často podílí na jejich

konfiguraci, úpravách, resp. customizaci:

o  v analýze před customizací se objevuje problém efektivní specifikace
požadované  funkcionality  vzhledem  k  reálnému  produktu  –  musí  zde
být řešena rovnováha mezi skutečnými byznys potřebami firmy, principy
a technickými možnostmi produktu, zejména jeho funkcionalitou,

o  předpokládá  se  perfektní  znalost  produktu,  jeho  funkcionality,  konfi-
guračních  parametrů,  možností  programátorských  úprav  (rozšiřování  či
změny funkcionality, tedy customizace), technických omezení, nároků na
přípravu uživatele a jeho využívání v běžném provozu,

o  velmi podstatné je pochopení funkcionality a možností daného aplikač-
ního produktu ze strany uživatelů, zejména klíčových uživatelů, podíle-
jících se na implementaci. To znamená, že je nutné zajistit i jejich nále-
žitou kvalifikační přípravu v prvních fázích projektů, která se však často
ze strany uživatele i dodavatele silně podcení. Tento stav se pak vymstí
a prodraží, např. objemem zbytečných úprav software,

o  je  nutné  brát  v  úvahu  současný  silný  trend  ke  cloud  computingu.  Při
rozhodování, zaměřeném na jeho využití, musí proběhnout velmi solidní
analýza jeho přínosů a rizik, a to na základě kvalitních a kvalifikovaných
podkladů. S tím pak souvisejí i změny v přístupech k analytické přípravě
takových aplikací v cloudu.

 Příběh 6:

Někdy  se  můžeme  setkávat  s  tvrzením  u  manažerů  typu  „Já  do  IT  nevi-
dím a programovat se učit nechci….“. Na druhé straně se můžeme potkat
i s těmi, kteří „do toho vidí naprosto perfektně“ na základě toho, co jim pre-
zentovali a nabízeli nejrůznější dodavatelé, nebo ještě lépe, co jim vysvětlily
jejich děti… Ani jeden případ asi není ideální, přesto ideální existují.

30

Náš tým byl pověřen zpracováním celé koncepce rozvoje IT pro jednu men-
ší francouzsko-českou firmu, působící na našem trhu v automobilovém prů-
myslu. Generálním ředitelem byl Francouz. Po jisté době si nás pan ředitel
zavolal, aby s námi projednal dosud zpracované návrhy. Po jistých zkuše-
nostech  z  minulé  doby  byla  naše  očekávání  poněkud  smíšená.  Výsledek
a zejména průběh jednání nás ale zaskočil v tom nejpozitivnějším smyslu.
Ten „chlapík“ věděl přesně, co chce, o IT mluvil s nadhledem, a přitom se
znalostí věci, přesně formuloval potřeby a priority jeho byznysu ve vztahu
k IT, a to s vyjádřením vzájemného respektu a ocenění představ a názorů
druhé strany. Klobouk dolů a úcta na naší straně.

Závěr: Náš závěr v tomto případě asi spíše směřuje do škol a do charakteru
manažerských kursů. Zřejmě není jedinou znalostí manažera v IT znalost
Excelu a programování, ale pochopení potřeb byznysu a jejich promítnutí
do IT.

 Hlavní doporučení:

	 Návrhy na nové aplikace, na jejich rozvoj či změny musí být analytik scho-
pen  zákazníkovi  velmi  dobře  argumentovat,  často  se  tyto  otázky  řeší
spíše odhadem, respektive na základě pouze rámcových informací od do-
davatelů. Pokud je cílem implementace typového ASW, je nutné otevřeně
zákazníkovi uvádět jeho možnosti a neslibovat řešení, které není s daným
ASW možné realizovat.

3.7 Otázky analýzy ve vztahu k řízení projektů

Řízení projektů představuje samostatnou disciplínu s vlastními metodikami, softwaro-
vými nástroji, vlastní dokumentací, specializovanými odborníky. Na druhé straně kvalit-
ní a kvalifikované vztahy řízení projektu a analýzy, stejně jako manažera projektu
a analytika, jsou více než potřebné. Tato podkapitola zachycuje zejména několik po-
znatků a názorů z reálných projektů z pohledu analytiků:

	V průběhu řešení zejména větších projektů se projevují špatně nastavené vaz-

by mezi řízením projektu a jeho řešením:

o  řízení projektu někdy nereflektuje rozdíly a rozdílné nároky při různých

typech projektů, jejich rozsahu a složitosti,

o  nedokonalé pochopení obsahu řešení na straně řízení projektu se od-
ráží v chybně odhadované pracnosti, chybně nastaveném harmonogramu
a v chybném odhadu reálných nákladů.

	Problémy vztahů mezi řízením projektu a řízením celého IT:

o  řízení projektu musí dohlédnout široké spektrum vazeb nejen v rámci
řízení projektu, ale i vazby na IT ekonomiku, řízení zdrojů IT ve vztahu
k projektu, stejně tak dopady do provozu, dopady na plánování a koordi-
naci ostatních projektů. Je tedy nutné, aby řízení projektu poznalo a po-
chopilo v nezbytné míře celý systém řízení IT zákazníka,

31

o  v průběhu a závěru projektů se často naráží na chybně nastavené pro-
cedury testovacích a akceptačních řízení, na problémy migrace dat, na
nedostatečnou administraci projektu, což může být i důsledek výše uve-
dených nefunkčních vztahů mezi řízením projektu a analytickým týmem.

	Problémy v přístupech projektových manažerů:

o  projektovým manažerům, kteří se soustředí příliš na metodiku, rámec, for-
mality, častěji uniká právě obsah řešení, byť ten je primárně záležitostí
analytiků. Zkušenosti ale ukazují, že znalost obsahu projektu (tedy: co se
řeší) v řízení projektu musí být, ale přiměřená,

o  problém je rovněž u tzv. „létajících projektových manažerů“, kdy doda-
vatel  při  převisu  poptávky  nad  kapacitami  firmy  přiděluje  projektovému
manažerovi několik projektů současně, což vede k jejich neznalosti věci
(hlavně v případě, kdy jsou to projekty různého typu), resp. obsahu řešení
se všemi zřejmými důsledky do určování kapacit, termínů, složení analy-
tických týmů, řízení projektových schůzek atd.,

o  projektový manažer, jenž nerozumí vůbec problému nebo byznysu, který
je předmětem řešení, a nemá zájem mu porozumět, bere svoji roli jako
formální (hlídá člověkodny a čas) a tím mu ještě více uniká obsah, není
schopný objektivně posoudit informace, které dostává a v rámci ana-
lytického  nebo  technického  řešení  na  pracovních  schůzkách  nedokáže
moderovat  diskusi,  případně  ji  usměrnit  („projektový  manažer  sice  řídí,
ale příliš neví co“),

o  manažeři projektů se často soustřeďují na formální postupy, ale další pod-
statnou stránkou by měla být „politika projektu“ – s kým jednat, kdo a co
by měl posuzovat a schvalovat atd. To je ovšem více otázkou zkušeností
a citu projektového manažera než používané metodiky.

 Příběh 7:

Řízení projektů a práce projektových manažerů je velmi náročná, rozmanitá
a vyžadující celé spektrum znalostí z různých oborů, i když se to někdy tak
nemusí jevit. Velká obchodní firma, působící intenzivně i na zahraničních
trzích, se rozhodla, že podnikne výběrové řízení na projektového manažera
pro své projekty. Uchazečů bylo několik, vesměs lidé s již určitými zkuše-
nostmi z řízení projektů, tedy bylo z čeho vybírat. Jeden z uchazečů se ale
dostavil s tím, že je vybaven perfektními znalostmi světových metodik, což
byl schopen rámcově dokázat. Na otázky, co ale ví o byznysu dané obchod-
ní  firmy,  jaké  jsou  jeho  znalosti  ekonomiky  včetně  IT  ekonomiky  a  řízení
celého IT, jaké jsou jeho komunikační schopnosti vzhledem k partnerům, to
bylo již výrazně slabší. Na závěr konstatoval, že vlastně nic řídit nechce….

Závěr:  Obdobně,  jak  jsme  uvedli  již  v  základním  textu,  při  respektování
významu a užití zmíněných metodik a formálních postupů to není pro pro-
jektového manažera zdaleka všechno. Při jejich výběru je dobré dát důraz
i na ostatní potřebné znalosti a pak i na cit pro situaci a zkušenost.

32

 Hlavní doporučení:

	Nepochopení problémů byznysu zákazníka, jeho chybné interpretace
vedením projektu nejen že se projevují v nefunkčních vztazích k analy-
tickým týmům, ale i k zákazníkovi a posiluje jeho nedůvěru v kvalitu do-
davatele. I na úrovni vedení projektu je tak nutné posilovat přiměřenou
analytickou znalost obsahu byznysu.

3.8 Otázky analýzy ve vztahu k metodické základně

Metodiky,  metody,  vzory  jsou  vždy  významnou  součásti  řízení  a  řešení  projektů
informačních systémů, ale i řízení firemních aktivit. Jejich podstata a příklady jsou vše-
obecně známy a nemá smysl je zde opakovat. Na tomto místě je účelem pouze opět
zmínit otevřené otázky a problémy, které se v reálné praxi k jejich využití váží:

	Výběr  a  využití  metodik  v  konkrétním  projektu  ve  vztahu  k  práci  analytika  je

velmi podstatná otázka:

o  klíčovou otázkou je, do jaké míry povede daná metodika nebo metoda ke

zvýšení jak kvality analýzy, tak výkonnosti analytického týmu,

o  na druhé straně je problémem tlak (např. vedením firmy) na příliš strikt-
ní dodržování dané metodiky, která v řadě případů znamená enormní
nárůst byrokracie a jak se často uvádí, může znamenat tzv. „paper war“,

o  metodika musí odpovídat charakteru a typu projektu (ERP, BI apod.)
a do značné míry i dodavatelské firmě a jejímu produktu (SAP, Microsoft,
Oracle), zcela univerzální metodiky jsou někdy spíše přítěží,

o  v souvislosti s uplatňováním určité metodiky je dobré si připomínat velmi
důležité pravidlo „adapt, do not adopt“. To například zdůrazňují i tvůrci
jedné z nepoužívanějších metodik řízení projektů, PRINCE 2,

o  výběr a používání určité metodiky a metod by neměly být v rámci firmy

dogma, ale diskusí s pravidlem, uvedeným v předchozím bodu,

o  s výběrem metodiky a metod je někdy spjat spor mezi zákazníkem a do-
davatelem projektu, která ze stran bude metodiku dodávat. Většinou se
ukazuje  jako  účelné  přijmout  dodavatelskou  nabídku,  neboť  je  vesměs
vázaná i na dodávaný produkt.

	Metodiky a metody by neměly být to jediné nebo hlavní v přípravě analytika:

o  existují další podstatné oblasti kvalifikace, zejména byznys obsah, jak
ukáže kapitola 4, tím ovšem není řečeno omezení rozsahu přípravy ana-
lytika v metodické základně,

o  vždy  je  otázkou,  zda  kvalifikační  přípravu  analytika  zaměřit  na  obecně
pojatou metodiku, vyjadřující hlavně metodické principy řešení, nebo na

33

konkrétní vybranou metodiku. Ukazuje se, že je na počátku účelný obec-
ný základ, nadhled, a na něm je pak účelné stavět efektivní zpřístupnění
dalších již zcela konkrétních metodických produktů,

o  na druhé straně by si analytik měl ideálně také projít alespoň jedním pro-
jektem podle používané metodiky, a to s možností vyzkoušet si všechny
dostupné role v analytickém týmu.

	Otázky efektivního využití referenčních modelů:

o  pro  připomenutí:  referenčním  modelem  se  rozumějí  zobecněná  před-
chozí řešení, projekty realizované dodavatelem, např. procesní modely,
modely byznys analytiky apod., kterými dodavatel disponuje, aby raciona-
lizoval aktuální řešení projektu,

o  problém  je  často  v  tom,  že  referenční  model  je  „pouze  zobecněný“  a tedy
neodpovídá realitě zákazníka. Často se pak stává, že zástupci zákazníka,
zejména z nižších úrovní řízení, při prvních rozdílech takový vstup striktně od-
mítnou. Je tedy na straně analytika vysvětlit podstatu věci s tím, že jde pouze
o vstup, zefektivnění řešení a že se předpokládají nezbytné úpravy. Při výraz-
ném rozsahu rozdílů je pak samozřejmě účelné referenční model opustit.

 Příběh 8:

Obdobně  jako  v  předchozí  podkapitole,  věnované  řízení  projektů,  jsou
i v jejich řešení nedílnou součástí znalostí a práce analytika metodiky, me-
tody a nástroje. Stejně tak i tady ale platí potřeba jejich racionálního využití
a případných úprav. Ve firmě poskytující dopravní služby probíhal projekt na
implementaci celého informačního systému, tedy ve spolupráci s dodava-
telem. Projekt by probíhal celkem efektivně, jen s tím, že na straně zákaz-
níka byl analytik, který si postupem doby vysloužil titul „militantní metodik“.
Po  nastudování  příslušné  metodiky  do  nejmenších  detailů  se  pracovních
schůzek k řešení účastnil natolik „připraven“, že jejich trvání se mu dařilo
protáhnout  o  několik  dlouhých  minut,  i  hodin.  Vždy  se  ale  dalo  očekávat,
že připomínky a podněty nebudou k obsahu řešení, ale k metodickým nále-
žitostem a nedostatkům v předkládaných návrzích (bez ohledu na smysl).
Výsledek byl zřejmý nejen v trvání projektu, ale i v náladě analytického týmu
včetně klíčových uživatelů, což bylo nejpodstatnější.

Závěr: Na tomto místě už je jen jeden možný závěr a doporučení. Takového
člověka povýšit a pověřit mnohem závažnějšími úkoly…

 Hlavní doporučení:

	Znalost  metodik,  metod  a technik  analýzy  je  základní  výbavou  analytika,
ale jejich použití by nemělo znamenat omezení invence a iniciativy pří-
slušných analytiků, a to zejména v některých oblastech řízení a některých
projektech, např. v business intelligence a některých dalších, podle situace.

34

3.9  Otázky analýzy ve vztahu k podnikovým procesům

Procesní  modelování,  procesní  reengineering,  procesní  řízení  jsou  termíny,  které  se
skloňují velmi často, velmi často se uplatňují v praxi a jsou součástí nejrůznějších pu-
blikací,  např.  „ŘEPA,  V.:  Podnikové  procesy.  Praha,  Grada  2007“.  Nemá  smysl  tady
opakovat  jejich  podstatu,  obsah  nebo  principy,  ale  jako  v  předchozích  případech  se
zaměříme pouze na některé otevřené otázky a případné problémy:

	Před  zahájením  procesně  orientovaného  projektu  je  účelné  vyjasnit  několik

podstatných aspektů:

o  základní vstupní otázkou je, obdobně jako v jiných situacích, co je úče-
lem  takového  projektu  (optimalizace  procesů  a  snížení  pracnosti  a  ná-
kladů, nebo „pouze“ sjednocení pracovních postupů za účelem zavedení
jejich SW podpory),

o  s předchozí otázkou souvisí i přesnější vymezení cílových efektů, které
mají  být  dosaženy,  tedy  ekonomických,  mimoekonomických,  a  to  podle
oblastí řízení nebo podle jednotlivých byznys jednotek,

o  je  nezbytné  rovněž  vymezit  způsob  využití  výsledků  projektu  ve  firmě

a současně kdo bude za toto využití zodpovědný,

o  je důležité určit, kdo, kteří pracovníci a útvary se budou na řešení pro-
cesního projektu podílet a jak budou na takovém řešení motivováni,

o  je nutné určit roli případných externích analytiků a způsob jejich koope-

race na projektu.

	Klíčovou otázkou v přístupu k procesnímu modelování je rozpor celého podniko-

vého řízení, označovaného jako „iniciativa versus disciplína“:

o  podstata  uvedeného  rozporu  je  spojena  s  určením  procesu,  na  koho,
na  jaké  nositele  a  jejich  úkoly  v  řízení  směřuje.  Existují  procesy  a  úko-
ly v podniku, které vyžadují především disciplínu, např. řízení výrobní
nebo  obchodní  zakázky.  Na  druhé  straně  jsou  procesy  předpokládající
u jejich vykonavatelů iniciativu a invenci, např. návrh nového produktu,
příprava marketingové akce apod. To se promítá, nebo by se mělo promí-
tat do návrhu podnikových procesů,

o  pokud se podíváme na celé spektrum podnikových aktivit, pak je zřejmé, že
u některých z nich hrají analýza a návrh procesu významnou roli, u někte-
rých (např. u některých analytických činností v oblasti datové analytiky) jsou
takové procesy někdy zbytečné, případně násilně konstruované. To odpovídá
i přístupu, označovanému jako znalostně založený procesní reenginnering,
který rozlišuje smysl a granularitu procesů podle cíle, charakteru činností
a znalostí jejich nositelů. Znamená to, že v některých případech musí být
proces nadefinován velmi podrobně (např. procesy v operativním řízení
výroby apod.), v jiných stačí definovat potřebné vstupy a požadované
výstupy včetně metrik pro vyhodnocení úspěšnosti procesu (např. při pří-

35

pravě marketingové akce, nebo u zmíněných analytických úloh). V praxi se
ukázalo, že podrobně definované procesy a vyžadování jejich dodržování
v situacích,  kdy  je  to  neúčelné,  omezují  aktivitu,  invenci  a  iniciativu  často
klíčových podnikových expertů, což je proti smyslu a cílům řízení firmy,

o  je  tedy  zřejmé,  že  procesy,  podporující  disciplínu  lidí,  musí  být  velmi
detailní, předpokládají přesnou specifikaci jednotlivých aktivit, návaznosti
a jejich plnění, jsou zdrojem pro definici funkcionality řešeného systému,
zvyšují bezpečnost řízení, jejich nositelé nemají kam uhnout…,

o  na druhé straně procesy, podporující iniciativu, předpokládají minimál-
ní podrobnost (pouze výstup, příp. vstupy), vysoká míra detailu by právě
iniciativu  a  invenci  jejich  nositelů  zbytečně  omezovala,  což  by  vesměs
bylo proti zájmům nebo cílům firmy,

o  uvedený rozdíl s sebou nese i zřejmý dopad na personální zdroje. Je
evidentní, že procesy založené na invenci budou vyžadovat u jejich no-
sitelů výrazně větší kvalifikační úroveň, než je tomu v opačném případě.

	Dalším  významným  problémem  je  vlastní  analytické  řešení  procesů  a  jejich

následná realizace, tedy jaké jsou nároky na práci analytika:

o  cílem analytika by mělo být navrhnout procesní změny a provést uživa-
tele touto změnou tak, aby ve výsledku byla nejenom naplněna očekávání
uživatele, ale aby také byly dosaženy další benefity, o kterých původně
uživatel neuvažoval,

o  je  běžnou  praxí,  že  na  řešení  podnikových  procesů  se  ve  značné  míře
podílejí uživatelé. Pokud je záměrem i procesní reengineering, tedy op-
timalizace  procesů,  pak  spolupráce  s  uživateli  může  být  problematická
s  ohledem  na  logickou  obavu,  že  s  optimalizací  přijde  daný  pracovník
o místo. Řešení je v komunikaci managementu a vytvoření jasných před-
stav, jaká bude další perspektiva jednotlivých členů projektového týmu,

o  jiným  problémem,  spojeným  s  procesním  modelováním  a  reengineerin-
gem, je následná realizace navržených procesů. Někdy dochází k situ-
acím, že je zpracována perfektní procesní dokumentace, ale ta nakonec
končí  v  šuplíku  některého  z  manažerů.  Dokumentace  jako  taková  není
totiž vynutitelná a pokud se navržené procesy nepromítnou do podniko-
vých  směrnic,  pak  zůstávají  pouze  v  poněkud  teoretické  rovině.  Jinou
možností je na jejich základě realizovat technologie workflow,

o  pokud se výše uvedená realizace uskuteční, pak je nezbytný ještě jeden
krok, a tím je příprava, resp. školení uživatelů. Procesy budou vykoná-
vat reální pracovníci a ti musí přesně vědět, jak mají nadále postupovat,
a hlavně také proč mají právě takto postupovat. Taková příprava se ale
často opomíjí, spoléhá se na školení funkcionality aplikačního SW, který
procesy realizuje, což často vede k negativnímu hodnocení implemento-
vaného SW, případně k jeho úplnému odmítání koncovými uživateli.

36

 Příběh 9:

Při  řešení  podnikových  procesů  platí  doporučení,  která  jsme  formulovali
v předchozím textu, ale je zřejmé, že kromě nich nastávají i situace, které
se poněkud vymykají a musí se však také brát v úvahu. Tým našich analy-
tiků byl pověřený procesní analýzou a návrhem procesů pro firmu v ener-
getice, která měla vzniknout sloučením z původních dvou obdobných firem
s jedním vlastníkem. Řešení mělo probíhat v kooperaci s klíčovými uživateli
obou  firem.  Je  jasné,  že  úlohy  procesního  reengineeringu  a  optimalizace
procesů často nevyvolávají u uživatelů příznivou reakci, zejména při před-
stavě redukce pracovních míst, který tento reengineering pravděpodobně
přinese. V tomto případě byl tento pocit ještě silnější, neboť bylo zřejmé, že
po sloučení a našem reegineerigu zůstane na každém pracovním místě „ze
dvou židlí pouze jedna“. Tomu odpovídalo i „uživatelské nadšení“ a nako-
nec i výsledky projektu.

Závěr: Projekty reengineerigu procesů jsou obvyklé a opodstatněné. Pro-
blém je v tom, že management nepokládá za účelné vysvětlit své záměry,
postupy a organizační opatření po jejich ukončení.

 Hlavní doporučení:

	Pro  analytika  by  řešení  procesního  modelování  a  procesního  reengi-
neeringu nemělo být pouze naplňování definovaných standardů (BPMN
a dalších), ale měly by to být úvahy a návrhy podnikových procesů
v širokém kontextu problémů firemní strategie, organizace, personál-
ních zdrojů a zejména firemního obsahu, viz dále.

3.10  Genetický kód organizace

Koncept genetického kódu organizace (firmy, instituce) formuloval již v 70. letech prof.
Jaroslav  Vlček,  jeden  z  nejvýznamnějších  lidí,  působících  ve  své  době  ve  sféře  in-
formačních technologií. Podstatou jeho úvah bylo vytvoření celé, někdy i velmi široké
sady neformálních pravidel, nikde nepsaných, která formovala řízení dané organizace,
způsob chování lidí na různé úrovni a v nejrůznějších situacích řešení vztahu mezi lidmi
i celými útvary. Tato pravidla se vytvářela většinou dlouhou dobu a vyvíjela se s vývojem
organizace. To znamenalo a způsobovalo, že se tato pravidla velmi obtížně měnila ať
už různými nařízeními, školeními, ale i projekty nebo využíváním informačních techno-
logií. Právě pro tuto „pevnost“ nebo „neměnnost“ je prof. Vlček označil jako genetický
kód organizace.

Je  zřejmé,  že  tento  koncept  jde  v  současné  době  proti  stavu  de  facto  trvalých  změn
a  proti  požadované  flexibilitě  firem  vzhledem  k  prostředí  na  trhu  a  novým  technolo-
giím. Na druhé straně se ale s projevy takového kódu, zejména ve zvycích a chování
pracovníků, můžeme často setkat. Je zřejmé, že dopady na přístup a postup řešení
projektů a uplatňování IT jsou zcela zásadní.

37

 Příběh 10:

Připravoval  se  projekt  na  řešení  informačního  systému  pro  střední  firmu
působící v maloobchodu. Součástí projektu měly být, jako obvykle, procesní
analýza firmy a případné úpravy stávajících procesů. Při počátečním pro-
jednávání celkové koncepce a struktury projektu byla odpověď generálního
manažera, staršího a velmi zkušeného  muže, pro analytiky poněkud  pře-
kvapující  „Pánové,  my  máme  tady  takový  měkký  způsob  řízení  a  přílišná
formalizace procesů by tady asi neuspěla“. Nutno ale přiznat, že firma fun-
govala velmi dobře…

Závěr:  Firma  měla  také  svůj  genetický  kód,  na  kterém  byla  postavena,
a zřejmě by ho šlo asi velmi obtížně v rámci jednoho projektu měnit. Navíc
je tu otázka, jestli by to posloužilo prospěchu věci.

 Hlavní doporučení:

	Uvedení genetického kódu organizace neznamená rezignovat na změ-
ny. Na druhé straně ale jeho poznání a pochopení, především na po-
čátku projektu, je velmi účelné a pomůže redukovat zbytečné „souboje“
nebo vedení projektu někam, kde se po čase ukáže, že to nemá smysl.

3.11  Otázky analýzy ve vztahu k firemnímu obsahu

Posledním tématem je ve velké stručnosti upozornění na problém znalosti firemního
obsahu.  Tato  podkapitola  pouze  vytváří  můstek  k  dalším  kapitolám,  kde  se  těmto
otázkám věnujeme detailněji:

	Nedostatečná  znalost  firemního  obsahu  představuje  podle  výsledků  zmí-
něných  diskusí  s  analytickými  experty  zásadní  problém.  Jako  potvrzení  tři  po‑
známky:

o  analytik,  který  se  soustředí  na  metodiku  a  její  formální  splnění,  se
snadněji odstíní od obsahu problému. Přehlížení této potřeby se dá při-
rovnat  s  nadsázkou  k  situaci,  jako  kdyby  konstruktér  perfektně  zvládal
postupy konstrukčních výkresů, rozpisek apod., ale nevěděl, co je to pře-
vodovka…,

o  je otázkou poměr mezi orientací na znalosti analytických metodik a metod
oproti pochopení principů a problémů řízení podniků ‑ experti tento poměr
vesměs odhadovali na 80 : 20 ve prospěch „obsahu“,

o  je potom třeba dávat důraz i na reálné vyhodnocení řešení, nikoli pouze
z pohledu úspěšnosti průběhu projektu (nebyly problémy), ale také co ře-
šení reálně zákazníkovi přineslo v ekonomice, obchodu, výrobě atd. (viz
podkapitola řízení efektů 3.4).

38

 Příběh 11:

Probíhal  projekt  informačního  systému  pro  jednu  z  našich  strojírenských
firem.  Řešilo  se  právě  řízení  údržby  strojů  a  zařízení,  což  byla  v  daných
podmínkách záležitost poměrně komplikovaná. Jeden z našich analytiků se
manažerů a uživatelů na druhé straně stolu ne zrovna šťastně zeptal: „Jaké
jsou vaše představy o novém systému řízení údržby a o jeho změnách“?
Odpověď  jednoho  z  manažerů  byla  tvrdá,  ale  vcelku  logická  „Pánové,  to
očekáváme, že nám řeknete vy, za to vás platíme. Abychom vám přesně
řekli naše požadavky a představy, ty můžeme nadiktovat Marušce v recepci
a bude to lacinější“. Byl to úder, ale oprávněný.

Závěr: Z předchozího příběhu vyplývá, že analytik, který očekává, že mu
zákazník přesně nadefinuje své požadavky, může být, i když ne vždy, po-
někud zklamán. Musí se připravit na to, že by mohl být nahrazen Maruškou
z recepce, a to by nebylo nejpříjemnější ocenění kvality jeho práce. Jediná
cesta,  jak  se  tomu  vyhnout,  je  pochopit  byznys  zákazníka  a  vedle  jiných
znalostí se orientovat i na „analytickou znalost jeho obsahu“.

 Hlavní doporučení:

	Přípravu,  nejen  ve  škole,  ale  i  průběžně,  je  nutné  směrovat  nejen  na
kvalitní zvládnutí analytických metod, nástrojů, aplikaci, ale zejména na
profesionální analytickou znalost obsahu podnikového řízení, tedy
byznysu. Tomu se věnuje kapitola 4 a následně i kapitola 5.

 Z této kapitoly vyplývají následující hlavní závěry:

	S  prací  analytika  nejsou  spojeny  pouze  otázky  a  úkoly  vázané  na
technologie,  metodiky,  metody  a  techniky,  ale  i  na  široký  kontext
problémů, které řešení ovlivňují a musí se respektovat.

	Práce analytika je výrazně určována i konkrétním prostředím fir-
my zákazníka, pro kterého pracuje. Uvedené problémy a doporučení
je tedy nutné brát jako zobecněné, ale i tak je zřejmě účelné je brát
v úvahu.

	Uvedené otázky a doporučení vznikly na základě zkušeností z pra-
xe a v kooperaci s celou řadou expertů, působících v nejrůznějších IT
a SW firmách na pozici byznys analytiků, konzultantů, zabývajících
se analýzou a návrhem IS.

39

4. Analytická znalost obsahu

 Termín „analytická znalost obsahu“ považujme za čistě pracovní, vyjad-

řující zejména pochopení obsahu firmy a jejího byznysu pohledem analýzy.
Účelem této kapitoly je objasnit podstatu uvedeného termínu a důvody pro
jeho použití a následně vysvětlit, jak se promítá do vymezení role byznys
analytika.

V minulé kapitole jsme se zabývali problémy, na které analýza a práce analytika naráží.
Jedním z významných problémů, jak ukázaly i diskuse s přizvanými experty, je chybějí-
cí znalost byznysu zákazníka, tedy znalost obsahu jeho podnikání. Tím se dostáváme
k našemu pracovnímu termínu „analytická znalost obsahu“, kdy bude třeba na počát-
ku vymezit co se jím chápe a jak takovou znalost odlišit od jiných znalostí, se kterými
se můžeme setkávat.

4.1 Analytická znalost obsahu – podstata a odlišení

Je  zřejmé,  že  na  tomto  místě  se  nebudeme  zabývat  doporučenými  postupy  a  meto-
dikami, ale způsobem analytického myšlení a přístupy k řešení problémů. Nejde
v žádném případě o podcenění zmíněných metodik, jde naopak o jejich doplnění o jiné
úhly pohledu, opět vycházející zejména z projektové praxe (viz kapitola 3).

Klíčovým požadavkem na analytika je schopnost jeho analytického myšlení. Jeho ob-
sah precizně vyjádřili F. PROVOST a T. FAWCETT v publikaci „Data Science for Busi-
ness“, O´Reilly Media, 2013:

„There  is  a  fundamental  structure  to  data-analytic  thinking,  and  basic  principles  that
should be understood. There are also particular areas where intuition, creativity, com-
mon sense, and domain knowledge must be brought to bear. A data perspective will
provide you with structure and principles and this will give you a framework to systemat-
ically analyze such problems. As you get better at data-analytic thinking you will develop
intuition  as  to  how  and  where  to  apply  creativity  and  domain  knowledge“.  Souhrnně
vyjádřeno  –  „Základními  principy  a  oblastmi  analytického  myšlení  jsou:  intuice,
kreativita, selský rozum a znalost obsahu“.

„Znalost obsahu“, nebo také doménová znalost, se musí pojímat v kontextu se základ-
ními znalostmi řízení a ekonomiky firmy na jedné straně a se znalostmi IT na straně
druhé. Mezi oběma ale vzniká z pohledu potřeb analýzy jistá mezera, jak ukazuje Ob-
rázek 4‑1.

Termínem „manažerská znalost obsahu“ zde rozumíme pochopení podniku z pohle-
du jeho řízení, jeho řídicích a organizačních struktur, systému ekonomických a dalších
ukazatelů, obsahu a principů řízení apod. Manažerská znalost obsahu je tak nezbyt-
nou součástí vybavení analytika a reprezentanty pro ni jsou publikace, jako např.:

	CIMLER, P., ZADRAŽILOVÁ, D. a kol.: Retail management. Praha, Management

Press, 2007. ISBN: 978‑80‑7261‑167‑6.

40

	FIBÍROVÁ, J., ŠOLJAKOVÁ, L., WAGNER, J., PETERA, P.: Manažerské účetnic-
tví. Nástroje a metody. Praha, Wolters Kluwer, 2015. ISBN: 978‑80‑7478‑743‑0.

	JUROVÁ,  M.  a  kol.:  Výrobní  a  logistické  procesy  v  podnikání.  Praha,  Grada,

2016. ISBN 978‑80‑247‑5717‑9.

	KEŘKOVSKÝ, M., VALSA, O.: Moderní přístupy k řízení výroby. 3 doplněné vy-

dání. Praha, C.H. Beck pro praxi, 2012. ISBN 978‑80‑7179‑319‑9.

	KRÁL,B. a kol.: Manažerské účetnictví. Praha, Management Press 2006. ISBN

80‑7261‑141‑0.

	SYNEK, M. a kol.: Manažerská ekonomika. Praha, Grada 2011. ISBN 978‑80‑

247‑3494‑1.

	SYNEK, M., KISLINGEROVÁ, E. a kol.: Podniková ekonomika. Praha, C H Beck

2015. ISBN 978‑80‑7400‑274‑8.

	TOMEK, G., VÁVROVÁ, V.: Integrované řízení výroby. Praha, Grada 2014. ISBN

978‑80‑247‑4486‑5.

	A další.

Obrázek 4‑1: Mezera mezi manažerskou znalostí obsahu a znalostmi IT

IT znalosti jsou na tomto místě všeobecně zřejmé a vedle znalostí jednotlivých IT pro-
duktů a služeb zahrnují i znalosti metodik, metod, vzorů ve vztahu k IT, systémů a po-
stupů řešení a vývoje IT aplikací a dalších produktů atd. Pouze pro úplnost uvedeme
jako příklady několik vybraných publikací:

	BRUCKNER, T. VOŘÍŠEK, J., BUCHALCEVOVÁ, A. a kol.: Tvorba informačních
systémů: Principy, metodiky, architektury, Grada, 2012, ISBN 978‑802477‑9027.

	BUCHALCEVOVÁ, A.: Metodiky vývoje a údržby informačních systémů. Praha,

Grada 2004. ISBN 80‑247‑1075‑7.

	BUCHALCEVOVÁ, A., PAVLÍČKOVÁ, J., PAVLÍČEK, L.: Základy softwarového

inženýrství, materiály ke cvičením. Praha, VŠE 2008.

	DOHNAL, J., PŘÍKLENK, O.: CIO a podpora byznysu. Praha, Grada, 2011. ISBN

978‑80‑247‑4050‑8.

	HOLTSNIDER, B., JAFFE, B., D.: IT Managener´s Handbook. Amsterdam, Else-

vier 2012. ISBN 978‑0‑12‑415949‑5.

41

	LANEY, D., B.: Infonomics. Bibliomotion, Inc., New York, 2018. ISBN 978‑1‑138‑

09038‑5.

	SLÁNSKÝ, D.: Data and Analytics for the 21st Century: Architecture and Gover-

nance. Professional Publishing, 2018. ISBN 978‑80‑88260‑16‑5.

	VOŘÍŠEK,  J.  a  kol.:  Principy  a  modely  řízení  podnikové  informatiky.  Praha,

Oeconomia 2008. ISBN: 978‑80‑245‑1440‑6.

	A další

Smyslem „analytické znalosti obsahu“ je vytvořit můstek mezi oběma sférami zna-
lostí, resp. vyplnit mezeru s tím, že bude čerpat ze základů a principů obou z nich a do-
plňovat je o další podstatná témata a součásti. Pro analytickou znalost obsahu je možné
zřejmě vymezit tyto klíčové charakteristiky:

	analytický pohled na obsah řízení firmy podle jednotlivých komponent řízení
(úlohy, resp. procesy, ukazatelé, dokumenty atd.), který vedle jejich standardních
manažerských charakteristik bere v úvahu i ty, které jsou pro analýzu významné,
např. realizace procesů a podmínky jejich úspěšnosti, zdroje dat pro ukazatele
(metriky) a souvislosti s analytickými dimenzemi apod.,

	důraz na kontext, tedy pochopení a řešení značného množství vazeb a souvis-

lostí, na nichž je řízení firmy založeno,

	pochopení a řešení firmy jako celku bez ohledu na to, zda je předmětem řešení
jen její část, nebo celá firma – pro analytika platí, že i když řeší např. sklady, musí
stále firmu vidět a vnímat jako jeden celek,

	pochopení toho, jak firma funguje a schopnost identifikovat příčiny, když nefunguje,

	schopnost vyhodnocení, jak racionálně využívat IT produkty a služby, jak je
nejlépe nasadit pro jednotlivé oblasti a komponenty řízení firmy, jaké jsou vzhle-
dem k byznys obsahu potenciální možnosti a na druhé straně omezení IT pro-
duktů a celých řešení (business – IT alignment).

Podrobněji se k některým z uvedených bodů v dalším textu vrátíme, pro celkovou před-
stavu komponent firmy a jejich kontextu nabízíme Obrázek 4‑2.

„Analytickou znalost obsahu“ tak charakterizuje zejména to, že bere v úvahu všech-
ny relevantní komponenty řízení firmy:

	úlohy a procesy,
	scénáře (podstatné analytické otázky a problémy k řešení),
	faktory (které řešení úlohy a jejich realizaci ovlivňují),
	role (interních i externích pracovníků),
	metriky (ukazatelé a jejich dimenze),
	dokumenty, data (vstupy a výstupy úloh),
	metody (manažerské, finanční, IT a další),
	IT aplikace a nástroje (a jejich podstatné charakteristiky).

42

Obrázek 4‑2: Komponenty řízení firmy a jejich kontext

Je zřejmé, že v různých prostředích nebudou mít uvedené komponenty stejnou váhu
a význam. Je však účelné v rámci analýzy zvažovat, které z nich a v jakém rozsahu
budou předmětem řešení, nebo alespoň jeho součástí.

Výrazným znakem „analytické znalosti obsahu“ je to, že pojímá podnik v efektivně ši-
rokém kontextu, to znamená ve všech podstatných souvislostech, a to:

	mezi všemi podstatnými komponentami řízení,

	mezi oblastmi podnikového řízení (finance, prodej, nákup atd.),

	mezi různými firmami podle odvětví, resp. vertikál, např. v rámci dodavatelských

řetězců, které tvoří distributoři, zákazníci, koncoví zákazníci,

	ve vztazích k externím subjektům (banky, partneři, veřejná správa atd.).

Podle  konkrétního  segmentu  trhu  se  takový  kontext,  nejrůznější  vazby,  celý  dodava-
telský řetězec mohou podstatně lišit a zahrnovat různé zájmové skupiny či odborníky
a jejich potřeby a zájmy musí analytik dobře pochopit.

Analytická znalost obsahu je často svázána i s potřebou efektivně hledat a definovat
v celém systému řízení a v rámci jednotlivých komponent jejich adekvátní struk-
turalizaci. Tedy jde o nastavení struktur v procesech nebo úlohách, v datech, metrikách
atd. To by mělo pak přispět k řešení problémů jako např.:

43

	nastavení  odpovídající  granularity  řešení  prakticky  z  pohledu  všech  zmíně-
ných  komponent.  Např.  vymezení  a  analýza  procesů  (finančních,  obchodních
a dalších) se realizuje buď na neúměrné, resp. zbytečné podrobnosti, nebo na-
opak na úrovni hrubého nic neříkajícího popisu (viz kapitola 3),

	analytik by se pak měl operativně, podle situace, pohybovat na různé úrovni
podrobnosti (nahoru, dolů) a uvažovat řešení na různých úrovních těchto struk-
tur, tedy podle potřeby se „ponořit“ do hloubky detailního řešení, ale následně se
zase „vynořit“ a vidět svou práci v nejširších souvislostech,

	definované  struktury  komponent  vnášejí  do  řízení  firmy  pořádek  a  lepší  ori-
entaci jak pro analytiky, tak pro uživatele (pokud ovšem chtějí takový pořádek
přijmout), i to je nezbytnou součástí analytické znalosti obsahu.

Uvedené  charakteristiky  „analytické  znalosti  obsahu“  jsou  vstupem  pro  další  úplnější
vymezení funkční náplně práce analytika, tedy jeho profilu a následně i hlavních po-
žadavků na jeho znalosti a schopnosti.

4.2  Profil analytika

Před dalšími detailnějšími úvahami nad požadavky na byznys analytika bude účelné
vyjít ze stručného přehledu jeho činností. Byznys analytik řeší především obsahovou
a logickou stránku celého projektu i jeho jednotlivých dílčích částí a úloh, následně
se podle potřeby podílí i na jeho technické specifikaci a realizaci a zajišťuje zejména
tyto činnosti:

	spolupracuje s vedením firmy na byznys strategii a byznys modelu podniku. To
závisí na tom, zda jde o „interní“ nebo „externí“ roli. I když z pohledu externího
dodavatele např. ASW tuto možnost byznys analytik málo kdy má, byznys stra-
tegie je pro něj důležitým vstupem,

	analyzuje potřeby a problémy firmy definované zákazníkem nebo uživatelem,
identifikuje další související problémy, specifikuje jejich příčiny, připravuje a pre-
zentuje možná řešení včetně využití IT,

	konzultuje a specifikuje s uživateli jejich požadavky, dokumentuje a formalizuje
je, zajišťuje jejich verifikaci vzhledem k požadavkům ostatních útvarů a uživatelů
a vzhledem k případným organizačním, ekonomickým, personálním nebo tech-
nickým omezením,

	zajišťuje řešení procesních modelů, podílí se na analýze, návrhu a optimalizaci
procesů firmy a jejich následné IT podpoře, organizační a technologické imple-
mentaci do firemní praxe,

	podílí se na řešení objektových a datových modelů a specifických modelů, od-
povídajících určitým typům aplikací, např. dimenzionálních modelů v projektech
business intelligence,

	spolupracuje na definování IT služeb, na specifikaci funkcionality a dalších para-
metrů aplikací, na definování odpovídajících nároků na IT infrastrukturu,

44

	na  základě  požadované  funkcionality  definuje  parametry  pro  konfiguraci
a customizaci typového software, definuje zadání nových aplikací, resp. zadání
vývoje  doplňujících  funkcí  typového  software  a  zadání  pro  integraci  na  okolní
aplikace a systémy,

	spolupracuje  na  customizaci  typového  software,  na  testování  hotových  pro-

duktů, na přípravě a realizaci akceptačních a předávacích řízení,

	podílí se na nasazení aplikací do infrastruktury podniku, do provozu a na realiza-

ci migrace dat do nových aplikací,

	zajišťuje zpracování projektové a uživatelské dokumentace,

	často zajišťuje školení koncových uživatelů.

Funkční náplň byznys analytika, jako i jakékoli jiné role, se musí modifikovat podle kon-
krétního prostředí, ve kterém působí.

4.3  Požadované schopnosti a znalosti analytika

Pracovní náplň i požadavky na analytika se mění podle konkrétní situace, do které se
dostává  a  zejména  podle  jeho  vztahu  k  zákazníkovi,  resp.  co  zákazník  od  analytika
očekává. Hlavní požadavky na znalosti a schopnosti byznys analytika lze shrnout
do následujících bodů:

	schopnost analytického myšlení v celém rozsahu, tj. ve firemním obsahu, me-
todách řízení podniku, metodách tvorby infomačních systémů i technologiích,

	flexibilita,  schopnost  rychlého  přechodu  jak  mezi  různými  úrovněmi  komplex-
nosti a detailu řešených problémů, tak mezi oblastmi řízení, případně typy pod-
niků a odvětvími ekonomiky,

	již zmíněná analytická znalost obsahu, schopnost pochopení a vyhodnocení
byznys potřeb, problémů jednotlivých komponent řízení a navrhování jejich ře-
šení s efektivním využitím IT zdrojů,

	schopnost formulace a vyhodnocování analytických otázek,

	znalost analytických metod, metodik a nástrojů, zejména procesního, datové-

ho, objektového modelování,

	znalost principů a metod řízení a realizace projektů,

	schopnost racionálně komunikovat a kooperovat s partnery, tj. zákazníky, uži-

vateli, ostatními IT pracovníky,

	znalost a zkušenosti s metodami a nejlepšími praktikami příslušné věcné ob-

lasti (finanční řízení, obchod, logistika, výroba apod.),

	znalosti  principů  a  parametrů,  ale  i  omezení  používaného,  resp.  dodávaného

aplikačního software,

	znalost  a  schopnost  adekvátně  používat  software  pro  podporu  analytických

prací.

45

Vymezení „analytické znalosti obsahu“ a následná specifikace funkcí a znalostí analyti-
ka budou nadále podstatným vstupem pro formulaci hlavní části textu, což je vymezení
obsahu a principů „anatomie firmy“.

 Z kapitoly vyplývají následující hlavní závěry:

	„Analytická znalost obsahu“ neboli „doménová znalost“ jako pracov-
ní  pojetí  a  termín  představuje  spojovací  můstek  mezi  základními
znalostmi podnikového řízení a ekonomiky, tj. „manažerské znalosti
obsahu“ a znalostmi řízení IT, jednotlivých produktů, služeb, metodik
a metod.

	„Analytická  znalost  obsahu“  se  vyznačuje  řadou  charakteristik,
z nichž nejpodstatnější je analytické pochopení jednotlivých kom-
ponent  řízení  a  řešení  rozvoje  firmy  a  pochopení  kontextu,  tedy
širokého spektra vazeb, na kterých je řízení založeno.

	 „Analytická znalost obsahu“ se promítá do specifikace profilu byz-
nys analytika, tj. jeho funkční náplně i do požadavků na jeho schop-
nosti a znalosti.

	„Analytická znalost obsahu“ a její podstata a charakteristiky jsou vý-
znamným vstupem pro formulaci „anatomie firmy“, která bude ná-
plní dalších kapitol tohoto textu.

46

5. Anatomie firmy – základní principy

 Obdobně,  jako  v  případě  „analytické  znalosti  obsahu“  pokládáme  termín
„anatomie  firmy“  za  čistě  pracovní,  který  má  vyjádřit  obsah  řízení  firmy
pohledem  a  nároky  analytika.  Účelem  kapitoly  je  jednak  objasnit  důvody
pro „anatomii firmy“ a pak s využitím charakteristik „analytické znalosti ob-
sahu“ z kapitoly 4 formulovat hlavní principy jednotlivých komponent řízení
firmy, jejichž přehled byl uveden rovněž v předchozí kapitole. Zdůrazněme,
že na tomto místě půjde pouze o principy, jejich využití v analýze řízení
celé firmy bude náplní dále připravovaných textů, zejména „IT a anatomie
firmy – obsah“.

„Analytická znalost obsahu“ a její podstatné charakteristiky představuje, jak jsme dří-
ve zdůraznili, hlavní vstup pro další podkapitoly, zaměřené na vymezení principů a jed-
notlivých komponent, vytvářejících „anatomii firmy“.

5.1  „Anatomie firmy“ – podstata a důvody

Hned  zpočátku  kapitoly  je  nezbytné  vysvětlit,  proč  se  zabývat  „anatomií  firmy“  a  for-
mulovat ji. Samotný termín vznikl jako výsledek diskusí s některými analytickými ex-
perty  (viz  kapitola  3),  kteří,  a  nejen  ti,  považují  za  účelné  prezentovat  obsah  řízení
firmy pohledem analytika a současně pro to použít analogii po desítky a stovky let se
známými principy medicíny. I když jde o jistou nadsázku a srovnávat lékařství s říze-
ním firmy je samozřejmě „hodně odvážné“, přesto bychom si nadále rádi něco z této
dokonalé sféry lidského vědění vypůjčili. Snad nám to lékařské kapacity prominou.

Pro použití termínu „anatomie“ nás vedly tyto důvody:

	anatomie  je  založena  na  dokonalém  popisu  a  pochopení  jednotlivých  částí

(těla), jak by tomu mělo být i pochopením jednotlivých součástí firmy,

	anatomie sleduje všechny významné vazby a propojení částí (těla), jak by tomu

mělo být pochopením také kontextu všech součástí v řízení firmy,

	anatomie vnímá celek (celé tělo), jak by tomu mělo být pochopením řízení a ře-

šení rozvoje celé firmy,

	smyslem anatomie je nejen dokonale poznat objekt (tělo) s jeho patologickými
jevy, ale vytvořit předpoklady pro diagnózy problémů (nemocí) a jejich řešení
(léčebných postupů), jak by tomu mělo být u analýzy problémů a jejich řešení
v řízení firmy,

	anatomie sleduje nejen vlastní objekt (tělo), ale do jisté míry i vlivy, které na něj
působí (strava, životní režim atd.), jak by tomu mělo být sledováním a hodnoce-
ním faktorů ovlivňujících dynamiku řízení a řešení rozvoje firmy.

Možná  bychom  našli  i  jiná  přirovnání,  ale  pokud  jsme  některé  charakteristiky  uvedli
z medicínského  hlediska hodně  amatérsky, což se dá  předpokládat,  pak  se lékařské

47

komunitě omlouváme. Je ale zřejmé, že nám jde pouze o rámcové objasnění důvodů
– proč „anatomie“ i u nás, v oblasti uplatnění IT v byznysu.

5.2  Hlavní principy anatomie firmy

Hlavní principy návrhu a vyjádření „anatomie firmy“ vycházejí, jak jsme již zdůraznili,
z principů „analytické znalosti obsahu“ (viz kapitola 4) a jsou prezentovány dále.

5.2.1  Komponenty anatomie firmy

Přehled komponent „anatomie firmy“ byl již uveden v kapitole 4, proto na tomto místě
uvádíme pouze základní schéma (Obrázek 5‑1).

Obrázek 5‑1: Komponenty anatomie firmy a jejich struktury

Ke komponentám a uvedenému obrázku doplníme několik poznámek:

	každá komponenta je zde prezentována v hierarchické struktuře,

	z uvedeného obrázku (Obrázek 5‑1) je patrné, že ústřední komponentou ana-
tomie firmy je úloha, resp. proces, proto právě jí v podkapitole 5.3 bude věnová-
na největší pozornost,

	ke komponentě „úloha“ jsou zobrazeny základní vazby, které však nejsou zda-

leka jediné,

48

	uvedené  zkratky v závorkách jsou ty, které se využívají na portálu  MBI a  jsou
součástí kódů, které jednoznačně identifikují každou komponentu (úlohu, metri-
ku atd.), která je na portálu umístěna.

Principy anatomie firmy podle jednotlivých komponent jsou hlavní náplní této kapitoly.

5.2.2  Pohled na firmu jako celek

Pro  anatomii  firmy  je  dále  klíčový  její  obsah,  reprezentovaný  jednotlivými  oblastmi
řízení, jejichž jádrem jsou úlohy řízení s návaznostmi na všechny další komponenty,
jak ukazuje Obrázek 5‑2, zachycující souhrnně všechny oblasti řízení, které se obvykle
vyskytují ve firmách bez ohledu na odvětví, kde působí.

Obrázek 5‑2: Anatomie firmy jako celek a její oblasti řízení

5.2.3  Specifika typů firem a odvětví v anatomii firmy

V předchozích kapitolách jsme zdůrazňovali i potřebu jisté flexibility analytika, aby byl
schopen se relativně rychle orientovat v různých typech firem, případně i odvětvích.
Je zcela zřejmé, že není možné, aby analytik působil kvalifikovaně ve zcela odlišných
firmách  a  sektorech  ekonomiky  (tedy  „znal  o  všem  nic“),  na  druhé  straně  analytické
a softwarové firmy se pohybují v různých prostředích, takže vytvářet alespoň přiměře-
né předpoklady pro takovou flexibilitu zřejmě není zcela zbytečný záměr.

Princip jsme zmínili již v úvodu textu a spočívá v tom, že je vymezen základní obsah
fungování, respektive řízení firmy, podle jednotlivých oblastí řízení (Obrázek 5‑2), na

49

který pak navazují s uvedením příslušných modifikací charakteristiky dalších typů
firem. To dokumentuje Obrázek 5‑3 s příkladem firmy se strojírenskou výrobou.

Obrázek 5‑3: Základní a specifické oblasti anatomie firmy na příkladu strojírenské výroby

Další  podkapitoly  jsou  již  věnovány  principům  a  vyjádření  jednotlivých  komponent
anatomie firmy.

Poznámka: Je nutné zdůraznit, že v této kapitole jsou prezentovány pouze principy
a příklady jednotlivých komponent, jejich dílčí charakteristiky budou náplní navazují-
cího textu „IT a anatomie firmy – obsah“.

5.3  Úlohy, procesy

Základní komponentou v pojetí anatomie firmy je úloha, k níž se váží ostatní kom-
ponenty. Smyslem úloh je zachytit a popsat obsah řešení úkolů v řízení a fungování
firmy a osvědčené postupy a doporučení. V anatomii byl použit termín „úloha“, ale
s přímou vazbou na procesy, a to z těchto důvodů:

	termín „úloha“ se jeví jako obecnější, a to proto, že její součástí může nebo
nemusí být „proces“, nebo naopak může být úloha součástí nějakého procesu.
Jak jsme objasnili již v podkapitole 3.8, v souvislosti s procesním modelováním
je množství případů, kdy definovat pro ně proces v klasickém vyjádření je nad-
bytečné,  nebo  dokonce  proti  smyslu  věci.  Pak  je  v  takových  případech  řešení
a vytváření procesů někdy hodně násilné. Proto „úlohy“ v anatomii firmy mohou

50

primárně zahrnovat přehled tzv. „klíčových aktivit“ a podle potřeby i stan-
dardní  vyjádření  „procesu“  tak,  aby  byl  deklarován  především  obsah  úlohy,
což je operativnější,

	s  „úlohou“  jsou  spojeny  další  atributy  (např.  podmínky  úspěchu,  doporučené

praktiky), které se k procesům ne vždy váží.

5.3.1  Obsah a kategorizace úloh

Úloha  a  s  ní  případně  spojený  proces  tedy  vyjadřuje  obsah  příslušné  části  řízení
firmy, a to zejména výčtem jejích klíčových aktivit, nebo hlavních funkcí a dalších cha-
rakteristik (viz dále). Účelem úloh je tak souhrnně vyjádřit, co je náplní řízení a fungo-
vání firmy a co je tedy v analýze i hlavním předmětem řešení. Příkladem úlohy může
být „vyřízení objednávky od zákazníka“, „zpracování finančních výkazů“, „přijetí nového
zaměstnance“ apod.

Takových úloh je ve firmě velké množství a pak je dobré je nějakým způsobem členit,
resp. kategorizovat. Hlediska pro kategorizaci mohou být různá, v našem případě
využíváme dvě:

	 úlohy rozdělené podle odvětví a oblastí řízení, např. finance, prodej atd. (Obrá-

zek 5‑2 a Obrázek 5‑3),

	 úlohy rozdělené podle standardních operací s daty, tj. evidence, transakce, re-

porting, analýzy, plánování, pokročilá analytika (Obrázek 5‑4).

Obrázek 5‑4: Kategorizace úloh podnikového řízení.

51

Obě dvě hlediska se zde kombinují, to znamená, že každá oblast řízení (skupina úloh)
obsahuje  standardně  6  typů  úloh.  Těmto  typům  úloh  s  ohledem  na  rozsah  jejich
charakteristik jsou věnovány zvláštní kapitoly 6 – 11 v části B textu.

Kategorizace úloh podle operací s daty přináší několik efektů:

	obsah a funkcionalita úloh se vzájemně liší,
	každý z uvedených typů úloh vyžaduje specifické přístupy k analýze a návrhu

řešení a lze je tak jasně vymezit,

	s  jednotlivými  typy  úloh  jsou  spojeny  obvykle  standardní  analytické  otázky

nebo scénáře, viz podkapitola 5.4,

	realizace  úloh  se  obvykle  váže  na  určité  typy  IT  produktů,  zejména  aplikací

(ERP, BI, CRM atd.),

	z jednotlivých úloh různých typů lze efektivně a se znalostí věci poskládat kom-

plexní podnikové procesy (podkapitola 5.11).

5.3.2  Skupiny úloh a úlohy

Skupiny úloh a úlohy jsou zde členěny následujícím způsobem:

	Skupiny úloh – reprezentují jednotlivé oblasti řízení firmy a zahrnují:

o  strategické řízení firmy,
o  finanční řízení,
o  řízení závazků,
o  řízení pohledávek,
o  řízení práce a mezd,
o  controlling,
o  řízení prodeje zboží a služeb,
o  řízení nákupu,
o  řízení skladů,
o  řízení lidských zdrojů,
o  řízení majetku,
o  marketing,
o  řízení dopravy,
o  řízení potřeby a spotřeby energií.

	Úlohy  představují  jednotlivé  dílčí  úlohy  podle  jejich  kategorizace,  např.  „řízení

nákupu“ obsahuje tyto úlohy:

o  evidence nákupů a nákupních operací,
o  realizace nákupních transakcí, nákupní transakce,

52

o  reporting nákupů,
o  analýzy nákupů materiálů, zboží a služeb,
o  plánování a rozvrhování nákupních operací,
o  pokročilá analytika v řízení nákupu.

5.3.3  Příklad úlohy

Jako  příklad  uvádíme  úlohu  „realizace  nákupních  transakcí“,  resp.  „obchodní  případ
Nákup“.  Úloha  je  demonstrována  souhrnným  slidem,  který  obsahuje  pouze  její  vy-
brané charakteristiky. Vlevo nahoře je „mapa“ s určením pozice dané oblasti řízení
v celém systému řízení firmy. Vpravo nahoře je přehled rolí, podílejících se na úloze
s uvedením prvků RACI matice (viz dále). Dolní část schématu pak obsahuje vlastní
náplň úlohy, v tomto případě vstupní data, klíčové aktivity a výstupní data.

Obrázek 5‑5: Příklad: Realizace nákupních transakcí

5.3.4  Vazby úloh na ostatní komponenty

Jak jsme již uvedli, úloha představuje základní komponentu anatomie firmy a váží se
k ní všechny ostatní komponenty (Obrázek 5‑1). Na tomto místě uvádíme souhrnný
přehled těchto vazeb, detailněji se k nim vrátíme s jednotlivými dalšími komponentami.
Vazby odpovídají na tyto otázky:

53

	 jaké scénáře úlohu vyvolávají, tzn. jaké analytické otázky úloha řeší nebo po-

máhá řešit, k jakým problémům v řízení firmy se úloha vztahuje,

	 jaké faktory definují prostředí pro vykonávání úlohy a do jaké míry vykonávání
úlohy  ovlivňují.  Faktorem  může  být  úroveň  managementu,  způsob  využívání
outsourcingu, rozsah využití určitých aplikací nebo technologií, např. BI, sociál-
ních sítí apod.,

	 jací pracovníci, resp. v jakých rolích (např. „Manažer marketingu“) úlohu za-
jišťují, z toho pak vyplývá složení týmu i náročnost úlohy na personální zdroje,

	 jaké  jsou  vstupy  a  výstupy  úlohy,  tedy  vstupní  /  výstupní  data  nebo  doku-

menty, např. „Firemní strategie“, „Zákaznická objednávka“ apod.,

	 jaké metriky je účelné při provádění úlohy využívat, jak lze měřit výsledky úlo-

hy, její zdroje, např. jaké jsou náklady spojené s úlohou apod.,

	 jaké aplikace, resp. aplikační software nebo softwarové nástroje přispívají k ře-
šení úlohy, nebo alespoň dokumentují různé možnosti jejího řešení, např. ana-
lytická aplikace pro analýzy nákladů,

	 jaké metodiky, metody a vzory jsou pro vykonávání úlohy vhodné, případně,

které je nutné respektovat, např. metoda BSC atd.

 Doporučení k analýze úloh:

	prioritní je dokonalé pochopení ekonomického obsahu pro vyjádření
úloh a procesů, a to na základě dokumentů firmy, kvalifikovaných disku-
sí s vlastníky, managementem a uživateli a s využitím referenčních mo-
delů, zkušeností a dalších disponibilních zdrojů obecného charakteru,

	pro  postupné  vymezení  a  upřesnění  úloh  je  dobré  využít  jejich  uve-
denou  kategorizaci,  která  přispívá  ke  zprůhlednění  řešení,  případně
i k lepší orientaci zákazníka v něm,

	při formulaci úloh je nutné specifikovat jejich běžný obsah a provoz, tedy
když fungují, ale analyzovat situace a příčiny když nefungují a jaké má
být řešení nebo zajištění chybových stavů,

	při formulaci úloh je rovněž většinou užitečné, jak se bude vyvíjet re-
alita, a tedy jejich obsah a řešení v čase tak, aby respektovaly předpo-
kládané změny prostředí (např. změny na trhu, v technologiích apod.),

	při  analýze  a  návrhu  procesů  lze  doporučit  vzít  v  úvahu  již  uvedené
otázky a doporučení k procesnímu modelování (viz kapitola 3),

	při formulaci úloh je dobré postupně upřesňovat představu o jejich po-
krytí aplikacemi a nástroji IT současně s vyhodnocením, jaké efekty
aplikace pro úlohy přinese, a naopak s jakými problémy je třeba počítat
(podkapitola 5.9),

	pro diskuse k řešení úloh a procesů je účelné připravit sady analytic-

kých otázek, jak ukáže následující podkapitola.

54

5.4  Scénáře, analytické otázky

Scénář v tomto textu je chápán jako definovaná situace v řízení firmy nebo v řízení
IT, se kterou jsou spojeny otevřené analytické otázky, požadavky nebo problémy. Úče-
lem scénářů je formulovat potenciální problémy a analytické otázky pro řešení projektů
a vytvořit tak obsahovou základnu pro diskuse s vlastníky, managementem i uživateli
zákazníka. S tím souvisí i hledání jejich adekvátních řešení, respektive případná dopo-
ručení.

5.4.1  Přehled scénářů

Scénáře  se  v  tomto  textu  člení  na  dvě  hlavní  skupiny.  Scénáře  k  typovým  úlohám
anatomie firmy (evidenčním, transakčním atd.) jsou uvedeny s celkovými charakteristi-
kami typových úloh v kapitolách části B.

Další skupinou jsou scénáře k oblastem řízení firmy a jejich seskupením a zahrnují
zejména:

	scénáře ke strategickému řízení firmy, jejichž účelem je formulovat analytické
otázky pro řešení úloh v oblasti strategického řízení firmy, řízení její výkonnosti
a controllingu,

	scénáře  k  finančnímu  řízení  firmy  definují  analytické  otázky  při  řešení  úloh
v různých oblastech finančního řízení firmy, řízení pohledávek a závazků, řízení
majetkové a kapitálové struktury firmy, řízení mezd a platů,

	scénáře k řízení obchodních aktivit firmy formulují analytické otázky pro řešení
odpovídajících úloh v oblasti řízení prodeje, nákupu, marketingu a řízení skladů
a rozvoje skladového hospodářství, řízení rozvoje logistických procesů,

	scénáře  k  řízení  personálních  zdrojů  formulují  analytické  otázky  pro  řešení

úloh řízení lidských zdrojů a rozvoje kvalifikace,

	scénáře k řízení majetku formulují analytické otázky pro řízení a správu majet-
ku, řízení investic včetně jejich návratnosti a řízení a plánování údržby ve firmě,

	scénáře k řízení dopravy ve firmě formulují analytické otázky pro řešení úloh ří-
zení vlastní podnikové dopravy a dopravních služeb od externích poskytovatelů,

	scénáře k řízení potřeby a spotřeby energií ve firmě formulují analytické otáz-
ky pro řešení úloh řízení požadavků na energie a spotřeby energií ve firmě.

5.4.2  Příklad scénáře

Jako příklad uvádíme scénář pro oblast řízení nákupu. Obsahuje dále uvedené analy-
tické otázky.

	Jak co nejpřesněji a včas zjišťovat budoucí předpokládané potřeby materiálu?

	Jak systematicky zjišťovat a volit optimální zdroje pro uspokojení těchto potřeb
a jak na základě optimalizace nakupovaných zdrojů snižovat objem podnikových
nákladů?

55

	Jak úplně a včas projednávat a uzavírat smlouvy o ekonomicky efektivních do-
dávkách, trvale sledovat jejich realizaci, projednávat vzniklé změny v potřebách
a popřípadě odchylky v dodávkách?

	Jak systematicky sledovat a regulovat stav zásob a zabezpečit jejich co ne-

jefektivnější využití?

	Jak pružně realizovat operativní zásahy v případě ohrožení uspokojování vnit-

ropodnikových potřeb?

	Jak systematicky pečovat o zajištění odpovídající kvality nakupovaných ma-

teriálů?

	Jak zabezpečit odpovídající efektivní fungování materiálně technické základ-
ny nákupu, především skladové hospodářství, dopravu a ostatní logistické pro-
cesy při realizaci materiálových toků?

	Jak  efektivním  řízením  nákupu  podporovat  výkonnost  podniku  (v  obchodu,
výrobě  apod.),  jak  zajistit  požadovanou  kvalitu  nakupovaných  zdrojů,  jak  řešit
zajištění kontinuity výroby a minimalizaci výpadků v důsledku nedostatku vstupů
do výroby?

	Jak  nastavit  a  racionálně  realizovat  funkce  nákupního  marketingu,  tj.  prů-

zkumy na nákupním trhu, možnosti dopravy a logistiky?

	Jak vytvářet a zdokonalovat odpovídající informační systém pro řízení nákup-

ního procesu?

	Jak  zajistit  dostupnost  informací  o  stavu  a  předpokládaném  vývoji  nákupního

trhu?

	Jak  systematicky  zabezpečovat  personální,  organizační,  metodický  a  tech-

nický rozvoj jak řídicích, tak hmotných procesů?

	Jak připravit a rozvíjet prvky standardizace nákupních prvků (materiálů, zbo-

ží, kooperací) včetně činností, souvisejících s nákupem?

	Jak realizovat nákup ve vztahu k technickohospodářským normám?

	Které reporty nákupu a s jakým obsahem budou adekvátní jednotlivým úrovním

a pozicím řízení?

	Které metriky budou pro nákupní analýzy a plánování významné, které budou

mít charakter KPI?

	Které dimenze ve vztahu k metrikám budou pro nákupní analýzy a plánování

relevantní?

	Jak zajistit aktivní servisní uskutečňování přípravy, výdaje a přísunu mate-
riálu na místa spotřeby? Jde např. o dělení, prvotní a povrchovou ochranu ma-
teriálu,  jeho  výrobní  úpravu,  kompletaci,  vytváření  optimálních  manipulačních
jednotek,  uskutečňování  doplňkových  dopravních  a  manipulačních  služeb,  po-
skytování materiálového poradenství apod.?

56

 Doporučení k návrhu a využití scénářů:

	scénáře, tj. sady analytických otázek, je třeba brát pouze jako pod-
klad pro řešení projektu a zejména jako náměty do diskusí se zá-
kazníkem,

	obsah scénářů je nezbytné modifikovat a konkretizovat podle kon-
krétní situace a konkrétního projektu, zejména doplnit další otázky ve
vztahu k aktuálním problémům řešení,

	kombinace otázek k typovým úlohám a k dané oblasti řízení se uka-

zuje jako efektivní,

	lze doporučit sady otázek dále aktualizovat na základě zkušeností

z projektů, které analytik nebo analytický tým realizuje,

	scénáře a otázky je velmi účelné modifikovat podle osob na stra-
ně zákazníka, jejich očekávání, role, kvalifikace, zkušeností, motiva-
ce na kooperaci (viz otázky v podkapitole 3.1),

	v  souvislosti  s  důrazem  na  řešení  v  kontextu  celé  firmy  je  rovněž
účelné podle situace a potřeby kombinovat i otázky ze scénářů pro
různé oblasti řízení.

5.5  Faktory, vlivy na řízení a řešení úloh

Faktor představuje v anatomii firmy souhrnné vyjádření pro organizační, technické
a  další  podmínky  řešení  jednotlivých  úloh,  problémů  a  projektů.  Účelem  faktorů  je
vymezit pro jednotlivé úlohy byznys i technické prostředí, které řešení úloh výrazněji
ovlivňuje a co je tedy účelné brát v úvahu.

5.5.1  Obsah, hlavní principy faktorů

Faktory zahrnují jak ty, které se váží k byznysu (např. kultura firmy), tak technické,
zejména IT faktory (např. aplikace podnikové analytiky). Faktory jsou dokumentovány
třemi hlavními atributy:

	obsahové vymezení faktoru, co zahrnuje a co ovlivňuje, což je velmi rozdílné,
protože faktorů je velmi široká škála a je tedy zřejmé, že se svojí podstatou musí
výrazně lišit,

	efekty, výhody, které existence nebo využití daného faktoru firmě přináší, což
mohou být finální ekonomické či mimoekonomické efekty nebo pozitivní dopady
na řešení úlohy, např. využití specifických softwarových nástrojů, aplikací apod.,

	problémy, omezení, které může existence nebo využití daného faktoru ve firmě
vyvolat,  např.  organizační  omezení  nasazení  některých  úloh,  omezení  finanč-
ních nebo personálních zdrojů pro řešení úloh apod.

Podstatné je, že efekty i problémy se obvykle podle jednotlivých oblastí řízení výraz-
ně liší, např. uplatnění určitých typů aplikací (ERP, BI), které jsou zde chápány jako IT
faktory, budou různé oblasti podnikového řízení ovlivňovat různým způsobem, a to je
třeba v analýze respektovat. Obdobně je tomu i u ostatních faktorů.

57

5.5.2  Přehled faktorů

V dalším přehledu uvádíme alespoň hlavní skupiny faktorů, které je účelné při analýze
uvažovat.

5.5.2.1  Byznys prostředí

Účelem je vymezit ekonomické, organizační, personální a obchodní faktory, které mohou
mít významný vliv na obsah a způsob řešení úloh v řízení firmy i v řízení IT. Patří sem:

	podnik,  jeho  základní  charakteristiky,  např.  velikost  podniku  (velký,  střední,
malý),  odvětvová  orientace  resp.  sektor  ekonomiky,  kde  podnik  realizuje  svůj
byznys,  původ  a  vlastnictví  podniku  (tuzemský,  nebo  zahraniční  vlastník),  síla
a náročnost konkurenčního prostředí, ve kterém podnik působí,

	stav  ekonomiky  a  trhu  představuje  zejména  vlivy  stavu  hospodářského  pro-

středí, stavu, vývoje a zejména změn legislativy, situace na IT trhu,

	úroveň řízení a organizace zahrnuje zejména faktory, jako jsou podniková kul-
tura,  podniková  organizace,  dislokace  podniku,  kompetenční  centra,  business
model firmy, jeho uplatnění, využití agilní organizace, reengineering podnikových
procesů, struktura uživatelů a úroveň jejich znalostí.

5.5.2.2  Zajištění IT služeb, architektury

Účelem je specifikovat možné přístupy a možnosti v přípravě IT služeb a zejména charak-
terizovat hlavní typy architektur jako nástrojů řízení rozvoje podniku a jeho IT. Patří sem:

	úroveň sourcingu zahrnuje formy sourcingu a samotný outsourcing, tedy zajiš-

ťování vybraných činností a služeb externími dodavateli,

	uplatnění architektur, tj. podnikové, architektury IT služeb, aplikační architektu-

ry, technologické, datové a softwarové architektury,

	cloud computing představuje poskytování sdílených, škálovatelných a flexibil-
ních IT služeb. Služby realizované v prostředí cloud computingu zahrnují Soft-
ware  as  a  Service,  Infrastructure  as  a  Service,  Platform  as  a  Service,  Mobilní
cloud computing.

5.5.2.3  IT aplikace

Představuje souhrn všech aplikací podniku, které tvoří jeho aplikační portfolio. Apli-
kační portfolio bývá také reprezentováno jako databáze nebo strukturovaný dokument,
využívaný pro řízení a plánování aplikací v průběhu jejich životního cyklu. Účelem je
vyhodnotit podstatné charakteristiky jednotlivých typů aplikací (ERP, CRM apod.) pro
řízení firmy a IT a formulovat tak důvody pro jejich implementaci v konkrétních podmín-
kách. Patří sem:

	transakční  aplikace  zahrnující  např.  celopodnikové  aplikace,  (ERP,  „Enterpri-
se Resource Planning“), systém řízení skladů (WMS, „Warehouse Management
Systém“) a další,

58

	řízení  externích  vztahů,  kam  spadají  typy  aplikací  jako  „eShop“,  internetový
obchod, elektronické zásobování („e-Procurement“), elektronická tržiště („e-Mar-
ketplace“),  řízení  dodavatelských  řetězců,  řízení  vztahů  se  zákazníky  (CRM,
„Customer Relationship Management“),

	infrastrukturní aplikace (ECM, Enterprise Content Management) představu-
jící nástroje jako např. digitalizace dokumentů („Imaging“), vytěžování dat („Data
Capture“),  systém  pro  správu  dokumentů  („Document  Management  System“),
správa  záznamů  („Records  Management“),  správa  elektronické  pošty  („e-mail
Management“), archivace („Archiving“), automatizace procesů („Workflow“), tý-
mová spolupráce („Groupware“), správa webového obsahu („Web Content Man-
agement“), správa znalostí („Knowledge Management“), správa multimediálního
obsahu („Digital Asset Management“), dynamický Case Management.

5.5.2.4  Podniková analytika

Do podnikové analytiky (BA, „Business Analytics“) spadají vybrané faktory, které rozho-
dujícím způsobem vytvářejí prostředí a ovlivňují řešení a využití podnikových analytic-
kých, plánovacích úloh, podnikového reportingu a pokročilé analytiky. Účelem je
analyzovat podstatné charakteristiky celého komplexu i jednotlivých typů nástrojů a pří-
stupů podnikové analytiky pro řízení firmy a IT. Patří sem zejména tyto nástroje a řešení:

	komponenty podnikové analytiky, které zahrnují např.: business intelligence
řešení,  self  service  business  intelligence  (SSBI),  competitive  Intelligence  (CI),
datový  sklad,  datové  tržiště,  datovou  pumpu  („Extract  Transform  Load“),  data
lake, testovací prostor Sandbox, případně další,

	pokročilá analytika, kde tyto faktory vymezují metody a případně nástroje, které
tvoří  určitou  nadstavbu  nebo  doplnění  k  základním  analytickým  nástrojům  ze-
jména business intelligence. Do těchto faktorů spadají: dolování dat, prediktivní
analytika, text mining, data science, celý koncept big data a další.

5.5.3  Příklady faktorů

Pro anatomii firmy jsou podstatné všechny skupiny faktorů, ale jako hlavní příklady zde
vybíráme faktory ze skupin „Byznys prostředí“ a „Podniková analytika“.

5.5.3.1  Faktor „Podniková organizace“

Jako příklad faktoru ze skupiny „Byznys prostředí“ uvádíme faktor „Podniková orga-
nizace“ podle (Synek, M.; Kislingerová, E.; kolektiv – Podniková ekonomika, 6. přepra-
cované a doplněné vydání – (C. H. Beck 2015) – ISBN9788074002748, kap. 9):

Obsahové vymezení

Podniková  organizace  je  prostředí  pro  racionální  kooperaci  pracovníků  a  pracovních
týmů, je výrazem efektivní dělby práce. Organizační struktura řeší problém přijatelné-
ho rozpětí řízení, tj. počtu pracovníků, který je schopen daný řídicí pracovník efektivně
řídit. Na základě toho vznikají organizační úrovně. To znamená:

59

	pokud  řídicí  pracovníci  řídí  větší  počet  pracovníků,  vzniká  nižší  počet  řídicích

úrovní, tj. plochá organizační struktura,

	naopak, pokud se počet řízených pracovníků na jednoho manažera snižuje, vzni-

ká větší počet řídicích úrovní, tj. strmá organizační struktura,

	organizační strukturu tvoří organizační jednotky v rozlišení na:

o  funkčně specializované organizační jednotky (finance, prodej, nákup atd.),
o  objektově  orientované  organizační  jednotky  (podle  zboží,  segmentů

trhu apod.), představují tzv. divize.

Efekty a výhody kvalitní podnikové organizace

	jasně definovaná a dokumentovaná podniková organizace přispívá k efektiv-

nosti řízení,

	kvalitní organizace přispívá ke zvyšování výkonnosti celého podniku včetně

využití metody Corporate Performance Management, CPM,

	řešení  organizace  navazuje  na  podnikovou  strategii,  resp.  je  její  součástí.
K efektivnímu promítnutí strategie do podnikové organizace se využívá metoda
Balanced Scorecard, BSC,

	kvalita  podnikové  organizace  se  zvyšuje  s  řešením  podnikových  procesů
a s procesním modelováním, které představují vstup do návrhů organizace,

	jasně definovaná podniková organizace přispívá k rychlé identifikaci problé-
mů, jejich zdrojů nebo příčin, a nakonec k jejich řešení v podnikovém řízení.

Problémy a omezení podnikové organizace

	zejména u větších podniků je potřeba, aby řešením a rozvojem organizace byli

pověřeni specialisté, případně specializované týmy,

	je  nezbytné  zvolit  pro  daný  typ  a  velikost  podniku  adekvátní  organizační

strukturu a formy (viz výše),

	podniková organizace má být natolik flexibilní, aby byla schopna rychle reago-

vat na vývoj podnikatelského prostředí a vztahů k externím partnerům,

	podniková organizace má respektovat i nové možnosti IT, zejména progresiv-

ních aplikačních software, obsahujících často nejlepší podnikové praktiky,

	podniková organizace musí, i s předstihem, reagovat na předpokládané po-

třeby v transformacích byznysu a byznys modelu dané firmy.

5.5.3.2  Faktor „Business Intelligence, BI“

Obsahové vymezení

Business intelligence (BI) představuje specifický typ aplikací a technologií, které téměř
výlučně podporují analytické a plánovací úlohy v podnikovém řízení. Na analytické
a plánovací úlohy, a rovněž na úlohy business intelligence, se uplatňují tyto nároky:

60

•	 zajistit hodnocení sledovaných podnikových ukazatelů, např. objemu tržeb,
počtu reklamací, počtu pracovníků atd. na definovaném (často maximálně mož-
ném) rozsahu podnikových dat,

•	 poskytovat možnost analyzovat tyto ukazatele podle různých hledisek, resp.
dimenzí  a  jejich  nejrůznějších  kombinací,  např.  objem  tržeb  podle  zákazníků,
zboží, teritorií, typů zakázek, prodejců, prodejních kanálů a dalších, na různých
úrovních detailu sledovaných hodnot, současně při přijatelné době odezvy,

•	 v  návaznosti  na  předchozí  bod  podporovat  vysokou  flexibilitu  obchodních

a dalších aktivit pracovníků podniku,

•	 analyzovat  vývoj  podnikových  ukazatelů  a  jejich  výkyvů  v  čase,  realizovat
např. meziroční srovnání, různé typy indexů, identifikovat sezónní vlivy atd.

Zatímco  transakční  aplikace  ve  svých  databázích  vytvářejí  a  následně  zpřístupňují
nová data, analytické aplikace využívají již existujících databází transakčních aplikací,
transformují je pro potřeby analytických a plánovacích úloh. Business intelligence (BI)
představuje  sadu  procesů,  know‑how,  aplikací  a  technologií,  jejichž  cílem  je  účinně
a účelně podporovat řídicí aktivity ve firmě. Podporují analytické, plánovací a rozhodo-
vací činnosti podniků na všech úrovních a ve všech oblastech podnikového řízení.

Efekty a přínosy BI pro kvalitu řízení podniku

	Umožňuje lépe pochopit a analyzovat podstatu vlastní obchodní a manažer-
ské činnosti, proniknout do jejich hlubších a složitějších souvislostí, umožňuje
posun k multidimenzionálnímu řízení v reálném čase,

	uplatnění časové dimenze nabízí sledování vývojových trendů z nejrůznějších

pohledů,

	analytická  pravidla  podle  stanovených  limitních  hodnot  jednotlivých  ukazatelů
a jejich dimenzí umožňují upozorňovat na kritické nebo mimořádné stavy,
	možnosti rychle se pohybovat na různé úrovni detailu informací (agregačních

úrovních), odpovídajících právě řešenému problému v řízení,

	podpora řešení skrytých problémů na základě identifikace složitých závislostí mezi
daty, odhalováním podobností mezi např. zákazníky, obchodními případy apod.,
	kvalifikační efekty – BI přirozenou cestou posiluje schopnosti manažerů a spe-

cialistů při řešení svých úloh „multidimenzionálně uvažovat“,

	aplikace BI pro práci s ukazateli ve vazbě na podnikové procesy přinášejí i do
manažerské  sféry  své  specifické  efekty  a  racionalizují  jak  řízení  jednotlivých
dílčích úloh a procesů, tak celého podniku,

	integrační  efekty  podporou  integrace  dezintegrovaných  informačních  zdrojů

(např. z věcného či geografického hlediska).

Otázky, problémy a omezení spojené s BI

	Úspěšnost BI řešení silně závisí na zájmu uživatelů a zejména vedení podniku

BI implementovat,

61

	aplikace BI jsou velmi silně závislé na kvalitě dat transakčních systémů, ze

kterých data čerpají,

	řešení BI jsou velmi náročná na konsolidaci vstupních dat z různých datových

zdrojů,

	efekty BI jsou obtížně měřitelné a mají spíše měkký charakter,

	pro  úspěšnost  BI  je  podstatné  zvolit  správně  přístup  k  řešení  a  navrhnout

správně architekturu.

 Doporučení k analýze faktorů:

	analýza  faktorů  v  rámci  projektu  nepředstavuje  povinnou  nebo
častou součást jeho řešení, na druhé straně může upozornit na ně-
které  problémy  nebo  rizika,  které  mohou  být  základem  budoucích
neúspěchů v řešení,

	nastavení faktorů, zejména jejich plus a minus charakteristiky, je
nezbytné modifikovat podle konkrétního prostředí a situace. Z po-
hledu analýzy mohou být právě tyto charakteristiky hodně významné,
neboť řeší, proč právě do určité technologie nebo konceptu investo-
vat čas a peníze, a naopak jaké problémy mohou přinést,

	faktorů je v nabídce relativně velké množství, a proto je dobré si nej-
prve  zmapovat  prostředí  a  pak  se  rozhodnout,  které  ze  skupin
vybrat a brát v úvahu.

5.6  Metriky – ukazatelé a jejich dimenze

Metrika se v anatomii firmy chápe jako sledovaná a měřená hodnota ukazatele pro po-
třeby řízení firmy. K ukazatelům se váží dimenze pro jejich identifikaci, analýzy a pláno-
vání. Nejvýznamnější metriky vzhledem ke kvalitě řízení a výkonnosti firmy se označují
jako KPI („Key Performance Indicator“).

5.6.1  Obsah, hlavní principy metrik

Smyslem metrik je vytvořit kvalitní podklady zejména pro analytické a plánovací úlohy
v řízení firmy. Metriky jsou dokumentovány těmito atributy:

	obsahové vymezení metriky, její význam a smysl pro řízení firmy,

	kalkulační předpisy, pokud jde o metriku, která nevzniká z primárního zdroje,

ale výpočtem, např. v rámci analytické nebo plánovací úlohy,

	související metriky – s ohledem na velké množství metrik je účelné je sdružovat
podle obsahové příbuznosti nebo jsou odvozeny kalkulacemi pro rychlejší orien-
taci v celém systému metrik,

	adekvátní dimenze pro metriku,

62

	zdroje dat pro metriku představují databáze, dokumenty, výkazy, které jsou sou-

částí komponenty „Dokumenty“ (viz dále).

Dimenzí se rozumí analytické hledisko pro identifikaci a hodnocení sledovaných uka-
zatelů a je tak součástí de facto každé metriky. Má obvykle hierarchickou strukturu
prvků. Smyslem dimenzí je v kombinaci s ukazateli (v rámci metrik) vytvořit základnu
pro komplexnější analýzy a plánování firmy. Dimenze jsou dokumentovány těmito
atributy:

	obsahové vymezení a účel dimenze,

	prvky dimenze a jejich (hierarchická) struktura,

	zdroje dat pro dimenzi,

	kalkulace s prvky dimenze (pokud má smysl),

	atributy dimenze – struktury vět na jednotlivých úrovních hierarchie.

5.6.2  Přehled metrik

V řízení firmy se samozřejmě využívá značné množství metrik. Proto se v této podkapi-
tole omezujeme pouze na přehled vybraných z nich s tím, že jejich obsahové vyme-
zení podle výše uvedených atributů ponecháváme na další díl těchto textů, tedy „IT
a anatomie firmy – obsah“. Další přehled pouze příkladů vybraných metrik je rozdělen
podle jednotlivých oblastí řízení.

	Metriky finančního řízení podniku, např.:

o  hospodářský výsledek,
o  obrat,
o  objem nákladů podniku,
o  objem mezd,
o  souhrnné metriky, zejména Market Value Added (MVA), Economic Value
Added (EVA), Earnings Before Interest, Taxes, Depreciation and Amorti-
zation (EBITDA),

o  objem pohledávek a závazků.
	Metriky řízení prodeje v podniku, např.:
o  počet zákazníků podniku,
o  počet obchodních transakcí,
o  tržby z prodeje zboží a služeb,
o  náklady prodeje zboží a služeb,
o  počet reklamací a objem reklamovaného zboží.

	Metriky řízení marketingu, např.:

o  pozice podniku na trhu,
o  úspěšnost prodejní kampaně,

63

o  marketingové náklady na objednávku,
o  časové metriky Call centra.

	Metriky řízení nákupu zboží, např.:

o  objem nákupů za stanovený čas,
o  náklady na zajištění nákupu zboží,
o  počet dodavatelů,
o  počet reklamací a objem reklamovaného zboží.

	Metriky řízení skladů, např.:
o  stav zásob zboží,
o  průměrná zásoba,
o  náklady na zásoby,
o  obrátka zásob.

	Metriky řízení lidských zdrojů, např.:

o  počty pracovníků,
o  pracovní fond v člověkodnech,
o  fluktuace zaměstnanců,
o  náklady na nábor,
o  objem kursů a programů a náklady na kursy a kvalifikační programy.

	Metriky řízení majetku, např.:

o  celkový objem majetku podniku,
o  objem odpisů majetku,
o  úroveň využití majetku,
o  objem investic,
o  objem oprav a údržby.

	Metriky řízení dopravy a vnitropodnikové logistiky, např.:

o  náklady na logistiku,
o  náklady na přepravu a dopravu,
o  výkon přepravy,
o  podíl využití nákladního auta.

	Metriky řízení spotřeby energií, např.:

o  objem spotřeby energií podle druhů,
o  objem spotřeby tepla,
o  počty měřidel,
o  plánovaná potřeba energií,
o  objem vlastní výroby energií.

64

5.6.3  Přehled dimenzí

Následující přehled obsahuje vybrané dimenze podle skupin:

	Základní dimenze, např.:

o  časová dimenze,
o  regiony,
o  odvětví ekonomiky,
o  měrné jednotky.
	Podniková organizace, např.:
o  podnikové cíle,
o  podnikové procesy, podnikové útvary,
o  zisková střediska, nákladová střediska,
o  vnitropodnikové zakázky.

	Ekonomické dimenze, např.:

o  účtová osnova, účetní období,
o  měny,
o  nákladové druhy,
o  druhy cen pro oceňování majetku,
o  faktury přijaté, faktury vydané, dobropisy.

	Externí partneři, např.:

o  zákazníci, dodavatelé,
o  veřejná správa,
o  finanční ústavy.
	Lidské zdroje a mzdy, např.:
o  zaměstnanci,
o  kvalifikační struktura,
o  věková struktura,
o  typy školení,
o  mzdové složky.
	Obchodní dimenze, např.:

o  zboží, materiály, služby,
o  segmenty trhu,
o  obchodní zástupci,
o  obchodní kanály,
o  dodací podmínky INCOTERMS,
o  platební podmínky,

65

o  nákupní objednávky,
o  dodací listy přijaté, dodací listy vydané,
o  druhy reklamací k dodavatelům, druhy reklamací přijaté od zákazníků.

	Dimenze skladového hospodářství, např.:
o  sklady, skladová (úložná) místa,
o  skladovací technologie,
o  příjemky, výdejky.
	Dimenze majetku, např.:

o  druhy majetku, úrovně stavu majetku,
o  odpisové třídy majetku,
o  investice, opravy.

	Dimenze dopravy, např.:

o  poskytovatelé dopravních služeb,
o  dopravní prostředky, druhy PHM.

	Hospodaření s energiemi, např.:

o  druhy energií,
o  dodavatelé energií,
o  druhy měřidel.

5.6.4  Příklad metriky

Příkladem dokumentace metriky jsou „Tržby z prodeje zboží a služeb“:

Obsahové vymezení metriky

•	 Tržby z prodeje zboží a služeb jsou tržby podle sortimentních položek, regionů,

útvarů firmy, prodejců a podíly jednotlivých položek na celkových tržbách.

Související metriky

•	 Vývoj tržeb v čase představuje tržby z prodeje v časovém vývoji (dny, měsíce,

kvartály, roky), meziroční a další srovnání, indexy,

•	 plnění  prodejních  plánů  je  porovnání  plánovaných  tržeb  a  skutečných  podle

sortimentních položek, prodejen, prodejců, regionů,

•	 profitabilita jsou tržby očištěné o úroky, daně, odpisy = Čisté tržby – (úroky +

daně + odpisy),

•

tržby na transakci udává průměrnou výši tržby na obchodní transakci.

Zdroje dat pro metriku, např.:

•	 účetní evidence,

•	 evidence obchodních případů Prodej,

66

•	 finanční výkazy podniku,

•	 finanční plány a rozpočty.

Adekvátní dimenze, např.:
•	 časová dimenze,

•	 zboží, služby,

•	 účtová osnova,

•	 měny,

•	 zákazníci,

•

regiony,

•	 obchodní zástupci,

•	 obchodní kanály.

 Doporučení k analýze a návrhu metrik:

	analýza a návrh metrik je naprosto běžnou součástí každého pro-

jektu,

	postavení  metrik  a  tím  i  způsob  jejich  analýzy  se  ale  liší  pod-
le typů úloh. Zatímco v evidenčních a transakčních úlohách jsou
předmětem vytváření a zpracování, u analytických a plánovacích
úloh je cílem jejich efektivní využití ve firemních analýzách a plánech,

	na  druhé  straně  lze  v  současné  době  předpokládat,  že  u  naprosté
většiny řešení informačních systémů firmy budou součástí i analytic-
ké a plánovací úlohy a aplikace na bázi business intelligence. Je pak
velmi  účelné,  když  návrh  a  implementace  evidenčních  a  trans-
akčních úloh a jejich datových bází, nejčastěji s využitím ERP, zo-
hledňuje potřeby řešení analytických a plánovacích úloh. Pokud
se úpravy dat vzhledem k těmto úlohám provádějí až následně, je to
zbytečně pracovně i nákladově náročné,

	při analýze a návrhu metrik je účelné vždy dobře rozmyslet, které
metriky vybrat a které se skutečně v řízení firmy využijí. V řadě
případů se lze setkat s tím, že se sbírá a uchovává vše, co lze získat
a případně měřit, což pak zbytečně komplikuje a zatěžuje systém ří-
zení. Proto je mezi atributy komponenty „Metrika“ uveden na prvním
místě „účel“ – k čemu bude sloužit,

	v případě metrik a jejich využití v analytických a plánovacích aplika-
cích je jednou z klíčových otázek kvalita jejich zdrojů, tj. jak jsou
vytvářeny v evidenčních, respektive v transakčních úlohách. Analýza
kvality dat tak patří k podstatným součástem celého řešení.

67

5.7  Role, lidé v podniku

Role určují, jaké funkce bude mít pracovník v řešení problémů v určité specifické oblas-
ti a jaké jsou nároky na jeho znalosti. Smyslem rolí je přesněji vyjádřit, jak jsou, nebo
mají být, úlohy v řízení podniku personálně zajištěny, resp. jaká je personální náročnost
na realizaci jednotlivých úloh.

5.7.1  Obsah, hlavní principy rolí

V  každé  pracovní  pozici  může  pracovník  vykonávat  řadu  různých  rolí.  Rolím  jsou
přiřazovány pracovní činnosti a zodpovědnosti v podniku a jsou tak základem pro
návrhy a úpravy organizace, změny náplně činností a zodpovědností podle potřeb a si-
tuace firmy apod.

Role jsou dokumentovány těmito atributy (viz další příklad):

	funkční náplň role, co daná role vykonává a za co má být zodpovědná,

	požadované znalosti a dovednosti role,

	kompetence role.

5.7.2  Přehled rolí

V dalším přehledu jsou uvedeny vybrané skupiny rolí s příklady:

	Řídicí pracovníci podniku:

o  zahrnují zejména tyto role: vlastník, generální manažer (CEO, „Chief Exe-
cutive  Officer“),  finanční  manažer  (CFO,  „Chief  Financial  Officer“),  ma-
nažer  marketingu  (CMO,  „Chief  Marketing  Officer“),  manažer  obchodu,
personální  manažer  (HRM,  „HR  Manager“),  manažer  výroby,  technický
manažer, manažer dopravy, manažer logistiky.

	Specialisté:

o  patří sem např. tyto role: pracovník logistiky („Logistics Controller“), podni-
kový právník, personalista, obchodník, ekonom, účetní, správce majetku,
pracovník útvaru marketingu, controller.

5.7.3  Příklad role: Generální manažer (CEO, Chief Executive Officer)

Funkční náplň role

Generální manažer formuluje a prověřuje celopodnikové strategie a plánuje, řídí, koor-
dinuje a hodnotí aktivity podniku s podporou celého týmu manažerů, obvykle podle zá-
kladních pokynů, stanovených vlastníky nebo jejich zástupci, tj. správními radami nebo
jinými řídicími orgány. Generální manažer vykonává zejména tyto činnosti:

	určování cílů, strategií, politik a programů,

	plánování, řízení a koordinace jednotlivých funkcí podniku,

68

	monitorování a hodnocení výkonu, prověřování činností a výsledků podniku,

	schvalování  rozpočtů,  kontrolování  výdajů  a  zajišťování  účelného  využívání

zdrojů včetně IT,

	schvalování  materiálních,  lidských  a  finančních  zdrojů  pro  realizaci  strategií

a programů,

	výběr nebo schvalování výběru podřízených řídicích pracovníků.

Požadované znalosti role

	metody podnikového managementu,

	metody podnikové ekonomiky, controllingu,

	statistické metody,

	vedení a psychologie práce v týmech.

5.7.4  Podstatné vazby komponenty na ostatní

Hlavní vazby jsou i zde k jednotlivým úlohám. Využijeme obrázku k úloze prodejních
transakcí (Obrázek 5‑6).

Obrázek 5‑6: Role v úloze prodejních transakcí

U každé role je uvedena její účast na úloze na bázi tzv. RACI matice. Symboly mají
následující význam:

	I – „Informed“ – role (např. Generální manažer) je o průběhu úlohy pouze infor-

mována,

	A – „Accountable“ – role (v tomto případě Obchodní manažer) za průběh úlohy

prodejních transakcí plně zodpovídá,

	C – „Consulted“ – role (např. Ekonom, nebo Metodik) průběh úlohy konzultuje,

	R – „Responsible“ – role (např. Obchodník, nebo Manažer marketingu) úlohu

vykonává a za její vykonání je zodpovědný.

Takto  je  v  anatomii  firmy  vymezena  účast  rolí  na  každé  úloze.  Souhrnný  pohled  na
účast  rolí  v  úlohách  řízení  prodeje  dokumentuje  Obrázek  5‑7.  V  záhlaví  tabulky  jsou
uvedeny pouze zkratky jednotlivých úloh.

69

Obrázek 5‑7: Role v řízení prodeje

 Doporučení k návrhu a využití rolí:

	specifikace  rolí  je  v  řešení  projektů  běžnou  součástí,  neboť  musí
určovat, kompetence, práva a povinnosti ve vztahu k aplikacím a da-
tům a přístupů k nim,

	zatímco  předchozí  bod  můžeme  považovat  za  pojetí  rolí  v  užším,
spíše technologickém smyslu, role v širším pojetí (s funkční náplní
a požadovanými znalostmi) již tak běžnou součástí nejsou,

	investice do takového detailnějšího vymezení rolí se někdy u pro-
jektů nebo mimo ně zvažují, na druhé straně dobře slouží při kon-
cipování organizace firmy či jejích změnách nebo při formulaci kvali-
fikačních a rekvalifikačních programů, při řešení kariérních map za-
městnanců firmy apod.,

	současně  je  třeba  i  připomenout  situace,  kdy  analytik,  připravující
implementaci určité aplikace, je postaven zákazníkem před otázku:
„A co musí k tomu naši lidé umět?“ Pak je dobré mít možnost sáh-
nout do nějakého systematicky připravovaného zdroje…,

	podle  vyjádření  některých  zákazníků  je  problémem  dokumentace
rolí  jejich  nedostatečná  aktualizace  a  v  jejím  důsledku  i  nakonec
odmítání systému rolí jako celku. I přes často objektivní důvody (ne-
dostatek času a kapacit), by bylo ale dobré u tohoto konceptu zůstat
a rovněž aktualizaci rolí věnovat nezbytný čas a prostor.

5.8  Data, dokumenty

Dokumentem  se  v  anatomii  firmy  rozumí  jakákoli  datová  struktura,  která  představuje
podstatný vstup nebo výstup úloh řízení podniku a jeho IT. Touto datovou struktu-
rou může být dokument v papírové nebo elektronické formě, databáze, report, tabulka,
graf, schéma, obraz.

70

5.8.1  Obsah, hlavní principy dokumentů

Smyslem dokumentů je přesněji definovat požadované vstupy a očekávané výstupy
jednotlivých úloh a současně vytvořit celkovou představu o datové základně firmy. Do-
kumenty jsou charakterizovány těmito atributy:

	účel dokumentu,

	obsah dokumentu – alespoň hlavní datové položky,

	zpracování dokumentu, resp. kde dokument vzniká nebo ve které úloze se s do-

kumentem pracuje.

5.8.2  Dokumenty řízení podniku

S ohledem na značný počet dokumentů, které tvoří anatomii firmy, jsou rozděleny do
jednotlivých skupin. Dokumenty a data řízení podniku tvoří informační základnu a vstu-
py a výstupy úloh jeho řízení. Další přehled obsahuje příklady nejčastěji používaných
dat a dokumentů podle oblastí řízení:

	Strategické a organizační dokumenty, např.:

o  podniková strategie a dílčí strategické dokumenty,
o  organizační a řídicí dokumenty podniku,
o  procesní dokumentace podniku,
o  katalog podnikových cílů, byznys model podniku, provozní model podniku.

	Dokumenty a data finančního řízení, např.:
o  účetní doklad, účetní evidence,
o  evidence úvěrů,
o  dokumenty styku s bankami,
o  evidence závazků a pohledávek,
o  inkaso a inkasní kalendáře,
o  rozvaha, výsledovka,
o  finanční plány a rozpočty.

	Dokumenty a data pokladní a mzdové, např.:

o  pokladní evidence, pokladní závěrka,
o  mzdové evidence,
o  mzdové výkazy, mzdové plány.
	Dokumenty a data řízení prodeje, např.:

o  evidence zákazníků,
o  evidence obchodních případů Prodej,
o  evidence obchodních příležitostí,
o  evidence zboží a služeb, ceníky zboží a služeb,

71

o  dodací a platební podmínky,
o  evidence reklamací zákazníků,
o  prodejní objednávka, dodací list vydaný, prodejní faktura,
o  standardní reporting prodeje,
o  plány a odhady objemu prodeje.

	Dokumenty a data řízení nákupu, např.:

o  evidence dodavatelů, evidence dodavatelských cen,
o  evidence reklamací na dodavatele, evidence požadavků na nákup,
o  evidence nákupu,
o  nákupní objednávka, dodací list přijatý, nákupní faktura,
o  přehledy blokování a odblokování zásob,
o  plány nákupu.

	Dokumenty a data řízení skladů, např.:

o  evidence skladů a skladových zásob,
o  evidence ceníků materiálů,
o  evidence příjemek, výdejek,
o  podklady pro řízení úložných míst, likvidace zásob,
o  výkazy skladu,
o  dokumentace inventur skladů,
o  expediční listy, skladová evidence na expedičních skladech, soupisky zá-

sob na expedičních skladech.
	Dokumenty a data personálního řízení, např.:
o  podniková personální evidence,
o  evidence pracovních míst,
o  evidence školení a kursů,
o  evidence personálních a školicích agentur,
o  požadavky na pracovníka,
o  podklady pro osobní údaje pracovníků, přijímací protokol atd.,
o  podklady pro rekvalifikační programy,
o  personální podklady – dovolené, důchody, nemoci,
o  personální výkazy,
o  personální plány.

	Dokumenty a data řízení majetku, např.:

o  evidence majetku – technická, operativní, účetní,
o  evidence investic,

72

o  evidence vlastních / dodavatelských oprav a údržby,
o  pasporty majetku, dokumentace strojů, zařízení, budov, pozemků,
o  změny, převody, přírůstky a vyřazení majetku,
o  odpisy majetku,
o  výkazy majetku, požadavky na investice a údržbu,
o  investiční záměry, plány investic,
o  plány oprav a údržby.

	Dokumenty a data řízení marketingu, např.:
o  evidence marketingových akcí,
o  obchodní příležitosti, potenciální zákazníci,
o  informace o zákaznících a trhu,
o  cestovní zprávy,
o  dokumentace obchodních zástupců,
o  dokumenty řízení marketingových kampaní,
o  marketingové průzkumy, dotazníky a jejich analýzy,
o  návrhy cen a příprava ceníků,
o  plán marketingových akcí.
	Dokumenty a data řízení dopravy, např.:

o  evidence dopravců,
o  evidence vlastních dopravních prostředků,
o  evidence CCS a zahraničních kreditních karet,
o  evidence požadavků na dopravu, objednávka na dopravu,
o  kalkulace nákladů a specifikace dopravní cesty,
o  dokumenty o CCS a o kreditních kartách,
o  přehledy a výkazy o dopravě, plány dopravy.

	Dokumenty a data řízení energií, např.:

o  evidence  a  správa  měřidel,  evidence  spotřeby  energií,  evidence  výroby

tepla,

o  dokumenty instalovaných měřidel,
o  očekávaná potřeba energií, požadavky na spotřebu energií,
o  rozúčtování spotřeby na organizační jednotky,
o  plánování spotřeby energií v roce.

5.8.3  Podstatné vazby komponenty na ostatní

Souhrnný pohled na dokumenty a data spojená s úlohami v řízení prodeje dokumen-
tuje Obrázek 5‑8. Hodnoty prvků jsou zřejmé – I – vstup, O – výstup, U – update.

73

Obrázek 5‑8: Vstupy a výstupy úloh řízení prodeje

 Doporučení k analýze a návrhu dokumentů:

	 analýzy a návrhy dat, datových zdrojů a dokumentů jsou nezbytnou sou-

částí prakticky každého projektu,

	 zejména u dat, resp. datových bází přistupuje celý komplex otázek datové-
ho modelování a návrhu databází, které na tomto místě neřešíme, ale zdů-
razňujeme dokonalé pochopení podnikového obsahu dokumentů a dat,
	 právě doménová znalost obsahu je i podstatným předpokladem pro kva-
lifikovaný návrh databází, jejich struktur, vazeb, a nakonec i technické re-
alizace,

	 je dobré si uvědomit i různou pozici dat vzhledem k uvedeným typům
úloh  –  klasické  vstupy  a  výstupy  (evidenční,  transakční),  datové  zdroje
(reportingové, analytické, plánovací),

	 s dokumenty a daty je účelné spojovat i řadu dalších charakteristik nebo
parametrů, jako např. metadata, role, kdo zodpovídá za data, kvalita dat,
umístění dat, objem dat, nároky a možnosti transformací dat včetně sub-
jektů, kde transformace probíhají, nároky a problémy spojené s migrací dat
(např. při přechodu na novou aplikaci).

74

5.9  IT aplikace a nástroje

IT aplikace a nástroje znamenají konkrétní produkty a na tomto místě představují pou-
ze praktické příklady. V rámci anatomie firmy mají pouze dokumentační nebo demo
charakter pro lepší představu některých typů úloh. V anatomii firmy, v rámci komponent
„Faktory“, se rozlišují typy IT aplikací a nástrojů s jejich základními charakteristikami,
pozitivy a negativy. V tomto případě nejde o přehled nabídky trhu. Pro tyto účely pou-
ze odkazujeme na zavedené a běžně využívané portály, jako např. na adrese https://
www.systemonline.cz/.

 Doporučení k analýze, návrhu a využití IT aplikací a nástrojů:

	na tomto místě jde pouze o dokumentaci funkcionality vybraných

typů aplikací a nástrojů, tedy nikoli o celkový přehled nabídky,

	součástí analýzy musí být vždy kvalifikované posouzení možností
a omezení daných produktů vzhledem k požadované  funkcionalitě
informačního systému,

	analýzu je účelné uskutečňovat vzhledem k funkcím podle typů
úloh, neboť typy úloh už svým způsobem napovídají, o jaké aplikace
převážně půjde, např. ERP, CRM, e‑Business, business intelligence
a další.

5.10  Metody, metodiky, vzory – manažerské i IT

Metody  jsou  v  anatomii  firmy  souhrnným  označením  pro  manažerské,  analytické
a plánovací metodiky, metody, normy a rámce aplikovatelné v rámci uvedených typů
úloh a v různých oblastech řízení firmy.

Smyslem komponenty je určit, které z metod, metodik, norem a rámců je efektivní nebo
nutné u jednotlivých úloh využívat a současně definovat metodickou základnu, na níž je
účelné řízení firmy i IT provozovat a rozvíjet.

Metody zde nepředstavují, s ohledem na jejich obrovské množství, obdobně jako u apli-
kací, jejich celkovou nabídku, ale pouze ty, které považujeme vzhledem k účelu ana-
tomie firmy za nejvýznamnější. Celková nabídka je např. obsahem portálu na adrese
https://www.valuebasedmanagement.net/. Mezi hlavní manažerské metody patří např.
řízení  podnikové  výkonnosti  (CPM,  „Corporate  Performance  Management“),  metoda,
uplatňovaná ve strategickém řízení (BSC, „Balanced Scorecard“), benchmarking, seg-
mentace zákazníků, dodavatelem řízené zásoby (VMI, „Vendor Managed Inventory“),
řízení nákladů podle činností (ABC, „Activity Based Costing“) metoda hodnocení nákla-
dů (TCO, „Total Cost of Ownership“) a řada dalších.

75

 Doporučení k využití metod a metodik:

	s výběrem a využitím nejrůznějších metod a metodik je spojena celá
řada otázek a doporučení, základní z nich již byly obsahem podka-
pitoly 3.7 „Otázky analýzy ve vztahu k metodické základně“,

	na  tomto  místě  už  je  třeba  jen  doplnit,  že  existují  různé  metodiky,
různá terminologie, rozdíly podle typů podniků, podle aplikací, podle
rozsahu  aplikací,  podle  dodavatelů  atd.  Je  tedy  zásadní  otázkou
vybrat takové z nich, které budou nejlépe odpovídat danému pro-
středí a potřebám firmy. Pro tyto účely lze doporučit publikaci „BU-
CHALCEVOVÁ, A.: Metodiky vývoje a údržby informačních systémů.
Praha, Grada 2004. ISBN 80‑247‑1075‑7“,

	základní pravidlo pro užití metod a metodik je, že mají práci ana-
lytika zkvalitnit a zefektivnit, nikoli překážet (což se ne vždy daří…).

5.11  Od komponent k procesům

Základní součástí anatomie firmy je vymezení a charakteristiky jednotlivých kompo-
nent. Ty mohou představovat pro další řešení jednotlivé stavební bloky pro navrho-
vání a realizaci větších celků. Příkladem je využití úloh pro návrhy základních, případně
i podpůrných procesů firmy apod. Hlavní místo při těchto úvahách má řešení základ-
ních („core“) procesů firmy. Zrekapitulujme jejich hlavní charakteristiky:

	jsou to procesy, které přinášejí firmě hlavní efekty (výnosy, zisky,…) a firma svý-

mi zdroji a svojí existencí na nich de facto stojí,

	jsou  to  procesy,  které  vesměs  procházejí  napříč  celou  firmou,  nebo  alespoň

větším počtem oblastí řízení a útvarů firmy,

	jsou  to procesy  obvykle  velmi  komplexní a  komplikované, obvykle  mají  také

nejvyšší prioritu při procesním modelování,

	ve středních a větších firmách se počet těchto procesů pohybuje kolem 6 (celko-

vý počet procesů je obvykle kolem 70),

	řešení základních procesů obvykle vychází ze strategie a nastaveného byznys

modelu firmy,

	efektivita  a  kvalita  řešení  a  nastavení  základních  procesů  výrazně  ovlivňuje

kvalitu, efektivitu a úspěšnost celé firmy,

	řešení základních procesů má podstatné dopady i do organizace firmy, perso-
nálních struktur a programů, datové základny a následně do nastavení a využití
adekvátních IT aplikací.

Příklad takového základního procesu, vyjádřeného bez obvyklých formálních ná-
roků a zjednodušeného, dokumentuje Obrázek 5‑9. Čísla na obrázku ukazují vybrané
body, k nimž přiřadíme jednotlivé úlohy – jako již zmíněné stavební bloky (viz dále).

76

Je dobré také poznamenat, že takový koncept se rámcově uplatňuje např. u servisně
orientované architektury (SOA), u koncepce mikroslužeb apod. V daném případě nám
ale nejde o technologickou, jde výlučně o obsahovou stránku věci.

Obrázek 5‑9: Základní proces: Obchodní zakázka

K obsahu procesu „Obchodní zakázka“ podle uvedených čísel pouze jako příklady uvá-
díme možné využití jednotlivých úloh (v závorce jsou příslušné oblasti řízení):

1)  Vytvoření zakázky (Řízení prodeje):

	příchod objednávky:

o evidence zákazníků, zboží, služeb, prodejů a prodejních operací,
o realizace prodejních transakcí,

	zjištění stavu zásob:

o evidence skladů a skladových zásob.

2)  Nákup chybějícího zboží (Řízení nákupu):

	objednání a přijetí objednaného zboží, realizace nákupních transakcí.

3)  Příjem dodaného zboží na sklad (Řízení skladů):

	příjem zboží na sklad:

77

o realizace skladových transakcí,
o blokování zboží a materiálu podle požadavků a zakázek.

4)  Rezervace zboží na zakázku (Řízení prodeje):

	příprava zboží na zakázku – expediční příkaz.

5)  Vyskladnění zakázky (Řízení skladů):

	zpracování výdejky a vyskladnění, realizace skladových transakcí.

6)  Odeslání zakázky s dokumentací (Řízení prodeje):

	příprava dokumentace (dodací list, faktura), odeslání, prodejní transakce.

 Doporučení k řešení podnikových procesů:

•  základní otázky a doporučení byly již obsahem podkapitoly 3.8 a ná-

sledně jsou i v této podkapitole 5.3,

•  úlohy a další komponenty anatomie firmy představují stavební bloky,

z nichž lze sestavovat vyšší celky, např. základní i podpůrné proce-
sy řízení firmy, organizační struktury atd.,

•  vytváření základních procesů s uplatněním uvedených úloh není samo-
zřejmě nijak závazné, na druhé straně již vymezený obsah úloh podle
jejich typů může přispět k lepšímu a rychlejšímu pochopení obsahu
celého procesu a jeho logiky,

•  zřejmou výhodou ve využití úloh pro formulování zejména základních
procesů je to, že jsou svázány i s dalšími podstatnými komponen-
tami řízení, zejména rolemi, dokumenty, metrikami, což pak nabízí
komplexní pohledy a podklady i k celkovým úpravám řízení firmy
(např. systematicky navrhované organizaci, systému metrik, systému
dokumentace apod.),
jak jsme naznačili dříve, typy úloh mohou být přesněji svázány s ade-
kvátními aplikacemi (ERP, BI atd.), což se pak přenáší i do efektivní-
ho řešení, zejména těchto komplexních procesů.

•

78

Část B:
IT a anatomie firmy – typy úloh

Část  B  je  zaměřena  na  dílčí  charakteristiky  jednotlivých  typů  úloh  v  rámci  anatomie,
které  byly  vymezeny  již  v  podkapitole  5.3.1  „Kategorizace  úloh“.  Pro  rekapitulaci
znovu použijeme následující obrázek:

Obrázek 0‑1: Kategorizace úloh podnikového řízení

Pro každý z typů úloh mají jednotlivé kapitoly odpovědět na tyto otázky:

1)  Jaká je podstata a účel daného typu úlohy?

2)  Co je základním obsahem úlohy?

3)  Jak schematicky demonstrovat obsah úlohy?

4)  Jaké analytické otázky (scénář) se váží k úloze?

5)  Jaké IT aplikace a nástroje se obvykle využívají pro implementaci úlohy?

6)  Jaké jsou hlavní doporučení pro řešení a využití úlohy?

79

6. Evidenční úlohy

 Evidenční úlohy představují vytváření a aktualizace databází a zpracování

dílčích dotazů do databází (např.: vytvoření a aktualizace databáze zákaz-
níků, zboží, dodavatelů apod.).

Účelem evidenčních úloh je rychlé, operativní a kvalitní, pořizování a aktu-
alizace dat v databázích firmy a zajištění odpovědí na dotazy do databází
s krátkou nebo přiměřenou dobou odezvy.

6.1  Obsah evidenčních úloh

Evidenční  úlohy  zajišťují  na  základě  vstupů  následující  hlavní  funkce  a  klíčové
aktivity:

	pořizování nových dat v databázích, resp. záznamů, např. nového zákazníka,

materiálu, zboží atd. na základě vstupních dokumentů,

	aktualizace jednotlivých údajů na základě změnových dat, např. aktualizace
dat o zákazníkovi na základě nových skutečností, aktualizace dat o nových pro-
duktech a poskytovaných službách apod.,

	vytváření  základních  přehledů,  převážně  jednoduchých  kontrolních  reportů

nad daty v databázích,

	zajištění systému kontrol nad vstupními daty do databází, a to kontrol věcné
správnosti  údajů  (kontroly  dat,  adres  apod.),  kontrol  formálních  náležitostí  do-
kumentů,  např.  náležitosti  faktury,  kontroly  na  konsistenci  dat,  např.  vzhledem
k existujícím číselníkům, kontroly podle požadavků legislativy a další. Součástí
musí být zpracování protokolů o zjištěných chybách,

	zajištění přístupů do databází uživatelům a případně externím partnerům podle
přístupových pravidel a dotazy na dílčí údaje podle definovaných filtrů, požadav-
ků na kalkulace apod.,

	protokolování provedených změn v databázích s určením obsahu změny, času

realizace i zodpovědné role za změnu,

	řešení oprav nebo úprav vstupujících dat do databází podle výsledků vstupních
kontrol, resp. protokolů chyb, podle stanovených pravidel nebo aktuálních poža-
davků uživatelů na změny.

6.2  Příklad: Evidence zákazníků, zboží, služeb, prodejů a prodejních

operací

Příkladem evidenční úlohy je prvotní pořizování dat a jejich ukládání do databází,
souvisejících s řízením prodeje zboží a služeb (Obrázek 6‑1).

80

Obrázek 6‑1: Základní charakteristiky evidenčních úloh

Obrázek dokumentuje obvyklé vstupy pro databáze řízení prodeje a jejich aktualizace,
klíčové aktivity při pořizování a aktualizacích dat. Třetí část prezentuje obvyklé výstupy.

6.3  Analytické otázky

Další přehled obsahuje analytické otázky, využitelné v analýzách evidenčních úloh
v rámci jednotlivých oblastí řízení (finance, prodej, nákup, sklady atd.).

6.3.1  Obsah dat a operace s daty

	Jak určit data do databází, které budou relevantní pro potřeby firmy, odpovídat

požadavkům legislativy, respektovat požadavky jednotlivých útvarů firmy?

	Jak minimalizovat časová zpoždění aktualizace dat v databázích?
	Jak snížit pracnost operací spojených s pořizováním dat?
	Jak snížit náklady na pořízení dat a jejich vstupy do databází?
	Jak zajistit efektivní vstupy dat z různých typů datových zdrojů a různých for-

mátů dat?

6.3.2  Kvalita dat

	Jak zajistit potřebnou kvalitu dat na vstupu do databází?
	Jak řešit obsah kontrolních operací na vstupu dat?

81

	Jak zajistit konsistenci dat a potřebnou úroveň konsolidace?
	Jak  zajistit  potřebnou  průkaznost,  úroveň  kontroly  a  bezpečnost  vstupních

operací?

	Jak průběžně realizovat soulad vstupů dat s aktuální legislativou?

6.3.3  Organizace dat

	Jak zajistit distribuci dat (centralizaci a decentralizaci dat) vzhledem k organi-
zaci firmy včetně dislokovaných útvarů firmy, např. obchodních poboček, detašo-
vaných skladů apod.?

	Jak zajistit rozdělení zodpovědností za data mezi jednotlivé útvary firmy, resp.
jednotlivé pracovníky, včetně zodpovědnosti za kvalitu dat a za řešení případ-
ných problémů v kvalitě dat?

	Jak řešit identifikaci dat, tj. jednotlivých tabulek, položek, vazeb, tak, aby data

poskytovala snadnou a rychlou orientaci pracovníků firmy v databázích?

	Jak identifikovat a řešit duplicity a multiplicity v datech?

6.3.4  Externí zdroje dat

	Jak určovat potřebné externí zdroje dat, vyhodnocovat jejich objem, technic-

kou dostupnost, kvalitu a ekonomickou náročnost?

	Jak realizovat efektivně a bezpečně vstupy z externích zdrojů dat?
	Jak efektivně sdílet data s externími partnery?

6.3.5  Řízení dat

	Jak efektivně začlenit řízení datových zdrojů do řízení IT firmy a řízení firmy

jako celku?

	Jak řešit a realizovat datovou architekturu ve firmě, vyjadřující jak aktuální stav
datových zdrojů a jejich vztahy, tak očekávaný vývoj vzhledem k vývoji potřeb
firmy?

	Jak zajistit potřebnou úroveň integrace datové základny firmy?
	Jak dosáhnout požadovanou úroveň bezpečnosti datové základny?
	Jak nastavit systém přístupových práv k datovým zdrojům?
	Jak připravovat data jako obchodní komoditu?
	Jak řešit ekonomické stránky datových zdrojů (náklady, ceny)?

6.4  IT pro evidenční úlohy

V souvislosti s IT uvádíme vybrané typy aplikací, které se na evidenčních úlohách vý-
znamně podílejí, zejména:

	Celopodnikové systémy, ERP, Enterprise Resource Planning.
	Systémy řízení skladů, WMS, Warehouse Management System.
	Elektronický obchod, eCommerce, e-Shop.

82

	Elektronické zásobování, e-Procurement.
	Řízení vztahů se zákazníky, CRM, Customer Relationship Management.
	Řízení podnikového obsahu, ECM, Enterprise Content Management.
	Mobilní aplikace.

V dalších podkapitolách jsou uvedeny pouze hlavní efekty a případné problémy uve-
dených aplikací v podmínkách evidenčních úloh.

6.4.1  ERP, Enterprise Resource Planning

Efekty:

	Nabízí efektivní pořizování a aktualizace dat prostřednictvím obrazovkových
formulářů, obvykle s detailní nápovědou k obsahu a významu jednotlivých dato-
vých položek a k jejich využití.

	Snižuje riziko chyb a omylů při pořizování dat využitím zabudovaných kontrol-

ních mechanismů do ERP software.

	Poskytuje protokolování prováděných operací s daty s využitím databázových

logů a vlastních funkcí ERP.

	Zajišťuje integraci pořizovaných a aktualizovaných dat v databázích ERP, pro-

vázanost dat mezi odpovídajícími funkčními moduly.

	Představuje  obvykle  hlavní  zdroj  podnikových  dat,  tj.  bývá  zdrojem  dat  i  pro

ostatní typy aplikací.

Problémy:

	S ERP je obvykle spojena náročná customizace, zejména u větších systémů,
která zahrnuje i analýzu a výběr skutečně potřebných položek a následně reduk-
ci jejich počtů a struktury.

	Větší ERP systémy vyžadují specializaci pracovníků podle jednotlivých insta-

lovaných modulů a jim odpovídajícího datového obsahu.

	ERP představují relativně vysoké nároky na počítačové zdroje pro uložení dat,
které se zvyšují s rozsahem systému a následně i při každém upgrade systému.
	Vzhledem  k  tomu,  že  ERP  má  obvykle  v  informačním  systému  firmy  klíčovou
pozici a je hlavním zdrojem dat, kladou se na ně vysoké nároky na kvalitu dat,
kterou  je  třeba  zajistit,  např.  kvalitními  testovacími  funkcemi.  Nižší  kvalita  dat
v tomto případě postihne nejen vlastní ERP systém, ale i další, které jeho data
využívají (e‑Shop, business intelligence, e‑Procurement a další).

6.4.2  WMS, Warehouse Management System

Efekty:

	S  využitím  přenosných  počítačů,  snímačů  čárových  kódů,  RFID  či  bezdrátové
sítě umožňuje sběr dat do centrální databáze z dislokovaných skladů zboží
a materiálů a efektivní komunikaci s uživateli.

83

	Umožňuje zaznamenávat jednotlivá data o skladových operacích v reálném
čase a vyhodnocovat či analyzovat všechna logistická data, a tím zajistit plnou
kontrolu nad provozem ve skladu.

	Zajišťuje identifikaci každé položky zboží, jakož i jednotlivých balíků či palet
opouštějících skladové prostory, které jsou značeny čárovým kódem. Podporuje
generování tzv. nelicencovaných čárových kódů pro jednotlivé položky ve skladu
a díky tomu se zajistí minimalizace chyb v podobě záměn druhu zboží.

	Snižuje se chybovost pořizovaných dat o skladových zásobách a jejich umís-

tění ve skladech.

Problémy:

	Je třeba počítat s nutností zajištění potřebné kvality dat (zejména kmenových

dat vybraných artiklů a skladových lokací).

	Je  třeba  disponovat  kvalifikovanějším  obslužným  personálem  v  souvislosti

s využitím speciálních technologií pro pořizování a využívání dat.

	Riziko nevhodného výběru WMS řešení a jeho využití je většinou způsobeno
nedostatečnou úvodní analýzou, např. i nedostatečnou analýzou dat pro řízení
skladů, jejich technologického vybavení (zakladače apod.), jejich podmínek a vy-
bavení, jejich nároků na testování apod.

6.4.3  eCommerce, e‑Shop, elektronický obchod

Efekty:

	Internetový obchod má širokou působnost, což mu dává potenciál pro dosaže-
ní celosvětového trhu a získávání obchodních dat v nejširším možném rozsahu.
	Internetový obchod je dostupný nepřetržitě, 24 hodin denně, což znamená, že

i nepřetržitě pořizuje od zákazníků data.

	Internetový obchod umožňuje snadno získat cenné informace o zákaznících
a jejich potřebách, na jejichž základě je možné přizpůsobit sortiment prodeje.

Problémy:

	Internetový  trh  je  vysoce  konkurenční  obchodní  prostředí  a  získávaná  data
musí být velmi kvalitně spravována, bezpečně ukládána a kvalifikovaně vyhod-
nocována.

	Velké  nároky  jsou  zákazníky  kladeny  na  nepřetržitou  dostupnost  24  hodin

denně a poskytované informace.

	Podstatné  jsou  pravidelné  investice  a  zajištění  aktualizací  dat  prezentova-

ných na e‑Shopu, jinak se ztrácí důvěra zákazníků.

6.4.4  Elektronické zásobování, e‑Procurement

Efekty:

	Nabízí vysoce efektivní pořizování obchodních dat (objednávek, dodacích lis-
tů, faktur) přímo, přenosem od obchodního partnera do vlastní databáze firmy,
bez obvyklých manuálních operací.

84

	Poskytuje možnosti elektronické archivace obchodních dokumentů, a to pro

kontrolní i čistě evidenční účely.

	S přímým pořizováním dat je úzce spojena minimalizace chyb v objednávkách
a  dalších  obchodních  dokumentech,  což  podstatně  přispívá  k  důvěryhodnosti
firmy.

	Lze  počítat  i  s  vyloučením  chyb  vzniklých  nesprávnou  specifikací  sestavy
nebo konfigurací produktu (např. u PC, kancelářských zařízení, nábytku apod.).

Problémy:

	U  některých  standardů,  zejména  EDIFACT,  ODETTE  apod.,  je  velmi  náročná
analýza pro jejich použití a redukce velmi rozsáhlých datových struktur, tedy ur-
čení těch položek, které jsou vzhledem k potřebám obchodního vztahu nezbytné.
	Obchodní partneři musí dohodnout oblasti a specifikaci dokumentů pro e‑Pro-

curement, tedy i struktury dat.

	Obchodní  partneři  musí  dohodnout  technologii  pro  výměnu  dat  (EDI,  XML,

Jason…) a způsob komunikace včetně její bezpečnosti.

	Obchodní partneři musí dohodnout standardy (mezinárodní, případně lokální)

pro výměnu obchodních dokumentů.

6.4.5  CRM, Customer Relationship Management

Efekty:

	Obchodníci  a  další  pracovníci  firmy  přímo  získávají,  zaznamenávají  a  sdílejí
detailní  informace  o  zákaznících,  o  jejich  požadavcích  a  potřebách,  o  stavu
a průběhu jednotlivých obchodních případů.

	Funkce CRM jsou orientovány na získávání a pořizování informací o obchod-
ních příležitostech, umožňující jejich systematické vyhodnocování a s tím i ná-
sledné zvyšování obchodní úspěšnosti firmy na trhu.

	Průběžné pořizování a sledování dat o zákaznických požadavcích a chování
zákazníků; evidence současných obchodních kontaktů znamenají nastavení
a rozvoj velmi kvalitních vztahů k zákazníkům a poskytování speciálně upravo-
vaných služeb a produktů podle jejich představ.

Problémy:

	V podniku musí být nastaveno prostředí, kdy pracovníci z obchodu, případně
z dalších útvarů jsou připraveni a ochotni pořizovat a sdílet informace o zakáz-
kách a zejména o obchodních příležitostech.

	Musí být nastaveny obchodní procesy tak, aby pracovníci podniku museli uvá-

dět do databází CRM informace o trhu a obchodních příležitostech.

	Informace ve vztahu k zákazníkům vstupují do CRM z celého širokého spekt-
ra externích zdrojů a ve velkých objemech včetně sociálních sítí (označované
také  jako  „Social  CRM“).  To  vyžaduje  nejen  značné  technické,  ale  zejména
pracovní kapacity na sledování a vyhodnocování takových informací.

85

6.4.6  ECM, Enterprise Content Management

Efekty:

	Automatizace procesů na bázi workflow souvisejících s evidenčními úlohami
zvyšuje efektivitu pořizování a aktualizace dat a přehled o jejich průběhu včetně
identifikace možných problémů.

	Funkce „document managementu“ umožňují snížení nákladů na vytváření, skla-

dování a zpřístupňování obchodních a dalších dokumentů.

	ECM vede ke zvýšení produktivity práce díky okamžité dostupnosti a efektiv-

nímu zpřístupnění požadovaných informací.

Problémy:

	Listinné a elektronické dokumenty nejsou odpovídajícím způsobem legislativ-

ně zrovnoprávněny.

	Práce s elektronickými dokumenty se poměrně zásadně liší od práce s listin-
nými dokumenty, což vytváří tlak na zaměstnance a jejich pracovní návyky.
	Bez řádného školení uživatelů a jasně definovaných podnikových procesů hrozí
nerovnoměrné užívání systému jak v oblasti pořizování, tak využívání dat.

6.4.7  Mobilní aplikace, MA

Efekty:

	Díky rozvoji mobilního hardware a software se mobilní zařízení svým výkonem
a využitelností již přibližují desktopovým zařízením, což způsobuje, že při poři-
zování i využívání dat stále více stolních počítačů je nahrazováno mobilními
zařízeními.

	Aplikace MA umožňují efektivní přístup k podnikovým datům v reálném čase

a v místě působení obchodníků a dalších pracovníků firmy.

	Přinášejí urychlení sběru, přenosu a tím pádem i zpracování dat, což přináší
výhody v oblastech jako je snížení provozních nákladů, nižší stav zásob a větší
spokojenost zákazníků.

	Poskytují  snadné,  intuitivní  ovládání  mobilních  zařízení  a  jejich  zpřístupnění

širokému okruhu uživatelů při práci s daty.

	Nabízejí možnost využívat funkčnosti typické pro mobilní zařízení, např. fo-
toaparát, kamera, GPS, akcelometr, gyroskop, rádio, což při pořizování speciál-
ních dat může být velmi významné.

	Bezpečnost při přípravě a využití dat je zajištěna tím, že mobilní zařízení mohou
být využívána pouze jako terminály a data jsou uložena v bezpečných datových
centrech.

	Drahá  počítačová  zařízení  mohou  být  nahrazena  menšími  přenosnými,  méně

drahými zařízeními, což přináší úsporu nákladů.

86

Problémy:

	Uživatele při práci s daty limituje výkon a rozměry mobilního zařízení.
	Síťová závislost znamená závislost na internetu jako na infrastruktuře s rizikem

případných výpadků.

	Bezpečnost je na druhé straně dána omezenými schopnostmi kontroly zneužití

dat, možnostmi správy koncových zařízení.

	Zvýšená  bezpečnostní  rizika  jsou  spojená  s  krádeží  nebo  ztrátou  zařízení

a s ukládáním podnikových a zároveň osobních dat (BYOD).

 Doporučení k analýze evidenčních úloh:

	Evidenční úlohy znamenající pořizování, aktualizace a základní zpří-
stupňování  dat,  jsou  základem  řešení  rozvoje  i  provozu  informač-
ních systémů ve všech typech firem.

	Každá evidenční úloha je určena svými vstupními dokumenty, sa-
dou klíčových aktivit a výstupními dokumenty s adekvátními vaz-
bami na ostatní komponenty řízení v rámci anatomie firmy.

	Evidenční úlohy se váží prakticky ke všem oblastem řízení kromě
strategického řízení, které je vesměs založeno na využití již existují-
cích datových zdrojů, včetně externích.

	Při řešení evidenčních úloh je účelné si nejprve vyjasnit hlavní ana-
lytické otázky a potenciální problémy a konkretizovat je na základě
aktuálního prostředí a podmínek dané firmy.

	Jeden  z  klíčových  požadavků  na  evidenční  úlohy  je  zajištění  po-
třebné  kvality  dat  a  vytvoření  odpovídajícího  systému  kontrol  na
vstupních datech.

	Evidenční úlohy jsou v různých modifikacích součástí funkcionality
celé škály IT aplikací, kde klíčovou roli hrají v tomto směru aplikace
ERP.

	Pro využití různých typů aplikací pro funkce evidenčních úloh je ne-
zbytné analyticky vyhodnotit jejich potenciální efekty a problémy,
které při pořizování a aktualizaci dat přinášejí nebo mohou přinášet.

87

7. Transakční úlohy

 Transakční úlohy představují realizace obchodních, finančních a dalších
transakcí, např. „Obchodní případ Prodej“, „Obchodní případ Nákup“ apod.
Obsah  transakčních  úloh  se  podstatně  liší  v  tom,  o  jaké  transakce  se
jedná (prodej, nákup, finance, majetek, sklady apod.).

Účelem transakčních úloh je uskutečňovat efektivní a spolehlivou realizaci
transakcí, tj. v celém jejich průběhu od vzniku nebo příchodu prvotního do-
kumentu nebo informace po její finální fyzické i informační zajištění.

7.1  Obsah transakčních úloh

Transakční úlohy zajišťují na základě vstupů následující hlavní funkce a klíčové akti-
vity:

	příprava  nových  obchodních  a  dalších  dokumentů  se  všemi  obsahovými
i formálními náležitostmi (objednávky, dodací listy, faktury), a to využitím existu-
jících či nových dat, jejich kopírováním a úpravami,

	založení  obchodní  zakázky,  resp.  obchodního  případu  s  jeho  identifikací,  po

příchodu vstupního dokumentu (objednávky, poptávky),

	vyhodnocení disponibilních možností a zdrojů vzhledem k požadavkům ex-
terního partnera, vyhodnocení ekonomických, technických, pracovních parame-
trů zakázky a určení dalšího postupu (přijetí / nepřijetí zakázky),

	informování partnera o vyhodnocení jeho požadavků,

	realizace zakázky, obchodního případu s odpovídajícími dokumenty (dodacími

listy, fakturami, dobropisy, odvolávkami, expedičními příkazy),

	distribuce připravených dokumentů,

	realizace dodávky od dodavatele podle objednávek, přejímka a kontrola dodá-
vek, zpracování přejímacích protokolů, zpracování příchozích dokumentů (doda-
cích listů, faktur),

	reklamační řízení, zpracování reklamací a distribuce dodavateli,

	obdobné funkce jsou i u jiných typů transakčních úloh (finance, majetek, sklady,

doprava apod.).

7.2  Příklad: Realizace prodejních transakcí, obchodní případ Prodej

Transakční úlohy dokumentuje následující schéma. V daném případě jde o „Obchodní
případ Prodej“ (Obrázek 7‑1), tedy přijetí objednávky od zákazníka, její posouzení, vyříze-
ní a zpracování dalších potřebných dokumentů (dodacího listu, faktury, expedičního listu).

88

Obrázek 7‑1: Transakční úloha

Obrázek dokumentuje nezbytné vstupy pro realizaci transakčních operací, klíčové ak-
tivity reprezentující dílčí transakční operace, případně v tomto případě zahrnuje i celý
proces transakční úlohy Obrázek 7‑2). Třetí část ukazuje výstupy celé transakční úlohy.

Obrázek 7‑2: Obchodní případ Prodej

89

7.3  Analytické otázky

Smyslem dalších podkapitol je vymezit analytické otázky, které mohou být modifikovány
podle příslušných oblastí řízení, zejména ve financích, prodeji, nákupu, dopravě a pou-
žité v rámci analýz řízení konkrétní firmy.

7.3.1  Vztah k byznysu

	Jak  identifikovat  aktuální  ekonomické,  obchodní  a  organizační  problémy,
spojené s transakčními úlohami a jak je řešit jejich změnami nebo rozvojem?
	Jak určit obsah transakčních úloh a jednotlivých aktivit vzhledem k aktuál-
ním i očekávaným potřebám byznysu, např. co je třeba v rámci obchodního pří-
padu dělat nyní a v budoucnosti?

	Jak zvýšit úspěšnost a výkonnost byznysu díky efektivní realizaci transakč-

ních operací (prodeje, nákupu apod.)?

	Jaké  vybrat  KPI  ovlivňující  výkonnost  transakčních  úloh  ve  vztahu  k  byznysu,

kdy a jak je sledovat a vyhodnocovat?

	Jak zvyšovat kvalitu řízení obchodních zástupců firmy?

7.3.2  Realizace transakčních úloh

	Jak dosáhnout snížení celkové časové náročnosti realizovaných transakčních

úloh?

	Jak snížit pracnost transakčních operací u uživatelů a jak současně zvyšovat

produktivitu jejich práce?

	Jak snížit náklady na transakční operace podniku?
	Jak zajistit potřebnou průkaznost, úroveň kontroly a bezpečnost transakčních

operací?

	Jak zvýšit formální kvalitu transakčních operací?
	Jak zajistit dostupnost transakčních operací v místě i čase?

7.3.3  Kvalita transakčních úloh

	Jak sledovat, kontrolovat a vyhodnocovat průběh transakčních úloh, jak řešit

úzká místa v jejich průběhu?

	Jak snižovat rizika chyb a omylů při realizaci transakčních úloh?
	Jak průběžně realizovat soulad transakčních operací s aktuální legislativou?
	Jak připravovat a motivovat uživatele na zvyšování kvality transakčních úloh?
	Jak snížit objem reklamací obchodních partnerů?

7.3.4  Vztahy k okolí

	Jak řešit transakční, zejména obchodní úlohy ve vztahu k počtům zákazníků

a struktuře zákaznické sféry?

	Jak efektivně vyhodnocovat náměty a požadavky partnerů a obecně daného

segmentu trhu?

90

	Jak zvyšovat loajalitu obchodních partnerů, zejména zákazníků, díky techno-

logiím pro transakční úlohy?

	Jak zkrátit dobu reakce firmy na podnět externích partnerů a jak zvyšovat kva-

litu poskytovaných informací?

	Jak řešit možnosti a nároky partnerů firmy v oblasti využití různých forem e-Bu-

sinessu?

	Jak realizovat obchodní i další transakce pomocí mobilních zařízení v místě

obchodních partnerů?

7.3.5  Řízení transakčních úloh

	Jaké  dopady  má  současná  úroveň  transakčních  úloh  na  řízení  a  organizaci

firmy, jaké jsou hlavní problémy?

	Jakými IT aplikacemi a službami podporovat transakční úlohy, s jakými priori-

tami, jak je v rámci řízení IT plánovat?

	Jak navrhovat aplikační architekturu ve vztahu k rozvoji transakčních úloh?
	Jak dosáhnout efektivní provázanost transakcí ve firmě, jak řešit vazby trans-

akčních úloh mezi různými oblastmi řízení firmy?

	Jak vyhodnocovat nová řešení transakčních úloh ve vztahu ke změnám organi-

zace a organizačních struktur firmy?

	Jak  sledovat  a  vyhodnocovat  ekonomickou  náročnost  nově  navrhovaných

transakčních úloh ve firmě?

7.4  IT pro transakční úlohy

V souvislosti s IT uvádíme typy aplikací, které se na transakčních úlohách významně
podílejí, zejména:

	Celopodnikové systémy, ERP, Enterprise Resource Planning.
	Systém řízení skladů, WMS, Warehouse Management System.
	Elektronický obchod, eCommerce, e-Shop.
	Elektronické zásobování ‑ e-Procurement.
	Řízení vztahů se zákazníky, CRM, Customer Relationship Management.
	Řízení podnikového obsahu, ECM, Enterprise Content Management.
	Mobilní aplikace.

V dalších podkapitolách jsou uvedeny pouze hlavní efekty a případné problémy uve-
dených aplikací v podmínkách transakčních úloh.

7.4.1  ERP, Enterprise Resource Planning

Efekty:

	ERP  zahrnují  funkcionalitu  umožňující  vzájemně  integrovat,  automatizovat

a plánovat klíčové procesy ve firmě, a to jak základní, tak podpůrné.

91

	ERP vytváří podporu procesům, které jsou vesměs velmi komplikované, tedy
odpovídající povaze transakčních úloh (např. Obchodní případ Prodej, procesy
finančních transakcí apod.) a které jsou realizovány efektivně jednou konzistent-
ní aplikací.

	Nad společným jádrem ERP obvykle poskytuje specializovaná odvětvová řeše-

ní pro různé typy firem s různým obsahem transakčních úloh.

	Díky ERP se zvyšuje produktivita práce při běžných obchodních a administra-
tivních činnostech využíváním již existujících dat (o zákaznících, dodavatelích,
zboží atd.), jejich kopírováním do existujících dokumentů a vzájemnými transfor-
macemi mezi jednotlivými dokumenty (např. z objednávky dodací list, z dodací-
ho listu faktura apod.).

	Snižuje se riziko chyb a omylů při řídicích aktivitách, při obchodních nebo fi-
nančních transakcích díky celému systému kontrol mezi funkcemi i procesy.
	Zvyšuje se celková úroveň řízení podniku díky využití zabudovaných metod ří-
zení, např. v oblasti financí, controllingu apod., ověřených u mnoha předchozích
instalací, často v celosvětovém měřítku.

	Díky  provázanosti  funkcí  ERP  mohou  mít  řídicí  pracovníci  přehled  o  vývoji
hospodaření firmy a případných problémech, např. odvozováním očekávaného
cash flow od přijatých objednávek nebo kontraktů ve firmě, nebo např. objektiv-
nějším posuzováním a plánováním zákaznických objednávek s okamžitým
vyhodnocením jejich materiálové i kapacitní náročnosti a ekonomické efektivnosti.
	Snižuje se časová i nákladová náročnost podnikových procesů využitím au-
tomaticky  realizovaných  funkcí  (např.  automatickým  vystavováním  objednávek
zboží při poklesu zásob pod stanovené minimum).

Problémy:

	Větší a složitější ERP systémy jsou obvykle spojeny s náročnou customizací,
která vyžaduje implementační, specialisty ovládající customizační parametry.
	Customizace je někdy velmi obtížná a vyžaduje si specializaci pracovníků pod-
le jednotlivých transakčních operací v řízení firmy a odpovídajících instalovaných
modulů ERP. To při vysoké ceně práce prodražuje a komplikuje implementaci ERP.
	S ERP jsou vesměs spojeny vysoké náklady na školení a doškolování uživa-
telů a na podporu uživatelů prostřednictvím help desk (funkcionalita a dokumen-
tace ERP systému je tak rozsáhlá, že běžný uživatel ji bez pomoci jen obtížně
zvládá).

	Problémem je rovněž časté podcenění přípravy uživatelů konzultantů nebo
metodiků, zejména při složitějších transakčních úlohách. Nekvalita přípravy pak
má značné negativní dopady na dobu a cenu projektu a problémy, spojené s dal-
šími úpravami transakcí.

	Funkcionalita ERP odpovídá požadavkům mnoha typů podniků a typů výrob, což
zvyšuje celkový rozsah funkcionality, ale mnohdy také její relativně nízké vyu-
žití, uživatelé se v dané složitosti zaměří pouze na tu funkcionalitu, kterou zcela
nezbytně potřebují.

92

	Vysoká integrace modulů ERP systému v kombinaci s rozsáhlou funkcionalitou
způsobují vysokou složitost ovládání, a to i v případě jednoduchých podnikových
procesů, což následně vede k odporu uživatelů.

7.4.2  WMS, Warehouse Management System

Efekty:

	WMS systémy výrazně zvyšují kvalitu, efektivitu a flexibilitu řízení skladů při
procesech vykládky, příjmu a vstupní kontroly, uskladnění materiálů a zboží, vy-
skladnění a výstupní kontroly, kompletace a balení, expedice a dalších.

	Zvyšuje se výkonnost skladových pracovníků, WMS napomáhá v optimaliza-
ci pohybu skladníka, k čemuž využívá detailní 3D mapu skladu, kde se nachází
každé místo skladovaných položek. Jedná se zpravidla o prostorovou architek-
turu,  která  je  zaevidovaná  v  systému,  a  jednotlivým  skladovým  polohám  jsou
přiděleny čárové kódy. Systém je díky tomu schopný čelit nedostatkům v oblasti
skladového uspořádání položek a sestavit tak příkaz k výdeji.

	WMS  zajišťuje  vyšší  produktivitu  práce  a  poskytuje  optimalizaci  skladových

operací s cílem dosáhnout co nejmenších časových ztrát.

	WMS vyhodnocuje výkony pracovníků skladu s možností dohledat osobu zod-
povědnou za problém, takže podporuje vzrůst motivace jednotlivých pracovníků.
	Poskytuje funkce monitorování personálu, kde systém sleduje pohyb sklad-
níka ve skladu a díky tomu je možné přidělovat jednotlivé úkoly (přeskladnění,
inventarizace) pracovníkům na vybrané lokaci a s nejlepším využitím času.

Problémy:

	I v případě WMS je nutné počítat s náročnou konfigurovatelností a customiza-
cí WMS systému, zejména právě u skladových transakcí, které vyžadují speci-
alisty analytiky i technology.

	V případě obslužného personálu je nezbytné dodržovat přísnější pracovní dis-
ciplínu  respektující  nastavení  a  pravidla  WMS,  což  někdy  vede  k  negativnímu
postoji zaměstnanců k zavedení systému.

	Někdy je problémem snaha vedení firmy o automatizaci skladových transakcí
za každou cenu, i když to není adekvátní potřebám a technickým a ekonomic-
kým podmínkám.

	Při  neúměrných  požadavcích  na  zdokonalení  a  změny  transakčních  úloh
a procesů ve skladu vzniká problém vyšších nákladů a prodloužené doby im-
plementace systému.

7.4.3  eCommerce, e‑Shop, elektronický obchod

Efekty:

	Uplatnění e‑Shopů má široký potenciál pro dosažení působnosti na lokálních
i celosvětových trzích a v některých případech i v extrémním nárůstu zákazníků.

93

	Elektronický obchod je dostupný nepřetržitě, 24 x 7, což znamená i nepřetrži-
tou realizaci obchodních aktivit, pokud firma disponuje takovými kapacitami.
	Elektronické obchody racionalizují komunikaci se zákazníkem, umožňují pre-
zentovat komplexně nabídku produktů a služeb ve strukturované formě, s efek-
tivním využitím dotazů, filtrů apod., a to se všemi podstatnými charakteristikami
zboží a služeb (ceny, velikosti atd.).

	Elektronické obchody umožňují, pokud je to racionální, prezentovat v rámci ob-

chodních transakcí vzhled zboží včetně animací, videí apod.

	Některá sofistikovaná řešení v dané oblasti poskytují možnosti vlastní konfigu-
race produktu zákazníkem nebo v kooperaci se zákazníkem, např. v automobi-
lovém nebo nábytkářském průmyslu.

Problémy:

	Obchodní prostředí spojené s e‑Shopy je vysoce konkurenční a nároky na kva-
litu e‑Shopů po stránce obsahové, vizuální a možností ovládání jsou mimořádně
silné a chyby v tomto směru vedou k ztrátám konkurenceschopnosti firmy.
	Obvyklým problémem, spojeným s e‑Shopy, je následná logistická stránka je-

jich provozu, tj. fyzické dodání zboží zákazníkovi.

	Významným problémem rozvoje elektronického obchodu jsou veřejně, v médiích
prezentované podvody některých obchodníků, resp. vlastníků nebo provozo-
vatelů e‑Shopů a s nimi v některých případech klesající důvěra zákazníků.

7.4.4  Elektronické zásobování, e‑Procurement

Efekty:

	Elektronické zásobování („e-Procurement“) na bázi EDI („Electronic Data Inter-
change“) a dalších technologií poskytuje zkrácení doby cyklu celého procesu
obchodních transakcí, a to od vzniku počáteční potřeby do jejího splnění.

	Díky tomu, že e‑Procurement klade velký důraz na standardizaci, je rovněž jed-
ním z hlavních nástrojů integrace informatiky firmy s obchodními partnery.
	Umožňuje  snížení transakčních  nákladů  na  všechny  aktivity  celého  obchod-
ního procesu, tj. nákladů na schválení, vyřízení objednávky atd. a rovněž nižší
transakční náklady prodejce na prodejní operace, např. v podobě nákladů na
tisk a rozesílání obchodních dokumentů, tedy ušetření poštovních nákladů.
	Zajišťuje  minimalizaci  chyb  v  objednávkách  a  dalších  obchodních  dokumen-
tech díky jejich online přenosu od zákazníka do databází dodavatele, a přímému
vstupu do těchto databází bez nutnosti manuálního kopírování dat.

	Poskytuje  možnost  provázání  jednotlivých  zpráv  (obchodních  dokumentů)
mezi sebou pro komplexní přehled o obchodním případu. Tyto možnosti poskytu-
je např. struktura samotných elektronických zpráv, které v sobě nesou referenční
odkazy na dokumenty s nimi spojené.

	Umožňuje snižování objemu zásob na základě zkrácení doby cyklu objedná-

vek a celého obchodního procesu.

94

	Znamená redukci neautorizovaných, resp. neschválených nákupů nebo náku-
pů od neschválených dodavatelů, vzhledem k nastaveným pravidlům firmy.
	Provazuje zásobování s navazujícími oblastmi řízení podniku, např. s řízením

financí, řízením dopravy apod.

Problémy:

	Řešení aplikací e‑Procurementu je specifické v tom, že projekt musí probíhat

v kooperaci obou obchodních partnerů.

	Na všech obsahových, technologických i metodických aspektech se partne-

ři musí vzájemně dohodnout, zejména na standardech pro výměnu dat.

	Elektronické  zásobování  probíhá  většinou  na  základě  existujících  standardů,
které jsou vesměs značně rozsáhlé a je jich i hodně, což znamená značné ča-
sové nároky na studium a přípravu analytiků.

	Analýza a návrh úprav použitých standardů (EDIFACT, ANSI X.12 a dalších) je
obvykle velmi časově i nákladově náročná operace, např. u některých doku-
mentů se může jednat o výběr několika desítek položek z několika tisíc ve stan-
dardu včetně probíhajících nezbytných dohod s partnerem.

	Nákladová náročnost u menších firem často znamená jejich odpor k implemen-
taci e‑Procurementu, což při spolupráci velkých a malých firem znamená rozpor
v jejich zájmech v této oblasti.

	V oblasti e‑Procurementu je třeba počítat i s rozdíly jeho potřeby mezi různý-
mi odvětvími ekonomiky, což je dáno intenzitou a četností obchodních případů.
Velmi silná potřeba je např. v retailu nebo v bankovnictví, oproti tomu např. těžké
strojírenství má tuto potřebu podstatně slabší.

	Standardy  pro  elektronickou  výměnu  dat  a  e‑Procurement  se  trvale  vyvíjejí
a  analytici,  pracující  na  implementaci  e‑Procurementu,  musí  tyto  změny  trvale
sledovat.

7.4.5  CRM, Customer Relationship Management

Efekty:

	CRM je založeno na získávání a sdílení informací o zákaznících, stavu a vý-
voji jejich požadavků a potřeb a obchodníci tak mohou uplatnit individuální pří-
stup k jednotlivým zákazníkům, resp. jejich skupinám.

	Podstatným  přínosem  CRM  jsou  komplexní  informace  o  obchodních  příle-
žitostech,  tzv.  „leadech“,  které  se  často  získávají  z  velmi  různorodých  zdrojů,
z osobních jednání a dalších. Jejich sdílení, včasné poskytování příslušným ma-
nažerům a obchodníkům většinou přináší úspěch a zvýšení pravděpodobnosti
získání odpovídajících obchodních zakázek.

	Zaznamenání o stavu a průběhu jednotlivých obchodních případů, obchodních
jednání, zvyšuje kvalitu komunikace pracovníků se zákazníkem. Specialisté
firmy přicházejí na další jednání s partnerem již podstatně lépe připraveni a vy-
baveni informacemi z předchozích jednání.

95

	Zákazníci  mají  v  rámci  call  center  kvalitnější  informační  služby,  konzultace
odborníků dodavatele, mohou využívat efektivní komunikace nezávisle na pou-
žitém komunikačním kanálu.

	Komplexní informace o potenciálních i realizovaných obchodních aktivitách vy-
tvářejí základ pro analýzy prodejní výkonnosti a tím její zvyšování, umožňují
vytvářet prognózy prodeje, sledovat obchodní aktivity a jejich efektivitu atd.
	CRM díky výše uvedeným službám a efektům napomáhají vytváření dlouhodo-

bých a úspěšných vztahů se zákazníky, zvyšování jejich tzv. loajality.

	CRM lze považovat za jeden z klíčových faktorů úspěšnosti transakčních úloh
a obchodních transakcí a současně za jeden ze základních zdrojů konkurence-
schopnosti firmy.

	Průběžné sledování zákaznických požadavků, evidence a hodnocení současných
obchodních kontaktů, umožňuje kvalitní kategorizace a segmentace zákazníků.

Problémy:

	Ve  firmě  musí  být  nastaveno  prostředí,  kdy  pracovníci  z  obchodu  a  dalších
útvarů jsou připraveni a ochotni sdílet informace o zakázkách a zejména obchod-
ních příležitostech. V této oblasti může být ale se sdílením informací problém.
	V řadě projektů se věnuje primární pozornost použitým technologiím, ale v pří-
padě CRM by měli být na prvním místě pracovníci firmy v přímém kontaktu
se zákazníkem. Příprava, např. obchodníků nebo operátorů call center je základ
a technologie, jsou v tomto směru až na druhém místě.

	V souvislosti s rozdílnými zájmy pracovníků v oblasti sdílení informací musí být
vysoká pozornost věnována nastavení procesů ve firmě ve vztahu k CRM, např.
s vymezením povinností o ukládání informací pracovníky firmy do databází
CRM (a se zajištěním jejich vymahatelnosti).

7.4.6  ECM, Enterprise Content Management

Efekty:

	Významným efektem ECM je jeho součást zaměřená na automatizaci proce-
sů („workflow“), souvisejících s transakčními úlohami, která může přinést kratší
dobu zpracování a nižší chybovost dat.

	V případě složitějších transakčních úloh, jako je tomu např. u obchodních pří-
padů,  poskytují  systémy  „workflow“  průběžnou  kontrolu  nad  jednotlivými
kroky a postupem, dohled nad příslušnými pracovníky a okamžitou identifikaci
místa, kde došlo ke zpoždění nebo případně zastavení celého procesu.

	Obdobně komponenty „document management“ nabízejí podstatně kvalitnější
ukládání,  správu  a  rychlé  a  spolehlivé  zpřístupnění  dokumentů,  které  pro
kvalitu zejména obchodních transakčních úloh přinášejí výrazné efekty.

	Souhrnně lze konstatovat, že „workflow“, „document management“ a další kom-
ponenty ECM, zajišťují vyšší spokojenost zákazníků vlivem kratší reakční doby
na jejich požadavky a komplexním informačním servisem k jejich zakázkám.

96

Problémy:

	Nasazení systémů „workflow“ předpokládá kvalitní předchozí analýzu a ná-
vrh byznys procesů. Pokud tomu tak není a procesní reengineering byl pod-
ceněn, pak se nové technologie mohou nasazovat na neefektivní procesy, což
logicky přináší více problémů než užitku.

	S využitím „workflow“ je spojen již zmíněný jistý dohled nad pracovníky. To pak

může vést k jejich odporu a odmítání takových nástrojů v praxi.

	Obdobně jako u „workflow“ je dobré předpokládat u správy dokumentů jejich
analytickou přípravu včetně jejich jasné kategorizace, identifikace a vytvoření
potřebných šablon a standardů.

	Systémy ECM obsahují poměrně širokou škálu různorodých nástrojů, u někte-
rých produktů až kolem 20. Pak nastává problém jejich racionálního výběru
vzhledem k reálným potřebám a technickým i ekonomickým možnostem firmy.

7.4.7  Mobilní aplikace

Efekty:

	Mobilní aplikace díky své flexibilitě přinášejí do transakčních úloh a zejména ob-
chodních případů vysokou dynamiku a schopnost rychle reagovat na poža-
davky obchodních partnerů, jak zákazníků, tak dodavatelů.

	Představují celkové zefektivnění transakčních úloh a obchodních procesů,
tj. urychlení zpracování dat, což přináší výhody jako je snížení provozních ná-
kladů, okamžité informace o disponibilních zásobách zboží, poskytování služeb
v místě zákazníka apod.

	Nabízejí efektivnější komunikace a součinnost pracovníků firmy i kooperaci
s externími pracovníky, zahrnují snadnější přístup k e‑mailům, kalendářům, apli-
kacím přenášejícím zvuk, video atd.

	Přispívají k lepší organizaci práce a ke kooperaci při řešení úloh na odlouče-

ných jednotkách, jako jsou obchodní pobočky, detašované sklady apod.

	Zajišťují efektivní kooperaci pracovníků v rozlehlých halách nebo provozech,
jako např. při přípravě vyskladnění zakázek ve velkých expedičních skladech, při
řízení staveb, v dopravě atd.

Problémy:

	Je třeba řešit potřebu více verzí aplikace pro různé platformy a typy zařízení,

což může být pro operativní zajištění transakčních úloh limitující.

	Efektivní využití mobilních aplikací v transakčních úlohách předpokládá i změny
a racionalizaci obchodních procesů a tím jejich kvalifikovanou analýzu a úpravy.
	Zatím existuje nízká úroveň best-practices v oblasti transakčních úloh na bázi

mobilních aplikací.

	Složitost přechodu na mobilní aplikace znamená zavedení změn ve více ob-
lastech řízení firmy, respektující možnosti a omezení jednotlivých typů mobilních
zařízení.

97

	V souvislosti s uvedenou analýzou je účelné posoudit, kde bude využití mobil-

ních aplikací skutečně účelné a kde nikoli, což se liší i podle odvětví.

	U pracovníků zvyklých na „klasické“ prostředky bude nutné zajistit jejich odpoví-
dající přípravu i s vědomím vysoké intuitivnosti většiny mobilních aplikací.

 Doporučení k analýze transakčních úloh:

	Transakční úlohy představují realizaci obchodních, finančních, skla-
dových, majetkových a dalších transakcí, váží se de facto ke každé
oblasti řízení.

	Každá  transakční  úloha  je  určena  svými  vstupními  dokumenty,
sadou klíčových aktivit a výstupními dokumenty, s adekvátními
vazbami na ostatní komponenty řízení v rámci anatomie firmy.
	S naprostou většinou transakčních úloh se váží i odpovídající pro-
cesy,  z  nichž  většina  je  poměrně  komplikovaných,  jejich  analýze
a návrhu musí být věnována intenzivní pozornost.

	Při řešení transakčních úloh je účelné si nejprve vyjasnit hlavní ana-
lytické otázky a potenciální problémy a konkretizovat je na základě
potřeb, prostředí a podmínek dané firmy.

	Analytické otázky musí pokrývat nejen technické a metodické aspek-
ty transakčních úloh, ale zejména obsahové, organizační, perso-
nální a ekonomické problémy řešení.

	Transakční úlohy jsou v řadě případů klíčovou součástí funkciona-
lity celé škály IT aplikací, při jejich analýze pro nasazení je účelné
vyhodnotit jejich potenciální efekty a problémy.

	Hodnocení aplikací pro transakční úlohy by měl být jeden z podstat-
ných vstupů pro návrhy změn aplikační architektury IT ve firmě.

98

8.  Reporting

 Firemní reporting znamená vytváření požadovaných typů sestav, např. vý-

sledovka, rozvaha, přehled cash‑flow, přehledů prodeje podle obchodníků,
objednávek, zboží a služeb, zákazníků apod.

Účelem  reportingu  je  poskytovat  managementu  a  celé  uživatelské  sféře
celé spektrum informací podle potřeb oblastí řízení i útvarů firmy, a to s po-
třebnou dostupností, obsahem i formální úrovní jejich zobrazení.

Reporting představuje komplexní systém informací charakterizujících činnosti firmy,
poskytuje ve vhodné formě a včas podklady pro podporu rozhodování na všech stup-
ních organizační struktury.

8.1  Obsah reportingu

Cílem reportingu je nejen prezentovat informace vzhledem k uživatelským požadav-
kům, ale i zajištění takové jejich distribuce, která pracovníkům v podniku poskytne pří-
stup  pouze  k  jim  relevantním  údajům  a  bude  chránit  důvěrná  data  před  nežádoucím
šířením (Fibírová a Šoljaková, 2010).

8.1.1  Kategorizace reportů

Kategorizace reportů zahrnuje:

	Interní reporting:

o  Standardní reporting se vyznačuje zprávami dodávanými v pravidelných
časových úsecích, obvykle jednou za měsíc, za čtvrtletí nebo za celý rok.
Struktura  zprávy  z  hlediska  obsahu  informací,  výpočtů  nebo  analýz,  je
předem stanovená.

o  Mimořádný  reporting  představuje  zprávy  generované  na  požadavek
nebo reporty, které se běžně negenerují, například analýza obchodního
rizika, analýza sortimentních skupin apod.

o  Souhrnný reporting podává přehled o činnostech firmy za určité období,
např. základní finanční ukazatelé včetně srovnání těchto hodnot s hodno-
tami plánovanými nebo s hodnotami minulé časové periody.

o  Dílčí reporting se věnuje konkrétnějším informacím, struktura více odpo-

vídá daným požadavkům pracovníků firmy.

	Externí reporting:

o  Povinnost  ze  zákona  předkládat  výsledky  hospodaření  formou  audito-
vaných finančních výkazů obsahuje velkou část externího reportingu. Jde
o  standardní  periodické  výkazy  o  hospodaření,  které  vycházejí  jednou
ročně, tedy o rozvahy, výsledovky a výkazy peněžních toků.

99

8.1.2  Další kategorie reportů

	Standardní  výpisy  představují  předem  definované  dotazy,  které  se  zpravidla

spouštějí v jim určený a nastavený čas.

	Standardní reporty ještě lze dále členit na statické a dynamické. Uživatel si sta-
tický výpis již nemůže upravovat, kdežto s daty v dynamickém reportu může
manipulovat  podle  svých  potřeb.  Je  však  vždy  omezen  nástroji,  které  mu  byly
vyhrazeny.

	Ad hoc zprávy si může vytvořit sám uživatel vytvořením konkrétního jednorázo-

vého dotazu nad databázemi.

8.1.3  Příprava a zpracování reportů

	Výběr a poskytování informací vzhledem k uživatelským požadavkům, jejich

vhodná prezentace a vizualizace dat.

	Zpracování pravidelných reportů podle nastavených pravidel firmy, nebo vy-
plývajících z požadavků legislativy, s respektováním předepsaných nebo poža-
dovaných termínů.

	Zpracování ad hoc reportů podle okamžitých požadavků uživatelů.
	Zpracování konsolidovaných reportů za více organizačních jednotek firmy.
	Distribuce reportů a zajištění přístupu pouze k relevantním údajům pro jednot-

livé uživatele.

	Zajištění ochrany důvěrných dat na základě definovaných přístupových práv.
	Identifikace problémů a jejich příčin v reportech v dané oblasti řízení firmy nebo

ve sledovaných procesech, jejich jasná a komplexní prezentace.

	Vyhodnocení  a  srovnávání  dat  v  čase  za  jednotlivé  oblasti  řízení  firmy,  seg-

menty trhu, komodity a jejich skupiny apod.

8.2  Příklad: Reporting prodeje

Obrázek 8‑1dokumentuje vstupy, resp. zdroje dat pro zpracování reportů o prodeji zbo-
ží a služeb, tj. databáze, kde hlavní bude „Evidence obchodních případů Prodej“. Pří-
klad na obrázku vpravo obsahuje pouze vybrané reporty. Součástí obrázku je v tomto
případě i přehled nejčastějších nástrojů a aplikací pro přípravu reportů.

8.3  Analytické otázky

Další  podkapitoly  poskytují  analytické  otázky  využitelné  v  analýzách  úloh  reportingu
v rámci konkrétních oblastí řízení (finance, prodej, nákup, sklady atd.) a po příslušné
modifikaci i v konkrétních firmách.

8.3.1  Vztah k byznysu

	Jak zvýšit úspěšnost a výkonnost byznysu díky vysoké kvalitě reportingu?
	Jak  v  reportingu  respektovat  různé  potřeby  pracovníků  podle  úrovní  řízení

(strategické, taktické, operativní) i podle oblastí řízení?

100

	Jak zjistit kvalifikovaný přehled o všech typech reportů a jejich obsahu, které

jsou potenciálně pro danou oblast řízení relevantní?

	Jak efektivně poskytovat reporty externím partnerům podle definovaných pra-

videl?

	Jak zajistit, aby standardní reporty odpovídaly tuzemské, případně i zahraniční

legislativě, zejména účetních standardů IFRS, US GAAP?

	Jak  specifikovat  ekonomické  i  mimoekonomické  očekávané  efekty,  které

mají přinést nově navrhované reporty?

Obrázek 8‑1: Úloha reportingu

8.3.2  Příprava reportů

	Jak zajistit konsolidaci různých podnikových reportů?
	Jak dosáhnout organizačně i technicky zpracování a poskytování reportů pro

odpovídající role a ve stanoveném čase?

	Jak snížit pracnost přípravy standardních reportů?
	Jak snížit náklady na přípravu reportů?
	Jak  řešit  bezpečnost  reportingu  z  hlediska  oprávnění  přístupů  pro  jednotlivé

role?

	Jak správně vyhodnotit reálnou potřebu existujících reportů, resp. určit, které

reporty jsou už pro řízení firmy nepotřebné nebo nahrazené novými?

101

8.3.3  Kvalita reportů

	Jak zajistit vysokou kvalitu a vypovídací schopnost standardních reportů?
	Jak  navrhnout  správnou  strukturalizaci  a  uspořádání  informací  vzhledem

k rychlé a snadné orientaci uživatele na reportu?

	Jak dosáhnout vysoké kvality vizualizace zpracovávaných reportů, s využitím

nejrůznějších vizualizačních prvků?

	Jak  zajistit  efektivní  dostupnost  reportů  prostřednictvím  různých  komunikač-

ních kanálů?

	Jak efektivně zpřístupňovat reporty i na mobilních zařízeních?

8.4  IT pro úlohy reportingu

Úlohy  reportingu  zajišťují  specializované  reportovací  nástroje,  jako  je  tomu  např.
u produktů „Reporting Services“ v systémech business intelligence, nebo je reportova-
cí funkcionalita součástí různých typů aplikací, např.: ERP, BI, SSBI, CRM i mobil-
ních aplikací, případně dalších typů aplikací. Vzhledem k tomu, že principy jsou u této
funkcionality v různých aplikacích podobné, hodnocení jejich efektů a problémů uvádí-
me v tomto případě společně.

Efekty:

	Správně  postavené  reporty  poskytují  podklady  pro  odhalení  problémů  a  je-
jich příčin pomocí včasných a správných informací s možností jejich prohlížení
z různých perspektiv a úrovní detailu.

	Nabízejí  jednotný  pohled  na  podnikovou  realitu  za  předpokladu  konsolidace

vstupních dat pro reporty.

	Dávají možnost jednotlivým zaměstnancům vytvářet vlastní reporty bez pod-
pory IT útvarů, tak se radikálně snižuje doba dodání požadovaných informací
k příjemci.

	Přispívají  ke  zlepšení  komunikace  mezi  zaměstnanci  a  manažery,  a  to  přes

různé úrovně řízení i napříč útvary firmy.

	Reportovací  nástroje  a  funkcionalita  poskytují  širokou  škálu  vizualizačních

funkcí pro rychlou orientaci uživatele v reportu, jak ukazuje Obrázek 8‑2.

	Reportingové  nástroje  přispívají  k  růstu  efektivity  práce,  zaměstnanci  neřeší

tvorbu a formu reportů, ale mohou se soustředit pouze na jejich obsah.

	Nabízí  se  možnost  předdefinované  logiky,  díky  které  nedochází  k  situacím,

kdy výstup dvou reportů tvoří odlišná čísla i při stejných vstupech.

	Poskytují možnosti navázání dalších aplikací na report, např. kliknutím na jmé-
no dodavatele se otevře mapa s jeho sídlem a dalšími dílčími informacemi.
	Nabízejí  se  možnosti  další  integrace  s  kancelářskými  aplikacemi,  možnosti
aktivního využití webového prostředí, možnosti exportu reportů do standard-
ních aplikací pro další zpracování a sdílení.

102

Problémy:

	Hlavním problémem a otázkou je návrh obsahu reportu odpovídající aktuálním

potřebám manažerů a pracovníků podniku, kterým je určen.

	Report  by  měl  podle  potřeby  obsahovat  i  doprovodné  vysvětlující  informace

k obsahu položek, případně i ke struktuře reportu.

	Každá skupina uživatelů nebo dokonce každý jednotlivý uživatel mají různé po-
žadavky týkající se obsahu, formy i času distribuce výkazů, které ke své úloze
ve firmě potřebuje. Všechny takové charakteristiky musí být jasně definovány
a dokumentovány.

	Pokud je report určen pro větší okruh pracovníků, pak analytik nebo tvůrce repor-

tu musí zajistit jejich shodu na obsahu a podobě reportu.

	Výstupy,  resp.  výsledné  reporty,  jsou  silně  závislé  na  kvalitě  zdrojových  dat,

jejich konsistenci a konsolidaci.

	Při přípravě konsolidovaných reportů, zejména u nadnárodních společností, je
třeba znát podstatu a nároky požadovaných standardů, např. IFRS, US GAAP
a dalších.

	Problémem může být finanční náročnost sofistikovanějších reportingových ná-

strojů.

 Doporučení k analýze úloh reportingu:

	Úlohy reportingu jsou součástí každé oblasti řízení.
	Reportů je ve firmě velké množství, takže je účelné je kategorizovat
alespoň na interní reporty pro potřeby firmy a externí ve vztahu k or-
gánům veřejné správy nebo obchodním partnerům.

	Každá  úloha  reportingu  je  určena  svými  datovými  zdroji,  tj.  data-
bázemi, dokumenty a sadou alespoň základních reportů, která je
vesměs otevřená pro doplňování dalších reportů podle nových nebo
specifických potřeb firmy.

	Při řešení reportingu je účelné si nejprve vyjasnit hlavní analytické
otázky a potenciální problémy, zejména z pohledu obsahu reportů,
jejich distribuce a případných nároků nebo možností vizualizace dat
na reportech.

	Reporting je realizován na základě specializovaných reportovacích
nástrojů, nebo je integrován do většiny standardních IT aplikací.

103

Obrázek 8‑2: Plachta rezervací při řízení hotelu (zdroj: Zach, 2021)

9.  Analytické úlohy

 Analytické  úlohy  v  řízení  firmy  představují  analýzy  ukazatelů  firmy  podle

analytických dimenzí (např.: analýzy prodeje zboží a služeb podle aktuální po-
třeby manažerů, analýzy prodeje podle zákazníků, obchodních útvarů apod.).

Účelem analytických úloh je poskytovat manažerům a firemním specialis-
tům pohledy na ukazatele firmy podle jednotlivých dimenzí a na požadova-
né úrovni detailu.

Zatímco transakční aplikace ve svých databázích vytvářejí a následně zpřístupňují nová
data, analytické aplikace de facto žádná nová data nevytvářejí, ale využívají již exis-
tujících databází transakčních aplikací, transformují je pro potřeby analytických úloh.

9.1  Obsah analytických úloh

9.1.1  Nároky na analytické úlohy

Na analytické úlohy se uplatňují tyto nároky:

	zajistit  hodnocení  sledovaných  ukazatelů  firmy,  např.  objemu  tržeb,  počtu
reklamací,  počtu  pracovníků  atd.  na  definovaném  (často  maximálně  možném)
rozsahu podnikových dat,

	poskytovat možnost analyzovat tyto ukazatele podle různých hledisek, resp.
dimenzí  a  jejich  nejrůznějších  kombinací,  např.  objem  tržeb  podle  zákazníků,
zboží, teritorií, typů zakázek, prodejců, prodejních kanálů a dalších, na různých
úrovních detailu sledovaných hodnot a v přijatelné době odezvy,

	v  návaznosti  na  předchozí  bod  podporovat  vysokou  flexibilitu  obchodních

a dalších aktivit pracovníků podniku,

	analyzovat vývoj ukazatelů firmy a jejich výkyvů v čase, realizovat např. mezi-

roční srovnání, různé typy indexů, identifikovat sezónní vlivy atd.

9.1.2  Řešení analytických úloh

Řešení analytických úloh zahrnuje většinou následující možnosti a činnosti:

	Zpracování základních přehledů hodnot vybraných ukazatelů podle specifikova-
ných dimenzí a jejich vzájemných kombinací s možností nastavení filtrů na prvky
dimenzí a jejich skupiny („slice and dice“).

	Operativní určování aktuálně požadované úrovně agregace, resp. úrovně de-
tailu  pro  vybrané  ukazatele,  resp.  pohyb  po  různých  úrovních  detailu  hodnot,
odpovídajících hierarchickým strukturám dimenzí („drill down, drill up“).

	Zjišťování detailních informací z primárních datových zdrojů odpovídajících vy-

branému ukazateli (faktu) a jeho hodnotě („drill through“).

	Výpočty a sledování podílových hodnot ukazatelů, např. podíl tržeb skupin zá-
kazníků, resp. jednotlivých zákazníků na celkovém objemu tržeb, odpovídajících
obvykle podílům podle úrovní jednotlivých dimenzí.

105

	Výpočty dalších odvozených ukazatelů ze základních podle okamžité potřeby

pracovníků.

	Časové charakteristiky a vývoj hodnot vybraných ukazatelů („time intelligen-
ce“),  tzn.  podle  jednotlivých  let,  čtvrtletí,  měsíců,  sledování  hodnot  ukazatelů
k počátečnímu datu, např. začátku roku, meziroční srovnání nebo srovnání mezi
odpovídajícími obdobími, výpočty a sledování různých typů indexů, např. řetězo-
vých, bazických, nebo sezónních (předpokladem je zde však dostupnost dat za
delší časová období).

	Porovnávání  rozpočtových,  plánovaných  a  skutečně  dosahovaných  hod-

not ukazatelů, tj. výstupy typu scorecard.

	Vizuální  identifikace  problémových  hodnot  ukazatelů  nebo  naopak  vysoce
pozitivních hodnot podle aktuálně stanovených pravidel (např. „Top 10“), nebo
referenčních hodnot.

9.2  Příklad: Analýzy prodeje zboží a služeb

Analytické úlohy v anatomii firmy jsou pojaty na principech datové analytiky, resp. bu-
siness intelligence. Znamená to, že podstatou jsou analýzy metrik adekvátních dané
oblasti řízení, tj. analýzy ukazatelů podle jim odpovídajících analytických dimenzí
(Obrázek 9‑1). V daném případě jde o analýzy prodeje zboží a služeb.

Obrázek 9‑1: Analytická úloha – příklad

106

Obrázek  dokumentuje  datové  zdroje,  resp.  vstupní  databáze  pro  metriky,  potřebné
v analýzách. Specifickou částí jsou v tomto případě funkce, které by měla analytická
úloha poskytovat. Sem např. patří:

	analýzy standardních ekonomických ukazatelů (např. tržby, marže) podle dimen-

zí (např. zboží, služby, zákazníci),

	analýzy procesního charakteru (např. počet realizovaných prodejních transakcí,

počet a objem reklamací) podle dimenzí (např. zákazníků, regionů…),

	analýzy  ukazatelů  organizačního  charakteru  (např.  počet  zákazníků,  obrat  zá-

sob) podle dimenzí (např. zákazníků, zboží, skladů),

	časové analýzy, tj. sledování vývoje ukazatelů v čase a jejich případné výkyvy,
	srovnávací analýzy, tj. např. meziroční srovnání, mezikvartální srovnání, porov-

nání skutečnosti s plánem.

9.3  Analytické otázky

Další  podkapitoly  představují  analytické  otázky  pro  přípravu  a  řešení  úloh  podnikové
analytiky a pro diskuse s manažery a podnikovými specialisty na toto téma podle jed-
notlivých oblastí řízení.

9.3.1  Vztah k byznysu

	Jak  zvýšit  úspěšnost  a  výkonnost  byznysu  díky  vysoké  kvalitě  analytických

úloh?

	Jak správně navrhnout celý systém ukazatelů a analytických dimenzí podle

aktuálních, ale i očekávaných potřeb firmy?

	Jak zajistit potřebnou vysokou komplexnost a kvalitu analytických operací v ří-
zení firmy s respektováním znalostní, technické i ekonomické náročnosti jed-
notlivých variant řešení?

	Jak dosáhnout potřebné kvalifikace a motivace manažerů a specialistů firmy
(kvalifikačními programy) na řešení analytických úloh a celého komplexu byznys
analytiky?

	Jak získat správného sponzora řešení podnikové analytiky ve vedení firmy?
	Jak  dobře  nastavit  řešení  komunikačních,  etických,  legislativních  aspektů

řešení byznys analytiky?

	Jak správně nastavit analytická pravidla ve vztahu k ukazatelům pro generová-

ní varovných zpráv („alertů“)?

	Jak racionálně vymezit očekávané efekty vzhledem ke specifickému charakteru

analytických úloh?

9.3.2  Kvalita analytických úloh

	Jak dosáhnout požadované flexibility analýz vzhledem k momentálním potře-
bám a podmínkám firmy a k aktuálním potřebám jednotlivých manažerů a spe-
cialistů?

107

	Jak dosáhnout požadovanou granularitu dat v rámci jednotlivých analytických

operací?

	Jak  zajistit  potřebnou  dostupnost  analytických  operací  v  místě  a  času,  tzn.

i mimo prostředí dané firmy, u zákazníků, dodavatelů, partnerů?

	Jak zajistit vysokou prezentační úroveň výsledků řešení s využitím kvalitní vi-

zualizace dat?

9.3.3  Řízení analytiky

	Jak najít efektivní organizaci řešení a provozu byznys analytiky, zejména v ko-
operaci uživatelů, interních IT pracovníků a externích dodavatelů (např. s využi-
tím BI kompetenčních center)?

	Jak zajistit kvalitní přípravu specialistů analytiků firmy vzhledem k charakte-
ru analytických operací ve firmě a současně vzhledem k předpokládané nezbyt-
né účasti na projektech analytických aplikací?

	Jak dosáhnout konsensu mezi pracovníky firmy na navrženém obsahu a struk-

turách?

	Jak posilovat samostatnost uživatelů při řešení analytických úloh a využívání

analytických nástrojů?

	Jak zajistit potřebné datové zdroje na požadované úrovni granularity?
	Jak zajistit potřebnou kvalitu a konsolidaci dat vzhledem k nárokům analytic-

kých úloh?

	Jak  správně  analyzovat  kvalitu  a  perspektivu  datových  zdrojů  a  klíčových
aplikací, jak vyhodnotit jejich personální, organizační, ekonomickou i technickou
náročnost?

	Jak správně navrhnout architekturu řešení (aplikací a technologií) byznys ana-

lytiky vzhledem k potřebám a možnostem firmy?

	Jak  pro  navrženou  architekturu  vybrat  odpovídající  technologie  a  produkty

včetně např. cloudových řešení?

	Jak dosahovat zkracování doby a časové náročnosti na přípravu analytických

aplikací?

	Jak zvolit adekvátní přístup k řešení?

9.4  IT pro analytické úlohy

V souvislosti s IT uvádíme vybrané typy nástrojů a aplikací, které se na analytických
úlohách významně podílejí, zejména:

	Business intelligence, BI.
	Self Service Business Intelligence, SSBI.
	Competitive Intelligence, CI.
	Kolaborativní rozhodování.
	Business Activity Monitoring, BAM.

108

Uvedené aplikace a nástroje mají charakter specializovaných produktů pro podniko-
vou, respektive byznys analytiku. Vedle těchto aplikací poskytují základní analytickou
funkcionalitu i aplikace určené primárně pro transakční úlohy, jako jsou systémy ERP,
CRM, mobilní aplikace. Výhodou je úzké provázání analytických funkcí na datový zdroj,
tedy databáze dané aplikace, na druhé straně obvykle poskytují nižší flexibilitu a nižší
rozsah analytických funkcí a technologických možností řešení.

V dalších podkapitolách jsou uvedeny pouze hlavní efekty a případné problémy uve-
dených specializovaných nástrojů a aplikací v podmínkách analytických úloh.

9.4.1  Business intelligence, BI

Efekty:

	Umožňuje lépe pochopit a analyzovat podstatu vlastní obchodní a manažer-
ské činnosti, proniknout do jejich hlubších a složitějších souvislostí, umožňují
posun k multidimenzionálnímu řízení v reálném čase.

	Uplatnění  časové  dimenze  nabízí  sledování  vývojových  trendů  z  nejrůzněj-

ších pohledů.

	Analytická  pravidla  podle  stanovených  limitních  hodnot  jednotlivých  ukazatelů
a jejich dimenzí umožňují upozorňovat na kritické nebo mimořádné stavy.
	Využívají se možnosti rychle se pohybovat na různé úrovni detailu informací
(agregačních úrovních), odpovídajících právě řešenému problému v řízení.
	Podpora  řešení  skrytých  problémů  využívá  identifikace  složitých  závislostí
mezi  daty  odhalováním  podobností  mezi  např.  zákazníky,  obchodními  případy
apod.

	Kvalifikační  efekty,  to  znamená,  že  BI  přirozenou  cestou  posiluje  schopnosti
manažerů a specialistů při řešení svých úloh „multidimenzionálně uvažovat“.
	Aplikace BI pro práci s ukazateli ve vazbě na podnikové procesy přinášejí i do
manažerské  sféry  své  specifické  efekty  a  racionalizují  jak  řízení  jednotlivých
dílčích úloh a procesů, tak řízení celého podniku.

	Integrační  efekty  se  realizují  podporou  integrace  dezintegrovaných  informač-

ních zdrojů (např. z věcného či geografického hlediska).

Problémy:

	Úspěšnost BI řešení silně závisí na zájmu uživatelů a zejména vedení podniku

BI implementovat.

	BI aplikace jsou velmi silně závislé na kvalitě dat transakčních systémů, ze

kterých data čerpají.

	BI řešení jsou velmi náročná na konsolidaci vstupních dat z různých datových

zdrojů.

	Efekty BI jsou obtížně měřitelné a mají spíše měkký charakter.
	Pro  úspěšnost  BI  je  podstatné  zvolit  správně  přístup  k  řešení  a  navrhnout

správně architekturu.

109

9.4.2  Self Service Business Intelligence, SSBI

Efekty:

	Samoobslužné BI aplikace a řešení (self‑service BI) představují jeden z nejvý-

raznějších trendů v oblasti analytických úloh.

	Na základě nových technologií poskytují uživatelům prostředí pro realizaci ana-
lytických úloh bez nutnosti využívání komplexních a obvykle velmi složitých
systémů BI.

	Samoobslužné BI umožňují realizovat multidimenzionální uložení a zpracová-

ní dat, nabízejí efektivní a jednoduché přístupy k datům.

	Aplikace SSBI jsou vhodným prostředkem pro pochopení podstaty a způso-

bu využití větších business intelligence systémů.

	Podstatně se zkracuje doba, potřebná na implementaci analytických aplikací.
	SSBI  rozšiřuje  klasické  tradiční  BI  prostředí  o  možnosti  provádění  vlastních
analýz nad zpřístupněnými daty a jejich reporting bez nutnosti potřeby zásahu
IT  oddělení.  Dává  ne‑IT  pracovníkům  více  možností,  větší  flexibilitu a  větší
samostatnost, kdy je možné získat odpověď na danou otázku ve výrazně kratší
době.

	Přístup SSBI tedy obchází problém s neustále se měnícími a novými poža-

davky a potřebami uživatelů.

	Základní příprava aplikací včetně transformací zdrojových dat je výrazně zjed-
nodušená, takže je dostupná i ne IT pracovníkům, samozřejmě po nezbytném
zaškolení.

	Součástí technologií jsou i programovací prostředky, efektivně využitelné při
práci s dimenzionálně uloženými daty, jako např. jazyk DAX („Data Analysis Ex-
pressions“).

	Finanční, zdrojová i provozní náročnost self‑service BI je oproti standardním

projektům a provozovaným aplikacím výrazně nižší.

	Self‑service BI poskytuje i velmi dobrou podporu pro tvorbu analyticky i vizu-
álně náročnějších aplikací, jako např. dashboardů, klikovacích map apod., jak
dokumentuje Obrázek 9‑2 a Obrázek 9‑3.

Problémy:

	Self‑service BI řešení se mohou realizovat pouze pro úlohy určité kategorie,
tedy relativně jednodušší a izolovanější úlohy, obvykle nikoli úlohy celopodniko-
vého charakteru, i když uplatnění některých produktů (např. Power BI) i do této
sféry míří.

	Self‑service  BI  má  relativně  omezené  možnosti  čištění  a  konsolidace  dat,
které u standardních BI aplikací představují jednu z pracovně nejnáročnějších,
ale i finálně nejefektivnějších částí.

	Problémem je dosažení integrace dat v rámci podniku, které nabízejí celopod-

nikové datové sklady.

110

	S předchozí poznámkou souvisejí i omezené možnosti celopodnikového re-
portingu, např. centrálního reportingu v rámci nadnárodních společností apod.
	I když je příprava analytických aplikací na bázi self‑service BI uživatelsky výraz-
ně dostupnější, přesto je nutné, aby pro kvalitnější aplikace uživatelé ovládali
alespoň základní principy analytických metod, tj. především dimenzionálního
a datového modelování.

	Mění se pozice IT, z producenta výstupů do pozice tzv. „supervizora“. Je na něj
tedy kladena tíha řízení a kontroly celého prostředí a produkovaných výstupů.

Další schémata dokumentují využití nástrojů SSBI, viz Obrázek 9‑2 a Obrázek 9‑3 (na
následující straně).

9.4.3  Competitive Intelligence, CI

Efekty:

	Competitive Intelligence (CI), zabývající se sběrem, zpracováním a ochranou in-
formací, se orientuje na získávání konkurenčních výhod a zlepšování celkové-
ho postavení a úspěšnosti firmy na trhu.

	Tradiční  forma  „aktivního  CI“  se  primárně  zaměřuje  na  externí  informační
zdroje a tržní okolí firmy (odběratelé, dodavatelé, partneři, konkurence, legis-
lativní  rámec,  profesní  a  zájmové  komunity,  zpravodajské  portály,  sociální  sítě
apod.) s tím, že racionálně umožňuje následující funkce:
o  zmapovat tržní prostředí a aktivity konkurence,
o  zhodnotit pozici podniku vůči konkurentům,
o  odhalit případné vnější hrozby,
o  identifikovat možné příležitosti pro další růst a rozvoj.

	Doménou tzv. „pasivního CI“ (counter-CI) je pak ochrana vlastních interních
zdrojů před CI aktivitami konkurence a dále snaha zmapovat a vytěžit tyto interní
zdroje. Nabízí tyto možnosti:

o  omezit efekt CI aktivit konkurence,
o  upevnit / zlepšit stávající pozici podniku na trhu,
o  identifikovat klíčové nositele znalosti z řad zaměstnanců,
o  odhalit a využít možný skrytý potenciál uvnitř vlastního podniku.

	CI  zajišťuje  podporu  strategického  plánování  a  řízení  firmy  díky  aktuálním

informacím o stavu trhu a aktivitách konkurence.

	CI zahrnuje proaktivní vyhledávání příležitostí pro inovace a růst a tím i zlep-

šování pozice firmy na trhu.

Problémy:

	Efekty CI jsou obtížně měřitelné a mají spíše měkký / podpůrný charakter.
	Aktivity CI nelze plně automatizovat, je nutné je neustále přizpůsobovat okol-

nostem a aktuálním podmínkám.

111

Obrázek 9‑2: Dashboard pro řízení hotelu (zdroj: Zach, 2021)

Obrázek 9‑3: Analytický dashboard pro řízení autoservisu (Zdroj: Kratochvíl, 2021)

	Úspěšnost  CI  řešení  silně  závisí  na  použitých  informačních  zdrojích,  dostup-
nosti  kvalitních  a  spolehlivých  informačních  zdrojů,  která  je  zcela  klíčová  pro
efektivní CI.

	CI přináší největší efekt v dlouhodobém horizontu a vyžaduje trvalou investici

zdrojů (lidských i finančních).

	Pro úspěšnost CI je podstatné zvolit vhodný přístup k celému řešení a navrh-
nout správně architekturu s ohledem na další části podniku a dostupné infor-
mační zdroje, a to jak koncepčně, tak i z hlediska samotné použité technologie.

9.4.4  Kolaborativní rozhodování

Podle (Slánský, 2018).

Efekty:

	Kolaborativní  rozhodování  představuje  styl  rozhodování  v  řízení  firmy,  který
umožňuje manažerům spolupracovat a diskutovat vzdáleně nad analytický-
mi výstupy z BI aplikací i z jiných zdrojů.

	Kolaborativní rozhodování využívá kombinace BI platforem a sociálních sítí
a kombinuje tak tyto zdroje s názory manažerů v rámci takto uskutečňovaných
manažerských jednání a diskusí.

	Kolaborativní rozhodování je výrazně transparentnější, efektivně využívá dis-

ponibilní datové i technologické zdroje.

	Snižuje  časové  nároky  na  projednávání  a  přijímání  rozhodnutí  na  různých

úrovních řídicí hierarchie.

	Snižuje náklady na administrativu a řízení, např. omezením cestovních nároků

na realizaci manažerských schůzek.

Problémy:

	Je třeba řešit problém, kdy BI aplikace a jejich výstupy nejsou jednoznačně
přiřazené k řídicím a rozhodovacím aktivitám a je nutné je jasně definovat.
	Existují kulturní a organizační bariéry vedoucích pracovníků pro přijetí takové-

ho stylu řízení.

	Musí  být  jasně  vymezen  širší  byznys  kontext  vzhledem  ke  vztahům  byznys
procesů,  rozhodovacích  aktivit  na  různých  úrovních  řízení  a  adekvátních  BI,
resp. aplikací byznys analytiky a jejich funkcionality a výstupů.

	Je účelné nastavit i kvalifikační programy, zaměřené na výše uvedený kon-
text byznys procesů, rozhodování a BI včetně vytvoření nezbytných podklado-
vých materiálů i terminologických slovníků.

9.4.5  Business Activity Monitoring, BAM

Efekty:

	Business Activity Monitoring, BAM jsou procesy a technologie, které v reálném
čase vyhodnocují klíčové indikátory výkonnosti, problémy a omezení ve fun-

114

gování firmy.

	BAM monitoruje a vyhodnocuje nejrůznější anomálie v provozu firmy i v jejím

okolí.

	BAM přispívá k zrychlování a vyšší efektivitě byznys operací.
	BAM  poskytuje  systém  varování  (alertů)  na  základě  zjištěných  problémů

a omezení směrovaných na odpovídající podnikové role.

	BAM poskytuje důležité podklady pro rozvoj a zkvalitňování řízení celé firmy.

Problémy:

	Jako vstup je nutné provést kvalitní analýzu a dokumentaci procesů ve firmě.
	Problémem je obvykle motivace řadových pracovníků při účasti na projektech

BAM a jeho využívání v praxi.

	Častou otázkou je, co je skutečně efektivní monitorovat a vyhodnocovat, úpl-

nost by ve většině případů vedla k neúměrné složitosti.

 Doporučení k analýze úloh analytiky:

	Analytické  úlohy  představují  převážně  sledování  a  hodnocení  vy-
braných ukazatelů firmy podle různých analytických dimenzí na po-
třebné úrovni detailu.

	Každá  analytická  úloha  je  určena  disponibilními  datovými  zdroji
pro analytické operace, analytickými funkcemi a jim odpovídajícími
ukazateli a současně i adekvátními vazbami na ostatní komponen-
ty řízení v rámci anatomie firmy.

	Analytické úlohy se váží prakticky k většině oblastí řízení firmy.
	Při řešení analytických úloh je účelné si nejprve vyjasnit hlavní ana-
lytické  otázky  a  potenciální  problémy  a  přizpůsobit  je  problémům
firmy i potřebám uživatelů.

	Analytické úlohy jsou v různých modifikacích:

o  součástí funkcionality transakčních IT aplikací (ERP atd.),
o  obsahem a funkcionalitou specializovaných nástrojů a apli-
kací,  kde  klíčovou  roli  hrají  nástroje  business  intelligence
a self service business intelligence.

	Pro využití různých typů nástrojů a aplikací v rámci analytických úloh
je  nezbytné  analyticky  vyhodnotit jejich potenciální efekty a  pro-
blémy, které je při jejich přípravě a implementaci účelné brát v úvahu.

115

10.  Plánovací úlohy

 Plánování se vymezuje jako proces formulování cílů a způsobů jejich do-
sahování, přičemž plán je výstupem tohoto procesu (Král et al., 2012, s.
269).  Na  plánování  navazuje  rozpočtování  („budgeting“),  tj.  formulování
hodnotově vyjádřených cílů.

Účelem a výstupem plánovacích úloh jsou jak jednotlivé věcné plány, tak
rozpočty („budgets“). Rozpočtování věcné cíle, stanovené v rámci plánů,
konkretizuje  a  převádí  do  kvantifikovatelných  (peněžních)  hodnotových
veličin, např. náklady, výnosy (Fibírová et al. 2015, s. 306).

10.1  Obsah plánování

10.1.1  Principy plánování

Hlavním smyslem plánovacích úloh je snížení nejistoty budoucího vývoje, tj. plány
a rozpočty poskytují mechanismus, kontrolující zda jsou naplánované cíle plněny s ur-
čitými povolenými odchylkami (Žůrková 2007, s. 9). Klíčovým aspektem systému plánů
a rozpočtů je časový předstih, s nímž jsou možná rizika a úzká místa plnění cílů a ří-
zení firmy identifikována.

Plánování a plánovací úlohy plní několik klíčových funkcí:

	Koordinační funkce umožňují koordinovat činnost jednotlivých útvarů v rámci
společnosti, to znamená, že záměry řídicích pracovníků a všech útvarů i úrovní
řízení budou ve vzájemném souladu.

	Motivační funkce, řídicí pracovníci, kteří mají stanovené dílčí cíle, jsou k jejich

plnění motivováni pomocí finančního ohodnocení v podobě bonusů.

	Kontrolní funkce a měření výkonu, plány jsou nástrojem kontroly skutečného
vývoje jednotlivých ukazatelů ve srovnání s jejich výší, stanovenou rozpočty.

Úrovně plánování zahrnují 3 základní úrovně plánů:
o  strategické, cca na 10 let,
o  taktické (manažerské), 1 – 3 roky,
o  operativní, denní, týdenní, měsíční či kvartální.

Klouzavé  plánování  a  na  ně  navázané  klouzavé  rozpočty  představuje  v  praxi  tzv.
prognózování  (forecasting).  Funguje  na  principu  neustálé  aktualizace  plánů  a  roz-
počtů, a to na základě skutečně sledovaného vývoje. Umožňuje průběžně porovnávat
plány a rozpočty se skutečností a vyhodnocovat jejich dosavadní přesnost a příslušně
je upravovat pro další období.

10.1.2  Obsahové vymezení plánovacích úloh

S plánovacími úlohami je obvykle spojeno několik hlavních funkcí, zejména:

	vytvoření a využití plánovacího systému, respektujícího ve firmě uplatňova-

né plánovací a rozvrhové metody,

116

	specifikace ukazatelů a jejich hlavních plánovacích dimenzí, které budou hlav-

ním předmětem řešení při sestavování plánů,

	určení zdrojů a podkladů, na jejichž základě budou plány sestavovány, resp.

určovány plánované hodnoty vybraných ukazatelů (viz výše),

	vyhodnocení prostředí, resp. systému faktorů, určujících možnosti a omeze-
ní pro sestavování plánů (situace na trhu, vztahy k zákazníkům a dodavatelům,
personální zdroje a situace na pracovním trhu atd.),

	konsolidace  vytvářených  plánů,  vznikajících  v  různých  organizačních  jednot-
kách, tj. závodech, divizích, odděleních, nebo naopak rozpouštění centrálně sta-
novených plánů na tyto jednotky,

	konsolidace hodnot z různých druhů plánů, např. plánu investičního, výrob-
ního nákupního, prodejního, personálního apod. do výsledného, obvykle finanč-
ního plánu,

	konsolidace plánů z pohledu různých měn a přepočet na výslednou požado-

vanou měnu,

	automatizace  řízení  pracovního  toku  („workflow“)  při  přípravě  plánu,  resp.
plánů, na kterém se podílejí různí manažeři, plánovači a další pracovníci firmy,
v rámci toho probíhá projednávání plánů a jejich schvalování,

	efektivní  zpřístupňování  sestavených  plánů  zainteresovaným  pracovníkům

firmy,

	zajištění potřebné bezpečnosti a nastavení přístupových práv pro zpracování
plánů i pro jejich prezentaci ve firmě, případně mimo ni, kde jde o možnosti jejich
čtení, zápisu a schvalování.

10.2  Příklad: Plánování a rozvrhování prodeje

Plánovací  úlohy  jsou  zaměřené  na  přípravu  různých  druhů  plánů.  Úloha  prezen-
tovaná  zde  je  založena  na  principu  speciálních  plánovacích  nástrojů,  nebo  konceptu
business intelligence (Obrázek 10‑1).

Obrázek, obdobně jako v případě analytických úloh, i zde ukazuje podstatné datové
zdroje, nezbytné pro čerpání dat k plánovacím metrikám. Plánovací funkcionalita za-
hrnuje různé druhy plánů pro plánování a rozvrhování prodeje. Třetí součástí jsou již
zmíněné plánovací nástroje.

10.3  Analytické otázky

Další podkapitoly obsahují analytické otázky pro řešení plánovacích úloh v rámci jed-
notlivých oblastí řízení (finance, prodej, nákup, sklady atd.).

10.3.1  Vztah k byznysu

	Jak  zvýšit  úspěšnost  a  výkonnost  byznysu  díky  vysoké  kvalitě  plánovacích

úloh?

117

	Jak identifikovat hlavní problémy firmy vzhledem k úrovni a kvalitě plánovacích

úloh, jaké dopady mají na úspěšnost jejího byznysu?

	Jak správně a racionálně aplikovat plánovací metodiky firmy do řešení pláno-

vacích úloh?

	Jak zajistit vysokou komplexnost a kvalitu plánovacích operací v řízení firmy?
	Jaké plánovací ukazatele a plánovací dimenze stanovit vzhledem k aktuálním

a očekávaným potřebám firmy?

	Jak průběžně analyzovat odchylky od vytvořeného plánu?
	Jak zajistit vysokou prezentační úroveň výsledků plánů s využitím kvalitní vizu-

alizace dat?

	Jak zajistit propojení různých typů plánů (rozvaha, výsledovka, cash‑flow)?
	Jak  v  oblasti  finančního  plánování  zajistit  měnové  konverze  při  plánování
i  s  analýzou  dopadů  kursovních  rozdílů,  transformace  plánovaných  hodnot
do nákladů a výnosů, jak zajistit konsolidace s vyloučením vnitropodnikových
transakcí?

	Jak nabídnout možnosti individuálních plánů pro jednotlivé manažery a speci-

alisty firmy?

Obrázek 10‑1: Úloha plánování ve firmě

118

10.3.2  Příprava plánů

	Jak  nastavit  různé  možnosti  alokace  hodnot,  podporu  top‑down  a  bottom‑up

plánování atd.?

	Jak zajistit pro přípravu plánů adekvátní a kvalitní datové zdroje?
	Jak dosáhnout požadovanou granularitu dat v rámci plánovacích operací?
	Jak zajistit potřebnou dostupnost plánovacích operací v místě a čase?
	Jak připravovat a realizovat plánovací operace pro různé časové horizonty?
	Jak  umožnit  i  v  rámci  plánovacích  operací  realizovat  sofistikované  predikce

plánovaných hodnot?

	Jak připravovat plány ve variantách s jejich adekvátním ohodnocením a stano-

vením priorit?

	Jak umožnit verzování plánů?
	Jak realizovat automatizovanou konsolidaci plánů bez ohledu na složitost or-

ganizační struktury?

10.3.3  Řízení plánovacích úloh

	Jak nastavit zodpovědnosti a kompetence za přípravu jednotlivých druhů plánů?
	Jaké  podstatné  faktory  (ekonomické,  legislativní,  personální,  organizační)  je

třeba při přípravě a realizaci plánovacích úloh brát v úvahu?

	Jak  zajistit  efektivní  kooperace  a  průběh  schvalování  připravovaných  plánů,

např. na bázi řízení pracovních toků („workflow“)?

	Jak  respektovat  dislokaci  firmy  (odloučené  pobočky,  závody)  při  organizaci

přípravy jednotlivých druhů plánů?

	Jak správně vyhodnotit potřebu specializovaných plánovacích nástrojů (Targetty,
TM1 apod.) oproti základním řešením na bázi standardních produktů BI nebo SSBI?
	Jak  zajistit  kvalitní  přípravu  specialistů  plánovačů  vzhledem  k  charakteru
a potřebě plánovacích operací ve firmě a současně vzhledem k vybraným soft-
warovým nástrojům pro plánovací úlohy?

	Jak vytvářet přehledy zobrazující skutečnost i plán a historie plánovaných hodnot?

10.4  IT pro plánovací úlohy

Aplikace a nástroje pro řešení plánovacích úloh lze rozdělit do několika úrovní:

	Specializované nástroje pro plánování

o  jsou většinou založené na multidimenzionálním uložení a zpracování dat,
jako např. Targetty, TM1, Oracle Planning Cloud, Cognos apod. Těm vě-
nujeme část 10.8.1 – 10.4.1.

	Standardní prostředky: Business intelligence, BI a Self Service Business

Intelligence, SSBI:

o  Využití Business intelligence technologií je velmi účelné i pro řešení plá-
novacích úloh, kdy je třeba nejen data zpřístupňovat podle nejrůznějších
definovaných dimenzí, ale i nová data, tedy plány, tvořit, rovněž s respek-
továním těchto dimenzí a jejich hierarchických struktur,

119

o  tato řešení jsou obvykle založena na využití dimenzí obsahujících varianty
nebo druhy plánů a oproti tomu prvky specifikující hodnoty skutečnosti,
o  oproti  specializovaným  nástrojům  nemají  tato  řešení  automatickou  pod-
poru funkcí plánování, např. rozpady souhrnných plánovaných hodnot na
nižší úrovně dimenzí podle rozpadových (obvykle percentuálních) sché-
mat. Uživatel musí tyto operace realizovat více méně manuálně.

	Celopodnikové systémy, ERP, Enterprise Resource Planning:

o  Celopodnikové ERP systémy a obdobně i další aplikace převážně trans-
akčního  charakteru  (WMS,  CRM,  mobilní  aplikace)  mají  v  sobě  rovněž
zabudovanou základní plánovací funkcionalitu,

o  výhodou je přímá vazba na zdrojová data pro plánování v podobě trans-
akčních databází, na druhé straně nedisponují takovou flexibilitou a boha-
tostí plánovacích funkcí, jako tomu je v případě výše uvedených nástrojů.

	Kancelářské prostředky, Excel:

o  V tomto případě jde o nejjednodušší prostředky pro přípravu plánů, byť

v mnoha firmách hodně oblíbené a někdy i jediné,

o  často je Excel využíván i jako doplňující prostředek pro tyto účely k velkým
transakčním systémům, zejména ERP, odkud se obvykle nakopírují základ-
ní potřebná data a na nich už uživatel realizuje své plánovací funkce,
o  výhodou  je  zde  jednoduchost,  minimální  náklady  a  běžná  uživatelská
znalost těchto prostředků, na druhé straně je tu také menší podpora spe-
cifických plánovacích funkcí,

o  problémem je také v úvodu zmíněná konsolidace plánů, zde realizovaná

většinou pouze manuálně a s rizikem chyb.

V další podkapitole se zaměříme na hlavní efekty a problémy specializovaných pláno-
vacích nástrojů.

10.4.1  Plánovací aplikace a nástroje

Efekty:

	Základem plánovacích aplikací jsou plánovací algoritmy a z technologického
hlediska  i  možnosti  zpětného  zápisu  („write  back“)  do  multidimenzionálních
databází OLAP.

	Plánovací aplikace respektují využití plánovacího systému a plánovací a rozvr-

hové metody, uplatňované ve firmě.

	Podporují většinu konsolidačních funkcí, uvedených v úvodu této kapitoly.
	Obsahují automatizovanou datovou konsolidaci plánů.
	Zajišťují automatizace řízení pracovního toku („workflow“) při přípravě plánu,
resp. plánů, na kterých se podílejí různí manažeři, plánovači a další pracovní-
ci firmy a současně poskytují průběžné kontroly stavu plánovacího procesu
a jeho postupu.

120

	Umožňují efektivní zpřístupňování sestavených plánů zainteresovaným pra-

covníkům firmy.

	Obsahují zajištění potřebné bezpečnosti a nastavení přístupových práv pro
zpracování plánů i pro jejich prezentaci v podniku, případně mimo podnik, kde
jde o možnosti čtení, zápisu a schvalování plánů.

	Umožňují zapojení většího počtu pracovníků při sestavování plánů.
	Poskytují možnost vytvářet plány na vyšším stupni detailu, resp. na všech po-

třebných úrovních detailu.

	Znamenají  podstatné  zkrácení  časového  fondu  potřebného  k  tvorbě  plánů
a současně úsporu pracnosti jednotlivých zainteresovaných zaměstnanců do
plánovacího procesu, zejména při konsolidaci plánů.

	Přispívají ke snížení chybovosti způsobené lidským faktorem při přípravě plá-
nů, výpočtech plánovaných hodnot podle dimenzí, zajištění konzistence hodnot
podle dimenzí.

	Zajišťují propojení různých typů plánů (rozvaha, výsledovka, cash‑flow atd.).
	Respektují změny organizační struktury, ovlivňující strukturu a obsah plánů.

Problémy:

	Analytici musí dobře pochopit plánovací metodiky a zvyklosti firmy a principy

plánování obecně.

	Pro přípravu plánů s uvedenými nástroji je třeba dobře vyhodnotit faktory, ovliv-

ňující jejich přípravu a naplnění.

	Existuje potřeba zavedení nástrojů a technologií pro práci s multidimenzionál-

ními databázemi.

	Některé nástroje jsou relativně komplikované a analytici a plánovači je musí

dobře pochopit a kvalifikovaně používat.
	Při využití cloudové varianty aplikace:

o  jsou citlivá data uložena neznámo kde, zpřístupněná pouze přes internet,
o  existuje závislost na poskytovateli,
o  poskytovatel může měnit ceny svých služeb,
o  poskytovatel může i zaniknout.

10.4.2  Souhrnný příklad: plánovací systém Targetty

Pro dokumentaci plánovacích nástrojů využijeme několik dílčích příkladů, založených
na plánovacím nástroji Targetty společnosti Uniwise.

10.4.2.1  Plán investic (CAPEX)

Plán investic je složen ze tří částí (Obrázek 10‑2):

	Kategorizace investice a přiřazení kódu projektu.
	Zadání celkové hodnoty investice, doby odpisu a aktivace. Vypočtený měsíční

odpis bude kopírován do příslušných období plánu.

	Hodnoty CAPEX – zadání hodnot výdajů v rámci projektu – slouží pro výpočet

cash‑flow.

121

Obrázek 10‑2: Plán investic, CAPEX, Targetty (Zdroj: Uniwise, 2020)

10.4.2.2  Plán variabilních nákladů

Plán  je  zadáván  na  střediska  kumulativně  (Obrázek  10‑3  a  Obrázek  10‑4).  Výchozí
struktura plánu variabilních nákladů je tato:

•	 Nákup zboží.
•	 Subdodávky.
•	 Doprava – externí.
•	 Doprava – interní.
•	 Škody, úbytky a přecenění.
•	 Ekologie.
•	 Ochranné pomůcky.
•	 Ostatní variabilní náklady.

Obrázek 10‑3: Plán variabilních nákladů – Targetty (Zdroj: Uniwise, 2020)

10.4.2.3  Plán nákladů středisek (OPEX)

Obrázek 10‑4: Plán nákladů středisek – Targetty (Zdroj: Uniwise, 2020)

122

1.1.1.1

Plán přijatých a poskytnutých úvěrů

Další tabulka slouží k plánování přijatých a poskytnutých úvěrů (Obrázek 10‑5):

Obrázek 10‑5: Plánování úvěrů – Targetty (Zdroj: Uniwise, 2020)

10.4.3  IBM Cognos TM1

Významným produktem pro účely plánování je systém IBM Cognos TM1. Hlavní kom-
ponentou  je  TM1  Server,  který  ukládá  všechny  datové  kostky  a  jejích  metadata.  Ke
kostkám lze přistupovat pomoci dalších TM1 nástrojů. Dále je uvedeno pouze několik
jejich příkladů:

Obrázek 10‑6: IBM Cognos TM1 Perspective

Obrázek 10‑7: IBM Cognos TM1 Web

123

Obrázek 10‑8: IBM Cognos Insight

 Doporučení k analýze plánovacích úloh:

	Plánovací úlohy představují sestavování různých druhů plánů a je-

jich následné konsolidace.

	Plánovací úlohy realizují několik klíčových funkcí:

o  koordinační funkce,
o  motivační funkce,
o  kontrolní funkce a měření výkonu.

	V plánování se pracuje se 3 základními úrovněmi plánů, tj. strate-

gickými, taktickými, operativními.

	  Klouzavé  plánování  a  klouzavé  rozpočty  představují  v  praxi  tzv.

prognózování („forecasting“).

	Každá plánovací úloha je určena systémem plánovacích ukazatelů,

jejich dimenzí a disponibilními datovými zdroji.

	Plánovací  úlohy  se  váží  prakticky  k  většině  oblastí  řízení  firmy

a podle toho se vytvářejí i jednotlivé druhy plánů.

	Při řešení plánovacích úloh je účelné si nejprve vyjasnit hlavní ana-
lytické  otázky  a  potenciální  problémy  a  přizpůsobit  je  problémům
firmy i potřebám jednotlivých uživatelů.

124

	Řešení  plánovacích  úloh  musí  brát  v  úvahu  celou  škálu  podstat-
ných  faktorů  (ekonomických,  legislativních,  organizačních  atd.),
které výsledné návrhy plánu ovlivní.

	Plánovací úlohy jsou realizovány na několika úrovních plánova-

cích nástrojů a aplikací:

o  specializovanými plánovacími nástroji,
o  využitím nástrojů business intelligence a self service business

intelligence,

o  jsou součástí funkcionality transakčních IT aplikací (ERP atd.),
o  realizuji se i s využitím základních kancelářských prostředků,

zejména Excelu.

	Pro  využití  různých  typů  nástrojů  a  aplikací  v  rámci  plánovacích
úloh je nezbytné analyticky vyhodnotit jejich potenciální efekty
a problémy, které je při jejich přípravě a implementaci účelné brát
v úvahu.

125

11.  Úlohy pokročilé analytiky

 Úlohy  pokročilé  analytiky  představují  funkce  dolování  dat,  prediktivní

analytiky, text miningu, process miningu a další (např. predikce vývoje pro-
deje,  predikce  finančních  potřeb,  investičních  akcí,  predikce  vývoje  cash
flow, predikce ztráty klientů apod.).

Účelem úloh pokročilé analytiky je poskytovat podklady a informace mana-
žerům a specialistům k řešení složitých manažerských úloh, predikcí, hod-
nocení konkurence apod.

11.1  Obsah pokročilé analytiky

11.1.1  Pokročilá analytika jako součást podnikové, byznys analytiky

Pokročilá analytika představuje soustavu konceptů, přístupů, metod a produktů, je-
jichž  společnou  charakteristikou  je  sofistikovanost  analytických  a  plánovacích  funkcí.
Přesto  je  účelné  ji  zasadit  do  celého  širšího  komplexu  metod  a  nástrojů  podnikové
byznys analytiky, jejíž rozmanitost je v současné době mimořádná. Místo pokročilé ana-
lytiky  a  alespoň  jejích  několika  metod  a  nástrojů  v  podnikové  analytice  dokumentuje
Obrázek 11‑1.

Obrázek 11‑1: Pokročilá analytika, součást byznys analytiky

126

11.1.2  Úrovně pokročilé analytiky

Jako východisko charakteristik pokročilé analytiky je účelné využít schéma společnosti
Gartner (Obrázek 11‑2):

Obrázek 11‑2: Úrovně řešení pokročilé analytiky (Zdroj: Gartner Analytic Ascen-
dency Model)

Jak je patrné z obrázku, společnost Gartner rozlišuje tyto úrovně pokročilé analytiky:

	Funkce deskriptivní analytiky: „Co se stalo?“
	Funkce diagnostické analytiky: „Proč se to stalo?“
	Funkce prediktivní analytiky: „Co se stane a proč?“
	Funkce preskriptivní analytiky: „Co udělat, aby se něco stalo?“

Uvedeným funkcím pak odpovídají jednotlivé dílčí funkce a úlohy a odpovídající nástroje.

11.1.3  Kategorizace funkcí pokročilé analytiky

Obdobně jako v případě základních podnikových úloh, tak i v oblasti pokročilé analytiky
je účelné kategorizovat dílčí úlohy na základní typy, neboť to podporuje systematič-
nost řešení a zvyšuje jeho kvalitu. To zdůrazňují i F. PROVOST A T. FAWCETT v publi-
kaci „Data Science for Business“, 2013. K hlavním typům úloh pokročilé analytiky, podle
uvedených autorů, patří:

	Klasifikace  a  hodnocení  pravděpodobnosti  tříd  (Classification  and  class

probability estimation):

o  predikuje pro každý objekt, do které sady tříd patří,
o  obvykle jsou třídy vzájemně disjunktní,
o  data mining vytváří model, který určuje, do které třídy objekt patří a s tím
související scoring, tj. odhad pravděpodobnosti správnosti takového za-
řazení.

127

	Regrese – „hodnocení hodnot“ (Regression – „value estimation“):

o  odhaduje nebo predikuje pro každý objekt numerickou hodnotu určité pro-

měnné,

o  např. „Nakolik určitý zákazník bude využívat určitou službu?“ – proměnná

je „využití služby“.

	Přiřazování podobností (Similarity matching):

o  identifikuje podobné objekty na základě o nich známých dat,
o  v této souvislosti se využívá tzv. „firmographic“, což jsou podstatné cha-

rakteristiky firem a od nich odvíjených objektů,

o  např. „Jaké firmy jsou obdobné našim nejlepším zákazníkům?“

	Klastrování (Clustering):

o  seskupuje objekty na základě jejich podobnosti, ale ne odpovídající něja-

kému specifickému účelu,

o  např. „Představují naši zákazníci nějaké přirozené skupiny nebo segmenty?“

	Seskupování podle výskytů (Co-occurence grouping):

o  pokouší  se  najít  asociace  mezi  entitami  na  základě  transakcí,  které  je

zahrnují,

o  patří sem také „Odhalování asociačních pravidel“ nebo „Analýza nákup-

ního košíku?“,

o  např. „Jaké položky se obvykle nakupují dohromady?“

	Profilování (Profiling):

o  charakterizuje typické chování jednotlivce nebo skupiny,
o  označuje se také jako „Popis chování“,
o  např. „Jaké je typické použití mobilního telefonu v tomto segmentu zákaz-

níků?“

	Predikce vazeb (Link prediction):

o  predikuje vazby mezi datovými položkami a obvykle navrhuje, že taková

vazba by měla existovat a jaká je síla této vazby,

o  např. „Jestliže úloha analýza prodeje je ovlivněna faktorem úroveň man-
agementu, pak by měla být ovlivněna i faktorem kultura firmy, a to s ob-
dobnou sílou tohoto vztahu“.

	Redukce dat (Data reduction):

o  redukuje velké objemy dat pro analýzy pouze na ty nejpodstatnější infor-

mace,

o  menší objemy vybraných dat jsou snáze využitelné, nakonec i lépe posky-

tují právě relevantní informace.

	Náhodné modelování (Casual modeling):

o  pokouší se pochopit, které události nebo akce aktuálně ovlivňují ty ostatní,
o  často je založené na náhodně vybraných a řešených experimentech.

128

Jeden z fundamentálních principů pokročilé analytiky je podle (PROVOST, F., FA-
WCETT,  T.,  2013)  správně  vybrat,  kombinovat  a  využívat  uvedené  úlohy  pro  řešení
konkrétních problémů byznysu.

11.2  Příklad: Prodej – pokročilá analytika

Úlohy pokročilé analytiky, resp. pokročilé byznys analytiky, jsou založené na uplatňo-
vání metod a nástrojů, využívajících matematický a statistický aparát, a současně
na systému klíčových ukazatelů firmy, KPI, jak dokumentuje Obrázek 11‑3.

Obrázek 11‑3: Úloha pokročilé analytiky

Obrázek se v tomto případě zaměřuje hlavně na přehled klíčových ukazatelů výkon-
nosti, KPI, které mohou být pro využití pokročilé analytiky relevantní a následně i na
alespoň  vybrané  funkce,  obvykle  uplatňované  pro  pokročilé  analýzy  prodeje.  Třetí
součástí je přehled již výše zmíněných nástrojů.

11.3  Analytické otázky

11.3.1  Vztah k byznysu

	Jak  správně  vybrat  metody  a  nástroje  pokročilé  analytiky  vzhledem  k  potře-

bám, ale i personálním a technickým možnostem firmy?

	Jak motivovat manažery na uplatňování metod pokročilé analytiky?

129

	Jak dobře zvládnout a efektivně zpřístupnit uživatelům sofistikované metody
a  nástroje  byznys  analytiky  jako  je  data  mining,  prediktivní  analytika,  proces
mining, competitive intelligence apod.?

	Jak dobře vyhodnotit ekonomickou náročnost řešení úloh pokročilé analytiky
v relaci k potenciálním ekonomickým i mimoekonomickým byznys efektům?

11.3.2  Řešení pokročilé analytiky

	Jak racionálně snižovat složitost při uplatnění metod pokročilé analytiky?
	Jak umožnit i v rámci analytických operací realizovat relevantní predikce hod-

not, tj. s efektivním využitím prediktivní analytiky?

	Jak umožnit realizovat analýzy i na základě heterogenních a externích dato-
vých zdrojů, jak správně vyhodnocovat potřebu externích datových zdrojů z po-
hledu jejich obsahu, kvality, technické i ekonomické dostupnosti?

	Jak provádět analýzy nejen nad strukturovanými, ale i nestrukturovanými daty?

11.3.3  Řízení úloh pokročilé analytiky

	Jak efektivně kombinovat a zajistit spolupráci různých specialistů, tj. se zna-

lostí byznys obsahu a se znalostmi metod pokročilé analytiky?

	Jaké relevantní faktory je třeba brát v úvahu při rozhodování o orientaci a uplat-

nění pokročilé analytiky?

	Jak naplánovat projekty pro úlohy pokročilé analytiky, s jakými prioritami?
	Jak  zajistit  kvalitní  kvalifikační  přípravu  uživatelů  i  analytiků  pro  řešení  úloh

pokročilé analytiky?

	Jak správně vybrat produkty pro jednotlivé metody a úlohy pokročilé analytiky,
např. integrované do větších systémů, např. databázových, nebo zcela speciali-
zované a poskytující i specifickou funkcionalitu?

11.4  IT pro úlohy pokročilé analytiky

V souvislosti s IT uvádíme vyprané typy nástrojů, které jsou pro úlohy pokročilé ana-
lytiky významné:

	Data Science.
	Data Mining, DMI.
	Predictive Analytics, PA.
	Text Mining.
	Big Data Analytics.
	Process Mining.
	Infonomics.

V dalších podkapitolách jsou uvedeny pouze hlavní efekty a případné problémy uve-
dených nástrojů v podmínkách úloh pokročilé analytiky.

130

11.4.1  Data Science

Efekty:

	Nabízí přístup k řešení IT, který z velkého množství komplexních dat získává

informace a znalosti.

	Přístup je příbuzný oblasti dolování dat, ale rozšiřuje ho o kontext celé oblasti

Big Data analytics.

	Představuje řešení v několika fázích:
o  porozumění business logiky dat,
o  příprava dat,
o  modelování / optimalizace / simulace,
o  vyhodnocení a nasazení analytického modelu.

	Data science využívá celého komplexu metod statistiky, rozpoznávání vzorů,

operačního výzkumu, strojového učení.

	Poskytuje využití netriviálních dat z různých zdrojů ke strategickým rozhodnu-

tím a nalezení souvislostí napříč různými datovými zdroji.

	Nabízí využití výsledků například v těchto oblastech: CRM, optimalizace a au-
tomatizace ve výrobních podnicích, quality a risk management, analýzy a vzory
zákaznického chování.

	Stále  rostoucí  počet  nestrukturovaných  dat  s  sebou  přináší  výzvu,  jak  tato
data využít. S příchodem trendu Internet-of-Things dojde k ještě prudšímu nárůs-
tu objemů dat a současně k využití principů Data Science.

Problémy:

	Obor  je  náročný  na  znalosti  z  konkrétního  oboru  a  na  kooperaci  s  ostatními

odborníky a specialisty.

	Jeden z fundamentálních principů Data Science je správně vybrat, kombino-

vat a využívat uvedené úlohy pro řešení konkrétních problémů byznysu.

	Nekvalifikované analýzy mohou vést ke špatným rozhodnutím.
	Velké množství dat přináší otázku, jak tato data řídit uvnitř organizace a jak je

zabezpečit před zneužitím.

	Data Science znamená vysoké náklady spojené s potřebou nejnovějších tech-
nologií a rovněž vysoké personální náklady, dané požadovanou kvalifikací pra-
covníků.

11.4.2  Dolování dat, Data Mining, DMI

(Zdroj: Kulhavý, L. 2011.)

Efekty:

	Dolování dat (Data Mining, DMI) poskytuje proces extrakce relevantních, pře-
dem neznámých nebo nedefinovaných informací z velmi rozsáhlých databází.

131

	Dolování dat zajišťuje analýzy odvozované z obsahu dat, nikoli předem spe-
cifikované uživatelem nebo implementátorem, a to především odvozované pre-
diktivní informace.

	Dolování dat nabízí k využití celou řadu metod, např.:

o  Rozhodovací stromy.
o  Rozhodovací pravidla.
o  Neuronové sítě.
o  Bayesovská klasifikace.
o  Evoluční algoritmy.
o  Metody založené na analogii.
o  Induktivní logické programování (ILP).

	Umožňuje využívat speciální algoritmy, pomocí kterých lze v datech vyhledat

strategické informace.

	Poskytuje informace na prediktivní i deskriptivní bázi (viz výše).
	Představuje silný analytický nástroj managementu za předpokladu dobrých

znalostí řídicích pracovníků v této oblasti.

	Podporuje detekci, založenou na fraudových systémech.
	DMI napomáhá detekovat faktory, které mají vliv na zvýšení příjmu a snížení

nákladů společnosti.

	V  oblasti  vymáhání  trestního  práva  napomáhá  odhalovat  trestné  činy  a  pa-
chatele tím, že pomocí algoritmů zkoumá trendy, zvyky a jiné chování v geogra-
ficky ohraničené oblasti.

Problémy:

	Vzniká  hrozba  potencionálního  zneužití  osobních  údajů  ze  strany  společ-
ností, vlastnících citlivá data (např. společnost American Express prodala jiné
společnosti výpisy kreditních karet svých zákazníků).

	V praxi je velmi častá absence vhodného bezpečnostního systému.
	Existují problémy zneužití dat ze strany realizátora, popřípadě majitele DMI

analýzy.

	V praxi je aktuálně špatné povědomí a neznalost DMI ze strany managementu.
	DMI představuje příliš složitou problematiku pro pochopení zákazníka.
	Problémem mohou být vysoké náklady, spojené s implementací.

11.4.3  Prediktivní analytika, Predictive Analytics, PA

Efekty:

	Prediktivní analytika, PA využívá dostupná data k předpovědi budoucích jevů.
	Schopnosti úspěšné predikce se využívá ke zlepšení rozhodnutí, které je tak více
postavené na faktech (vztazích, trendech) nalezených v datech, než na intuici.

132

	PA umožňuje, že se postupně realizuje promítání aktuálních událostí do pre-

diktivních modelů v reálném čase.

	Prediktivní analytika nabízí následující funkce:

o  klasifikace, distribuce objektů do předdefinovaných tříd a kategorií,
o  hodnocení, predikování hodnot proměnných,
o  klastrování, identifikace skupin obdobných objektů,
o  predikce, klasifikace, hodnocení a klastrování hodnot nebo chování, které

lze očekávat,

o  analýza souvislostí, určení, které objekty se mohou vyskytovat v prediko-

vaných situacích s jinými objekty, vyhodnocení jejich vztahů.

	Moderní  prediktivní  modely  a  jejich  algoritmy  jsou  postavené  na  principech

strojového učení („machine learning“).

	Modely se různými způsoby učí z historických dat, v nichž hledají významné
vztahy a proměnné, vztahující se k cílové proměnné (proměnným), která je v his-
torických datech známa, a kterou je v konkrétním případě žádoucí predikovat.
	Prediktivní modely poskytují možnosti generalizace, tj. schopnost naučit se na
dostupných datech jen to, co je důležité a na druhé straně správně vyhodnotit
náhodné jevy a šumy v datech jako nevýznamné.

Problémy:

	Obvyklým  problémem  je  nedostatek  dat  pro  vyvinutí  úspěšných  a  prakticky

uplatnitelných prediktivních modelů.

	Prediktivní analytika je citlivá na nedostatečnou kvalitu dat, s takovými projevy,

jakými jsou redundance, duplicity, chyby, absence unifikovaných dat.

	Problémy přeučení a nedoučení se týkají všech typů modelů.
	Realizace PA je časově náročná, s nejistým výsledkem.

11.4.4  Text Mining

Efekty:

	Text Mining, resp. textová analytika, představuje analýzu textových zdrojů

a získávání nových informací.

	Zdroje pro analýzy mohou být velmi různorodé od knižních nebo novinových
publikací, přes blogy, pracovní poznámky zaměstnanců, např. o kontaktech se
zákazníky, o situaci na trhu apod.

	Text mining se velmi silně uplatňuje v aplikacích Competitive Intelligence. Do
určité míry s text mining souvisí i oblast analýzy obsahu, Content Analytics,
která rozšiřuje zdroje o fotografie, multimédia, hlas, případně další.

	Text mining i analýzy obsahu umožňují např. identifikovat významné nebo na-
opak problémové zákazníky, problémy spojené s dodávanými produkty nebo
poskytovanými službami.

133

	Umožňují kvalitně a komplexně vyhodnocovat aktivity konkurence a případná

ohrožení konkurencí.

	Vyhodnocují a připravují varování, související s legislativními změnami.
	Vyhodnocují bezpečnostní problémy nebo ohrožení.

Problémy:

	Je  účelné  provést  komplexní  analýzu  dostupných  zdrojů  nestrukturovaných

dat.

	Je nezbytné sledovat jejich provázání nebo kombinace se strukturovanými

daty, které mohou být předmětem analýzy jinými nástroji.

	V souvislosti s dostupností datových zdrojů pro text mining je účelné vyhodno-
tit  jejich  technickou  i  organizační  dostupnost  a  ekonomickou  náročnost
vzhledem k požadavkům a potenciálním efektům.

11.4.5  Analýzy velkých dat, Big Data Analytics

Efekty:

	Big  Data  poskytuje  koncept,  který  definuje  vlastnosti  samotných  dat,  resp.

technologie pro jejich efektivní zpracování a analýzu.

	Otevírá dosud nevyužité informační kanály, jako jsou sociální sítě, multime-
diální data či senzory výrobních zařízení, které mohou v kombinaci s původními
datovými zdroji poskytovat prostor pro analýzy dosud nedosahovaného rozsahu.
	Využívá tzv. Dark Data, tedy data, která společnost shromažďovala, ale bylo ná-
kladově neefektivní tato data analyzovat, a která na základě současných technolo-
gií mohou přinést transparentní informace a využít je při rozhodovacích procesech.
	Uložená transakční data obsahují přesné a detailní informace o výkonnosti
procesů ve firmě. Tyto informace mohou sloužit pro zlepšování jejich výkonnosti
a podávají více informací managementu při rozhodování za nejistoty. Toto platí
pro všechny stupně managementu: strategický, taktický, operativní.

	Přispívá k optimalizaci výkonnosti organizace, neboť lze lépe monitorovat vliv
změn na výkonnost, zjišťovat příčiny výkyvů ve výkonnosti a efektivně rozdělovat
zdroje firmy.

	Zvyšuje transparentnost a poskytuje snadnější a rychlejší přístup k relevantním

datům, dostupným napříč odloučenými odděleními.

	Využívá  specifické  analytické  nástroje,  které  mohou  výrazně  zlepšit  proces
rozhodování, minimalizovat riziko nebo odhalit cenné informace v rozsáhlých ob-
jemech dat, které by jinak zůstaly skryté.

	Umožňuje inovativní postupy pro modelování experimentů a možnost testo-
vat hypotézy a analyzovat jejich výsledky pro důležitá investiční rozhodnutí.
	Poskytuje komplexní podporu vývoje nových produktů a služeb, jejichž vlast-
nosti a funkce pomáhá přesněji definovat analýza velkých objemů různorodých dat.

134

Problémy:

	Big Data Analytics zahrnuje v sobě nástroje a postupy pro práci s datovými
objemy  tak  rozsáhlými  a  komplexními,  že  je  při  jejich  ukládání,  zpracování
a analýze nemožné používat tradiční databázové a analytické nástroje.
	Big Data nesou s sebou nové a podstatně vyšší nároky na kvalifikaci odborní-
ků, a to jak na straně managementu nebo business analytiků (ti, co budou klást
otázky „hypothesis-driven“), tak na straně lidí, kteří budou data zkoumat.

	Data i ve velkých objemech a různorodosti dostávají smysl až ve chvíli, kdy jsou
konfrontována s nějakým modelem nebo hypotézou. Pokud hypotéza nebo
model nejsou relevantní (business požadavky jsou špatně interpretovány), po-
tom  Big  Data  nepřinášejí  přidanou  hodnotu,  naopak,  spotřebovávají  čas,  pro-
středky a náklady.

	Nutnost  využití  clusterů  (množin  zařízení)  ke  správě  a  zpracování  dat,  což
může (ale ne nutně) znamenat vyšší pořizovací náklady na hardware (to platí jen
v případě on‑premises řešení).

	Big Data, která jsou získávána prostřednictvím sociálních sítí, vyhledávání atd.,
mohou přinést cenné informace jedině za předpokladu reálně nastavených hy-
potéz („hypothesis-driven analytics“) a k nim relevantních dat.

	K  problémům  Big  Data  patří  především  hrozby  související  se  soukromím,

bezpečností a vlastnictvím dat.

	Big Data není náhradou relačních databází (Halama, 2021).

11.4.6  Process Mining

Efekty:

	Process Mining se nachází na pomezí machine learningu, data miningu na
straně jedné  a procesního modelování a analýzy na straně  druhé.  Hlavním
efektem proces miningu je odhalování, monitorování a zlepšování reálných pro-
cesů extrahováním znalostí z logů událostí již dostupných z dnešních systémů
(Aalst, 2016).

	Umožňuje objevování, tj. vezme log událostí a vyprodukuje model bez použití

apriorní informace.

	Poskytuje  conformance  checking,  neboli  kontrolu  souladu.  Existující  model
procesu je porovnáván s logem událostí. Kontrola souladu může být použita jako
kontrola reality, tak, jak je zaznamenána v logu, odpovídá modelu a naopak.
	Nabízí enhancement, neboli zlepšování, to je rozšíření nebo zlepšení exis-
tujícího procesu použitím informací dostupných z logů událostí aktuálně bě-
žících  procesů.  Zatímco  Conformance  checking  měří  shodu  mezi  realitou
a modelem, třetí typ cílí na zlepšování nebo rozšiřování apriorního modelu.
Výsledkem  pak  může  být  model,  který  je  opravený  a  lépe  reflektuje  realitu
(Adamec, 2018).

135

Problémy:

	Vyžaduje dostatečné množství dat ve vazbě k procesům.
	Předpokládá potřebné znalosti na straně analytiků i uživatelů.
	Uplatnění process mining může být nákladově velmi náročné.

11.4.7  Infonomics

Efekty:

	Infonomics  klasifikuje  informaci  jako  aktivum  společnosti.  Informační  akti-
vum je jakýkoli digitální/fyzický objekt řízený firmou, který může přinést přidanou
hodnotu.

	Charakteristikou aktiva je to, že může vykazovat různé riziko při různých okol-

nostech.

	Informace má hodnotu dvojího typu: potenciální a realizovanou. Smyslem In-
fonomics je maximalizovat realizovanou hodnotu a tím také zvýšit hodnotu aktiv
společnosti se všemi dalšími důsledky.

	Zhodnocení informace se zde realizuje jako proces, při kterém je informačnímu
aktivu přiřazena hodnota, kterou pro podnik představuje a je možno ji dále pou-
žívat například v účetnictví.

	Přínosem je akceptace hodnoty informace ve formálních účetních standarde-

ch.

	Nabízí přesnější ohodnocení investic.

Problémy:

	Infonomics přináší výzvu, jakým způsobem ohodnotit informace ve formálním

účetním standardu.

	Změna v tomto transformačním procesu vnímá informace jako reálné hodnoty
a může přinést počáteční problémy v nepochopení přístupu napříč organizací.

 Doporučení k řešení úloh pokročilé analytiky:

	Pokročilá analytika představuje soustavu konceptů, přístupů, me-
tod  a  produktů,  jejichž  společnou  charakteristikou  je  sofistikova-
nost analytických a plánovacích funkcí.

	Společnost Gartner rozlišuje 4 úrovně pokročilé analytiky: funkce
deskriptivní analytiky – „Co se stalo?“, diagnostické analytiky – „Proč
se to stalo?“, prediktivní analytiky – „Co se stane a proč?“ a preskrip-
tivní analytiky – „Co udělat, aby se něco stalo?“

	Každá úloha pokročilé analytiky je určena použitými metodami, sys-
témem  KPI  a  implementacemi  pokročilých  analytických  funkcí  nad
těmito KPI.

136

	Při řešení úloh pokročilé analytiky je účelné si nejprve vyjasnit hlavní
analytické  otázky  a  potenciální  problémy,  zejména  určení  reálné
potřeby pokročilé analytiky, výběr metod a produktů a stanovení pri-
orit řešení.

	Úlohy pokročilé analytiky jsou realizovány řadou metod a odpovída-

jících nástrojů. Zahrnují:
o  Data Science.
o  Data Mining.
o  Predictive Analytics.
o  Text Mining.
o  Big Data Analytics.
o  Process Mining.
o  Infonomics.

	Pro využití různých typů metod a nástrojů v rámci úloh pokročilé ana-
lytiky  je  nezbytné  analyticky  vyhodnotit  jejich  potenciální  efekty
a problémy, které jsou v tomto případě specifické podle jednotlivých
metod a produktů.

137

Část C:
Soulad byznysu a IT
(„business – IT alignment“)

Tato část textu je věnována vztahům byznysu a IT, zejména řízení IT. Účelem dalších
kapitol je dát do souvislostí obsah řízení firmy a IT a oboje pak chápat jako součásti
anatomie firmy. Jde tak o to vymezit, jak IT pokrývají potřeby firmy, kde je jejich potenci-
ál a naopak, kde můžeme počítat s problémy. Současně je účelem poskytnout základní
obraz o obsahu řízení IT ve firmě zejména ve vztahu k jejím potřebám, tedy co je potře-
ba v souvislosti s rozvojem a provozem IT řídit. V tomto případě jde primárně o pohled
zákazníka, jak on řídí IT, nikoli z pohledu dodavatele IT.

V praxi se pro řízení IT využívají metodiky a modely, které mají charakter celosvětových
standardů,  jako  jsou  ITIL,  COBIT,  CMMI  a  další.  Existuje  k  nim  i  množství  literatury
a bylo by nadbytečné ji zde opakovat. Uvedené standardy jsou většinou velmi rozsáh-
lé a detailní (i tisíce stran textu), zahrnují zkušenosti z celého světa, z řízení většinou
velkých společností a jejich IT a informačních systémů, jsou spojovány s certifikáty pro
jejich uživatele a jsou podporovány velmi širokou komunitou. Anatomie firmy koncepci
a základní obsah těchto standardů respektují a do jisté míry z nich vycházejí. Struk-
tura,  resp.  uspořádání  oblastí  řízení  IT,  reflektuje  primárně  potřebu  tohoto  textu,
a  tedy  zejména  vztahů  k  byznysu,  tj.  i  k  tomu,  jak  je  v  anatomii  firmy  strukturován
a uspořádán. Strukturálně se tedy od uvedených standardů liší.

Obrázek 0‑1: Řízení IT v anatomii firmy

138

Vzhledem k rozsahu témat strukturujeme text, na rozdíl od oblastí řízení firmy, nejprve
na tzv. domény (např. „Řízení ekonomiky IT“) a ty pak na jednotlivé oblasti řízení, re-
spektive skupiny úloh jako „Řízení nákladů na IT“ a na jednotlivé dílčí úlohy. Strukturu
řízení IT v rámci anatomie firmy a uspořádání oblastí dokumentuje obrázek 0‑1.

Další kapitoly se zaměří na zasazení IT do anatomie firmy, a tedy na následující otázky:

	Co je nebo by mělo být předmětem řízení IT, jaké oblasti a úlohy má řešit?

	Jaké jsou klíčové úlohy řízení IT ve vztahu k byznysu? Existuje velké množství
definovaných a dokumentovaných úloh řízení IT (v rámci portálu MBI), které mají
vždy vztah k byznysu. Jejich plný výčet by byl neúměrně rozsáhlý a ponecháme
ho  pro  případnou  další  publikaci.  Proto  se  zaměříme  vždy  pouze  na  vybrané
příklady, a to se zařazením schématu (vymezujícího obsah úlohy) a krátkého
komentáře.

	Jak řešit vztahy řízení byznysu a řízení IT, co je obsahem vazeb jednotlivých

oblastí řízení byznysu a řízení IT?

139

12.  Strategické řízení IT

 Smyslem „strategického řízení IT“ je směrování rozvoje IT ve vazbě na stra-
tegické podnikatelské záměry firmy a zvyšování její výkonnosti. Strategické
záměry v informatice jsou obvykle řešeny jako jednotlivé dílčí projekty a do-
kumenty a na druhé straně jsou souhrnně formulovány v informační strategii,
která představuje základní koncepci jejího rozvoje zhruba na období 2 – 3 let.

12.1  Obsah strategického řízení IT

Do strategického řízení IT jsou zařazeny následující oblasti řízení, resp. skupiny úloh:

	IT jako součást byznysu

Oblast  strategického  řízení  „IT  jako  součást  byznysu“  představuje  celou  sadu
úloh, vyjadřujících jednotlivé aspekty řešení rozvoje IT v přímé vazbě na otáz-
ky a potřeby rozvoje byznysu firmy. Je třeba zdůraznit, že jednotlivé problémy
a úlohy se zde realizují na strategické úrovni řízení a jsou dále konkretizovány
na dalších úrovních a v oblastech řízení IT.

	Plánování informační strategie

Základem „plánování informační strategie“ je převzetí výsledků strategie fir-
my  a  jejich  verifikace  z  pohledu  IT  a  na  tomto  základu  naplánování  postupu
a harmonogramu řešení strategie.

	Analýza podnikové informatiky a jejího okolí

„Analýza  podnikové  informatiky“  představuje  vyhodnocení  aktuálního  stavu
firmy a jejích externích vztahů z celé řady hledisek. Účelem je tak shromáždit
a konsolidovat všechny podstatné požadavky na budoucí stav IT firmy. Analy-
zuje  se,  jak  stav  a  problémy  vlastní  informatiky  firmy  a  její  řízení,  tak  stav
a požadavky okolí, zejména obchodních partnerů, veřejné správy a legislativy.
Oproti tomu se hodnotí disponibilní personální zdroje a zdroje dostupné na IT
trhu a jejich očekávaný vývoj.

	Definice cílového stavu podnikové informatiky

„Definice cílového stavu IT firmy“ je nejvýznamnější částí informační strategie.
Na základě výsledků předcházejících analýz a z nich vyplývajících požadavků
se definuje nová koncepce řešení a řízení IT podniku, která se bude realizovat
v následujících 2 – 3 letech.

	Plán transformace informatiky do cílového stavu

„Plán transformace“ definuje způsob realizace informační strategie, tj. projekty,
zajišťující implementaci návrhů zpracovaných v předchozí skupině úloh, harmono-
gram realizace strategie a celkové ekonomické vyhodnocení navrhované strategie.

	 IT Governance a řešení IT v prostředí cloudu

Řeší se zde prakticky všechny úlohy, spojené s nastavováním pravidel pro in-
formatiku („IT Governance“), řešení cloud computingu („Cloud Governance“) ve
firmě i jeho samotné řízení na všech úrovních firmy („Cloud Management“).

140

Zatímco „IT jako součást byznysu“ řeší na strategické úrovni především vztahy vedení
firmy a vedení IT (viz DOHNAL, J., POUR, J., 2016), další oblasti, tj. „Plánování“, „Ana-
lýza“, „Definice cílového stavu“ a „Plán transformace“ představují de facto jednotlivé
etapy a součásti řešení informační strategie firmy.

12.2  Úlohy strategického řízení IT ve vztahu k byznysu

Ze všech úloh strategického řízení IT jsou dále vybrány příklady těch, které mají zvláště
silné vazby na řízení firmy:

	Řízení spolupráce IT s byznysem na strategii byznysu.
	Revize IT strategie podle požadavků byznysu.
	Řízení komunikace vedení IT s byznysem.
	Formulace vize a cílů IT podniku ve vztahu k byznysu.

Další tři úlohy vycházejí z publikace (DOHNAL, J., POUR, J., 2016).

12.2.1  Řízení spolupráce IT s byznysem na strategii byznysu

Cílem úlohy je zajistit efektivní provázání potenciálu IT s potřebami byznysu na stra-
tegické úrovni (Obrázek 12‑1). Úloha zahrnuje vymezení hlavních potřeb a požadavků
byznysu na služby IT. Potřeby byznysu jsou formulovány v byznys modelu podniku,
který je pro CIO v této úloze základním vodítkem.

Obrázek 12‑1: Řízení spolupráce IT s byznysem na strategii byznysu

141

12.2.2  Revize IT strategie podle požadavků byznysu

Účelem úlohy je zajistit takový obsah IT strategie, který bude odpovídat aktuálním
požadavkům byznysu a následně jim tak budou odpovídat i plánované další projekty,
úlohy a další rozvojové aktivity IT (Obrázek 12‑2).
Průběžná, proaktivní komunikace vedení IT s byznysem a akcionáři o naplňování
strategie byznysu –  IT reaguje na revizi strategie byznysu ve vlastní IT strategií.

Obrázek 12‑2: Revize IT strategie podle požadavků byznysu

12.2.3  Řízení komunikace vedení IT s byznysem

Cílem úlohy je zajistit průběžnou a efektivní komunikaci vedení IT s byznysem,
zaměřenou na racionální využití potenciálu IT k naplňování strategie byznysu (Obrá-
zek 12‑3).

12.2.4  Formulace vize a cílů IT podniku ve vztahu k byznysu

Cílem této úlohy je určit směr dalšího vývoje podnikové informatiky na dva až tři roky
(Obrázek  12‑4).  Cílem  vize  je  dát  podnikové  informatice  „podnikatelskou  hodnotu“,
která se projeví v přidané hodnotě zboží a služeb. Vize určuje orientaci klíčových IT
služeb.  Modifikace  současných  a  aktivace  nových  informačních  zdrojů  a  služeb  je
zaměřena na dosažení nové kvality řídicích, obchodních, výrobních a dalších aktivit
(VOŘÍŠEK, J. a kol., 2008).

142

Obrázek 12‑3: Řízení komunikace vedení IT s byznysem

Obrázek 12‑4: Formulace vize a cílů IT podniku

143

12.3  Strategické řízení IT v kontextu řízení firmy

Obrázek 12‑5 představuje nejvýznamnější vazby strategického řízení IT na ostatní
oblastí řízení firmy, které jsou reprezentované vstupními a výstupními daty a doku-
menty. Detailnější charakteristika a doplňující vstupy a výstupy jsou v následujících
podkapitolách.

Obrázek 12‑5: Strategické řízení IT v kontextu řízení firmy

12.3.1  Vstupy do strategického řízení IT

Podstatné vstupy do strategického řízení IT z ostatních oblastí řízení firmy jsou uve-
deny v dalším přehledu:

Strategické řízení firmy

	Firemní  strategie  a  dílčí  strategické  dokumenty  jsou  hlavním  vstupem  do
strategického řízení IT, odpovídající jednotlivým sférám řízení IT, např. finanční
strategie je podkladem pro získávání úvěrů na nové projekty apod.

	Byznys model vytváří základ pro pochopení a řešení souvislostí mezi jednotli-

vými finančními i věcnými strategiemi a plány včetně IT.

Finanční řízení firmy

	Finanční plány slouží především jako vstupy pro formulaci strategie IT firmy ve

finanční oblasti (náklady na IT, investice do IT, získávání úvěrů apod.).

144

Řízení prodeje zboží a služeb

	Analýzy prodejních aktivit, zákazníků, úspěšnosti prodeje, obchodních příle-
žitostí  a  plány  a  odhady  prodeje  představují  podklady  pro  strategické  analýzy
prodeje IT služeb a současně formulaci strategie obchodních aktivit s podporou
IT a v oblasti IT firmy.

	Evidence reklamací zákazníků dokumentuje pravděpodobné hlavní obchodní

problémy, spojené i s IT službami.

Řízení nákupu

	Analýzy a plány nákupů ukazují možnosti a problémy jejich efektivnosti a spo-

lehlivosti nákupních aktivit včetně nákupů, realizovaných pro IT.

	Analýzy dodavatelů jsou v tomto kontextu podpůrnými informacemi pro úlohy
strategického řízení IT v obchodní části, jsou podkladem pro strategická rozhod-
nutí o orientaci firmy na klíčové IT dodavatele.

Řízení lidských zdrojů

	Analýzy  disponibilních  personálních  kapacit  a  jejich  struktury  jsou  podkla-
dem pro personální strategické analýzy vzhledem k potřebám nových projektů,
případně i provozu IT úloh a aplikací.

	Evidence školení a kursů jsou dílčími podklady pro strategii rozvoje IT kvalifi-

kace a řešení kvalifikačních programů v IT.

Marketing

	Marketingové  analýzy  obsahují  vyhodnocování  úspěšnosti  marketingu  pro
podporu obchodních aktivit firmy včetně IT, úspěšnosti firmy ve vybraných seg-
mentech trhu a rovněž analýzy konkurence z pohledu IT.

	Marketingové průzkumy, dotazníky a jejich analýzy poskytují data o zákazní-
cích a trhu, jsou výstupem z úloh marketingu a slouží pro strategickou segmen-
taci zákazníků a orientaci firmy na klíčové zákazníky a spektrum služeb IT, které
jim firma bude poskytovat.

Řízení IT

	Jednotlivé domény a oblasti řízení IT poskytují vesměs dílčí podklady pro for-

mulaci informační strategie firmy a ostatní strategické úlohy, např.:

o  současné spektrum poskytovaných IT služeb,
o  aktuální plány projektů a složení projektového portfolia,
o  současnou  strukturu  datových,  personálních  a  technologických  zdrojů

a jejich nejdůležitější problémy,

o  nákladovou náročnost rozvoje a provozu IT ve firmě,
o  spektrum potenciálních a reálně dosahovaných efektů z IT,
o  aktuální poměr cena / výkon na úrovni IT apod.

145

12.3.2  Výstupy ze strategického řízení IT

Podstatné výstupy ze strategického řízení IT do oblastí řízení firmy jsou de facto plat-
né pro všechny oblasti řízení firmy:

	Informační strategie firmy obsahuje zejména:

o  specifikaci podnikové, aplikační, datové a technologické architektury jako

koncepční základ rozvoje byznysu v jednotlivých oblastech,

o  definování IT služeb a aplikací strategického významu pro firmu, tj. těch,

které nejvýznamněji ovlivňují úspěšnost byznysu firmy,

o  analýzu současných i očekávaných potřeb IT v komunikaci a kooperaci

firmy se svými obchodními partnery,

o  analýzu  konkurence  firmy  z  pohledu  lepšího  či  slabšího  využití  IT  jako

faktoru její úspěšnosti na trhu,

o  formulaci celkové koncepce řízení IT jako integrální součásti řízení firmy.
	Řada  specifických  dokumentů,  které  definují  vztahy  řízení  nejvyššího  vedení
firmy a vedení IT a které určují efektivní přístupy k realizaci a rozvoji těchto vztahů.
	Strategický  plán  IT  projektů  zahrnuje  ty,  kterým  je  účelné  věnovat  nejvyšší

pozornost a pokud možno i odpovídající zdroje.

	Strategie využití cloud computingu ve firmě a dalších progresivních konceptů
a technologií určuje, co řešit a provozovat na vlastní infrastruktuře (on‑premise)
a co jako cloudové služby.

 Doporučení ke strategickému řízení IT:

	strategické  řízení  IT  je  právě  ta  oblast,  kde  se  předpokládají  velmi
těsné vazby IT a byznysu, musí být jasně vymezeno, které oblasti
řízení byznysu bude IT a IT strategie ovlivňovat a jak,

	informační strategii by měli formulovat manažeři firmy v kooperaci
s manažery IT. Pokud je řešení strategie pouze v rukou IT, nevede to
k dobrým výsledkům,

	manažer IT (CIO, Chief Information Officer) by měl být součástí nej-
vyššího vedení firmy, neboť posuzuje a promítá strategické záměry
firmy do struktur a kapacit IT. Kvalitní CIO je především byznysmen
a teprve pak oborník v IT,

	předpokladem efektivního řešení IT strategie je to, že hned na počát-
ku se jasně určí, co je jejím smyslem a jak bude využita v dalším
řízení rozvoje IT ve firmě. Manažeři firmy musí vědět a být přesvěd-
čeni, proč do jejího řešení mají investovat svůj čas,

	klíčovou  součástí  řešení  IT  strategie  jsou  architektury,  zejména
podniková, aplikační a datová, musí být zřejmé, jaké informace jsou
pro byznys nezbytné, do jakých aplikací se bude investovat a s jaký-
mi  prioritami,  včetně  související  architektury  technologické.  Datová
architektura je klíčová pro efektivní řešení analytických úloh a byz-
nys analytiky pro potřeby řízení firmy,

146

	na  úrovni  strategického  řízení  by  kooperace  mezi  jednotlivými  ma-
nažery firmy a manažery IT měla zejména posilovat důvěru vedení
firmy v IT a v lidi, kteří IT řídí a zajišťují,

	systematicky je potřeba posilovat „leadership“ ředitele IT („CIO“),
	strategické záměry firmy v IT by se měly zaměřovat nejen na vnitřní
prostředí  firmy,  ale  i  na  externí  partnery  a  na  způsob  často  mno-
hostranné kooperace s obchodními a dalšími partnery,

	nezbytným  předpokladem  dobré  IT  strategie  je  to,  že  je  komuni-
kována  se  širokým  okruhem  pracovníků  firmy  a  nezůstane  pouze
v „šuplíku“ CIO, případně jiného z manažerů,

	nejpodstatnější částí „transformace do cílového stavu“ je strategic-

ký plán projektů a od něj odvozené strategické IT služby.

147

13.  Řízení IT služeb

 Smyslem domény „Řízení IT služeb“ je optimalizace struktury a kvality IT
služeb,  zajištění  souladu  jejich  funkcionality  a  disponibility  s  obchodními,
ekonomickými i organizačními nároky firmy a s platnou legislativou. Řízení
úrovně služeb (SLM, Service Level Management) je základem pro řeše-
ní kooperačních vztahů mezi různými subjekty v IT firmy. S řízením služeb
a jejich rozvojem úzce souvisí i plánování a řízení celého portfolia pro-
jektů, které tento rozvoj realizují.

13.1  Obsah řízení IT služeb

„Řízení IT služeb“ vychází z principu, že „IT služba“ je společným základem, jmeno-
vatelem pro celé řízení IT ve firmě, ke které se vztahují všechny další zdroje, ekono-
mika i postupy v rozvoji i provozu IT. Doména zahrnuje analytickou a návrhovou část
spojenou s přípravou služeb, plánovací část v podobě portfolia projektů, obchodní as-
pekty spojené s jejich nákupem a prodejem a následně i otázky provozování, a tedy
poskytování služeb a zajištění jejich kvality a bezpečnosti.

Zahrnuje tyto oblasti řízení, respektive skupiny úloh:

	Návrh a realizace IT služeb

Účelem skupiny úloh je katalogizovat, definovat, testovat a zavádět IT služ-
by do řízení firmy a současně na jejich základě vytvářet základnu pro řízení IT.

	Řízení portfolia projektů

Cílem  skupiny  úloh  je  řízení  a  koordinace  souběžně  realizovaných  projektů
s ohledem na existující zdroje. Vymezení projektu je podle PMBOK následující:
„Projekt je dočasné úsilí s cílem vytvořit unikátní produkt nebo službu“. Pro pro-
jekt jsou podstatné tyto charakteristiky: cíl, např. nový produkt / služba, časové
omezení a vynaložení úsilí (lidských zdrojů, výrobních kapacit, peněz atd.).

	Řízení prodeje a nákupu IT služeb

Skupina úloh je zaměřena na veškeré obchodní aktivity spojené s prodejem
a nákupem IT služeb.

	Řízení kvality IT služeb

„Řízení kvality poskytovaných IT služeb“ je zaměřeno na plánování a hodno-
cení kvalitativních charakteristik poskytovaných IT služeb, jako jsou jejich do-
stupnost,  doba  odezvy,  spolehlivost,  flexibilita,  výkon  atd.  Cílem  řízení  kvality
služeb je dosažení ve smlouvách SLA odsouhlasených vlastností IT služeb, a to
za přijatelných nákladů.

	Řízení bezpečnosti IT služeb

„Bezpečnost poskytovaných IT služeb“ patří k jejich nejpodstatnějším charakte-
ristikám. Účelem skupiny úloh je specifikovat hlavní principy a postupy v oblasti
bezpečnosti včetně klíčových sledovaných metrik.

148

13.2  Úlohy řízení IT služeb ve vztahu k byznysu

Ze  všech  úloh  řízení  IT  služeb  jsou  dále  vybrány  ty,  které  mají  silné  vazby  na  řízení
firmy:

	Příprava a uzavírání SLA.
	Řízení prodeje IT služeb.
	Řízení nákupu IT služeb.

13.2.1  Příprava a uzavírání SLA

Cílem  úlohy  je  připravit  všechny  potřebné  podklady  pro  přípravu  SLA  a  následně
SLA vytvořit, dohodnout a uzavřít (Obrázek 13‑1). Příprava a uzavírání smlouvy o po-
skytování služby – SLA, Service Level Agreement – zahrnuje kompletní obsahovou
přípravu SLA pro jednotlivé útvary, případně externí partnery.

Obrázek 13‑1: Příprava a uzavírání SLA

Smlouva přesně specifikuje dodávanou službu a obchodní a technické podmínky
dodání. Může být vytvořena buď pro jednu službu z katalogu služeb, resp. může sdru-
žovat několik provázaných služeb z katalogu (tzv. balíčkování služeb).

13.2.2  Řízení prodeje IT služeb

Cílem úlohy je specifikovat nabídku IT služeb, definovat obchodní podmínky a pra-
vidla pro jejich prodej a realizovat jednotlivé obchodní aktivity (Obrázek 13‑2).
Úloha  představuje  prodej  projektových  služeb,  konzultačních  služeb,  software
atd., a to jako samostatných komodit, nebo jako přidané hodnoty k základním produk-

149

tům a službám, např. při koupi rodinných domů, prodeji aut, nábytku apod. Tento proces
zahrnuje všechny běžné obchodní aktivity:

	vyhodnocení zákazníků,
	přípravu zakázky,
	přípravu smluv, případně SLA,
	realizaci smluv.

Obrázek 13‑2: Řízení prodeje IT služeb

13.2.3  Řízení nákupu IT služeb

Cílem  úlohy  je  dosáhnout  co  nejefektivnějšího  portfolia  nakupovaných  produktů
a služeb a realizovat jednotlivé nákupní operace (Obrázek 13‑3).

Řízení  nákupu  služeb  představuje  standardní  procedury  specifikace  požadavků
na nakupované služby, určení a výběr možných dodavatelů, objednávání služeb, pří-
pravu podkladů pro SLA a obchodní smlouvy, ověřování a vyřizování dodavatelských
faktur atd.

13.3  Řízení IT služeb v kontextu řízení firmy

Obrázek 13‑4 představuje pouze obvykle nejvýznamnější vazby řízení IT služeb na
ostatní  oblastí  řízení,  reprezentované  vstupními  a  výstupními  daty  a  dokumenty.
Detailnější charakteristika a doplňující vstupy a výstupy jsou v následujících podka-
pitolách.

150

Obrázek 13‑3: Řízení nákupu IT služeb

Obrázek 13‑4: Řízení IT služeb v kontextu řízení firmy

151

13.3.1  Vstupy do řízení IT služeb

Podstatné  vstupy  do  řízení  IT  služeb  z  ostatních  oblastí  řízení  firmy  jsou  uvedeny
v dalším přehledu.

Strategické řízení firmy:

	Strategie prodeje definuje principy, postupy a organizaci prodeje IT služeb pod-
le komodit a technického zajištění, jak realizovat Obchodní případy Prodej v IT.
	Strategie nákupu určuje orientaci nákupů IT dodávek, zda a jak realizovat vý-
běrová řízení, jak analyzovat nabídku na IT trhu, jak řídit vztahy k dodavatelům.
	Strategie  marketingu  je  podkladem  pro  formulování  marketingových  strategii

a kampaní pro řízení prodeje IT služeb.

	Organizační a řídicí dokumenty definují organizaci, která se podílí na defino-
vání  a  zejména  schvalování  IT  služeb  včetně  katalogu  IT  služeb.  Organizační
struktury firmy musí zajišťovat racionální a kvalifikované definování, posuzování
a schvalování nových IT projektů, musí zahrnovat procedury zadání a řízení prů-
běhu výběrových řízení na dodavatele IT řešení.

	Koncepce vytváření nových IT služeb a obchodních aktivit, které jsou s nimi spo-
jeny, musí vycházet z katalogu cílů firmy i byznys a provozního modelu firmy,
musí být jasné, jak nové služby a projekty IT budou odpovídat byznys modelu firmy.

Finanční řízení firmy

	Hlavní kniha – dílčí informace o stavu a pohybech jednotlivých účtů ve vztahu

k nákupu a prodeji IT služeb, produktů, komplexních řešení.

	Analýzy úvěrů – informace o úvěrovém zatížení firmy jako vstupy pro záměry

větších investic a nákupů v IT, předpokládajících využití úvěrů.

	Finanční analýzy a plány – poskytují informace pro hodnocení finančního stavu
a finančních zdrojů firmy jako podklad pro záměry a plány v oblasti rozvoje IT
služeb, tj. možností a omezení jejich nákupu a prodeje.

Řízení prodeje zboží a služeb

	Obchodní dokumenty představují standardní dokumenty, případně jejich šablo-

ny v řízení prodeje, a tedy i s platností pro řízení prodeje IT služeb.

	Analýzy  prodejních  aktivit,  zákazníků,  úspěšnosti  prodeje  a  obdobně  plány
a odhady prodeje představují podstatné podklady i pro odhady možností prodeje
IT služeb.

	Reporting  prodeje  umožňuje  specifikaci  možností,  jak  podporovat  prodej  zá-
kladních  produktů  a  služeb,  např.  kombinovat  a  doplňovat  jejich  funkcionalitu
(příklad z automobilového průmyslu, telekomunikací apod.).

	Jednotlivé obchodní případy i jednotlivé obchodní příležitosti představují ná-
měty i na uplatnění IT v jejich realizaci. Představují rovněž vstupní informace pro
posuzování možností prodeje IT služeb, zejména vzhledem k určitým skupinám
zákazníků a obchodních příležitostí.

152

Řízení nákupu

	Obchodní dokumenty představují standardní dokumenty, případně jejich šablo-
ny v řízení nákupu, tedy i s platností pro řízení nákupů IT produktů služeb včetně
IT projektů a komplexních řešení.

	Analýzy a plány nákupů ukazují možnosti a problémy jejich efektivnosti a spo-
lehlivosti,  slouží  jako  dílčí  podklady  pro  rozhodování  o  pořizování  IT  produktů
a služeb, promítají zkušenosti z nákupních aktivit v rámci celé firmy do nákupů
v IT. Slouží jako dílčí podklady pro záměry o uplatnění IT aplikací a služeb v ří-
zení nákupů firmy.

	Analýzy dodavatelů představují podpůrné informace pro úlohy přípravy nákupů
v  IT,  jsou  podkladem  pro  rozhodnutí  v  rámci  jednotlivých  obchodních  případů
o orientaci firmy na vhodné, resp. osvědčené IT dodavatele.

Řízení lidských zdrojů

	Personální  výkazy  představují  základní  informace  o  aktuálně  disponibilních
personálních kapacitách, a tedy podklady pro rozhodování o zajištění nových IT
služeb a zejména projektů a pro úvahy o nezbytné úrovni outsourcingu v IT firmy.
	Analýzy struktury a kvality personálních kapacit jsou podkladem pro perso-
nální zajištění nových projektů i užití stávajících IT úloh a aplikací, jsou současně
podkladem pro plánování kvalifikačních programů v IT a zvyšování kvalifikace
jednotlivých pracovníků.

	Evidence školení a kursů jsou dílčími podklady pro zajištění a řešení kvalifikač-

ních programů v IT.

Marketing a řízení marketingových kampaní:

	Informace o zákaznících a trhu poskytují data o zákaznících a trhu a jsou vstu-
pem  pro  konkrétní  nabídky  IT  služeb  konkrétním  zákazníkům,  jsou  současně
základem pro formulaci komplexu obchodních příležitostí.

	Marketingové analýzy a plány obsahují vyhodnocování úspěšnosti marketingu
a hlavních akcí se zaměřením na IT služby, zahrnují i hodnocení úspěšnosti na-
bídek IT služeb v jednotlivých segmentech trhu, představují analýzy konkurence
z pohledu uplatňování IT služeb jejím zákazníkům.

Řízení IT – nejvýznamnější vstupy

	Strategické řízení IT poskytuje pro řízení IT služeb zejména tyto podklady: infor-
mační strategii, analýzu stavu informatiky firmy a analýzu organizace, analýzu IT
trhu, analýzu IT obchodních partnerů, katalog cílů IT a katalog požadavků na IT.
	Vstupy z řízení IT zdrojů jsou: analýzy a plán rozvoje datových zdrojů, plán roz-
voje pracovních kapacit, plán kvalifikačních projektů, analýzy stavu ASW zdrojů,
plán rozvoje technologické infrastruktury a kapacitní plán v IT.

	Řízení  IT  ekonomiky  pro  řízení  IT  služeb  nabízí:  nákladové  analýzy  IT,  plán
nákladů  na  IT, analýzy  dosahovaných  efektů  z  IT, analýzy  a  plán  výnosů  z IT,
ekonomickou analýzu sourcingu, rozpočet IT, investiční plány v IT.

153

	Řízení provozu IT služeb zejména poskytuje: evidenci incidentů, problémů a je-

jich řešení, dokumentaci provozu service‑desku.

13.3.2  Výstupy z řízení IT služeb

Podstatné výstupy z řízení IT služeb jsou pro:

Strategické řízení firmy

	Přehled aktuálně poskytovaných IT služeb je podkladem pro formulaci nové

architektury služeb a navazující architektury.

	Aktuální plány projektů a údržby jsou vstupem pro jejich verifikaci vzhledem

k cílům firmy a případnou aktualizaci.

Finanční řízení firmy

	Katalog IT služeb a zejména jejich nákladové a cenové charakteristiky jsou vstu-
pem pro finanční analýzy a plány na úrovni celé firmy. Plány projektů a údržby
jsou podkladem pro přípravu finančních plánů a rozpočtů na úrovni firmy.

Řízení prodeje zboží a služeb

	Obchodní dokumentace IT služeb je vstupem do celé obchodní dokumentace
firmy a slouží i pro verifikaci firemních standardů v této oblasti. Smlouva o po-
skytovaných službách, SLA, tvoří součást celé obchodní dokumentace firmy,
musí odpovídat jejím obchodním principům.

Řízení nákupu

	Plány  projektů  a  údržby  představují  podklady  pro  zajištění  nákupů  ve  firmě,
jsou vstupem i pro přípravu výběrových řízení na IT projekty a zakázky většího
rozsahu. Analýza IT dodavatelů slouží pro jejich kvalifikovaný výběr.

Řízení lidských zdrojů

	Plány projektů a údržby jsou základem pro formulování personální náročnosti
rozvoje v IT a současně jsou vstupem do personálního plánování na úrovni celé
firmy.

Marketing a řízení marketingových kampaní

	Katalog IT služeb je podkladem pro obsahovou přípravu marketingových kam-

paní na podporu prodeje vybraných IT služeb.

Řízení IT – pro všechny oblasti řízení

	Hlavními výstupy pro řízení IT jsou katalog IT služeb, report o průběhu plnění
SLA, hodnocení kvality SLA, analýza IT dodavatelů, plán údržby, plán projektů
a další.

154

 Doporučení k řízení IT služeb:

	 Je účelné nejprve provést kategorizaci IT služeb a vytvořit jejich Katalog,

následně definovat jednotlivé hodnoty jejich atributů.

	 Obsah Katalogu IT služeb je nutné průběžně kontrolovat a aktualizovat
podle aktuálního vývoje v nabídce služeb a podle aktuálních potřeb firmy.
	 Je  účelné  připravovat  SLA  pouze  v  rozsahu  odpovídajícím  potřebám
a složitosti IT firmy, není účelem vytvářet vždy SLA v co největším rozsa-
hu. Současně je dobré vytvořit standardní strukturu SLA podle konkrétních
podmínek firmy a tu naplňovat.

	 Je  nutné  rozhodnout,  mezi  kterými  subjekty  budou  SLA  uzavírány
(mezi  firmou  a  externími  poskytovateli,  mezi  IT  útvarem  a  uživatelskými
útvary apod.).

	 V případě plánování projektů je nezbytná spolupráce IT analytiků s auto-
ry požadavků při vytvoření projektového záměru a následných metrik pro
kontrolu projektů.

	 Je  účelné  průběžně  mapovat  nabídku  IT  služeb  u  konkurence  a  její

úspěšnost,

	 Řízení IT služeb má být součástí funkcionality systému CRM, pokud je

ve firmě implementován.

	 Řízení  vztahů  s  dodavateli  by  mělo  zahrnovat  řízení  všech  dodavatelů
a příslušných smluv k podpoře poskytování IT služeb podporujících byznys.
	 Každá IT služba má mít definovanou osobu, která je zodpovědná za říze-

ní vztahu s jejím dodavatelem.

	 Vzhledem k obvyklé pracovní a ekonomické náročnosti nákupů v IT je účel-

né pro tyto činnosti vyčlenit specialistu, případně specialisty.

	 Nákupy v IT je dobré rozčlenit do kategorií podle významu a finančního
objemu, podle toho definovat i úrovně jejich schvalování – vlastníci, nej-
vyšší management, CIO a řízení IT.

	 Pořizovat  IT  služby  a  produkty  a  služby  podle  výše  ceny  není  obvykle

efektivní nebo bezpečný způsob nákupů.

	 Při výběrovém řízení je dobré věnovat velkou pozornost přípravě poptáv-
kového dokumentu, obvykle platí, že čím je vyšší jeho kvalita, tím je vyšší
úroveň výběrového řízení a kvalita vybraného řešení.

	 Na průběhu výběrového řízení by se měli podílet členové nejvyššího ve-
dení firmy. Předsedou výběrové komise by měl být generální ředitel, nebo
některý z odborných ředitelů.

	 Referenční návštěvy a jejich uskutečnění jsou obvykle dobrou cestou, jak
minimalizovat rizika špatného výběru. Pozornost na referenčních instala-
cích by měla být věnována zejména úrovni dodavatele a jeho služeb.
	 Pro tvorbu bezpečnostní politiky je možné využít řadu norem ISO/IEC
27000, které komplexně pokrývají oblast řízení bezpečnosti informací.
	 Oblast bezpečnosti informací zahrnuje nejen bezpečnost IT, proto by bez-
pečnostní  politika  měla  pokrývat  i  oblasti,  které  nejsou  vyloženě  vázány
k IT. Při formulaci bezpečnostní politiky je nutné neopomenout oblasti, jako
jsou: „Bezpečnost z  hlediska  lidských zdrojů“, nebo  „Fyzická bezpečnost
a bezpečnost prostředí“.

	 K podrobnějšímu ověření kvality bezpečnosti informačního systému proti na-
padení je vhodné použít důkladné penetrační testy nezávislým expertem.
	 Negativní nálezy lze objevit i pomocí metod sociálního inženýrství, apli-

kovaného na pracovníky (například lze užít tzv. honeypot).

155

14. Řízení IT zdrojů

 Účelem  domény  je  dokumentovat  řízení  všech  podstatných  zdrojů  pro
IT, jejich analýzy a plánování, a to se všemi podstatnými komponentami
řízení.

14.1 Obsah řízení IT zdrojů

Řízení IT zdrojů zahrnuje tři hlavní oblasti řízení:

	Řízení datových zdrojů a jejich kvality

Cílem „řízení datových zdrojů“ je dosáhnout optimálního rozsahu a kvality dat
pro provozované aplikace a současně najít efektivní poměr mezi interními, vlast-
ními datovými zdroji podniku a využitím externích datových bází a s nimi spoje-
ných IT služeb. Váže se na správu databází, ta je ale obsahem provozních úloh.

	Řízení personálních zdrojů v IT

„Řízení  personálních  zdrojů  v  IT“  zahrnuje  analýzy  a  plánování  personálních
kapacit  a  vytváření  podmínek  pro  kvalifikační  rozvoj  jak  pro  pracovníky  IT
útvarů, tak pro celou uživatelskou sféru, a to v rámci personálního řízení celého
podniku. Cílem personálního řízení v IT je dosažení takové personální struktu-
ry a takového rozvoje kvalifikace a znalostí pracovníků podniku, které vytvo-
ří předpoklady pro dosažení požadovaných efektů informatiky vzhledem k jeho
potřebám.

	Řízení technologických zdrojů

„Řízení  technologických  zdrojů“  zahrnuje  veškeré  aktivity  týkající  se  analýz,
výběru a pořízení všech komponent aplikačního software a technologické
platformy a infrastruktury, na které jsou provozovány aplikace. Cílem procesů
řízení v této oblasti je rozvíjet a naplňovat aplikační, softwarovou a technolo-
gickou architekturu podniku, a vytvořit tak předpoklady pro efektivní provoz IT,
minimalizaci nároků na správu a vytvořit prostor pro úpravy systému a škálování
jeho výkonu, aniž by byla narušena jeho vnitřní konzistence.

14.2  Úlohy řízení IT služeb ve vztahu k byznysu

Ze  všech  úloh  řízení  IT  zdrojů  jsou  dále  vybrány  ty  příklady,  které  mají  rovněž  silné
vazby na řízení firmy:

	Plánování rozvoje datových zdrojů.
	Plánování personálních zdrojů v IT.

156

14.2.1  Plánování rozvoje datových zdrojů

Účelem je specifikovat nároky na rozvoj současných datových zdrojů ve vztahu k aktu-
álním i očekávaným potřebám firmy a určit potenciální nové zdroje dat, a to jak interní,
tak  externí  (nakupované,  nebo  obchodních  partnerů),  definovat  ekonomické,  organi-
zační i technologické nároky na získání nových datových zdrojů. Účelem je rovněž na-
lézt optimální kombinaci interních i externích datových zdrojů, která bude efektivní
vzhledem k požadavkům byznysu (Obrázek 14‑1).

Obrázek 14‑1: Plánování rozvoje datových zdrojů

14.2.2  Plánování personálních zdrojů v IT

Účelem je určit potřeby rozvoje personálních struktur pro informatiku na straně uži-
vatelů i IT specialistů.

Účelem  plánovací  úlohy  je  i  efektivní  a  co  nejpřesnější  zpracování  plánů  rozvoje
personálních zdrojů podniku, realizované podle různých hledisek (dimenzí) pro různé
časové horizonty (Obrázek 14‑2).

14.3  Řízení IT zdrojů v kontextu řízení firmy

Obrázek 14‑3 představuje pouze obvyklé nejvýznamnější vazby řízení IT zdrojů na
ostatní  oblastí  řízení,  reprezentované  vstupními  a  výstupními  daty  a  dokumenty.
Detailnější charakteristika a doplňující vstupy a výstupy jsou v následujících podka-
pitolách.

157

Obrázek 14‑2: Plánování personálních zdrojů v IT

Obrázek 14‑3: Řízení IT zdrojů v kontextu řízení firmy

158

14.3.1  Vstupy do řízení IT zdrojů

Podstatné  vstupy  do  řízení  IT  zdrojů  z  ostatních  oblastí  řízení  firmy  jsou  uvedeny
v dalším přehledu:

Strategické řízení firmy

	Firemní strategie je významná v tomto případě hlavně pro pochopení celkové-
ho směrování podniku, jeho závislostí a využívání IT a dat pro řízení a fungování
podniku, procesů, potřeby aplikačního SW pro realizaci nebo zajištění prodeje
produktů a služeb. Ve své personální části formuluje strategické nároky na rozvoj
personálních zdrojů, včetně těch pro IT.

Finanční řízení firmy

	Hlavní kniha poskytuje základní informace o finančních výdajích firmy vzhledem

k rozvojovým aktivitám v IT zdrojích.

	Finanční plány a rozpočty obsahují informace, podstatné pro plánování pořizo-

vání dalších IT zdrojů, zde především v IT infrastruktuře.

Řízení lidských zdrojů

	Personální analýzy představují základní informace o současných personálních

kapacitách, o jejich struktuře, kvalifikaci a využití pro IT.

	Personální plány jsou podkladem pro plánování pracovních týmů v IT, pro řízení
kvalifikačních programů v IT, pro uvolňování pracovníků firmy do IT projektů.

Řízení nákupu

	Analýzy dodavatelů jsou podstatné jako jeden ze vstupů pro hodnocení IT do-
davatelů z pohledu portfolia jejich IT produktů a služeb, personální a ekonomické
síly, jejich kvality a dosud získaných zkušeností.

	Plány  nákupů  definují  možnosti  a  problémy  v  řízení  nákupů  pro  celou  firmu
a v tomto případě se vztahují především na nákupy IT prostředků, služeb, licencí
SW, případně datových zdrojů.

Řízení majetku

	Odpisy majetku se vztahují i k odpisům IT prostředků, a tedy jsou pro ně pod-
statná ustanovení legislativy a principy odepisování těchto prostředků podle pra-
videl firmy.

	Plány investic poskytují orientaci v investičních aktivitách firmy a s tím i očekáva-
né požadavky na zajištění nových investic IT zdroji. Současně obsahují i informace
o investicích do IT (zejména techniky a případně datových zdrojů). Jsou součástí
investičních programů celé firmy a musí tak respektovat firemní pravidla.

Řízení IT – nejvýznamnější vstupy

	Strategické  řízení  IT  poskytuje  pro  řízení  IT  zdrojů  především  tyto  podklady:
informační strategie, analýza stavu informatiky podniku, analýza IT trhu, katalog
požadavků na IT a další.

159

	Řízení IT služeb nabízí pro dané účely katalog IT služeb, plán údržby, plán projektů.
	Řízení IT ekonomiky poskytuje nákladové analýzy IT, plán nákladů na IT, rozpo-

čet IT, investiční plány v IT.

	Řízení provozu IT služeb zejména obsahuje evidenci incidentů a problémů a je-

jich řešení, dokumentaci provozu service‑desku.

14.3.2  Výstupy z řízení IT zdrojů

Jako podstatné výstupy z řízení IT zdrojů jsou pro:

Strategické řízení firmy

	Plány rozvoje pracovních kapacit v IT jsou jedním z podstatných předpokladů

naplňování strategie firmy, zejména tam, kde je firma na IT silně závislá.

	Analýzy a plán rozvoje datových zdrojů znamenají obvykle silnou podporu pro
strategické služby zejména v obchodě a finančním řízení, a tedy i pro realizaci
firemní strategie.

	Analýzy  stavu  a  plány  rozvoje ASW  včetně  SaaS,  jsou  významné  zejména

tam, kde ASW představují strategické služby, na kterých firma stojí.

Finanční řízení firmy

	Plán rozvoje technologické infrastruktury představují podklady pro očekáva-
né nároky na finanční zajištění externích IT zdrojů a služeb (IaaS, PaaS), pod-
klady pro plánování nákladů v rozlišení OPEX / CAPEX.

	Plán rozvoje pracovních kapacit zahrnuje očekávané finanční nároky v oblasti

mezd a odměn vzhledem ke stavu a rozvoji IT.

Řízení lidských zdrojů

	Plán kvalifikačních projektů je součástí kvalifikačních projektů a programů celé

firmy a je třeba tedy řešit příslušné souvislosti.

	Plán rozvoje pracovních kapacit v IT má evidentní dopady do řízení lidských
zdrojů v celé firmě, např. do řízení personálních a profesních struktur, řízení ka-
riérních map, motivačních programů apod.

Řízení nákupu

	Plán rozvoje technologické infrastruktury představuje  podklad  pro přípravu
nákupů  technických  a  programových  prostředků,  případně  cloudových  služeb,
přípravu případných výběrových řízení atd.

	Analýzy a plán rozvoje datových zdrojů jsou rovněž podkladem pro nákupy
externích datových zdrojů, zjišťování jejich dostupnosti, cenové náročnosti, ob-
chodních podmínek.

Řízení majetku

	Analýza stavu technologické infrastruktury formuluje požadavky na pořízení
nových technických prostředků, resp. obměnu stávajících a jejich začlenění do
stavu majetku firmy.

160

	Plány  rozvoje  technologické  infrastruktury  znamenají  nové  investice  do  IT

a zajištění řízení těchto investic se všemi nezbytnými činnostmi.

Řízení IT – pro všechny oblasti řízení

	Hlavními  výstupy  pro  řízení  IT  jsou  katalog  datových  zdrojů,  analýzy  a  plán
rozvoje  datových  zdrojů,  analýza  personálních  kapacit  a  potřeb,  plán  rozvoje
pracovních  kapacit,  plán  kvalifikačních  projektů,  evidence  softwarových  aktiv,
analýza stavu ASW zdrojů, plán rozvoje technologické infrastruktury a další.

 Doporučení k řízení IT zdrojů:

	Je efektivní založit celou oblast řízení dat na konceptu Data Gover-
nance,  jasně  definující  manažerské  a  organizační  charakteristiky
pro datové zdroje.

	Je účelné založit řízení kvality datových zdrojů na některé z metod
v této oblasti, např. MDM (Master Data Management) a jim odpoví-
dajících nástrojích, např. MDS (Master Data Services apod.).

	Zajistit kvalifikované a kvalitní rozbory ekonomické i mimoekono-
mické náročnosti na pořízení nových datových zdrojů, a to vzhle-
dem  k  jasně  definovaným  potřebám  byznysu  (nepořizovat  některé
databáze, které nebudou mít adekvátní využití).

	Respektovat efektivní využití standardních zdrojů pro hodnocení

požadavků na datové zdroje, zejména service desk apod.

	Pro systematické řízení a plánování datových zdrojů je účelné sta-
novit specialistu nebo tým, který bude mít rozhodování v této ob-
lasti v kompetenci.

	Je vhodné vytvořit tým pro řízení dat, který komunikuje s vlastníky
dat, určuje požadovanou kvalitu dat, definuje, jak jsou data sdílena
v rámci podniku a stará se o zlepšování dostupných dat.

	Uživatelské požadavky na nákup externích dat je třeba posuzo-
vat z hlediska jejich náročnosti a současně z hlediska reálných ma-
nažerských potřeb, definovaných např. v podnikové strategii, v plá-
nech rozvoje kvalifikace a v dalších dokumentech celopodnikového
a často strategického významu.

	Úpravy  a  opravy  dat  v  souvislosti  se  zvyšováním  jejich  kvality  je

nutné přesně dokumentovat.

	Je nezbytné nastavit procesy pro řešení situací, které mohou mít
vliv na struktury a kvalitu dat (např. je třeba včas a přesně infor-
movat specialisty pro ETL o uskutečněných změnách ve strukturách
zdrojových databází apod.).

	Pro kvalifikační projekty je nutné ze strany vedení podniků vytvořit

jak potřebný časový prostor, tak motivační systém.

	Každý kvalifikační projekt musí být průběžně i v závěru vyhodnocován.

161

	V  plánování  kvalifikačních  projektů  musí  být  nastaveny  adekvátní
priority jejich obsahového zaměření vzhledem k rolím, které jejich
účastníci zastávají.

	Kvalifikační projekty by měly brát v úvahu dostupné technologie
a metodiky tvorby takových projektů (různé formy a produkty eLear-
ningu apod.).

	Podstatná je i formulace efektů IT kursů především pro pracov-
níky – uživatele, často je jejich využití založeno jen na jejich zájmu
a  iniciativě  a  pak  jim  musí  být  jasné,  jaké  efekty  jim  takové  řešení
přinese.

	Kvalifikované  a  kvalitní  rozbory  ekonomické  i  mimoekonomické
náročnosti na pořízení nových IT zdrojů jsou nezbytné, a to vzhle-
dem k jasně definovaným potřebám byznysu.

	Efektivně  využívat  standardní  zdroje  pro  hodnocení  využití  IT
zdrojů a jejich kvalty i požadavků na IT zdroje, zejména service
desk apod.

	Pro systematické řízení a plánování IT zdrojů je účelné stanovit spe-
cialistu nebo tým, který bude mít rozhodování v této oblasti v kom-
petenci.

162

15. Řízení IT ekonomiky

 Celá  doména  je  zaměřena  na  ekonomické  charakteristiky  v  řízení  IT
a jejich hodnocení a plánování, tj. jak na její nákladovou, tak výnosovou
stránku, resp. stránku dosahovaných efektů. Účelem je dosahovat optimál-
ního  poměru  cena  /  výkon  celého  IT  firmy,  to  znamená  zajištění  všech
požadovaných IT služeb při odpovídajících nákladech.

15.1  Obsah řízení IT ekonomiky

Řízení IT ekonomiky zahrnuje tyto oblasti řízení, skupiny úloh:

	Řízení nákladů na IT

„Řízení nákladů na IT“ – skupina úloh představuje především analytické i plá-
novací  úlohy,  spojené  s  náklady  na  IT.  Úlohy  musí  respektovat  specifické
nároky vyplývající ze struktury nákladů, jejich nositelů, IT produktů, IT služeb
apod.

	Řízení výnosů a efektů z IT

Účelem je zde přijmout jasnou kategorizaci možných efektů IT a pravidla jejich
měření a tím vytvořit základ pro jejich systematické řízení. Definování očekáva-
ných efektů projektů a investičních akcí v IT a vyhodnocování jejich skutečného
naplnění  posilují  významně  soulad  stavu  a  rozvoje  IT  vzhledem  k  reálným
potřebám a možnostem firmy.

Na  základě  formulování  očekávaných  efektů  IT  pro  firmu  a  jejich  průběžného
vyhodnocování  lze  přesněji  a  reálněji  definovat  priority  dalších  rozvojových
projektů v IT.

	Řízení investic do IT

„Řízení investic do IT“ představuje takové obsahové vymezení investic v IT a jejich
plánování,  které  bude  co  nejvíce  odpovídat  skutečným  i  očekávaným  potřebám  fir-
my. Nabízí rovněž racionální  a reálné  možnosti hodnocení návratnosti investic  do
IT, které budou respektovat např. obtížné měření ekonomických přínosů, delší časo-
vý horizont, nezbytný pro dosažení návratnosti u některých projektů (BI, ECM apod.).
Smyslem je rovněž prezentovat širší pohled na hodnocení úspěšnosti investic do
IT, nejen ve smyslu finančních efektů, ale často efektů strategického významu, např. ve
smyslu řešení otázky, jaká nastane situace, pokud konkurence bude v daném směru
investovat a daná firma nikoli (viz kapitola 3).

15.2  Úlohy řízení IT ekonomiky ve vztahu k byznysu

Ze všech úloh řízení IT ekonomiky jsou dále vybrány příklady těch, které mají silné vaz-
by na otázky byznysu firmy:

	Nákladové analýzy IT služeb.

163

	Analýzy dosahovaných efektů IT služeb.
	Hodnocení návratnosti investic do IT.

15.2.1  Nákladové analýzy IT služeb

Účelem nákladových analýz IT služeb je především dosažení očekávaných efektů, tj.
pozitivních změn v metrikách řízení nákladů na IT, např. ve snížení nákladů na pořízení
IT služeb a jednotlivých produktů, snížení provozních nákladů, v optimálním počtu do-
davatelů apod. Cílem je rovněž dosáhnout reálné úrovně nákladů (nikoli nejnižší)
na informatiku, odpovídající potřebám a možnostem podniku a na druhé straně stavu
nabídky  na  IT  trhu. To  znamená  poskytnout  managementu  podniku  komplexní  obraz
o nákladech na informatiku podle nejrůznějších hledisek a pro jejich sledování v časo-
vém vývoji.

Jednotlivé  nákladové  položky  jsou  identifikovány  a  analyzovány  podle  nejrůzněj-
ších definovaných dimenzí, např. podle nákladových druhů, podle zodpovědnosti za
náklady, podle služeb, podle dodavatelů, podle projektů, podle aplikací, podle techno-
logických prostředků. Úloha také zahrnuje sledování abnormálních hodnot nákladů
podle dimenzí, např. mimořádně vysokých nákladů podle dodavatelů, služeb, aplikací
apod. (Obrázek 15‑1).

Obrázek 15‑1: Nákladové analýzy IT

164

15.2.2  Analýzy dosahovaných efektů IT služeb

Účelem úlohy je analyzovat veškeré finanční i nefinanční efekty, které přináší podniko-
vá informatika (čili jakých konkrétních efektů je možné díky IT dosáhnout). Smyslem úlohy
je rovněž identifikace IT služeb, které přinášejí rozhodující, resp. strategické ekonomic-
ké i mimoekonomické efekty a na tomto základě je možné objektivněji efektivněji stanovo-
vat cíle dalšího rozvoje IT podniku, plánování nových projektů, upgradů technologií apod.

Úloha má přispívat i k formulaci podnikových pravidel pro systematické a kvalifiko-
vané vyhodnocování dosahovaných efektů oproti očekávaným, např. určení bodů nebo
situací,  kdy  je  účelné  efekty  hodnotit,  stanovení  zodpovědnosti  za  jejich  hodnocení,
určení dokumentace hodnocení a její posuzování a schvalování (Obrázek 15‑2).

Obrázek 15‑2: Analýzy dosahovaných efektů IT služeb

15.2.3  Hodnocení návratnosti investic do IT

Hlavním  cílem  úlohy  je  definovat  přístupy  a  metody,  vhodné  k  hodnocení  efek-
tivnosti  investic  v  prostředí  podnikové  informatiky.  Znalost  těchto  metod  je  nutným
předpokladem  k  učinění  vhodného  manažerského  rozhodnutí  o  tom,  zda  danou
investici realizovat (Obrázek 15‑3).

Úloha tedy odpoví na tyto otázky:

	Jaká bude celková výnosnost investice v procentech?
	Jaké cash‑flow investice přinese?
	Které projektové záměry z daného portfolia zařadit jako investice do investičního

plánu?

165

Obrázek 15‑3: Hodnocení návratnosti investic do IT

15.3  Řízení IT ekonomiky v kontextu řízení firmy

Jde zde o obvykle nejvýznamnější vazby řízení IT ekonomiky na ostatní oblastí říze-
ní, reprezentované vstupními a výstupními daty a dokumenty. Detailnější charakte-
ristika a doplňující vstupy a výstupy jsou v následujících podkapitolách.

15.3.1  Vstupy do řízení IT ekonomiky

Podstatné vstupy do řízení IT ekonomiky z ostatních oblastí řízení firmy jsou uvedeny
v dalším přehledu:

Strategické řízení firmy

	Firemní strategie a dílčí strategické dokumenty představují vstupy pro přípravu

finančních plánů a rozpočtů ve firmě včetně plánů a rozpočtů IT.

	Byznys  model  firmy  je  obvykle  upravený  podle  nových  strategických  záměrů

firmy a promítá se i do plánů rozvoje IT.

Finanční řízení firmy

	Hlavní kniha je základem pro řešení IT ekonomiky včetně účetní osnovy. Speci-

fika pro IT jsou řešená v analytické účetní evidenci.

	Finanční plány a rozpočty jsou vstupy, od nichž se odvíjejí finanční plány a rozpo-
čty v IT, kde musí být zajištěna jejich konsistence s plánováním financí celé firmy.

166

Obrázek 15‑4: Řízení IT ekonomiky v kontextu řízení firmy

Řízení prodeje zboží a služeb

	Analýzy  prodejních  aktivit,  zákazníků,  úspěšnosti  prodeje,  jsou  základní-
mi vstupy pro odhadování přínosů IT pro prodej základních produktů a služeb
a hodnocení ekonomických i mimoekonomických efektů, které IT do prodeje při-
náší. Požadavky na tyto analýzy jsou vstupem do plánování nákladů na projekty
realizace analytických aplikací.

	Plány a odhady objemu prodeje představuje podklad pro možnosti vstupů IT slu-
žeb jako přidané hodnoty k obchodním aktivitám u základních produktů a služeb.

Řízení nákupu

	Analýzy nákupu představují hodnocení problémů v nákupech základních pro-
duktů a služeb, které musí firma řešit a současně potřeby, jak využít IT pro jejich
podporu a řešení.

	Plány nákupů slouží jako podklad pro rozvoj IT aplikací a služeb pro podporu

řízení nákupů, resp. i jednotlivých obchodních případů.

Řízení majetku

	Odpisy majetku se vztahují i k odpisům IT prostředků a jsou tedy součástí řízení

IT ekonomiky.

167

	Analýzy majetku představují informace o struktuře majetku, jeho využití a sou-
časně o očekávaných investičních aktivitách firmy včetně investic do IT, pro které
bude nutné získat finanční zdroje a určit i způsoby financování.

PAM

	Mzdové dokumenty představují podklady pro IT ekonomiku v mzdové oblasti

a oblasti ostatních osobních nákladů, tedy ve vztahu k pracovníkům v IT.

	Mzdové  výkazy  a  analýzy  jsou  základem  pro  odhadování  mzdového  vývoje
v celé firmě i v IT a k odhadování nákladové náročnosti IT, pokud jde o mzdy
a odměny.

Řízení IT – nejvýznamnější vstupy

	Strategické řízení IT: informační strategie, analýza organizace, koncepce sou-

rcingu.

	Řízení IT služeb: katalog IT služeb, plán údržby, plán projektů.
	Řízení IT zdrojů: analýzy a plán rozvoje datových zdrojů, plán rozvoje pracov-

ních kapacit, plán rozvoje technologické infrastruktury.

	Řízení  rozvoje  IT  služeb:  rozpočet  projektu,  dokumentace  průběhu  projektu,

protokol o ukončení a vyhodnocení projektu.

	Řízení provozu IT služeb: evidované licence, protokol softwarového auditu, do-

kumentace provozu service‑desku.

15.3.2  Výstupy z řízení IT ekonomiky

Podstatné výstupy z řízení IT ekonomiky jsou:

Strategické řízení firmy

	Investiční plány v IT jsou vstupem do aktuálních investičních záměrů a do stra-

tegie firmy.

	Rozpočet IT je vstupem do finanční části strategie firmy.

Finanční řízení firmy

	Plán nákladů na IT je podkladem pro přípravu plánu nákladů za celou firmu.
	Analýzy  a  plán  výnosů  z  IT  jsou  podkladem  pro  výnosovou  část  finančního

řízení a finančních výkazů firmy.

Řízení prodeje zboží a služeb

	Analýzy i plán výnosů z IT jsou jedněmi z podkladů pro orientaci řízení prodeje

firmy a specifikaci možností uplatnění IT v této oblasti.

	Analýzy dosahovaných efektů z IT mohou sloužit pro orientaci obsahu a za-
měření prodávaných IT služeb, nebo IT služeb a produktů, které tvoří přidanou
hodnotu k základním produktům a službám.

168

Řízení nákupu

	Rozpočet IT je jedním z podkladů pro orientaci plánovaných nákupů, souvisejí-

cích s IT s ohledem na očekávané finanční zdroje.

Řízení majetku

	Rozpočet IT poskytuje informace o očekávaných finančních zdrojích pro inves-

tiční akce, související s IT.

PAM

	Ekonomická  analýza  odměňování  a  sourcingu  slouží  pro  porovnání  mzdo-
vé náročnosti využití vlastních pracovníků oproti externím kapacitám, poskytuje
informace  pro  rozhodování  o  uplatnění  vlastních  nebo  externích  personálních
zdrojů pro současné nebo plánované projekty.

	Plán nákladů na IT vytváří pouze základní rámec o plánovaných zdrojích vzhle-

dem ke mzdovým nákladům.

Řízení IT – pro všechny oblasti řízení

	Hlavními výstupy pro řízení IT jsou nákladové analýzy IT, plán nákladů na IT,
ekonomická analýza sourcingu, rozpočet IT, analýzy a plán výnosů z IT, analýzy
dosahovaných efektů z IT, investiční plány v IT.

 Doporučení k řízení IT ekonomiky:

	Je nutné řešit potřebnou dostupnost a kvalitu analýz nákladů na IT
v místě a čase, tj. u dodavatelů a poskytovatelů IT zdrojů a služeb,
v dislokovaných jednotkách apod.

	Poskytovat  možnosti  automatického  zasílání  varovných  nebo  jen
informativních zpráv manažerům IT na základě výsledků uskuteč-
něných  analýz  nákladů  na  IT  a  jejich  vyhodnocení  oproti  definova-
ným pravidlům, nastaveným limitům apod.

	Dosáhnout  vysokou  komplexnost  analýz  nákladů  na  IT  s  vazbou
na celopodnikové analýzy, podnikové finanční analýzy, řešení analýz
s využitím potřebného množství analytických dimenzí.

	Dosáhnout  požadovanou  flexibilitu  analýz  vzhledem  k  aktuálním
potřebám a podmínkám manažerů IT a současně zajistit potřebnou
granularitu  dat  pro  realizaci  analytických  operací,  zajištění  takové
úrovně detailních dat pro analýzy, která je dosažitelná a ekonomicky
přiměřená, např. data o jednotlivých projektech, produktech, čerpání
a platbách za cloudové služby apod.

	Poskytovat vysokou kvalitu plánování nákladů na IT s provázaností
na  finanční  plány,  realizovat  přípravy  plánů  nákladů  na  IT  ve  vari-
antách s jejich adekvátním vyhodnocením a následným stanovením
jejich priorit z hlediska cílů, potřeb a možností podniku.

	Vzhledem  k  tomu,  že  v  tomto  případě  se  pracuje  s  poměrně  velmi
heterogenní  soustavou  kvantitativních  i  kvalitativních  charakteristik
a  ukazatelů  informačního  systému,  je  účelné  vycházet  z  přesnější
kategorizace jeho efektů (finančních i nefinančních).

169

	Určit  odpovědné  osoby  za  kvalifikované  hodnocení  efektů  jednot-
livých součástí a zejména aplikací, zajištění jejich transparentnosti.
	Při tvorbě investičního plánu se doporučuje zohlednit dva základní
faktory každé investice: kolik budou investiční náklady (myšleno
čisté finanční vyčíslení celkové ceny, tedy poměrně snadno stanovi-
telné) a co organizace investicí získá (nefinančně myšleno, tudíž
výrazně obtížnější).

	Komplexita změn procesů je vysoká a tím jsou i náklady na jejich
IT podporu vyšší, než bylo očekáváno – týká se nejen nákladů, ale
i investic, resp. jejich předpokládané a skutečné výše (snadné pod-
cenění je v IT velmi časté).

	Obchodní úspory mohou zvýšit právě náklady na IT a tomu by tedy
i  investice,  které  tyto  náklady  mohou  do  budoucna  optimalizovat,
měly být přizpůsobeny.

	Podíl  objemu  úspěšných  investic  na  celkovém  objemu  investic
na informatiku v %. Hodnota této metriky by se měla pohybovat okolo
70‑85 %. Hodnota velmi závisí na volatilitě tržního prostředí, a na
tom, zda jsou selhání způsobena interními nebo externími faktory.
	Objem neúspěšných investic = Investice do informatiky celkem –
Objem úspěšných investic. Metrika souvisí s procentem úspěšných
investic a snahou eliminovat neúspěšné investiční akce.

	%  projektů  s  dopředu  stanoveným  ROI  lze  doplnit  o  váhu,  kte-
rou bude objem investice. Všechny velké investice by měly být bez-
podmínečně hodnoceny. Naopak čím menší částka je investovaná,
tím menší riziko firmě hrozí. Je rozhodně nežádoucí, aby náklady na
hodnocení  investice  byly  vyšší  než  investice  samotná.  Pod  určitou
výši investice je tak možné nastavit i zápornou váhu, čímž zamezíme
hodnocení takových drobných investičních akcí.

	%  projektů  s  dopředu  provedeným  odhadem  výnosnosti:  Zde

platí podobná pravidla jako u předchozí metriky.

	Cílem  řízení  IT  ekonomiky  je  udržet  náklady  a  investice  do  IT  na
optimální úrovni vzhledem k závislosti podniku na dostupnosti a spo-
lehlivosti  IT  služeb.  Porovnání  rizika  ztrát  z  nefunkčnosti  kritických
aplikací firmy vzhledem k nákladům na zajištění SLA může být dalším
měřítkem pro měření efektů IT.

170

16.  Řízení rozvoje IT služeb

 Doména Řízení rozvoje IT služeb je orientována na dvě úrovně úloh spo-
jených  s  rozvojem  informatiky,  a  to  na  řízení  IT  projektů,  představující
manažerskou rovinu projektů, a na úroveň řešení různých typů projektů.
Účelem je vymezit úlohy a postupy spojené jak s řízením projektů, tak v ná-
vaznosti na to na úlohy a postupy řízení a řešení aplikačních projektů obec-
ně a následně i podle jednotlivých vybraných typů aplikací, a to se všemi
souvisejícími komponentami. Doména se tedy nezabývá rozvojem služeb
ve smyslu kontinuálního drobného přizpůsobování služeb na základě změ-
nových požadavků, které jsou řešeny v rámci nastaveného procesu řízení
změn IT služeb, zpravidla zakotveného v SLA.

Účelem je rovněž prezentovat provázanost uvedených úrovní řízení roz-
voje  služeb,  neboť  není  dobré  např.  chápat  řízení  projektů  jako  svébytný
celek bez konkrétních vazeb na jejich řešení a obdobně mezi jednotlivými
typy projektů.

16.1  Obsah řízení rozvoje IT služeb

Řízení rozvoje IT služeb zahrnuje tyto oblasti řízení, skupiny úloh:

	Řízení projektu

Skupina úloh je výrazně ovlivněna podstatnými charakteristikami projektů a je-
jich  odlišnostmi  od  standardních  (průběžných)  podnikových  aktivit.  Konkrétní
řídicí procesy se liší podle toho, zda je projekt řešen vlastními kapacitami či
dodavatelským  způsobem,  zda  je  předmětem  projektu  řešení  služby  vyvíje-
né na zakázku specificky pro daný podnik (individuální SW), nebo zda imple-
mentuje typový aplikační software. Cílem řízení jednotlivých projektů je zajistit
zprovoznění IT služby, a to ve stanoveném termínu, kvalitě a s odpovídajícím
vynaložením nákladů.

	Řešení aplikačního projektu

Smyslem je vyjádřit doporučený postup řešení rozsáhlých aplikačních projektů
na základě jednotlivých úloh (odpovídajících fázím řešení projektu) a jejich ná-
vazností. Zdůrazněme, že se zde jedná o „tradiční“ přístup k řešení projektu
zavedení nového ASW, na druhé straně je nutné respektovat i specifika agil-
ních přístupů a jejich vhodnost a efekty pro implementaci TASW. Fáze projektu
jsou zde nahrazeny iteracemi (sprinty) a na výstupu každého je nějaký produkt,
což  může  být  i  dokument  koncepce TASW,  prototyp,  nastavený  modul  hlavní
knihy apod. Jde tak o zobecněný postup řešení projektů, vycházející z růz-
ných existujících metodik a nejlepších zkušeností z praxe.

171

16.2  Řízení rozvoje IT služeb v kontextu řízení firmy

Jde zde rovněž o pouze obvykle nejvýznamnější vazby řízení rozvoje IT služeb na
ostatní oblasti řízení, reprezentované vstupními a výstupními daty a dokumenty. De-
tailnější charakteristika a doplňující vstupy a výstupy jsou v následujících podkapitolách.

Obrázek 16‑1: Řízení rozvoje IT služeb v kontextu řízení firmy

16.2.1  Vstupy do řízení rozvoje IT služeb

Podstatné vstupy do řízení rozvoje IT služeb z ostatních oblastí řízení firmy jsou uve-
deny v dalším přehledu (myšleno od zákazníka projektu):

Strategické řízení firmy

	Firemní  strategie  a  dílčí  strategické  dokumenty  jsou  podstatným  vstupem  do
řízení rozvoje IT služeb, určuje strategické IT služby a strategické projekty, které
by měly mít v řešení projektů nejvyšší prioritu.

	Byznys model určuje projekty pro podporu obchodních aktivit, které z nich mu-
sejí vycházet, musí být jasné, jak nově řešené aplikace budou odpovídat právě
byznys modelu firmy.

	Organizační a řídicí dokumenty podniku definují organizaci, která se musí pro-
mítat i do řízení a řešení projektů rozvoje IT. Organizační struktury firmy musí
zajišťovat  kvalifikované  posuzování  a  schvalování  projektových  řešení,  musejí
být konsistentní s řídicími procedurami projektů.

172

Finanční řízení firmy

	Hlavní kniha poskytuje dílčí informace o stavu a pohybech jednotlivých účtů. Ty

jsou podstatné pro okamžité řešení financování jednotlivých projektů.

	Finanční plány a rozpočty poskytují informace pro hodnocení finančního stavu
a  finančních  zdrojů  firmy  jako  podklad  pro  řešení  finančních  otázek  projektů,
např. možností úvěrování zákazníka apod.

Řízení lidských zdrojů

	Personální analýzy struktury a kvality personálních kapacit jsou podkladem pro
personální zajištění řešených projektů a vytváření projektových týmů, vytváření
potřebných časových kapacit.

Řízení nákupu

	Analýzy a plány nákupů představují dílčí podklady pro rozhodování o pořizová-
ní IT produktů a služeb v souvislosti s řešenými projekty, jejich obchodní, organi-
zační i ekonomickou náročností.

Řízení majetku

	Změny, převody, přírůstky a analýzy majetku se váží i ke strukturám a kvalitě
majetku ve firmě a k posuzování možností jeho využití v rámci řešených projektů.

Marketing a řízení marketingových kampaní

	Marketingové analýzy, informace o zákaznících a trhu jsou podkladem pro for-
mulování přístupů k obsahu řešených aplikací. Obsahují vyhodnocování úspěš-
nosti marketingu a hlavních akcí, které se pak mohou promítat jako zkušenosti
do funkcí řešených projektů.

Řízení IT – nejvýznamnější vstupy (od zákazníka projektu)

	Strategické řízení IT: informační strategie, analýza IT trhu, katalog cílů IT, kata-

log požadavků na IT.

	Řízení IT zdrojů: analýzy a plán rozvoje datových zdrojů, plán rozvoje pracov-
ních kapacit, plán kvalifikačních projektů, analýza stavu ASW zdrojů, plán rozvo-
je technologické infrastruktury, kapacitní plán v IT.

	Řízení provozu IT služeb: evidence incidentů a problémů a jejich řešení, doku-

mentace provozu service‑desku.

16.2.2  Výstupy z řízení rozvoje IT služeb

Podstatné výstupy z řízení rozvoje IT služeb jsou:

Strategické řízení firmy

	Katalog IT služeb, respektive přehled aktuálně realizovaných IT služeb je podkla-
dem pro efektivní definování funkcionality aplikace, s minimalizací překrývání funkcí.
	Aktuální plány projektů a údržby jsou vstupem pro řešení vazeb daného pro-

jektu na ostatní projekty včetně plánovaných.

173

Finanční řízení firmy

	Rozpočet projektu představuje finanční a pracovní náročnost daného projektu

a zařazení do finančního řízení celého komplexu projektů a IT aktivit.

Řízení lidských zdrojů

	Projektový záměr a analýzy výsledků projektu poskytuje informace o předpo-
kládaném, plánovaném a skutečném využití lidských zdrojů na projektu, o zku-
šenostech s jejich výkonem a kvalitou analytické práce.

Řízení nákupu

	Analýza  IT  dodavatelů  poskytuje  podklady  o  kvalitě  jednotlivých  dodavatelů

a pro rozhodování o jejich výběru do projektu.

	Analýzy výsledků projektu dokumentuje efektivnost využití externích dodava-

telů a partnerů projektu.

Řízení majetku

	Analýza a plán rozvoje IT infrastruktury poskytují informace o stavu a problé-
mech dostupné infrastruktury pro projekt a návrhy na plánované změny v souvis-
losti s poznatky z projektu.

Marketing a řízení marketingových kampaní

	Analýzy výsledků projektu poskytují informace o plánovaných, resp. předpo-
kládaných zdrojích pro projekt a o jejich využití s možností porovnání s ostatními
řešeními pro zákazníky.

Řízení IT – pro všechny oblasti řízení

	Hlavními výstupy pro řízení IT jsou analýzy průběhu a výsledků projektu, roz-
počet projektu, dokumentace průběhu projektu, protokol o ukončení a vyhodno-
cení projektu.

 Doporučení k řízení rozvoje IT služeb:

	Podpora vedení firmy při přípravě projektu, kooperace na kvalifiko-
vaném  posouzení  jeho  účelnosti  a  realizovatelnosti  v  daných  pod-
mínkách je klíčovým předpokladem.

	Je nezbytné jasné vymezení projektu a jeho všech klíčových cha-

rakteristik.

	Je třeba provést vyhodnocení všech faktorů ovlivňujících kvalitu,

obsah, rozpočet a časový harmonogram.

	Posoudit  stav  celého  projektového  portfolia  a  předpokládaného

vývoje a jeho dopady na daný projekt.

	Zajištění  akceptačního  protokolu  je  klíčová  věc,  bez  které  nelze

projekt úspěšně uzavřít.

174

	Závěrečnou schůzku je vhodné uskutečnit, i pokud se projekt ne-

zdaří nebo je předčasně ukončen.

	„Lessons learned“ a úpravy metodiky je nutné představit, vysvětlit

a distribuovat dalším projektovým manažerům.

	Vytvořit prototypové řešení, resp. „Proof of Concept“, kde si uživa-

tel může lépe představit finální produkt.

	Pro zpracování úvodní studie je dobré vyčlenit dostatečný časový
prostor, protože její kvalita často ovlivňuje výslednou kvalitu celého
projektu.

	Úvodní  studie  se  často  stává  podkladem  pro  přípravu  kontraktu
na  celý  projekt  a  pak  je  třeba  zajistit  provázanost  Úvodní  studie
a kontraktu.

	Pro efektivní kooperaci implementačních týmů s klíčovými uživateli
je  nezbytné  těmto  uživatelům  vytvořit,  pokud  je  to  možné,  do-
statečný časový prostor v rámci jejich pracovní náplně a rovněž
odpovídající motivaci pro řešení projektu.

	V rámci strategie migrace je třeba určit její základní koncepci (oka-
mžitý  přechod  na  novou  aplikaci,  souběžný  provoz  původní  i  nové
aplikace po určitou dobu) vyhodnotit nároky a náklady a oproti tomu
možná rizika obou variant.

	V rámci strategie a následně plánu migrace je třeba definovat tzv.
roll out, tj. instalaci aplikace na jednotlivé dislokované jednotky pod-
niku (závody, pobočky apod.), pokud je to třeba.

	Pro datovou migraci je třeba disponovat dokumentací dat původ-

ního systému.

	V rámci kontraktu s externím dodavatelem je nutné specifikovat
jeho účast a rozsah kooperace zejména na datové migraci (i v pří-
padě budoucího nahrazení aplikace jinou). Pokud takové ustanove-
ní ve smlouvě se stávajícím dodavatelem neexistuje, je dobré jeho
účast na migraci řešit dodatkem smlouvy (zvláště v případě, kdy ne-
existuje aktuální dokumentace databází).

	Je  účelné  dobře  vyhodnotit  kvalitu  původních  databází  a  podle

toho upravit i plán a harmonogram migrace.

	V případě rozsáhlých systémů (se stovkami a více uživateli) je účel-
né s předstihem plánovat jejich školení a zajistit odpovídající ma-
teriální a personální kapacity.

175

17.  Řízení provozu IT služeb

 Smyslem je zajištění běžného provozu a správu IT prostředků a kapacit ve
vazbě na řešení různých mimořádných stavů, problémů, uživatelských
požadavků včetně řízení service desku.

17.1  Obsah řízení provozu IT služeb

Řízení provozu IT zahrnuje tyto oblasti řízení, skupiny úloh:

	Řízení a správa IT zdrojů

„Řízení a správa IT zdrojů“ zahrnuje veškeré řídicí aktivity spojené s provo-
zem celého informačního systému a jeho jednotlivých komponent. Na rozdíl
od skupiny úloh řízení technologických zdrojů, která má taktický charakter
řízení a zaměřuje se na analýzy a plánování zdrojů, tato skupina úloh na to na-
vazuje, ale realizuje se na provozní úrovni, tj. sleduje charakteristiky reálného
provozu (zatížení zdrojů, využití zdrojů atd.) a jejich průběh.

Cílem  skupiny  úloh  je  zajistit  dodání  smluvených  IT  služeb  a  zajistit  provoz
potřebných  aplikací.  Řízení  provozu  sleduje  i  dosažení  optimální  disponibi-
lity  informačního  systému,  tzn.  zajištění  bezpečnosti  a  spolehlivosti  provozu,
požadované  doby  odezvy  jednotlivých  aplikací,  zajištění  požadovaného  výko-
nu včetně jeho špičkového zatížení. Cílem je rovněž optimalizace nákladů na
provoz IT.

	Řízení incidentů, problémů a požadavků

Účelem skupiny úloh je zajišťování řešení chybových stavů a požadavků v po-
skytovaných IT službách, provozovaných aplikacích a v technologické infrastruk-
tuře a rovněž i požadované úrovně konzultační a technické podpory uživatelů.

17.2  Řízení provozu IT v kontextu řízení firmy

Podkapitola představuje nejvýznamnější vazby řízení provozu IT služeb na ostatní
oblastí řízení, reprezentované vstupními a výstupními daty a dokumenty. Detailnější
charakteristika a doplňující vstupy a výstupy jsou v následujících podkapitolách.

17.2.1  Vstupy do řízení IT provozu

Podstatné  vstupy  do  řízení  provozu  IT  služeb  z  ostatních  oblastí  řízení  firmy  jsou
uvedeny v dalším přehledu:

Strategické řízení firmy

	Firemní  strategie  a  dílčí  strategické  dokumenty  jsou  podstatným  vstupem  do
řízení provozu IT služeb. Strategie určuje, na které IT služby by měl provoz klást
nejvyšší důraz a zajistit maximální kvalitu.

176

	Provoz aplikací a poskytování výsledků musí odpovídat byznys modelu firmy.
	Organizační a řídicí dokumenty podniku definují organizaci, která se musí pro-

mítat i do řízení provozu IT.

Obrázek 17‑1: Řízení provozu IT služeb v kontextu řízení firmy

Finanční řízení firmy

	Finanční plány a rozpočty představují informace o finančních možnostech roz-

voje provozu IT a celé infrastruktury.

Řízení lidských zdrojů

	Personální plány představují informace ke struktuře a kvalitě personálních ka-
pacit s ohledem na jejich využití v kooperaci při provozu jednotlivých aplikací.

Řízení nákupu

	Analýzy a plány nákupů představují dílčí podklady pro rozhodování o pořizová-

ní IT zdrojů v souvislosti s rozvojem IT provozu.

Řízení majetku

	Změny, převody, přírůstky, se vztahují ke strukturám a kvalitě majetku, to zna-
mená ke strukturám majetku IT, např. majetku v softwarových licencích, v tech-
nické infrastruktuře apod.

Řízení IT – nejvýznamnější vstupy

	Strategické řízení IT: informační strategie, analýza IT trhu, katalog požadavků

na IT.

177

	Řízení IT zdrojů: analýzy a plán rozvoje datových zdrojů, analýza stavu ASW

zdrojů, plán rozvoje technologické infrastruktury, kapacitní plán v IT.

17.2.2  Výstupy z řízení IT provozu

Podstatné výstupy z řízení provozu IT služeb jsou:

Strategické řízení firmy

	Evidence  incidentů  a  problémů  poskytují  informace  o  aktuálních  problémech

provozu a potřebě strategických opatření v jejich řešení.

Finanční řízení firmy

	Evidované  licence  představují  informace  o  finančních  prostředcích  uložených

v licencích a současně o případné potřebě jejich navýšení.

Řízení lidských zdrojů

	Plán kvalifikačních projektů a plán rozvoje pracovních kapacit poskytují informa-
ce o kvalifikačním a strukturálním rozvoji personálních kapacit i vzhledem k po-
třebám provozu.

Řízení nákupu

	Evidované  licence  poskytují  podklady  o  případných  požadavcích  a  potřebách

nákupu licencí a technických prostředků pro provoz.

Řízení majetku

	Technická dokumentace sítě poskytuje podklady o majetkové struktuře prostřed-

ků v provozu IT a případné potřebě nových investic.

Řízení IT – pro všechny oblasti řízení

Podstatné výstupy z řízení provozu IT služeb jsou: provozní dokumentace, evido-
vaný software a licence, protokol softwarového auditu, evidence incidentů a problémů
a jejich řešení, dokumentace provozu service‑desku.

 Doporučení k řízení provozu IT služeb:

	Je účelné přesně nastavit v SLA podmínky provozu aplikací i in-
frastruktury, např. doby reakce na vzniklý výpadek nebo poruchu,
doby na vyřešení vzniklého problému apod.

	U správy databází uplatnit automatický monitoring a reporting.
V současné době je třeba vše automatizovat. Stanovit metriky a je-
jich  ukazatele.  Při  překročení  „standardních“  hodnot  řešit  případný
problém.

	Praktiky (best practices) pro správu databází jsou obvykle vázá-

ny na konkrétní technologii.

178

	Metodika  zálohování  (co  všechno,  četnost,  s  jakou  redundancí,
způsob provedení) by měla být součástí provozní dokumentace.
	Proces zálohování by měl být co nejvíce automatizovaný, vhod-

né je používat zálohovací software.

	Proces zálohování musí být důkladně naplánován, řízení záloho-

vání je postaveno na tomto plánu.

	Protokoly ze zálohovacího softwaru je důležité pravidelně kontro-
lovat, aby se odhalily případné problémy. Doporučeno je nastavit au-
tomatickou notifikaci v zálohovacím softwaru, pokud se stane něco
nestandardního.

	Veškerá  nastavení  a  databáze  zálohovacího  softwaru  musí  být

také zálohovány, aby nedošlo k znemožnění obnovy.

	Pro úspěšné a kvalitní řízení incidentů a problémů jsou podstat-

né tyto předpoklady:

o  existence útvaru plnícího roli service desku,
o  jasně definované normální provozní stavy,
o  využívání nástrojů pro evidenci incidentů,
o  správně nastavený monitoring všech částí IT infrastruktury,
o  definovaný systém pro funkční a hierarchickou eskalaci inci-

dentů,

o  dobře definované OLA,
o  jasná pravidla pro posouzení dopadu a urgence incidentů,
o  existence znalostní báze (databáze známých chyb, manuály),
o  stanovená pravidla pro obsah a formu komunikace s uživateli.
	Pro úspěšné a kvalitní řízení uživatelských požadavků jsou pod-

statné tyto předpoklady:

o  vytvoření typizovaných procesních modelů pro typově stejné

požadavky,

o  jednoduchá klasifikace požadavků,
o  využívání nástroje pro evidenci požadavků
o  definovaný způsob měření uživatelské spokojenosti.

179

Závěry

Na závěr tohoto textu bychom chtěli zdůraznit, že jde o úvodní text k řadě plánovaných
a postupně vydávaných publikací, jejichž společným jmenovatelem je orientace na ře-
šení analytických prací, souvisejících s rozvojem a provozem informačních systémů ve
firmách  a  organizacích.  Smyslem  tohoto  prvního  textu  bylo  vymezit  hlavní  problémy,
principy a přístupy k analýze informačních systémů jako alternativu, nebo spíše doplně-
ní k publikacím, které na toto téma už jsou k dispozici. Je jich poměrně hodně.

Východiskem bylo vyhodnocení aktuálních problémů analýzy, a to na základě zkuše-
ností autorů z vlastní praxe, konfrontovaných s názory celé skupiny expertů, tedy před-
ních analytiků a manažerů, působících v IT sféře. Z celé řady diskusí vyplynula poměr-
ně široká škála problémů, kterými jsou zatíženy současné IT projekty a které byly zde
souhrnně  formulovány  v  kapitole  3.  Úspěchy  a  posuny  v  informatice  jsou  evidentní,
přesto se v řadě případů ukázaly problémy zejména v detailním pochopení byznysu,
tedy obsahu řízení a fungování firem na straně analytiků. Specificky se v tomto případě
jedná o „analytické znalosti obsahu“, tedy znalosti, založené na propojení znalostí IT
(technologií,  metod,  metodik  apod.)  a  znalosti  řízení  a  ekonomiky.  Pro  takové  pojetí
a pohledy na řízení a fungování firem jsme zvolili pracovní termín „IT a anatomie firmy“,
který se stal i základním názvem zmíněné řady textů.

V  případě  tohoto  úvodního  textu  se  jedná  o  vymezení  principů  uvedeného  pojetí,  tj.
vymezení  všech  podstatných  komponent  řízení  a  jejich  souvislostí,  kde  klíčovou  roli
hrají „úlohy“ a od nich odvíjené procesy. Úlohy vyjadřují základní náplň řízení a při je-
jich značném počtu je dobré je kategorizovat. V našem případě byla vedle „klasické“
kategorizace  podle  oblastí  řízení  zvolena  i  pracovní  kategorizace  úloh  podle  operací
s daty (na úlohy evidenční, transakční, reportingové, analytické, plánovací a pokročilé
analytiky  atd.).  Úlohy  tohoto  typu  se  mohou  stát  stavebními  kameny  komplexnějších
řešení, jak jsme ukázali již v základním textu. Proto jsme detailnějšímu vymezení takto
kategorizovaných úloh věnovali několik speciálních kapitol.

Na tento úvodní text postupně navazují další, hned následující text, charakterizující jed-
notlivé oblasti řízení firmy (strategie, finance, prodej atd.) bez odvětvových specifik a s vy-
užitím zde vymezených komponent řízení. Tyto základní texty jsou základem pro charak-
teristiky systémů řízení firem podle odvětví (strojírenství, maloobchod, IT a další).

Záměrem autorů při přípravě tohoto a  navazujících textů je nabídnout čtenáři infor-
mace a podklady pro efektivní řešení jeho problémů a projektů, a to informace rychle
dostupné,  bez  zbytečných  detailů  a  zejména  zaměřených  na  potřeby  praxe. Autoři
doufají, že se takový záměr podaří naplnit a že taková nabídka nebude ze strany čte-
nářů odmítnuta.

180

Zdroje, literatura

ADAMEC, L.: Process mining a jeho možnosti využití v podniku. DP, VŠE, Praha, 2018.

AALST, WIL van der. Process Mining Data Science v akci. Berlni : Springer, 2016. 978‑
3‑662‑49850‑7.

ANGEL, I. O., SMITHSON, S.: Information Systems Management, Opportunities and
Risks. Macmillan, 1991.

BACAL,  R.:  Manager´s  Guide  to  Performance  Management.  New  York,  McGraw‑Hill
2012. ISBN 978‑0‑07‑177225‑9.

BERKA, P.: Dobývání znalostí z databází. Praha, Academia, 2003. str. 366. ISBN 80‑
200‑1062‑9,

BERNTOVÁ, Z.: Principy reportingu. BP, VŠE, Praha, 2019.

BRUCKNER, T.  VOŘÍŠEK,  J.,  BUCHALCEVOVÁ, A.  a  kolektiv:  Tvorba  informačních
systémů: Principy, metodiky, architektury. Grada, 2012, ISBN 978‑802477‑9027.

BUCHALCEVOVÁ, A.:  Metodiky vývoje a údržby informačních systémů. Praha, Grada
2004. ISBN 80‑247‑1075‑7.

BUCHALCEVOVÁ, A., PAVLÍČKOVÁ, J., PAVLÍČEK, L.: Základy softwarového inženýr-
ství, materiály ke cvičením. Praha, VŠE 2008.

CAO, L.: Data Science Thinking. Springer, 2018. ISBN 978‑3‑319‑95091‑4.

CIMLER, P., ZADRAŽILOVÁ, D. a kol.: Retail management. Praha, Management Pre-
ss, 2007. ISBN: 978‑80‑7261‑167‑6.

DOHNAL, J., POUR, J.: IT v řízení podniku. Praha, Professional publishing 2016. ISBN
978‑80‑7431‑160‑4.

DOHNAL, J., PŘÍKLENK, O.: CIO a podpora byznysu. Praha, Grada, 2011. ISBN 978‑
80‑247‑4050‑8.

DOHNAL,  J.:  Řízení  vztahů  se  zákazníky  –  procesy,  pracovníci,  technologie.  Praha,
Grada 2002.

DRESNER, H.: Profiles in Performance. New York, John Wiley and Sons, 2010. ISBN:
978‑0‑470‑40886‑5.

ECKERSON, W., W.: Performance Dashboards. New Jersey, Johh Wiley & Sons 2006.

ENGLISH, L. P.: Improving Data Warehouse and Business Information Quality: Methods for
reducing costs and increasing profits. New York, John Wiley & Sons 2003. ISBN 0‑471‑
25383‑9.

FIBÍROVÁ,  J.,  ŠOLJAKOVÁ,  L.,  WAGNER,  J.,  PETERA,  P.:  Manažerské  účetnictví.
Nástroje a metody. Praha, Wolters Kluwer, 2015. ISBN: 978‑80‑7478‑743‑0.

HALAMA, J.: Řízení datové kvality v Hadoop Ecosystem. DP, VŠE, Praha, 2021.

HOLTSNIDER,  B.,  JAFFE,  B.  D.:  IT  Managener´s  Handbook.  Amsterdam,  Elsevier
2012. ISBN 978‑0‑12‑415949‑5.

CHANDLER, N.: The CPM Scenario. Gartner BI Summit 2008.

181

CHRAMOSTOVÁ, V., POTANČOK, M., POUR, J.: Byznys analytika pro manažery. Oe-
conomia, Praha, 2020.

JUROVÁ, M. a kol.: Výrobní a logistické procesy v podnikání. Praha, Grada Publishing,
2016. ISBN 978‑80‑247‑5717‑9.

KEŘKOVSKÝ,  M.,  VALSA,  O.:  Moderní  přístupy  k  řízení  výroby.  3  doplněné  vydání.
Praha, C.H. Beck pro praxi, 2012. ISBN 978‑80‑7179‑319‑9.

KIMBALL, R., ROSS, M.: Relentlessly Practical Tools for Data Warehousing and Busi-
ness Intelligence. Indianopolis, John Wiley Publishing 2010. ISBN 978‑0‑470‑56310‑6.

KRÁL,  B.  a  kol.:  Manažerské  účetnictví.  Praha,  Management  Press  2006.  ISBN  80‑
7261‑141‑0.

KRATOCHVÍL,  A.:  Návrh  Business  Intelligence  řešení  pro  potřeby  autoservisu,  DP,
VŠE, Praha, 2021.

KULHAVÝ, L. Praktické uplatnění technologií Data Mining v pojišťovnictví, VŠE, Praha
2011.

KUNSTOVÁ, R.: Efektivní správa dokumentů. Praha, Grada, 2009. ISBN 978‑80‑247‑
3257‑2.

LABERGER, R.: The Datawarehouse Mentor. New York, McGraw Hill, 2011. ISBN: 978‑
0‑07‑174532‑1.

LABERGER, R.: Datové sklady. Agilní metod y business intelligence. Praha, Computer
Press, McGraaw Hill, 2012. ISBN 978‑80‑251‑3729‑1.

LANEY, D., B.: Infonomics, Bibliomotion. Inc., New York, 2018. ISBN 978‑1‑138‑09038‑5.

MACHKOVÁ, H., ČERNOHLÁVKOVÁ, E., SATO, A.: Mezinárodní obchodní operace.
Praha, Grada 2007.

MAJEROVÁ, M.: Analýza a návrh Business Intelligence řešení pro cestovní kancelář
Mayer & Crocus. BP, VŠE, Praha, 2021.

MARŠÁLEK,  K.:  Plánování  a  řízení  emisí  CO2  pomocí  IBM  Cognos  TM1.  DP,  VŠE,
2021.

MÁŠA, P.: Data mining – praktické aplikace. 2008.

NOVOTNÝ, O., POUR, J., BASL, J., MARYŠKA, M.: Řízení výkonnosti podnikové infor-
matiky. Professional Publishing, Praha, 2010. ISBN 978‑80‑7431‑040‑9.

NOVOTNÝ, O., VOŘÍŠEK, J. a kol.: Digitální cesta k prosperitě. Praha: Professional
Publishing 2011. ISBN 978‑80‑7431‑047‑8.

PALADINO, B.: Innovative Corporate Performance Management: Five Key Principles
to Accelerate Results. Indianopolis, Wiley Publishing, 2011. ISBN: 978‑0‑470‑62773‑0.

PARMENTER,  D.:  Key  Performance  Indicators  (KPI):  Developing,  Implementing,and
Using Winning KPIs.

POUR, J., MARYŠKA, M., STANOVSKÁ, I., ŠEDIVÁ, Z.: Self Service Business Intelli-
gence. Praha. Grada, 2018. ISBN 978‑80‑271‑0616‑5.

PROVOST, F., FAWCETT, T.: Data Science for Business. What You Need to Know About
Data Mining and Data-Analytic Thinking. O´Reilly Media. Sebastopol. 2013. ISBN: 978‑
1‑449‑36132‑7.

182

REŠL,  Š.:  Využití  prediktivní  analytiky  pro  finanční  plánování  firmy.  BP,  VŠE,  Praha,
2020.

ŘEPA, V.: Podnikové procesy. Praha, Grada 2007.

SCHIESSER, R.: IT Systems Management. New York, Prentice Hall 2010. ISBN 978‑
0‑13‑702506‑0.

SIEGEL, E: Predictive Analytics. New York, John Wiley & Sons, 2016. ISBN 978‑1‑119‑
14567‑7.

SLÁNSKÝ, D.: Data and Analytics for the 21st Century: Architecture and Governance,
Professional Publishing, 2018. ISBN 978‑80‑88260‑16‑5.

SOLANSKÝ,  V.:  Využití  prediktivních  funkcí  v  rámci  self-service  cloud  BI.  BP,  VŠE,
Praha, 2021.

ŠOLJAKOVÁ,  L.  FIBÍROVÁ,  J.:  Reporting.  Praha,  Grada,  2010.  ISBN  978‑80‑247‑
2759‑2.

SYNEK,  M.  a  kol.:  Manažerská  ekonomika.  Praha,  Grada  2011.  ISBN  978‑80‑247‑
3494‑1.

SYNEK, M., KISLINGEROVÁ, E. a kol.: Podniková ekonomika. Praha, C.H. Beck 2015.
ISBN 978‑80‑7400‑274‑8.

TOMEK, G., VÁVROVÁ, V.: Průmysl 4.0 aneb nikdo sám nevyhraje. Praha, Professio-
nal Publishing, 2017. ISBN 978‑80‑906594‑4‑5.

TOMEK, G., VÁVROVÁ, V.: Řízení výroby a nákupu. Praha, Grada 2007. ISBN 978‑80‑
247‑1479‑0.

TOMEK, G., VÁVROVÁ, V.: Integrované řízení výroby. Praha, Grada 2014. ISBN 978‑
80‑247‑4486‑5.

UČEŇ, P.:  Zvyšování výkonnosti firmy na bázi potenciálu zlepšení. Praha, Grada 2008.
ISBN: 978‑80‑247‑2472‑0.

UNIWISE: Interní dokumenty, 2020.

VAN DECKER, J, CHANDLER, N.: Top Processes for Corporate Performance Manage-
ment. Gartner, 2011.

VEBER, J. a kol.: Management, základy, prosperita, globalizace. Praha. Management
Press 2000.

VOŘÍŠEK, J., POUR, J. a kol.: Management podnikové informatiky. Professional Pub-
lishing, 2012, ISBN 978‑80‑7431‑102‑4.

VOŘÍŠEK, J. a kol.: Principy a modely řízení podnikové informatiky. Praha, Oeconomia
2008. ISBN: 978‑80‑245‑1440‑6.
ZACH, M.: Řízení a informační systém hotelů, DP, VŠE, Praha, 2021.

ŽŮRKOVÁ, H.: Plánování a kontrola – klíč k úspěchu. 1. vydání. Praha: Grada Pub-
lishing. ISBN 80‑247‑1844‑8.

183

Termíny, zkratky

ABC

ADM

B2B

B2C

B2G

BPM

BPR

BSC

CAPEX

CDO

CEO

CFPR

CI

CIM

CIO

CIS

CISO

CE

CLV

ABC  – Activity  Based  Costing  –  metoda,  jejímž  cílem  je  analyzovat  informace
o nákladech na jednotlivé služby a produkty v detailnějším členění.

ADM – Architecture Development Method – podporuje využívání jiných metodik
(jako  např.  Zachman  Framework,  Federal  Enterprise  Architecture  Framework,
U. S. Department of Defense Architecture Framework).  Popisuje, jak vybudovat
pro daný podnik specifickou podnikovou architekturu, která reflektuje požadavky
byznysu.

B2B – Business–to–Business – obchodní vztahy, které se realizují mezi dvěma
podniky, resp. právními subjekty, na bázi elektronické výměny dat. Všechny ko-
merční transakce mezi dvěma subjekty, které jsou prováděny pomocí elektronic-
kých prostředků.

B2C – Business–to–Consumer – obchodní vztahy mezi podnikem a konečným
spotřebitelem, realizované webovými aplikacemi, virtuálními obchody na interne-
tu apod. On‑line obchodování na Internetu, tj. prodej zboží (ať už hmotného či
nehmotného) a služeb koncovým zákazníkům pomocí služby World Wide Web.

B2G  –  Business–to–Government  –  vztahy  mezi  podnikem  a  veřejnou  správou
(státní správou a samosprávou), většinou na bázi výměny strukturovaných dat.

BPM – Business Process Modeling – metoda procesního modelování.

BPR – Business Proces Reengineering – změny podnikových procesů – postup,
který optimalizuje podnikové procesy tak, aby přinášely efekty při minimální spo-
třebě podnikových zdrojů, důsledkem jsou změny v organizační struktuře podni-
ku.

BSC – Balanced Scorecard – metoda která, je uceleným systémem vyvážených,
nejenom finančních měřítek pro zefektivnění implementace, monitoringu a korek-
ce obchodní strategie.

CAPEX – Capital expenses – investiční náklady, zpravidla jde o náklady jedno-
rázového  charakteru,  které  je  nutné  vynaložit  na  pořízení  určitého  hmotného,
nehmotného i finančního majetku.

CDO – Chief Digital Officer – je zodpovědný za to, že podniková obchodní strate-
gie reflektuje stávající a nově vznikající digitální příležitosti a hrozby.

CEO – Chief Executive Officer – generální ředitel podniku.

CFPR – Collaborative Planning, Forecasting and Replenishment – sdílení infor-
mací o produkčních a marketingových plánech a detailních předpovědích prode-
je v dodavatelském řetězci.

CI – Competitive Intelligence – systematický a etický program pro získávání, ana-
lyzování a řízení externích informací o trhu, konkurenci a trendech, které mohou
mít vliv na podnikové plány, rozhodování a jeho činnost.

CIM – Computer Integrated Management – aplikace řízení pro integrované řízení
výrobních provozů a linek.

CIO – Chief Information Officer – ředitel podnikové informatiky.

CIS – Customer Information System – zákaznický informační systém – informač-
ní systém u energetických, servisních organizací (tzv. „utilit”), zajišťující bezpro-
střední styk se zákazníkem, např. odečty spotřeby.

CISO – Chief Information Security Officer – je odpovědný za vytvoření a udržo-
vání programu informační bezpečnosti zajišťujícího dostatečnou ochranu infor-
mačních aktiv organizace. Zodpovídá za řízení rizik v podnikatelském prostředí,
s měnícími se právními a regulačními požadavky se stále složitějšími technolo-
giemi a hrozbami.

CE – Customer Equity – hodnota zákazníka.

CLV – Customer Lifetime Value – životní cyklus hodnoty zákazníka.

184

CMMI

CMO

CobiT

CPI

CPM

CRM

CRP

CSF

DMA

DMI

DMS

DSA

DSS

EAI

EANCON

ECR

EDI

EDIFACT

ERP

ERP II

CMMI – Capability Maturity Model Integration – model pro zlepšování procesů
v oblasti rozvoje služeb.

CMO – Chief Marketing Officer – ředitel pro marketing.

CobiT – Control Objectives for Information and related Technology – metodika
vyvinutá  a  publikovaná  neziskovou  nezávislou  organizací  Information  Systems
Audit  and  Control  Association  (ISACA)  s  cílem  využít  mezinárodní  standardy
a nejlepší zkušenosti pro řízení a audit v oblasti IT.

CPI – Continual Process Improvement – metoda průběžného zlepšování proce-
sů.

CPM – Corporate Performance Management – řízení výkonnosti podniku je sou-
hrnným termínem, který popisuje všechny procesy, metodiky, metriky a systémy
potřebné k měření a řízení výkonnosti organizace.

CRM  –  Customer  Relationship  Management  –  aplikace  podnikové  informatiky
pro řízení vztahů k zákazníkům.

CRP – Capacity Requirements Planning – určování úrovně kapacit a jejich ob-
sazení,  stanovování  množství  práce  a  strojového  času,  potřebného  ke  splnění
výrobních zakázek.

CSF – Critical Success Factor – taková vlastnost (řešení informačního systému,
procesu či měření podnikové informatiky), která výrazně ovlivňuje celkové efekty
řešení, resp. může přispět k celkové úspěšnosti podniku.

DMA – Data Mart – datové tržiště, analytická databáze určená pouze pro určitou
část podniku (útvar, oblast řízení apod.).

DMI – Data Mining – dolování dat – analytické funkce založené na matematicko
‑statistickém aparátu a obvykle realizované nad velkými objemy dat.

DMS – Document Management System – systém správy dokumentů – centrali-
zovaná správa dokumentů. Umožňuje dokumenty rychle vyhledat, sdílet, chránit
přístupovými právy a fulltextově je vyhledávat.

DSA – Data Staging Area – jde o místo v architektuře datového skladu, kde se
data ze zdrojových systémů zpracovávají a transformují do podoby dat definova-
ných dimenzionálním (cílovým) modelem.

DSS  –  Decision  Support  System  –  systém  pro  podporu  rozhodování. Aplikace
podporující operativní, dispečerskou úroveň rozhodování v podniku, často zalo-
žené na využití matematických modelů.

EAI – Enterprise Application Integration – souhrnný integrační rámec umožňující
integrovat jednotlivé aplikace informačního systému na základě požadavků pod-
niku a výběru vhodného technologického řešení.

EANCON – norma elektronické výměny dat určená pro obchod se spotřebním
zbožím. Pro identifikaci výrobků a komunikujících organizací využívá čárového
kódu EAN (European Article Numbering).

ECR – Efficient Consumer Response – efektivní reakce na požadavky zákazní-
ků, vedoucí k efektům vyplývající z eliminace činností nepřidávajících hodnotu.
Podstata této technologie spočívá v intenzivní spolupráci mezi obchodem a prů-
myslem s cílem splnění přání konečných spotřebitelů s co nejpříznivějšími logis-
tickými náklady.

EDI  – Electronic Data Interchange – elektronická výměna dat, založená na svě-
tově uznávaných standardech.

EDIFACT  –  Electronic  Data  Interchange  for  Administration,  Commerce  and
Trasport – celosvětově definovaný standard EDI, garantovaný orgány OSN.

ERP – Enterprise Resource Planning – aplikace mající celopodnikový charakter
a pokrývající funkcionalitou většinu, resp. velkou část funkcí podnikového řízení.

ERP II – Enterprise Resource Planning II – komplexní řešení aplikačního soft-
ware pro podnikovou informatiku, jejímž jádrem je aplikace ERP.

185

ETL

GIS

IrDA

ISOC

IST

ETL – Extract, Transform, Load – datová pumpa – software pro realizaci transfor-
mací dat mezi různými datovými zdroji.

GIS  –  Geographical  Information  System  –  geografický  informační  systém  pro
digitalizaci a zpracování map a plánů.

IrDA – Infrared Data Association – standardizační organizace stanovující pravi-
dla komunikace prostřednictvím infračervených portů.

ISOC – Internet Society – organizace, která zastřešuje a koordinuje standardi-
zační procesy internetu.

IST – Informační strategie – koncepce rozvoje a provozu informačního systému.
Informační strategie zadává a koordinuje všechny informatické projekty.

IT Balanced
Scorecard

IT Balanced Scorecard – nástroj pro řízení podnikové informatiky a vztahu mezi
informatikou a byznysem.

IT Governance

IT PM

IT služba

ITG

ITIL

ITU

IVR

J2EE

JDBC

JIS

JIT

IT Governance – tvoří procesy, které ve firmě zajišťují efektivní a účinné rozho-
dování o IT a jeho využití k realizaci cílů byznysu. Procesy IT Governance mají
své definované vstupy, výstupy, role a zodpovědnosti za rozhodování o IT.

IT PM – IT Performance Management – koncept řízení výkonnosti IT založený na
vztazích metod, procesů, metrik a aplikací řízení IT.

IT služba – aktivita a/nebo informace  dodávané  poskytovatelem IT služby pří-
jemci služby. IT služba je vytvářena IT procesy, které při svém průběhu konzumu-
jí IT zdroje (hardware, software, data, lidé). Službu poskytovatel příjemci dodává
na základě dohodnutých obchodních a technických podmínek.

ITG – IT Governance – tvoří procesy, které ve firmě zajišťují efektivní a účinné
rozhodování o ICT a jeho využití k realizaci cílů byznysu. Procesy IT Governance
mají své definované vstupy, výstupy, role a zodpovědnosti za rozhodování o ICT.

ITIL – IT Infrastructure Library – jde o sadu publikací, popisujících nejlepší prak-
tiky  řízení  IT  služeb  a  o  systém  certifikací  a  školení  jednotlivců  ve  znalostech
těchto praktik.

ITU – International Telecommunication Union – standardizační organizace v ob-
lasti telekomunikací.

IVR – Interactive Voice Responce – hlasový automat nebo automatický operátor.

J2EE – Java 2nd Enterprise Edition – platforma založená na Javě pro aplikační
servery.

JDBC – Java DataBase Connectivity – programové prostředky společnosti Java-
Soft, které  skrývají  specifickou  implementaci  databázových  serverů  aplikačním
programům. Tyto programy pak mohou přistupovat stejnými metodami k databá-
zím od různých výrobců.

JIS  –  Just  in  Sequence  –  metoda  založena  na  principu  dodávání  dílů  přesně
v pořadí, v jakém jsou, resp. budou použity ve výrobě.

JIT – Just in Time – logistická technologie „právě včas“ – tj. umožňuje podniku
vyrábět výrobky v přesně dohodnutých a dodržovaných termínech podle potřeb
zákazníka.  Smyslem  je  dodávat  velmi  často,  v  malém  množství  a  v  co  možná
nejpozdějším okamžiku.

Just in Sequence

Just in Sequence – JIS – metoda, založená na principu dodávání dílů přesně
v pořadí, v jakém jsou, resp. budou použity ve výrobě.

Just in Time

Kanban

Just in Time – JIT – logistická technologie „právě včas“ – tj. umožňuje podniku
vyrábět výrobky v přesně dohodnutých a dodržovaných termínech podle potřeb
zákazníka. Smyslem je dodávat velmi často, v malém množství, a v co možná
nejpozdějším okamžiku.

Kanban  –  bezzásobová  technologie  vyvinutá  společností  Toyota  Motors.  Její
princip spočívá v synchronizaci činnosti dodavatele a odběratele za předpokladu
stability dodavatelského řetězce.

186

Katalog IT služeb

Katalog IT služeb – strukturované informace o všech službách IT, dostupných
zákazníkům. (ISACA, 2012, s. 93).

KGI

KPI

Klíč

KGI – Key Goal Indicator – cílově orientovaná metrika, tj. měří výsledek proce-
su, např. počet úspěšně vyřešených incidentů v procesu řízení incidentů.

KPI – Key Performance Indicator – metrika výkonnosti jednotlivých složek pro-
cesu  (činností  a  zdrojů  procesu),  tj.  měří  jednotlivé  činnosti  a  zdroje  procesu,
např. dobu trvání činnosti, objem zpracovaných dokumentů, % využití doby ope-
rátora service desku apod.

Klíč – identifikace entity – zvolený atribut entity, rozlišují se primární a sekundár-
ní klíče entity.

Klíčová aktivita

Klíčová aktivita – činnost, která je součástí úlohy a má na výsledek úlohy pod-
statný vliv.

KM

Komprese dat

Konceptuální
úroveň

Konektivita

Konektivita
databázová

KM – Knowledge management – řízení znalostí, obvykle součást aplikací řízení
podnikového obsahu (ECM).

Komprese  dat  –  proces,  zajišťující  snížení  nároků  souborů  dat  na  paměťový
prostor, nutný k jejich uložení. Spočívá v redukci počtu bitů, potřebných pro di-
gitální  vyjádření  „předmětu  komprese“  (např.  souboru).  Existuje  ztrátová  nebo
bezztrátová komprese.

Konceptuální úroveň – vyjadřuje pohled na obsah systému nezávisle na tech-
nologickém prostředí, ve kterém bude systém realizován, vyjadřuje podstatu sys-
tému.

Konektivita – možnost vzájemného propojení nebo připojení, zpravidla konekti-
vita síťová, databázová apod.

Konektivita databázová – způsob napojení aplikace na databázi.

Konfigurační
management

Konfigurační management – řízení vývoje systému pomocí správy verzí systé-
mu, jeho jednotlivých komponent a řízení vztahů mezi nimi.

Kontaktní
centrum

Kontinuita

Konzistence

Kostka

Log soubor

Logistika

Logistický
řetězec

Mainframe

Kontaktní  centrum  –  aplikace  v  rámci  CRM.  Kontaktní  centra  jsou  vybavena
počítači s přístupem k centrální zákaznické databázi. V ní se uchovávají a pravi-
delně aktualizují informace o jakémkoliv kontaktu se zákazníky, např. vyřizování
stížností.

Kontinuita – strategická a taktická způsobilost organizace plánovat reakci a re-
agovat na incidenty a přerušení činnosti za účelem pokračování provozu organi-
zace na přijatelné, předem stanovené úrovni (BS 25999‑1:2006, 2.2).

Konzistence – bezrozpornost modelů – stav, kdy mezi skutečnostmi vyjadřova-
nými jednotlivými modely není rozpor.

Kostka  –  označení  pro  multidimenzionální  databázi  (nebo  její  princip).  Kostka
je  realizována  buď  prostřednictvím  multidimenzionální  databáze,  nebo  zvláštní
struktury relační databáze.

Log soubor – soubor, v němž jsou zaznamenány všechny operace, provedené
v rámci běhu aplikace.

Logistika  –  disciplína,  která  se  zabývá  slaďováním,  koordinací,  synchronizací
a  celkovou  optimalizací  všech  aktivit  v  rámci  samoorganizujících  se  systémů,
jejichž zřetězení je nezbytné k pružnému a hospodárnému dosažení daného sy-
nergického efektu.

Logistický řetězec – propojení trhu surovin a trhu spotřeby vycházející od ko-
nečného spotřebitele.  Jednotlivé procesy v řetězci mají hodnototvorný charakter.
Má stránku hmotnou (hmotné toky) a stránku nehmotnou (informační toky).

Mainframe – střediskový počítač – pro zpracování úloh na úrovni větších orga-
nizací.

187

Management
bezpečnosti
informací

Management
kvality

Management
služeb

MBO

m‑Business

m‑Commerce

Management bezpečnosti informací – část celkového systému managementu
organizace založená na přístupu (organizace) k rizikům činnosti, která je zaměře-
na na ustavení, zavádění, provoz, monitorování, přezkoumání, udržování a zlep-
šování bezpečnosti informací (ISO/IEC 27001:2005, 3.7).

Management kvality – systém managementu pro vedení a řízení organizace, co
se týká kvality (ISO 9000:2005, 3.2.3).

Management služeb – systém řízení pro vedení a řízení činností, souvisejících
s řízením služeb a jejich poskytovatele (ISO/IEC 20000‑1:2011, 3.31).

MBO – Management by Objectives – metoda řízení na základě podnikových cílů.

m‑Business – Mobile Business – mobilní podnikání – souhrn veškerých aktivit,
procesů a aplikací, které jsou uskutečňovány nebo podporovány mobilními tech-
nologiemi.

m‑Commerce – Mobile Commerce – mobilní obchodování – každá transakce,
vykonaná  prostřednictvím  mobilních  koncových  zařízení,  resp.  použití  mobilní
komunikace s jakoukoliv aplikací, dostupnou a vytvořenou pro mobilní koncová
zařízení, jejíž využití slouží k obchodním účelům.

Metadata

Metadata  –  informace  o  datech,  tj.  názvy  tabulek,  názvy  atributů,  datové  typy,
primární klíče, vazby, komentáře atd.

Metainformační
systém

Metainformační systém – systém, který popisuje, resp. modeluje jiný informač-
ní systém.

Metoda

Metodika

Metrika

Metody řízení
zásob

Middleware

Midrange

Mimořádné
výnosy

MIPS

MMDIS

Modul

MOM

Metoda – představuje známou a v rámci úloh aplikovatelnou metodu manažer-
ského (např. BSC, RPZ atd.), ekonomického (např. ABC, ROI atd.) nebo informa-
tického charakteru (datové modelování, dimenzionální modelování atd.).

Metodika  –  doporučený  souhrn  fází,  etap,  přístupů,  zásad,  postupů,  pravidel,
dokumentů, řízení, metod, technik a nástrojů pro tvůrce informačních systémů,
který pokrývá celý životní cyklus informačního systému.

Metrika  –  sledovaná  a  měřená  hodnota  ukazatele  pro  potřeby  řízení  podniku
a informatiky. K ukazatelům se váží dimenze pro jejich identifikaci, analýzy a plá-
nování. Vychází se přitom z principů dimenzionálního modelování.

Metody řízení zásob – FIFO (First In First Out) – výrobky přijaté dříve jsou ex-
pedovány jako první, FEFO (First Expired First Out) – výrobky s dřívějším datem
spotřeby jsou expedovány jako první, LIFO (Last In First Out) – výrobky přijaté
jako poslední jsou jako první expedovány.

Middleware – software zajišťující transparentnost umístění distribuovaných pro-
gramových  prostředků,  pomocí  něj  lze  pracovat  s  distribuovanými  zdroji,  jako
kdyby byly lokální.

Midrange – počítače střední třídy – používané pro řešení úloh na úrovni pracov-
ních týmů a menších organizací.

Mimořádné výnosy – výnosy získané mimořádně, například prodejem odepsa-
ných strojů.

MIPS – Million instructions per second – jednotka pro stanovení rychlosti proce-
soru počítače.

MMDIS – Multidimensional Management and Development of Information Sys-
tem – metodika řízení vývoje a provozu informačního systému.

Modul – část modelu na dané úrovni podrobnosti již dále nerozkládaná, s relativ-
ně samostatnou funkčností.

MOM  –  Message‑oriented  Middleware  –  programové  prostředky  řízení  front
zpráv.

Multidimenzionální
databáze

Multidimenzionální  databáze  –  databáze,  kde  jsou  data  uložena  na  principu
vícerozměrové matice. Hodnoty jsou přístupné přímo pro danou kombinaci prvků
dimenzí.

188

Náklad

Náklad – hodnotově vyjádřené, účelně vynaložené ekonomické zdroje podniku,
a to za účelem, který souvisí s ekonomickou činností.

Nepřímé náklady

Nepřímé náklady – nelze přímo přiřadit k určitému výkonu, je nutné je nějakým
způsobem rozpočítávat (mzdy režijních pracovníků, nájemné).

Objekt

Objekt – prvek reality, určený souhrnem vlastností a akcí s jedinečnou identitou.
Programový nebo konstrukční prvek, který obsahuje data i procedury. Základní
vlastnosti: identita, zapouzdření, synergie, odpovědnost, chování, příslušnost do
hierarchie tříd.

Objektově
orientované
programování

Objektově orientované programování – OOP – Object‑Oriented Programming
– založeno na principu neoddělování dat od funkcí, které s nimi pracují. Logic-
ký přístup k vytváření programu, podporuje snahu o abstrakci daného problému
a snahu vytvářet znovu použitelné objekty.

OCR

ODBC

ODETTE

OEM

OIS

OLA

OLAP

OCR – Optical Charakter Recognition – čtečky optických dat zajišťující rozpozná-
ní tištěných znaků.

ODBC – Open Database Connectivity – standard datového rozhraní databází.

ODETTE – standard EDI – pro automobilový průmysl.

OEM – Original Equipment Manufacturer – původní výrobce zařízení, typ licence.

OIS – Office Information System – software podporující administrativní činnosti,
zahrnující textové editory, tabulkové kalkulátory, prezentační programy apod.

OLA  –  Operational  Level  Agreement  –  formální  mechanismus,  který  zajišťuje
spolupráci interních a externích dodavatelů služeb IT při plnění jejich nejčastěji
outsourcingového kontraktu.

OLAP  –  Online Analytical  Processing  –  informační  technologie,  založená  pře-
devším na koncepci multidimenzionálních databází. Jejím hlavním principem je
několikadimenzionální  tabulka,  umožňující  rychle  a  pružně  měnit  jednotlivé  di-
menze a měnit tak pohledy uživatele na modelovanou ekonomickou realitu.

OLAP server

OLAP server – technologie pro uložení a správu dat v multidimenzionálních da-
tabázích, pro jejich vytváření a plnění.

OLE

OLE DB

OLTP

OMG

OMR

OOP

OOT

OPEX

OPT

OLE – Object Linking and Embedding – technologie určená primárně pro tvorbu
složených dokumentů.

OLE  DB  –  standard  datového  rozhraní  umožňující  přístup  k  různým  datovým
zdrojům.

OLTP – Online Transaction Processing – počítačové zpracování transakcí v re-
álném čase.

OMG – Object Management Group – organizace definující objektové standardy,
zejména pro programování.

OMR – Optical Mark Recognition – čtečky optických dat, zajišťující rozpoznání
optických značek.

OOP – Object‑Oriented Programming – objektově‑orientované programování –
založeno na principu neoddělování dat od funkcí, které s nimi pracují. Logický
přístup  k  vytváření  programu,  podporuje  snahu  o  abstrakci  daného  problému
a snahu vytvářet znovu použitelné objekty.

OOT – Object Oriented Technology – objektově orientovaná technologie.

OPEX  –  Operative  expenses  –  neinvestiční,  tj.  provozní  náklady  –  kontinuální
(nepřetržitě vznikající), které je nutné vynaložit na správu, provoz, údržbu a roz-
voj  prostředků,  rovněž  náklady,  které  vnikají  v  souvislosti  s  odběrem  určitých
služeb.

OPT – Optimised Production Technology – metoda podnikového řízení oriento-
vaná na optimalizaci výrobních procesů.

189

OSI RM

OTA

Outsourcing

PMBOK

PNG

Podnikový
proces

Portál

Pracovní tok

PRINCE2

Problém

Procedura

Proces

Produkční
databáze

Protokol

Prototyp

OSI  RM  –  model  pro  vyjádření  sítové  (komunikační)  architektury,  využívající  7
hierarchických  vrstev,  vytvořený  v  ISO  (International  Standards  Organization).
Umožňuje vyjádřit zajištění komunikace mezi aplikacemi v počítačové síti.

OTA  –  OpenTravel  Aliance  –  mezinárodní  organizace  v  turistickém  průmyslu,
členy jsou letecké společnosti, železnice, hotelové sítě, autopůjčovny a další.

Outsourcing – zajišťování vybraných činností a IT služeb externími dodavateli.
Podle  předmětu  se  rozlišuje  outsourcing  rozvoje  IT  a  outsourcing  provozu  IT.
Totální outsourcing znamená, že dodavatel zajišťuje provoz a rozvoj zákazníkovi
kompletně.

PMBOK – Project Management Body of Knowledge – metodika řízení projektů,
vytvářená organizací PMI (Project Management Institute).

PNG – Portable Network Graphic – specificky vytvořený formát uložení rastro-
vých grafických dat s optimalizací pro přenos v sítích, který kombinuje přednosti
formátů GIF a JPEG.

Podnikový proces – proces, kterým podnik zajišťuje naplnění podnikových cílů,
reaguje na významné události a zajišťuje produkci plánovaných výstupů (produk-
tů, služeb apod.).

Portál – množina technologií a aplikací, tvořící univerzální rozhraní, jehož pro-
střednictvím je umožněno účastnit se procesů organizace, přistupovat ke všem
relevantním informacím, komunikovat s ostatními participujícími lidmi a realizo-
vat adekvátní aktivity spojené s podnikovými procesy.

Pracovní tok – vyjadřuje automatizaci celého nebo části podnikového procesu,
během  kterého  jsou  dokumenty,  informace  nebo  úkoly  předávány  od  jednoho
účastníka procesu ke druhému podle sady procedurálních pravidel.

PRINCE2 – Projects in Controlled Environments – metodika řízení projektů, vy-
tvářená britským úřadem OGC (Office of Government Commerce).

Problém – příčina nebo zdroj jednoho nebo více incidentů.

Procedura – ucelená, relativně samostatná jednotka programu.

Proces  – množina na sebe navazujících činností, které z definovaných vstupů
vytvářejí požadovaný výstup, váží na sebe zdroje (lidi, technologie, materiál, fi-
nance, čas) a mají měřitelné charakteristiky.

Produkční  databáze  –  databáze  uchovávající  data,  která  vytváří  a  spravují
transakční informační systémy. Představují hlavní vstup do řešení business in-
telligence.

Protokol – soubor dohodnutých pravidel (včetně formátů přenášených dat), vy-
užívaný  v  komunikaci  uzlů  (partnerů).  Protokoly  jsou  definovány  pro  jednotlivé
vrstvy sítové architektury (OSI RM, protokolová sada TCP/IP) a umožňují komu-
nikaci bez závislosti na konkrétní technologické implementaci programů.

Prototyp – vytvořená část nebo neúplná verze informačního systému, založe-
ná  na  předběžném  návrhu.  Prototyp  demonstruje  především  navržené  funkce
a způsob komunikace s částí informačního systému, aniž by byly zatím plně re-
alizovány.

Provozní výnosy

Provozní výnosy – získané v provozně‑hospodářské činnosti podniku (tržby za
prodej).

Příjem

Příjem  –  představuje  finanční  plnění  za  prodané  produkty  v  podobě  příjmu  fi-
nančních prostředků do pokladny či na bankovní účet.

Přímé náklady

Přímé náklady – jsou přímo přiřaditelné k jednotlivým výkonům (výrobkům, služ-
bám) bez rozpočítávání (náklady na materiál, polotovary).

Quick Response

Quick  Response  –  technologie  logistického  řetězce  znázorňující  „rychlou  re-
akci“,  je  založena  na  sdílení  informací  o  prodejích,  objednávkách  a  zásobách
články řetězce od výrobců až po prodejny maloobchodu.

190

RACI

RAD

Referenční
metodika

Referenční
model

Referenční
proces

Report

Reuse

RI

Role

RACI  –  matice  RACI  přiřazuje  a  zobrazuje  odpovědnosti  jednotlivých  osob  či
pracovních míst za danou oblast v organizaci: R – Responsible (vykonává), A –
Accountable (zodpovídá), C – Consulted (konzultuje), I – Informed (má být infor-
mován).

RAD – Rapid Application Development – rychlý vývoj aplikací, metoda aplikova-
ná ve vývoji programových systémů.

Referenční metodika – metodika, standard či metodický rámec řízení podnikové
informatiky, např. COBIT, ITIL, ISO 20000.

Referenční model – model, který je, vedle metodické stránky řešení, naplněn
předdefinovaným obsahem. Tento obsah, který tvoří například podnikové proce-
sy a jejich prvky, vzniká a postupně se rozvíjí na základě poznatků a zkušeností
z dosud realizovaných projektů pro různé zákazníky v praxi.

Referenční proces – proces či skupina procesů v rámci referenční metodiky.

Report – výstup software s výsledky hodnot ukazatelů. Může být vyjádřen tabul-
kou, grafem.

Reuse – znovupoužitelnost, obvykle ve smyslu opakovaného využití SW produk-
tů.

RI – Results Indicators – vztahují se k dějům, co byly ukončeny. Může jít o děje
dlouhodobé, např. fáze, dlouhodobý projekt, nebo o děje krátkodobé, např. akti-
vita nebo proces.

Role  –  představují  typové  skupiny  pracovníků,  charakterizované  vykonáváním
obdobných činností. Jeden člověk může zastávat více rolí. Role mají definované
odpovědnosti, které zahrnují provádění určitých činností.

Rozhodovací
strom

Rozhodovací  strom  (decision  tree)  –  strom,  jehož  uzly  obsahují  testy  hodnot
atributů a větve z uzlů vycházející reprezentují jednotlivé hodnoty daného atri-
butu.

RPC

RSS

SaaS

SAM

SAN

SC

Scénář

SCM

SCP

SD

RPC – Remote Procedure Call – vzdálené volání procedur – programové pro-
středky umožňující shodné volání programových komponent, jako by byly umís-
těny na stejném uzlu.

RSS – RDF Site Summary – zajišťuje stručný popis obsahu webu spolu s odkazy
na plné verze obsahu.

SaaS – Software‑as‑a‑Service – služba, resp. model poskytování aplikací, kde
jejich  funkcionalita  je  zajišťována  poskytovatelem  této  služby  značnému  počtu
uživatelů  prostřednictvím  internetu.  Specializovaný  poskytovatel  tak  udržuje
a provozuje jak samotnou aplikaci, tak IT infrastrukturu nutnou k jejímu provozu
a případné doplňkové služby.

SAM – Software Asset Management – účinná správa, řízení a ochrana softwaro-
vých aktiv v rámci organizace (ISO/IEC 19770‑1:2006, 3.12).

SAN – Storage Area Network – specifická síť uzpůsobená pro připojení datových
nosičů, jako např. kontrolérů diskových polí (disk array, RAID) a knihoven mag-
netických pásek ke služebním počítačům.

SC – Supply Chain – síť organizací, které se účastní řada procesů a aktivit, je-
jichž cílem je vytvoření hodnoty, tj. produktu a služeb.

Scénář, resp. životní situace – v řízení podniku a informatiky vymezuje jeho pod-
statu.

SCM – Supply Chain Management – řízení všech procesů v rámci dodavatelské-
ho řetězce.

SCP – Supply Chain Planning – plánování dodavatelských řetězců.

SD – Structure Diagram – strukturní diagram, prostředek strukturovaného popisu
algoritmu.

191

SDK

Serverhosting

Service desk

SLA

SLM

Slovník dat

Snowflake
schéma

SOA

SOAP

Social
Computing

SDK – Software Development Kit – programové nástroje pro podporu snadnější-
ho vývoje aplikací spolupracující s vybraným jiným vývojovým prostředím.

Serverhosting  –  umístění  vlastního  serveru,  poskytujícího  nějakou  konkrétní
službu přímo v počítačovém sále poskytovatele a jeho připojení na páteřní síť.

Service desk – pracoviště v rámci podnikové informatiky, poskytující průběžnou
podporu a konzultace uživatelům při využívání a jejich aplikací a infrastruktury.

SLA  –  Service  Level Agreement  –  smlouva  specifikuje,  co  je  poskytovatel  po-
vinen zákazníkovi dodat, v jakém rozsahu, v jaké kvalitě a kolik za to odběratel
zaplatí.

SLM – Service Level Management – představuje procesy a činnosti, jako např.
specifikace struktury a obsahu služeb, definice katalogu služeb, určení obchod-
ních podmínek a cen za služby, ceník služeb, a to pro interní útvary i externí zá-
kazníky (pokud podnik nabízí informační služby jako obchodní komoditu) a další.

Slovník dat – Data Dictionary – prostředek centrálního popisu datových struktur.

Snowflake schéma – Schéma sněhová vločka – typ dimenzionálního databázo-
vého modelu, tvořeného více normalizovanými a nenormalizovanými tabulkami
dimenzí.

SOA – Service Oriented Architecture – politiky, praktiky a rámce, které umožňují,
aby  funkcionalita  aplikací  byla  poskytována  a  spotřebována  jako  množina  slu-
žeb, a to na takové úrovni granularity, kterou potřebuje příjemce služby. Ten je
oddělen od implementace služby a používá pouze jednoduché, na standardech
založené rozhraní.

SOAP – Simple Object Access Protocol – protokol, který poskytuje možnost pře-
nášet XML dokumenty prostřednictvím různých přenosových protokolů a posky-
tuje prostředky komunikace programů nezávislé na proprietárních technologiích.

Social Computing – interaktivní a kooperativní chování mezi uživateli počítačů.
Předpokladem je, že lze navrhnout systémy, které podporují běžné funkce tím, že
umožňují sociálně vytvářené informace šířit mezi více uživateli navzájem.

Softwarová
architektura

Softwarová  architektura  –  určuje,  z  jakých  modulů  bude  software  postaven
a jaké vazby budou existovat mezi těmito moduly.

Sourcing

Sourcing  –  podnikový  proces,  jehož  cílem  je  rozhodnutí  o  tom,  které  služby,
procesy a zdroje má podnik zajišťovat sám a které přenechat externím posky-
tovatelům, výběr nejvhodnějších poskytovatelů externích služeb, sepsání smluv
s poskytovateli o obsahu a úrovni poskytovaných služeb, kontrola poskytovaných
služeb a řízení vztahů s externími poskytovateli.

Star schéma

Star schéma – schéma hvězdy je typ dimenzionálního databázového modelu,
tvořeného pouze nenormalizovanými tabulkami dimenzí.

SWOT

Tag

Teorie omezení

Terminál – host

TMS

SWOT – Strengths, Weaknesses, Opportunities, Threats – analýza silných a sla-
bých stránek, příležitostí a hrozeb firmy.

Tag – identifikátor označující nějaká data, tj. začátek dat a konec těchto dat.

Teorie omezení – Theory of Constraint – teorie omezení, princip řízení, zdůraz-
ňující, že základním posláním firmy je generování peněz, a to jak v současnosti,
tak i z hlediska dlouhodobého horizontu. K naplňování tohoto cíle je třeba sledo-
vat hlavní ekonomické ukazatele.

Terminál – host – architektura, kde všechny oblasti programu včetně dat jsou na
jednom uzlu v síti. Úkolem terminálu je pouze zprostředkovat vstup či výstup jiné-
mu počítači (host) a neprovádět zpracování programu. Terminálem označujeme
zařízení, které nedisponuje procesorem, vnitřní a vnější pamětí.

TMS – Transport Management System – moderní dopravní informační systém,
umožňující monitoring, řízení a správu vozového parku a řidičů, či důkladné na-
plánování tras, správu a opravy vozidel apod.

192

TOC

TOGAF

TQM

TOC  –  Theory  of  Constraint  –  teorie  omezení,  princip  řízení,  zdůrazňující,  že
základním posláním firmy je generování peněz, a to jak v současnosti, tak i z hle-
diska  dlouhodobého  horizontu.  K  naplňování  tohoto  cíle  je  potřebné  sledovat
hlavní ekonomické ukazatele.

TOGAF – The Open Group Architecture Framework  – rámec podnikové  archi-
tektury.

TQM  –  Total  Quality  Management  –  metoda  založená  na  řízení  kvality  všemi
zaměstnanci organizace, sledující dlouhodobý úspěch, založený na uspokojení
zákaznických potřeb.

Transakční
zpracování

Transakční zpracování – metoda zpracování dat, při které se každý požadavek
zpracuje okamžitě po svém příchodu. Uživatel může v průběhu zpracování po-
žadavek upřesňovat.

Třída

Typ užití

Účinnost

Událost

Ukazatel

UML

UN/CEFACT

UN/EDIFACT

URI

URL

Variabilní
náklady

VPN

Výdaj

Výkonnost

Výnos

Třída  –  zobecnění  objektu  nebo  jiné  třídy  (generalizace).  Z  třídy  lze  děděním
odvodit jinou třídu (podtřídu) nebo instancí odvodit objekt, objekty téže třídy mají
stejnou strukturu, liší se pouze hodnotami svých atributů.

Typ užití – prvek notace UML, vyjadřující typ použití (funkci) navrhovaného sys-
tému.

Účinnost – porovnání toho, co bylo skutečně vytvořeno, s tím, co by mohlo být
vytvořeno  se  stejným  rozsahem  využití  zdrojů  (peníze,  čas,  práce  atd.)  (Busi-
nessdictionary, 2008).

Událost  –  impuls,  který  je  vyměňovaný  mezi  dvěma  objekty  (vyslání  a  příjem
události).

Ukazatel – sledovaný údaj (Fact,. Measure) v organizaci, například objem prode-
je, počet reklamací, obrat atd.

UML  –  Unified  Modeling  Language  –  standardní  jazyk  a  grafické  symboly  pro
vytváření  modelů  obchodních  a  technických  systémů.  Není  limitován  jen  jako
nástroj pro programátory. UML definuje modelové typy od funkčních požadavků
a workflow modelů činností po návrh struktury tříd a diagramů komponent.

UN/CEFACT – United Nations / Center for Trade Facilitation and Electronic Busi-
ness – orgán OSN pro standardizaci v mezinárodním obchodu.

UN/EDIFACT – United Nations / Electronic Data Interchange for Administration,
Commerce and Trasport – standard EDI – ISO 9735 řízený a garantovaný OSN.
Obecná mezinárodní norma pro EDI, je současně normou multioborovou. Vývoj
tak probíhá pouze v rámci tohoto standardu a postupně dochází ke konvergenci
ostatních standardů.

URI  –  Uniform  Resource  Identifier  –  obecně  použitelná  množina  všech  jmen/
adres, které se vztahují k určitému zdroji.

URL – Uniform Resource Location – identifikátor umístění dokumentu na inter-
netu.

Variabilní  náklady  –  náklady,  jejichž  objem  (a  potažmo  jejich  výše  vyjádřená
v penězích) roste spolu s objemem výroby.

VPN – Virtual Private Network – množina bezpečnostních mechanismů, umož-
ňující zajistit důvěryhodné komunikační prostředí i v principiálně nedůvěryhodné
síti, např. internetu.

Výdaj – představuje úbytek majetku bez vazby na konkrétní výkon/výkony, např.
splátka bankovního úvěru z běžného účtu.

Výkonnost – schopnost dosahovat osobních, procesních, skupinových a korpo-
rátních cílů podniku nebo podnikatelského ekosystému.

Výnos – představuje finanční ohodnocení výkonů, které podnik získal z veške-
rých svých činností za určité období (měsíc, rok) bez ohledu na to, zda v tomto
období došlo k jejich úhradě.

193

Výpočetní model

Vývojové
prostředí

Webové služby

Webhosting

Workflow

WS

WSDL

XHTML

XLL

XML

Výpočetní model – model, kterým se charakterizuje zpracování aplikací infor-
mačního systému a který zároveň formuluje principiální požadavky na technolo-
gie.

Vývojové prostředí – komplex programových prostředků pro design, vytvoření,
testování a dokumentaci programových systémů.

Webové služby – WS – Web services – webové služby – volně spojené, zno-
vupoužitelné  softwarové  komponenty,  které  sémanticky  zapouzdřují  oddělenou
funkcionalitu a které jsou distribuovány a programově přístupné přes standardní
internetové protokoly.

Webhosting – služba pronájmu virtuálních WWW a poštovních serverů, umož-
ňujících plnohodnotný provoz domény zákazníka, a to zcela nezávisle na jeho
vlastním připojení k síti. Virtuální server tak sdílí prostor a zdroje jednoho fyzické-
ho serveru, který je vlastněn a spravován poskytovatelem ISP.

Workflow – řízení pracovních toků.

WS – Web services – webové služby – volně spojené, znovupoužitelné softwa-
rové komponenty, které sémanticky zapouzdřují oddělenou funkcionalitu a které
jsou distribuovány a programově přístupné přes standardní internetové protokoly.

WSDL – Web Services Definition Language – XML dokument popisující rozhraní
webové služby a detaily, nutné k připojení ke službě (síťový protokol, požadavky
na kódování dat).

XHTML – eXtensible HyperText Markup Language – původní specifikace HTML,
která vyhovuje zásadám jazyka XML.

XLL – eXtensible Linking Language – jazyk pro zajištění vazeb mezi XML doku-
menty.

XML – eXtensible Markup Language – značkovací jazyk, jehož aplikací na texto-
vé soubory vznikají jednotlivé XML dokumenty. Vlastní specifikace jazyka uvádí
způsob zápisu struktury dokumentu, mechanismus vytváření logických struktur
v dokumentu, pravidla deklarace elementů a vlastností apod.

XML dokument

XML  dokument  –  textový  dokument  (soubor,  zpráva),  který  způsobem  zápisu
odpovídá zásadám XML.

XML:DB

Xpath

Xpointer

XQuery

XSD

XSLT

XML:DB – specifikace pro správu dat v XML databázích.

Xpath – XML Path Language – určuje jednotlivé části XML dokumentu. Používá
kompaktní syntaxi, odlišnou od XML, která umožňuje užití jazyka XPath v adre-
sách URI a v hodnotách atributů XML.

Xpointer  –  XML  Pointer  Language  –  jazyk,  kterým  popisujeme  vztah  k  určité
části aktuálního nebo jiného XML dokumentu.

Xquery – dotazovací nástroje pro získávání dat z XML dokumentů na základě
definovaných podmínek a pravidel.

XSD – XML Schema Definition Language – jazyk pro definování XML schémat.
Mechanismus popisu a uložení struktury XML dokumentu. Využívá se u složitých
datových struktur (DTD).

XSLT  –  Extensible  Stylesheet  Language  Transformation  –  prostředek,  který
transformuje  XML  dokumenty  do  dokumentů  XML  s  jinou  datovou  strukturou
(XSD nebo DTD) nebo do jiných datových formátů (HTML, PDF, RTF, databázo-
vých formátů atd.).

Zapouzdření

Zapouzdření – Encapsulation – vlastnost objektů, prvky (atributy a metody) ve-
řejně použitelné nebo soukromé.

Zero latency
enterprise

Zero latency enterprise – podnikatelský koncept – představuje úsilí eliminovat
časová zpoždění, způsobená nedostatečnou integrací stávajícího informačního
systému.  Základem  je  rozšiřování,  využití  a  řízení  informací  napříč  organizací
v reálném čase.

194


