const { Server } = require("../../server");
const { createUser } = require("./createUser");
const { deleteUserById } = require("./deleteUserById");

let server = null
beforeEach(() => { 
    server = new Server()
})

describe(`DeleteSingleUser Works`, () =>{
    it(`deleteUserById is a function`, () => {
        expect(typeof deleteUserById).toBe(`function`)
    })
   /*  it(`deleteUser don't return args`, async () =>{
        const userdeleted = await deleteUser({prisma: server.prisma})
        expect(userdeleted).toBe(undefined);
    }) */
    it("DeleteUserBy id", async () => {
        const user = {
            name: `Damacio`,
            email: `${new Date().valueOf()}@deleteById.com`
        }

        const newUser = await createUser({prisma: server.prisma, user})
        expect(newUser.name).toBe(user.name)
        expect(newUser.id).toBeDefined()
        const deletedUser = await deleteUserById({ prisma: server.prisma, id: newUser.id})
        expect(deletedUser.id).toBe(newUser.id)
    })
}) 