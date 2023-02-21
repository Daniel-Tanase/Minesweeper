let easyBoard = 10;
let mediumBoard = 15;
let extremeBoard = 20;

easy.addEventListener("click", () => createTable(easyBoard));
medium.addEventListener("click", () => createTable(mediumBoard));
extreme.addEventListener("click", () => createTable(extremeBoard));

// recieves the number of lines and columns and creates the table
// hides the fisrt page and displays the second one
function createTable(n) {
    level.style.display = "none";
    document.body.style.backgroundColor = "black";
    for (let i = 0; i < n; ++i) {
        let row = document.createElement("tr");
        for (let j = 0; j < n; ++j) {
            let cell = document.createElement("td");
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
}