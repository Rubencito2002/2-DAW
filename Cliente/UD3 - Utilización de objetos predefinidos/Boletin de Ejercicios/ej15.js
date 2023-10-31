// Function to calculate the letter of a DNI
function calculateDniLetter(dniNumber) {
    const letters = 'TRWAGMYFPDXBNJZSQVHLCKE';
    const dniIndex = dniNumber % 23;
    return letters.charAt(dniIndex);
}

// Array to store the DNIs
const dniArray = [];

// Function to prompt for a DNI and add it to the array
function promptDni() {
    const dniNumber = frmDNI.dni.value;
    if (dniNumber === '-1') 
    {
        clearInterval(intervalId);
        //console.log(dniArray.join(''));
        document.getElementById("res").innerHTML = dniArray.join('');
    } 
    else 
    {
        const dniLetter = calculateDniLetter(dniNumber);
        dniArray.push(dniLetter);
    }
}

// Set interval to prompt for a DNI every 20 seconds
const intervalId = setInterval(promptDni, 20000);
