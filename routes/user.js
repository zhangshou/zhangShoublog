
var express=require('express');
var router=express.Router();
router.get('/signup', function (req,res) {
    res.send('注册');
});
router.get('/signin', function (req,res) {
    res.send('登录');
});
router.get('/signout', function (req,res) {
    res.send('退出登录');
});

module.exports=router;

