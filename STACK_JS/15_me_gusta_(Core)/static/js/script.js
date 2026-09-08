const btn1 = document.querySelector('#boton_1');
const count1 = document.querySelector('#contar_1');

const btn2 = document.querySelector('#boton_2');
const count2 = document.querySelector('#contar_2');

const btn3 = document.querySelector('#boton_3');
const count3 = document.querySelector('#contar_3');


let likes1 = 0;
let likes2 = 0;
let likes3 = 0;


btn1.addEventListener('click', function () {
    likes1++;
    count1.innerText = likes1;
});

btn2.addEventListener('click', function () {
    likes2++;
    count2.innerText = likes2;
});

btn3.addEventListener('click', function () {
    likes3++;
    count3.innerText = likes3;
});
