import promptSync from 'prompt-sync';
import {makeSelectedPizza} from './modules/makePizza.js';

const prompt = promptSync()
const pizzaName = prompt("Qué pizza quiere?")

if (pizzaName === '') {
    console.log('Por favor, elija una de las pizzas. Entonces, ¿mediterranea o mediterranea?')}

if(pizzaName === 'mediterranea'){
    makeSelectedPizza(pizzaName)}

// result.then((resolve) =>{
    
  