module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },

  test: /\.(jpe?g|gif|png|svg)$/i,
  use: [
    {
      loader: "url-loader",
      options: {
        limit: 10000,
      },
    },
  ],
};
