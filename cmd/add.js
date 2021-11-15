const fs = require('fs');

function add(yargs) {
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
};

function addCliente({nome, email, telefono}) {
    const clientiJSON = fs.readFileSync('clienti.json', 'utf-8'),
        clienti = JSON.parse(clientiJSON);
        
        clienti.push({nome, email, telefono});
        fs.writeFileSync('clienti.JSON', JSON.stringify(clienti));
        console.log(clienti);
};

module.exports = add;