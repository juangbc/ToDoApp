/**
 * Created by Juan Garcia-Berdoy on 09.10.2018.
 */

$(".task-container").click(function() {
 //   var myClass = ;
    if (!$(this).hasClass("selected")) {
        $(this).addClass("selected");
    }
    else {
        $(this).removeClass("selected");
    }
});