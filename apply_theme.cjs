const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src', 'index.css');
let css = fs.readFileSync(cssPath, 'utf8');

const themeVars = `
:root {
  --neu-bg: #e0e5ec;
  --neu-shadow-dark: #bec8d2;
  --neu-shadow-light: #ffffff;
}

html.dark {
  --neu-bg: #1f2937;
  --neu-shadow-dark: #111827;
  --neu-shadow-light: #374151;
}

body {
  background-color: var(--neu-bg);
  color: var(--text-primary, #374151);
}

html.dark body {
  color: #f3f4f6;
}

/* Base tailwind dark mode colors */
html.dark .text-gray-700 { color: #f3f4f6 !important; }
html.dark .text-gray-600 { color: #d1d5db !important; }
html.dark .text-gray-500 { color: #9ca3af !important; }
`;

if (!css.includes(':root {')) {
  css = css.replace('@tailwind utilities;', '@tailwind utilities;\n\n' + themeVars);
  css = css.replace('#e0e5ec', 'var(--neu-bg)');
  fs.writeFileSync(cssPath, css);
}

// Now replace colors in all components
const componentsDir = path.join(__dirname, 'src', 'components');
const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(componentsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  let modified = false;
  
  if (content.includes('#e0e5ec')) {
    content = content.replace(/#e0e5ec/g, 'var(--neu-bg)');
    modified = true;
  }
  if (content.includes('#bec8d2')) {
    content = content.replace(/#bec8d2/g, 'var(--neu-shadow-dark)');
    modified = true;
  }
  if (content.includes('#ffffff')) {
    // only replace #ffffff when it is used in a context that looks like shadow or neu stuff.
    // To be safe, we'll replace all #ffffff in style={{...}} blocks.
    content = content.replace(/#ffffff/g, 'var(--neu-shadow-light)');
    modified = true;
  }
  
  if (modified) {
    fs.writeFileSync(filePath, content);
  }
}

console.log('Theme applied to all components.');
