module.exports = {
  extends: 'airbnb/base',
  plugins: [
  ],
  env: {
    mocha: true,
  },
  rules: {
    curly: [2, 'all'],
  },
  globals: {
    __DEVELOPMENT__: false,
    __PRODUCTION__: false,
  },
};
