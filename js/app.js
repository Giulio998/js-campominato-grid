
function startGame() {
    const grid = document.getElementById("grid");
    grid.innerHTML = "" ; 
    const size = parseInt(document.getElementById("difficolta").value)
    const numCells = size ** 2 ;

    function gridGenerator() {
        for (let i = 0; i < numCells; i++) {
            const num = i + 1;
            const cell = document.createElement("div");
            cell.classList.add("cell") ;
            if (size == 10) {
                cell.classList.add("cell10")
            } else if (size == 9) {
                cell.classList.add("cell9")
            } else {
                cell.classList.add("cell8")
            }
    
            cell.innerHTML = num ;
            grid.append(cell);
            cell.addEventListener("click", function() {
                boxToggle(num, cell)           
            });
        }   
    }
    
    gridGenerator()

    function boxToggle(num, cell) {
        console.log(num);
        cell.classList.toggle("bg-blue");
    }   
}

document.getElementById("play").addEventListener("click", startGame)
