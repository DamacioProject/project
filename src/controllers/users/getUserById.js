const getUserById = ({ prisma, id }) => {
    return prisma.user.findUnique({
        where: {
            id
        },
    })
}

module.exports = {
    getUserById
}