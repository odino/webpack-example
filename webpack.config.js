var ManifestPlugin = require('webpack-manifest-plugin')

module.exports = {
    context: __dirname + "/client",
    entry: "./index",
    output: {
        path: __dirname + "/public",
        filename: "index-[hash].js"
    },
    plugins: [
      new ManifestPlugin()
    ]
}
