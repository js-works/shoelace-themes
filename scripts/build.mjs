import esbuild from 'esbuild';
import path from 'path';
import zlib from 'zlib';
import { createWriteStream, mkdirSync } from 'fs';
import { readFile, writeFile, rm } from 'fs/promises';
import { execSync } from 'child_process';
import { promisify } from 'util';
import archiver from 'archiver';

import './generate-default-theme-file.mjs';

const brotliCompress = promisify(zlib.brotliCompress);

build().catch((e) => {
  throw e;
});

async function build() {
  await rm('./dist', { recursive: true, force: true });

  for (const pkg of ['shoelace-themes']) {
    const outfile = `./dist/${pkg}.mjs`;

    await esbuild.build({
      entryPoints: [`./src/main/${pkg}.ts`],
      bundle: true,
      outfile,
      tsconfig: './tsconfig.build.json',
      target: 'esnext',
      minify: true,
      sourcemap: true,
      format: 'esm',
      external: ['lit', '@shoelace-style/shoelace/*']
    });

    await createBrotliFile(outfile, outfile + '.br');
  }

  execSync(
    'tsc -p tsconfig.build.json --emitDeclarationOnly -d --declarationDir dist/types',
    {
      stdio: 'inherit'
    }
  );

  await zipDirectory(
    '.',
    './dist/source/source.zip',
    ['*', '.*'],
    ['src', 'scripts']
  );
}
// === helpers =======================================================

async function createBrotliFile(source, target) {
  const content = await readFile(source, 'utf-8');

  const compressedContent = await brotliCompress(content, {
    params: {
      [zlib.constants.BROTLI_PARAM_MODE]: zlib.constants.BROTLI_MODE_TEXT
    }
  });

  await writeFile(target, compressedContent);
}

function zipDirectory(source, out, fileGlob = ['*', '.*'], directories = []) {
  const archive = archiver('zip', { zlib: { level: 9 } });
  const stream = createWriteStream(out);

  archive.glob(fileGlob, { nodir: true });
  directories.forEach((dir) => archive.directory(`${source}/${dir}/`));

  return new Promise((resolve, reject) => {
    mkdirSync(path.dirname(out), { recursive: true });
    archive.on('error', (err) => reject(err)).pipe(stream);
    stream.on('close', () => resolve());
    archive.finalize();
  });
}
