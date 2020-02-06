var fs = require('fs');

function finishprogram(err,data){
	console.log(data.toString());
	console.log("finish re-reading file");
}

function rereading(err){
	if(err) return err;
	console.log("Finish appending file!");
	console.log("Begin re-reading file!");
	fs.readFile("input.txt",finishprogram)
}

function appendFile(err,data){
	if(err) return err;
	console.log(data.toString());
	console.log("Finish reading File")
	console.log("Begin appendFile")
	console.log("Finish reading File")
	console.log("Begin appendFile")
	fs.appendFile("input.txt","I am appending something", rereading);
		if(err) return err;

	}


console.log("Begin reading File")
fs.readFile("input.txt",appendFile)