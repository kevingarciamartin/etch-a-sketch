const gridSize = 16;
const color = "black";

const grid = document.querySelector(".grid");

createGrid(gridSize);

function createGrid(gridSize) {
    grid.style.cssText = `grid-template-columns: repeat(${gridSize}, 1fr);`
                        +`grid-template-rows: repeat(${gridSize}, 1fr)`;

    const numberOfCells = gridSize ** 2;
    
    for (let i = 0; i < numberOfCells; i++) {
        const gridCell = document.createElement("div");
        gridCell.classList.add("cell");
        grid.appendChild(gridCell);

        // Change color of a cell when hovered
        gridCell.addEventListener("mouseover", colorCell);
    }
}

function colorCell() {
    this.style.backgroundColor = color;
}