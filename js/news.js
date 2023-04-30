// news.js V1.2 22.03.2023
// Autor: Adrian Boehlen
// Aktualisierung: laufend
//
// Script greift aus der fortlaufenden Liste der Neuerungen, die hier als Array
// aufgebaut ist, eine beliebige Anzahl heraus und gibt sie auf der Webseite aus.

var neuigkeiten = new Array();

// Chronik der Aenderungen, neueste zuunterst
//------------------------------------------------------------------------------------------------------------------------

neuigkeiten[0] =  "29.05.2022: Übersicht <a href=\"./famous_five/famous_five.html\">Fünf Freunde</a> ergänzt";
neuigkeiten[1] =  "29.05.2022: Neuer Bericht: <a href=\"./famous_five/ff_modell_eisenbahn_zeltlager.html\">Bahnanlagen «Zeltlager»</a>";
neuigkeiten[2] =  "19.06.2022: Startseite angepasst";
neuigkeiten[3] =  "10.07.2022: Neue Funktion zum Vergrössern der Bilder";
neuigkeiten[4] =  "24.09.2022: Neue Rubrik <a href=\"./karten.html\">Karten</a> ergänzt";
neuigkeiten[5] =  "30.09.2022: Übersicht <a href=\"./famous_five/famous_five.html\">Fünf Freunde</a> überarbeitet";
neuigkeiten[6] =  "22.10.2022: Karte <a href=\"./karten.html#2014_castlehill_map\">Castle Hill</a> ergänzt";
neuigkeiten[7] =  "12.12.2022: Neue Bilder Startseite / Footer in JavaScript ausgelagert";
neuigkeiten[8] =  "29.01.2023: Karte <a href=\"./karten.html#2023_valledinibbio\">Valle di Nibbio</a> ergänzt";
neuigkeiten[9] =  "01.03.2023: Dokumentation <a href=\"./secret_series/secret_maps_killi.html\"> Karten von Killimooin</a> erweitert";
neuigkeiten[10] = "17.03.2023: Zu jeder Serienbeschreibung in <a href=\"./blyton.html\"> Enid Blyton</a> ein Bild ergänzt";
neuigkeiten[11] = "22.03.2023: Neue Option auf der Startseite, um die gesamte Chronik anzuzeigen";
neuigkeiten[12] = "30.04.2023: Dokumentation der Website und des Tools 'xref' im <a target=\"_blank\" href=\"https://github.com/ABoehlen/ABoehlen.github.io/blob/main/README.md\">README.md</a>.";

//------------------------------------------------------------------------------------------------------------------------


// Ausgabe der letzten Aenderungen als Liste, neueste zuoberst
function news(n) {
  if (n == 0) {
    n = neuigkeiten.length; // um alle anzuzeigen
  }
  document.write("<ul class=\"Liste\">");
  for (var i = (neuigkeiten.length - 1); i >= neuigkeiten.length - n; i--) {
    document.write("<li>" + neuigkeiten[i] + "</li>");
  }
  document.write("</ul>");
}


