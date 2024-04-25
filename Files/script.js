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

let input = document.getElementsByClassName("Input-Field");