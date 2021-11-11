// Chiedi all’utente il suo nome, poi chiedi il suo cognome, poi chiedi il suo colore preferito. Infine scrivi sulla pagina nomecognomecolorepreferito21


// Setto tutte le stringhe come vuote di partenza (mi servirà per i while)
let firstName = '';
let lastName = '';
let favColor = '';
let userAnswer = '';
let newUserPassword = '';



while(userAnswer != 'si' && userAnswer != 'no'){

    // Chiedo il nome all'utente ed uso i while per ogni campo in modo da far ripetere l'azione per eventuali input vuoti
    while(firstName == ''){
        firstName = prompt(`Inserire il vostro nome:`);
        console.log(firstName); 
    }
    
    // Chiedo il cognome all'utente
    while(lastName == ''){
        lastName = prompt(`Inserire il vostro cognome,
${firstName}:`);
        console.log(lastName); 
    }
    
    // Chiedo il colore preferito all'utente
    while(favColor == ''){
        favColor = prompt(`Inserire il vostro colore preferito,
${firstName} ${lastName}:`)
        console.log(favColor); 
    }
    
    // Creo il numero 21 come variabile
    const passNumber = 21;
    console.log(passNumber);

    // Trasformo il passNumber in una stringa
    const passNumberAsString = passNumber.toString();
    console.log(passNumberAsString);

    // Creo la password (uso un let perché la password può variare nel tempo)
    let userPassword = `${firstName}${lastName}${favColor}${passNumberAsString}`
    console.log(userPassword);
    
    // Chiedo all'utente se vuole cambiare password (ho usato while == si altrimenti appena rispondo 'si' il ciclo si chiude, poi lo chiuderò io con un break)
    while(userAnswer == '' || userAnswer == 'si'){
        userAnswer = prompt(`La tua passowrd è: ${userPassword}
Vuoi cambiare password? (Rispondi si o no)`);
        console.log(userAnswer);

        // Se risponde si    
        if(userAnswer == 'si'){
            // Chiedo la nuova password
            while(newUserPassword == ''){
                newUserPassword = prompt(`Inserisci manualmente la nuova password,
${firstName} ${lastName}:`);
                console.log(newUserPassword);
            }
            // La password assumerà il valore della nuova
            userPassword = newUserPassword;
            console.log(userPassword);
            break;
        } 
    }
    
    // Output finale
    document.getElementById('user-password').innerHTML = userPassword;
}


    
          
                
                

                    
            
        




