//Mail:
// Chiedi all’utente la sua email
//  - controlla che sia nella lista di chi può accedere 
//  -stampa un messaggio appropriato sull’esito del controllo.

//Creo variabile bottone
const sendBtn = document.querySelector('.send');
//creo un event listener per il click ddel bottone
 sendBtn.addEventListener('click',

    function() {
        //input mail dall'utente
        const userMail = document.querySelector('.mailContainer').value;
        //email array list
        const mailList = ['mail1@mail.com', 'mail2@mail.com', 'mail3@mail.com', 'mail4@mail.com', 'mail5@mail.com'];
        //riconosciuto dalla lista?
        let logged = false;
        //loop per controllare la mail se è in lista
        for (let i = 0; i < mailList.length; i++) {
            //se è in lista ritornna true
            if (userMail == mailList[i]){
                logged = true;
            };
        }
        //se e in lista verra riconosciuto altrimenti 'Access denied'
        if(logged === true){
            alert('Welcome User')
        } else {
            alert('Access Denied')
        }
    }


 );