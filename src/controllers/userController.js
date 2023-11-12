const { getAllUsers } = require('../services/usersService');

const usersPage = async (req, res) => {
    let results = await getAllUsers();
    return res.render('users.ejs', { users: results });
}

const getUpdateUserPage = (req, res) => {
    return res.render('edit.ejs');
}

module.exports = {
    usersPage,
    getUpdateUserPage
}