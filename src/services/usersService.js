const connection = require('../config/database');

const getAllUsers = async () => {
    const [results, fields] = await connection.query(
        `SELECT *  FROM Users`
    );
    return results;
}

const getUserById = async (id) => {
    const [results, fields] = await connection.query(
        `SELECT * FROM Users where id = ?`, [id]
    );
    return results;
}

const updateUserService = async (body) => {
    console.log('body: ', body);
    let { id, name, email, city } = body;
    const [results, fields] = await connection.query(
        `update Users set name = ?, email = ?, city = ? where id = ?`, [name, email, city, id]
    );
    console.log('>>> results: ', results);
    return results;
}

const deleteUserById = async (userId) => {
    const [results, fields] = await connection.query(
        `delete FROM Users where id = ?`, [userId]
    );
    return results;
}

module.exports = {
    getAllUsers,
    getUserById,
    updateUserService,
    deleteUserById
}