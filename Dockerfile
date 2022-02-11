FROM node:16-alpine

COPY . /mycolab-ui

WORKDIR /mycolab-ui

RUN apk update && apk add bash

RUN npm ci

RUN npm run build

EXPOSE 3000

CMD ["node", "./build"]
