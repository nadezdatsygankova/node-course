
const forecast = require('./utils/forecast');

const command = process.argv[2];
if(!command){
  console.log("Please provide address")
}else{
  forecast(command, (error, data) =>{
    if(error){
      return console.log(error);
    }
     console.log(data);
  })

}



