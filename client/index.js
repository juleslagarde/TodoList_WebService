const express = require('express');
const app = express();
const port = 3030;


app.set('view engine', 'pug');

app.use(express.static(__dirname+'/public')); // to get static pages

app.get('/', function(req, res){
    console.log("Bang!");
    res.render('client',{title:'hey'});
  }
);
app.listen(port, (err,data) => {
    console.log(`Example app listening on port ${port}! ${err}`);
  });
