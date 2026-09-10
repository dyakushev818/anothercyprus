import { deflateSync } from 'node:zlib';
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const out = join(process.cwd(), 'public');
mkdirSync(out, { recursive: true });

const navy = [23, 54, 93, 255];
const gold = [194, 155, 97, 255];
const ivory = [248, 247, 242, 255];
const glyphs = {
  A: ['01110', '10001', '10001', '11111', '10001', '10001', '10001'],
  C: ['01111', '10000', '10000', '10000', '10000', '10000', '01111'],
};

function crc32(bytes) {
  let value = 0xffffffff;
  for (const byte of bytes) {
    value ^= byte;
    for (let bit = 0; bit < 8; bit += 1) value = (value >>> 1) ^ (0xedb88320 & -(value & 1));
  }
  return (value ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const typeBytes = Buffer.from(type, 'ascii');
  const length = Buffer.alloc(4);
  length.writeUInt32BE(data.length);
  const checksum = Buffer.alloc(4);
  checksum.writeUInt32BE(crc32(Buffer.concat([typeBytes, data])));
  return Buffer.concat([length, typeBytes, data, checksum]);
}

function png(size) {
  const px = Buffer.alloc(size * size * 4);
  const set = (x, y, color) => {
    if (x < 0 || y < 0 || x >= size || y >= size) return;
    color.copy(px, (y * size + x) * 4);
  };
  const fill = Buffer.from(navy);
  for (let y = 0; y < size; y += 1) for (let x = 0; x < size; x += 1) set(x, y, fill);
  const radius = Math.max(2, Math.round(size * 0.18));
  for (let y = 0; y < size; y += 1) for (let x = 0; x < size; x += 1) {
    const cornerX = x < radius ? radius - x : x >= size - radius ? x - (size - radius - 1) : 0;
    const cornerY = y < radius ? radius - y : y >= size - radius ? y - (size - radius - 1) : 0;
    if (cornerX && cornerY && cornerX * cornerX + cornerY * cornerY > radius * radius) set(x, y, Buffer.from([0, 0, 0, 0]));
  }
  const border = Math.max(1, Math.round(size / 32));
  const inset = Math.max(2, Math.round(size * 0.07));
  for (let y = inset; y < size - inset; y += 1) for (let x = inset; x < size - inset; x += 1) {
    if (x < inset + border || x >= size - inset - border || y < inset + border || y >= size - inset - border || y < inset + border && x < inset + border) set(x, y, Buffer.from(gold));
  }
  const cell = Math.max(1, Math.floor(size / 15));
  const width = 11 * cell;
  const height = 7 * cell;
  const startX = Math.floor((size - width) / 2);
  const startY = Math.floor((size - height) / 2);
  ['A', 'C'].forEach((letter, letterIndex) => glyphs[letter].forEach((row, rowIndex) => [...row].forEach((on, columnIndex) => {
    if (on === '1') for (let dy = 0; dy < cell; dy += 1) for (let dx = 0; dx < cell; dx += 1) set(startX + (letterIndex * 6 + columnIndex) * cell + dx, startY + rowIndex * cell + dy, Buffer.from(ivory));
  })));
  const raw = Buffer.alloc((size * 4 + 1) * size);
  for (let y = 0; y < size; y += 1) {
    raw[y * (size * 4 + 1)] = 0;
    px.copy(raw, y * (size * 4 + 1) + 1, y * size * 4, (y + 1) * size * 4);
  }
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(size, 0); ihdr.writeUInt32BE(size, 4); ihdr[8] = 8; ihdr[9] = 6;
  return Buffer.concat([Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]), chunk('IHDR', ihdr), chunk('IDAT', deflateSync(raw)), chunk('IEND', Buffer.alloc(0))]);
}

const files = new Map([[16, 'favicon-16.png'], [32, 'favicon-32.png'], [48, 'favicon-48.png'], [180, 'apple-touch-icon.png'], [192, 'favicon-192.png'], [512, 'favicon-512.png']]);
const data = new Map();
for (const [size, name] of files) { const image = png(size); data.set(size, image); writeFileSync(join(out, name), image); }
const icoImages = [16, 32].map((size) => data.get(size));
const header = Buffer.alloc(6); header.writeUInt16LE(0, 0); header.writeUInt16LE(1, 2); header.writeUInt16LE(icoImages.length, 4);
let offset = 6 + icoImages.length * 16;
const entries = icoImages.map((image, index) => { const size = [16, 32][index]; const entry = Buffer.alloc(16); entry[0] = size; entry[1] = size; entry[2] = 0; entry[3] = 0; entry.writeUInt16LE(1, 4); entry.writeUInt16LE(32, 6); entry.writeUInt32LE(image.length, 8); entry.writeUInt32LE(offset, 12); offset += image.length; return entry; });
writeFileSync(join(out, 'favicon.ico'), Buffer.concat([header, ...entries, ...icoImages]));
