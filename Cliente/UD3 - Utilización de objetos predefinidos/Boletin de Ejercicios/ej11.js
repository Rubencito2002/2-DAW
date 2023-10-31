function procesarEcuacion()
{
    // Define the coefficients of the quadratic equation
    const a = Number (frmEcuacion.num1.value);
    const b = Number (frmEcuacion.num2.value);
    const c = Number (frmEcuacion.num3.value);

    // Calculate the discriminant
    const discriminant = b ** 2 - 4 * a * c;

    // Check if the discriminant is negative
    if (discriminant < 0) 
    {
        document.getElementById("res").innerHTML = "La ecuación cuadrática no tiene raíces reales.";
    } 
    else 
    {
        const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        document.getElementById("res").innerHTML = `Las raíces de la ecuación cuadrática son ${root1} y ${root2}.`;
    }
}