FROM node:8-alpine

WORKDIR /app

COPY package.json /app/
COPY . /app

VOLUME /data

RUN yarn --production --non-interactive --silent \
    && yarn cache clean

CMD ["yarn", "start"]
