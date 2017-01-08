// Diseña dos predicados logicos [even] y [odd] que indiquen
// si un numero n pasado como argumento es o no par o impar
// respectivamente. En el diseño de estas funciones no puede
// utilizarse la operacion de modulo %

(() => {
  var even = function(n) {
    return n === 0 ?
      true :
      !even(n - 1)
  };

  var odd = function() {

  };

  xconsole.log(
    even(5), even(6), // false true
    odd(5), odd(6) // true false
  );
})();


(() => {
  // solucion velez
  var even = function(n) {
    return n === 0 ?
      true :
      odd(n - 1)
  };

  var odd = function(n) {
    return n === 0 ?
      false :
      even(n - 1)
  };

  xconsole.log(
    even(5), even(6), // false true
    odd(5), odd(6) // true false
  );
})();
