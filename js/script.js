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



//PARI E DISPARI 

//definisco la funzione che genera il num random
function generateRandomNumber(sum) {
    return Math.floor(Math.random()* 5 + 1);
}

//definisco funzione che verifica se la somma è pari o dispari
function checkEvenOrOdd(sum) {
    //verifico se la somma è pari o disapri(se è pari restituisco stringa pari, se è dispari
    // restituisco stringa dispari)
    if (sum % 2 === 0) {
        return 'pari';
    }
    return 'dispari';
}

//dichiaro var con il prompt per contenere pari o dispari
let even_or_odd = prompt('inseridci la parola pari o dispari');

//dichiaro una var che conterrà il val numerico compreso tra 1 e 5 inserito dall'user
let number = parseInt(prompt('inserisci un val numerico tra 1 e 5'));

//genero num per pc richiamando la funzione generateRandomNumeber
let pc_number = generateRandomNumber();
console.log(pc_number);

//dichiaro una variabile a cui assegno il valore restituito dalla funzione
let result = checkEvenOrOdd(sum); 

// verifico che result e che la var che contiene pari o dispari abbiano lo stesso valore
//se è così ha vinto user 
if(even_or_odd.toLowerCase() === result) {
    console.log('hai vinto user!')
}
//hai perso 
else {
    console.log('hai perso');
}