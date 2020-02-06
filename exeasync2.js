	var fs = require('fs')

console.log("Begin reading file");
fs.readFile("message.txt",function(err,data){
	if(err) return err;
	console.log(data.toString());
	console.log("Finish reading file");
	console.log("Begin appending File...");
	fs.appendFile("message.txt","I am appending something", (err)=>{
		if(err) return err;
		console.log("Finish appending file");
		console.log("Begin re-reading file");
		fs.readFile("message.txt",(err,data2) =>{
			if(err) return err;
			console.log(data2.toString());
			console.log("Finish re-reading file")
		})
	})
})