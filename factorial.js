var xconsole = {
  log: function() {
    return true
  }
};

(function( /* 01. factorial (n) */ ) {
  var factA = function(n) {

  };

  var factB = function(n) {
    var r = 1;
    for (var i = 1; i <= n; i++)
      r = r * i;

    return r;
  };

  xconsole.log(
    factA(5), // 120
    factB(5) // 120
  );
})();


// funcion factorial recursiva, primer intento
function factorial(n, acu, callback) {
  if (n === 1) {
    callback(acu);
    return true;
  }

  if (acu === void(0)) acu = n;

  acu = acu * (n - 1);
  factorial(n - 1, acu, callback);
}

factorial(5, void(0), function(result) {
  xconsole.log(result);
});

// funcion factorial recursiva, javier velez
function factorialVelez(n) {
  return n === 0 ? // caso base
    1 : // si n === 0 entonces devuelvo 1
    factorialVelez(n - 1) * n; // caso contrario,
}

xconsole.log(factorialVelez(5));

function factorialVelezOneLine(n) {
  return n === 0 ? 1 : factorialVelezOneLine(n - 1) * n;
}

function factorialVelezExplicada(n) {
  if (n === 0) {
    return 1;
  } else {
    var functionResult = factorialVelez(n - 1);
    var result = functionResult * n;
    return result;
  }
}
/*
  - La recursividad se va llamando a si misma sin llegar al return de la función
  - Solo se devuelve el return correspondiente a la primera llamada a la función,
    los demas, al ser llamados recursivamente, se resuelven internamente.
  - Si llamamos a la funcion con:
    * por ejemplo "5"
      * La primera vez se llama a si misma con "4"
        *   Se llama a si misma con 3
          *   Se llama a si misma con 2
            *   Se llama a si misma con 1
              *   Se llama a si misma con 0
              *   Se resuelve con 1 y devuelve el resultado
            *   1 x 1 = se resuelve con 1
          *   2 x 1 = se resuelve con 2
        *   3 x 2 = se resuelve con 6
      *   4 x 6 = se resuelve con 24
    *   5 x 24 = se resuelve con 120 y al ser la primera llamada se devuelve finalmente
*/
xconsole.log(factorialVelezExplicada(5));
