$('document').ready(function () {
    let title = "nilslambertz.de";
    let titleArr = title.split('');

    $("#blackDiv").animate({opacity: 0}, 500);

    setTimeout(function() {
        /* Scroll to snake */
        //document.querySelector('#snakeDiv').scrollIntoView({behavior: 'smooth'})
        /* */

        document.body.removeChild(document.getElementById("blackDiv"));
        let int = setInterval(function () {
            let typingDiv = $("#typingDiv");
            if (titleArr.length === 0) {
                clearInterval(int);
                typingDiv.animate({opacity: 0, width: 0}, 500);
                $("#welcomeDescription").delay(500).animate({opacity: 1}, 500);
                $("#welcomeSocials").delay(500).animate({opacity: 1}, 500);
                return;
            }
            let op = 0;
            if (document.getElementById("typingDiv").style.opacity === "0") {
                op = 1;
            }
            typingDiv.animate({opacity: op}, 200);

            let span = document.createElement("span");
            span.style.opacity = 0;
            span.innerText = titleArr.shift();
            document.getElementById("titleText").append(span);
            $(span).animate({opacity: 1}, 100);
        }, 300);

        $("#welcomeScrollDown").on('click', function (e) {
            document.querySelector('#arraySortDiv').scrollIntoView({behavior: 'smooth'})
        })

        $("#arraySortScrollDown").on('click', function (e) {
            document.querySelector('#snakeDiv').scrollIntoView({behavior: 'smooth'})
        })

        $("#arraySortScrollUp").on('click', function (e) {
            document.querySelector('#welcomeDiv').scrollIntoView({behavior: 'smooth'})
        })

        $("#snakeScrollUp").on('click', function (e) {
            document.querySelector('#arraySortDiv').scrollIntoView({behavior: 'smooth'})
        })
    }, 500);
});