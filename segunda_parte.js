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

/*
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
*/

// Bucles

/*
let count = 1;
while (count <= 50) {
    console.log(count);
    count++; // decrementa el contador
}
*/

// Bucle for
/*
let names = ['John', 'Jane', 'Doe'];
for (let i = names.length -1; i >= 0; i--) {
    console.log(names[i]); // imprime cada nombre en el array
}
*/

// Bucle for in
let person = { name: 'John', age: 30, city: 'New York' };
for (let key in person) {
    console.log(key + ': ' + person[key]); // imprime cada clave y valor del objeto
}


function greeting(PersonName) {
    console.log('Hello, ' + PersonName + '!'); // imprime un saludo
}

greeting('John'); // llama a la función con el nombre 'John'