const express = require('express');
const path = require('path');
const hbs = require('hbs');//for partials

// console.log(__dirname); //src
// console.log(__filename); //src/app.js
const app = express()
//Define paths for Express config
const publicDirectoryPath = (path.join(__dirname, '../public'))
//tell name for directory for all views(templates)
const viewsPath = path.join(__dirname, '../templates/views')
//for partial
const partialsPath = path.join(__dirname, '../templates/partials');

//Setup handlebars engine and views location
app.set('view engine', 'hbs')
//tell express where find a views
app.set('views', viewsPath)
//for partial
hbs.registerPartials(partialsPath);

//Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Weather App',
    name: 'Nadia Tsygankova'
  })
})

app.get('/help', (req, res) => {
  res.render('help', {
    helpText: 'This is a help page',
    title: 'Help',
    name: 'Nadia Tsy'
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
app.get('/help/*', (req, res) =>{
  res.render('404', {
    title: '404',
    name: 'Nadia Tsygankova',
    errorMessage: 'Help article not found.'
    })
})


//for all others
app.get('*', (req,res)=>{
  res.render('404', {
    title: '404',
    name: 'Nadia Tsygankova',
    errorMessage: 'Page not found.'
    })
})
app.listen(3000, () => {
  console.log('server is up on port 3000')
})