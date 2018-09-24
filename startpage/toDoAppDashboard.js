window.onload = main();

function main() {
    displayCategory();
}

var contentCategoryArray = new Array;

function getCategoriesArrayValues() {
    var userCategoriesArray = [["Personliches", "Hunderunde", "Mich einkaufen", "Paket abholen"],["Arbeit", "HalloWelt",
        "Prasentation"]];

    for (var i = 0; i < userCategoriesArray.length; i++) {
        for (var j = 0; j < userCategoriesArray[i].length; j++) {
            contentCategoryArray[i][j] = userCategoriesArray[i][j];
        }
    }
}

function displayCategory() {
    var userCategoriesArray = [["Personliches", "Hunderunde", "Mich einkaufen", "Paket abholen"],["Arbeit", "HalloWelt",
        "Prasentation"]];

    for (var j = 0; j < userCategoriesArray.length; j++) {
        var divcategory = document.createElement('div');
        divcategory.className = "column";
        var categoryHeader = document.createElement('h2');
        categoryHeader.appendChild(document.createTextNode(userCategoriesArray[j][0]));
        categoryHeader.className = "category-title";
        divcategory.appendChild(categoryHeader);

        for (var i = 0; i < userCategoriesArray[j].length; i++) {

            /*var labelOuter = document.createElement('label');
            var checkboxOuter = document.createElement('input');
            checkboxOuter.type = "checkbox";
            labelOuter.appendChild(checkboxOuter);*/

            var div = document.createElement('div');
            var label = document.createElement('label');
            label.className = "task-checkbox-label";
            var checkbox = document.createElement('input');
            checkbox.type = "checkbox";
            checkbox.className = "originalCheckbox";
            label.appendChild(checkbox);
            var spancheck = document.createElement('span');
            spancheck.className = "checkmark";
            var icheck = document.createElement('i');
            icheck.className = 'material-icons check-icon';
            var textcheck = document.createTextNode('check');
            icheck.appendChild(textcheck);
            spancheck.appendChild(icheck);
            label.appendChild(spancheck);
            var spanName = document.createElement('span');
            spanName.className = "task-name";
            spanName.appendChild(document.createTextNode(userCategoriesArray[j][i]));
            label.appendChild(spanName);
            var divbin = document.createElement('div');
            divbin.className ="bin-icon-container"
            var ibin = document.createElement('i');
            ibin.className = 'material-icons bin';
            var text = document.createTextNode('delete');
            ibin.appendChild(text);
            divbin.appendChild(ibin);
            label.appendChild(divbin);
            div.appendChild(label);
            divcategory.appendChild(div);
        }
        document.getElementById("container").appendChild(divcategory);
    }
}





