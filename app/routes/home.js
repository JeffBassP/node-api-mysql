const home = (app) => {
    
app.get('/', function(req, res){
    res.render('home/index');
});
}

module.exports = home;