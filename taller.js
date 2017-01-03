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

console.log(factorialVelez(5));
