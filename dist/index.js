"use strict";
let menu = [
    { name: "Margherita", price: 8 },
    { name: "Pepperoni", price: 10 },
    { name: "Hawaiian", price: 10 },
    { name: "Veggie", price: 9 },
];
let cashInRegister = 100;
let orderId = 1;
const orderQueue = [];
function addPizza(pizzaObj) {
    menu.push(pizzaObj);
}
function placeOrder(pizzaName) {
    const foundObject = menu.find(({ name }) => name === pizzaName);
    if (foundObject == undefined) {
        console.log("There was an error finding the order");
    }
    else {
        cashInRegister += foundObject.price;
        const orderedObject = { id: orderId++, foundObject, status: "order" };
        orderQueue.push(orderedObject);
        return orderedObject;
    }
}
function orderCompleted(orderId) {
    const order = orderQueue.find(({ id }) => id === orderId);
    if (order == undefined) {
        console.log("There was an error");
    }
    else {
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
let myName = "Bob";
// Primitative Data Types: string, number, boolean
// Challange: Explicitly type the variables below:
let numberOfWheels = 4;
let isStudent = false;
let person1 = {
    name: "mary",
    age: 22,
    isStudent: false,
    address: {
        street: "1234 street",
        city: "Anytown",
        country: "El Salvador"
    }
};
let favoriteFood = "pizza";
//# sourceMappingURL=index.js.map