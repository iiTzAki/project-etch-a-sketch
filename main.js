const getGridContainer = document.querySelector(".grid-container");

const getResetPadBtn = document.querySelector("#reset-button");
getResetPadBtn.addEventListener("click", () => {
    isColorPenTrue = false; 
    getGridContainer.innerHTML = ""; 
    createGridDivs(16);
})

let isColorPenTrue = false;

const getDynamicColorBtn = document.querySelector("#dynamic-color-btn");
getDynamicColorBtn.addEventListener("click", () => { 
    isColorPenTrue = !isColorPenTrue; 
})

getGridContainer.addEventListener("mouseover", (event) => {

    if (isColorPenTrue === true && event.target.classList.contains("grid-box")) { 
        const randomColor = () => Math.floor(Math.random() * 256);
        event.target.style["background-color"] = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;

    } else if (event.target.classList.contains("grid-box")) { 
        event.target.style["background-color"] = "black";
    };
});

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

