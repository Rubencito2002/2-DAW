document.getElementById("salida").innerHTML = String(fib(39));
function fib(num) {
  let n;
  if (num < 2) {
    n = num;
  } else {
    n = fib(num - 1) + fib(num - 2);
  }
  return n;
}
