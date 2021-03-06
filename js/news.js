// news.js V1.0 10.07.2022
// Autor: Adrian Boehlen
// Aktualisierung: laufend
//
// Script greift aus der fortlaufenden Liste der Neuerungen, die hier als
// Array aufgebaut ist, die neuesten heraus und gibt sie auf der Webseite aus.

var neuigkeiten = new Array();

// Chronik der Aenderungen, neueste zuunterst
neuigkeiten[0] = "<a href=\"./famous_five/famous_five.html\">29.05.2022:<br />Übersicht Fünf Freunde ergänzt</a>";
neuigkeiten[1] = "<a href=\"./famous_five/ff_modell_eisenbahn_zeltlager.html\">29.05.2022:<br />Neuer Bericht: Bahnanlagen «Zeltlager»</a>";
neuigkeiten[2] = "19.06.2022: Startseite angepasst";
neuigkeiten[3] = "10.07.2022: Neue Funktion zum Vergrössern der Bilder";

// Definieren, ab welchem Element die Ausgabe erfolgen soll
var min = 0;

// Ausgabe der Aenderungen als Liste, neueste zuoberst
for (var i = (neuigkeiten.length - 1); i >= min; i--) {
  document.write("<li>" + neuigkeiten[i] + "</li>");
}