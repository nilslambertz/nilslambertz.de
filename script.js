$(document).ready(function() {
    loadPage();
});

document.getElementById("arraySortDiv").onclick = function() {
    window.location.href = "https://nilslambertz.github.io/SortVisualization/";
}

function refresh() {
    location.reload();
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
        d+=300;
    })
}