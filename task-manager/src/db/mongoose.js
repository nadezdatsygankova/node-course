const mongoose = require('mongoose');


// create new db and connect it
mongoose.connect('mongodb://127.0.0.1:27017/task-manage-api',
  (err) => {
    if (err) console.log(err)
    else console.log("mongdb is connected");
  });





