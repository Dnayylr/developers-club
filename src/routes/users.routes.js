import {
  createUserController,
  getUsers,
} from "../controllers/users.controllers.js";
import cacheInit from "../middlewares/cache.config.js";

export const adminRoute = async (fastify, opts, done) => {
  await fastify.get("/admin", cacheInit, getUsers);
  done();
};

export const createUser = async (fastify, opts, done) => {
  await fastify.post("/", createUserController);
  done();
};