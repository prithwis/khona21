const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

const kollection = "khona21Test5"
const dbName = "bcgygtzxy3oqpm3"

// This section will help you get a list of all the records.
recordRoutes.route("/allrecords").get(function (req, res) {
  proj = {"_id":0,"pid.name":1,"pid.cID":1};
  kwery = {};
  let db_connect = dbo.getDb(dbName);
  db_connect
    .collection(kollection)
    .find(kwery)
	.project(proj)   
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});


// This section will help you get a single record by name
recordRoutes.route("/record/:cID").get(function (req, res) {
  let myOptions = {projection :{"_id":0,"pid.name":1,"pid.cID":1,"pid.ck" :1}};
  let db_connect = dbo.getDb();
  let myquery = { "pid.cID": req.params.cID };
  db_connect
      .collection(kollection)
      .findOne(myquery, myOptions, function (err, result) {
        if (err) throw err;
        res.json(result);
      });
});

recordRoutes.route("/CPositions/:cID").get(function (req, res) {
  //let myOptions = {projection :{"_id":0,"GLon.Su":1,"GLon.Mo":1,"GLon.La" :1}};
  let myOptions = {projection :{"_id":0,"GLon":1,"GRet":1}};
  let db_connect = dbo.getDb();
  let myquery = { "pid.cID": req.params.cID };
  db_connect
      .collection(kollection)
      .findOne(myquery, myOptions, function (err, result) {
        if (err) throw err;
        res.json(result);
      });
});

/********************************************************************

recordRoutes.route("/record1/:name").get(function (req, res) {
  proj = {"_id":0,"pid.name":1,"pid.cID":1,"pid.ck" :1};
  kwery = { "pid.name": req.params.name };
  //kwery = {};
  let db_connect = dbo.getDb("bcgygtzxy3oqpm3");
  db_connect
    .collection("khona21Test5")
    .find(kwery)
	.project(proj)   
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

recordRoutes.route("/record2/:name").get(function (req, res) {
  proj = {"_id":0,"GLon.Su":1,"GLon.Mo":1,"GLon.La" :1};
  kwery = { "pid.name": req.params.name };
  //kwery = {};
  let db_connect = dbo.getDb("bcgygtzxy3oqpm3");
  db_connect
    .collection("khona21Test5")
    .find(kwery)
	.project(proj)   
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

*********************************************************************/


module.exports = recordRoutes;