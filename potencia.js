// Diseña una funcion recursiva para calcular la potencia de
// un numero b elevado al exponente e.
// El computo de b elevado a e se obtiene con el producto de
// b con sigo mismo n veces.

(() => {
  var pow = function(b, e) {
    return e === 1
      ? b
      : pow(b, e-1) * b
  };

  xconsole.log(
    pow(2, 2),
    pow(2, 6),
    pow(3, 6)
  );
})();

/*
  2 e3
    (2 e2) * 2
      (2 e1) * 2
      Se resuelve con 2
      2 * 2 = 4
    4 * 2 = 8
 */


 var powVelez = function(b, e) {
   return e === 0
     ? 1
     : pow(b, e-1) * b
 };
