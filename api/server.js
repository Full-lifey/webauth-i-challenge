const express = require('express');

const userRouter = require('../users/users-router.js');
const authenticate = require('../auth/auth-middleware.js');
const setupGlobalMiddleware = require('./setup-middleware');

const server = express();

setupGlobalMiddleware(server);

server.use('/api', userRouter);
server.use('/restricted', authenticate);

module.exports = server;
