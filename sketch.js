let color = "black";

document.addEventListener("DOMContentLoaded", function() {
    createBoard(16);

    const btnPopup = document.querySelector("#popup");

    btnPopup.addEventListener("click", function() {
        const size = getSize();
        createBoard(size);
        resetBoard();
    });
});

function createBoard(size) {
    const board = document.querySelector(".board");

    board.style.gridTemplateColumns = `repeat(${size},1fr)`;
    board.style.gridTemplateRows = `repeat(${size},1fr)`;

    const numDivs = size * size;

    for (let i = 0; i < numDivs; i++){
        const div = document.createElement("div");

        div.addEventListener("mouseover", colorDiv);
        board.insertAdjacentElement("beforeend", div);
    }
}

function getSize() {
    const input = prompt("Size of the board");

    const message = document.querySelector("#text");

    if(input === ""){
        message.innerHTML = "Please provide a number";
    }
    else if (input <= 0 || input > 100){
        message.innerHTML = "Please provide a number between 1 and 100";
    }
    else{
        message.innerHTML = "Now you can play!";
        return input;
    }
}

function colorDiv() {
    if (color === "random"){
        this.style.backgroundColor = `hsl(${Math.random() * 360} , 100% , 50%)`;
    }
    else{
        this.style.backgroundColor = color;
    }
}

function setColor(colorChoice) {
    color = colorChoice;
}

function resetBoard() {
    const divs = document.querySelectorAll("div");

    divs.forEach((div) => (div.style.backgroundColor = "lightgrey"));
}
