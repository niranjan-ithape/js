let rectangle={
    length:1,
    breadth:2,
    draw:function()//this is method 
    {
        console.log("this is Funcation ");
        
    }
}

// console.log(rectangle.length);
// console.log(rectangle.breadth);
// console.log(rectangle.draw());


//factory function 
function createRectangle(len,bre){
    return  rectangle={
        length:len,
        breadth:bre,
        draw:function()//this is method 
        {
            console.log("Drawing Rectangle");
            
        }
    }
    
}


let obj=createRectangle(10,20);
// console.log(obj.breadth);
// console.log(obj.length);
// console.log(obj.draw());


//Constructor Function 
function Rectangle()
{
    this.length=1;
    this.breadth=2;
    this.draw=function()
    {
        console.log("Drawing ");
        
    }
}
//object using construcation function
let rectangleobject=new Rectangle();//new keyword return empty object
// console.log(rectangleobject.breadth);
// console.log(rectangleobject.length);
// console.log(rectangle.draw());
//adding the propertis on object 
rectangleobject.color='blue';
console.log(rectangleobject.color);
//delete the objct properties on object
delete rectangleobject.color;
console.log(rectangleobject.color);


//Dynamic Nature of Object


