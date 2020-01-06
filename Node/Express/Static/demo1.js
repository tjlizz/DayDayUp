var express = require('express')
const path = require('path')
var app = express()
app.use(express.static(path.join(__dirname, 'files')));

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, function () {
    console.log('CORS-enabled web server listening on port 3000')
})
