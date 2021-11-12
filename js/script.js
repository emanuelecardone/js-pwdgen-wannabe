// CONSEGNA

// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito21



// SOLUZIONE


// Chiedo all'utente il suo nome
const firstName = prompt(`Per favore inserire il vostro nome:`);

// Chiedo all'utente il suo cognome
const lastName = prompt(`Per favore inserire il vostro cognome:`);

// Chiedo all'utente il suo colore preferito
const favColor = prompt(`Per favore inserire il vostro colore preferito:`);

// Creo la password
const password = `${firstName}${lastName}${favColor}21`

// Output in pagina
document.getElementById('user-password').innerHTML = `${password}`;