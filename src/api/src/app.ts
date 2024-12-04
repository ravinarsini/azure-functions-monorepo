import express, { Express } from "express";
import swaggerUI from "swagger-ui-express";
import cors from "cors";
import yaml from "yamljs";
import { getConfig } from "./config";
import lists from "./routes/lists";
import items from "./routes/items";
import users from "./routes/users";
import { configureMongoose } from "./lib/mongoose";
import { observability } from "./config/observability";

// Use API_ALLOW_ORIGINS env var with comma separated urls like
// `http://localhost:300, http://otherurl:100`
// Requests coming to the api server from other urls will be rejected as per
// CORS.
const allowOrigins = "*";

// Use NODE_ENV to change webConfiguration based on this value.
// For example, setting NODE_ENV=development disables CORS checking,
// allowing all origins.
const environment = process.env.NODE_ENV;

const originList = (): string[] | string => {
  if (environment && environment === "development") {
    console.log(`Allowing requests from any origins. NODE_ENV=${environment}`);
    return "*";
  }

  const origins = ["*"];
  return origins;
};

export const createApp = async (): Promise<Express> => {
  console.log("received1");
  const config = await getConfig();
  console.log("received2");
  const app = express();
  console.log("received3");

  // Configuration
  observability(config.observability);
  console.log("received4");
  await configureMongoose(config.database);
  console.log("received5");
  // Middleware
  app.use(express.json());
  console.log("received5");
  app.use(
    cors({
      origin: true,
    })
  );
  console.log("received6");
  // API Routes
  app.use("/lists/:listId/items", items);
  app.use("/lists", lists);
  app.use("/users", users);
  // Swagger UI
  const swaggerDocument = yaml.load("./openapi.yaml");
  app.use("/", swaggerUI.serve, swaggerUI.setup(swaggerDocument));
  console.log("received7");
  return app;
};
