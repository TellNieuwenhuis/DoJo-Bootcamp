function pizzaOven(crustType, sauceType, cheeses, toppings){
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var p1 = pizzaOven("deep dish", "traditional",["mozzarella"],["pepperoni", "sausage"])
var p2 = pizzaOven("deep dish", "traditional", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"])
var p3 = pizzaOven("hand tossed", "traditional", ["mozzarella"], ["pepperoni", "pineapple"])
var p4 = pizzaOven("pan", "alfredo", ["mozzarella"], ["garlic", "chicken"])

console.log(pizzaOven);
console.log(p1)
console.log(p2)
console.log(p3)
console.log(p4) 



// watched video to figure this out 
var crustType = ['deep dish','pan', 'hand tossed', 'stuffed crust', 'thin crust']

var sauceType = ['marinara', 'creamy garlic', 'barbeque', 'buffalo']

var cheeses = ['mozzarella', 'parmesan', 'gouda', 'goat', 'ricotta', 'feta']

var toppings = ['pepperoni', 'sausage', 'bacon', 'ham', 'chicken', 'mushrooms', 'pineapple', 'olives', ' bell peppers', 'jalapeno', 'tomatoes', 'onions']

function randomRange(max, min){
    return Math.floor(Math.random() * max - min) + min;
}

function randomIngrediants(arr){
    var i =  Math.floor(arr.length * Math.random());
    return arr[i];
}

function randomPizza(){
    var pizza = {}; // embty object
    pizza.crustType = randomIngrediants(crustType);
    pizza.sauceType = randomIngrediants(sauceType);
    pizza.cheeses = randomIngrediants(cheeses);
    pizza.toppings = [];
    /*for(var i = 0; i < randomRange(2,1); i++){            //randomRange numbers indicate the max of 2 and min of 1. This is if you want multiple cheeses
        pizza.cheeses.push(randomIngrediants(cheeses));
    }*/
    for(var i = 0; i < randomRange(3,0); i++){  //randomRange numbers indicate the max of 3 and min of 0
        pizza.toppings.push(randomIngrediants(toppings));
    }
    return pizza;
}

console.log(randomPizza());