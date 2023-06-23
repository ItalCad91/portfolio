// Import the 'debug' module and log a debug message with the name 'comp-229'
import debug from 'debug';
debug('Portfolio');

// Import the 'http' module
import http from 'http';

// Import the app module located in './app/app.js'
import app from './app/app.js';



// Define a constant variable named 'PORT', which is either set to the value of the environment variable 'PORT' or to the value 3000 if the environment variable is not set
const PORT = normalizePort(process.env.PORT || 3000);

// Configure the app object to use the port specified in the 'PORT' variable
app.set('port', PORT);

// Create an HTTP server using the 'http.createServer()' method and passing in the app object as an argument
const server = http.createServer(app);

// Set the server to listen on the specified port using the 'server.listen()' method
server.listen(PORT);

// Handle the server's 'error' event using the 'onError()' function
server.on('error', onError);

// Handle the server's 'listening' event using the 'onListening()' function
server.on('listening', onListening);

// Define the 'normalizePort()' function, which takes in a value and returns either that value (if it's not a number) or the parsed integer value of that string
function normalizePort(val) {
    var port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }

    return false;
}

// Define the 'onError()' function, which takes in an error object and handles specific types of errors with specific messages and actions
function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    let bind = typeof PORT === 'string'
        ? 'Pipe ' + PORT
        : 'Port ' + PORT;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}


// Define the 'onListening()' function, which logs a debug message indicating that the server is listening on the specified port
function onListening() 
{
  let addr = server.address();
  let bind = 'pipe ' + addr;
  debug('Listening on ' + bind);
}
