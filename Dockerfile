FROM node:16

RUN mkdir /app
WORKDIR /app

COPY . .
RUN npm set progress=false && npm install

EXPOSE 39031
CMD ["npm", "run", "dev"]