require('../src/db/mongoose.js')
const Task = require("../src/models /task")

// Task.find({})
// .then((tasks)=>{
//   console.log(tasks)
// }).catch((e)=>{
//   console.log(e)
// })

// Task.findByIdAndDelete('63600aa40020a4c78991c45a')
// .then((tasks)=>{
//   console.log(tasks)
//   return Task.countDocuments({completed: false})
// }).then((result)=>{
//   console.log(result)
// })
// .catch((e)=>{
//   console.log(e)
// })

const deleteTaskAndCount = async (id)=>{
   const deleteTask = await Task.findByIdAndDelete(id);
   const countTaskIncomplete = await Task.countDocuments({completed: false})
   return countTaskIncomplete;
}

deleteTaskAndCount('63513a47e88668b97452107f')
.then((count)=>{
  console.log(count)
}).catch((e)=>{
  console.log(e)
})