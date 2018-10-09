/**
 * Created by Juan Garcia-Berdoy on 05.10.2018.
 */

window.onload = displayDate();

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
  //  console.log(textMonat);
  //  console.log(textTag);
    console.log(textWochentag);
    document.getElementById('weekday').innerHTML = textWochentag;
    document.getElementById('day').innerHTML = textTag;
    document.getElementById('month').innerHTML = textMonat;
}