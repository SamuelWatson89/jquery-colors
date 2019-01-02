$(document).ready(function () {
    $(".theButton").mouseenter(function () {
        // $(this).parent().siblings().fadeTo('slow', 0.5);
        var col = $(this).css('background-color');
        $('.superButton').text(col);
    });

    $(".theButton").mouseleave(function () {
        $('.superButton').text("Reset");
    });

    $(".superButton").click(function () {
        var buttonParent = $(".theButton").parent();
        buttonParent.fadeTo('medium', 1)
        $(this).text("Reset")
    });

    //$(".theButton").mouseenter(function () {
    //    $(this).addClass("makeBlack");
    //});

    // $(".theButton").mouseleave(function () {
    //    $(this).removeClass("makeBlack");
    //});
});