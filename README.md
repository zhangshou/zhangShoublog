# zhangshoublog
个人博客


### 1. 在github上创建一个博客项目
### 2. 下载到本地并用webstorm打开
### 3.修改.gitignore文件，并添加以下配置项
.idea是webstorm的配置文件
lib会存放我们的前端框架，比如angular bootstrap jquery
```
.idea
lib
```

### 4.创建bower配置文件
`bower.json` 用来管理前端的依赖库
项目名或者说文件夹名称不能有中文或大写字母或其它特殊字符
```
npm install bower -g
bower init
```

### 5. 创建 .bowerrc 配置文件
指定使用bower 安装的框架和模块下载到哪个目录下
```
{
  "directory":"./public/lib"
}
```
### 6. 初始化项目配置文件
```
npm init -y
```