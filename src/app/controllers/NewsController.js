// Function Constructor 
// Controller này chứa các function handler sau khi kiểm tra Route và http method trùng khớp
// Sau khi đã kiểm tra khớp rồi, nó sẽ tiến hành 1 Dispatch đến 1 Function Handler (Controller) để xử lý 
// giá trị trả về tuỳ theo phương thức http 
class NewsController {
    // [GET] /news
    index(req, res) {
        res.render('news');
    }
    // [GET] /news/:slug
    show(req, res) {
        res.send('News Detail');
    }
}
// Sau khi khởi tạo được constructor, thì phải export bằng pthuc module.exports = new NewsController (Khởi tạo đối tượng của NewCotroller)
module.exports = new NewsController;

