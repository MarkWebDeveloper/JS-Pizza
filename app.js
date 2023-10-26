import promptSync from 'prompt-sync';
import {makeSelectedPizza} from './modules/makePizza.js';

function app(){
    const prompt = promptSync();
    const pizzaName = prompt("Qué pizza quiere?");

    let result = makeSelectedPizza(pizzaName)

    result.then((resolve) =>{
        if(resolve === undefined){
            console.log('Por favor, elija una de las pizzas. Entonces, ¿mediterranea o mediterranea?')}

        if(resolve === selectedPizzaName){
            makeSelectedPizza(pizzaName)}
    });
}

app();