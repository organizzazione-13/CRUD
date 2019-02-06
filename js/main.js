class Persona {
    constructor(_nome, _cognome, _nascita, _reddito, _sesso) {
        this.nome = _nome;
        this.cognome = _cognome;
        this.nascita = _nascita;
        this.reddito = _reddito;
        this.sesso = _sesso;
    }
}

var persone = [
    new Persona("Mario 1", "Rossi", "24/01/1990", "basso", "uomo"),
    new Persona("Mario 2", "Rossi", "01/01/1990", "medio", "uomo"),
    new Persona("Mario 3", "Rossi", "01/01/1990", "basso", "donna"),
];

$().ready(updateRecords());

$('#entryForm').on('show.bs.modal', function (event) {
    var id = $(event.relatedTarget).data('scopo')

    if (id == 'new') {
        $('.modal-title').text('Aggiungi nuova persona');
        $('.modal-body input').val('')
    } else {
        $('#nome').val(persone[id].nome)
        $('#cognome').val(persone[id].cognome)
        var nascita = persone[id].nascita.split("/");
        $('#nascita').val(nascita[2] + "-" + nascita[1] + "-" + nascita[0])
        $('#reddito').val(persone[id].reddito)
        $('#sesso').val(persone[id].sesso)
    }
    $('#scopo').val(id)
})



function updateRecords() {
    $('#records').html('');
    c = 0;
    for (let persona of persone) {
        $('#records').append(`
        <tr>
            <td>${persona.nome}</td>
            <td>${persona.cognome}</td>
            <td>${persona.nascita}</td>
            <td>${redditoReale(persona.reddito)}</td>
            <td>${persona.sesso.charAt(0).toUpperCase() + persona.sesso.slice(1)}</td>
            <td>
                <button type="button" class="btn btn-outline-dark" data-toggle="modal" data-target="#entryForm" data-scopo="${c}"><i class="fas fa-edit"></i></button>
                <button type="button" class="btn btn-outline-dark" onclick="removeEntry(${c});"><i class="fas fa-trash"></i></button>
            </td>
        </tr>
        `);
        c++;
    }
}

function removeEntry(id) {
    persone.splice(id, 1);
    updateRecords();
}

function salvaForm() {
    var id = $('#scopo').val()
    var nascita = $('#nascita').val().split("-");
    nascita = nascita[2] + "/" + nascita[1] + "/" + nascita[0];
    if (id == 'new') {
        persone.push(new Persona($('#nome').val(), $('#cognome').val(), nascita, $('#reddito').val(), $('#sesso').val()))
    } else {
        persone[id] = new Persona($('#nome').val(), $('#cognome').val(), nascita, $('#reddito').val(), $('#sesso').val())
    }

    updateRecords()
}

function redditoReale(reddito) {
    switch (reddito) {
        case 'basso':
            return '1000-2000'
        case 'medio':
            return '2000-3000'
        case 'alto':
            return '3000-4000'
        case 'altissimo':
            return '4000 o più'
    }
}

function redditoTestuale(reddito) {

    switch (reddito) {
        case '1000-2000':
            return 'basso'
        case '2000-3000':
            return 'medio'
        case '3000-4000':
            return 'alto'
        case '4000 o più':
            return 'altissimo'
    }
}