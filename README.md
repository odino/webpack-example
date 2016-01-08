# webpack-example

A silly app used to test how your frontend workflow
can be much simpler through webpack rather than
browserify / gulp.

## Installation

You can run the app through docker:

```
docker build -t webpack-example .

docker run -ti -p 8080:8080 webpack-example
```

or directly on your environment:

```
# if you dont have webpack installed globally
npm install -g webpack

npm install
webpack -p
node app.js
```

## Missing

* reload on changes, both server and client
