const { users } = require('../../controllers')
const {StatusCodes} = require("http-status-codes")

const createUserService = async (req, res) => {
    try {
        const prisma = req.prisma
        const user = req.body
        const newUser = await users.createUser({
            user,
            prisma
        })
        return res.json({
            data: newUser,
            success: true
        })
    } catch (error) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            success: false,
            error
        })
    }
}

module.exports = {
    createUserService
}