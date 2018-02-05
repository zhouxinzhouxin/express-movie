let express = require('express');
let router = express.Router();

router.get('/admin/movie', function (req, res){
    res.render('admin', {
        title: 'imooc 登陆'
    })
});

module.exports = router;