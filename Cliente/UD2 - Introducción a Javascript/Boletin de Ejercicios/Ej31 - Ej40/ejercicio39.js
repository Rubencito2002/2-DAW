//Realizar un programa que liste los 100 primeros números primos.
function esPrimo(numero) 
{
    if (numero <= 1) 
        return false;
    if (numero <= 3) 
        return true;
    if (numero % 2 === 0 || numero % 3 === 0) 
        return false;
    for (let i = 5; i * i <= numero; i += 6) 
    {
        if (numero % i === 0 || numero % (i + 2) === 0) 
            return false;
    }
    return true;
}

// Obtener los primeros 100 números primos
const primeList = document.getElementById("primeList");
let count = 0;
let numero = 2;
while (count < 100) 
{
    if (esPrimo(numero)) 
    {
        const listItem = document.createElement("li");
        listItem.textContent = numero;
        primeList.appendChild(listItem);
        count++;
    }
    numero++;
}