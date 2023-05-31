//create 16x16 grid square of DIVS!
function createBoard(size) {
    
    // Grab .board class from HTML
    let board = document.querySelector(".board");
    
    //Make grid template
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    //Make squares and their own div under .board
    let numDivs = size * size;
    
    //Creates divs for each square
    for(i = 0; i < numDivs; i++) {
        //createElement (div)
        let div = document.createElement("div");
        div.style.backgroundColor = "yellow";
        board.insertAdjacentElement("beforeend", div)
    }

}


const numberOfSquares = document.querySelector("#numberOfSquares");

//call button use it to call createBoard
numberOfSquares.addEventListener('click', function () {
    let size = getSize();
    createBoard(size);
    
})

//create prompt
function getSize() {
    let input = prompt("Choose the number of Rows and Columns (max. 100)", "");
    if(input > 0 && input <= 100) {
        return input;
    
    } else {
        getSize();
    }
    
}


