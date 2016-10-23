const express = require('express'),
		app = express();

const port = process.env.PORT || 3000;

const io = require('socket.io').listen(app.listen(port));

require('./app/config')(app, io);
require('./app/middlewares')(app, io);
require('./app/routes')(app, io);

console.log('Chat is running on port: ' + port);