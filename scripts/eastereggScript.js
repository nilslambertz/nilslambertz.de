let colors = ["#ff00e6", "#ff0000", "#f87100", "#0b7a00", "#00f1f1"];
let usedColors = ["#255583"];
let s = 0;
document.addEventListener('keydown', function(e) {
    if(e.key === "1") {
        s = 1;
    } else {
        if(e.key === "3" && (s === 1 || s === 2)) {
            s++;
        } else {
            if(e.key === "7" && s === 3) {
                animateBackground();
            } else {
                s = 0;
            }
        }
    }
});

function animateBackground() {
    for(let i = 0; i < colors.length + 1; i++) {
        setTimeout(() => {
            changeBackgroundColor();
        }, 1000 * i);
    }
}

function changeBackgroundColor() {
    if(colors.length === 0) {
        colors = Array.from(usedColors);
        usedColors = [];
    }
    s = 0;
    let div = document.getElementById("welcomeDiv")
    let color = colors.splice(Math.floor(Math.random() * colors.length), 1)[0];
    usedColors.push(color);
    div.style.backgroundColor = color;
}
