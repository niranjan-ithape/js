//Array 
//in array You can store a Differeen  data type element 
// array create shallow copy of an object whose properties share The same reference
//array do not create deep copy of an object whose properties do not share the same reference;
const arr=[1,3,"Niranjan",23.4,true];
const myArray=["Niranjan","Hitesh"];

//dynamic Memory Allocation(used heap Memory)
const myArr2=new Array(1,2,3,5,6);

//Array Methods
//1)push at the end of array element 
// arr.push(6);
// // console.log(arr);

//2)pop() methoed its remove the last elemet of the array 
arr.pop();
console.log(arr);

//3)unshift() method bascially add the elemnet at the begining 
arr.unshift(10);
console.log(arr);

//4)shift() method bacially  Remove The Start Element
arr.shift(56);
console.log(arr);

//5)include() methos bascially tell the element is present or not 
console.log(arr.includes("Niranjan"));//ouput true or False

//6) join() Method bascially retrun the all arrray value in String
const newArray=arr.join();
console.log(newArray);
console.log(typeof(newArray));//String 

//7 slice or splice method 










