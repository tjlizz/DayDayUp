# 在Express中提供静态文件
```
app.use(express.static(path.join(__dirname, 'public')));

```

现在，可以访问位于 public 目录中的文件：

```
http://localhost:3000/index.css
```

要使用多个静态资源目录，请多次调用 express.static 中间件函数：
```
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'files')));

```

要为 `express.static` 函数提供的文件创建虚拟路径前缀（路径并不实际存在于文件系统中），请为静态目录指定安装路径
```
app.use('/static',express.static(path.join(__dirname, 'files')));

```
现在，可以访问具有 /static 路径前缀的 public 目录中的文件。
```
http://localhost:3000/static/index.css
```
