let paki;
console.log(paki);

//out put is undefined


const num = (num1, num2)=>{
  const addition = num1 + num2;
  //return addition;
}
const addNum = num(9, 69)
console.log(addNum)
//out put is undefined because no return here.


const obj={
  name: 'murad',
  age: 90,
  love: 'you'
}

const myName = obj.name;
console.log(myName)
const mySong = obj.song;

console.log(mySong)
// output is undefined because song property is not declared.

typeof null          // "object" (not "null" for legacy reasons)
typeof undefined     // "undefined"
null === undefined   // false
null  == undefined   // true
null === null        // true
null == null         // true
!null                // true
isNaN(1 + null)      // false
isNaN(1 + undefined) // true