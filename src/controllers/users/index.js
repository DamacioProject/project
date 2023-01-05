const {createUser} = require("./createUser")
const {getUsers} = require("./getUsers")
const {getUserById} = require("./getUserById")
const {updateUsers} = require("./updateUsersById")
const {deleteUserById} = require("./deleteUserById")

module.exports = {
    createUser,
    getUsers,
    getUserById,
    updateUsers,
    deleteUserById
}