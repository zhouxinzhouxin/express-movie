let express = require('express');
let router = express.Router();

router.get('/movie:id', function(req, res){
    res.render('detail', {
        title: 'imooc 详情页'
    })
});

module.exports = router;