// Bóc tách router ra thành những file nhỏ hơn tuỳ vào URL như thế nào 
// Trong trường hợp này, là /news
const express = require('express'); // Default
// express.Router() là 1 Obj, nó là 1 instance riêng của middleware và routes
const router = express.Router(); // Default
const siteController = require('../app/controllers/SiteController')
// Đối tượng được khởi tạo từ NewsController
// const siteController = require('../app/controllers/NewsController')
// Không cần định nghĩa path trong này, có thể làm ở bên ngoài file routes

// router.use('/:slug', newController.show)
router.use('/search', siteController.search)
router.use('/', siteController.index)


module.exports = router