const newsRouter = require('./news')
const siteRouter = require('./site')

// Nơi định tuyến trang web
// 
function route(app) {
      // Cấu hình /news
      app.use('/news', newsRouter)
      // Định tuyến cho / , /search, /contact (nhung duong dan co the dung chung)
      app.use('/', siteRouter)
}

module.exports = route