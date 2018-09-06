var contentCategoryArray = new Array;

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
    console.log("hi bin im loop");
    function hide () {document.getElementById('container-kategorie').style.display='none'};
        hide();

    setTimeout(function () {document.getElementById('container-logo').style.display='none'}, 2000);
    setTimeout(function () {document.getElementById('container-kategorie').style.display='block'}, 2500);
}

function getCategories() {
    var categoriesArray = localStorage.getItem('categoriesArray');
    return categoriesArray;
}

function getCategoriesArrayValues() {
    var userCategoriesArray = [["Personliches", "Hunderunde", "Mich einkaufen", "Paket abholen"],["Arbeit", "HalloWelt",
     "Prasentation"]];
  //  var userCategoriesArray = getCategories();
    for (var i = 0; i < userCategoriesArray.length; i++) {
        for (var j = 0; j < userCategoriesArray[i].length; j++) {
            contentCategoryArray[i][j] = userCategoriesArray[i][j];
        }
    }
}

function displayCategoryInHTML(contentCategoryArray,x) {
    var kategorieTitelNode = document.getElementById("kategorie-titel");
    kategorieTitelNode.innerHTML = contentCategoryArray[x][0];

    for (var i = 0; i < contentCategoryArray.length[x].length; i++) {
        var checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.name = "name";
        checkbox.value = "value";
        checkbox.id = "checkbox"+i;

        console.log("und nochmal");
        var label = document.createElement('label')
        label.htmlFor = "id";
        label.appendChild(document.createTextNode(contentCategoryArray[x][i]));
        label.appendChild(label);
        checkbox.appendChild(label);
        document.getElementById("container-kategorie").appendChild();
    }
}

function displayDefaultNewCategoryObject() {
    document.getElementById('footer-link').style.display='none';
    var newCategoryLink = document.createElement("a");
    newCategoryLink.href = "http://wiki.selfhtml.org/wiki/href";
    newCategoryLink.id = "newCategoryLink";
    var newContentTitle = document.createTextNode("+ Neue Kategorie");
    newCategoryLink.appendChild(newContentTitle);
    document.body.appendChild(newCategoryLink);
}


function chooseWhichCategoryToDisplay(index) {
    console.log("nochmaOOO");
    if (index <= contentCategoryArray.length) {
        displayCategoryInHTML(contentCategoryArray,index);
    }
    else {
        displayDefaultNewCategoryObject();
    }
}

function main() {
    displayDate();
    show();
    changeBackgroundImage();
    chooseWhichCategoryToDisplay(1);
}

function changeBackgroundImage() {
    var randomNumber = Math.floor(Math.random() * 4 + 1);
    switch (randomNumber) {
        case 1:
            document.getElementById("container").style.backgroundImage = "url('https://images.unsplash.com/reserve/aOcWqRTfQ12uwr3wWevA_14401305508_804b300054_o.jpg?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d5b26ebee11698a7b6b41799de68ad5a&auto=format&fit=crop&w=1355&q=80')";
            break;
        case 2:
            document.getElementById("container").style.backgroundImage = "url('https://images.unsplash.com/photo-1512705961732-e6747dcaaab7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b274efffbe82f8f4ceda16d0bdd496e8&auto=format&fit=crop&w=1350&q=80')";
            break;
        case 3:
            document.getElementById("container").style.backgroundImage = "url('https://images.unsplash.com/reserve/aOcWqRTfQ12uwr3wWevA_14401305508_804b300054_o.jpg?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjI0MX0&s=fc1bf7b33bd9ebe51eb98e6d28019a35&auto=format&fit=crop&w=1355&q=80')";
            break;
        case 4:
            document.getElementById("container").style.backgroundImage = "url('https://images.unsplash.com/photo-1518023176010-e14eb57eecf9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fe2f72ca42e6478bc869b8325881fa46&auto=format&fit=crop&w=1350&q=80')";
            break;
        default :
            document.getElementById("container").style.backgroundImage = "url('https://images.unsplash.com/reserve/aOcWqRTfQ12uwr3wWevA_14401305508_804b300054_o.jpg?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d5b26ebee11698a7b6b41799de68ad5a&auto=format&fit=crop&w=1355&q=80')";
    }
}

window.onload = main();