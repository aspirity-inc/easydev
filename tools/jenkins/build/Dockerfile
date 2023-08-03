FROM node:16.14.2-alpine as build-stage

WORKDIR /client


COPY ./package*.json ./

RUN CI=1 npm clean-install 

COPY ./tsconfig.json ./tsconfig.json
COPY ./tsconfig.node.json ./tsconfig.node.json
COPY ./vite.config.ts ./vite.config.ts
COPY ./.storybook ./.storybook
COPY ./@types ./@types
COPY ./src ./src

ENV NODE_ENV=production
RUN --mount=type=cache,mode=0777,target=/client/node_modules/.cache npm run build-storybook


FROM nginx:1.21.6-alpine as production-stage

WORKDIR /app
ENV NODE_ENV=production

COPY --from=build-stage /client/storybook-static /app
COPY tools/nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 3000
ENV PORT=3000

ENTRYPOINT ["nginx", "-g", "daemon off;"]