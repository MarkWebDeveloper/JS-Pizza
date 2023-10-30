import promptSync from 'prompt-sync';
import {makeSelectedPizza} from './modules/makePizza.js';

const prompt = promptSync()
export const pizzaName = prompt("Qué pizza quiere? ")
export const PizzaIngs = Object.values(pizzaName)[1];

if (pizzaName === '') {
    console.log('Por favor, elija una de las pizzas: mediterranea, pepperoni, jamón y queso o cuatro quesos')
    } else {
        makeSelectedPizza(pizzaName)
    }


// result.then((resolve) =>{
    
  