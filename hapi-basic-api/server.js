'use strict';

// Dependencies
const Hapi = require('hapi');

// Create a new server
const server = new Hapi.Server();

// Setup the server with a host and port
server.connection({
    host: 'localhost',
    port: 3000
});

// Declare plugins
var plugins = [{
    register: require('./routes/members.js')
}];

// Register plugins, and start the server if none of them fail
server.register(plugins, function(err) {
    if (err) {
        throw err;
    }

    //Start the server
    server.start((err) => {

        if (err) {
            throw err;
        }
        //Log to the console the host and port info
        console.log(`Server running at: ${server.info.uri}`);
    });
});
