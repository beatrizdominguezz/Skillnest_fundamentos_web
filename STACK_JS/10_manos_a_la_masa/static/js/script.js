console.log("Prueba de conexión...")

// Ejemplo

// let sandwich = {
//     pan: "masa madre",
//     proteina: "asado",
//     queso: "queso suizo",
//     salsas: ["lechuga", "tomates", "salsa de rábano"]
// };

// function sandwichFactory(pan, proteina, queso, salsas) {
//     let sandwich = {};
//     sandwich.pan = pan;
//     sandwich.proteina = proteina;
//     sandwich.queso = queso;
//     sandwich.salsas = salsas;
//     return sandwich;
// }

// let s1 = sandwichFactory(
//     "trigo",
//     "pavo",
//     "provolone",
//     ["mostaza", "cebolla frita", "rúcula"],
// );
// let s2 = sandwichFactory(
//     "masa madre", "pollo", "cheddar", ["ketchup", "mayonesa"]
// );
// alert(s1);
// alert(`Ingredientes del segundo sandwich:
//     Pan: ${s2.pan}
//     Proteína: ${s2.proteina}
//     Queso: ${s2.queso}
//     Salsas: ${s2.queso}`)


// Crea una función llamada pizzaOven que devuelva un objeto con las propiedades:

// corteza: tipo de corteza de la pizza.
// salsa: tipo de salsa utilizada.
// quesos: un arreglo con los tipos de queso que tiene la pizza.
// ingredientes: un arreglo con los ingredientes adicionales.
// 🍕 Usa la función para crear las siguientes pizzas:

// Una pizza “estilo Chicago” con corteza tradicional, salsa tradicional, mozzarella y los ingredientes pepperoni y salchicha.
// Una pizza “lanzada a mano” con salsa marinara, mozzarella y feta, y los ingredientes champiñones, aceitunas y cebollas.
// Crea dos pizzas más con tus ingredientes favoritos.
// 💻 Muestra en consola los objetos de cada pizza creada.

function preparacionPizza() {

let pizza = {
    masa: "masa de trigo",
    proteina: "Pepperoni",
    queso: "mozarella",
    salsas: ["tomate", "ajo"]
};

function pizzaFactory(masa, proteina, queso, salsas) {
    let sandwich = {};
    sandwich.masa = masa;
    sandwich.proteina = proteina;
    sandwich.queso = queso;
    sandwich.salsas = salsas;
    return pizza;
}

let s1 = pizzaFactory(
    "trigo",
    "jamón",
    "cheddar",
    "queso derretido",
);
let s2 = pizzaFactory(
    "masa madre", "pavo", "parmesano", "salsa especial"
);
alert(s1);
alert(`Ingredientes de la segunda pizza:
    Masa: ${s2.masa}
    Proteína: ${s2.proteina}
    Queso: ${s2.queso}
    Salsas: ${s2.salsas.join(" - ")}`
);

}