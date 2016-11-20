//创建一个处理用户相关路由的路由中间件
var express = require('express');
//当require是一个文件夹的时候，会自动加载文件夹下面的index.js模块
var User = require('../model').User;
//创建一个路由中间件的实例
var router = express.Router();

//它也是一个路由的容器，里面可以定义很多路由
//   /signin
router.get('/signup',function(req,res){
  res.render('user/signup',{title:'用户注册'});
});
//处理提交的用户注册表单   username=zfpx&age=9 {username:'zfpx',age:9}
router.post('/signup',function(req,res){
   var user = req.body;//username:'zfpx',password:'zfpx'}
   User.findOne({username:user.username},function(err,doc){
        if(err){
            res.redirect('back');
        }else{
            if(doc){
                //跳回到上一个页面，从哪来，回哪里
                res.redirect('back');
            }else{
                User.create(user,function(err,doc){
                    if(err){
                        res.redirect('back');
                    }else{
                        res.redirect('/user/signin');
                    }
                });
            }
        }
   })
});
router.get('/signin',function(req,res){
  res.render('user/signin',{title:'用户登录'});
});
var util = require('util');
router.post('/signin',function(req,res){//处理用户登录表单
  var user = req.body;
  User.findOne(user,function(err,doc){
      if(err){
          req.session.error = util.inspect(err);
          res.redirect('back');
      }else{
          if(doc){
              req.session.success = '登录成功';
              req.session.user = doc;
              res.redirect('/');
          }else{
              req.session.error = '用户名和密码不正确';
              res.redirect('back');
          }
      }
  })
});
router.get('/signout',function(req,res){
    res.send('退出登录');
});
module.exports = router;

