import promptSync from 'prompt-sync';

let pizzaQuestion = prompt('¿Qué pizza te gustaría pedir?');

let tomate = "tomate"
let queso = "queso mozzarella"
let masa = "masa"
let oregano = "orégano"
let salsa = "la salsa de tomate"
let peperoni = "peperoni"
let jamon = "jamón york"
let champinones = "champiñones"
let sal = "una pizca de sal"

let listaIngredientes = [salsa, jamon, champinones, queso, peperoni, oregano]

function app() {
    comprarIngredientes(tomate + ",", queso + ",", masa + ",", oregano + ",", peperoni + ",", jamon 
    + ",", champinones)
    buscarFuente()
    encenderHorno()
    extenderMasa()
    hacerSalsa()
    colocarEnLaFuente()
    anadirIngredientes()
    cocinar()
    reposar()
    cortar()
    comer()
}

function comprarIngredientes(ing1, ing2, ing3, ing4, ing5, ing6, ing7) {
    console.log("Ir a la tienda y comprar:", ing1, ing2, ing3, ing4, ing5, ing6, ing7)
}

function buscarFuente(){
    console.log("Buscar fuente del tamaño correcto")
}

function encenderHorno(){
    console.log("Precalentar el horno a 180 grados durante 10 min")
}

function extenderMasa(){
    console.log("Extender una capa de harina sobre la mesa y extender la " + masa + " con un rodillo de cocina")  
}

function hacerSalsa (){
    triturarTomate()
    freirTomate()
    añadirAditivos()
}

function triturarTomate (){
    console.log("Triturar con un rayador el " + tomate)
}
function freirTomate(){
    console.log("A fuego medio añadir el " + tomate + " a una sartén")
}

function añadirAditivos(){
    console.log("Añadir " + sal)
}
function colocarEnLaFuente() {
    console.log("Poner en la fuente la " + masa)
}

function anadirIngredientes(){
    for (let x = 0; x < listaIngredientes.length; x=x+1) {
        console.log("Poner " + listaIngredientes[x])
    }
}

function cocinar(){
    console.log("Meter la pizza en el horno durante 15 min")
}

function reposar(){
    console.log("Dejar enfriar la pizza durante 5 minutos")
}

function cortar(){
    console.log("Cortar la pizza en 8 piezas")
}

function comer(){
    console.log("Comer y disfrutar")
}

app()

