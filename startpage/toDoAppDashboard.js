window.onload = main();

function main() {
    var userCategoriesArray = [
        ["Personliches", "Hunderunde", "Mich einkaufen", "Paket abholen"],
        ["Arbeit", "HalloWelt", "Prasentation"]
    ];

    createCategories(userCategoriesArray);
}

function createColumnFromArray(i) {
    var divcategory = document.createElement('div');
    divcategory.className = "column column-"+i;
    return divcategory;
}

function createCheckIcon() {
    var spancheck = document.createElement('span');
    spancheck.className = "checkmark";
    var icheck = document.createElement('i');
    icheck.className = 'material-icons check-icon';
    var textcheck = document.createTextNode('check');
    icheck.appendChild(textcheck);
    spancheck.appendChild(icheck);
    return spancheck;
}

function createCheckbox() {
    var checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.className = "originalCheckbox";
    return checkbox;
}

function createFooter() {
    var divFooter = document.createElement('div');
    divFooter.className = "footer-category";
    var footerButton = document.createElement('button');
    footerButton.className = "footer-button";
    var textButton = document.createTextNode('+ NEUE AUFGABE');
    footerButton.appendChild(textButton);
    divFooter.appendChild(footerButton);
    return divFooter;
}

function createTaskFromArray(x) {
    var div = document.createElement('div');
    div.className = "task";
    var label = document.createElement('label');
    label.className = "task-checkbox-label";
    label.appendChild(createCheckbox());
    label.appendChild(createCheckIcon());
    var spanName = document.createElement('span');
    spanName.className = "task-name";
    spanName.appendChild(document.createTextNode(x));
    label.appendChild(spanName);
    var divbin = document.createElement('div');
    divbin.className ="bin-icon-container";
    var ibin = document.createElement('i');
    ibin.className = 'material-icons bin';
    var text = document.createTextNode('delete');
    ibin.appendChild(text);
    divbin.appendChild(ibin);
    label.appendChild(divbin);
    div.appendChild(label);
    return div;
}

function createUpperPartColumn(x) {
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
    outerCheckbox.className = "originalCheckbox";
    outerLabel.appendChild(outerCheckbox);
    return outerLabel
}

function createDefaultColumn() {
    var divDefault = document.createElement('div');
    divDefault.className = "column column-default";
    var titleDefaultColumn = document.createElement('h2');
    var textDefaultColumn = document.createTextNode("+ Neue Kategorie");
    titleDefaultColumn.className = "defaultTitleText";
    titleDefaultColumn.appendChild(textDefaultColumn);
    divDefault.appendChild(titleDefaultColumn);
    return divDefault;
}

function createCategories(x) {
    for (var j = 0; j < x.length; j++) {
        var divcategory = createColumnFromArray(j);
        var upperPartColumn = createUpperPartColumn(x[j][0]);
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










