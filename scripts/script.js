$('document').ready(function () {
    $("#blackDiv").animate({opacity: 0}, 1000);
    setTimeout(function() {
        $("#blackDiv").css("display", "none");
    },1000);

    $("#welcomeDescription").animate({opacity: 1}, 1000);
    $("#welcomeSocials").animate({opacity: 1}, 1000);
});