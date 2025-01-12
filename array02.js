//Slice and splice
//using slice method
const myarr=[0,1,2,3,4];
console.log("A ",myarr);

const myarr1=myarr.slice(1,3);
console.log(myarr1);//output 1,2
//after slice operation orignal array
console.log("B",myarr);//Orignal Array print 

// using splice operation

const myarr2=myarr.splice(1,3);
console.log(myarr2);//Output 1,2,3

//after Slice Operation Orignal array is 
console.log("C",myarr);//its remove the value from splice Orignal array



 