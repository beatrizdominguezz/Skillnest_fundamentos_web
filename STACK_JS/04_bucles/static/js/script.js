console.log("Conexión correcta con js");

/* Ejemplo Bucle for */
function contarHasta5() {
    for (let i = 0; i <= 5; i++) {
        alert(i);
    }
}

function cuentaRegresiva() {
    for (let i = 10; i > 0; i--) {
        alert(i);
    }
}

function recorrerLista() {
    // Lista es un tipo de dato (array/lista/arreglos)
    // [] = ["nombre" , 4, True, [2,4]]
    /* alert nombre = "Carlos"; 
    alert(nombre);
                            0       1
    let nombres = ["Carlos", "María"] --> Estos son un tipo de dato de tipo (lista).
    alert(nombres[0]) --> Imprime Carlos
    alert(nombres[1]) --> Imprime María
    alert(nombres.length); --> 6
    alert(nombres.length); --> 2 (largo nombres)
    */
    let usuarios = ["Ana", "Luis", "María", "Bruno", "Giorno"];

    for (let i = 0; i < usuarios.length; i++) {
        alert("Bienvenido, " + usuarios[i]);
    }
}

/* Ejemplo Bucle while */
function reproducirCancion() {
    let reproduciendo = true;

    while (reproduciendo) {
        alert("La canción sigue sonando...");
        // Simulación de una acción que detendría la reproducción
        reproduciendo = false;
    }
}

function cargarDatos() {
    let datosPendientes = 5;

    while (datosPendientes > 0) {
        alert(`Cargando datos... ${datosPendientes} de 5`);
        datosPendientes--;
    }
}

function validarContrasena() {
    let contrasenaCorrecta = false;
// !variables = variable es distinta a verdadero - dentro de una condición.
    while (!contrasenaCorrecta) {
        let intento = prompt("Ingresa tu contraseña:");
        if (intento === "1234") {
            contrasenaCorrecta = true;
            alert("Acceso concedido.");
            break; //Rompe el bucle.
            alert("No se ejecuta")
        } else {
            alert("Contraseña incorrecta, intenta de nuevo.");
        }
    }
}