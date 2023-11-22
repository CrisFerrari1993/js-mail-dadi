/*
Gioco dei dadi:

    1)  Generare un numero random da 1 a 6, sia per il giocatore sia per il computer
    2)  Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/
alert('Benvenuto! Oggi tenterai la tua sorte sfidando il Pc a dadi')

let btnConfirm = document.getElementById('premi');

btnConfirm.addEventListener('click',
    function(){
        let tuaScelta = Math.floor((Math.random() * 6) + 1);
        console.log(tuaScelta);
        let pcScelta = Math.floor((Math.random() * 6) + 1);
        console.log(pcScelta);

        if (pcScelta < tuaScelta) {
            console.log('Hai vinto');
            alert('Hai vinto!!!')
            document.getElementById('resoult').innerHTML = 'Hai vinto perchè il dado ha dato: ' + tuaScelta + ' e il quello del pc: ' + pcScelta;
        } else if (tuaScelta === pcScelta) {
            alert('Pare3ggio!!!')
            document.getElementById('resoult').innerHTML = 'Pareggio perchè il dado ha dato: ' + tuaScelta + ' e il quello del pc: ' + pcScelta;
            console.log('Hai perso');
        } else {console.log('Hai vinto');
            alert('Hai Perso!!!')
            document.getElementById('resoult').innerHTML = 'Hai perso perchè il dado ha dato: ' + tuaScelta + ' e il quello del pc: ' + pcScelta;
            console.log('Hai perso');
        }
    }
);

