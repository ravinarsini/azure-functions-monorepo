import express, { Express } from "express";
import { getConfig } from "./config";
import tests from "./routes/test";
import { configureMongoose } from "./lib/mongoose";
import { observability } from "./config/observability";

// Use API_ALLOW_ORIGINS env var with comma separated urls like
// `http://localhost:300, http://otherurl:100`
// Requests coming to the api server from other urls will be rejected as per
// CORS.
const allowOrigins = process.env.API_ALLOW_ORIGINS;

// Use NODE_ENV to change webConfiguration based on this value.
// For example, setting NODE_ENV=development disables CORS checking,
// allowing all origins.
const environment = process.env.NODE_ENV;


export const createApp = async (): Promise<Express> => {
  const config = await getConfig();
  const app = express();

  // Configuration
  observability(config.observability);
  await configureMongoose(config.database);
  // Middleware
  app.use(express.json());

  // API Routes
  app.use("/test", tests);

  app.use("/", tests);

  return app;
};