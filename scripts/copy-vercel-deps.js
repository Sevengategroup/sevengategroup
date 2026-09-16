import fs from 'fs';
import path from 'path';

const depsToCopy = [
  'tslib',
  '@prisma',
  '.prisma'
];

const destBase = '.vercel/output/functions/__server.func/node_modules';

if (!fs.existsSync(destBase)) {
  fs.mkdirSync(destBase, { recursive: true });
}

depsToCopy.forEach(dep => {
  const src = path.join('node_modules', dep);
  const dest = path.join(destBase, dep);
  
  if (fs.existsSync(src)) {
    console.log(`Copying ${dep} to Vercel output...`);
    fs.cpSync(src, dest, { recursive: true, force: true });
  } else {
    console.warn(`Dependency ${dep} not found in node_modules!`);
  }
});
