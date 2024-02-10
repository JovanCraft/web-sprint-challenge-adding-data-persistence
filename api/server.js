// build your server here and require it from index.js
const express = require('express')
const helmet = require('helmet')


const server = express()

server.use(helmet())
server.use(express.json())


server.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
      message: err.message,
    });
  });

  module.exports = server;
