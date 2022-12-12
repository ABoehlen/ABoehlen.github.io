// news.js V1.1 22.10.2022
// Autor: Adrian Boehlen
// Aktualisierung: laufend
//
// Script greift aus der fortlaufenden Liste der Neuerungen, die hier als
// Array aufgebaut ist, die neuesten heraus und gibt sie auf der Webseite aus.

var neuigkeiten = new Array();

// Chronik der Aenderungen, neueste zuunterst
//------------------------------------------------------------------------------------------------------------------------
neuigkeiten[0] = "29.05.2022:<br />Übersicht <a href=\"./famous_five/famous_five.html\">Fünf Freunde</a> ergänzt";
neuigkeiten[1] = "29.05.2022:<br />Neuer Bericht: <a href=\"./famous_five/ff_modell_eisenbahn_zeltlager.html\">Bahnanlagen «Zeltlager»</a>";
neuigkeiten[2] = "19.06.2022: Startseite angepasst";
neuigkeiten[3] = "10.07.2022: Neue Funktion zum Vergrössern der Bilder";
neuigkeiten[4] = "24.09.2022: Neue Rubrik <a href=\"./karten.html\">Karten</a> ergänzt";
neuigkeiten[5] = "30.09.2022:<br />Übersicht <a href=\"./famous_five/famous_five.html\">Fünf Freunde</a> überarbeitet";
neuigkeiten[6] = "22.10.2022: Karte <a href=\"./karten.html#2014_castlehill_map\">Castle Hill</a> ergänzt";
neuigkeiten[7] = "12.12.2022: Neue Bilder Startseite / Footer in JavaScript ausgelagert";

//------------------------------------------------------------------------------------------------------------------------

// Definieren, ab welchem Element die Ausgabe erfolgen soll
var min = 3;

// Ausgabe der Aenderungen als Liste, neueste zuoberst
document.write("<ul class=\"Liste\">");
for (var i = (neuigkeiten.length - 1); i >= min; i--) {
  document.write("<li>" + neuigkeiten[i] + "</li>");
}
document.write("</ul>");