import { createUserController } from "../controllers/users.controllers.js";

export const adminRoute = async (fastify, opts, done) =>{
    await fastify.get("/admin")
    done()
}

export const createUser = async (fastify, opts, done) =>{
    await fastify.post("/", createUserController)
    done()
}