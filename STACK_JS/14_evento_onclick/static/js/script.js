console.log("Prueba de conexión...");


let elementoSesion = document.getElementById("elementoSesion");

elementoSesion.addEventListener("click", function () {
    let sesionBoton = elementoSesion.textContent;

    if (sesionBoton === "Iniciar sesión") {
        this.innerText = "Cerrar sesión";
    } else {
        this.innerText = "Iniciar sesión";
    }
});


function mostrarPerfil() {
    
    if (elementoSesion.innerText === "Cerrar sesión") {
        alert("Usuario activo");
    } else {
        alert("Usuario inexistente");
    }
}

function aumentarLike(elemento) {
    // Buscamos el <span> dentro del botón que recibió el clic
    let contadorElemento = elemento.querySelector(".aumentarCorazones");
    let contadorActual = parseInt(contadorElemento.innerText);
    contadorActual++;
    contadorElemento.innerText = contadorActual;
}