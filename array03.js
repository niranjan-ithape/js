const marvel_hero=["Ironman","Spiderman","Thor"];
const dc_hero=["superman","flash","batman"];

// marvel_hero.push(dc_hero);//its push All Array 
// console.log(marvel_hero);
// console.log(marvel_hero[3]);

//Concate() Method Basically Merge The Two Array
const allHero=marvel_hero.concat(dc_hero);
// console.log(allHero);

//spread Operator(...)
const all_newHero=[...marvel_hero,...dc_hero];// spread operator Bascially merge the two array;
// console.log(all_newHero);

//Flat() Method Basically merge the sub array
const anthorArray=[1,2,3,[4,5,6],7,[6,7,[4,5]]];
const real_anthorArray=anthorArray.flat(Infinity);
// console.log(real_anthorArray);

console.log(Array.isArray("Niranjan"));//its tell this Niranjan is Array or not

//Convert The String into The Array using from Method from();
console.log(Array.from("Niranjan"));//its Convert Niranjna Into The Array

console.log(Array.from({name:"Niranjn"}));//its retrun the Array for interview Question

//Of() method basically Convert The multiple variable into The Array
let score1=100;
let score2=200;
let score3=300;
 
console.log(Array.of(score1,score2,score3));


