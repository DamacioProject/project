const { Server } = require("./server")
const express = require("express")
const { PrismaClient } = require("@prisma/client")
const request = require('supertest');
const dotenv = require(`dotenv`)
const {
    StatusCodes,
} = require('http-status-codes');

let server = null
beforeEach(() => {
    dotenv.config() 
    server = new Server()
})

describe('server works', () => {
    it('instanciate server class', () => {

        expect(server).toBeInstanceOf(Server)
    })
    it(`should contains an application based on express`, () => {

        expect(typeof server.app).toBe(typeof express())
    })
    it(`should contain a connection to Prisma client`, () => {
        expect(server.prisma).toBeInstanceOf(PrismaClient)
    })
    it(`app should listen in port 8080`, () => {
        server.start()
        const PORT = Number(process.env.PORT)
        expect(server.listener).toBeDefined()
        expect(PORT).toBeDefined()
        expect(server.listener.address().port).toBe(PORT)
        server.listener.close()
    })
    it(`server should redirect with invalid path`, async () => {
        server.start()
        const response = await request(server.app).get('/testing')
            .set('Accept', 'application/json')
        expect(response.status).toEqual(StatusCodes.BAD_REQUEST);
        server.listener.close()
    })
})


