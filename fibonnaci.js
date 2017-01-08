(() => {
  // la funcion debe calcular la posicion indicada en la secuencia de fibonnaci

  var fibA = function() {

  };

  var fibB = function(n) {
    var a = 1;
    var b = 1;
    for (var i = 2; i < n; i++) {
      b = a + b;
      a = b - a;
    }
    return b;
  };

  xconsole.log(
    fibA(10), // 55
    fibB(10) // 55
  );
})();

/*
cada numero se define como la suma de los dos anteriores en la
sucesion de fibonnaci

1 1 2 3 5 8 13 21 34 55
*/

function fibo(n) {
  return n <= 2 ?
    1 :
    fibo(n - 1) + fibo(n - 2)  // la suma de los dos anteriores
}
/*
  posicion 6
    se llama con 5  +   se llama con 4
      se llama con 4  +   se llama con 3
        se llama con 3  +   se llama con 2
          se llama con 2  + se resuelve con 1
          se resuelve con 1
          1 + 1 = 2


 */


// minuto 19



xconsole.log(fibo(1)); // 1
xconsole.log(fibo(2)); // 1
xconsole.log(fibo(3)); // 2
xconsole.log(fibo(4)); // 3
xconsole.log(fibo(5)); // 5
xconsole.log(fibo(6)); // 8
xconsole.log(fibo(7)); // 13
xconsole.log(fibo(8)); // 21
xconsole.log(fibo(9)); // 34
xconsole.log(fibo(10)); // 55
