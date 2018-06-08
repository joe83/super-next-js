module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "commonjs": true,
    "node": true
  },
  "extends": "eslint:recommended",
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "sourceType": "module"
  },
  "plugins": ["react"],
  "rules": {
    "indent": [2, 2],
    "no-console": "off",
    "react/prop-types": 0,
    "react/jsx-uses-vars": [2]
  }
};
