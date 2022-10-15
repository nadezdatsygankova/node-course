const add = (num1, num2, callback) => {
  setTimeout(()=>{
    callback (num1 + num2);
  }, 2000)

}

add(4, 1 , (sum) =>{
  console.log(sum)
})

const geocode = (location, callback) =>{

setTimeout(()=>{
  const data = {
    name: 'apple',
    city: 'toronto'
}
  callback(data);
},2000)
}

geocode('NewYork', (data)=> {console.log(data)})