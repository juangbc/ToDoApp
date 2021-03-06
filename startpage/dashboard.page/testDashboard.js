/**
 * Created by Juan Garcia-Berdoy on 05.10.2018.
 */
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

function saveCategoriesIntoLocalStorage (categoryKey, category) {
    localStorage.setItem(categoryKey, JSON.stringify(category));
}

function readCategoriesFromLocalStorage(categoryKey) {
    var category = JSON.parse(localStorage.getItem(categoryKey));
    return category;
}

function setTitleOfCategoryInDom(categoryKey,categoryIndex) {
    var categoryTitle = readCategoriesFromLocalStorage(categoryKey).categoryTitle;
    document.getElementsByClassName("category-title")[categoryIndex].innerHTML = categoryTitle;
}

function setAllCategoryTitles(categoriesArray) {
    var numberOfCategories = categoriesArray.length;
    for (var i = 0; i < numberOfCategories; i++) {
        setTitleOfCategoryInDom(categoriesArray[i].key,i);
    }
}

function setTaskName(categoryKey, totalNumberOfTasks, taskIndex) {
    var taskName = readCategoriesFromLocalStorage(categoryKey).taskName[taskIndex];
    document.getElementsByClassName("task-name")[taskIndex + totalNumberOfTasks].innerHTML = taskName;
}

function setAllTaskNames(categoriesArray) {
    var numberOfCategories = categoriesArray.length;
    var totalTasks = 0;
    for (var i = 0; i < numberOfCategories; i++) {
        var numberOfTasksInCategory = readCategoriesFromLocalStorage(categoriesArray[i].key).taskName.length;
        for (var j = 0; j < numberOfTasksInCategory; j++) {
            setTaskName(categoriesArray[i].key,totalTasks,j);
        }
        totalTasks = totalTasks + numberOfTasksInCategory;
    }
}

function cloneNecessaryTaskNodes(arrayOfObjects) {
    var x = arrayOfObjects.length;
    for (var j = 0; j < x; j++) {
        var y = readCategoriesFromLocalStorage(arrayOfObjects[j].key).taskName.length;
        for (var i = 1; i < y; i++) {
            var originalTaskNode = document.getElementsByClassName("task-container")[0];
            var clonedTaskNode = originalTaskNode.cloneNode(true);
            document.getElementsByClassName("column-upper-part")[j].appendChild(clonedTaskNode);
        }
    }
}

function cloneNecessaryColumnNodes(arrayOfObjects) {
    var x = arrayOfObjects.length;
    for (var i = 0; i < x; i++) {
        var originalColumnNode = document.getElementsByClassName("column")[0];
        var clonedColumnNode = originalColumnNode.cloneNode(true);
        document.getElementsByClassName("flex-container")[0].appendChild(clonedColumnNode);
    }
}

/*
function functionTest() {
    if (!document.getElementsByClassName("task-container")[4].classList.contains("selected")) {
        document.getElementsByClassName("task-container")[4].classList.add("selected");
        document.getElementsByClassName("task-container")[4].style.marginLeft = "-2.5em";
        document.getElementsByClassName("task-container")[4].style.marginBottom = "1em";
        document.getElementsByClassName("task-container")[4].style.width = "27em";
        document.getElementsByClassName("task-container")[4].style.paddingLeft = "2.5em";
        document.getElementsByClassName("task-container")[4].style.paddingTop = "1em";
        document.getElementsByClassName("task-container")[4].style.paddingBottom = "1em";
        document.getElementsByClassName("task-container")[4].style.background =
            '-webkit-linear-gradient(45deg, #6BB3EC 0%, #6ED4E3 100%)';
       var x =  document.getElementsByClassName("task-container")[4].className;
        console.log(x);

       // SOMETHING WITH THIS
    }
    else
    {
        document.getElementsByClassName("task-container")[4].classList.remove("selected");
     //   document.getElementById("theMac").style.all = "unset";
        document.getElementsByClassName("task-container")[4].style.margin = "0";
        document.getElementsByClassName("task-container")[4].style.width = "100%";
        document.getElementsByClassName("task-container")[4].style.padding = "0";
      //  document.getElementsByClassName("task-container")[4].style.background = "red";

    }
}

*/

