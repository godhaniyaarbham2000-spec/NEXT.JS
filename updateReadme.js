const fs = require('fs');

const readmePath = 'README.md';
const treePath = 'tree.txt';

const treeContent = fs.readFileSync(treePath, 'utf8');
let readmeContent = fs.readFileSync(readmePath, 'utf8');

const startMarker = '## 📂 Project Structure\n```text\n';
const endMarker = '\n```\n\n---';

const startIndex = readmeContent.indexOf(startMarker);
const endIndex = readmeContent.indexOf(endMarker, startIndex);

if (startIndex !== -1 && endIndex !== -1) {
  const before = readmeContent.slice(0, startIndex + startMarker.length);
  const after = readmeContent.slice(endIndex);
  
  const newReadme = before + treeContent.trim() + after;
  fs.writeFileSync(readmePath, newReadme);
  console.log('README updated successfully with the full tree.');
} else {
  console.log('Markers not found.');
}
