const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))


const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
} 

const fromDollarToYen = function(valueInDollar) {
    let valueInYen = valueInDollar * 127.9;
// 1 multiplico valueinyen x 100 y lo transformo a entero (parsInt) y finalmente lo divido por 100.
    return parseInt(valueInYen * 100)/100;
}

const fromYenToPound = function (valueInYen) {
    let valueInPound = valueInYen * 0.8;

    return parseInt(valueInPound * 100)/100;
}
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }

// un numero decimal, x (100) y al resultado lo convierto a entero y luego se divide por 100.