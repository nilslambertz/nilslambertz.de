// Setting up snake game
let width = 20;
let height = 10;
let snakeDivGrid = [];
let snakeGrid = [];
let dir = 0;
let running = false;
let int = 500;
setupSnakeGrid(width, height);

function setupSnakeGrid(width, height) {
    for (let i = 0; i < height; i++) {
        snakeDivGrid[i] = []
        snakeGrid[i] = []
        for (let j = 0; j < width; j++) {
            let div = document.createElement('div');
            div.style.backgroundColor = "black";
            div.id = i + "-" + j;
            document.getElementById("snakeGrid").append(div);
            snakeDivGrid[i][j] = div;
            snakeGrid[i][j] = 0;
        }
    }
}

// zeile, spalte
function snakeGame() {
    //let i = Math.floor(Math.random() * width);
    //let j = Math.floor(Math.random() * height);
    let posI = 5;
    let posJ = 5;
   // snakeDivGrid[i][j].style.backgroundColor = "red";
  //  snakeGrid[i][j] = 1;
    running = true;
    let tail = [];
    tail[0] = [posI, posJ, 0];

    setInterval(function() {
        for(let i = 0; i < tail.length; i++) {
            let x = tail[i];
            snakeDivGrid[x[0]][x[1]].style.backgroundColor = "white";
        }
        for(let i = 0; i < tail.length; i++) {
            let x = tail[i];
        }
    }, int);
}

document.addEventListener('keydown', function(e) {
    if(e.key === "w") {
        if(running) {
            dir = 0;
        } else {
            snakeGame();
        }
    }
    if(e.key === "a") {
        if(running) {
            dir = 1;
        } else {
            snakeGame();
        }
    }
    if(e.key === "s") {
        if(running) {
            dir = 2;
        } else {
            snakeGame();
        }
    }
    if(e.key === "d") {
        if(running) {
            dir = 3;
        } else {
            snakeGame();
        }
    }
});