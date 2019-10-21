const spinner = ['|', '/', '-', '\\'];

let timeout = 0;
let numLoops = 100;
for (let i = 0; i < spinner.length * numLoops; i++) {
  setTimeout(() => {
    process.stdout.write(`\r${spinner[i % spinner.length]}    `);
  }, timeout);
  timeout += 200;
}
