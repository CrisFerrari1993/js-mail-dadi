/*
Gioco dei dadi:

    1)  Generare un numero random da 1 a 6, sia per il giocatore sia per il computer
    2)  Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

let tuaScelta = Math.floor((Math.random() * 6) + 1);
console.log(tuaScelta);
let pcScelta = Math.floor((Math.random() * 6) + 1);
console.log(pcScelta);

if (pcScelta < tuaScelta) {
    console.log('Hai vinto');
} else if (tuaScelta === pcScelta) {
    console.log('Pareggio');
} else {
    console.log('Hai perso');
}