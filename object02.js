//Singletone object using constructoe to Declerad The Objectt
// const tindeUser=new Object();//SingleTone Object;
// console.log(tindeUser);//retrun the object{}

const tindeUser={};

tindeUser.name="Niranjna";
tindeUser.id="123ac4";
tindeUser.isloggedIN=true;

// console.log(tindeUser);

//nested object

const regulerUser={
    email:"niranjnaithape9696@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Niranjan",
            lastname:"Ithape"
        }
    }
}

//access netedd object value

// console.log(regulerUser.fullname.userfullname.firstname);//using .operator you can access tha value

//Concate The Two Object
const obj1={1:"A",2:"B"};
const obj2={3:"C",4:"D"};

//we used to assign method to combined the two object
const obj3=Object.assign({},obj1,obj2);
console.log(obj3);

