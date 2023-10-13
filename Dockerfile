FROM node:18-alpine AS builder
COPY . ./tea
WORKDIR /tea
RUN npm i --force
RUN $(npm bin)/ng build
