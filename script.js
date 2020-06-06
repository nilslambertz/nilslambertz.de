$('document').ready(function () {
    let title = "nilslambertz.de";
    let titleArr = title.split('');
    let int = setInterval(function () {
        let typingDiv = $("#typingDiv");
        if(titleArr.length === 0) {
            clearInterval(int);
            typingDiv.animate({opacity: 0, width: 0}, 500);
            $("#welcomeDescription").delay(500).animate({opacity: 1}, 500);
            $("#welcomeSocials").delay(500).animate({opacity: 1}, 500);
            return;
        }
        let op = 0;
        if(document.getElementById("typingDiv").style.opacity === "0") {
            op = 1;
        }
        typingDiv.animate({opacity: op}, 200);

        let span = document.createElement("span");
        span.style.opacity = 0;
        span.innerText = titleArr.shift();
        document.getElementById("titleSpan").append(span);
        $(span).animate({opacity: 1}, 200);
    }, 400);

    $("#welcomeScrollDown").on('click', function(e) {
        document.querySelector('#arraySortDiv').scrollIntoView({ behavior: 'smooth' })
    })

    $("#arraySortScrollDown").on('click', function(e) {
        document.querySelector('#testDiv').scrollIntoView({ behavior: 'smooth' })
    })

    $("#arraySortScrollUp").on('click', function(e) {
        document.querySelector('#welcomeDiv').scrollIntoView({ behavior: 'smooth' })
    })

    $("#testDivScrollUp").on('click', function(e) {
        document.querySelector('#arraySortDiv').scrollIntoView({ behavior: 'smooth' })
    })
})

let colors = ["#4e4d4d", "#ff00e6", "#ff0000", "#f87100", "#14f100", "#00f1f1"]
let s = 0;
document.addEventListener('keydown', function(e) {
    console.log("e.key = " + e.key + "; state = " + s);
    if(e.key == "1" && s == 0) {
        s = 1;
    } else {
        if(e.key == "3" && (s == 1 || s == 2)) {
            s++;
        } else {
            if(e.key == "7" && s == 3) {
                s = 0;
                let div = document.getElementById("welcomeDiv")
                let color = colors.splice(Math.floor(Math.random() * colors.length), 1)[0];
                colors.push(div.style.backgroundColor);
                div.style.backgroundColor = color;
            } else {
                s = 0;
            }
        }
    }
})
