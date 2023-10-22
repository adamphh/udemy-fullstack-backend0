//  phục vụ cho server side rendering. Web site có những method nào, tính năng nào thì viết vào đây
const express = require('express');
const { getHomepage, testPage } = require('../controllers/homeController');
const { testViewEngine } = require('../controllers/viewEngineController');
const router = express.Router();


// router.Method('/route',  handler)

// handler ở đấy chính là một controller dùng để xử lý dữ liệu và trả lại response
// VD: dùng controller homeController để xử lý khi truy cập vào homepage
// router.get('/', (req, res) => {
//     res.send('Hello Express  & using nodemon')
// })
router.get('/', getHomepage);

router.get('/abc', testPage);

router.get('/test-html', (req, res) => {
    res.send('<h1>Test response  with html tag</h1>')
})

// Route dung de test ejs template engine
router.get('/test-ejs', testViewEngine);
// router.get('/test-ejs', (req, res) => {
//     // res.send('<h1>Test response  with html tag</h1>')
//     // Khong dung res.send nua ma chuyen sang res.render va truyen ten cua template can render vao
//     res.render('sample.ejs')
// })

module.exports = router;