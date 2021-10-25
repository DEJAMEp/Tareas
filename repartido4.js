//EJercicio 1
/*var Famosos=["messi", "ronaldo","James"]

Famosos.push(prompt("Ingrese nombre de famosos"));

document.write(Famosos)*/
//ejercicio 2
/*var famosos=["China Suarez","Icardi","Wanda nara"]
famosos.push(prompt("Ingrese nombre de famosos"));
document.write(famosos)*/
//ejercicio 3
/*var num=[parseInt(prompt("Ingrese un numero"))];
var num2=[parseInt(prompt("Ingrese un numero"))];
var num3= Array.from({length: num2 - num}, (p, v) => v + num2);

for(numeros of num){
    if (numeros %2==0){
    document.write(numeros + "es par" + "<br>")
}else{
    document.write(numeros + "es impar" + "<br>")
}
}
for(numero2 of num2){
    if (numero2 %2==0){
        document.write(numero2 + "es par" + "<br>")
    }else{
        document.write(numero2 + "es impar" + "<br>")
    }
}
if (num3<=num2){
    for(let i = num2; i<=num; i++){
        document.write(i);
   }
}else{
    for(let i = num2; i>=num1; i--){
        document.write(i);
   }
}*/
//Ejercicio 4
/*var edad=parseInt(prompt("Ingrese una edad"))
var tope=parseInt(prompt("Ingrese un valor tope"))

if (edad > tope){
    document.write("La edad es"+ edad)
}else{
    document.write("El tope es"+ tope)
    }*/
//Ejercicio 5
var nombre=prompt("Ingrese su nombre de usuario")
var contraseña=prompt("Ingrese su contraseña")

const nombrecorrecto="pablito"
const contraseñacorrecta="1234"

if (nombre == nombrecorrecto && contraseña==contraseñacorrecta){
    alert("inicio exitoso")
}else{
 alert("te equivocaste")   
}






