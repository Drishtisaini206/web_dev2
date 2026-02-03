// TDZ: when we declare the variable with let and const without its propoer initialization then the variable lies in temporal dead zone untill its proper initialization.


// Q1.

// let marks=[32,11,7,24,19,35,10,0,15,17];

// let res = marks.filter((x)=>{
//     if(x>=16){
//         console.log(x,"pass")
//     }
//     else{
//         console.log(x,"fail")
//     }
// });

// Q2. find the sum of all the elements inside an array with for loop.

// let arr=[1,2,3,4,5]
// let sum=0;
// for(let i=0;i<arr.length;i++){
//     sum=sum+arr[i];
// }
// console.log(sum)

// using reduce method

// let arr=[1,2,3,4,5]

// let res = arr.reduce((acc,current)=>acc+current)
// console.log(res);






