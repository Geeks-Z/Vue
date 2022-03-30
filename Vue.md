# （二）HelloVue

## 2.1	HelloVuejs
vue是声明式编程，区别于jquery的命令式编程。

### 2.1.1命令式编程

​	原生js做法（命令式编程）

1. 创建div元素，设置id属性
2. 定义一个变量叫message
3. 将message变量放在div元素中显示
4. 修改message数据
5. 将修改的元素替换到div

### 2.1.2声明式编程

​	vue写法（声明式）

1. 创建一个div元素，设置id属性
2. 定义一个vue对象，将div挂载在vue对象上
3. 在vue对象内定义变量message，并绑定数据
4. 将message变量放在div元素上显示
5. 修改vue对象中的变量message，div元素数据自动改变

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <script src="https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.js"></script>
  <title>HelloVuejs</title>
</head>
<body>
  <div id="app">
      <h2>{{message}}</h2>
      <p>{{name}}</p>
  </div>
  <script>
    //let变量/const常量
    //编程范式：声明式编程
    const app = new Vue({
      el:"#app",//用于挂载要管理的元素
      data:{//定义数据
        message:"HelloVuejs",
        name:"zzz"
      }
    })
  </script>
</body>
</html>
```

​	在谷歌浏览器中按F12，在开发者模式中console控制台，改变vue对象的message值，页面显示也随之改变。

​	`{{message}}`表示将变量message输出到标签h2中，所有的vue语法都必须在vue对象挂载的div元素中，如果在div元素外使用是不生效的。`el:"#app"`表示将id为app的div挂载在vue对象上，data表示变量对象。