// Scrivi un programma che stampi in console i numeri da 1 a 100,
// ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.


// Variabile di appoggio
    let risultato = "";
    const row = document.querySelector (".row")
    
// Se il numero è divisibile per 3, memorizzo Fizz
// se il numero è divisibile per 5, memorizzo Buzz
// se il numero è divisibile sia per 3 che per 5, memorizzo FizzBuzz 

for(let i = 1; i <= 100; i++){
    console.log(i);

    if ((i % 3 === 0) && (i % 5 === 0)){ 
        risultato = "fizzBuzz";
        console.log (risultato); 
    } else if ( i % 5 === 0) {
        risultato = "buzz";
        console.log (risultato);
    } else if  ( i % 3 === 0) {
        risultato = "fizz";
         console.log (risultato);
    } else{ 
        risultato = "";
    }


        // Output
        // const col = document.createElement("div");
        // col.classList.add("col");
        // col.classList.add ("risultato");
        // col.innerHTML = i;
        // row.append(col);
        
        const col = `<div class= "col ${risultato}">${i}</div>`;
        row.innerHTML += col;
};

