const { PrismaClientValidationError } = require('@prisma/client/runtime');
const {
    StatusCodes,
} = require('http-status-codes');
const { Server } = require("../../server");
const { createUser } = require("./createUser");

let server = null
const mockCreateUser = jest.fn(createUser);
beforeEach(() => { 
    server = new Server()
})

describe (`when passed a username`, () =>{
    it(`function create user exist `, () => {
        expect(typeof createUser).toBe(`function`)
    })
    it(`function recive args`, async () => {
        const user = {
            name: `Damacio`,
            email: `${new Date().valueOf()}@createUser.com`
        }

        const newUser = await createUser({prisma: server.prisma, user})
        expect(newUser.name).toBe(user.name)
        expect(newUser.id).toBeDefined()
        expect(typeof newUser.id).toBe("number")
        await server.prisma.user.delete({
            where: {
                id: newUser.id
            }
        })
    }) 
     it(`email exist in db`, async () => {
          try {
            const user = {
                name: `Damacio`,
                email: `hola3@gmail.com`
            }
            await createUser({prisma: server.prisma, user});
          } catch (e) {
             console.log(e.message)
             expect(createUser).toThrowError(`Invalid`);
          }   
    })  
})