//Mail:
// Chiedi all’utente la sua email
//  - controlla che sia nella lista di chi può accedere 
//  -stampa un messaggio appropriato sull’esito del controllo.


const sendBtn = document.querySelector('.send');

 sendBtn.addEventListener('click',

    function() {
        const userMail = document.querySelector('.mailContainer').value;

        const mailList = ['mail1@mail.com', 'mail2@mail.com', 'mail3@mail.com', 'mail4@mail.com', 'mail5@mail.com'];
        
        let logged = false;

        for (let i = 0; i < mailList.length; i++) {

            if (userMail == mailList[i]){
                logged = true;
            };
        }

        if(logged === true){
            alert('Welcome User')
        } else {
            alert('Access Denied')
        }
    }


 );