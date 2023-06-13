function sumar (){
let num1 = parseInt(document.getElementById("numero1").value)
let num2 = parseInt(document.getElementById("numero2").value)
let sumar = num1+num2
//mostrar el resultado
document .getElementById("resultado").textContent = "La suma es:"+ sumar;
    
}