// Agrega los siguientes elementos al conjunto: 1, 2, 3, 4, 5.
let mySet = new Set([1, 2, 3, 4, 5]);
console.log(mySet);
// Verifica si el conjunto contiene el elemento 3.
console.log(mySet.has(3));
// Elimina el elemento 4 del conjunto.
mySet.delete(4);
console.log(mySet);
// Convierte el conjunto en un array utilizando el operador spread (...).
console.log(...mySet);
// Crea un nuevo conjunto llamado otherSet con los elementos 4, 5, 6, 7.
let otherSet = new Set([4, 5, 6, 7]);
console.log(otherSet);
// Crea un nuevo conjunto llamado unionSet que contenga todos los elementos de mySet y otherSet.
let unionSet = new Set([...mySet, ...otherSet]);
console.log(unionSet);
// Crea un nuevo conjunto llamado intersectionSet que contenga los elementos comunes entre mySet y otherSet.
let intersectionSet = [...mySet].filter(element => otherSet.has(element));
console.log(intersectionSet);
// Crea un nuevo conjunto llamado differenceSet que contenga los elementos que están en mySet pero no en otherSet.
let differenceSet = [...mySet].filter(element => !otherSet.has(element));
console.log(differenceSet);

