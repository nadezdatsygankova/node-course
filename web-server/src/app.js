const express = require('express');
const path = require('path');
// console.log(__dirname); //src
// console.log(__filename); //src/app.js
const app = express()
const publicDirectoryPath = (path.join(__dirname, '../public'))


app.use(express.static(publicDirectoryPath))
app.set('view engine', 'hbs')

// app.get('/', (req, res) => {
//   res.send('<h1>Weather</h1>')
// })

// app.get('/help', (req, res) => {
//   res.send([{
//     name: 'Andrew',
//     age: 27
//   }, {
//     name: 'Katy',
//     age: 76
//   }
//   ])
// })
// app.get('/about', (req, res) => {
//   res.send('<h1>About</h1>')
// })
// app.get('/weather', (req, res) => {
//   res.send({
//     forecast: 'It is snowing',
//     location: 'Philadelphia'
//   })
// })

app.listen(3000, () => {
  console.log('server is up on port 3000')
})