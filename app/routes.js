module.exports = function(app, io) {

	app.get('/', function(req, res) {

		renderMain(res);

	});

	app.get('chat', function(req, res) {

		renderMain(res);
	});

	io.on('connection', function(socket) {

		var address = socket.request.connection.remoteAddress;

		console.log('User with address: ' + address + ' has connected');

		socket.on('disconnect', function() {

			console.log('User with address: ' + address + ' has disconnected');

		});

		socket.on('chat message', function(msg) {

			console.log('Message: ' + msg);
			io.emit('chat message', msg);

		});

	});


	console.log('Routes loaded');
};


function renderMain(res) {
	res.render('chat.twig', {
		context: {
			title: 'Cool Chaterino'
		}
	});
}