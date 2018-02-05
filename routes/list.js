let express = require('express');
let router = express.Router();

router.get('/admin/list', function(req, res, next){
    res.render('list', {
        title: 'imooc 列表'
    })
});

module.exports = router;