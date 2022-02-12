const { MongoClient } = require("mongodb");
const Db = process.env.MONGODB_ADDON_URI;
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
 
var _db;
 
module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      // Verify we got a good "db" object
      if (db)
      {
        //_db = db.db("bcgygtzxy3oqpm3");
		_db = db.db("btncgfi3a5bxyea");
        console.log("Successfully connected to MongoDB.", _db.namespace); 
      }
      return callback(err);
         });
  },
 
  getDb: function () {
    return _db;
  },
};