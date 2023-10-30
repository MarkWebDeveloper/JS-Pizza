// import promptSync from 'prompt-sync';
import { pizzas } from './pizzas.js';
import { pizzaName } from '../app.js';
import { PizzaIngs } from '../app.js';

// let pizzaQuestion = prompt('¿Qué pizza te gustaría pedir?');

// let selectedPizzaObj = pizzas.find(pizzas => pizzas.name);
// let selectedPizzaName = Object.values(selectedPizzaObj)[0];

// console.log(selectedPizzaName)
// console.log(selectedPizzaIngs)

// https://www.geeksforgeeks.org/how-to-create-an-array-using-intersection-of-two-arrays-in-javascript/?ref=ml_lbp

export function makeSelectedPizza(pizza) {
    pizza = pizzaName
    thankYou()
    extenderMasa()
    hacerSalsa()
    colocarEnLaFuente()
    anadirIngredientes()
    hornear()
    reposar()
    cortar()
    entregar()
    comer()
}

function thankYou() {
    console.log(`¡Gracias por elejir nuestra pizza ${pizzaName}!`)
}

function hornear(){
    console.log("Pizza horneandose")
}

function extenderMasa(){
    console.log("Extendiendo la masa")  
}

function hacerSalsa (){
    triturarTomate()
    freirTomate()
    añadirAditivos()
}

function triturarTomate (){
    console.log("Trituramos con un rayador el tomate")
}
function freirTomate(){
    console.log("A fuego medio añadimos el tomate a una sartén")
}

function añadirAditivos(){
    console.log("Añadimos una pizca de sal")
}

function colocarEnLaFuente() {
    console.log("Ponemos en la fuente la masa")
}

function anadirIngredientes(){
    for (let x = 0; x < PizzaIngs.length; x=x+1) {
        console.log("Añadimos " + PizzaIngs[x])
    }
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

