$(document).ready(function () {
    // Form label appear when you start typing in inputs 
    $(".contact-form .form-control").on("focusin", function () {
        $(this).siblings().css({ "opacity": 1, "animation-name": "displayLabel" }, 500);
        $(this).attr("placeholder", "");
    });
    $(".contact-form .form-control").on("focusout", function () {
        $(this).siblings().css({ "opacity": 0, "animation-name": "none" }, 500);
        $(this).attr("placeholder", $(this).siblings().text());
    });

    // scroll to top arrow 
    $("#toTop").click(function () {
        $("html, body").scrollTop(0);
    });

    //make year dynamic
    $('.copyright').html('Copyright &copy; Ibrahim Ashour ' + new Date().getFullYear());
});




