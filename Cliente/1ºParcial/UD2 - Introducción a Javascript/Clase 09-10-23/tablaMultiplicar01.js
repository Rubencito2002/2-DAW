function procesarFormulario(){
  const num = Number(frmNumero.numero.value);
  let salida = "";
  for (let i=1;i<=10;i++){
      salida += num + " x " + i + " = " + num*i + "<br>";
  }
  //console.log(salida);
  document.getElementById("salida").innerHTML = salida;  
}
