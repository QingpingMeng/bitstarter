var express = require('express')
var app = express();

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
	var fs=require('fs');
	fs.readFile('./index.html',function(err,data){
		if(err) throw err;
		var buf=new Buffer(data);
		response.send(buf.toString('utf-8'));
	})
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
