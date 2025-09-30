const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.use(express.urlencoded({ extended: true })); 

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view')); 

const VeiculoRoute = require('./routes/VeiculoRoute'); 
app.use('/', VeiculoRoute);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});