const chalk = require('chalk');
const yargs = require('yargs');
const { getCliente, addCliente, delCliente } = require('./app-fn');

yargs.command({
    command: 'get',
    describe: 'Ricerca del cliente in base al suo nome',
    builder: {
        nome: {
            describe: 'Nome del cliente da ricercare',
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv) {
       const ris = getCliente(argv.nome);
       if (ris.status) {
           console.log(chalk.green.bold('Cliente trovato: :)\n'));
           console.log(ris.cliente);
       } else {
        console.log(chalk.red.bold('Cliente non trovato  Forse cercavi: ;)\n'));
        console.log(ris.suggerimenti);
       }
    }
});

yargs.command({
    command: 'add',
    describe: 'Aggiunta nuovo cliente',
    builder: {
        nome: {
            describe: 'Nome del cliente da aggiungere',
            demandOption: true,
            type: 'string'
        },
        email: {
            describe: 'Email del cliente da aggiungere',
            demandOption: true,
            type: 'string'
        },
        telefono: {
            describe: 'telefono del cliente da aggiungere',
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv) {
        addCliente(argv);
    }
});

yargs.command({
    command: 'del',
    describe: 'Cancellazione del cliente in base al suo nome',
    builder: {
        nome: {
            describe: 'Nome del cliente da cancellare',
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv) {
       delCliente(argv.nome);
    }
});

yargs.parse();