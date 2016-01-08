var tpl = require('nunjucks')
var express = require('express');
var app = express();
var env = tpl.configure('views', {
    autoescape: true,
    express: app
});

env.addGlobal('asset', function(asset){
  return '/public/' + require('./public/manifest.json')[asset]
})

app.use('/public', express.static('public'));

app.get('/', function (req, res) {
  res.render('index.html');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
})
