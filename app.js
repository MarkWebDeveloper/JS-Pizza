import promptSync from 'prompt-sync';

import { makePizza } from './modules/makePizza.js';

function app(){
    const prompt = promptSync();
    const pizzaName = prompt("Que pizza quiere?");

    let result = makePizza(pizzaName)

    result.then((resolve) =>{
        if(resolve === undefined)
    });
}
app();