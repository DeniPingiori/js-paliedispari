// PALIDROMA

//definisco la funzione
function checkPalindroma(string){

    //definisco la variabile che conterrà la parola al contrario
    let check_palindroma;

    //prendo la parola passata come parametro e la splito, inverto e riunisco i caratteri
    check_palindroma = string.split('').reverse().join();

    //verifico che il contenuto della var check_palindroma sia = a quello del parametro string
    if(check_palindroma.toLowerCase() === string.toLowerCase()){
       console.log('la stringa è palindroma'); 
    }
    else{
        console.log('la stringa NON è palindroma');
    }
}
