//reduced method basically ussed in array its add accumalteer value in a array elementt
//in reduced method you also defined the call back funcatuin in which has no name

const arr=[1,2,3];
const newarr=arr.reduce( (acc,currvel)=> (acc+currvel),2);

// console.log(newarr);

//you also used for object array

const arr2=[
    {
        name:"iphone",
        price:200
    },
    {
        name:"samsung",
        price:100
    },
    {
        name:"relme",
        price:500
    },
    {
        name:"redmi",
        price:100
    }
]

const newPrice=arr2.reduce(  (acc,item) => (acc+item.price),15)
console.log(newPrice);
