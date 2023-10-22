const testViewEngine = (req, res) => {
    // res.send('<h1>Test response  with html tag</h1>')
    // Khong dung res.send nua ma chuyen sang res.render va truyen ten cua template can render vao
    res.render('sample.ejs')
}

module.exports = {
    testViewEngine
}