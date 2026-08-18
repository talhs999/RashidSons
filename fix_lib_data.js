const fs = require('fs');
const path = require('path');

const dataTsPath = path.join(__dirname, 'lib', 'data.ts');
let content = fs.readFileSync(dataTsPath, 'utf8');

const regex = /name:\s*"DHA Branch",\r?\n\];/;

const replacement = `name: "DHA Branch",
    address: "Kamahan Lidher Road, DHA Lahore",
    phone: "+92 42 35721001",
    city: "Lahore",
    sort_order: 4,
  },
  {
    id: 5,
    name: "Malir Karachi Branch",
    address: "Askari PSO Pump, Malir Karachi Cantt",
    phone: "+92 21 34502001",
    city: "Karachi",
    sort_order: 5,
  },
  {
    id: 6,
    name: "Badami Bagh Branch",
    address: "313 Circular Road, Badami Bagh Lahore",
    phone: "+92 42 37712001",
    city: "Lahore",
    sort_order: 6,
  }
];`;

content = content.replace(regex, replacement);
fs.writeFileSync(dataTsPath, content, 'utf8');
console.log('Fixed lib/data.ts successfully!');
