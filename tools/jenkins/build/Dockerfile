FROM node:18.17.0-alpine as build-stage

WORKDIR /client

COPY package.json package-lock.json  ./

RUN npm install

COPY tsconfig.json tsconfig.node.json vite.config.ts .storybook @types src public ./

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
