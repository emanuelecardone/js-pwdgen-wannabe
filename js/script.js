// Chiedi all’utente il suo nome, poi chiedi il suo cognome, poi chiedi il suo colore preferito. Infine scrivi sulla pagina nomecognomecolorepreferito21

// Mi preparo un messaggio di errore
const errorMessage = `Errore, almeno un carattere richiesto`

// Apro la domanda (uso una label)
question: {
    // Chiedo il nome all'utente
    const firstName = prompt(`Inserire il vostro nome:`);

    if(firstName != null && firstName != ''){
        // Chiedo il cognome all'utente
        const lastName = prompt(`Inserire il vostro cognome,
${firstName}:`);
        console.log(lastName);
    
        if(lastName != null && lastName != ''){
            // Chiedo il colore preferito all'utente
            const favColor = prompt(`Inserire il vostro colore preferito,
${firstName} ${lastName}:`)
            console.log(favColor);
    
            if (favColor != null && favColor != ''){
                // Creo il numero 21 come variabile
                const passNumber = 21;
                console.log(passNumber);
    
                // Trasformo il passNumber in una stringa
                const passNumberAsString = passNumber.toString();
                console.log(passNumberAsString);
    
                // Creo la password (uso un let perché la password può variare nel tempo)
                let userPassword = `${firstName}${lastName}${favColor}${passNumberAsString}`
                console.log(userPassword);
    
                // Chiedo all'utente se vuole cambiare password
                let userAnswer = prompt(`La tua passowrd è: ${userPassword}
Vuoi cambiare password? (Rispondi si o no)`);
                console.log(userAnswer);
    
                // Se risponde si..    
                if(userAnswer != null && userAnswer != '' && userAnswer == 'si'){
                    // Chiedo la nuova password
                    let newUserPassword = prompt(`Inserisci manualmente la nuova password,
${firstName} ${lastName}:`);
                    console.log(newUserPassword);
                    
                        if(newUserPassword != null && newUserPassword != ''){
                            // La password in output assumerà il valore della nuova
                            userPassword = newUserPassword;
                            console.log(userPassword);
                            // Stampo la password in pagina (nella stringa target dell'h1)
                            document.getElementById('user-password').innerHTML = userPassword;
                            // Interrompo la domanda
                            break question;
                        }
                        // Messaggio di errore per testo vuoto o nullo + interruzione della label
                        else{
                            document.getElementById('answer-error').innerHTML = errorMessage;
                            document.getElementById('answer').style.display = 'none';
                            break question;
                        }
                }
                // ..altrimenti   
                else{
                    if(userAnswer == 'no'){
                    // Stampo la password in pagina (nella stringa target dell'h1)
                    document.getElementById('user-password').innerHTML = userPassword;
                    // Interrompo la domanda
                    break question;
                    }
                    else{
                        document.getElementById('answer-error').innerHTML = errorMessage;
                        document.getElementById('answer').style.display = 'none';
                        break question;
                    }
                }   
            }
            else{
                document.getElementById('answer-error').innerHTML = errorMessage;
                document.getElementById('answer').style.display = 'none';
                break question;
            }
        }
        else{
            document.getElementById('answer-error').innerHTML = errorMessage;
            document.getElementById('answer').style.display = 'none';
            break question;
        }
    }
    else{
        document.getElementById('answer-error').innerHTML = errorMessage;
        document.getElementById('answer').style.display = 'none';
        break question; 
    }
}   



