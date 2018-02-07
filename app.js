let express = require('express');
let path = require('path');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let router = require('./routes/router');
let Movie=require('./models/movie');
let app = express();
let port = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost/imooc');

app.set('views', './views/pages');
app.set('view engine', 'jade');
app.use(bodyParser.json({limit: '1mb'}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.locals.moment = require('moment');

app.use('/', router.index);
// app.use('/movie:id', router.detail);
app.use('/admin/movie', router.admin);
app.use('/admin/list', router.list);
app.use('/admin/movie/new', router.new);
app.use('/admin/update/:id', router.update);
app.get('/movie/:id',function (req, res) {
    let id =req.params.id;
    Movie.findById(id,function (err,movie) {
        res.render('detail',{
            title:'电 影 详 情',
            movie:movie
        })
    })

});
app.delete('/admin/list',function (req, res) {
    let id=req.query.id;
    if(id){
        Movie.remove({_id:id},function (err, movie) {
            if(err){
                console.log(err)
            }else {
                res.json({success:1})
            }
        })
    }
});

app.listen(port);