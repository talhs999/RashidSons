import re

file_path = r"c:\Users\dell\OneDrive\Desktop\rashid&sons\lib\data.ts"

with open(file_path, "r", encoding="utf-8") as f:
    text = f.read()

pattern = r'id:\s*4,\s*name:\s*"DHA Branch",\s*\];'
replacement = """id: 4,
    name: "DHA Branch",
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
];"""

new_text = re.sub(pattern, replacement, text)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(new_text)

print("Fixed lib/data.ts!")
