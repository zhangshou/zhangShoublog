//第一步引入操作mongodb数据库的模块
var mongoose = require('mongoose');
//第二步连接数据库
mongoose.connect('mongodb://127.0.0.1/zhangshoublog');
//第三步定义用户的Schema 模型骨架
var UserSchema = new mongoose.Schema({
   username:String, //定义此集合中的文件拥有username属性
   password:String  //定义此集合中的文件拥有password属性
},{collection:'user'});//指定存储在数据库中集合的名称

//第四步 定义User模型
var User = mongoose.model('User',UserSchema);
exports.User = User;


