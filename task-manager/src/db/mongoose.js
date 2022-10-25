const mongoose = require('mongoose');
const validator = require('validator');

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
    required: true,
    trim: true
  },
  email: {
    type: String,
    require: true,
    trim: true,
    lowercase:true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Email is invalid')
      }
    }
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error('Age must be a positive number')
      }
    }
  },
  password: {
    type: String,
    trim: true,
    minlength:7,
    validate(value) {
      if(value.toLowerCase().includes('password')){
        throw new Error('Password cannot contain "password"')
      }
    }
  }
})

//create an instance
const me = new User({
  name: '   Nadia',
  email: 'MYdEE@gmail.com   ',
  password: 'ssword'
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