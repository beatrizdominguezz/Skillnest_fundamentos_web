console.log("Conexión correcta con js");

// // Variables array (lista)

// let nombre1 = "Ana";
// let nombre2 = "Pedro";
// let nombre3 = "María";
// let nombre4 = "Carlos";

// // Transformar en array y mostrar

// let nombresUsuario = ["Ana", "Pedro", "María", "Carlos"]

// // Mostrar a María en una alerta
// console.log(nombresUsuario[2]); // Muestra a María
// let compras = [5000, 2300, 12000, 4500, 3000];
// let alumnos = ["Ana", "Pedro", "María", "José"];
// let datos = ["Carlos", 18, true];
// let frutas1 = ["Manzana", "Pera", "Kiwi", "Sandía"];

// // Desafío formar una oración con elementos
// // de las distintas variables.

// let mensaje = `${alumnos[0]} y ${alumnos[1]} tenian ${datos[1]} años, ellos compraron una ${frutas1[0]} a $${compras[1]}`;
// console.log(mensaje);

// // La propiedad `.length` devuelve la cantidad de elementos.

// let frutas2 = ["Manzana", "Pera", "Kiwi", "Sandía"];
// //console.log(frutas.length); // 4 --> Conteo de elementos

// // Obtener el último elemento
// let frutas3 = ["Manzana", "Pera", "Kiwi", "Sandía"];
// let ultima = frutas3[frutas3.length - 1];
// // variable.length -1 siempre trae el último elemento

// console.log(ultima);

// // Desafío
// //Del arreglo ["Hola", "a", "todos", "los", "programadores!"].
// //Mostrar el penultimo elemento y el último concatenado.

// let ultimo = ["Hola", "a", "todos", "los", "programadores!"];
// console.log(`${ultimo[ultimo.length - 2]} ${ultimo[ultimo.length - 1]} `)

let listaTareas = ["Barrer", "Cocinar", "Realizar compras"];
    function manipularArreglo(){
    //Modificar un elemento del arreglo
    listaTareas[1] = "Construir";
    //Añadir un elemento al final de la lista
    listaTareas.push("Cocinar"); //Agrega un elemento al final .push()
    //Eliminar el último elemento y mostrarlo
    let eliminado = listaTareas.pop(); // Elimina último elemento
    //Añadir un elemento al inicio de la lista
    listaTareas.unshift("Boxear"); //Agrega al principio unshift()
    //Eliminar el primer elemento de la lista
    eliminado += listaTareas.shift(); //.shift elimina el primero
    //Mostrar resultado
    alert(listaTareas.join(" - "));
    alert("Elementos eliminados: " + eliminado);
}

function buscarMayoresEdad() {
    let edades = [12, 15, 18, 20, 25];
    for (let i = 0; i < edades.length; i++) {

    }
}

// Ejercicio 1

function ejercicio01() {
    let edades = [15,18,20,14,25];
    let primeraEdad = edades[0];
    let ultimaEdad = edades[edades.length - 1]
    let 

    alert(`Primer dato`)
}

// Ejercicio 2 

function ejercicio02() {

}