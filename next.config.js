const withCSS = require('@zeit/next-css');
// const withOffline = require('next-offline');

const nextConfig = {
  env: {
    WEBSOCKET: process.env.WEBSOCKET,
  },
};

module.exports = withCSS(nextConfig);
