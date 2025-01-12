//Arrow function and this keyword;

//this keyword'
//This keyword only work on an Object

const user={
    username:"Niranjan",
    price:999,
    welcomeMesssage:function()
    {
        console.log(`my name is a ${this.username} and price ${this.price}`);
        console.log(this);
        
        
    }
}

// user.welcomeMesssage();
// user.username="Sagar";
// user.welcomeMesssage();


//this keyword refered to the current

//Arrrow funcation


function one ()
{
    let username="Niranjan";
    console.log(this.username);//output:undefined
    //this keyword cant use in a function
    
}
// one();

const two=() =>{
    
    let username="Niranjan";
    console.log(this.username);
    //you cant used The this keyword into the arrow function
    
    
}
// two();

const addTwo=(num1,num2)=>{
    return num1+num2;
}

// console.log(addTwo(20,30));


//implicite retrun arrow funcation

// const Niranjan=(num1,num2) => num1+num2;

const Niranjan=(num1,num2) => (num1+num2)//when you used the brackt then not used the return keyword


// console.log(Niranjan(20,55));

//arrow function with object
const demo=() => ({username:"Niranjan"});//bracket is importanat
console.log(demo());
