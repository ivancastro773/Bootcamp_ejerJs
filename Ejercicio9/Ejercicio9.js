var val1;
var val2;

val1 = prompt("ingresa un valor");
val2 = prompt("ingresa otro valor");
if(val1 < val2){
    alert("El menor valor es "+val1);
    console.log("El menor valor es "+val2);
}if(val2 < val1){
    alert("El menor valor es "+val2);
    console.log("El menor valor es "+val2);
}else{
    alert("Los valores son iguales");
}
