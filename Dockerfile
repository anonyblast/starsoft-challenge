# Base image
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build
FROM node:18-alpine AS production
WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps --only=production
COPY --from=build /app/dist ./dist
CMD ["node", "dist/main"]
EXPOSE 3000