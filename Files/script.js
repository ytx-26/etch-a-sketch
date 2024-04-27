//references the 'container' id in index.html
let container = document.getElementById("container");

for (let i = 0; i < 16*16; i++){
    //creates a new div element
    let newDiv = document.createElement("div"); 

    //adds the new div to be inside of 'container'
    container.appendChild(newDiv);
    //adds class 'boxes' to the divs
    newDiv.classList.add("boxes");
}

//Grid input 

let inputOne = document.querySelector(".Input-Field-One");
let inputTwo = document.querySelector(".Input-Field-Two");

inputOne.addEventListener('input', updateBoxDimensions);
inputTwo.addEventListener('input', updateBoxDimensions);

function updateBoxDimensions(){ 
    const width = inputOne.value; 
    const height = inputTwo.value;

    let boxes = document.querySelectorAll(".boxes");

    boxes.style.height = "calc(500px/height)"
    boxes.style.width = "calc(500px/width)"


}
