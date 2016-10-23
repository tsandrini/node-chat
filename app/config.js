const express = require('express');

module.exports = function(app, io) {

	app.set('view engine', 'twig');

	app.engine('twig', require('node-twig').renderFile);

	app.set('views', './views');

	app.use(express.static('./public'));

	console.log('Config loaded');
};