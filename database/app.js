/** 
 * Source:
 * https://mongodb.github.io/node-mongodb-native/3.5/quick-start/quick-start/
 */



 /** Connect to MongoDB */

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb+srv://uMusicArchive:gsEmKfVxJ96zH0jW@lidiocluster0-dwklw.mongodb.net/test?retryWrites=true&w=majority';

// Database Name
const dbName = 'musicarchive';

// Create a new MongoClient
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

// Use connect method to connect to the Server
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  // client.close();
  findDocuments(db, function() { client.close(); })

});


/** Find All Documents */

const findDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('oasis');
  // Find some documents
  collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs)
    callback(docs);
  });
}

/** A estrutura utilizada é de callbacks, mas existem melhores formas de 
 * se fazer esses chamados. Aqui apenas copiamos e testamos os exemplos 
 * citados no link acima.
 * 
 * Procurar formas mais inteligentes de fazer isso, com async/await, p.e.
 * https://stackoverflow.com/questions/47370487/node-js-mongodb-driver-async-await-queries/51175634
 * 
 * 
 */
