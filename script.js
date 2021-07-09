"use strict";
const grid = document.querySelector(".grid-container");
const resetBtn = document.querySelector("#reset");
let gridNum = 16;

// create initial grid
createGrid(gridNum);
function fillSquare(event) {
  event.target.classList.add("filled-square");
}
// dynamically make the grid using number input - will add user entry functionality later
function createGrid(num) {
  // limit number of squares to reasonable maximum
  if (num > 100) {
    num = 100;
  } else if (isNaN(num)) {
    num = 16;
  }

  for (let i = 0; i < num * num; i++) {
    const square = document.createElement("div");
    square.classList.add("grid-square");
    square.setAttribute(
      "style",
      `width: ${720 / num}px; height: ${720 / num}px`
    );
    grid.appendChild(square);
    square.addEventListener("mouseover", fillSquare);
  }
}

function resetGrid() {
  // remove previous grid
  const squares = document.querySelectorAll(".grid-square");
  squares.forEach((square) => square.remove());
  gridNum = prompt(
    "Please choose the width & height of the grid with a number:"
  );
  createGrid(gridNum);
}

resetBtn.addEventListener("click", resetGrid);
