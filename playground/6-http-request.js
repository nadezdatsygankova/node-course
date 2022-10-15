const http = require('http');
const url = 'http://api.weatherstack.com/current?access_key=b56246cc0e78ebcb09a047f7606948a7&query=Toronto';


const request = http.request(url, (response)=>{
  let data ='';
  response.on('data', (chunk)=>{
    data = data + chunk.toString();
  })
  response.on('end', ()=>{
    const body = JSON.parse(data);
  })
  response.on('error', (error)=>{
    console.log(error)
  })

})

request.end();