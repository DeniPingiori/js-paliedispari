// PALIDROMA

//definisco la funzione
function checkPalindroma(string) {

    //definisco la variabile che conterrà la parola al contrario
    let check_palindroma;

    //prendo la parola passata come parametro e la splito, inverto e riunisco i caratteri
    check_palindroma = string.split('').reverse().join('');

    //verifico che il contenuto della var check_palindroma sia = a quello del parametro string
    if(check_palindroma === string) {
       console.log('la stringa è palindroma'); 
    }
    else{
        console.log('la stringa NON è palindroma');
    }
}

//dichiaro la var che contiene la parola inserita dall'user e assegno prompt
let word = prompt('inserisci la parola da verificare');

// chiamo la funzione
checkPalindroma(word.toLocaleLowerCase());

//finish
