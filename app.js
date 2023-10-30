import promptSync from 'prompt-sync';
import {makeSelectedPizza} from './modules/makePizza.js';
import { pizzas } from './modules/pizzas.js';

const prompt = promptSync()
export const pizzaName = prompt("Qué pizza quiere? ")
const selectedPizzaObj = pizzas.find(o => o.name === pizzaName);
export const PizzaIngs = Object.values(selectedPizzaObj)[1];

if (pizzaName === '') {
    console.log('Por favor, elija una de las pizzas: mediterranea, pepperoni, jamón y queso o cuatro quesos')
    } else {
        makeSelectedPizza(pizzaName)
    }


// result.then((resolve) =>{
    
  