/* 
let name = 'John';
let lastName = 'Doe';

let completeName = name + ' ' + lastName; // concatenación de strings
console.log(completeName); // imprime "John Doe"
*/

/*
let passwordDB = 'undiafeliz';
let passwordInput = 'undiafeliz';

// Comparación de contraseñas
if (passwordDB == passwordInput) {
    console.log('Bienvenido');
}


else {
    console.log('Contraseña incorrecta');
}
*/

/*
// Operadores de comparación
let Puntaje = 10.5;
let PuntajeDeAprobacion = 10.5;
if (Puntaje >= PuntajeDeAprobacion) {
    console.log('Aprobado');
}
else {
    console.log('Reprobado');
}
*/

let TypeCard = "American Express";

switch (TypeCard) {
    case 'Visa':
        console.log('Tarjeta Visa');
        break;
    case 'Mastercard':
        console.log('Tarjeta Mastercard');
        break;
    case 'American Express':
        console.log('Tu tieneh muchah plata');
        break;
    default:
        console.log('Tipo de tarjeta no reconocido');
}
