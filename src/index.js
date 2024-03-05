const path = require('path')
const express = require('express')
const morgan = require('morgan')
const { engine } = require("express-handlebars");
const route = require("./routes")
const port = 4001
const app = express()
// Middleware để xử lý phương thức POST
// 1. urlencoded: xử lý các hành vi của thẻ html như thẻ form, input
app.use(express.urlencoded())
// 2. json: xử lý các thư viện gửi yêu cầu trực tiếp từ phía client lên server: XMLHttpRequest, axios, fetch
app.use(express.json())

// Static file
app.use(express.static(path.join(__dirname, 'public')))
// HTTP Logger
app.use(morgan('combined'))
// Template Engine
app.engine('hbs', engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs'); 
app.set('views', path.join(__dirname, 'resources/views'));
console.log('PATH:' + path.join(__dirname, 'resources/views'));

// Định nghĩa route
// Chia ra file index.js này theo mô hình MVC
// Brownser => Web server => Route(Action: Check router and http method) => Dispatcher => (Controller Model View)
// Route : tạo ra 1 folder routes để quản lý chung việc định tuyến các đường dẫn URL (routes/index.js)
route(app)

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})