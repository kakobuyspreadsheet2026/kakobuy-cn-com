#!/usr/bin/env node
/**
 * One-off helper: insert BlogArticleInlineFigures after the first <h2> in Phase C posts.
 * Safe to re-run — skips files that already import the component.
 */
import fs from 'node:fs/promises';
import path from 'node:path';

const SLUGS = [
  'kakobuy-spreadsheet-browse-navigation-guide',
  'kakobuy-spreadsheet-brands-catalog-2026',
  'kakobuy-spreadsheet-qc',
  'kakobuy-mobile-spreadsheet-shopping-guide-2026',
  'kakobuy-taobao',
  'kakobuy-weidian',
  'kakobuy-1688',
  'kakobuy-4k-qc-video-inspection-guide',
  'qc-retake-reject-decision-spreadsheet-2026',
  'germany-zoll-kakobuy-spreadsheet-import-2026',
  'france-douane-kakobuy-spreadsheet-import-2026',
  'uk-hmrc-kakobuy-spreadsheet-import-guide-2026',
  'australia-customs-kakobuy-spreadsheet-import-2026',
  'kakobuy-customs-declared-value-primer',
  'kakobuy-freight-line-picker-spreadsheet-2026',
];

const IMPORT_LINE =
  "import BlogArticleInlineFigures from '../../../components/BlogArticleInlineFigures.astro';";

const BLOG_ROOT = new URL('../src/pages/blog/', import.meta.url);

for (const slug of SLUGS) {
  const filePath = path.join(BLOG_ROOT.pathname, slug, 'index.astro');
  let src = await fs.readFile(filePath, 'utf8');
  if (src.includes('BlogArticleInlineFigures')) {
    console.log(`skip ${slug} (already patched)`);
    continue;
  }

  if (!src.includes("import BlogArticleShell")) {
    console.warn(`warn ${slug}: missing BlogArticleShell import`);
    continue;
  }

  src = src.replace(
    "import BlogArticleShell from '../../../components/BlogArticleShell.astro';",
    `import BlogArticleShell from '../../../components/BlogArticleShell.astro';\n${IMPORT_LINE}`,
  );

  const h2Match = src.match(/<h2>[^<]*<\/h2>\s*/);
  if (!h2Match) {
    console.warn(`warn ${slug}: no h2 found`);
    continue;
  }

  const insert = `${h2Match[0]}  <BlogArticleInlineFigures slug="${slug}" />\n\n  `;
  src = src.replace(h2Match[0], insert);

  await fs.writeFile(filePath, src);
  console.log(`patched ${slug}`);
}
