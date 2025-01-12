//for in loop bacially return the key value
const myObj={
    js:"javascript",
    cpp:"c++",
    rb:"ruby",
    swift:"swift by apple"
}
//for in loop used for the print the object value

// for(const key in myObj)
// {
//     console.log(myObj[key]);
    
// }

const arr=[1,3,4,5,6,7,8];

// for(const val in arr)
// {
//     console.log(arr[val]);
    
// }

const map=new Map()
map.set('IN',"India");
map.set('FR',"France");
map.set('USA',"United State Of America");

//map are not a itreted;
for(const key in map)
{
    console.log(key);
    
}