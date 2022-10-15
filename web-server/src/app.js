const express = require('express');
const path = require('path');
// console.log(__dirname); //src
// console.log(__filename); //src/app.js
const app = express()
const publicDirectoryPath = (path.join(__dirname, '../public'))


app.use(express.static(publicDirectoryPath))
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Weather App',
    name: 'Nadia Tsygankova'
    })
})

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help',
    name: 'Nadia Tsygankova'
    })
})
app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About me',
    name: 'Nadia Tsygankova'
    })
})
// app.get('/weather', (req, res) => {
//   res.send({
//     forecast: 'It is snowing',
//     location: 'Philadelphia'
//   })
// })

app.listen(3000, () => {
  console.log('server is up on port 3000')
})