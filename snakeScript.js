// Setting up snake game
let width = 20;
let height = 10;
let snakeDivGrid = [];
let snakeGrid = [];
let item = [];
let dir = 0;
let running = false;
let int = 200;
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
    let posI = Math.floor(Math.random() * width);
    let posJ = Math.floor(Math.random() * height);
   // snakeDivGrid[i][j].style.backgroundColor = "red";
  //  snakeGrid[i][j] = 1;
    running = true;
    let tail = [];
    tail[0] = [posI, posJ];

    let interval = setInterval(function() {
        let len = tail.length;
        for (let i = 0; i < height; i++) {
            for (let j = 0; j < width; j++) {
                snakeDivGrid[i][j].style.backgroundColor = "black";
            }
        }

        for(let i = 0; i < len; i++) {
            let x = tail[i];
            snakeDivGrid[x[0]][x[1]].style.backgroundColor = "white";
        }
        let temp = tail[len - 1];
        let x = temp;
        switch(dir) {
            case 0: {
                x[0] = (x[0] + height - 1) % height;
                tail[len - 1] = x;
                break;
            }
            case 1: {
                x[1] = (x[1] + width - 1) % width;
                tail[len - 1] = x;
                break;
            }
            case 2: {
                x[0] = (x[0] + height + 1) % height;
                tail[len - 1] = x;
                break;
            }
            case 3: {
                x[1] = (x[1] + width + 1) % width;
                tail[len - 1] = x;
                break;
            }
        }
        for(let i = tail.length-1; i >= 0; i--) {
            let t = tail[i];
            tail[i] = temp;
            temp = t;
        }
        //clearInterval(interval);
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