const express = require('express')
const { PrismaClient } = require("@prisma/client")
const dotenv = require('dotenv')
const {
    ReasonPhrases,
    StatusCodes,
} = require('http-status-codes');
const { router } = require('./routes');

class Server {
    constructor() {
        dotenv.config()
        this.app = express()
        this.prisma = new PrismaClient()
    }
    start() {
        this.app.use(express.json())
        this.app.locals.prisma = this.prisma 
        this.app.use("/api", router)
        this.app.use(`*`, (_req, res) => {
            return res.status(StatusCodes.BAD_REQUEST).end(ReasonPhrases.BAD_REQUEST)
        })
        this.listener = this.app.listen(process.env.port, () => console.log("Running in port 8080"))
    }
}
module.exports = {
    Server
}
