const fs = require('fs');

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync('1-json.json', bookJSON);

// console.log(bookJSON);
// const parsedData = JSON.parse(bookJSON);
// console.log(parsedData.author);

// const dataBuffer = fs.readFileSync('1-json.json'); //read a file
// const dataJSON = dataBuffer.toString(); //convert to string
// const data = JSON.parse(dataJSON);//parse to object
// console.log(data.author);

const dataBuffer = fs.readFileSync('1-json.json');//read a file
const data = dataBuffer.toString();//convert to string
const dataObj = JSON.parse(data);//go to object
//change to object
dataObj.name = "Nadia";
dataObj.age = 38;
//convert to JSON
const dataObjJSON = JSON.stringify(dataObj);

//overwrite to the file with new data
fs.writeFileSync('1-json.json', dataObjJSON);


