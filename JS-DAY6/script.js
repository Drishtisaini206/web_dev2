// const headingElement = document.getElementById('myHeading');
// console.log(headingElement);

// headingElement.textContent="New heading";
// headingElement.style.color = "blue";
// headingElement.style.backgroundColor = "yellow";

// Select the first <p> element inside the #content div using querySelector
const paragraph = document.querySelectorAll("#content p");

// Change the text content of the selected paragraph
paragraph.textContent = "This paragraph has been updated using querySelector.";

// Change the style of the selected paragraph
paragraph.style.color = "blue";