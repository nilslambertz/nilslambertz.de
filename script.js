$('document').ready(function () {
    let title = "nilslambertz.de";
    let titleArr = title.split('');
    setInterval(function () {
        let typingSpan = $("#typingSpan");
        if(titleArr.length === 0) {
            typingSpan.animate({opacity: 0}, 500);
            return;
        }
        let op = 0;
        if(document.getElementById("typingSpan").style.opacity === "0") {
            op = 1;
        }
        typingSpan.animate({opacity: op}, 200);

        let span = document.createElement("span");
        span.style.opacity = 0;
        span.innerText = titleArr.shift();
        document.getElementById("titleSpan").append(span);
        $(span).animate({opacity: 1}, 200);
    }, 400);
})