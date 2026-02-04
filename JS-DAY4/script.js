let user={
    FullName: "S.P Acharya",
    address:"Gurugram",
    mobileno:1234567890,
    favcolor:["black","white","blue"]
}
console.log(user["FullName"]) 
// we can access the individual value by targeting key with variable name
console.log(user.FullName,user.mobileno,user.favcolor[1]); //S.P Acharya 1234567890 white

let date = new Date()
console.log(date)