const getUsers = ({prisma}) => {
    return prisma.user.findMany()
}

module.exports = {
    getUsers
}