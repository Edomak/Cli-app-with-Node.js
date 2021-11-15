const yargs = require('yargs');
const get = require('./cmd/get');
const add = require('./cmd/add');
const del = require('./cmd/del');

// Ricerca cliente:

get(yargs); 

// Aggiunta cliente:

add(yargs);

// Cancellazione cliente:

del(yargs);


yargs.parse();