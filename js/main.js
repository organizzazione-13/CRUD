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
    new Persona("Dio", "Brando", "01/02/1868", "basso", "uomo"),
    new Persona("Sora", "Keys", "28/03/2003", "basso", "uomo"),
    new Persona("Kairi", "Baragona", "08/12/2003", "altissimo", "donna"),

    new Persona("Mario 0", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 1", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 2", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 3", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 4", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 5", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 6", "Rossi", "01/01/1970", "basso", "uomo"),
    /*
    new Persona("Mario 7", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 8", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 9", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 10", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 11", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 12", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 13", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 14", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 15", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 16", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 17", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 18", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 19", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 20", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 21", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 22", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 23", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 24", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 25", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 26", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 27", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 28", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 29", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 30", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 31", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 32", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 33", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 34", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 35", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 36", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 37", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 38", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 39", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 40", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 41", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 42", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 43", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 44", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 45", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 46", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 47", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 48", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 49", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 50", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 51", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 52", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 53", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 54", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 55", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 56", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 57", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 58", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 59", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 60", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 61", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 62", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 63", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 64", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 65", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 66", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 67", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 68", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 69", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 70", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 71", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 72", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 73", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 74", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 75", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 76", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 77", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 78", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 79", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 80", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 81", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 82", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 83", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 84", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 85", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 86", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 87", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 88", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 89", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 90", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 91", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 92", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 93", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 94", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 95", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 96", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 97", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 98", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 99", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 100", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 101", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 102", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 103", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 104", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 105", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 106", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 107", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 108", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 109", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 110", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 111", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 112", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 113", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 114", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 115", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 116", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 117", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 118", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 119", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 120", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 121", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 122", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 123", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 124", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 125", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 126", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 127", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 128", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 129", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 130", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 131", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 132", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 133", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 134", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 135", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 136", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 137", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 138", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 139", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 140", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 141", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 142", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 143", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 144", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 145", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 146", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 147", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 148", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 149", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 150", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 151", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 152", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 153", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 154", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 155", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 156", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 157", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 158", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 159", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 160", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 161", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 162", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 163", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 164", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 165", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 166", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 167", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 168", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 169", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 170", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 171", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 172", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 173", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 174", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 175", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 176", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 177", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 178", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 179", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 180", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 181", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 182", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 183", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 184", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 185", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 186", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 187", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 188", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 189", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 190", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 191", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 192", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 193", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 194", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 195", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 196", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 197", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 198", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 199", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 200", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 201", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 202", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 203", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 204", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 205", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 206", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 207", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 208", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 209", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 210", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 211", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 212", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 213", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 214", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 215", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 216", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 217", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 218", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 219", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 220", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 221", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 222", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 223", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 224", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 225", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 226", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 227", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 228", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 229", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 230", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 231", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 232", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 233", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 234", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 235", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 236", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 237", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 238", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 239", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 240", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 241", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 242", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 243", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 244", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 245", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 246", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 247", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 248", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 249", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 250", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 251", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 252", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 253", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 254", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 255", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 256", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 257", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 258", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 259", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 260", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 261", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 262", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 263", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 264", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 265", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 266", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 267", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 268", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 269", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 270", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 271", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 272", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 273", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 274", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 275", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 276", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 277", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 278", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 279", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 280", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 281", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 282", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 283", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 284", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 285", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 286", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 287", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 288", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 289", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 290", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 291", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 292", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 293", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 294", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 295", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 296", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 297", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 298", "Rossi", "01/01/1970", "basso", "uomo"),
    new Persona("Mario 299", "Rossi", "01/01/1970", "basso", "uomo"),*/
];
var personePage = [];
var personeCercate;
var sort = {
    'cosa': 'nome',
    'invertito': false
}
var prevSearch = '';
var page = 1;
var resultsPerPage = 13;

