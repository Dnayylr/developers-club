import Fastify from "fastify"
// import cors from "fastify-cors"
import colors from "colors"
import dotenv from "dotenv"
import { connection } from "./config/database/connection.js"
import { createUser } from "./routes/users.routes.js"
// import cors from "@fastify/cors"

// TODO: enviroments 
dotenv.config()

// TODO: connection DB funciton
connection()

// TODO: middlewares
const PORT = process.env.PORT = 3000
const fastify = Fastify({
    logger: true
})

// TODO: plugins 
fastify.register(createUser)
// await fastify.register(cors,{
//     origin: true
// })

// TODO: Run server!
const bootstrap = async() =>{
    try {
        await fastify.listen({
            port: PORT
        })
        console.log(`listening on port ${PORT}`.green)
    } catch (error) {
        throw new Error(error)
    }
}

bootstrap()