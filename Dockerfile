FROM mhart/alpine-node:5.3.0

MAINTAINER alessandro.nadalin@gmail.com

RUN npm install -g webpack

COPY . /src
WORKDIR /src

RUN npm install

EXPOSE 8080

RUN webpack -p
CMD node app.js
