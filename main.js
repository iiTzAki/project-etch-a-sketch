const getGridContainer = document.querySelector(".grid-container");

const getResetButton = document.querySelector("#reset-button");
getResetButton.addEventListener("click", () => {
    const squareVal = Number(prompt("Reset the pad: Pick a number between 1-100")); 

    if (squareVal <= 0 || squareVal >= 100) {
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

    getGridContainer.addEventListener("mouseover", (event) => { 
        if (event.target.classList.contains("grid-box")) { 
            event.target.style["background-color"] = "black"
        }
    })
};

createGridDivs(16);

