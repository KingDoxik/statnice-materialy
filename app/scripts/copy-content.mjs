import { readFileSync, writeFileSync, readdirSync, existsSync, mkdirSync } from 'fs';
import { join, basename } from 'path';

const ROOT = '/Users/dominikvit/Development/skola/ing-statnice';
const CONTENT_DIR = join(ROOT, 'app/src/content/subjects');

const subjects = [
  {
    name: 'Informacni modelovani organizaci',
    slug: '01-informacni-modelovani',
    sourceDir: 'informacni-modelovani-organizaci',
    chapters: [
      { file: 'role-modelovani-vyvoj-is.md', title: 'Role modelovani ve vyvoji informacniho systemu' },
      { file: 'modelovani-business-procesu.md', title: 'Modelovani business procesu' },
      { file: 'modelovani-business-objektu.md', title: 'Modelovani business objektu' },
      { file: 'konsistencni-souvislosti-modelu.md', title: 'Konsistencni souvislosti modelu procesu a objektu' },
      { file: 'funkcnost-is-procesne-rizena-organizace.md', title: 'Funkcnost IS a jeho role v procesne rizene organizaci' },
      { file: 'podnikova-architektura-digitalni-transformace.md', title: 'Podnikova architektura a digitalni transformace' },
    ]
  },
  {
    name: 'Reseni IS ve vztahu k charakteru byznysu',
    slug: '02-reseni-is-byznys',
    sourceDir: 'reseni-is-ve-vztahu-k-charakteru-byznysu/vyukove_materialy',
    chapters: [
      { file: '1_Analyticke_otazky.md', title: 'Analyticke otazky pro diskuse a interview' },
      { file: '2_Metodiky_a_rizeni.md', title: 'Metodiky a rizeni projektu' },
      { file: '3_Faktory_a_kontext.md', title: 'Faktory a kontext reseni' },
      { file: '4_Aplikace_a_efekty.md', title: 'Typy aplikaci a efekty' },
    ]
  },
  {
    name: 'Rizeni podnikove informatiky',
    slug: '03-rizeni-podnikove-informatiky',
    sourceDir: 'rizeni-podnikove-informatiky',
    chapters: [
      { file: 'principy-problemy-rizeni-it.md', title: 'Principy a problemy rizeni IT v podnicich' },
      { file: 'role-kompetence-rizeni-it.md', title: 'Role a kompetence v rizeni IT' },
      { file: 'strategicke-rizeni-it.md', title: 'Strategicke rizeni IT' },
      { file: 'digitalizace.md', title: 'Digitalizace' },
      { file: 'rizeni-it-sluzeb.md', title: 'Rizeni IT sluzeb' },
      { file: 'rizeni-it-zdroju.md', title: 'Rizeni IT zdroju' },
    ]
  },
  {
    name: 'Rizeni projektu IS/ICT',
    slug: '04-rizeni-projektu-isict',
    sourceDir: 'rizeni-projektu-is-ict',
    chapters: [
      { file: 'projekty-isict-strategicke-rizeni.md', title: 'Projekty IS/ICT v kontextu strategickeho rizeni' },
      { file: 'vztah-projekty-podnikova-architektura.md', title: 'Vztah mezi projekty a podnikovou architekturou' },
      { file: 'specifika-kategorii-projektu-isict.md', title: 'Specifika ruznych kategorii projektu IS/ICT' },
      { file: 'pristupy-metodiky-rizeni-projektu.md', title: 'Pristupy k rizeni projektu a metodiky' },
      { file: 'vyber-prizpusobeni-metodiky.md', title: 'Vyber a prizpusobeni metodiky' },
    ]
  },
  {
    name: 'Design sluzeb',
    slug: '05-design-sluzeb',
    sourceDir: 'design-sluzeb',
    chapters: [
      { file: 'design-sluzeb-mindset-proces-nastroje-metody.md', title: 'Design sluzeb - mindset, proces, nastroje a metody' },
      { file: 'teorie-zmen-metodika-rizeni-zmen.md', title: 'Teorie zmen a metodika rizeni zmen' },
      { file: 'designove-vedeni-management.md', title: 'Designove vedeni a management' },
      { file: 'designovy-proces-business-model-canvas.md', title: 'Designovy proces, business model canvas' },
      { file: 'role-vyzkumu-v-designu-sluzeb.md', title: 'Role vyzkumu v designu sluzeb' },
    ]
  },
  {
    name: 'Design sprint',
    slug: '06-design-sprint',
    sourceDir: 'design-sprint',
    chapters: [
      { file: 'metodologie-design-sprintu.md', title: 'Metodologie design sprintu' },
      { file: 'proces-designoveho-mysleni-dvojity-diamant.md', title: 'Proces designoveho mysleni - dvojity diamant' },
      { file: 'souvislost-rozdily-design-sprint-design-thinking.md', title: 'Souvislost a rozdily mezi design sprint a design thinking' },
    ]
  },
  {
    name: 'Design uzivatelskych rozhrani',
    slug: '07-design-uzivatelskych-rozhrani',
    sourceDir: 'design-uzivatelskych-rozhrani',
    chapters: [
      { file: 'vizualni-design.md', title: 'Vizualni design' },
      { file: 'organizace-obsahu.md', title: 'Organizace obsahu' },
      { file: 'ui-modely.md', title: 'UI modely' },
      { file: 'platformy.md', title: 'Platformy' },
      { file: 'prototypovani-nastroje.md', title: 'Prototypovani a nastroje' },
      { file: 'pristupnost-nastroje.md', title: 'Pristupnost a nastroje' },
      { file: 'design-operations.md', title: 'Design Operations' },
    ]
  },
  {
    name: 'Design zamereny na cloveka',
    slug: '08-design-zamereny-na-cloveka',
    sourceDir: 'design-zamereny-na-cloveka',
    chapters: [
      { file: 'proces-designoveho-mysleni-dvojity-diamant.md', title: 'Proces designoveho mysleni - dvojity diamant' },
      { file: 'pristupy-k-porozumeni-problemu.md', title: 'Pristupy k porozumeni problemu' },
      { file: 'kreativni-vizualizacni-techniky.md', title: 'Kreativni a vizualizacni techniky' },
      { file: 'modelovani-uzivatelskeho-chovani.md', title: 'Modelovani uzivatelskeho chovani' },
      { file: 'pouzitelnost-pristupnost.md', title: 'Pouzitelnost a pristupnost' },
    ]
  },
  {
    name: 'Uzivatelsky vyzkum',
    slug: '09-uzivatelsky-vyzkum',
    sourceDir: 'uzivatelsky-vyzkum',
    chapters: [
      { file: 'kvalitativni-metody.md', title: 'Kvalitativni metody' },
      { file: 'kvantitativni-metody.md', title: 'Kvantitativni metody' },
      { file: 'volba-metody.md', title: 'Volba metody' },
      { file: 'research-operations.md', title: 'Research operations' },
    ]
  },
  {
    name: 'Zaklady UX',
    slug: '10-zaklady-ux',
    sourceDir: 'zaklady-ux',
    chapters: [
      { file: 'historie-designu.md', title: 'Historie designu' },
      { file: 'human-computer-interaction.md', title: 'Human-Computer Interaction' },
      { file: 'etika-designu.md', title: 'Etika designu' },
      { file: 'designove-principy-psychologicky-vyzkum.md', title: 'Designove principy zalozene na psychologickem vyzkumu' },
    ]
  },
];

