// Setting up snake game
let width = 20;
let height = 10;
let snakeDivGrid = [];
let snakeGrid = [];
let item = [];
let tail = [];
let dir = 0;
let running = false;
let int = 200;
let interval = null;
let text = "";
setupSnakeGrid(width, height);

text = document.getElementById("snakeText").innerHTML;

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
    document.getElementById("snakeOverlay").classList.remove("visible");
    document.getElementById("snakeOverlay").classList.add("invisible");

    let posI = Math.floor(Math.random() * (height - 1));
    let posJ = Math.floor(Math.random() * (width - 1));

    let itemI = Math.floor(Math.random() * (height - 1));
    let itemJ = Math.floor(Math.random() * (width - 1));
    while(itemI === posI && itemJ === posJ) {
        itemI = Math.floor(Math.random() * (height - 1));
        itemJ = Math.floor(Math.random() * (width - 1));
    }
    item[0] = itemI;
    item[1] = itemJ;

    running = true;
    tail[0] = [posI, posJ];

    interval = setInterval(function() {
        if(!running) {
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


        for(let i = 1; i < len; i++) {
            let x = tail[i];
            snakeDivGrid[x[0]][x[1]].style.backgroundColor = "grey";
        }
        snakeDivGrid[tail[0][0]][tail[0][1]].style.backgroundColor = "white";

        let temp = [tail[0][0], tail[0][1]];
        let x = [temp[0], temp[1]];
        switch(dir) {
            case 0: {
                x[0] = (x[0] + height - 1) % height;
                tail[0] = x;
                break;
            }
            case 1: {
                x[1] = (x[1] + width - 1) % width;
                tail[0] = x;
                break;
            }
            case 2: {
                x[0] = (x[0] + height + 1) % height;
                tail[0] = x;
                break;
            }
            case 3: {
                x[1] = (x[1] + width + 1) % width;
                tail[0] = x;
                break;
            }
            default: {
                console.log("Error");
            }
        }

        for(let i = 1; i < len; i++) {
            let t = tail[i];
            tail[i] = temp;
            temp = t;
        }

        for(let i = 0; i < len; i++) {
            for(let j = i+1; j < len; j++) {
                let pos1 = tail[i];
                let pos2 = tail[j];
                if(pos1[0] === pos2[0] && pos1[1] === pos2[1]) {
                    clearInterval(interval);
                    running = false;
                    document.getElementById("snakeOverlay").classList.remove("invisible");
                    document.getElementById("snakeOverlay").classList.add("visible");
                    document.getElementById("snakeText").innerHTML = "<span style='color: red; font-weight: bold'>Game over!</span>" + text;
                    return;
                }
            }
        }

        if(tail[0][0] === item[0] && tail[0][1] === item[1]) {
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

            tail[len] = temp;
        }
    }, int);
}

function startGameClick() {
    if(!running) {
        snakeGame();
    }
}

document.addEventListener('keydown', function(e) {
    if(e.key === "Escape") {
        if(!running) return;
        clearInterval(interval);
        document.getElementById("snakeOverlay").classList.remove("invisible");
        document.getElementById("snakeOverlay").classList.add("visible");
        document.getElementById("snakeText").innerHTML = text;
        running = false;
    }

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
});