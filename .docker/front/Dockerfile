FROM node:16.14-alpine

WORKDIR /usr/src/app

RUN apk update && \
    yarn global add @vue/cli && \
    yarn add quasar @quasar/extras && \
    yarn add -D @quasar/vite-plugin sass@1.32.12

RUN apk add curl

ENV TZ Asia/Tokyo
ENV PATH $HOME/.yarn/bin:$HOME/.config/yarn/global/node_modules/.bin:$PATH
