FROM node:18-alpine AS builder
COPY . ./tea
WORKDIR /tea
RUN npm i --force
RUN $(npm bin)/ng build

FROM nginx:1.15.8-alpine
COPY --from=builder /tea/dist/tea/ /usr/share/nginx/html