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
    order.status = "completed";
    return order;
}
addPizza({ name: "Ham", price: 12 });
placeOrder("Ham");
orderCompleted(1);
console.log(orderCompleted(1));
console.log(menu);
console.log(orderQueue);
console.log(cashInRegister);
//# sourceMappingURL=index.js.map