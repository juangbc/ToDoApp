/**
 * Created by Juan Garcia-Berdoy on 31.08.2018.
 */

var newCategoryArray = [];



function showColorOptions () {
    var divColor = document.createElement("div");
    divColor.innerHTML = "Kategoriefarbe wählen";
    document.getElementById("kategorieTitelNode").appendChild(divColor);

    var kategorieTitelNode = document.getElementById("kategorie-titel");
    kategorieTitelNode.innerHTML("Kategoriefarbe wählen")


    var span1 = document.createElement("span");
    var span2 = document.createElement("span");
    var span3 = document.createElement("span");
    var span4 = document.createElement("span");
    var span5 = document.createElement("span");

    span1.setAttribute("id", "color1");
    span2.setAttribute("id", "color2");
    span3.setAttribute("id", "color3");
    span4.setAttribute("id", "color4");
    span5.setAttribute("id", "color5");

}

function rememberColorSelection() {

    switch (object.onclick) {
        case span1.onclick: document.getElementById("color1").style.border = "thick solid";
            newCategoryArray[0] = "blue";
            break;
        case span2.onclick: document.getElementById("color2").style.border = "thick solid";
            newCategoryArray[0] = "orange";
            break;
        case span3.onclick: document.getElementById("color2").style.border = "thick solid";
            newCategoryArray[0] = "red";
            break;
        case span4.onclick: document.getElementById("color2").style.border = "thick solid";
            newCategoryArray[0] = "green";
            break;
        case span5.onclick: document.getElementById("color2").style.border = "thick solid";
            newCategoryArray[0] = "violet";
            break;
    }
}


function inputCategoryName() {
    var divColor = document.createElement("div");
    divColor.innerHTML = "Kategoriefarbe wählen";
    document.getElementById("kategorieTitelNode").appendChild(divColor);
}



displayNewCategory() {
    var element = document.getElementById("element-id");
    element.parentNode.removeChild(element);
    var x =
}