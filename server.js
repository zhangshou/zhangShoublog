var express=require('express');
var user=require('./routes/user');
var app=express();
app.use('/user',user);

/*//首页路由
app.get('/', function (req,res) {

});
//注册路由
app.get('/signup', function (req,res) {

});
///登录路由
app.get('/signin', function (req,res) {

});
//退出路由
app.get('/signout', function (req,res) {

});
//发表文章路由
app.get('/publish', function (req,res) {

});*/
app.listen(9090);