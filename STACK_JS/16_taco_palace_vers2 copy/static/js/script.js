// Esperar a que el HTML termine de cargar
document.addEventListener('DOMContentLoaded', () => {

    // 1. Conexión y lógica para el Formulario de Login
    const formularioLogin = document.getElementById('formulario-login');
    const campoCorreo = document.getElementById('campo-correo');

    formularioLogin.addEventListener('submit', (evento) => {
        // Evita que la página se recargue al enviar el formulario
        evento.preventDefault();

        const correoIngresado = campoCorreo.value;
        alert(`Bienvenido\n${correoIngresado}`);
    });

    // 2. Conexión y lógica para el Carrito de Compras
    const botonesAgregar = document.querySelectorAll('.boton-agregar-carrito');
    const contadorCarrito = document.getElementById('contador-carrito');
    let cantidadCarrito = 0;

    botonesAgregar.forEach((boton) => {
        boton.addEventListener('click', () => {
            cantidadCarrito++;
            contadorCarrito.textContent = cantidadCarrito;
        });
    });

    // 3. Conexión y lógica para el Cambio de Imagen al pasar el cursor
    const imagenPrincipal = document.getElementById('imagen-principal');

    const urlImagenOriginal = 'https://via.placeholder.com/400x300/e0e0e0/333333?text=Comida+Mexicana+1';
    const urlImagenNueva = 'https://via.placeholder.com/400x300/ffcc99/333333?text=Nuevos+Tacos+Especiales';

    imagenPrincipal.addEventListener('mouseover', () => {
        imagenPrincipal.src = urlImagenNueva;
    });

    imagenPrincipal.addEventListener('mouseout', () => {
        imagenPrincipal.src = urlImagenOriginal;
    });

});