var express = require("express");
var mongoose = require("mongoose");
var jobModel = require("./models/job");
var jobsData = require("./jobs-data.js");
//var http = require('http');
//var httpServer = http.createServer(app);

var app = express();

app.set('views', __dirname);
app.set('view engine', 'jade');
//app.set('view engine', 'html');

app.use(express.static(__dirname + '/public'));

app.get('/api/jobs', function(req,res){
   //res.send('test'); 
   jobsData.findJobs().then(function(error, collection){
   	res.send(collection);
   })
});

app.get('*', function(req,res){
   res.render('index'); 
});

var MONGOHQ_URL = 'mongodb://tripstomp:shmikcom@ds031641.mongolab.com:31641/calmapit';


//mongoose.connect('mongodb://localhost/jobfinder');
//mongoose.connect(MONGOHQ_URL);

jobsData.connectDB(MONGOHQ_URL)
.then(function(){
	console.log('connect to mongodb');
	jobModel.seedJobs();
});


//app.listen(process.env.PORT, process.env.IP);
app.listen(3333);
