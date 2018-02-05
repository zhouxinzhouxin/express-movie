let express = require('express');
let router = express.Router();

exports.index = router.get('/', function(req, res, next){
    res.render('index', {
        title: 'imooc 首页',
        movies: [
            {
                title: '钢铁侠',
                _id: 1,
                poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
            },{
                title: '钢铁侠',
                _id: 2,
                poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
            },{
                title: '钢铁侠',
                _id: 3,
                poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
            },{
                title: '钢铁侠',
                _id: 4,
                poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
            },{
                title: '钢铁侠',
                _id: 5,
                poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
            }
        ]
    })
});

exports.list = router.get('/admin/list', function(req, res, next){
    res.render('list', {
        title: 'imooc 列表',
        movies: [{
            title: '钢铁侠',
            _id: 1,
            doctor: 'zhouxin',
            langusge: 'English',
            year: 2018,
            country: 'USA',
            flash: 'http://player.youku.com/player.php/sid/XNjA1Njc0NTUy/v.swf'
        }]
    })
});

exports.detail = router.get('/movie:id', function(req, res, next){
    res.render('detail', {
        title: 'imooc 详情页',
        movie: {
            doctor: 'zhouxin',
            country: 'USA',
            title: '钢铁侠',
            year: '2018',
            poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5',
            language: 'English',
            flash: 'http://player.youku.com/player.php/sid/XNjA1Njc0NTUy/v.swf',
            summary: '反间谍法克己奉公开放接口即可根据反馈；国家可根据看了几个六块腹肌轮廓风口浪尖考六级考六级过了快放假了可敬可嘉历尽甘苦萝莉控股份离开过'
        }
    })
});

exports.admin = router.get('/admin/movie', function (req, res, next){
    res.render('admin', {
        title: 'imooc 登陆',
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