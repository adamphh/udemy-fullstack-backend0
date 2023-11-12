1. Khai bao router / Users trong route / web.js
router.get('/users', usersPage);

2. Khai bao file template 
    users.ejs

3. Khai bao controller userController
    - khai bao function usersPage de lay du lieu va truyen sang template users.ejs
    
    const usersPage = async (req, res) => {
        const [results, fields] = await connection.query(
            `SELECT *  FROM Users`
        );

        // Truyen du lieu (results) sang file template
        return res.render('users.ejs', { users: results });
    }
4. Su dung cap dau <%= {ten_bien} %> de in ra gia tri cua bien
    <%= JSON.stringify(users) %>
    <%= users[0]['name'] %>

5. Edit user
