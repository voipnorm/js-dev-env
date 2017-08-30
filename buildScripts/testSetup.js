//This file isn't transpiled, so must usCommonJS and ES5

//Register babel to transpile before our tests run
require('babel-register')();

//Disable webpack features that Mocha doesn't understand.
require.extensions['.css'] = function() {};



