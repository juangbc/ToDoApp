function displayDate() {
    var jetzt = new Date(),
        tag = jetzt.getDate(),
        tagZahl = jetzt.getDay(),
        wochentag = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
        monatZahl = jetzt.getMonth(),
        monat = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September',
            'Oktober', 'November', 'Dezember'];
    var textWochentag = wochentag[tagZahl];
    var textTag = tag;
    var textMonat = monat[monatZahl];
    document.getElementById('wochentag').innerHTML = textWochentag;
    document.getElementById('tag').innerHTML = textTag;
    document.getElementById('monat').innerHTML = textMonat;
}

function show() {
    document.getElementById("myDiv").style.display = "block";
    setTimeout("hide()", 2000);
}

function hide() {
    document.getElementById("myDiv").style.display = "none";
}

function getCategories() {
    var categoriesArray = localStorage.getItem('categoriesArray');
    return categoriesArray;
}

var contentCategoryArray = new Array;

function getCategoriesArrayValues() {

    var userCategories = [["Persönliches", "Hunderunde", "Mich einkaufen", "Paket abholen"],["Arbeit", "HalloWelt " +
     "Präsentation"]];
/***das sind Testwerte****/
  //  var userCategoriesArray = getCategories();
    for (var i = 0; i < userCategoriesArray.length; i++) {
        for (var j = 0; j < userCategoriesArray[i].length; j++) {
            contentCategoryArray[i][j] = userCategoriesArray[i][j];
        }
    }
}

function writeCategoryValuesIntoHTML() {
    getCategoriesArrayValues();
    for (var i = 0; i < contentCategoryArray.length; i++) {
        var newDiv = document.createElement("div");
        var newContent = document.createTextNode(contentCategoryArray[0][0]);
        newDiv.appendChild(newContent);
        var categoryId = "category" + (i + 1);
        newDiv.id = categoryId;

        for (var j = 1; j < contentCategoryArray[i].length; j++) {
            var checkbox = document.createElement('input');
            checkbox.type = "checkbox";
            checkbox.name = "name";
            checkbox.value = "value";
            checkbox.id = "id";

            var label = document.createElement('label')
            label.htmlFor = "id";
            label.appendChild(document.createTextNode(contentCategoryArray[i][j]));

            newDiv.appendChild(checkbox);
            newDiv.appendChild(label);
        }

        var newTaskLinkFooter = document.createElement("a");
        newTaskLinkFooter.appendChild(document.createTextNode("+ NEUE AUFGABE"))
        a.href = "";
        a.id = "footerLinkID" + (i + 1);
        a.className = "footerLink";
        newDiv.appendChild(newTaskLinkFooter);
    }
}

function addDefaultNewCategoryObject() {
    var newCategoryDiv = document.createElement("div");
    var newCategoryLink = document.createElement("a");
    a.href = "";
    a.id = "newCategoryLink";
    var newContentTitle = document.createTextNode("+ Neue Kategorie");
    newCategoryDiv.appendChild(newCategoryLink);
    newCategoryDiv.id = "defaultNewCategory"
}


function chooseWhichCategoryToDisplay(index) {
    if (x <= contentCategoryArray.length) {
        document.body.appendChild("category" + x);
    }

    else {
        document.body.appendChild("defaultNewCategory");
    }
}

function main() {
    displayDate();
    show();
}

function changeBackgroundImage() {
    var randomNumber = Math.floor(Math.random() * 4 + 1);

    switch (randomNumber) {
        case 1:
            document.body.style.backgroundImage = "url('https://images.unsplash.com/reserve/aOcWqRTfQ12uwr3wWevA_14401305508_804b300054_o.jpg?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d5b26ebee11698a7b6b41799de68ad5a&auto=format&fit=crop&w=1355&q=80')";
            break;
        case 2:
            document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1512705961732-e6747dcaaab7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b274efffbe82f8f4ceda16d0bdd496e8&auto=format&fit=crop&w=1350&q=80')";
            break;
        case 3:
            document.body.style.backgroundImage = "url('https://images.unsplash.com/reserve/aOcWqRTfQ12uwr3wWevA_14401305508_804b300054_o.jpg?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjI0MX0&s=fc1bf7b33bd9ebe51eb98e6d28019a35&auto=format&fit=crop&w=1355&q=80')";
            break;
        case 3:
            document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1518023176010-e14eb57eecf9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fe2f72ca42e6478bc869b8325881fa46&auto=format&fit=crop&w=1350&q=80')";
            break;
    }

}

window.onload = main();