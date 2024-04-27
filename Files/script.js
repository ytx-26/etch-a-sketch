//references the 'container' id in index.html
let container = document.getElementById("container");

//references two input boxes 
let inputOne = document.querySelector(".Input-Field-One");
let inputTwo = document.querySelector(".Input-Field-Two");

inputOne.addEventListener('input', boxRunner);
inputTwo.addEventListener('input', boxRunner);

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
function boxRunner(){
    defaultBoxDimensions();
}
