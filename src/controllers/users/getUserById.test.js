const { getUserById } = require("./getUserById")
const { Server } = require("../../server");
const { createUser } = require("./createUser");

let server = null
beforeEach(() => { 
    server = new Server()
})

describe(`Return the user with the given ID`, () => {
    it(`Function getUserById exist`, () =>{
        expect(typeof getUserById).toBe(`function`)
    })
    it(`function return args`, async () =>{
        const userShouldDeleted =  {
            email: `${new Date().valueOf()}@gmail.com`,
            name: "Luis"
        }
        const userRecord = await createUser({prisma: server.prisma, user: userShouldDeleted})
        expect(userRecord.id).toBeDefined()
        expect(userRecord.name).toBe(userShouldDeleted.name)
        const user = await getUserById({prisma: server.prisma, id: userRecord.id})
        expect(user.id).toBeDefined()
        expect(user.id).toBe(userRecord.id)
    })
})