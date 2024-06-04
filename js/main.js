// messaggio di benvenuto generale
window.alert("Benvenuto visitatore, inserisci i tuoi dati nei successivi pop-up per generare una password insicurissima");

// chiedi all'utente il suo nome
let userName = prompt("Inserisci il tuo nome");

// chiedi all'utente il suo cognome
let userSurname = prompt("Inserisci il tuo cognome");


// chiedi all'utente il suo colore preferito
let favouriteColor = prompt("Qual è il tuo colore preferito?");

// crea constante numero 23
const fixedNumber = 23;

// crea risultato
let resulte = (`${userName}${userSurname}${favouriteColor}${fixedNumber}`)

// console log risultato
console.log(resulte)

// output risultato
document.getElementById("pass-gen").innerHTML= resulte