const createUser = ({prisma, user}) => {
    return prisma.user.create({
        data: user
    })
}

module.exports = {
    createUser
}