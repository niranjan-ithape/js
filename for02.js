//for each loop
//in for each loop there used a call back funcation but in this funcation there  are not a funcation name
const arr=["cpp","java","ruby","python","js"]
// arr.forEach( function(item) {
//     console.log(item);
    
// })

//using arrow funcation 

// arr.forEach( (item)=>{
//     console.log(item);
    
// })

//second approach you can pass a p paramter as funcation 

// function printme(item)
// {
//     console.log(item);
    
// }

// arr.forEach(printme())//only you can pass paramter as a funcattion not a all excutable funcstion 

//in arrow funcation also contain index of array and also contain all array

// arr.forEach((item,index,arr)=>{

//     console.log(item,index,arr);
    
// })

const myArray=[
    {
        langName:"java",
        langVersion:8
    },
    {
        langName:"js",
        langVersion:8
    },
    {
        langName:"cpp",
        langVersion:9
    }
]

myArray.forEach((item)=>{

    console.log(item.langName);
    console.log(item.langVersion);
    
    

})