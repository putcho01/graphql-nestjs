FROM node:14-alpine

WORKDIR /app

COPY . .

RUN cd backend && yarn install