const withCSS = require('@zeit/next-css');
// const withOffline = require('next-offline');

const nextConfig = {
  env: {
    WEBSOCKET: process.env.WEBSOCKET,
  },
};

// TODO: change to next-offline@5.0.0 after its release and check caching
// https://github.com/hanford/next-offline/pull/204

module.exports = withCSS(nextConfig);
