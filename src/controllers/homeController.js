const connection = require('../config/database');

const getHomepage = (req, res) => {
    // Model sẽ được gọi ở đây để  xử lý dữ liệu, ngay trước khi trả về response
    // res.send('Hello Express  & using nodemon')

    // Get data from mysql and display on homepage
    let users = [];

    connection.query(
        'Select * from Users u',
        function (err, results, fields) {
            users = results;
            console.log(">>> Result on homepage = ", results);

            res.send(JSON.stringify(users));
        }
    )

}

const testPage = (req, res) => {
    res.send('Just for testing multiple routes (/abc) ')
}

const homePage = (req, res) => {
    return res.render('home.ejs');
}

// Nếu export default 1 biến thì gán = luôn
// module.exports = getHomepage;

// TH muốn export nhiều biến thì cần phải đưa vào trong một object
module.exports = {
    getHomepage,
    testPage,
    homePage
}