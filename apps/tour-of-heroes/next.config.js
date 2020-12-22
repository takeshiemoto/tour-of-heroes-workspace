const withNx = require('@nrwl/next/plugins/with-nx');
const dotenv = require('dotenv');
dotenv.config();

module.exports = withNx({
  target: 'serverless',
  env: {
    API_URL: process.env.API_URL,
    DEV_API_URL: process.env.DEV_API_URL,
  },
});
