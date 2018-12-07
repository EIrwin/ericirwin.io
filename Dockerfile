FROM node:10
MAINTAINER Eric Irwin <Eric.Irwin1124@gmail.com>

WORKDIR /usr/src/app

COPY package.json yarn.lock /usr/src/app/
RUN yarn
COPY . /usr/src/app

ENV NODE_ENV production

EXPOSE 8080
CMD ["yarn", "serve:build"]
