const autos = ['Ford', 'Chevrolet', 'Toyota', 'Tesla'];

// Podemos escribir el callback en los paréntesis como una función anónima
// autos.forEach(function(elemento, indice) {
//     console.log(elemento);
// });

// O podemos crear una instancia de una función para usarla como callback.
// Además, no necesitamos usar el argumento de índice, si no lo necesitas, no dudes en omitirlo.
function mostrarNombres(elemento) {
    console.log(elemento);
}

// And call that function in the forEach parentheses
autos.push('NATI');
autos.forEach(mostrarNombres);
console.log(autos.join(' '));