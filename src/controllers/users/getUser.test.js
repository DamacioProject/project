const { getUsers } = require("./getUsers")
const { Server } = require("../../server");
/* const {deleteUserById} = require("./deleteUserById")
 */
let server = null
beforeEach(() => { 
    server = new Server()
})

describe(`Return all records`, () => {
    it(`Function getUser exist`, () =>{
        expect(typeof getUsers).toBe(`function`)
    })
    it(`function return args`, async () =>{
        const users = await getUsers({prisma: server.prisma})
        expect(Array.isArray(users)).toBe(true)
  /*       const deleteUser = await deleteUsers({prisma: server.prisma}) 
        console.log(deleteUser) */
        console.log(users)

     })
    it('function return an array of users filled', async() => {
        const users = await getUsers({prisma: server.prisma})
        expect(users.length).toBeGreaterThan(0)
    })
})

/* afterEach(() => {
    deleteUsers();
  });  */
  