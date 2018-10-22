/**
 * Created by Juan Garcia-Berdoy on 05.10.2018.
 */
// Whole-script strict mode syntax
"use strict";
window.onload = displayDate();

function displayDate() {
    var aktuellesDatum = new Date(),
        tag = aktuellesDatum.getDate(),
        tagZahl = aktuellesDatum.getDay(),
        wochentag = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
        monatZahl = aktuellesDatum.getMonth(),
        monat = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September',
            'Oktober', 'November', 'Dezember'];
    var textWochentag = wochentag[tagZahl];
    var textTag = tag;
    var textMonat = monat[monatZahl];
    document.getElementById('weekday').textContent = textWochentag;
    document.getElementById('day').textContent = textTag;
    document.getElementById('month').textContent = textMonat;
}