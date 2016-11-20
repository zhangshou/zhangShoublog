var express = require('express');
var router = express.Router();
router.get('/add',function(req,res){
    res.render('article/add',{title:'增加文章'});
});
module.exports = router;