/**
 * Created by Juan Garcia-Berdoy on 09.10.2018.
 */

$(".task-container").on('click', function() {
    if (!$(this).hasClass("selected-task")) {
        $(this).addClass("selected-task");
        $(this).siblings(".task-container").addClass("sibling-of-selected-task");
    }

    else {
        $(this).removeClass("selected-task");

        if(!$(this).siblings().hasClass("selected-task")) {
            $(this).siblings().removeClass("sibling-of-selected-task");
        }
        else {
        $(this).addClass("sibling-of-selected-task");
        }
    }
});

$(".task-container").on('click', function() {
    if ($(".selected-task").hasClass("sibling-of-selected-task")) {
        $(".selected-task").removeClass("sibling-of-selected-task");
    }
});

