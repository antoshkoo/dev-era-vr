FROM node:18-alpine
RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /opt/
COPY apps/backend/package*.json ./
RUN npm config set fetch-retry-maxtimeout 600000 -g && npm install

RUN npm install
COPY apps/backend .
ENV PATH /opt/node_modules/.bin:$PATH

RUN ["npm", "run", "build"]
EXPOSE 1337
CMD ["npm", "run", "start"]
