//immediately invoked Funcation Expressions (IIFE);

(function coffe()//namw iife
{
console.log("DB CONNECTED");//semicolan is importent

})(); //You Can Called The Immediately function using bracket;

//using arrow function

((name)=>{
    console.log(`DB CONNETED TWO ${name}`);
    
})('Niranjan');//semicolan is importent