const connection = require('../config/database');
const { getAllUsers, getUserById, updateUserService, deleteUserById } = require('../services/usersService');

const usersPage = async (req, res) => {
    let results = await getAllUsers();
    return res.render('users.ejs', { users: results });
}

const getUpdateUserPage = async (req, res) => {
    console.log('>>>> params: ', req.params);
    const userId = req.params.id;
    let user = await getUserById(userId);
    return res.render('edit.ejs', { user: user[0] });
}

const updateUser = async (req, res) => {
    console.log('>>>> post data: ', req.body);
    let userId = req.body.id;
    let user = await updateUserService(req.body);
    res.send(`Update user success!`);

    res.redirect('/V1/update/' + userId);
}

const deleteUser = async (req, res) => {
    const userId = req.params.id;
    let user = await deleteUserById(userId);
    res.redirect('/V1/users');
}

module.exports = {
    usersPage,
    getUpdateUserPage,
    updateUser,
    deleteUser
}