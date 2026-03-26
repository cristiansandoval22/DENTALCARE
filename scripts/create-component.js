import fs from 'fs';
import path from 'path';

const name = process.argv[2];

if (!name) {
  console.log('❌ Debes pasar un nombre: npm run component Hero');
  process.exit(1);
}

const componentDir = `src/components/${name}`;

if (fs.existsSync(componentDir)) {
  console.log('❌ El componente ya existe');
  process.exit(1);
}

// Crear carpeta
fs.mkdirSync(componentDir, { recursive: true });

// Crear archivos
fs.writeFileSync(
  path.join(componentDir, `${name}.astro`),
`---
import './${name}.css'
---

<div class="${name.toLowerCase()}">
  ${name} component
</div>
`
);

fs.writeFileSync(
  path.join(componentDir, `${name}.css`),
`.${name.toLowerCase()} {
  
}
`
);

fs.writeFileSync(
  path.join(componentDir, `${name}.js`),
`// lógica JS para ${name}
`
);

console.log(`✅ Componente ${name} creado correctamente`);