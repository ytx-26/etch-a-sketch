//References the 'container' id in index.html
let container = document.getElementById("container");

//References to the two input boxes
let inputOne = document.querySelector(".Input-Field-One");
let inputTwo = document.querySelector(".Input-Field-Two");

//Event Listeners
inputOne.addEventListener('input', boxRunner);
inputTwo.addEventListener('input', boxRunner);

function defaultBoxDimensions(){
    //clears container beforehand
    container.innerHTML = '';

    //gets the value of input box 
    const width = inputOne.value; 
    const height = inputTwo.value.trim();

    for (let i = 0; i < width * height; i++){
        //creates a new div element
        let newDiv = document.createElement("div"); 
    
        //adds the new div to be inside of 'container'
        container.appendChild(newDiv);
        //adds class 'boxes' to the divs
        newDiv.classList.add("boxes");
        newDiv.style.width = `calc(500px/ ${width})`;
        newDiv.style.height = `calc(500px/ ${height})`;
    }
    console.log("Width:", width, "Height:", height);

}

//Function call
function boxRunner(){
    console.log("boxRunner called");
    defaultBoxDimensions();
}

//Changing Background-Colour 


function backgroundColour(event) {
    event.target.style.backgroundColor = "black";
    console.log('black')
}

let boxSelection = document.querySelectorAll('.boxes');

boxSelection.forEach(boxes => {
    boxes.addEventListener('click', backgroundColour);
});
