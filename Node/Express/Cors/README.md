# 安装
``` shell 
$ npm i core
```

# 全局使用
 ``` 
var express = require('express')
var cors = require('cors')
var app = express()
app.use(cors())
app.get('/products/:id', function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for all origins!'})
})

app.listen(80, function () {
    console.log('CORS-enabled web server listening on port 80')
})

```
# 某个服务使用
``` 
var express = require('express')
var cors = require('cors')
var app = express()
 
app.get('/products/:id', cors(), function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for a Single Route'})
})
 
app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})
```
# 动态加载

``` 
var express = require('express')
var cors = require('cors')
var app = express()
 
var whitelist = ['http://example1.com', 'http://example2.com']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
 
app.get('/products/:id', cors(corsOptions), function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for a whitelisted domain.'})
})
 
app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})
```
