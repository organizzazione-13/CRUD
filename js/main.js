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
    new Persona("Jotaro", "Kujo", "01/02/1970", "medio", "uomo"),
    new Persona("Giorno", "Giovanna", "16/04/1985", "altissimo", "uomo"),
    new Persona("Joseph", "Joestar", "22/09/1920", "alto", "uomo"),
    new Persona("Jolyne", "Cujoh", "14/06/1992", "basso", "donna"),
    new Persona("Josuke", "Higashicata", "23/05/1983", "basso", "uomo"),
    new Persona("Johnny", "Joestar", "09/01/1871", "altissimo", "uomo"),
    new Persona("Jonathan", "Joestar", "04/04/1868", "basso", "uomo"),
    new Persona("Sora", "Keys", "28/03/2003", "basso", "uomo"),
    new Persona("Kairi", "Baragona", "08/12/2003", "altissimo", "donna"),
];

$().ready(function () {
    sortBy('cognome')
    updateRecords();
    $('.needs-validation').on('submit', function (event) {
        if ($('.needs-validation')[0].checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            salvaForm();
            $('.needs-validation')[0].classList.remove('was-validated');
            return;
        }
        $('.needs-validation')[0].classList.add('was-validated');
    });
});

$('#addEntry').hover(function() {
    $(this).html("Aggiungi una riga");
}, function() {
    $(this).html(`<i class="fas fa-plus"></i>`)
})

function sortBy(cosa) {
    if (cosa == 'nome') {
        persone.sort(function (a, b) {
            if (a.nome < b.nome) return -1;
            else if (a.nome > b.nome) return 1;
            else {
                if (a.cognome < b.cognome) return -1;
                else if (a.cognome > b.cognome) return 1;
                else return 0;
            }
        })
    }
    if (cosa == 'cognome') {
        persone.sort(function (a, b) {
            if (a.cognome < b.cognome) return -1;
            else if (a.cognome > b.cognome) return 1;
            else {
                if (a.nome < b.nome) return -1;
                else if (a.nome > b.nome) return 1;
                else return 0;
            }
        })
    }
}

$('#entryForm').on('show.bs.modal', function (event) {
    var id = $(event.relatedTarget).data('scopo')

    if (id == 'new') {
        $('#titoloModalForm').text('Aggiungi nuova persona');
        $('#bodyModalForm input').val('')
    } else {
        $('#titoloModalForm').text('Modifica i dati inseriti');
        $('#nome').val(persone[id].nome)
        $('#cognome').val(persone[id].cognome)
        var nascita = persone[id].nascita.split("/");
        $('#nascita').val(nascita[2] + "-" + nascita[1] + "-" + nascita[0])
        $('#reddito').val(persone[id].reddito)
        $('#sesso').val(persone[id].sesso)
    }
    $('#scopo').val(id)
})

$('#confermaEliminazione').on('show.bs.modal', function (event) {
    var id = $(event.relatedTarget).data('scopo')
    console.log(id)
    $('#delNome').text(persone[id].nome)
    $('#delCognome').text(persone[id].cognome)
    var nascita = persone[id].nascita.split("/");
    $('#delNascita').text(nascita[2] + "-" + nascita[1] + "-" + nascita[0])
    $('#delReddito').text(persone[id].reddito)
    $('#delSesso').text(persone[id].sesso)
    $($('#confermaEliminazione')).find('.delete').attr('onclick', `removeEntry(${id})`)
})

function updateRecords() {
    $('#records').html('');
    c = 0;
    for (let persona of persone) {
        $('#records').append(`
        <tr class="record">
            <td>${persona.nome}</td>
            <td>${persona.cognome}</td>
            <td>${persona.nascita}</td>
            <td>${redditoReale(persona.reddito)}</td>
            <td>${persona.sesso.charAt(0).toUpperCase() + persona.sesso.slice(1)}</td>
            <td>
                <span data-toggle="modal" data-target="#entryForm" data-scopo="${c}">
                    <button type="button" class="btn btn-outline-dark" data-toggle="tooltip" data-placement="left" title="edit"><i class="fas fa-edit"></i></button>
                </span>
                <span data-toggle="modal" data-target="#confermaEliminazione" data-scopo="${c}">
                    <button type="button" class="btn btn-outline-danger" data-toggle="tooltip" data-placement="right" title="delete"><i class="fas fa-trash"></i></button>
                </span>
            </td>
        </tr>
        `);
        c++;
    }
    $('[data-toggle="tooltip"]').tooltip()

}

function removeEntry(id) {
    persone.splice(id, 1);
    $($('.record')[id]).find('[data-toggle="tooltip"]').tooltip('hide')
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

    $('#entryForm').modal('toggle');
    updateRecords()
    return false;
}

function redditoReale(reddito) {
    switch (reddito) {
        case 'basso':
            return '1000-2000 €'
        case 'medio':
            return '2000-3000 €'
        case 'alto':
            return '3000-4000 €'
        case 'altissimo':
            return '4000 o più €'
    }
}