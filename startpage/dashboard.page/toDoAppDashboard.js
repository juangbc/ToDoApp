// Whole-script strict mode syntax
"use strict";

window.onload = main();

function main() {
    var userCategoriesArray = [
        ["Persönliches", "Hunderunde", "Mich einkaufen"],
        ["Arbeit", "HalloWelt", "Präsentation"]
    ];
    createCategories(userCategoriesArray);
}

function createElement(varType,className){
    var x = document.createElement(varType);
    x.className = className;
    return x;
}


function createColumn() {
    return createElement("div","column");
}

function createCheckIcon() {
    var checkIconContainer = createElement("span", "checkmark");
    var checkIcon = createElement("i","material-icons check-icon");
    var checkIconTag = document.createTextNode("check");
    checkIcon.appendChild(checkIconTag);
    checkIconContainer.appendChild(checkIcon);
    return checkIconContainer;
}

function createInnerCheckbox() {
    var checkbox = createElement("input","checkbox");
    checkbox.type = "checkbox";
    return checkbox;
}

function createFooter() {
    var footerButton = createElement("button","footer-button");
    var textButton = document.createTextNode("+ NEUE AUFGABE");
    footerButton.appendChild(textButton);

    var divFooter = createElement("div","footer-category");
    divFooter.appendChild(footerButton);
    return divFooter;
}

function createTaskFromArray(array) {
    var taskContainer = createElement("div","task");
    var label = createElement("label","task-checkbox-label");
    label.appendChild(createInnerCheckbox());
    label.appendChild(createCheckIcon());


    var spanName = createElement("span","task-name");
    spanName.appendChild(document.createTextNode(array));
    label.appendChild(spanName);

    var binIcon = createElement("i","material-icons bin");
    var text = document.createTextNode("delete");
    binIcon.appendChild(text);

    var binContainer = createElement("div","bin-icon-container");
    binContainer.appendChild(binIcon);
    label.appendChild(binContainer);
    taskContainer.appendChild(label);
    return taskContainer;
}

function createUpperPartColumnFromArray(array) {
    var categoryHeader = createElement("h2","category-title");
    categoryHeader.appendChild(document.createTextNode(array));

    var upperPartColumn = createElement("div","column-upper-part");
    upperPartColumn.appendChild(categoryHeader);
    return upperPartColumn;
}

function createOuterLabel() {
    var outerLabel = createElement("label","outer-taskfield-label outer-label-");

    var outerCheckbox = createElement("input","checkbox");
    outerCheckbox.type = "checkbox";
    outerLabel.appendChild(outerCheckbox);
    return outerLabel
}

function createDefaultColumn() {
    var divDefault = createElement("div","column column-default");

    var titleDefaultColumn = createElement("h2","defaultColumnTitleText");
    var textDefaultColumn = document.createTextNode("+ Neue Kategorie");
    titleDefaultColumn.appendChild(textDefaultColumn);
    divDefault.appendChild(titleDefaultColumn);
    return divDefault;
}

function createCategories(array) {
    for (var j = 0; j < array.length; j++) {
        var divcategory = createColumn();
        var upperPartColumn = createUpperPartColumnFromArray(array[j][0]);
        divcategory.appendChild(upperPartColumn);

        for (var i = 1; i < array[j].length; i++) {
            var outerLabel = createOuterLabel();
            outerLabel.appendChild(createTaskFromArray(array[j][i]));
            upperPartColumn.appendChild(outerLabel);
        }

        divcategory.appendChild(createFooter());
        document.getElementById("container").appendChild(divcategory);
    }
    document.getElementById("container").appendChild(createDefaultColumn());
}





document.getElementById("myBtn").addEventListener("click", displayDate);

