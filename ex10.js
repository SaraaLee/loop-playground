/**
 * Mi dia a dia
 * 
 * Vamos a escribir un programa que muestre, para cada hora del dia, que actividad realiza un sim en Villa Lobo.  Muestra qué actividad realiza la persona por el terminal PARA CADA HORA.
 * 
 * 1. A las 8, el sim se despierta
 * 2. A las 9, el sim desayuna
 * 3. De 10 a 16, el sim estudia Front End
 * 4. A las 17, siesta
 * 5. De 18 a 22, el sim tiene tiempo libre
 * 6. A las 22, el sim cena
 * 7. A las 23, el sim se va a dormir
 *
 * Escribe un bucle, con los condicionales adecuados dentro del bucle, para que muestre por el terminal lo que hace el sim a cada hora.
 * 
 * Ejemplo:
 * 
 * "A las 8, el sim se despierta"
 * "A las 9, el sim desayuna" 
 * "A las 10, el sim estudia Front End"
 * "A las 11, el sim estudia Front End"
 * ....
 * "A las 23, el sim se va a dormir"
 */

let hora_actual = 21;
let hora_dormir = 24;

switch (hora_actual) {
    case 8: 
    console.log("el sim se despierta");
    break;
    case 9:
    console.log("el sim desayuna");
    break;
    case 17:
    console.log("siesta");
    break;
    case 22:
    console.log("el sim cena");
    break;
    case 23:
    console.log("el sim se va a dormir");

}

if (hora_actual >= 10 && hora_actual <= 16){
    console.log("El sim estudia front end");
}
else if(hora_actual >= 18 && hora_actual <= 22){
    console.log("El sim tiene tiempo libro");
}
else if(hora_actual > 23 && hora_actual < 8){
    console.log("Durmiendo...");
}





