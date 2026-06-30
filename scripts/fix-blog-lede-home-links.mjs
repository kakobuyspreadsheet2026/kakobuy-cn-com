/**
 * Ensures the first "Kakobuy Spreadsheet" in each blog lede links to /.
 * Run: node scripts/fix-blog-lede-home-links.mjs
 */
import fs from 'node:fs';
import path from 'node:path';

const blogDir = path.join('src/pages/blog');
const linked = '<strong><a href="/">Kakobuy Spreadsheet</a></strong>';

function ledeHasHomeLink(lede) {
  return /href="\/"[^>]*>[\s\S]*?Kakobuy Spreadsheet|Kakobuy Spreadsheet[\s\S]*?href="\/"/i.test(
    lede,
  );
}

function fixLede(lede) {
  if (ledeHasHomeLink(lede)) return lede;

  if (/<a href="\/">Kakobuy Spreadsheet<\/a>/i.test(lede)) return lede;

  let fixed = lede.replace(
    /<strong>Kakobuy Spreadsheet<\/strong>/gi,
    linked,
  );
  if (fixed !== lede) return fixed;

  fixed = lede.replace(/<strong>Kakobuy spreadsheet<\/strong>/gi, linked);
  if (fixed !== lede) return fixed;

  const plain = lede.replace(
    /Kakobuy Spreadsheet/i,
    () => linked,
  );
  if (plain !== lede) return plain;

  return lede.replace(
    /(<p class="blog-lede" slot="lede">\s*)/,
    `$1This guide supports shoppers on the ${linked} directory at kakobuy-cn.com. `,
  );
}

let updated = 0;
for (const slug of fs.readdirSync(blogDir)) {
  const file = path.join(blogDir, slug, 'index.astro');
  if (!fs.existsSync(file)) continue;
  const src = fs.readFileSync(file, 'utf8');
  const match = src.match(/<p class="blog-lede" slot="lede">[\s\S]*?<\/p>/);
  if (!match) continue;
  const fixed = fixLede(match[0]);
  if (fixed === match[0]) continue;
  fs.writeFileSync(file, src.replace(match[0], fixed));
  updated++;
  console.log('fixed:', slug);
}
console.log('Updated', updated, 'ledes');
