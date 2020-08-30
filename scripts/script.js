let inView = false;
let currentIframe = null;

$('document').ready(function () {
    $("#blackDiv").animate({opacity: 0}, 1000);
    setTimeout(function() {
        $("#blackDiv").css("display", "none");
    },1000);

    $("#welcomeDescription").animate({opacity: 1}, 1000);
    $("#welcomeSocials").animate({opacity: 1}, 1000);
});


function openIframe(iframeID, divID) {
    let iframe = document.getElementById(iframeID);
    let div = document.getElementById(divID);
    let content = document.getElementById("content");
    document.querySelector('#' + divID).scrollIntoView({behavior: 'smooth'})
    document.getElementById("blackDiv").style.display = "inline";
    setTimeout(function() {
        content.innerHTML = "";
        content.append(div);
        $("#blackDiv").animate({opacity: 1}, 700);
        $("#blackDiv").animate({opacity: 0}, 700);
        setTimeout(function() {
            iframe.style.visibility = "visible";
            iframe.style.opacity = "1";
            currentIframe = iframeID;
            inView = true;
        }, 700);
        setTimeout(function() {
            $("#blackDiv").css("display", "none");
        },1400);
    }, 300);
}

function closeIframe() {
    alert("XD");
    console.log("XDD");
    inView = false;
    let elem = document.getElementById(currentIframe);
    elem.style.opacity = "0";
    setTimeout(function () {
        elem.style.visibility = "hidden";
    }, 1000);
}