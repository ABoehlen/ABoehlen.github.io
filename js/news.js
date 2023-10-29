// news.js V1.2 22.03.2023
// Autor: Adrian Boehlen
// Aktualisierung: laufend
//
// Script greift aus der fortlaufenden Liste der Neuerungen, die hier als Array
// aufgebaut ist, eine beliebige Anzahl heraus und gibt sie auf der Webseite aus.

var neuigkeiten = new Array();

// Chronik der Aenderungen, neueste zuunterst
//------------------------------------------------------------------------------------------------------------------------

neuigkeiten[0] =  "19.09.2021: Erstes Commit, noch ohne Inhalt";
neuigkeiten[1] =  "10.10.2021: erster Inhalt ergänzt";
neuigkeiten[2] =  "13.03.2022: Design optimiert";
neuigkeiten[3] =  "29.05.2022: Übersicht <a href=\"./famous_five/famous_five.html\">Fünf Freunde</a> ergänzt";
neuigkeiten[4] =  "29.05.2022: Neuer Bericht: <a href=\"./famous_five/ff_modell_eisenbahn_zeltlager.html\">Bahnanlagen «Zeltlager»</a>";
neuigkeiten[5] =  "19.06.2022: Startseite angepasst";
neuigkeiten[6] =  "10.07.2022: Neue Funktion zum Vergrössern der Bilder";
neuigkeiten[7] =  "24.09.2022: Neue Rubrik <a href=\"./karten.html\">Karten</a> ergänzt";
neuigkeiten[8] =  "30.09.2022: Übersicht <a href=\"./famous_five/famous_five.html\">Fünf Freunde</a> überarbeitet";
neuigkeiten[9] =  "22.10.2022: Karte <a href=\"./karten.html#2014_castlehill_map\">Castle Hill</a> ergänzt";
neuigkeiten[10] = "12.12.2022: Neue Bilder Startseite / Footer in JavaScript ausgelagert";
neuigkeiten[11] = "29.01.2023: Karte <a href=\"./karten.html#2023_valledinibbio\">Valle di Nibbio</a> ergänzt";
neuigkeiten[12] = "01.03.2023: Dokumentation <a href=\"./secret_series/secret_maps_killi.html\"> Karten von Killimooin</a> erweitert";
neuigkeiten[13] = "17.03.2023: Zu jeder Serienbeschreibung in <a href=\"./blyton.html\"> Enid Blyton</a> ein Bild ergänzt";
neuigkeiten[14] = "22.03.2023: Neue Option auf der Startseite, um die gesamte Chronik anzuzeigen";
neuigkeiten[15] = "30.04.2023: Dokumentation der Website und des Tools 'xref' im <a target=\"_blank\" href=\"https://github.com/ABoehlen/ABoehlen.github.io/blob/main/README.md\">README.md</a>";
neuigkeiten[16] = "29.05.2023 / 03.06.2023: Analoge <a href=\"./karten.html\">Karten</a> ergänzt und dokumentiert";
neuigkeiten[17] = "25.06.2023: Struktur von <a href=\"./karten.html\">Karten</a> überarbeitet";
neuigkeiten[18] = "23.07.2023: Text von <a href=\"./secret_series/secret_maps_killi.html\"> Karten zu TV’s The Secret of Killimooin</a> überarbeitet";
neuigkeiten[19] = "08.09.2023: Neue Dokumentation <a href=\"./adventure_series/adventure_maps_valley.html\"> Karten zu TV’s The Valley of Adventure</a> ergänzt";
neuigkeiten[20] = "10.09.2023: Seite <a href=\"./adventure_series/adventure_maps_river.html\"> Karten in TV’s The River of Adventure</a> überarbeitet";
neuigkeiten[21] = "08.10.2023: Zusammenfassung und Gedanken <a href=\"./secret_series/secret_mountain.html\"> The Secret Mountain</a> und <a href=\"./secret_series/secret_moon.html\"> The Secret of Moon Castle</a> überarbeitet";
neuigkeiten[22] = "15.10.2023: Typographie der Berichte harmonisiert";
neuigkeiten[23] = "29.10.2023: Bericht <a href=\"./famous_five/ff_saillon.html\"> Ausflug nach Saillon […]</a> und Seite <a href=\"./touren.html\"> Touren</a> überarbeitet";

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


