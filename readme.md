nome repo: js-paliedispari
Palidroma
Chiedere all’utente di inserire una parola.
Creare una funzione per capire se la parola inserita è palindroma

Pari e Dispari
L’utente inserisce prima  "pari" o "dispari" poi inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
Numero di push: 10 circa minimo


Errori da evitare
1 - Non effettuare la chiamata di funzione;
2 - Effettuare la chiamata di funzione in un console.log o in un alert ed assegnarlo ad una variabile
3 - Se la funzione ha il return non assegnare la chiamata di funzione ad una variabile
Consigli del giorno
Scriviamo sempre in italiano i passaggi che vogliamo fare
Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.


scomposizione es: 
PALINDROMA 

1. - dichiaro funzione checkPalindroma
2. - realizzo un prompt che permette all'utente l'inserimento della parola
3. - dentro la funzione dichiaro una variabile che contenga (con reverse) l'inverso della parola
4. - scompongo con SPLIT (funzione) la stringa passata come parametro della funzione
5. - con il metodo REVERSE inverto l'ordine
6. - con il metodo JOIN riunisco le lettere
7. - verifico se la parola generata è uguale a quella inserita dall'user
    7.1 ? se sono uguali => la stringa è palindroma
    7.2 : altrimenti la stringa non è palindroma


PARI E DISPARI
1. - definisco la funzione generateRandomNumber
1.1 - definisco il val random generato attraverso la concatenazione delle funzione math.floor,
    math.random
2. -  definisco la funzione  checkevenOrOdd 
2.1 - controllo che l'operatore  resto con somma sia pari a 0 
2.2 - ? se è zero => restituisco true
2.3 - : altrimenti restituisco false 
3. dichiaro una var che conterrà il val pari o dispari inserito dall'utente
4. dichiaro una var che conterrà il val numerico compreso tra 1 e 5 inserito dall'user
5. dichiaro una var che contiene la somma dei num inseriti
6. chiamo la funzione passandogli il valore contenuto nella var somma
7. verifico il val rstituito
7.1 ? se è true => è pari 
7.2 : altrimenti è dispari 
8. se il valore inserito come stringa è lo stesso di quello restituito dalla funzione
    (a livello significativo)
9. altrimenti ho perso