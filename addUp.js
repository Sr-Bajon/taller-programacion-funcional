// diseña una funcion recursiva [addUp] que devuelva la suma
// de los n primeros numeros naturales.
// addUp(3) = 1 + 2 + 3 = 6

function addUp(n){
  return n === 0
    ? 0
    : addUp(n-1) + n;
}

console.log(
  addUp(3),   // 6
  addUp(5)    // 15
);
