const os = require("os")

console.log("Free memory", os.freemem() /1024/1024/1024);
console.log("Total memory", os.totalmem()/1024/1024/1024);
console.log("version",os.version());
console.log("Platform",os.platform());
console.log("Arch",os.arch());
console.log("cpus",os.cpus());
console.log("Type",os.type());
console.log("release",os.release());
console.log("Cores", os.cpus().length)