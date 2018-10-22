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
//clickfunction vielleicht nicht der sprechendste name...
function clickEvent(clickedElement) {
    var clickedEventListenerElement = clickedElement.currentTarget;
    //nicht sehr sprechend weil kein event sondern ein node!!!
    //debugger um nochmal die getsiblings sache straight zu bekommmen
    //ie11 fehler fixen

    if (!hasClass(clickedEventListenerElement,"selected-task")) {
        addClass(clickedEventListenerElement,"selected-task");
        var arrayOfSiblings = getArrayOfSiblingsWithClassname(clickedEventListenerElement,"task-container");
        addClassToAllElements(arrayOfSiblings,"sibling-of-selected-task");
    }
    else {
        removeClass(clickedEventListenerElement, "selected-task");

        if(doesAnyOfTheSiblingsHaveTheClass(clickedEventListenerElement,"selected-task")){
            addClass(clickedEventListenerElement,"sibling-of-selected-task");
        }
        else removeClassOfAllSiblings(clickedEventListenerElement,"sibling-of-selected-task");
    }
}

function hasClass(element, className) {
    if (element.classList)
        return element.classList.contains(className);
    else
        return new RegExp('(^| )' + className + '( |$)', 'gi').test(element.className);
}

function addClass(element, className) {
    if (element.classList) {
        element.classList.add(className);
    }
    else if (!hasClass(element, className)) {
        element.className += ' ' + className;
    }
}

function getArrayOfSiblingsWithClassname(element,classname) {
    return Array.prototype.filter.call(element.parentNode.children, function (sibling) {
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

function doesAnyOfTheSiblingsHaveTheClass(element,className) {
    var arrayOfSiblings = getAllSiblings(element);

    for (var i = 0; i < arrayOfSiblings.length; i++) {
        if (hasClass(arrayOfSiblings[i],className)) {
            return true;
        }
    }
}

function removeClassOfAllSiblings(element,classToBeRemoved){
    var arrayOfSiblings = getAllSiblings(element);
    arrayOfSiblings.forEach(function (value) {
        removeClass(value,classToBeRemoved);
    });
}

function getAllSiblings(element) {
    return Array.from(element.parentNode.children);
//    return Array.prototype.slice.call(elem.parentNode.children);
    /*return Array.prototype.filter.call(elem.parentNode.children, function (sibling) {
        if(sibling) {
            return true;
        }
    });*/
}

function removeClass(element, className) {
    if (element.classList) {
        element.classList.remove(className);
    }
    else {
        element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
}


