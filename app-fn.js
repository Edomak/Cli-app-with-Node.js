const fs = require('fs');
const chalk = require('chalk');

function getCliente(nome) {
    const clientiJSON = fs.readFileSync('clienti.json', 'utf-8'),
        clienti = JSON.parse(clientiJSON),
        cliente = clienti.find(clienteItem => clienteItem.nome === nome),
        ris = { status: false, suggerimenti: '', cliente: null };
    
    if (!cliente) {
        clienti.map(clienteItem => {
            if (clienteItem.nome[0] === nome[0]) {
                ris.suggerimenti += `${clienteItem.nome} `;
            }
        });
        return ris;
    }

    ris.status = true;
    ris.cliente = cliente;
    return ris;
};

function addCliente({nome, email, telefono}) {
    const clientiJSON = fs.readFileSync('clienti.json', 'utf-8'),
        clienti = JSON.parse(clientiJSON);
        
        clienti.push({nome, email, telefono});
        fs.writeFileSync('clienti.JSON', JSON.stringify(clienti));
        console.log(clienti);
};

function delCliente(nome) {
    const clientiJSON = fs.readFileSync('clienti.json', 'utf-8'),
        clienti = JSON.parse(clientiJSON);

    clienteIndex = clienti.findIndex(cliente => cliente.nome === nome);
    if (clienteIndex === -1) {
        console.log('Cliente non trovato :(');
        return;
    }
    clienti.splice(clienteIndex, 1);
    fs.writeFileSync('clienti.json', JSON.stringify(clienti));
    console.log(clienti, chalk.red.bold('Cliente eliminato correttamente! :D'));
}

module.exports = { getCliente, addCliente, delCliente };