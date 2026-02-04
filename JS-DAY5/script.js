// var a=10;
// console.log(a);
// function demo(){
//     let b=20;
//     console.log(b);
// }
// demo()

let user={
    FullName: "S.P Acharya",
    address:"Gurugram",
    mobileno:1234567890,
    favcolor:["black","white","blue"]
}
// console.log(user.favcolor[1]);
// console.log(Object.keys(user))
// console.log(Object.values(user));
// console.log(Object.entries(user));

const car = { 
    make: "Mahindra", 
    model: "Thar" 
};
// Object.seal(car);

Object.seal(car);
car.model="XEV9E"
car.color = "Blue"; // This property addition is ignored.
console.log(car);


