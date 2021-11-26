### 目录解析

| 目录/文件    | 说明                                                         |
| :----------- | :----------------------------------------------------------- |
| build        | 项目构建(webpack)相关代码                                    |
| config       | 配置目录，包括端口号等。我们初学可以使用默认的。             |
| node_modules | npm 加载的项目依赖模块                                       |
| src          | 这里是我们要开发的目录，基本上要做的事情都在这个目录里。里面包含了几个目录及文件： assets: 放置一些图片，如logo等。components: 目录里面放了一个组件文件，可以不用。App.vue: 项目入口文件，我们也可以直接将组件写这里，而不使用 components 目录。main.js: 项目的核心文件。 |
| static       | 静态资源目录，如图片、字体等。                               |
| test         | 初始测试目录，可删除                                         |
| .xxxx文件    | 这些是一些配置文件，包括语法配置，git配置等。                |
| index.html   | 首页入口文件，你可以添加一些 meta 信息或统计代码啥的。       |
| package.json | 项目配置文件。                                               |
| README.md    | 项目的说明文档，markdown 格式                                |



# 第一个Vue程序

1. 导入开发版本的Vue.js
2. 创建Vue实例对象，设置el属性和data属性
3. 使用简洁的模板语法把数据渲染到页面上

![image-20211124214047891](C:\Users\Y_rachel\AppData\Roaming\Typora\typora-user-images\image-20211124214047891.png)

- el-挂载点

  el是用来设置Vue实例挂载（管理）的元素

- **data** 用于定义属性，实例中有三个属性分别为：site、url、alexa。

  Vue中用到的数据定义在data中

- **methods** 用于定义的函数，可以通过 return 来返回函数值。

- **{{ }}** 用于输出对象属性和函数返回值。

  数据绑定最常见的形式就是使用 {{...}}（双大括号）的文本插值：

  ```html
  <body>
  <div id="app">
    <p>{{ message }}</p>
  </div>
  
  <script>
  new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue.js!'
    }
  })
  </script>
  </body>
  ```

  

- Vue 构造器中有一个el 参数，它是 DOM 元素中的 id

## v-text

v-text指令的作用是：设置标签的内容

默认写法会替换全部内容，使用差值表达式{{}}可以替换指定内容

## v-html

v-html指令的作用是：设置元素的innerHTML

内容中有html结构会被解析为标签

v-text指令无论内容是什么，只会解析为文本

解析文本使用v-text,需要解析html结构是使用v-html

## v-on

v-on指令的作用是：为元素绑定事件

