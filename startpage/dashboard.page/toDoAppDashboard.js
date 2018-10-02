// Whole-script strict mode syntax
"use strict";

window.onload = main();


function main() {
    var categoryObject = new Category("category1","Foo bar",["Dings", "Das", "Dengs","Dongs"]);
    var categoryObject1 = new Category("category2","Noch ein Titel",["Arbeit", "Struktur"]);
    var arrayOfObjects = [categoryObject,categoryObject1];
    saveCategories(arrayOfObjects);
    cloneNecessaryColumnNodes(arrayOfObjects);
    cloneNecessaryTaskNodes(arrayOfObjects);
    setAllTasks(arrayOfObjects);
}

function styleDiv() {
    document.getElementById("outer-taskfield-label").style.backgroundColor = "red";
    document.body.style.backgroundColor = "#6BB3EC";
    document.getElementsByClassName("task-name")[0].innerHTML = "Milk";
}

function Category(key,categoryTitle, taskName) {
    this.key = key;
    this.categoryTitle = categoryTitle;
    this.taskName = taskName;
     for (var i = 0; i< taskName.length; i++) {
     this.taskName[i] = taskName[i];
     }
}

function saveCategories (arrayOfObjects) {
    var x = arrayOfObjects.length-1;
    for (var i = 0; i < x; i++) {
        saveCategoriesIntoLocalStorage(arrayOfObjects[i].key,arrayOfObjects[i]);
    }
}

function saveCategoriesIntoLocalStorage (key, categoryObject) {
    localStorage.setItem(key, JSON.stringify(categoryObject));
}

function readCategoriesFromLocalStorage(key) {
    var x = JSON.parse(localStorage.getItem(key));
    return x;
}

function setTitleOfCategoryInDom(key) {
    var categoryTitle = readCategoriesFromLocalStorage(key).categoryTitle;
    document.getElementsByClassName("category-title")[0].innerHTML = categoryTitle;
}

function setTaskNameInDom(key, index) {
    var taskName = readCategoriesFromLocalStorage(key).taskName[index];
    document.getElementsByClassName("task-name")[index].innerHTML = taskName;
}

function setTaskNames(key) {
    var x = readCategoriesFromLocalStorage(key).taskName.length;
    for (var i = 0; i < x; i++) {
        setTaskNameInDom(key,i);
    }
}

function setAllTasks(arrayOfObjects) {
    var x = arrayOfObjects.length;
    for (var i = 0; i < x; i++) {
        setTaskNames(arrayOfObjects[i].key);
    }
}
/*
function cloneNecessaryTaskNodes(key, columnIndex) {
    var x = readCategoriesFromLocalStorage(key).taskName.length;
    console.log(x);
    for (var i = 1; i < x; i++) {
        var itm = document.getElementsByClassName("outer-taskfield-label")[0];
        var cln = itm.cloneNode(true);
        document.getElementsByClassName("column-upper-part")[columnIndex].appendChild(cln);
    }
}
*/

function cloneNecessaryTaskNodes(arrayOfObjects) {
    var x = arrayOfObjects.length;
    for (var j = 0; j < x; j++) {
        var y = readCategoriesFromLocalStorage(arrayOfObjects[j].key).taskName.length;
        for (var i = 1; i < y; i++) {
            var itm = document.getElementsByClassName("outer-taskfield-label")[0];
            var cln = itm.cloneNode(true);
            document.getElementsByClassName("column-upper-part")[j].appendChild(cln);
        }
    }
}

function cloneNecessaryColumnNodes(arrayOfObjects) {
    var x = arrayOfObjects.length;
    for (var i = 1; i < x; i++) {
        var itm = document.getElementsByClassName("column")[0];
        var cln = itm.cloneNode(true);
        document.getElementsByClassName("flex-container")[0].appendChild(cln);
    }
}
