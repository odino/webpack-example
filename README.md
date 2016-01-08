# webpack-example

* blog post coming soon

A silly app used to test how your frontend workflow
can be much simpler through webpack rather than
browserify / gulp.

## Installation

You can run the app through docker:

```
docker-compose build

docker-compose up
```

or directly on your environment:

```
# if you dont have webpack / nodemon installed globally
npm install -g webpack nodemon

cd /path/to/webpack-example

npm install
webpack -p --watch & nodemon app.js
```
