#!/usr/bin/env node

const gotwit = require('./index.js');
const args = process.argv.slice(2);

if (args[0] === '--color') {
    console.log(gotwit.randomColor());
}
else if (args[0] === '--password') {
    console.log(gotwit.randomPassword());
}
else if (args[0] === '--file') {
    gotwit.generateFile();
}
else if (args[0] === '--kyros') {
    console.log(`
🔥 Welcome to KYROS Guild 🛡️
Dungeon Level: 4
Lootbox: +30 Credits 💪
`);
}
else {
    console.log(`
Gotwit CLI - Daily Useful Operations for Web Developers

Commands:
  gotwit --color      🔥 Random HEX Color
  gotwit --password   🔑 Random Password
  gotwit --file       📄 Generate GOTWIT_REPORT.txt
  gotwit --kyros      🛡️ KYROS Guild Easter Egg

`);
}
