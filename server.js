const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

// Express HBS engine
hbs.registerPartials(__dirname + '/views//parciales');
app.set('view engine', 'hbs');

// helpers


app.get('/',(req,res)=>{  
  res.render('home.hbs',{
    nombre: 'sigma syd'
  });
});

app.get('/about',(req,res)=>{  
  res.render('about.hbs');
});

app.listen(port,()=>{
  console.log(`Escuchando peticiones en el puerto ${port}`);
});