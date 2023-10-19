function getRandomNonRepeatingNumbers(min, max, num) {
    if (num > (max - min + 1)) {
        return "El número de elementos solicitados es mayor que el rango disponible.";
    }
    let result = new Set();
    while (result.size < num) {
        let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        result.add(randomNumber);
    }
    return Array.from(result);
}

let min = 1;
let max = 50;
let num = 5;
let randomNumbers = getRandomNonRepeatingNumbers(min, max, num);
console.log(randomNumbers);