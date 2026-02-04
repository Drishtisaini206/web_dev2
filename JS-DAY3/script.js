let sentence = "I am a comma separated sentence";
let words = sentence.split(" ");
console.log(words)

let sentence2 = "I am a comma separated sentence";
let words2 = sentence2.split("a");
console.log(words2)

// Q1.find out the occurance of "r" in the given String.

// let str = "tu meri me tera me teri tu mera";
// let res = str.split("r");
// console.log(res);


// synchronous function : we can move to other task after the previous task finishes its execution.

// Asynchronous function : we can move to another task before the previous task finishes its execution. multiple task will perform simontaniously

// regular function
function demo(){
    console.log("demo")
}
demo()
function sample(a,b){
    return a+b;
}
console.log(sample(5,10))

// arrow function 
// advantage: doesn't need return and function keyword and it will perform asynchronously.

const test=(c,d)=> c+d;
// if we have multiple statements then we have to add return 
// const test=(c,d)=>{
//     return c+d;
// };
console.log(test(4,6))


let arr = [1,2,3,4,5]

let res = arr.map((x)=>{
return x+2
})
console.log(res)



// setTimeout(callback, timedelay);

// setTimeout(()=>{
//     alert("Please sign in")
// },5000)

// setInterval(()=>{
//     console.log("sign up")
// },1000)


// let date = new Date();
// console.log(date)


// (function(){
//     console.log("IIFE");
// })()

// (function(){
//     console.log("This is an IIFE.");
// })();

