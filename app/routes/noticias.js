const connection = require('./../../config/dbConnection');


const noticias = (app) => {

    app.get('/noticias', function (req, res) {

        connection.query('select * from noticias;', function (error, result) {
            res.render('noticias/noticias', {noticias : result});
        }); 
    });
}; 


module.exports = noticias;