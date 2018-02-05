let express = require('express');
let path = require('path');
let bodyParser = require('body-parser');
// let index = require('./routes/index');
// let detail = require('./routes/detail');
// let admin = require('./routes/admin');
// let list = require('./routes/list');
let router = require('./routes/router');
let app = express();
let port = process.env.PORT || 3000;

app.set('views', './views/pages');
app.set('view engine', 'jade');
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'bower_components')));

app.get('/', router.index);
app.get('/movie:id', router.detail);
app.get('/admin/movie', router.admin);
app.get('/admin/list', router.list);
// app.get('/admin/list', function(req, res){
//     res.render('list', {
//         title: 'imooc 列表'
//     })
// });

app.listen(port);