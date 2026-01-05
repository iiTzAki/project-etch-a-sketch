const getGridContainer = document.querySelector(".grid-container");


getGridContainer.addEventListener("mouseover", (event) => {

    const target = event.target;
    const getRandomColor = () => Math.floor(Math.random() * 256);

    if (!target.classList.contains("grid-box")) return;

    if (isOpacityOn) {
    
        if (!target.dataset.countOpacity) {
            target.dataset.countOpacity = 0.1; 
        } else {
            target.dataset.countOpacity = Math.min(parseFloat(target.dataset.countOpacity) + 0.1, 1);
        } 

        target.style['background-color'] = 
            `rgba(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()}, ${target.dataset.countOpacity})`;

    } else { 
        const finalColor = isColorPenOn
            ? `rgb(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`
            : "black";

        target.style["background-color"] = finalColor;
    }
});


const getResetPadBtn = document.querySelector("#reset-button").addEventListener("click", () => {
    getGridContainer.innerHTML = ""; 
    createGridDivs(16);
})


let isColorPenOn = false;
let isOpacityOn = false;


const getOpacityBtn = document.querySelector("#opacity-btn").addEventListener("click", (event) => { 
    isOpacityOn = !isOpacityOn;
    event.target.classList.toggle("active");
})

const getDynamicColorBtn = document.querySelector("#dynamic-color-btn").addEventListener("click", (event) => {
    isColorPenOn = !isColorPenOn; 
    event.target.classList.toggle("active");
})



const getResetGridBtn = document.querySelector("#new-grid-button");
getResetGridBtn.addEventListener("click", () => {
    const squareVal = parseInt(prompt("Reset the pad: Pick a number between 1-100")); 

    if (squareVal <= 0 || squareVal > 100) {
        alert("Pick a number between 1-100 for sketch pad.")
        return;
    }

    createGridDivs(squareVal)
})



function createGridDivs(squareVal) {

    getGridContainer.innerHTML = "";

    const squareSize = (750 / squareVal);

    for (let i = 0; i < squareVal * squareVal; i++) { 
        const newGridDivs = document.createElement("div"); 
        newGridDivs.classList.add("grid-box");

        newGridDivs.style['height'] = `${squareSize}px`;
        newGridDivs.style['width'] = `${squareSize}px`;
        newGridDivs.style['boxSizing'] = "border-box";
        newGridDivs.style['border'] = "0.1px solid black";

        getGridContainer.appendChild(newGridDivs);
    };
};

createGridDivs(16);

