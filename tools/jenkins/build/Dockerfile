FROM node:16-alpine as build-stage

WORKDIR /client

COPY ./package*.json ./

RUN npm install 

COPY ./tsconfig.json ./tsconfig.json
COPY ./tsconfig.node.json ./tsconfig.node.json
COPY ./vite.config.ts ./vite.config.ts
COPY ./.storybook ./.storybook
COPY ./@types ./@types
COPY ./src ./src

ENV NODE_ENV=production
RUN npm run build-storybook

FROM nginx:1.21.6-alpine as production-stage

WORKDIR /app

COPY --from=build-stage /client/storybook-static /app

COPY tools/jenkins/build/nginx/default.conf /etc/nginx/conf.d/default.conf


EXPOSE 3000
ENV PORT=3000
ENTRYPOINT ["nginx", "-g", "daemon off;"]