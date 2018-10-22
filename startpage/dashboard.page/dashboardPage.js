/**
 * Created by Juan Garcia-Berdoy on 05.10.2018.
 */
// Whole-script strict mode syntax
"use strict";
window.onload = main();

function main() {
    var categoryObject = new Category("category1", "Erste Kategorie", ["Dings", "Dangs", "Dengs", "Dongs"]);
    var categoryObject1 = new Category("category2", "Zweite Kategorie", ["Arbeit", "Struktur", "Schwimmen"]);
    var categoriesArray = new Array(categoryObject, categoryObject1);
    saveCategories(categoriesArray);
    cloneNecessaryCategories(categoriesArray);
    cloneNecessaryTaskNodes(categoriesArray);
    setAllTaskTitles(categoriesArray);
    setAllCategoryTitles(categoriesArray);
}

function Category(key,categoryTitle,arrayOfTasks) {
    this.key = key;
    this.categoryTitle = categoryTitle;
    this.taskName = arrayOfTasks;
}

function saveCategories (categoriesArray) {
    categoriesArray.forEach(function(category) {
        if(category !== undefined) {
            localStorage.setItem(category.key, JSON.stringify(category));
        }
        return null;
    });
}

function cloneNecessaryCategories(categoriesArray) {
    categoriesArray.forEach(function (category) {
        var originalCategoryNode = document.querySelector(".column:nth-child(1)");
        var clonedColumnNode = originalCategoryNode.cloneNode(true);
        document.querySelector(".flex-container").appendChild(clonedColumnNode);
    });
}

function cloneNecessaryTaskNodes(categoriesArray) {
    var numberOfCategories = categoriesArray.length;

    for (var categoryIndex = 0; categoryIndex < numberOfCategories; categoryIndex++) {
        var numberOfTasksInCategory = readCategoriesFromLocalStorage(categoriesArray[categoryIndex].key).taskName.length;
        for (var taskIndex = 1; taskIndex < numberOfTasksInCategory; taskIndex++) {
            var originalTaskNode = document.querySelector(".column:nth-child(1) .task-container");
            var clonedTaskNode = originalTaskNode.cloneNode(true);
            document.querySelector(".column:nth-child("+(categoryIndex+1)+") .column-upper-part").appendChild(clonedTaskNode);
        }
    }
}

function setAllTaskTitles(categoriesArray) {
    var numberOfCategories = categoriesArray.length;
    for (var categoryIndex = 0; categoryIndex < numberOfCategories; categoryIndex++) {
        var numberOfTasksInCategory = readCategoriesFromLocalStorage(categoriesArray[categoryIndex].key).taskName.length;
        for (var taskIndex = 0; taskIndex < numberOfTasksInCategory; taskIndex++) {
            var taskName = readCategoriesFromLocalStorage(categoriesArray[categoryIndex].key).taskName[taskIndex];
            var taskNode = document.querySelector(".column:nth-child("+(categoryIndex+1)+") .task-container:nth-of-type("+(taskIndex+1)+") .task-name");
            taskNode.textContent = taskName;
        }
    }
}

function setAllCategoryTitles(categoriesArray) {
    categoriesArray.forEach(function(category,i) {
        var categoryTitle = readCategoriesFromLocalStorage(category.key).categoryTitle;
        document.querySelector(".column:nth-child("+(i+1)+") .category-title").textContent = categoryTitle;
    });
}

function readCategoriesFromLocalStorage(categoryKey) {
    return JSON.parse(localStorage.getItem(categoryKey));
}




