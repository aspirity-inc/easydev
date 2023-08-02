FROM node:16-alpine as build-stage

WORKDIR /client

COPY ./package*.json ./
COPY ./tsconfig.json ./tsconfig.json
COPY ./tsconfig.node.json ./tsconfig.node.json
COPY ./vite.config.ts ./vite.config.ts
COPY ./.storybook ./.storybook
COPY ./nginx ./nginx
COPY ./@types ./@types
COPY ./src ./src

RUN npm install 
RUN npm run build-storybook

FROM nginx:1.21.6-alpine as production-stage

WORKDIR /app

COPY --from=build-stage /client/storybook-static /app
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

ENTRYPOINT ["nginx", "-g", "daemon off;"]