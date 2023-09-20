import Fastify from "fastify";
import colors from "colors";
import dotenv from "dotenv";
import { connection } from "./config/database/connection.js";
import { createUser, adminRoute } from "./routes/users.routes.js";

// TODO: enviroments
dotenv.config();

// TODO: connection DB funciton
connection();

// TODO: middlewares
const PORT = (process.env.PORT = 3000);
const fastify = Fastify({
  logger: true,
});

// TODO: plugins
fastify.register(createUser);
fastify.register(adminRoute);

// TODO: config CORS method
fastify.addHook("onRequest", (req, reply, done) => {
  reply.header("Access-Control-Allow-Origin", "*");
  reply.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  reply.header("Access-Control-Allow-Headers", "Content-Type");
  reply.header("Access-Control-Allow-Credentials", "true");
  reply.header("Access-Control-Max-Age", "86400");

  if (req.method === "OPTIONS") {
    reply.code(200).send();
  } else {
    done();
  }
});

// TODO: Run server!
const bootstrap = async () => {
  try {
    await fastify.listen({
      port: PORT,
    });
    console.log(`listening on port ${PORT}`.green);
  } catch (error) {
    throw new Error(error);
  }
};

bootstrap();
