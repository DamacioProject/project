const { Server } = require("../../server");
const { createUser } = require("./createUser");
const { deleteUserById } = require("./deleteUserById");
const { updateUsers } = require("./updateUsersById");
const user = require("./updateUsersById")
let server = null
beforeEach(() => { 
    server = new Server()
})

describe(`Update a user if it exist`, () => {
    it(`Function getUser exist`, () =>{
        expect(typeof updateUsers).toBe(`function`)
    })
    it(`function return args with the updated user`, async () =>{ 
        const newUser =  {
            email: `${new Date().valueOf()}@updateUserById.com`,
            name: "Luis"
        }
        const userRecord = await createUser({prisma: server.prisma, user: newUser})
        expect(userRecord.id).toBeDefined()
        expect(userRecord.name).toBe(newUser.name)

        const userUpdated = await updateUsers({prisma: server.prisma, id: userRecord.id})
        expect(userUpdated.id).toBeDefined()
        expect(userUpdated.name).toBeDefined()
        
        const deletedUser = await deleteUserById({ prisma: server.prisma, id: userUpdated.id})
        expect(deletedUser.id).toBe(userUpdated.id)


        /* const user =  {
            id: 121,
            name: "Tijera"
        }
        const oldUser = await updateUsers({prisma: server.prisma, user: user})
        expect(Array.includes(oldUser.id)).toBe(false) */
        /* expect(userUpdated.name).tobe */
      /*   const users = await updateUsers({prisma: server.prisma})
        expect(Array.isArray(users)).toBe(true)
        console.log(users) */
    })
    /* function returns an array of users filled */
})