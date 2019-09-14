$("#signUpBtn").click(function() {
    $(".panel-wrap").css("transform", "translateX(0%)");
    $(".overlay-content").css("display", "block");
});

$("button.close").click(function() {
    $(".panel-wrap").css("transform", "translateX(100%)");
    $(".overlay-content").css("display", "none");
});