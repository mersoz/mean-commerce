const port = process.env.PORT || 3000
const env = process.env.NODE_ENV || 'development';
const dbURI = process.env.MONGODB_URI || `mongodb://localhost/mean-demo`;
const secret = process.env.SECRET || 'Super secret ';

module.exports = { port, env, dbURI, secret };
