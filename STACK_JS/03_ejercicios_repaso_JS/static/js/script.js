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
    let usuario = prompt("Ingrese su tipo de usuario: ");
    let prestamoEstudiante = 10;
    let prestamoProfesor = 20;
    let libros = parseInt(prompt("Ingrese la cantidad de libros solicitados: "))
    let mensaje = "";

    if(usuario == "Estudiante" && libros <= prestamoEstudiante){
        mensaje = `Bienvenido Estudiante
        \nPrestamo de libros concedido`;
        } else if(libros > prestamoEstudiante){
        mensaje = `La cantidad de libros supera el prestamo designado
        \nPrestamo denegado`
    } else if(usuario == "Profesor" && libros <= prestamoProfesor){
        mensaje = `Bienvenido Profesor
        \nPrestamo de libros concedido`
    } else if (libros > prestamoProfesor) {
        mensaje = `La cantidad de libros supera al prestamo designado\nPrestamo denegado`
    } else{
        mensaje = "Ingrese un usuario válido"
    }
    alert(mensaje);
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

function ejercicio03(){
    let nombre = prompt("Ingrese su nombre");
    let edad = parseInt(prompt("Ingrese su edad"));
    let mensaje = "";
    if(edad <= 12){
        mensaje = `Nombre: ${nombre} \nEdad: ${edad} \nCategoría: Niño`
    } else if(edad >= 13 && edad <= 17){
        mensaje = `Nombre: ${nombre} \nEdad: ${edad} \nCategoría: Adolescente`
    } else if(edad >= 18 && edad <= 60){
        mensaje = `Nombre: ${nombre} \nEdad: ${edad} \nCategoría: adulto`
    } else if(edad >= 61){
        mensaje = `Nombre: ${nombre} \nEdad: ${edad} \nCategoría: Adulto mayor`
    } else{
        mensaje = "Ingrese datos válidos"
    }
    alert(mensaje);
}

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

function ejercicio04() {
    let trabajador = prompt("Ingresar nombre del trabajador");
    let año = parseInt(prompt("Ingresar años de servicio"));
    let mensaje = "";
    if (año < 0) {
        mensaje = "Por favor ingresa una cantidad de años válida.";
    } else if (año <= 5) {
        mensaje = `Nombre: ${trabajador}
        Nivel de antiguedad: Novato
        No recibe bonificación por tener 5 años o menos de lo necesario.`;
    } else if (año <= 10) {
        mensaje = `Nombre: ${trabajador}
        Nivel de antiguedad: Intermedio
        mensaje: ¡Felicidades! Recibe bonificación estándar.`;
    } else {
        mensaje = `Nombre: ${trabajador}
        Nivel de antiguedad: Veterano
        mensaje: ¡Felicidades! Bonificación máxima por su gran lealtad a la empresa.`;
    }
    alert(mensaje)
}

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

function ejercicio05(){

let nombreConductor = (prompt("Ingrese nombre del conductor"));
let velocidad = parseInt(prompt("Ingrese velocidad"));
let limiteVelocidad = 90;
let mensajeV = "";

    if(limiteVelocidad <= velocidad && velocidad >= 85){
        mensajeV = "Velocidad límite"
    } else if(limiteVelocidad > velocidad && velocidad >= 65){
        mensajeV = "Velocidad alta, baje un poco la velocidad"
    } else if(velocidad <= 60 && velocidad > 30 ){
        mensajeV = "Velocidad adecuada"
    } else{
        mensajeV = "Velocidad lenta"
    }
    alert(mensajeV)
}
