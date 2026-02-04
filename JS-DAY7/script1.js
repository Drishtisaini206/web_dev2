//create element
const para = DocumentFragment.createElement("p");
para.textContent = "This is a dynamically added paragraph";
console.log(para);


//append element
document.getElementById("content").appendChild(para);


//remove element
document.querrySelector("#content p").remove()

//add and set attributrs in the tag
const image = document.getElementById("img");
image.setAttribute("src","https://img.freepik.com/free-photo/lavender-field-sunset-near-valensole_268835-3910.jpg?semt=ais_hybrid&w=740&q=80")
image.setAttribute("alt","javascript")
const gallery = document.getElementById("gallery");
gallery.appendChild(image);

let date = new Datep();
console.log(date)

setInterval(()=>{
    let date = new Date();
    console.log(date);

    let hour = date.getHours();
    let min = date,getMinutes();
    let second = date.getSeconds();
    const clock = document.getElementById("digi-clock");
    clock.textContent=hour+":"+min+":"+second;
    
    })


