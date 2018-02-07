let express = require('express');
let _=require('underscore');
let router = express.Router();
let Movie=require('../models/movie');

exports.index = router.get('/', function(req, res, next){
    Movie.fetch(function (err, movies) {
        if(err){
            console.log(err)
        }
        res.render('index',{
            title:'电 影 首 页',
            movies:movies
        })
    });
});

exports.list = router.get('/admin/list', function(req, res, next){
    Movie.fetch(function (err, movies) {
        if(err){
            console.log(err)
        }
        res.render('list',{
            title:'电 影 列 表 页',
            movies:movies
        })
    });
});

// exports.detail = router.use(function(req, res, next){
//     let id =req.params.id;
//     Movie.findById(id, function (err,movie) {
//         res.render('detail',{
//             title:'imooc ',
//             movie:movie
//         })
//     })
// });

exports.admin = router.get('/admin/movie', function (req, res, next){
    res.render('admin', {
        title: '后 台 录 入 页',
        movie: {
            doctor: '',
            country: '',
            title: '',
            year: '',
            poster:'',
            language: '',
            flash: '',
            summary: ''
        }
    })
});

exports.new = router.post('/admin/movie/new',function (req,res) {
    let id = req.body.movie._id;
    let movieObj =req.body.movie;
    let _movie;
    if(id !== 'undefined'){
        Movie.findById(id,function (err, movie) {
            if (err){
                console.log(err)
            }
            _movie=_.extend(movie,movieObj);
            _movie.save(function (err, movie) {
                if(err){
                    console.log(err)
                }
                res.redirect('/movie/'+movie._id);
            })
        })
    }else {
        _movie=new Movie({
            doctor:movieObj.doctor,
            title:movieObj.title,
            country:movieObj.country,
            lan:movieObj.lan,
            year:movieObj.year,
            poster:movieObj.poster,
            summary:movieObj.summary,
            flash:movieObj.flash
        });
        _movie.save(function (err, movie) {
            if(err){
                console.log(err)
            }
            res.redirect('/movie/'+movie._id);
        })
    }
});

exports.update = router.get('/admin/update/:id',function (req, res) {
    let id=req.params.id;
    if(id){
        Movie.findById(id,function (err, movie) {
            res.render('admin',{
                title:'后台更新',
                movie:movie
            })
        })
    }
});