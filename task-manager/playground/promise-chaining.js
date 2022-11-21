require('../src/db/mongoose.js')
const User = require("../src/models /user")

// const age = 23;
// User.find({})
// .then((data)=>{
//   console.log(data)
// }).catch((e)=>{
//   console.log(e)
// })

User.findByIdAndUpdate("635282ca4bc7563af1bbac4b", {age:25})
.then((user)=>{
  console.log(user)
  return User.countDocuments({age:25})
}).then((result) =>{
  console.log(result)
}).catch((e)=>{
  console.log(e)
})
