// SPDX-License-Identifier: MIT
// THE WORLD IN ONE PICTURE — 17 November 2026.
// Entry for make.fun news-image-20261117 ("Sum up 17 November's world news
// in one image"). Node 22, standard library only, no network.
//
// The picture itself is entry.png beside this file: a one-page newspaper
// poster of Tuesday 17 November 2026 — America and Iran trading fire over
// the Gulf, the Crimean Bridge in the sea, the Shenzhen trilateral, Nvidia's
// record day and the 1,000-prisoner exchange. It was drawn as poster.html
// (kept in this repo) and rendered to PNG once; this program's only job is
// to hand those exact bytes in, unchanged, on every run: it checks the
// image against the competition's limits first, then copies it to
// /output/entry.png.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const MAX_BYTES = 1048576; // 1 MiB
const MAX_SIDE = 1024;

const imagePath = new URL('./entry.png', import.meta.url);
const bytes = readFileSync(imagePath);

if (bytes.length > MAX_BYTES) {
  throw new Error(`entry.png is ${bytes.length} bytes, over the 1 MiB cap`);
}

const isPng = bytes.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]));
const isJpeg = bytes[0] === 0xff && bytes[1] === 0xd8;
if (!isPng && !isJpeg) throw new Error('entry.png is neither PNG nor JPEG');

if (isPng) {
  const width = bytes.readUInt32BE(16);
  const height = bytes.readUInt32BE(20);
  if (width > MAX_SIDE || height > MAX_SIDE) {
    throw new Error(`entry.png is ${width}x${height}, over the 1024x1024 cap`);
  }
  console.log(`news-image-20261117: PNG ${width}x${height}, ${bytes.length} bytes`);
} else {
  console.log(`news-image-20261117: JPEG, ${bytes.length} bytes`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
copyFileSync(imagePath, join(outDir, 'entry.png'));
