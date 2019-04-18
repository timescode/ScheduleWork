#timescode v1.0
var callfile = require('child_process'); 
var schedule = require("node-schedule");  
var fs = require("fs");  

var rule1 = new schedule.RecurrenceRule();  
var times1    = [0,1,2,3,4,5];  
rule1.minute  = times1;  
schedule.scheduleJob(rule1, function(){  
	var curTime = new Date();
	callfile.execFile('./script.sh',[],null,function (err, stdout, stderr) {
    	fs.writeFile('./doc.log', 'log:'+curTime+":"+stdout+"\r\n",{'flag':'a'},function(err){
	   	 	if(err) console.log('Write Failed');
	   	 	else console.log('Write Log Success');
		});
	});
});


