const fs = require('fs');
const path = require('path');

const IGNORE_DIRS = ['node_modules', '.git', '.next', '.vscode'];

function generateTree(dirPath, prefix = '') {
  let output = '';
  const stats = fs.statSync(dirPath);
  if (!stats.isDirectory()) return output;

  const items = fs.readdirSync(dirPath).filter(item => !IGNORE_DIRS.includes(item));
  
  items.forEach((item, index) => {
    const itemPath = path.join(dirPath, item);
    const itemStats = fs.statSync(itemPath);
    const isLast = index === items.length - 1;
    
    const connector = isLast ? '└── ' : '├── ';
    
    if (itemStats.isDirectory()) {
      output += prefix + connector + item + '/\n';
      const newPrefix = prefix + (isLast ? '    ' : '│   ');
      output += generateTree(itemPath, newPrefix);
    } else {
      output += prefix + connector + item + '\n';
    }
  });

  return output;
}

const treeString = 'nextjs_app/\n│\n' + generateTree(__dirname);
fs.writeFileSync('tree.txt', treeString);
console.log('Tree generated.');
