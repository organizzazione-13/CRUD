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
    new Persona("Mario 1", "Rossi", "01/01/1990", "1000-2000", "Maschio"),
    new Persona("Mario 2", "Rossi", "01/01/1990", "1000-2000", "Maschio"),
    new Persona("Mario 3", "Rossi", "01/01/1990", "1000-2000", "Maschio"),
    new Persona("Mario 4", "Rossi", "01/01/1990", "1000-2000", "Maschio"),
    new Persona("Mario 5", "Rossi", "01/01/1990", "1000-2000", "Maschio"),
    new Persona("Mario 6", "Rossi", "01/01/1990", "1000-2000", "Maschio"),
    new Persona("Mario 7", "Rossi", "01/01/1990", "1000-2000", "Maschio"),
    new Persona("Mario 8", "Rossi", "01/01/1990", "1000-2000", "Maschio"),
    new Persona("Mario 9", "Rossi", "01/01/1990", "1000-2000", "Maschio"),
    new Persona("Mario 10", "Rossi", "01/01/1990", "1000-2000", "Maschio"),
];

$().ready(updateRecords());

function updateRecords() {
    for (let persona of persone) {
        $('#records').append(`
        <tr>
            <td>${persona.nome}</td>
            <td>${persona.cognome}</td>
            <td>${persona.nascita}</td>
            <td>${persona.reddito}</td>
            <td>${persona.sesso}</td>
            <td>
                <button type="button" class="btn btn-outline-dark"><i class="fas fa-cog"></i></button>
                <button type="button" class="btn btn-outline-dark"><i class="fas fa-trash"></i></button>
            </td>
        </tr>
        `)
    }
}