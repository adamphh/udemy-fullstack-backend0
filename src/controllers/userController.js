const { getAllUsers } = require('../services/usersService');

const usersPage = async (req, res) => {
    let results = await getAllUsers();
    return res.render('users.ejs', { users: results });
}

module.exports = {
    usersPage
}