FROM node:16.14-alpine

RUN apk update && \
    yarn global add @vue/cli
RUN apk add curl

ENV TZ Asia/Tokyo
ENV PATH $HOME/.yarn/bin:$HOME/.config/yarn/global/node_modules/.bin:$PATH

WORKDIR /usr/src/app