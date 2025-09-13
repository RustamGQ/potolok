import favicons from 'favicons';
import { writeFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';
import pngToIco from 'png-to-ico';

const sourceSvg = path.resolve('public/favicon.svg');
const outDir = path.resolve('public');

const configuration = {
  path: '/',
  appName: 'ПОТОЛКИ',
  appShortName: 'ПОТОЛКИ',
  appDescription: 'Натяжные потолки',
  developerName: 'ПОТОЛКИ',
  developerURL: null,
  icons: {
    android: false,
    appleIcon: [
      { width: 180, background: '#ffffff' }
    ],
    appleStartup: false,
    favicons: [16, 32, 48],
    windows: false,
    yandex: false,
    firefox: false,
    coast: false
  }
};

async function main() {
  if (!existsSync(sourceSvg)) {
    console.error('public/favicon.svg не найден');
    process.exit(1);
  }
  if (!existsSync(outDir)) {
    await mkdir(outDir, { recursive: true });
  }

  const { images, files } = await favicons(sourceSvg, configuration);
  console.log('Generated images:', images.map(i => i.name));
  console.log('Generated files:', files.map(f => f.name));

  const writes = [];
  for (const img of images) {
    const target = path.join(outDir, img.name);
    writes.push(writeFile(target, img.contents));
  }
  for (const f of files) {
    if (f.name.endsWith('.json')) continue;
    const target = path.join(outDir, f.name);
    writes.push(writeFile(target, f.contents));
  }
  await Promise.all(writes);
  console.log('Wrote files to', outDir);

  console.log('Favicons сгенерированы: favicon.ico, favicon-16x16.png, favicon-32x32.png, apple-touch-icon.png');

  // Резерв: если favicons ничего не создал — генерируем вручную
  const needFallback = !existsSync(path.join(outDir, 'favicon-16x16.png'));
  if (needFallback) {
    console.log('Fallback: генерирую PNG и ICO через sharp/png-to-ico');
    const svgBuffer = await sharp(sourceSvg).toBuffer();
    await sharp(svgBuffer).resize(16, 16).png().toFile(path.join(outDir, 'favicon-16x16.png'));
    await sharp(svgBuffer).resize(32, 32).png().toFile(path.join(outDir, 'favicon-32x32.png'));
    await sharp(svgBuffer).resize(180, 180).png().toFile(path.join(outDir, 'apple-touch-icon.png'));
    const icoBuffer = await pngToIco([
      path.join(outDir, 'favicon-16x16.png'),
      path.join(outDir, 'favicon-32x32.png')
    ]);
    await writeFile(path.join(outDir, 'favicon.ico'), icoBuffer);
    console.log('Fallback готов: файлы записаны в public/.');
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});


