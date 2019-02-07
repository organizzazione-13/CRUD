// Dichiaro la classe con gli attributi pubblici
class Persona {
    constructor(_nome, _cognome, _nascita, _reddito, _sesso) {
        this.nome = _nome;
        this.cognome = _cognome;
        if (_nascita.includes('/'))
            this.nascita = _nascita;
        else
            this.dataFormattata = _nascita;
        this.reddito = _reddito;
        this.sesso = _sesso;
    }

    redditoNum() {
        switch (this.reddito) {
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

    get dataFormattata() {
        var nascita = this.nascita.split('/');
        return nascita[2] + "-" + nascita[1] + "-" + nascita[0];
    }

    set dataFormattata(val) {
        var nascita = val.split("-");
        this.nascita = nascita[2] + "/" + nascita[1] + "/" + nascita[0];
    }

    redditoVal() {
        switch (this.reddito) {
            case 'basso':
                return '1'
            case 'medio':
                return '2'
            case 'alto':
                return '3'
            case 'altissimo':
                return '4'
        }
    }

    sessoNum() {
        switch (this.sesso) {
            case 'uomo':
                return 1;
            case 'donna':
                return 2;
        }
    }
}

// Istanzio l'array di persone
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
var personePage = [];
var sort = {
    'cosa': 'nome',
    'invertito': false
}

var page = 1;
var resultsPerPage = 13;

var sort = {
    'cosa': 'nome',
    'invertito': false
}

// Appena la pagina si sarà caricata
$().ready(function () {
    $('#sortExpanded').css('display', 'none');
    $('#sortExpanded').css('opacity', 1);
    // sortBy('cognome')
    // Aggiorno il contenuto della tabella
    updateRecords();
});

// Controllo per i campi del form
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

// Animazione bottone per aggiungere righe
$('#addEntry').hover(function () {
    $(this).html("Aggiungi una riga");
}, function () {
    $(this).html(`<i class="fas fa-plus"></i>`)
})

// Modifico il form in base al pulsante premuto per aprirlo
$('#entryForm').on('show.bs.modal', function (event) {
    var id = $(event.relatedTarget).data('scopo')

    if (id == 'new') { // Nuova riga
        $('#titoloModalForm').text('Aggiungi nuova persona');
        $('#bodyModalForm input').val('')
    } else { // Modifica riga
        $('#titoloModalForm').text('Modifica i dati inseriti');
        $('#nome').val(persone[id].nome)
        $('#cognome').val(persone[id].cognome)
        $('#nascita').val(persone[id].dataFormattata)
        $('#reddito').val(persone[id].reddito)
        $('#sesso').val(persone[id].sesso)
    }
    $('#scopo').val(id)
})

// Modifico la riga del modal dell'eliminazione
$('#confermaEliminazione').on('show.bs.modal', function (event) {
    var id = $(event.relatedTarget).data('scopo')
    $('#delNome').text(persone[id].nome)
    $('#delCognome').text(persone[id].cognome)
    $('#delNascita').text(persone[id].nascita)
    $('#delReddito').text(persone[id].redditoNum())
    $('#delSesso').text(persone[id].sesso)
    $($('#confermaEliminazione')).find('.delete').attr('onclick', `removeEntry(${id})`)
})

$('.sort').click(function (evt) {
    $('.sort').removeClass(function (index, className) {
        return (className.match(/\bfa-\S+/g) || []).join(' ');
    })
    $('.sort').addClass('fa-sort')
    switch (evt.target.id) {
        case 'sortNome':
            $('#' + evt.target.id).removeClass('fa-sort')
            if ($('#' + evt.target.id).hasClass('selected')) {
                $('#' + evt.target.id).addClass('fa-sort-alpha-up')
                $('#' + evt.target.id).removeClass('selected')
                sort.invertito = true
            } else {
                $('#' + evt.target.id).addClass('fa-sort-alpha-down')
                $('#' + evt.target.id).addClass('selected')
                sort.invertito = false
            }
            sort.cosa = 'nome'
            updateRecords()
            break;
        case 'sortCognome':
            $('#' + evt.target.id).removeClass('fa-sort')
            if ($('#' + evt.target.id).hasClass('selected')) {
                $('#' + evt.target.id).addClass('fa-sort-alpha-up')
                $('#' + evt.target.id).removeClass('selected')
                sort.invertito = true
            } else {
                $('#' + evt.target.id).addClass('fa-sort-alpha-down')
                $('#' + evt.target.id).addClass('selected')
                sort.invertito = false
            }
            sort.cosa = 'cognome'
            updateRecords()
            break;
        case 'sortNascita':
            $('#' + evt.target.id).removeClass('fa-sort')
            if ($('#' + evt.target.id).hasClass('selected')) {
                $('#' + evt.target.id).addClass('fa-sort-numeric-up')
                $('#' + evt.target.id).removeClass('selected')
                sort.invertito = true
            } else {
                $('#' + evt.target.id).addClass('fa-sort-numeric-down')
                $('#' + evt.target.id).addClass('selected')
                sort.invertito = false
            }
            sort.cosa = 'nascita'
            updateRecords()
            break;
        case 'sortReddito':
            $('#' + evt.target.id).removeClass('fa-sort')
            if ($('#' + evt.target.id).hasClass('selected')) {
                $('#' + evt.target.id).addClass('fa-sort-numeric-up')
                $('#' + evt.target.id).removeClass('selected')
                sort.invertito = true
            } else {
                $('#' + evt.target.id).addClass('fa-sort-numeric-down')
                $('#' + evt.target.id).addClass('selected')
                sort.invertito = false
            }
            sort.cosa = 'reddito'
            updateRecords()
            break;
        case 'sortSesso':
            $('#' + evt.target.id).removeClass('fa-sort')
            if ($('#' + evt.target.id).hasClass('selected')) {
                $('#' + evt.target.id).addClass('fa-sort-amount-up')
                $('#' + evt.target.id).removeClass('selected')
                sort.invertito = true
            } else {
                $('#' + evt.target.id).addClass('fa-sort-amount-down')
                $('#' + evt.target.id).addClass('selected')
                sort.invertito = false
            }
            sort.cosa = 'sesso'
            updateRecords()
            break;
        default:
            console.log(evt.target.id)
    }
})

$('#sortCollapsed').mouseenter(function () {
    $('#sortCollapsed').css('display', 'none');
    $('#sortExpanded').css('display', 'block');
})

$('#sortExpanded').mouseleave(function () {
    $('#sortExpanded').css('display', 'none');
    $('#sortCollapsed').css('display', 'block');
})

// Stampo le righe nella tabella
function updateRecords() {
    sortBy(sort.cosa, sort.invertito)
    $('#records').html('');
    c = 0;
    for (let persona of personePage) {
        $('#records').append(`
        <tr class="record">
            <td>${persona.nome}</td>
            <td>${persona.cognome}</td>
            <td>${persona.nascita}</td>
            <td>${persona.redditoNum()}</td>
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

// Rimuovo una riga dall'array di persone e stampo di nuovo la riga
function removeEntry(id) {
    persone.splice(id, 1);
    $($('.record')[id]).find('[data-toggle="tooltip"]').tooltip('hide')
    updateRecords();
}

// Aggiungo o modifico una riga 
function salvaForm() {
    var id = $('#scopo').val()
    if (id == 'new') {
        persone.push(new Persona($('#nome').val(), $('#cognome').val(), $('#nascita').val(), $('#reddito').val(), $('#sesso').val()))
    } else {
        persone[id] = new Persona($('#nome').val(), $('#cognome').val(), $('#nascita').val(), $('#reddito').val(), $('#sesso').val())
    }
    $('#entryForm').modal('toggle');
    updateRecords()
    return false;
}

function sortBy(cosa, invertito) {
    if (cosa == 'nome') {
        persone.sort(function (a, b) {
            if (a.nome.toLowerCase() < b.nome.toLowerCase()) return -1;
            else if (a.nome.toLowerCase() > b.nome.toLowerCase()) return 1;
            else {
                if (a.cognome.toLowerCase() < b.cognome.toLowerCase()) return -1;
                else if (a.cognome.toLowerCase() > b.cognome.toLowerCase()) return 1;
                else return 0;
            }
        })
        if (invertito)
            persone.reverse()
    }
    if (cosa == 'cognome') {
        persone.sort(function (a, b) {
            if (a.cognome.toLowerCase() < b.cognome.toLowerCase()) return -1;
            else if (a.cognome.toLowerCase() > b.cognome.toLowerCase()) return 1;
            else {
                if (a.nome.toLowerCase() < b.nome.toLowerCase()) return -1;
                else if (a.nome.toLowerCase() > b.nome.toLowerCase()) return 1;
                else return 0;
            }
        })
        if (invertito)
            persone.reverse()
    }
    if (cosa == 'nascita') {
        persone.sort(function (a, b) {
            var nascitaA = a.nascita.split('/')
            var nascitaB = b.nascita.split('/')
            if (parseInt(nascitaA[2]) < parseInt(nascitaB[2])) {
                console.log(parseInt(nascitaA[2]), "<", parseInt(nascitaB[2]), parseInt(nascitaA[2]) < parseInt(nascitaB[2]))
                return -1;
            } else if (parseInt(nascitaA[2]) > parseInt(nascitaB[2])) {
                console.log(parseInt(nascitaA[2]), ">", parseInt(nascitaB[2]), parseInt(nascitaA[2]) > parseInt(nascitaB[2]))
                return 1;
            } else {
                if (parseInt(nascitaA[1]) < parseInt(nascitaB[1])) return -1;
                else if (parseInt(nascitaA[1]) > parseInt(nascitaB[1])) return 1;
                else {
                    if (parseInt(nascitaA[0]) < parseInt(nascitaB[0])) return -1;
                    else if (parseInt(nascitaA[0]) > parseInt(nascitaB[0])) return 1;
                    else return 0;
                }
            }
        })
        if (invertito)
            persone.reverse()
    }
    if (cosa == 'reddito') {
        persone.sort(function (a, b) {
            if (a.redditoNum() < b.redditoNum()) return -1;
            else if (a.redditoNum() > b.redditoNum()) return 1;
            else return 0;
        })
        if (invertito)
            persone.reverse()
    }
    if (cosa == 'sesso') {
        persone.sort(function (a, b) {
            if (a.sessoNum() < b.sessoNum()) return -1;
            else if (a.sessoNum() > b.sessoNum()) return 1;
            else return 0;
        })
        if (invertito)
            persone.reverse()
    }
}

function updatePage(newPage) {
    if(newPage < 1 || newPage > Math.ceil(persone.length / resultsPerPage)) return;
    page = newPage;
    personePage = persone.slice((page - 1) * resultsPerPage, page * resultsPerPage);
    $('#sortCollapsed').text(page)
    $('#pageButtons').html('')
    for (i = page - 2; i < page + 3; i++) {
        if (i != page && i > 0 && i <= Math.ceil(persone.length / resultsPerPage))
            $('#pageButtons').append(`<button type="button" class="btn btn-outline-dark navigation expandedButton pageButton">${i}</button>`)
    }
    updateRecords();

    $('.pageButton').click(function () {
        updatePage($(this).text())
    })
}