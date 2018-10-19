/**
 * Created by Juan Garcia-Berdoy on 18.10.2018.
 */
// Whole-script strict mode syntax
"use strict";
window.onload = main();

function main() {
    addTheEventListeners();
}

function addTheEventListeners() {
    var divs = document.querySelectorAll('.task-container'), i;
    for (i = 0; i < divs.length; i++) {
        divs[i].addEventListener('click', functionClickOne);
    }
}

function functionClickOne() {
    var clickEvent = event.target;
    if (!hasClass(clickEvent,"selected-task")) {
        clickEvent.classList.add("selected-task");
        var arrayOfElements = getSiblingsWithACertainClassName(clickEvent,"task-container");
        addClassToAllElements(arrayOfElements,"sibling-of-selected-task");
    }
    else {
        removeClass(clickEvent, "selected-task");

        if(doesAnyOfTheElementsHaveTheClass(clickEvent,"selected-task")){
            clickEvent.classList.add("sibling-of-selected-task");
        }
        else removeClassOfAllElements(clickEvent,"sibling-of-selected-task");
    }
}

function doesAnyOfTheElementsHaveTheClass(elem,className) {
    var arrayOfSiblings = getAllSiblings(elem);
    for (var i = 0; i < arrayOfSiblings.length; ++i) {
        if (arrayOfSiblings[i].classList.contains(className)) {
            return true;
        }
    }
}

function removeClassOfAllElements(elem,classToBeRemoved) {
    var arrayOfSiblings = getAllSiblings(elem);
    for (var i = 0; i < arrayOfSiblings.length; ++i) {
        arrayOfSiblings[i].classList.remove(classToBeRemoved);
    }
}

function addClassToAllElements(elem,classToBeAdded) {
    for (var i = 0; i < elem.length; ++i) {
        elem[i].classList.add(classToBeAdded);
    }
}

function hasClass(el, className) {
    return el.classList ? el.classList.contains(className) : new RegExp('\\b'+ className+'\\b').test(el.className);
}

function getAllSiblings(elem) {
    return Array.prototype.filter.call(elem.parentNode.children, function (sibling) {
        return true;
    });
}

function getSiblingsWithACertainClassName(elem,filter) {
    return Array.prototype.filter.call(elem.parentNode.children, function (sibling) {
        if(sibling.className == filter) {
            return true;
        }
        else
            return false;
    });
}

function removeClass(el, className) {
    if (el.classList) el.classList.remove(className);
    else el.className = el.className.replace(new RegExp('\\b'+ className+'\\b', 'g'), '');
}

 function addClass(el, className) {
     if (el.classList) el.classList.add(className);
     else if (!hasClass(el, className)) el.className += ' ' + className;
 }
