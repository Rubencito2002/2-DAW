//Realiza un programa que calcule cuántos números son a la vez primos y palíndromos desde el 1 hasta 100000. Debe guardar todos ellos en un array y al finalizar el proceso imprimir dicho array.
// Check if a number is prime
function isPrime(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

// Check if a number is a palindrome
function isPalindrome(n) {
    const str = n.toString();
    const len = str.length;
    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

const primePalindromes = [];

for (let i = 1; i <= 100000; i++) {
    if (isPrime(i) && isPalindrome(i)) {
        primePalindromes.push(i);
    }
}

console.log(primePalindromes);