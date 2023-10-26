// import promptSync from 'prompt-sync';
import { pizzas } from './pizzas.js';

// let pizzaQuestion = prompt('¿Qué pizza te gustaría pedir?');

let sal = "una pizca de sal"

let selectedPizzaObj = pizzas.find(pizzas => pizzas.name);
let selectedPizzaName = Object.values(selectedPizzaObj)[0];
let selectedPizzaIngs = Object.values(selectedPizzaObj)[1];

// console.log(selectedPizzaName)
// console.log(selectedPizzaIngs)

export function makeSelectedPizza(pizza) {
    pizza = selectedPizzaName
    thankYou()
    comprarIngredientes(selectedPizzaIngs[0] + ",", selectedPizzaIngs[1] + ",", selectedPizzaIngs[2] + ",", selectedPizzaIngs[3] + ",", selectedPizzaIngs[4] + ",", selectedPizzaIngs[5] + ",", selectedPizzaIngs[6] + ",", selectedPizzaIngs[7])
    buscarFuente()
    encenderHorno()
    extenderMasa()
    hacerSalsa()
    colocarEnLaFuente()
    anadirIngredientes()
    cocinar()
    reposar()
    cortar()
    entregar()
    comer()
}

function thankYou() {
    console.log(`¡Gracias por elejir nuestra pizza ${selectedPizzaName}!`)
}

function comprarIngredientes(ing1, ing2, ing3, ing4, ing5, ing6) {
    console.log("Vamos a la tienda a comprar:", ing1, ing2, ing3, ing4, ing5, ing6)
}

function buscarFuente(){
    console.log("Buscamos fuente del tamaño correcto")
}

function encenderHorno(){
    console.log("Precalentamos el horno a 180 grados durante 10 min")
}

function extenderMasa(){
    console.log("Extendemos una capa de harina sobre la mesa y extender la " + selectedPizzaIngs[6] + " con un rodillo de cocina")  
}

function hacerSalsa (){
    triturarTomate()
    freirTomate()
    añadirAditivos()
}

function triturarTomate (){
    console.log("Trituramos con un rayador el " + selectedPizzaIngs[7])
}
function freirTomate(){
    console.log("A fuego medio añadimos el " + selectedPizzaIngs[7] + " a una sartén")
}

function añadirAditivos(){
    console.log("Añadimos " + sal)
}
function colocarEnLaFuente() {
    console.log("Ponemos en la fuente la " + selectedPizzaIngs[6])
}

function anadirIngredientes(){
    for (let x = 0; x < selectedPizzaIngs.length; x=x+1) {
        console.log("Añadimos " + selectedPizzaIngs[x])
    }
}

function cocinar(){
    console.log("Metemos la pizza en el horno durante 15 min")
}

function reposar(){
    console.log("Dejamos enfriar la pizza durante 5 minutos")
}

function cortar(){
    console.log("Cortamos la pizza en 8 piezas")
}

function entregar() {
    console.log("Le entregamos su pizza")
}

function comer(){
    console.log("¡Coma y disfrute!")
}

// makeSelectedPizza()

