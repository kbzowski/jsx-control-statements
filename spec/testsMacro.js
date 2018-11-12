require("@babel/register")({
  presets: ["@babel/preset-react"],
  plugins: ["babel-plugin-macros"],
  cache: false
});

require("./test/macro");