function extractTitle(content) {
  const match = content.match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : null;
}

function addFrontmatter(content, frontmatter) {
  const yamlContent = Object.entries(frontmatter)
    .map(([key, value]) => {
      if (typeof value === 'number') {
        return `${key}: ${value}`;
      }
      return `${key}: "${value}"`;
    })
    .join('\n');
  return `---\n${yamlContent}\n---\n\n${content}`;
}

for (const subject of subjects) {
  const targetDir = join(CONTENT_DIR, subject.slug);
  if (!existsSync(targetDir)) {
    mkdirSync(targetDir, { recursive: true });
  }

  subject.chapters.forEach((chapter, index) => {
    const sourcePath = join(ROOT, subject.sourceDir, chapter.file);

    if (!existsSync(sourcePath)) {
      console.log(`Warning: File not found: ${sourcePath}`);
      return;
    }

    let content = readFileSync(sourcePath, 'utf-8');
    const extractedTitle = extractTitle(content);
    const title = extractedTitle || chapter.title;

    const frontmatter = {
      title: title.replace(/"/g, '\\"'),
      subject: subject.name,
      subjectSlug: subject.slug,
      order: index + 1,
    };

    const newContent = addFrontmatter(content, frontmatter);
    const targetPath = join(targetDir, `${String(index + 1).padStart(2, '0')}-${chapter.file}`);

    writeFileSync(targetPath, newContent);
    console.log(`Created: ${targetPath}`);
  });
}

console.log('\nContent copy complete!');
