$('document').ready(function () {
    let title = "nilslambertz.de";
    let titleArr = title.split('');
    setInterval(function () {
        let typingDiv = $("#typingDiv");
        if(titleArr.length === 0) {
            typingDiv.animate({opacity: 0, width: 0}, 500);
            $("#welcomeDescription").delay(500).animate({opacity: 1}, 500);
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