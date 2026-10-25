/**
 * Compresse vidéos lourdes (ffmpeg) + JPEG hero/work/blog (sharp-cli).
 * node scripts/optimize-media.mjs
 */
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const publicDir = path.join(root, 'public');

function mb(n) {
  return `${(n / 1024 / 1024).toFixed(2)} MB`;
}

function compressVideo(rel) {
  const input = path.join(publicDir, rel);
  if (!fs.existsSync(input)) return;
  const tmp = input.replace(/\.mp4$/i, '.opt.mp4');
  const before = fs.statSync(input).size;
  console.log('video', rel, mb(before));
  execFileSync(
    'ffmpeg',
    [
      '-y',
      '-i',
      input,
      '-c:v',
      'libx264',
      '-crf',
      '28',
      '-preset',
      'medium',
      '-vf',
      "scale='min(1280,iw)':-2",
      '-an',
      '-movflags',
      '+faststart',
      tmp,
    ],
    { stdio: 'inherit' },
  );
  const after = fs.statSync(tmp).size;
  if (after < before * 0.95) {
    fs.renameSync(tmp, input);
    console.log('  →', mb(after), `(${Math.round((1 - after / before) * 100)}% smaller)`);
  } else {
    fs.unlinkSync(tmp);
    console.log('  kept original (no gain)');
  }
}

function compressJpeg(rel, width = 1600, quality = 78) {
  const input = path.join(publicDir, rel);
  if (!fs.existsSync(input)) return;
  const tmp = input.replace(/\.(jpe?g|png)$/i, '.opt.jpg');
  const before = fs.statSync(input).size;
  try {
    execFileSync(
      'npx',
      [
        '--yes',
        'sharp-cli',
        '-i',
        input,
        '-o',
        tmp,
        'resize',
        String(width),
        'jpeg',
        '--quality',
        String(quality),
        '--mozjpeg',
      ],
      { stdio: 'pipe', cwd: root, shell: true },
    );
  } catch (e) {
    console.error('sharp failed', rel, e.message);
    return;
  }
  if (!fs.existsSync(tmp)) return;
  const after = fs.statSync(tmp).size;
  if (after < before * 0.9) {
    // Remplace même si source était PNG
    const target = input.replace(/\.png$/i, '.jpg');
    fs.renameSync(tmp, target === input ? input : target);
    if (target !== input && fs.existsSync(input)) {
      // garder le png seulement si encore référencé — on écrase jpg sibling
      console.log('img', rel, mb(before), '→', path.basename(target), mb(after));
    } else {
      console.log('img', rel, mb(before), '→', mb(after));
    }
  } else {
    fs.unlinkSync(tmp);
    console.log('img', rel, 'kept');
  }
}

compressVideo('videos/Najesty-Au-Coeur-3D.mp4');
compressVideo('videos/Najesty-Deco-Construction-16x9.mp4');

const heavyImages = [
  'images/hero/deco-04-cuisine.jpg',
  'images/hero/deco-02-cafe.jpg',
  'images/hero/deco-05-maison.jpg',
  'images/hero/deco-01-salon.jpg',
  'images/hero/deco-03-salle-a-manger.jpg',
  'images/work/08-gens.jpg',
  'images/work/04-night.jpg',
  'images/work/03-somewhere-else.jpg',
  'images/work/02-longue-vie.jpg',
  'images/work/09-bon-coup.jpg',
  'images/work/01-featured-najesty.jpg',
];

for (const img of heavyImages) compressJpeg(img, 1800, 78);

const blogDir = path.join(publicDir, 'images/blog');
if (fs.existsSync(blogDir)) {
  for (const f of fs.readdirSync(blogDir).filter((n) => /\.jpe?g$/i.test(n))) {
    compressJpeg(`images/blog/${f}`, 1400, 76);
  }
}

console.log('done');
