var fs = require('fs');
console.log("Begin Reading File");
var data = fs.readFileSync('message.txt');
console.log(data.toString());
console.log("End Reading File")
console.log("Begin Appending File");
var data = fs.appendFileSync('message.txt', 'append something');
console.log("End Appending File")
console.log("Begin Re-reading File");
var data2 = fs.readFileSync('message.txt');
console.log(data2.toString());
console.log("End Re-reading File");