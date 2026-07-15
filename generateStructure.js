const fs = require('fs');
const path = require('path');

const IGNORE_DIRS = ['node_modules', '.git', '.next', '.vscode'];

function getTopic(filePath, isDir) {
  const p = filePath.toLowerCase().replace(/\\/g, '/');
  
  if (p.includes('/prisma') || p.includes('/models') || p.includes('/repositories') || p.includes('/lib')) {
    return 'Day 06: Database & Prisma';
  }
  if (p.includes('/app/api')) return 'Day 05: API Routes';
  if (p.includes('/components')) return 'Day 03: Components';
  if (p.includes('/auth') || p.includes('middleware')) return 'Day 07/09: Auth & Security';
  if (p.includes('/app/admin')) return 'Day 07: Auth & RBAC';
  if (p.includes('/caching')) return 'Day 11: Caching';
  if (p.includes('/app/(users)/blog') || p.includes('/app/(users)/products')) return 'Day 01-02: Routing';
  if (p.includes('layout') || p.includes('page')) return 'Day 01-02: App Router Basics';
  if (p.includes('next.config') || p.includes('package')) return 'Project Config';
  
  return 'Project File';
}

function buildTree(dirPath) {
  const stats = fs.statSync(dirPath);
  if (!stats.isDirectory()) {
    return null;
  }

  const items = fs.readdirSync(dirPath);
  const result = {
    folder: path.basename(dirPath) + '/',
    topic: getTopic(dirPath, true),
    files: [],
    subfolders: []
  };

  for (const item of items) {
    if (IGNORE_DIRS.includes(item)) continue;

    const itemPath = path.join(dirPath, item);
    const itemStats = fs.statSync(itemPath);

    if (itemStats.isDirectory()) {
      const subTree = buildTree(itemPath);
      if (subTree && (subTree.files.length > 0 || subTree.subfolders.length > 0)) {
        result.subfolders.push(subTree);
      }
    } else {
      result.files.push({ name: item, topic: getTopic(itemPath, false) });
    }
  }

  return result;
}

const rootDir = __dirname;
const tree = buildTree(rootDir);

// Override the root folder name to be just root
tree.folder = 'Root /';
tree.topic = 'Next.js Project Root';

const fileContent = `export const projectStructure = [
  ${JSON.stringify(tree, null, 2)}
];
`;

fs.writeFileSync(path.join(__dirname, 'app', 'projectStructureData.js'), fileContent);
console.log("Successfully generated app/projectStructureData.js");
