const getHomepage = (req, res) => {
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