const getHomepage = (req, res) => {
    // Model sẽ được gọi ở đây để  xử lý dữ liệu, ngay trước khi trả về response
    res.send('Hello Express  & using nodemon')
}

const testPage = (req, res) => {
    res.send('Just for testing multiple routes (/abc) ')
}

// Nếu export default 1 biến thì gán = luôn
// module.exports = getHomepage;

// TH muốn export nhiều biến thì cần phải đưa vào trong một object
module.exports = {
    getHomepage,
    testPage
}