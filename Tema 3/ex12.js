// Funció amb paràmetres per defecte
'use strict';

function salutacio(nom = "amic"){
    console.log(`Hola, ${nom}!`);
}

salutacio();
salutacio("Mon")