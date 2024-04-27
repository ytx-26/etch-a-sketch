//references the 'container' id in index.html
let container = document.getElementById("container");

//references two input boxes 
let inputOne = document.querySelector(".Input-Field-One");
let inputTwo = document.querySelector(".Input-Field-Two");


function defaultBoxDimensions(){
    //clears container beforehand
    container.innerHTML = '';

    //gets the value of input box 
    const width = inputOne.value; 
    const height = inputTwo.value;

    for (let i = 0; i < width * height; i++){
        //creates a new div element
        let newDiv = document.createElement("div"); 
    
        //adds the new div to be inside of 'container'
        container.appendChild(newDiv);
        //adds class 'boxes' to the divs
        newDiv.classList.add("boxes");
    }
}

//Function call
let boxRunner = defaultBoxDimensions();

//Grid input 

inputOne.addEventListener('input', updateBoxDimensions);
inputTwo.addEventListener('input', updateBoxDimensions);

function updateBoxDimensions(){ 

    let boxes = document.querySelectorAll(".boxes");

    boxes.style.height = "calc(500px/height)"
    boxes.style.width = "calc(500px/width)"


}
