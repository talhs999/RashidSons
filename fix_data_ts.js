const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'lib', 'data.ts');
let content = fs.readFileSync(dataPath, 'utf8');

content = content.replace(/\/uploads\/products\/yokohama-[^"]+/g, '/images/tires/advan-fleva.png');
content = content.replace(/\/uploads\/products\/goodyear-[^"]+/g, '/images/tires/goodyear-1.png');
content = content.replace(/\/uploads\/products\/warrior-[^"]+/g, '/images/tires/warrior-1.png');
content = content.replace(/\/uploads\/products\/michelin-[^"]+/g, '/images/tires/advan-apex.png');
content = content.replace(/\/uploads\/products\/blackarrow-[^"]+/g, '/images/tires/advan-apex.png');

fs.writeFileSync(dataPath, content, 'utf8');
console.log('Fixed lib/data.ts');
