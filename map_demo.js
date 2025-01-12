//map
//map also return the value its same like a filter

const myNumbers=[1,2,3,4,5,6,7,8,9,10];

// const newNum=myNumbers.map( (num)=> num+10 )

// console.log(newNum);

//Chaning 
//in chaning bacsically you pass the one method result to anthor methor then all result colletecd last variable
const newNum=myNumbers.map( (num)=>num*10 ).map( (num)=> num+1 ).filter((num)=> num>=41)
console.log(newNum);
