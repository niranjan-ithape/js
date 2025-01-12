function myFun({model, brand, price}) { 
    console.log("Model: " + model + "\tBrand: " + brand + "\tPrice: " + price);
}

let car = {
    model: "Nexa",
    brand: "Maruti Suzuki",
    price: 1034000.00
};

// Calling the function with properties of the car object
myFun(car);
