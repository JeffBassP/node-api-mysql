const connection = require('./../../config/dbConnection');

const noticia = (app) => {

    app.get('/noticia', function (req, res) {
      
        connection.query('select * from noticias where id_noticia = 2;', function (error, result) {
            res.render('noticias/noticia', {noticia : result});
        }); 
    });
}; 

module.exports = noticia;