const os = require('os');

console.log("Operating System Platform:", os.platform());
console.log("CPU Architecture:", os.arch());
console.log("Total Memory:", os.totalmem(), "bytes");
console.log("Free Memory:", os.freemem(), "bytes");
console.log("System Uptime:", os.uptime(), "seconds");
console.log("Home Directory:", os.homedir());
console.log("Temporary Directory:", os.tmpdir());
console.log("CPU Information:", os.cpus());
const arr = os.cpus();
arr.forEach((cpu, index) => {
    console.log(`CPU ${index}: Model: ${cpu.model}, Speed: ${cpu.speed} MHz`);
});
console.log("Network Interfaces:", os.networkInterfaces());
console.log("Hostname:", os.hostname());