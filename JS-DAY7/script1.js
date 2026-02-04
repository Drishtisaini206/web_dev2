

// create element
// const para = document.createElement("p");
// para.textContent="This is a dynamically added paragraph";
// console.log(para);

// append element
// document.getElementById("content").appendChild(para)

// remove element
// document.querySelector("#content p").remove()




// const image=document.createElement("img");

// to add and set the attribute in the tag
// image.setAttribute("src","https://www.w3schools.com/js/img_javascript_480.jpg")

// image.setAttribute("alt","JavsScript")

// const gallery = document.getElementById("gallery");
// gallery.appendChild(image);



// const childParagraph = document.querySelector('#parent p');
// const parentDiv = childParagraph.parentElement;
// console.log(parentDiv.id); // Output: "parent"

// Children
// nextElementSibling





setInterval(() => {
    let date = new Date();
    console.log(date);

    let hour = date.getHours();
    let min = date.getMinutes();
    let second = date.getSeconds();

    const clock = document.getElementById("digi-clock");

    // clock.textContent=hour+":"+min+":"+second;
    clock.textContent=`${hour}:${min}:${second}`;

}, 1000)