// Appena la pagina si sarà caricata
$().ready(function () {
    search();
    updatePage(1)
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

$('#firstPage').click(function () {
    updatePage(1)
})

$('#previousPage').click(function () {
    updatePage(page - 1)
})

$('#nextPage').click(function () {
    updatePage(page + 1)
})

$('#lastPage').click(function () {
    updatePage(Math.ceil(persone.length / resultsPerPage))
})

$('.search_input').keyup(function () {
    search($(this).val())
})

// Stampo le righe nella tabella
function updateRecords() {
    personePage = personeCercate.slice((page - 1) * resultsPerPage, page * resultsPerPage);
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
                <span data-toggle="modal" data-target="#entryForm" data-scopo="${persone.indexOf(persona)}">
                    <button type="button" class="btn btn-outline-dark" data-toggle="tooltip" data-placement="left" title="edit"><i class="fas fa-edit"></i></button>
                </span>
                <span data-toggle="modal" data-target="#confermaEliminazione" data-scopo="${persone.indexOf(persona)}">
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
    sortedPersone = persone;
    $($('.record')[id]).find('[data-toggle="tooltip"]').tooltip('hide')
    search();
}

// Aggiungo o modifico una riga 
function salvaForm() {
    var id = $('#scopo').val()
    if (id == 'new') {
        persone.push(new Persona($('#nome').val(), $('#cognome').val(), $('#nascita').val(), $('#reddito').val(), $('#sesso').val()))
    } else {
        persone[id] = new Persona($('#nome').val(), $('#cognome').val(), $('#nascita').val(), $('#reddito').val(), $('#sesso').val())
    }
    sortedPersone = persone;
    $('#entryForm').modal('toggle');
    search()
    return false;
}

function sortBy(cosa, invertito) {
    if (cosa == 'nome') {
        personePage.sort(function (a, b) {
            if (a.nome.toLowerCase() < b.nome.toLowerCase()) return -1;
            else if (a.nome.toLowerCase() > b.nome.toLowerCase()) return 1;
            else {
                if (a.cognome.toLowerCase() < b.cognome.toLowerCase()) return -1;
                else if (a.cognome.toLowerCase() > b.cognome.toLowerCase()) return 1;
                else return 0;
            }
        })
        if (invertito)
            personePage.reverse()
    }
    if (cosa == 'cognome') {
        personePage.sort(function (a, b) {
            if (a.cognome.toLowerCase() < b.cognome.toLowerCase()) return -1;
            else if (a.cognome.toLowerCase() > b.cognome.toLowerCase()) return 1;
            else {
                if (a.nome.toLowerCase() < b.nome.toLowerCase()) return -1;
                else if (a.nome.toLowerCase() > b.nome.toLowerCase()) return 1;
                else return 0;
            }
        })
        if (invertito)
            personePage.reverse()
    }
    if (cosa == 'nascita') {
        personePage.sort(function (a, b) {
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
            personePage.reverse()
    }
    if (cosa == 'reddito') {
        personePage.sort(function (a, b) {
            if (a.redditoNum() < b.redditoNum()) return -1;
            else if (a.redditoNum() > b.redditoNum()) return 1;
            else return 0;
        })
        if (invertito)
            personePage.reverse()
    }
    if (cosa == 'sesso') {
        personePage.sort(function (a, b) {
            if (a.sessoNum() < b.sessoNum()) return -1;
            else if (a.sessoNum() > b.sessoNum()) return 1;
            else return 0;
        })
        if (invertito)
            personePage.reverse()
    }
}

function updatePage(newPage) {
    if (newPage < 1) {
            return;
    }
    if(newPage > Math.ceil(personeCercate.length / resultsPerPage)) page = Math.ceil(personeCercate.length / resultsPerPage)
    else page = newPage;
    personePage = persone.slice((page - 1) * resultsPerPage, page * resultsPerPage);
    $('#sortCollapsed').text(page)
    $('#pageButtons').html('')
    for (i = page - 2; i < page + 3; i++) {
        if (i != page && i > 0 && i <= Math.ceil(personeCercate.length / resultsPerPage))
            $('#pageButtons').append(`<button type="button" class="btn btn-outline-dark navigation expandedButton pageButton">${i}</button>`)
    }
    updateRecords();

    $('.pageButton').click(function () {
        updatePage($(this).text())
    })
}

function search(text = prevSearch) {
    prevSearch = text;
    personeCercate = [];
    text = text.trim()
    persone.forEach((el) => {
        if (el.nome.toLowerCase().includes(text.toLowerCase()) || el.cognome.toLowerCase().includes(text.toLowerCase()) || el.nascita.includes(text) || el.sesso.toLowerCase().includes(text.toLowerCase()) || el.redditoNum().includes(text)) {
            personeCercate.push(el)
        }
    })
    updatePage(page)
}