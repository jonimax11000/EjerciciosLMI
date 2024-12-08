// Condicionals simples amb if/else
'use strict';

function verificaHora(hora){
    if (hora >= 0 && hora <= 12){
        console.log("Bon dia");
    }
    else if(hora <= 20){
        console.log("Bona vesprada");
    }
    else{
        console.log("Bona nit");
    }
}

for (let i = 0; i < 24; i++){
    verificaHora(i);
}

