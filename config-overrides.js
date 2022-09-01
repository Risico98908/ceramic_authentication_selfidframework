/* config-overrides.js */


/*
//EXAMPLE
module.exports = function override(config, env) {
  //do stuff with the webpack config...
  return config;
}

*/



//case: load mjs with react
module.exports = function override(webpackConfig) {
  webpackConfig.module.rules.push({
    test: /\.mjs$/,
    include: /node_modules/,
    type: "javascript/auto"
  });

  return webpackConfig;
}



/* package.json */
/*
  "scripts": {
-   "start": "react-scripts start",
+   "start": "react-app-rewired start",
-   "build": "react-scripts build",
+   "build": "react-app-rewired build",
-   "test": "react-scripts test",
+   "test": "react-app-rewired test",
    "eject": "react-scripts eject"
}

*/