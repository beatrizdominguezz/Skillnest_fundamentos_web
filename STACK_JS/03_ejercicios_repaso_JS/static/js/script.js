console.log("Conexión correcta con js");

// # Ejercicio 1: Calculadora de Envío

// ## Enunciado

// Una empresa de despacho cobra el envío dependiendo del peso del paquete.

// Solicitar:

// - Nombre del cliente
// - Peso del paquete (kg)

// Condiciones:

// - Hasta 2 kg
// - Más de 2 kg y hasta 5 kg
// - Más de 5 kg y hasta 10 kg
// - Más de 10 kg

// El programa debe indicar:

// - Nombre del cliente
// - Categoría del envío
// - Valor correspondiente al despacho

function ejercicio01(){
    let NombreCliente = prompt("Nombre del cliente:");
    let PesoPaquete = parseInt(prompt("Peso del paquete (kg):"));
    let Precio = 2000;
    let Valor = (PesoPaquete * Precio);

    if(PesoPaquete >= 10){
        alert(`Valor de despacho: ${Valor}
            \nNombre del cliente: ${NombreCliente}`)
    } else if(PesoPaquete >= 2 && PesoPaquete <= 5){
        alert(`Valor de despacho: ${Valor}
            \nNombre del cliente: ${NombreCliente}`)
    } else if(PesoPaquete >= 5 && PesoPaquete <= 10){
        alert(`Valor de despacho: ${Valor} 
            \nNombre del cliente: ${NombreCliente}`)
    } else {
        alert("Ingrese valores por encima de 2kg")
    }
}


// ---

// # Ejercicio 2: Acceso a Biblioteca

// ## Enunciado

// Una biblioteca posee dos tipos de usuarios:

// - Estudiante
// - Profesor

// Solicitar:

// - Tipo de usuario
// - Cantidad de libros solicitados

// Condiciones:

// Cada tipo de usuario posee un límite distinto de préstamos.

// El programa debe indicar:

// - Si el préstamo está permitido.
// - Si supera el límite permitido.
// - Mostrar un mensaje diferente según el tipo de usuario.

// Utilizar operadores lógicos para realizar las validaciones.

function ejercicio02(){
    let Usuarios = prompt("¿Eres Profesor o Estudiante?");
    let CantidadLibros = parseInt(prompt("Cantidad de libros solicitados:"));
    
    
}

// ---

// # Ejercicio 3: Clasificación Deportiva

// ## Enunciado

// Solicitar:

// - Nombre del participante
// - Edad

// Clasificar al participante según su edad.

// Debe existir al menos cuatro categorías distintas.

// Finalmente mostrar:

// - Nombre
// - Edad
// - Categoría asignada

// ---

// # Ejercicio 4: Sistema de Bonificación

// ## Enunciado

// Una empresa entrega bonos según los años trabajados.

// Solicitar:

// - Nombre del trabajador
// - Años de servicio

// Clasificar según distintos rangos de antigüedad.

// Mostrar:

// - Nombre
// - Nivel de antigüedad
// - Mensaje indicando si recibe o no bonificación.

// ---

// # Ejercicio 5: Evaluación de Velocidad

// ## Enunciado

// Solicitar:

// - Nombre del conductor
// - Velocidad registrada

// Condiciones:

// Clasificar la velocidad en distintos rangos.

// Además:

// Si supera un determinado límite, mostrar un mensaje indicando que ha excedido la velocidad permitida.

// Mostrar:

// - Nombre del conductor
// - Velocidad
// - Clasificación obtenida