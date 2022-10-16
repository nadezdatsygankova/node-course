//CRUD

const { MongoClient, ObjectID } = require('mongodb')
const id = new ObjectID();//new id
console.log(id);
console.log(id.getTimestamp());

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log('Unable to connect to database!')
  }
  const db = client.db(databaseName)
  // Start to interact with the database
  db.collection('users').insertOne({
    _id:id,
    name: 'Vic',
    age: 27
  }, (error, result) => {
    if (error) {
      return console.log('Unable to insert user!')
    }
    console.log(result)
  })

  // db.collection('tasks').insertMany([
  //   {
  //     description: 'Clean the house',
  //     completed: true
  //   }, {
  //     description: 'Renew inspection',
  //     completed: false
  //   }
  // ], (error, result) => {
  //   if (error) {
  //     return console.log('Unable to insert tasks!')
  //   }
  //   console.log(result)
  // })
})