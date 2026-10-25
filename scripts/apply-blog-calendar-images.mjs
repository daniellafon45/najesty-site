/**
 * Met à jour pubDate + image des 25 articles FR/EN selon le calendrier.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');

const schedule = [
  ['design-interieur-distance-canada', '2026-10-27'],
  ['distance-vs-sur-place', '2026-10-30'],
  ['home-staging-canada-vendre', '2026-11-03'],
  ['salon-qui-se-sent', '2026-11-06'],
  ['moodboard-methode', '2026-11-10'],
  ['sourcing-sans-stock', '2026-11-13'],
  ['photo-interieur-pourquoi', '2026-11-17'],
  ['condo-quebec-petits-espaces', '2026-11-20'],
  ['lumiere-climat-nordique', '2026-11-24'],
  ['decoration-durable-longue-vie', '2026-11-27'],
  ['premiere-maison-par-ou-commencer', '2026-12-01'],
  ['seconde-vie-pieces', '2026-12-04'],
  ['clients-europe-remote', '2026-12-08'],
  ['clients-afrique-remote', '2026-12-11'],
  ['budget-forfaits-design', '2026-12-15'],
  ['erreurs-deco-couteuses', '2026-12-18'],
  ['open-space-zones', '2026-12-22'],
  ['cuisine-circulation-emotion', '2026-12-29'],
  ['chambre-parentale-sanctuaire', '2027-01-05'],
  ['entree-premier-regard', '2027-01-08'],
  ['identite-sans-folklore', '2027-01-12'],
  ['lire-avant-apres', '2027-01-15'],
  ['airbnb-hospitalite-stylisme', '2027-01-19'],
  ['checklist-demenagement', '2027-01-22'],
  ['espace-qui-se-sent-faq', '2027-01-26'],
];

function patchFile(rel) {
  let src = fs.readFileSync(path.join(root, rel), 'utf8');
  for (const [key, date] of schedule) {
    const keyRe = new RegExp(
      `(key: '${key}',[\\s\\S]*?pubDate: ')[^']+('[\\s\\S]*?image: ')[^']+(')`,
    );
    if (!keyRe.test(src)) {
      console.error('No match for', key, 'in', rel);
      continue;
    }
    src = src.replace(keyRe, `$1${date}$2/images/blog/${key}.jpg$3`);
  }
  fs.writeFileSync(path.join(root, rel), src, 'utf8');
  console.log('patched', rel);
}

patchFile('src/data/blog/fr.ts');
patchFile('src/data/blog/en.ts');
