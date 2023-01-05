const updateUsers = ({prisma, id}) => {
    return prisma.user.update({
        where: {
            id
          },
          data: {
            name: "Huevos" 
          },
    })
}

module.exports = {
    updateUsers
}