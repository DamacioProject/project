const deleteUserById = ({prisma, id}) => {
    return prisma.user.delete({
        where: {
            id,
        }
    })
}
module.exports = {
    deleteUserById
} 