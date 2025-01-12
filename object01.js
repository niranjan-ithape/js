//SingleTon When You Create a object Using Constructore This is called SingleTone 

// Object.create //singleToene Sysntex

//Object Literals
//in object key and values are There

//Declerad The Symbol
const mysym=Symbol("key1");

const jsUser={
    name:"Niranjan",
    age:22,
    [mysym]:"mykey1",//its Declerad The Symbol using square Noataion;
    location:"pune",
    email:"niranjanithape9696@gmail.com",
    isLoggedin:true,
    lastLoggedinDays:["Monday","Sunday","Thursday","Friday","Saturday"]
}

//we can aceesd The object value Using (.)operator and [] squareoperator
// console.log(jsUser.email);
// console.log(jsUser["email"]);//key basically Convert Into The String 
// console.log(jsUser[mysym]);//you can accessd the symbol Value Using square Noataiono


//Change The Object Value using =
// jsUser.name="Ritesh";

//freeeze() method bacially Lock The object  Value You cannot Change it 
// Object.freeze(jsUser);
// jsUser.name="Niranjna";//You cant change the value 

//object using funcation 

jsUser.greeting=function()
{
    console.log("Hello Js User");
    
}
console.log(jsUser.greeting);//output Funcation Anonymous
console.log(jsUser.greeting());

//we can The accessd The Object value using funcation 

jsUser.greetingTwo=function()
{
    console.log(`My Name is ${this.name}`);//this operatoe refer The current object value
    
}

console.log(jsUser.greetingTwo());





