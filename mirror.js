// Diseña una funcion recursiva [mirror] para determinar si
// un numero entero n es simetrico a otro numero entero m
// Construye a partir de aqui la función [palindrome] que
// indica si un numero es simetrico respecto a si mismo.
// 123 es simetrico a 321


var reverse = function(n) {
  return reverseAux(n, )
};

var reverseAux = function(n, a) {
  return n === 0 ?
    a :
    reverseAux(Math.floor(n / 10), a * 10 + n % 10);
};

var mirror = function(n, m) {
  return reverse(n) === m;
};

var palindrome = function(n) {
  return reverse(n) === n;
}

console.log(
  reverse(521),
  mirror(1, 7),
  mirror(123, 321),
  mirror(123, 132),
  palindrome(123),
  palindrome(12321),
  palindrome(1221)
);
