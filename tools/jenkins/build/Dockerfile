FROM node:18.17.0-alpine as build-stage

WORKDIR /client

COPY ./package.json ./package-lock.json  ./

RUN npm install

COPY ./tsconfig.json ./tsconfig.json
COPY ./tsconfig.node.json ./tsconfig.node.json
COPY ./vite.config.ts ./vite.config.ts
COPY ./.storybook ./.storybook
COPY ./@types ./@types
COPY ./src ./src

ENV NODE_ENV=production
RUN npm run build-storybook


FROM nginx:1.21.6-alpine as production

WORKDIR /app
ENV NODE_ENV=production

COPY --from=build-stage /client/storybook-static /app
COPY tools/nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
ENV PORT=80

ENTRYPOINT ["nginx", "-g", "daemon off;"]
