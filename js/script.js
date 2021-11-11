// Chiedi all’utente il suo nome, poi chiedi il suo cognome, poi chiedi il suo colore preferito. Infine scrivi sulla pagina nomecognomecolorepreferito21

// Chiedo il nome all'utente
const firstName = prompt(`Inserire il vostro nome:`);
console.log(firstName);

if(firstName != null){
    // Chiedo il cognome all'utente
    const lastName = prompt(`Inserire il vostro cognome,
${firstName}:`);
    console.log(lastName);

    if(lastName != null){
        // Chiedo il colore preferito all'utente
        const favColor = prompt(`Inserire il vostro colore preferito,
${firstName} ${lastName}:`)
        console.log(favColor);

        if (favColor != null){
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

            // Apro la domanda (uso una label)
            question: {

            // Se risponde si..    
                if(userAnswer != null && userAnswer == 'si'){
                    // Chiedo la nuova password
                    let newUserPassword = prompt(`Inserisci manualmente la nuova password,
${firstName} ${lastName}:`);
                    console.log(newUserPassword);
                    // La password in output assumerà il valore della nuova
                    userPassword = newUserPassword;
                    console.log(userPassword);
                    // Stampo la password in pagina (nella stringa target dell'h1)
                    document.getElementById('user-password').innerHTML = userPassword;
                    // Interrompo la domanda
                    break question;
                }
                // ..altrimenti   
                else{
                    // Stampo la password in pagina (nella stringa target dell'h1)
                    document.getElementById('user-password').innerHTML = userPassword;
                    // Interrompo la domanda
                    break question;
                }
            }
        }
    }
}









