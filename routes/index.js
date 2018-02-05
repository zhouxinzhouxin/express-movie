let express = require('express');
let router = express.Router();

router.get('/', function(req, res){
   res.render('index', {
       title: 'imooc 首页'
   })
});

module.exports = router;