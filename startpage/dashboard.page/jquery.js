/**
 * Created by Juan Garcia-Berdoy on 09.10.2018.
 */
// Whole-script strict mode syntax
"use strict";
//window.onload = main();

/*
function main() {
    document.querySelector(".this1").onclick = function() {functionClickOne()};
    }

function functionClickOne() {
var x = document.querySelector(".flex-container .column:nth-child(2");
    x.style.background = "green";
}
*/


/*
function functionClickOne(x) {
    if (!hasClass(x,"selected-task")) {
        addClass(x,"selected-task");
        var x = getSiblingsWithACertainClassName(x);
        x.addClass("sibling-of-selected-task");
    }
}

function addClass(el, className) {
    if (el.classList) el.classList.add(className);
    else if (!hasClass(el, className)) el.className += ' ' + className;
}

function hasClass(el, className) {
    return el.classList ? el.classList.contains(className) : new RegExp('\\b'+ className+'\\b').test(el.className);
}

function getSiblingsWithACertainClassName(el, filter) {
    var siblings = [];
    el = el.parentNode.firstChild;
    do { if (!filter || filter(el)) siblings.push(el); } while (el = el.nextSibling);
    return siblings;
}
*/

/*
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
*/


/*
$(".task-container").on('click', function() {
    if ($(".selected-task").hasClass("sibling-of-selected-task")) {
        $(".selected-task").removeClass("sibling-of-selected-task");
    }
});
*/

//wird aufeglöst

/*
 document.getElementById("demo").onclick = function() {myFunction()};
 document.querySelector(".task-container").onclick = function() {functionClickOne()};

 function functionClickOne(this) {
    if (!hasClass(this,"selected-task")) {
        addClass(this,"selected-task");
        var x = getSiblingsWithACertainClassName(this);
        x.addClass("sibling-of-selected-task");
 }
 }


 function addClass(el, className) {
 if (el.classList) el.classList.add(className);
 else if (!hasClass(el, className)) el.className += ' ' + className;
 }

 function hasClass(el, className) {
 return el.classList ? el.classList.contains(className) : new RegExp('\\b'+ className+'\\b').test(el.className);
 }



 $(this).siblings(".task-container").addClass("sibling-of-selected-task");

 function getSiblingsWithACertainClassName(el, filter) {
 var siblings = [];
 el = el.parentNode.firstChild;
 do { if (!filter || filter(el)) siblings.push(el); } while (el = el.nextSibling);
 return siblings;
 }

document.querySelector(".task-container");
var sibs = getSiblingsWithACertainClassName(el);


 function hasClass(el, className) {
 return el.classList ? el.classList.contains(className) : new RegExp('\\b'+ className+'\\b').test(el.className);
 }

 function addClass(el, className) {
 if (el.classList) el.classList.add(className);
 else if (!hasClass(el, className)) el.className += ' ' + className;
 }

 function removeClass(el, className) {
 if (el.classList) el.classList.remove(className);
 else el.className = el.className.replace(new RegExp('\\b'+ className+'\\b', 'g'), '');
 }

 */
