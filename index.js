const chalk = require("chalk");

const Gotwit = {
  randomColor() {
    let color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    console.log(chalk.hex(color)(`Random Color: ${color}`));
    return color;
  },

  password(length = 10) {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$!";
    let pass = "";
    for (let i = 0; i < length; i++) {
      pass += chars[Math.floor(Math.random() * chars.length)];
    }
    console.log(chalk.green(`Generated Password: ${pass}`));
    return pass;
  },

  // File Generator Command
  file() {
    const fs = require("fs");
    const os = require("os");
    const quote = [
      "Code is like humor. When you have to explain it, it’s bad.",
      "Talk is cheap. Show me the code.",
      "First, solve the problem. Then, write the code."
    ];
    const randomQuote = quote[Math.floor(Math.random() * quote.length)];
    let report = `
==== GOTWIT SYSTEM REPORT ====
Platform: ${os.platform()}
CPU: ${os.cpus()[0].model}
Total Memory: ${os.totalmem() / 1024 / 1024} MB
Quote of the Day: "${randomQuote}"
Current Time: ${new Date().toLocaleString()}
=============================
`;

    fs.writeFileSync("GOTWIT_REPORT.txt", report);
    console.log(chalk.blue("✅ GOTWIT_REPORT.txt file generated"));
  }
};

module.exports = {
    randomColor: Gotwit.randomColor,
    randomPassword: Gotwit.password,
    generateFile: Gotwit.file
  };
  
