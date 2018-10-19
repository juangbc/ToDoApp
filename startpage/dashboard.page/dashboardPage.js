/**
 * Created by Juan Garcia-Berdoy on 05.10.2018.
 */
// Whole-script strict mode syntax
"use strict";
window.onload = main();

function main() {
    var categoryObject = new Category("category1", "Ältere Kategorie", ["Dings", "Dangs", "Dengs", "Dongs"]);
    var categoryObject1 = new Category("category2", "Weniger Ältere Kategorie", ["Arbeit", "Struktur", "Schwimmen"]);
    var categoriesArray = [categoryObject, categoryObject1];
    saveCategories(categoriesArray);
    cloneNecessaryColumnNodes(categoriesArray);
    cloneNecessaryTaskNodes(categoriesArray);
    setAllTaskNames(categoriesArray);
    setAllCategoryTitles(categoriesArray);
}

function Category(key,categoryTitle, taskName) {
    this.key = key;
    this.categoryTitle = categoryTitle;
    this.taskName = [];
    for (var i = 0; i< taskName.length; i++) {
        this.taskName[i] = taskName[i];
    }
}

function saveCategories (arrayOfObjects) {
    for (var i = 0; i < arrayOfObjects.length; i++) {
        localStorage.setItem(arrayOfObjects[i].key, JSON.stringify(arrayOfObjects[i]));
    }
}

function readCategoriesFromLocalStorage(categoryKey) {
    return JSON.parse(localStorage.getItem(categoryKey));
}

function setAllCategoryTitles(categoriesArray) {
    for (var i = 0; i < categoriesArray.length; i++) {
        var categoryTitle = readCategoriesFromLocalStorage(categoriesArray[i].key).categoryTitle;
        document.querySelector(".column:nth-child("+(i+2)+") .category-title").textContent = categoryTitle;
    }
}

function setTaskName(categoryKey, columnIndex, taskIndex) {
    var taskName = readCategoriesFromLocalStorage(categoryKey).taskName[taskIndex];
    var taskNode = document.querySelector(".column:nth-child("+(columnIndex+2)+") .task-container:nth-of-type("+(taskIndex+1)+") .task-name");
    taskNode.textContent = taskName;
}

function setAllTaskNames(categoriesArray) {
    var numberOfCategories = categoriesArray.length;
    for (var i = 0; i < numberOfCategories; i++) {
        var numberOfTasksInCategory = readCategoriesFromLocalStorage(categoriesArray[i].key).taskName.length;
        for (var j = 0; j < numberOfTasksInCategory; j++) {
            setTaskName(categoriesArray[i].key,i,j);
        }
    }
}

function cloneNecessaryTaskNodes(categoriesArray) {
    var numberOfCategories = categoriesArray.length;
    for (var j = 0; j < numberOfCategories; j++) {
        var numberOfTasksInCategory = readCategoriesFromLocalStorage(categoriesArray[j].key).taskName.length;
        for (var i = 1; i < numberOfTasksInCategory; i++) {
            var originalTaskNode = document.querySelector(".this" +j+ " .task-container");
            var clonedTaskNode = originalTaskNode.cloneNode(true);
            document.getElementsByClassName("column-upper-part")[j+1].appendChild(clonedTaskNode);
        }
    }
}

function cloneNecessaryColumnNodes(categoriesArray) {
    for (var i = 0; i < categoriesArray.length; i++) {
        var originalColumnNode = document.getElementsByClassName("column")[0];
        var clonedColumnNode = originalColumnNode.cloneNode(true);
        clonedColumnNode.classList.add("this"+(i));
        document.getElementsByClassName("flex-container")[0].appendChild(clonedColumnNode);
    }
}
