// Whole-script strict mode syntax
"use strict";

window.onload = main();

function main() {
    var userCategoriesArray = [
        ["Personliches", "Hunderunde", "Mich einkaufen", "Paket abholen"],
        ["Arbeit", "HalloWelt", "Prasentation"]
    ];

    createCategories(userCategoriesArray);
}


function createElement(varName,varType,className){
    varName = document.createElement(varType);
    varName.className = className;
    return varName;
}


function createColumn(i) {
    return createElement("divcategory","div","column column-"+i);
}

function createCheckIcon() {
    var checkIconContainer = createElement("checkIconContainer", "span", "checkmark");
    var checkIcon = createElement("checkIcon","i","material-icons check-icon");
    var checkIconTag = document.createTextNode('check');
    checkIcon.appendChild(checkIconTag);
    checkIconContainer.appendChild(checkIcon);
    return checkIconContainer;
}

function createInnerCheckbox() {
    var checkbox = createElement("checkbox","input","checkbox");
    checkbox.type = "checkbox";
    return checkbox;
}

function createFooter() {
    var footerButton = createElement("footerButton","button","footer-button");
    var textButton = document.createTextNode('+ NEUE AUFGABE');
    footerButton.appendChild(textButton);

    var divFooter = createElement("divFooter","div","footer-category");
    divFooter.appendChild(footerButton);
    return divFooter;
}

function createTaskFromArray(x) {
    var taskContainer = document.createElement('div');
    taskContainer.className = "task";
    var label = document.createElement('label');
    label.className = "task-checkbox-label";
    label.appendChild(createInnerCheckbox());
    label.appendChild(createCheckIcon());
    var spanName = document.createElement('span');
    spanName.className = "task-name";
    spanName.appendChild(document.createTextNode(x));
    label.appendChild(spanName);
    var binContainer = document.createElement('div');
    binContainer.className ="bin-icon-container";
    var ibin = document.createElement('i');
    ibin.className = 'material-icons bin';
    var text = document.createTextNode('delete');
    ibin.appendChild(text);
    binContainer.appendChild(ibin);
    label.appendChild(binContainer);
    taskContainer.appendChild(label);
    return taskContainer;
}

function createUpperPartColumnFromArray(x) {
    var categoryHeader = document.createElement('h2');
    categoryHeader.className = "category-title";
    categoryHeader.appendChild(document.createTextNode(x));
    var upperPartColumn = document.createElement('div');
    upperPartColumn.className = "column-upper-part";
    upperPartColumn.appendChild(categoryHeader);
    return upperPartColumn;
}

function createOuterLabel(i) {
    var outerLabel = document.createElement('label');
    outerLabel.className = "outer-taskfield-label outer-label-"+i;
    var outerCheckbox = document.createElement('input');
    outerCheckbox.type = "checkbox";
    outerCheckbox.className = "checkbox";
    outerLabel.appendChild(outerCheckbox);
    return outerLabel
}

function createDefaultColumn() {
    var divDefault = document.createElement('div');
    divDefault.className = "column column-default";
    var titleDefaultColumn = document.createElement('h2');
    var textDefaultColumn = document.createTextNode("+ Neue Kategorie");
    titleDefaultColumn.className = "defaultColumnTitleText";
    titleDefaultColumn.appendChild(textDefaultColumn);
    divDefault.appendChild(titleDefaultColumn);
    return divDefault;
}

function createCategories(x) {
    for (var j = 0; j < x.length; j++) {
        var divcategory = createColumn(j);
        var upperPartColumn = createUpperPartColumnFromArray(x[j][0]);
        divcategory.appendChild(upperPartColumn);

        for (var i = 0; i < x[j].length; i++) {
            var outerLabel = createOuterLabel(j);
            outerLabel.appendChild(createTaskFromArray(x[j][i]));
            upperPartColumn.appendChild(outerLabel);
        }

        divcategory.appendChild(createFooter());
        document.getElementById("container").appendChild(divcategory);
    }
    document.getElementById("container").appendChild(createDefaultColumn());
}










