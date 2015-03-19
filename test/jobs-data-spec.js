var expect = require('chai').expect;
var mongoose = require('mongoose');
var jobModel = require('../models/Job');
var Promise = require('bluebird');

function resetJobs(){
	return new Promise(function(resolve,reject){
		mongoose.connection.collections['jobs'].drop(resolve,reject);
	});
	//mongoose.connection.collection['jobs'].drop(callback);
	//mongoose.connection.collections['jobs'].drop( function(callback) {
	//    console.log('collection dropped');
	//});
}

var connectDB = Promise.promisify(mongoose.connect, mongoose);

function findJobs(query){
	return Promise.cast(mongoose.model('Job').find(query).exec());
}

describe("get jobs", function(){
	it("should never be empty since jobs are seeded", function(done){
		connectDB('mongodb://localhost/jobfinder')
			.then(resetJobs)
			.then(jobModel.seedJobs)
			.then(findJobs)
			.then(function(jobsList){
				//jobModel.seedJobs(function(){
				//mongoose.model('Job').find({}).exec(function(error,jobsList){
				expect(jobsList.length).to.be.at.least(1);
					//if (error) throw error; 
					//setTimeout(done, 5000);
				done();
				//});
				//});
			});
		//jobsList = [];
	});
});