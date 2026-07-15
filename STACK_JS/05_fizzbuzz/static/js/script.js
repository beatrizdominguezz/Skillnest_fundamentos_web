console.log("Conexión correcta con js");

/* 
Instrucciones 
💻 Crea un programa en JavaScript que recorra los números del 1 al 100.
📋 Aplica las siguientes reglas dentro del bucle:
Si un número es divisible por 3, muestra “Fizz”.
Si un número es divisible por 5, muestra “Buzz”.
Si un número es divisible por ambos 3 y 5, muestra “FizzBuzz”.
Si no cumple ninguna de estas condiciones, muestra el número tal cual.
🖨️ Imprime los resultados en la consola utilizando console.log().
🚫 No uses arrays ni funciones avanzadas, solo lo aprendido hasta ahora: bucles y condicionales.
💡 Tips

🧪 Usa el operador módulo (%) para verificar si un número es divisible por otro.
🔧 Empieza con una estructura básica y luego implementa las condiciones una por una.
🔎 Prueba tu código con un rango más pequeño (1 al 20) antes de ejecutarlo con 100 números.
📌 Recuerda el orden de las condiciones: Primero verifica si es divisible por ambos números, luego por 3 y 5 individualmente.
📬 Lee los mensajes de la consola si algo no funciona como esperabas.
  📚 Contenidos que estás aplicando

🔁 Bucles en JavaScript (for).
🧠 Condicionales (if, else if, else) para evaluar múltiples reglas.
➗ Operadores aritméticos (% para obtener el residuo de una división).
🖥️ Salida de datos en consola (console.log()).
🧐 Preguntas y reflexión

¿Qué pasa si cambias el orden de las condiciones dentro del if?
🎉 Resultado esperado
Si tu código es correcto, al ejecutarlo deberías ver algo como esto en la consola:

1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
...*/

function FizzBuzz(){
    let divisiblePor3 = (i % 3);
    let divisiblePor5 = (i % 5);

    for(let i = 0; i < 20; i++)    
        if(divisiblePor3 === i){
            alert(`${i} Fizz`)
        } else if (divisiblePor5 === i){
            alert(`${i} Buzz`)
        } else if (divisiblePor3 === i && divisiblePor5 === i){
            alert(`${i} FizzBuzz`)
        } else {
            alert(`${i}`)
        }
}