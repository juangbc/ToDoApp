// Whole-script strict mode syntax
"use strict";

window.onload = main();

function main() {
    var categoryObject = new Category("category1","Foo bar",["Dings", "Dangs", "Dengs","Dongs"]);
    var categoryObject1 = new Category("category2","Noch ein Titel",["Arbeit", "Struktur"]);
    var categoriesArray = [categoryObject,categoryObject1];
    saveCategories(categoriesArray);
    cloneNecessaryColumnNodes(categoriesArray);
    cloneNecessaryTaskNodes(categoriesArray);
    setAllTaskNames(categoriesArray);
    setAllCategoryTitles(categoriesArray);
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
    var x = arrayOfObjects.length;
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

function setTitleOfCategoryInDom(key,titleIndex) {
    var categoryTitle = readCategoriesFromLocalStorage(key).categoryTitle;
    document.getElementsByClassName("category-title")[titleIndex].innerHTML = categoryTitle;
}

function setAllCategoryTitles(categoriesArray) {
    var numberOfCategories = categoriesArray.length;
    for (var i = 0; i < numberOfCategories; i++) {
        setTitleOfCategoryInDom(categoriesArray[i].key,i);
    }
}

function setTaskName(key, i, index) {
    var taskName = readCategoriesFromLocalStorage(key).taskName[index];
    document.getElementsByClassName("task-name")[index + i].innerHTML = taskName;
}

function setAllTaskNames(categoriesArray) {
    var numberOfCategories = categoriesArray.length;
    var totalTaskIndey = 0;
    for (var i = 0; i < numberOfCategories; i++) {
        var z = readCategoriesFromLocalStorage(categoriesArray[i].key).taskName.length;
        for (var j = 0; j < z; j++) {
            setTaskName(categoriesArray[i].key,totalTaskIndey,j);
        }
        totalTaskIndey = totalTaskIndey + z;
        console.log(totalTaskIndey);
    }
}

function cloneNecessaryTaskNodes(arrayOfObjects) {
    var x = arrayOfObjects.length;
    for (var j = 0; j < x; j++) {
        var y = readCategoriesFromLocalStorage(arrayOfObjects[j].key).taskName.length;
        for (var i = 1; i < y; i++) {
            var itm = document.getElementsByClassName("task-container")[0];
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


