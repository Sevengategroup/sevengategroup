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

// Vercel attempts to run npm install if it sees dependencies in the function's package.json.
// This overwrites our manually copied, fully-generated Prisma client.
// We strip the dependencies so Vercel uses our copied node_modules as-is.
const funcPackageJsonPath = path.join(destBase, '..', 'package.json');
if (fs.existsSync(funcPackageJsonPath)) {
  const pkg = JSON.parse(fs.readFileSync(funcPackageJsonPath, 'utf8'));
  if (pkg.dependencies) {
    console.log('Stripping dependencies from function package.json to prevent Vercel npm install...');
    delete pkg.dependencies;
    fs.writeFileSync(funcPackageJsonPath, JSON.stringify(pkg, null, 2));
  }
}
