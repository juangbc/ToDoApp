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
    var taskEventListeners = document.querySelectorAll('.task-container');
    taskEventListeners.forEach(function (value) {
        value.addEventListener('click', clickEvent);
    });
}

function clickEvent(event) {
    event = event.target;

    if (!hasClass(event,"selected-task")) {
        addClass(event,"selected-task");
        var arrayOfSiblings = getArrayOfSiblingsWithClassname(event,"task-container");
        addClassToAllElements(arrayOfSiblings,"sibling-of-selected-task");
    }
    else {
        removeClass(event, "selected-task");

        if(doesAnyOfTheSiblingsHaveTheClass(event,"selected-task")){
            addClass(event,"sibling-of-selected-task");
        }
        else removeClassOfAllSiblings(event,"sibling-of-selected-task");
    }
}

function hasClass(elem, className) {
    if (elem.classList)
        return elem.classList.contains(className);
    else
        return new RegExp('(^| )' + className + '( |$)', 'gi').test(elem.className);
}

function addClass(elem, className) {
    if (elem.classList) elem.classList.add(className);
    else if (!hasClass(elem, className)) elem.className += ' ' + className;
}

function getArrayOfSiblingsWithClassname(elem,classname) {
    return Array.prototype.filter.call(elem.parentNode.children, function (sibling) {
        if(sibling.className == classname) {
            return true;
        }
    });
}

function addClassToAllElements(arrayOfElements,classToBeAdded) {
    arrayOfElements.forEach(function (value) {
        addClass(value,classToBeAdded);
    });
}

function doesAnyOfTheSiblingsHaveTheClass(elem,className) {
    var arrayOfSiblings = getAllSiblings(elem);

    for (var i = 0; i < arrayOfSiblings.length; i++) {
        if (hasClass(arrayOfSiblings[i],className)) {
            return true;
        }
    }
}

function removeClassOfAllSiblings(elem,classToBeRemoved){
    var arrayOfSiblings = getAllSiblings(elem);
    arrayOfSiblings.forEach(function (value) {
        removeClass(value,classToBeRemoved);
    });
}

function getAllSiblings(elem) {
    return Array.prototype.filter.call(elem.parentNode.children, function (sibling) {
        if(sibling) {
            return true;
        }
    });
}

function removeClass(elem, className) {
    if (elem.classList) {
        elem.classList.remove(className);
    }
    else {
        elem.className = elem.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
}


