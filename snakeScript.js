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
    let posI = Math.floor(Math.random() * (height - 1));
    let posJ = Math.floor(Math.random() * (width - 1));

    let itemI = Math.floor(Math.random() * (height - 1));
    let itemJ = Math.floor(Math.random() * (width - 1));
    while(itemI === posI || itemJ === posJ) {
        itemI = Math.floor(Math.random() * (height - 1));
        itemJ = Math.floor(Math.random() * (width - 1));
    }
    item[0] = itemI;
    item[1] = itemJ;
   // snakeDivGrid[i][j].style.backgroundColor = "red";
  //  snakeGrid[i][j] = 1;
    running = true;
    let tail = [];
    tail[0] = [posI, posJ];

    let interval = setInterval(function() {
        if(dir === 187) {
            clearInterval(interval);
        }

        let len = tail.length;
        for (let i = 0; i < height; i++) {
            for (let j = 0; j < width; j++) {
                if(i === item[0] && j === item[1]) {
                    snakeDivGrid[i][j].style.backgroundColor = "green";
                } else {
                    snakeDivGrid[i][j].style.backgroundColor = "black";
                }
            }
        }

        for(let i = 0; i < len; i++) {
            let x = tail[i];
            snakeDivGrid[x[0]][x[1]].style.backgroundColor = "white";
        }
        let temp = [tail[len - 1][0], tail[len - 1][1]];
        let x = [temp[0], temp[1]];
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
            default: {
                console.log("Error");
            }
        }

        for(let i = len - 2; i >= 0; i--) {
            let t = tail[i];
            tail[i] = temp;
            temp = t;
        }

        if(tail[len - 1][0] === item[0] && tail[len - 1][1] === item[1]) {
            let generated = true;
            do {
                generated = true;
                itemI = Math.floor(Math.random() * (height - 1));
                itemJ = Math.floor(Math.random() * (width - 1));
                for(let i = 0; i < len; i++) {
                    if(tail[i][0] === itemI && tail[i][1] === itemJ) {
                        generated = false;
                        itemI = Math.floor(Math.random() * (height - 1));
                        itemJ = Math.floor(Math.random() * (width - 1));
                    }
                }
            } while(!generated);
            item[0] = itemI;
            item[1] = itemJ;

            tail.push(temp);
        }
    }, int);
}

document.addEventListener('keydown', function(e) {
    if(e.key === "w") {
        dir = 0;
        if(!running) {
            snakeGame();
        }
    }
    if(e.key === "a") {
        dir = 1;
        if(!running) {
            snakeGame();
        }
    }
    if(e.key === "s") {
        dir = 2;
        if(!running) {
            snakeGame();
        }
    }
    if(e.key === "d") {
        dir = 3;
        if(!running) {
            snakeGame();
        }
    }
    if(e.key === "x") {
        dir = 187;
    }
});