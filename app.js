const express = require('express');
const app = express();

const session = require('express-session');
const dotenv = require('dotenv');
dotenv.config();

const middlewares = require('./middlewares');
const routes = require('./routes');

middlewares.setupAPP(app);
routes.setup(app);
//-

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));


app.use(session({
    secret: process.env.PALABRA_SECRETA || 'secretoSuperSecreto',
    resave: false,
    saveUninitialized: true,
  }));
//-


const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
