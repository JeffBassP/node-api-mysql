const app = require('./config/server');

/* const routeHome = require('./app/routes/home');
const formInclusaoNoticias = require('./app/routes/formulario_inclusao_noticia');
const formNoticias = require('./app/routes/noticias');

routeHome(app);
formInclusaoNoticias(app);
formNoticias(app);
 */
app.listen(3000, function(){
   console.log(`Servidor rodando na porta 3000`);
})