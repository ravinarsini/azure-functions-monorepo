# syntax=docker/dockerfile:1

# Build Node.js app
# ------------------------------------
  FROM node:20-alpine as build
  WORKDIR /app
  COPY ./package*.json ./
  COPY ./src/api ./src/api
  RUN npm ci --cache /tmp/empty-cache
  RUN npm run build --workspace=src/api
  
  # Run Node.js app
  # ------------------------------------
  FROM node:20-alpine
  ENV NODE_ENV=production
  
  WORKDIR /app
  COPY ./package*.json ./
  COPY ./src/api/package.json ./src/api/
  RUN npm ci --omit=dev --workspace=src/api --cache /tmp/empty-cache
  COPY --from=build app/src/api/dist src/api/dist
  EXPOSE 3000
  CMD [ "npm", "start", "--workspace=backend" ]