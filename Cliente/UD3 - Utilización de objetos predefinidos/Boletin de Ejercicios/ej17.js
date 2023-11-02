//Realiza un programa que pregunte una letra de la A a la Z. Tras ello el programa indicará cuántos DNIs de 3 cifras (del 001 al 999) tienen esa letra y tras ello te mostrará “de golpe” el listado de todos los DNIs que tienen esa letra.
function procesarLetraDNI()
{
    // Prompt user for a letter from A to Z
    const letter = frmLetraDNI.letra.value;

    // Check if the input is a single letter from A to Z
    if (letter.length === 1 && /[A-Za-z]/.test(letter)) 
    {
        // Initialize variables
        let count = 0;
        let dnis = "";

        // Loop through all possible 3-digit DNIs with the given letter
        for (let i = 1; i <= 999; i++) 
        {
            const dni = letter + i.toString().padStart(3, "0");
            dnis += dni + "\n";
            count++;
        }

        // Display the count and list of DNIs
        alert(`Hay ${count} DNIs con la letra ${letter}:\n${dnis}`);
    } 
    else 
    {
        alert("La letra introducida no es válida.");
    }
}
