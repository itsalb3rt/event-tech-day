FROM node:10-alpine

COPY node_modules /app/node_modules
COPY dist /app

WORKDIR /app

EXPOSE 3000

ENV PASSWORD ''
ENV USER root
ENV HOST localhost

ENTRYPOINT [ "node", "index.js" ]