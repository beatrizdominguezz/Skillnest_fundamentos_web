console.log("Conexión exitosa...")

// Ejemplo Función simple (sin parámetros)
function saludar(/* parámetros */) {
    alert("¡Hola, bienvenido!");
}

//saludar(); // Ejecución de una función

//  🎚️ Funciones con parámetros
//El parámetro recibe un valor para trabajar en la función.
//El parámetro recibe el tipo de dato al momento de tomar valor.
function saludarParam(nombre) { //Parámetro es "nombre"
    alert("¡Hola, " + nombre + "!");
}

//saludarParam("Beatriz"); //Ejecución de la función con parámetros. ("argumento")
//saludarParam("Axel");

//🎯 Funciones con return
function encontrarMayor() {

    function encontrarMaximo(a, b) {
        if (a > b) {
            return a; //Este valor devuelve porque cumple la condición
        } else {
            return b;
        }
    }

    let numero1 = 10;
    let numero2 = 7;
    let maximo = encontrarMaximo(numero1, numero2);
    //máximo guardará el valor del retorno.
    alert(`El número mayor entre, ${numero1}, y, ${numero2}, es:, ${maximo}`);
}

//Tarea
/*
Crear una función que reciba 3 parámetros, a, b y c.
Debe Sumar a + b y el resultado restarlo por c.
Devolver el valor final y mostrar con un alert.
 */

function sumaRestaDeNumeros(){

    function sumaResta(a, b) {
        return a + b - c;
    }
    
}
