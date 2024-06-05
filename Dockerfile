ARG NODE_VERSION=20.13.0

# build satge
FROM node:${NODE_VERSION}-alpine as build-stage

WORKDIR /app

COPY package*.json .

RUN npm config set registry https://registry.npmmirror.com/

RUN npm install

COPY . .

RUN npm run build

# production stage
FROM node:${NODE_VERSION}-alpine as production-stage

WORKDIR /app

COPY --from=build-stage /app/.output .

EXPOSE 3000

CMD ["node", "./server/index.mjs"]