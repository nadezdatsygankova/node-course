//CRUD
const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

const { MongoClient, ObjectID } = require('mongodb')

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log('Unable to connect to database!')
  }
  const db = client.db(databaseName);
// //updateOne
//   db.collection('users').updateOne({
//     _id: new ObjectID("634ba4453eb197d47f33cf06")
//   }, {
//     //increment
//     $inc: {
//       age: 1
//     }
//   }).then((result) => {
//     console.log(result)
//   }).catch((error) => {
//     console.log(error)
//   })

  // db.collection('tasks').updateMany({
  //   completed: false
  // }, {
  //   //update for this number
  //   $set: {
  //     completed: true
  //   }
  // }).then((result) => {
  //   console.log(result.modifiedCount)
  // }).catch((error) => { console.log(error) })


  // db.collection('users').deleteMany({
  //   age: 28
  //   }).then((result) => {
  //   console.log(result)
  //   }).catch((error) => {
  //   console.log(error)
  //   })

  // db.collection('tasks').deleteOne({
  //   description: "Clean the house"
  //   }).then((result) => {
  //   console.log(result)
  //   }).catch((error) => {
  //   console.log(error)
  //   })


})