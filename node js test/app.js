var express = require('express');
var app= express();
var http = require('http');
var massive = require("massive");
var connectionString = 'postgres://pshua075:Pencil420984!@web0.site.uottawa.ca:15432/pshua075';
// connect to Massive and get the db instance. You can safely use the
// convenience sync method here because its on app load
// you can also use loadSync - it's an alias
var massiveInstance = massive.connectSync({connectionString : connectionString});
var cookieParser = require('cookie-parser');
// Set a reference to the massive instance on Express' app:
app.set('db', massiveInstance);
http.createServer(app).listen(8080);
app.listen(3000);
app.set('view engine','ejs');
var db = app.get('db');
var newUser={
    user_id:"22",
    password:"abssjfh",
    last_name:"Jay",
    first_name:"Peng",
    email:"test@test.com",
    city:"ottawa"
};
db.moviedb.users.save(newUser,function (err,result) {
    console.log(result);
    console.log(err);
});
var joe=db.moviedb.users.saveSync({user_id:1,email:"joe@test.com"});
console.log(joe);
db.moviedb.users.where("user_id=$1", [1], function(err, res){
    console.log('hey');
    console.log(res[0].password);
});
app.use(cookieParser());

app.get('/', function(req, res) {
    console.log('Cookies: ', req.cookies)
});
/*app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html');
});

app.get('/profile/:name',function (req,res) {
    var data={age:28,job:'nijisa'};
    res.render('profile',{person:req.params.name,data:data});
});*/


