const path = require("path");

module.exports = {
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index.bundle.js",
    library: ["Biometrics"],
  },
  devServer: {
    port: 3010,
  },
  watchOptions: {
    ignored: /node_modules/,
  },
  module: {
    rules: [
      // js and jsx laoder using babel
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      // css laoder with style loader and css loader
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      // image file loader
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "assets/[contenthash].[ext]",
            },
          },
        ],
      },
      // svg loader
      {
        test: /\.svg$/,
        use: [
          {
            loader: "svg-url-loader",
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
