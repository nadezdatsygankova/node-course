//CRUD
const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

const { MongoClient, ObjectID } = require('mongodb')





MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log('Unable to connect to database!')
  }
  const db = client.db(databaseName);
  db.collection('users').findOne({ _id: new ObjectID("634ba4453eb197d47f33cf06") }, (error, task) => {
    if (error) {
      return console.log('Unable to fetch')
    }
    console.log(task)
  })


  db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
    console.log(tasks)
  })

  db.collection('tasks').find({ completed: false }).count((error, count) => {
    console.log(count)
  })


  //   db.collection('tasks').findOne({ _id: new
  //     ObjectID("5c0fec243ef6bdfbe1d62e2f") }, (error, task) => {
  //     console.log(task)
  //     })

})