const primerArrays = [1, 2, "3", "four", 5, "six"];

let total = 0;
let nonNumericCount = 0;

for (let i = 0; i < primerArrays.length; i++) 
{
    if (typeof primerArrays[i] === "number") 
    {
        total += primerArrays[i];
    } 
    else 
    {
        nonNumericCount++;
    }
}

console.log(`Suma de elementos numéricos: ${total}`);
console.log(`Número de elementos no numéricos: ${nonNumericCount}`);