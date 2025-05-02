//readSync.js
const fs = require("fs");
//동기,블로킹 함수
var text=fs.readFileSync("c:/Temp/datas.txt","utf-8");
console.log(text);
console.log("the end");