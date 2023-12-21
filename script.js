// idea: make a method that takes in an int and uses a for loop to create
// that many squares

const container = document.querySelector(".container");

function makeSquares(numOfSquares) { 
    for(i = 0; i < numOfSquares; i++) {
        const row = document.createElement("div");
        row.classList.toggle("row");
        col.classList.toggle("square");

        for(j = 0; j < numOfSquares - 1; j++) {
            const col = document.createElement("div");
            col.classList.toggle("col");
            col.classList.toggle("item");
            col.classList.toggle("square");

            col.textContent = "item";

            row.appendChild(col);
        }  

        container.appendChild(row);
    }   
}

makeSquares(16);