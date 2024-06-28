# Dockerfile for the API service
FROM node:20.2.0

RUN npm install -g nodemon

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 8081

CMD ["npm","run" ,"start"]
