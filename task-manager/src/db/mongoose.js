const mongoose = require('mongoose');

// create new db and connect it
mongoose.connect('mongodb://127.0.0.1:27017/task-manage-api',
  (err) => {
    if (err) console.log(err)
    else console.log("mongdb is connected");
  });

//create a model
const User = mongoose.model('User', {
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number
  }
})

//create a instance
const me = new User({

})

//save it in db
me.save().then(() => {
  console.log(me)
}).catch((error) => {
  console.log("error", error)
})


const Task = mongoose.model('Task', {
  description: {
    type: String
  },
  completed: {
    type: Boolean
  }
});

// const task = new Task(
//   {
//     description: 'Learn the Mongoose library',
//     completed: false
//   }
// );

// task.save()
// .then(()=>{
//   console.log(task)
// })
// .catch((error)=>{
//   console.log(error)
// })