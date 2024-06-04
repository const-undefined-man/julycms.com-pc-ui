ARG NODE_VERSION=20.10.0

# build satge
FROM node:${NODE_VERSION}-alpine as build-stage

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm config set registry https://registry.npmmirror.com/

RUN npm ci

COPY . .

RUN npm run build

# production stage
FROM node:${NODE_VERSION}-alpine as production-stage

WORKDIR /app

COPY --from=build-stage /app/.output /app

ENV NODE_ENV=production

EXPOSE 3001

CMD ["node", "./server/index.mjs"]