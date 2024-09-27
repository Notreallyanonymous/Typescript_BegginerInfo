"use strict";
let menu: Pizza[]= [
    { name: "Margherita", price: 8 },
    { name: "Pepperoni", price: 10 },
    { name: "Hawaiian", price: 10 },
    { name: "Veggie", price: 9 },
];

interface Pizza {
    name:String, 
    price: number
}



let cashInRegister = 100;
let orderId = 1;
const orderQueue:{id:number, foundObject: object, status: string}[] = [];

function addPizza(pizzaObj:Pizza) {
    menu.push(pizzaObj);
}
function placeOrder(pizzaName:string) {
    const foundObject = menu.find(({ name }) => name === pizzaName);
    if(foundObject == undefined){
        console.log("There was an error finding the order")
    }else{
    cashInRegister += foundObject.price;
    const orderedObject = { id: orderId++, foundObject, status: "order" };
    orderQueue.push(orderedObject);
    return orderedObject;
    }
}
function orderCompleted(orderId:number) {
    const order = orderQueue.find(({ id }) => id === orderId);
    if(order == undefined){
        console.log("There was an error")
    }else{
        order.status = "completed";
        return order;
    }

}
addPizza({ name: "Ham", price: 12 });
placeOrder("Ham");
orderCompleted(1);
console.log(orderCompleted(1));
console.log(menu);
console.log(orderQueue);
console.log(cashInRegister);
//# sourceMappingURL=index.js.map



//obligatory type basic lessons

let myName : string = "Bob";

// Primitative Data Types: string, number, boolean
// Challange: Explicitly type the variables below:

let numberOfWheels : number = 4

let isStudent : boolean = false

type Address = {
    street: string, 
    city: string, 
    country: string
}

type Person = {
    name: string, 
    age: number, 
    isStudent: boolean,
    address?: Address;
}

let person1: Person ={
    name: "Joe", 
    age: 42, 
    isStudent: true,
}



let person2 : Person = {
    name: "mary", 
    age: 22, 
    isStudent: false, 
    address: {
        street: "1234 street",
        city: "Anytown", 
        country: "El Salvador"
    }
}

