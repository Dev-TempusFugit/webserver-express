const express = require('express')
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');


const port = process.env.PORT || 3000;


app.use( express.static( __dirname + "/public" ));

//Express HBS Engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');


app.get('/', (req, res) => {
  res.render('home',{
    nombre: 'maxim',
  });
});

app.get('/about', (req, res) =>{
  res.render('about',{
    nombre: 'Maxim',
  });
});

// app.get('/data', (req, res) =>{
//   let persona = {
//       nombre: 'Maxim',
//       apellido: 'Nakonechnyy',
//       edad: 25
//   }  
//     res.send(persona);
// })
app.listen(port, () =>{
    console.log(`Escuchando peticiones en el puerto ${ port }`);
})