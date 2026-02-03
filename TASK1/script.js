const profile = document.getElementById("profile");
profile.style.backgroundColor=("pink");
profile.style.padding=("15px");
profile.style.textAlign=("center")


//task2
const x = document.getElementsByClassName("important");
console.log(x)
for (let i=0;i<x.length;i++){
    x[i].style.color = "red";
    x[i].style.fontSize = "40px";

}

// task 3 
const task3 = document.getElementsByTagName("p");
console.log(task3);
for(let i=0;i<task3.length;i++){
    if (i%2===0){
        task3[i].style.color = "green";
        } 
    else{
        task3[i].style.color = "blue";
        } 
}
task3[task3.length-1].style.fontWeight=("bold");



// task 4
const task4 = document.querySelector(".box")
for(let i=0;i<task4.length;i++){
    task4.style.backgroundColor="yellow";
}
task4.textContent = "im first box";



//task5
const section=document.getElementById("content")
const task5= section.querySelectorAll("#content");
for(let i=0;i<task5.length;i++){
    task5[i].style.color="purple"
}