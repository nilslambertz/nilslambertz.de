$(document).ready(function() {
    loadPage();
});

document.getElementById("arraySortDiv").onclick = function() {

}

function refresh() {
    document.getElementById("topBar").style.opacity = 0;
    document.getElementById("divider").style.width = "0px";
    //$(".contentBox").css("opacity", 0);
    loadPage();
}

function loadPage() {
    $("#topBar").animate({
        width: "100%",
        opacity: "0.7"
    }, 1000);
    $("#divider").animate({
        width: "100%"
    }, 1000)

    let d = 500;
    $(".contentBox").each(function() {
        let box = $(this)
        box.delay(d).animate({
            opacity: 1
        })
        d+=200;
    })
}