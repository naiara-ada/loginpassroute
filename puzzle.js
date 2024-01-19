// Snippets de código para poder componer el programa

//Usado?: yes
 // const middlewares = require('./middlewares');
//--- Explicación: 
  //  importar en una variable las fucnciones de la pagina
// -------------------------------------------------------------------------------------

//Usado?: yes
// const bodyParser = require('body-parser');
//--- Explicación:
// para poder usar la libreria en datos de formulario
// -------------------------------------------------------------------------------------

//Usado?: 
//const session = require('express-session');
//--- Explicación:
//para manejar sesiones
// -------------------------------------------------------------------------------------

//Usado?:si 
//const express = require('express');
//--- Explicación:
  //para poder usar los metodos express
// -------------------------------------------------------------------------------------

//Usado?: 
//const bodyParser = require('body-parser');
//--- Explicación:
// para poder usar la libreria en datos de formulario
// -------------------------------------------------------------------------------------

//Usado?: 
// const session = require('express-session');
//--- Explicación:
 // para manejar sesiones
// -------------------------------------------------------------------------------------

//Usado?: 
//const dotenv = require('dotenv');
//--- Explicación:
//para manejar variables de entorno
// -------------------------------------------------------------------------------------

//Usado?: 
//const middlewares = require('./middlewares');
//--- Explicación:
 //  importar en una variable las fucnciones de la pagina
// -------------------------------------------------------------------------------------

//Usado?: 
//const routes = require('./routes');
//--- Explicación:
 //  importar en una variable las fucnciones de la pagina
// -------------------------------------------------------------------------------------

//Usado?: 
// dotenv.config();
//--- Explicación:
////para manejar variables de entorno
// -------------------------------------------------------------------------------------

//Usado?: yes
//const app = express();
//--- Explicación:
  //metemos en una variable para poder usar los metodos del expres.
// -------------------------------------------------------------------------------------

//Usado?: 
//const PORT = 4000;
//--- Explicación:
  // creamos una constante para abrir el puerto con el n1 4000
// -------------------------------------------------------------------------------------

//Usado?: 
// const dotenv = require('dotenv');
//--- Explicación:
//para manejar variables de entorno
// -------------------------------------------------------------------------------------

//Usado?:
// dotenv.config();
//--- Explicación:
//para manejar variables de entorno
// -------------------------------------------------------------------------------------

//Usado?:
// middlewares.setupApp(app);
//--- Explicación: 
// se usa la función especificada del middleware.
// -------------------------------------------------------------------------------------

//Usado?:
// routes.setup(app);
//--- Explicación: 
// se usa la función especificada del middleware.
// -------------------------------------------------------------------------------------

//Usado?:
// const validarPalabraMiddleware = (req, res, next) => {
//   const palabraCorrecta = process.env.PALABRA_SECRETA || '';

//   if (req.body.palabra === palabraCorrecta) {
//     req.session.palabraSecreta = req.body.palabra;
//     next();
//   } else {
//     res.redirect('/?error=1');
//   }
// };
//--- Explicación: 
//funcion para validar la palabra secreta

// -------------------------------------------------------------------------------------

/*
//Usado?:yes
// const setup = (app) => {
//   app.get('/', (req, res) => {
//     const mensajeError = req.query.error
//       ? (req.query.error === '1' ? 'Palabra incorrecta, inténtalo de nuevo.' : 'No estás logado.')
//       : '';
//     if (req.session.palabraSecreta) {
//       return res.redirect('/profile');
//     }
//   //Aquí va código dentro
// })}
//--- Explicación: 
  funcion que inicializa la ruta raiz.

// -------------------------------------------------------------------------------------


//Usado?: yes
res.send(`
  <html>
    <body>
      <h1>Página de Inicio</h1>
      <p>${mensajeError}</p>
      <form method="post" action="/profile">
        <label for="palabra">Introduce la palabra:</label>
        <input type="text" name="palabra" required>
        <button type="submit">Enviar</button>
      </form>
    </body>
  </html>
`);
//--- Explicación: 
parte de codigo que lleva la pagina principal
*/
// -------------------------------------------------------------------------------------

/*
const setupAPP = (app) => {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(session({
    secret: 'secretoSuperSecreto',
    resave: false,
    saveUninitialized: true,
  }));
};
función que compara la palabra secreta

//Usado?:
app.post('/profile', middlewares.validarPalabraMiddleware, (req, res) => {
  res.send(`
    <h1>Ruta del Perfil</h1>
    <form method="post" action="/logout">
      <button type="submit">Log Out</button>
    </form>
  `);
});
//--- Explicación: 
  la vuelta de la ruta profile
*/
// -------------------------------------------------------------------------------------

//Usado?:
// app.use(bodyParser.urlencoded({ extended: true }));

//--- Explicación: 
// para usar los datos del formulario
// -------------------------------------------------------------------------------------

//Usado?:
// app.use(session({
//   secret: process.env.PALABRA_SECRETA || 'secretoSuperSecreto',
//   resave: false,
//   saveUninitialized: true,
// }));

//--- Explicación: 
//arranca la sesion
// -------------------------------------------------------------------------------------
/*
//Usado?:yes
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
//--- Explicación:
  poner el puerto en escucha
 
// -------------------------------------------------------------------------------------

//Usado?:
const verificarSesionMiddleware = (req, res, next) => {
  if (req.session.palabraSecreta) {
    next();
  } else {
    res.redirect('/?error=2');
  }
};
//--- Explicación: 
  funcion para verificar la función.
// -------------------------------------------------------------------------------------


//Usado?:
app.get('/profile', middlewares.verificarSesionMiddleware, (req, res) => {
  res.send(`
    <h1>Ruta del Perfil (Sesión activa)</h1>
    <form method="post" action="/logout">
      <button type="submit">Log Out</button>
    </form>
  `);
});
//--- Explicación: 
ruta a la pagina profile
// -------------------------------------------------------------------------------------


//Usado?:
app.post('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('Error al cerrar sesión:', err);
    }
    res.redirect('/');
  });
});
//--- Explicación: 
*/
// -------------------------------------------------------------------------------------
/*
//Usado?:yes
module.exports = {
  setup,
};
//--- Explicación:
  exportamos la funcion setup
// -------------------------------------------------------------------------------------

//Usado?: yes
module.exports = {
  validarPalabraMiddleware,
  verificarSesionMiddleware,
  setupAPP,
};
//--- Explicación:
//Exportamos los middlewares para pasar poder trabajar con las variables en routes.js
*/
// -------------------------------------------------------------------------------------