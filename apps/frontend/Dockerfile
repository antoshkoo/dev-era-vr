FROM node:24-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .
RUN npx nx build frontend

FROM nginx:alpine
COPY --from=build /app/dist/apps/frontend/browser /usr/share/nginx/html
EXPOSE 80
