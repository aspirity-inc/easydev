FROM node:16-alpine as build-stage

ENV NODE_ENV production

WORKDIR /usr/app

COPY ./package*.json ./
COPY ./.storybook ./.storybook
COPY ./nginx ./nginx
COPY ./@types ./@types
COPY ./src ./src

RUN npm install 
# --only=production
RUN npm run build-storybook

FROM nginx:1.21.6-alpine as production-stage

WORKDIR /usr/app

COPY --from=build-stage /usr/app/storybook-static ./ 
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

# CMD ["/bin/bash", "-c", "exec nginx -g 'daemon off;'"]
ENTRYPOINT ["nginx", "-g", "daemon off;"]