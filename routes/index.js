var express = require('express');
var router = express.Router();
router.get('/',function(req,res){
   res.render('index',{title:'首页',name:'<h1>我是首页</h1>'});
});
module.exports = router;