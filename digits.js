// diseña una funcion [digits] que sume los digitos que
// tiene un numero entero n pasado como parametro.
// Por ejemplo digits(125) =  1 + 2 + 5 = 8

function digits(n) {
  return n.toString().length === 1 ?
    +n :
    +digits(n.toString().slice(1)) ++;
}

function minus1digit(n) {
  var digit = n.toString().slice(-1);
  return digit;
}

xconsole.log(
  digits(5), // 5
  digits(25), // 7
  digits(125) // 8
);


/*
  125 % 10 = 5
  Math.floor(125 / 10) = 12

 */

function digitsVelez(n) {
  return n < 10 ?
    n :
    digits(Math.floor(n / 10)) + n % 10
}

console.log(
  digitsVelez(5), // 5
  digitsVelez(25), // 7
  digitsVelez(125) // 8
);

// minuto 43
