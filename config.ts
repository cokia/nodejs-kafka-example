require('dotenv').config({ path: `${__dirname}/.env` });

export default {
  clientId: process.env.CLIENT_ID || 'nodejs-example-client-app',
  brokers: process.env.BROKERS || 'localhost:9092',
}