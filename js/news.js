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
neuigkeiten[24] = "03.12.2023: Bericht zu <a href=\"./famous_five/ff_smugglers_top.html\"> Karte von Castaway Hill und Smuggler’s Top</a> überarbeitet und ergänzt";
neuigkeiten[25] = "19.01.2024: Neue Seite mit <a href=\"./touren2.html\">Links zu besonderen Tourenberichten</a> ergänzt";
neuigkeiten[26] = "16.03.2024: Ausführliche Dokumentation zur Eigenentwicklung <a href=\"./dok/skyplot2pano.html\">skyplot2pano</a> ergänzt";
neuigkeiten[27] = "05.05.2024: Automatische Bergbeschriftung der Eigenentwicklung <a href=\"./dok/skyplot2pano.html\">skyplot2pano</a> dokumentiert";
neuigkeiten[28] = "03.06.2024: Seite mit <a href=\"./touren2.html\">Links zu besonderen Tourenberichten</a> erweitert";
neuigkeiten[29] = "23.06.2024: Neue umfangreiche Dokumentation <a href=\"./adventure_series/valley_of_adventure/adv_valley_inh.html\">Mein Tal der Abenteuer</a> ergänzt";
neuigkeiten[30] = "30.08.2024: Seite <a href=\"./karten.html\">Karten</a> erweitert und überarbeitet";
neuigkeiten[31] = "20.09.2024: Erweiterter Inhalt der DXF-Datei von <a href=\"./dok/skyplot2pano.html#nam_dxf\">skyplot2pano</a> erläutert";
neuigkeiten[32] = "06.10.2024: Rubrik <a href=\"./dx.html\">DX</a> und Umbaubericht <a href=\"./dx/mvt7000_wfm-filter-mod.html\">MVT-7000</a> ergänzt";
neuigkeiten[33] = "27.10.2024: Erfahrungsbericht zum <a href=\"./dx/mvt7000.html\">MVT-7000</a> ergänzt";
neuigkeiten[34] = "20.12.2024: Einige neue Bilder in <a href=\"./famous_five/ff_modell_eisenbahn_zeltlager.html\">Bahnanlagen «Zeltlager»</a> eingefügt";
neuigkeiten[35] = "22.12.2024: Umfassend erweiterte Version 2.0 von <a href=\"./dok/skyplot2pano.html\">skyplot2pano</a> erläutert";
neuigkeiten[36] = "12.01.2025: Neuer Bericht: <a href=\"./dx/adv.html\">Eigenbauempfänger nach UKW-Radio-Adventskalender</a>";
neuigkeiten[37] = "16.02.2025: Rubrik <a href=\"./dx.html#scan\">Bandscans</a> und <a target=\"_blank\" href=\"./dx/bandscans/ukw_bandscan_worb.html\">UKW-Bandscan Worb</a> ergänzt";
neuigkeiten[38] = "23.02.2025: Weitere Möglichkeiten und Erfahrungen mit dem <a href=\"./dx/mvt7000.html\">MVT-7000</a> ergänzt";
neuigkeiten[39] = "13.04.2025: <a target=\"_blank\" href=\"./dx/bandscans/ukw_bandscan_worb.html\">UKW-Bandscan Worb</a> und zugehörige <a target=\"_blank\" href=\"./pdf/ukw-bandscan-map.pdf\">Karte</a> deutlich erweitert";
neuigkeiten[40] = "11.05.2025: Überarbeitung und Erweiterung der Seiten <a href=\"./dx/mvt7000.html\">MVT-7000</a> und <a href=\"./dx/mvt7000_wfm-filter-mod.html\">MVT-7000 Modifikation</a>";

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


