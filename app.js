const express = require('express')
const hbs = require('hbs');
require('dotenv').config();

const app = express()
const port = process.env.PORT;


//HANDLEBARS
hbs.registerPartials(__dirname + '/views/partials', function (err) {});
app.set('view engine', 'hbs');

//Servir contenido estatico
app.use(express.static('templated-roadtrip'));

app.get('/', (req, res) => {
  res.render('home',{
    nombre:'Eric Guzman',
    titulo:'Curso de Node'
  });
})
app.get('/generic', (req, res) => {
  res.render('generic',{
    nombre:'Eric Guzman',
    titulo:'Curso de Node'
  });
})
app.get('/elements', (req, res) => {
  res.render('elements',{
    nombre:'Eric Guzman',
    titulo:'Curso de Node'
  });
})

// app.get('/generic', (req, res) => {
//     res.sendFile(__dirname +'/templated-roadtrip/generic.html')
//   })
//   app.get('/elements', (req, res) => {
//     res.sendFile(__dirname +'/templated-roadtrip/elements.html')
//   })

//   app.get('*', (req, res) => {
//     res.sendFile(__dirname + '/public/404.html')
//   })

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })