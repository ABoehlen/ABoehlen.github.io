// news.js V1.3 11.03.2026
// Autor: Adrian Boehlen
// Aktualisierung: laufend
//
// Script greift aus der fortlaufenden Liste der Neuerungen, die hier als Array
// aufgebaut ist, eine beliebige Anzahl heraus und gibt sie auf der Webseite aus.
//
// Chronik der Aenderungen, neueste zuunterst
//------------------------------------------------------------------------------------------------------------------------

var neuigkeiten =  [
  "19.09.2021: Erstes Commit, noch ohne Inhalt",
  "10.10.2021: erster Inhalt ergänzt",
  "13.03.2022: Design optimiert",
  "29.05.2022: Übersicht <a href=\"./famous_five/famous_five.html\">Fünf Freunde</a> ergänzt",
  "29.05.2022: Neuer Bericht: <a href=\"./famous_five/ff_modell_eisenbahn_zeltlager.html\">Bahnanlagen «Zeltlager»</a>",
  "19.06.2022: Startseite angepasst",
  "10.07.2022: Neue Funktion zum Vergrössern der Bilder",
  "24.09.2022: Neue Rubrik <a href=\"./karten.html\">Karten</a> ergänzt",
  "30.09.2022: Übersicht <a href=\"./famous_five/famous_five.html\">Fünf Freunde</a> überarbeitet",
  "22.10.2022: Karte <a href=\"./karten.html#2014_castlehill_map\">Castle Hill</a> ergänzt",
  "12.12.2022: Neue Bilder Startseite / Footer in JavaScript ausgelagert",
  "29.01.2023: Karte <a href=\"./karten.html#2023_valledinibbio\">Valle di Nibbio</a> ergänzt",
  "01.03.2023: Dokumentation <a href=\"./secret_series/secret_maps_killi.html\"> Karten von Killimooin</a> erweitert",
  "17.03.2023: Zu jeder Serienbeschreibung in <a href=\"./blyton.html\"> Enid Blyton</a> ein Bild ergänzt",
  "22.03.2023: Neue Option auf der Startseite, um die gesamte Chronik anzuzeigen",
  "30.04.2023: Dokumentation der Website und des Tools 'xref' im <a target=\"_blank\" href=\"https://github.com/ABoehlen/ABoehlen.github.io/blob/main/README.md\">README.md</a>",
  "29.05.2023 / 03.06.2023: Analoge <a href=\"./karten.html\">Karten</a> ergänzt und dokumentiert",
  "25.06.2023: Struktur von <a href=\"./karten.html\">Karten</a> überarbeitet",
  "23.07.2023: Text von <a href=\"./secret_series/secret_maps_killi.html\"> Karten zu TV’s The Secret of Killimooin</a> überarbeitet",
  "08.09.2023: Neue Dokumentation <a href=\"./adventure_series/adventure_maps_valley.html\"> Karten zu TV’s The Valley of Adventure</a> ergänzt",
  "10.09.2023: Seite <a href=\"./adventure_series/adventure_maps_river.html\"> Karten in TV’s The River of Adventure</a> überarbeitet",
  "08.10.2023: Zusammenfassung und Gedanken <a href=\"./secret_series/secret_mountain.html\"> The Secret Mountain</a> und <a href=\"./secret_series/secret_moon.html\"> The Secret of Moon Castle</a> überarbeitet",
  "15.10.2023: Typographie der Berichte harmonisiert",
  "29.10.2023: Bericht <a href=\"./famous_five/ff_saillon.html\"> Ausflug nach Saillon […]</a> und Seite <a href=\"./touren.html\"> Touren</a> überarbeitet",
  "03.12.2023: Bericht zu <a href=\"./famous_five/ff_smugglers_top.html\"> Karte von Castaway Hill und Smuggler’s Top</a> überarbeitet und ergänzt",
  "19.01.2024: Neue Seite mit <a href=\"./touren2.html\">Links zu besonderen Tourenberichten</a> ergänzt",
  "16.03.2024: Ausführliche Dokumentation zur Eigenentwicklung <a href=\"./pano/skyplot2pano.html\">skyplot2pano</a> ergänzt",
  "05.05.2024: Automatische Bergbeschriftung der Eigenentwicklung <a href=\"./pano/skyplot2pano.html\">skyplot2pano</a> dokumentiert",
  "03.06.2024: Seite mit <a href=\"./touren2.html\">Links zu besonderen Tourenberichten</a> erweitert",
  "23.06.2024: Neue umfangreiche Dokumentation <a href=\"./adventure_series/valley_of_adventure/adv_valley_inh.html\">Mein Tal der Abenteuer</a> ergänzt",
  "30.08.2024: Seite <a href=\"./karten.html\">Karten</a> erweitert und überarbeitet",
  "20.09.2024: Erweiterter Inhalt der DXF-Datei von <a href=\"./pano/skyplot2pano.html#nam_dxf\">skyplot2pano</a> erläutert",
  "06.10.2024: Rubrik <a href=\"./dx.html\">DX</a> und Umbaubericht <a href=\"./dx/mvt7000_wfm-filter-mod.html\">MVT-7000</a> ergänzt",
  "27.10.2024: Erfahrungsbericht zum <a href=\"./dx/mvt7000.html\">MVT-7000</a> ergänzt",
  "20.12.2024: Einige neue Bilder in <a href=\"./famous_five/ff_modell_eisenbahn_zeltlager.html\">Bahnanlagen «Zeltlager»</a> eingefügt",
  "22.12.2024: Umfassend erweiterte Version 2.0 von <a href=\"./pano/skyplot2pano.html\">skyplot2pano</a> erläutert",
  "12.01.2025: Neuer Bericht: <a href=\"./dx/adv.html\">Eigenbauempfänger nach UKW-Radio-Adventskalender</a>",
  "16.02.2025: Rubrik <a href=\"./dx.html#scan\">Bandscans</a> und <a target=\"_blank\" href=\"./dx/bandscans/ukw_bandscan_worb.html\">UKW-Bandscan Worb</a> ergänzt",
  "23.02.2025: Weitere Möglichkeiten und Erfahrungen mit dem <a href=\"./dx/mvt7000.html\">MVT-7000</a> ergänzt",
  "13.04.2025: <a target=\"_blank\" href=\"./dx/bandscans/ukw_bandscan_worb.html\">UKW-Bandscan Worb</a> und zugehörige <a target=\"_blank\" href=\"./pdf/ukw-bandscan-map.pdf\">Karte</a> deutlich erweitert",
  "11.05.2025: Überarbeitung und Erweiterung der Seiten <a href=\"./dx/mvt7000.html\">MVT-7000</a> und <a href=\"./dx/mvt7000_wfm-filter-mod.html\">MVT-7000 Modifikation</a>",
  "02.06.2025: Neue Funktionen der v2.6 von <a href=\"./pano/skyplot2pano.html\">skyplot2pano</a> erläutert (Darstellen von Namen ignorieren oder erzwingen)",
  "28.06.2025: Neuer Seite: <a href=\"./dx/jingles.html\">Erkennungsmelodien von Rundfunksendern und Sendungen</a>",
  "06.07.2025: Neuer Bericht: <a href=\"./dx/rf-b45_nf-aus.html\">Anschluss für Tonaufnahmen beim Panasonic RF-B45</a>",
  "18.07.2025: Seite <a href=\"./dx/jingles.html\">Erkennungsmelodien von Rundfunksendern und Sendungen</a> fertig gestellt",
  "21.08.2025: Neue Rubrik «Presse» unter <a href=\"./links.html\">Links</a>",
  "20.09.2025: Neuer Bericht: <a href=\"./dx/kk9803.html\">Weltempfänger Wetekom KK-9803: Beschreibung, Modifikation und Erfahrungen</a>",
  "10.11.2025: Diverse Seiten aktualisiert sowie Struktur angepasst</a>",
  "23.11.2025: Neuer Bericht: <a href=\"./dx/rf-b45_zf-aus.html\">Zwischenfrequenz-Ausgang für den Panasonic RF-B45</a>",
  "07.12.2025: Ergänzungen und Präzisierungen im Dokument zum <a href=\"./dx/mvt7000.html\">MVT-7000</a>.",
  "19.12.2025: <a target=\"_blank\" href=\"./dx/bandscans/ukw_bandscan_worb_vstr.html\">UKW-Bandscan Worb Vechigenstrasse von 2007</a> überarbeitet und neu hinzugefügt",
  "22.12.2025: UKW-Bandscans <a target=\"_blank\" href=\"./dx/bandscans/ukw_bandscan_ostermundigen.html\">Ostermundigen von 2004</a> und <a target=\"_blank\" href=\"./dx/bandscans/ukw_bandscan_saasgrund.html\">Saas-Grund von 2005</a> überarbeitet und neu hinzugefügt",
  "11.01.2026: Aufgrund von Angriffen von AI bots auf hikr.org, ist derzeit die Einbindung von auf hikr.org gehosteten Bildern in andere Websites nicht möglich. Dies führt auf der Startseite und auf <a href=\"./touren.html\">Touren</a> zu Fehlern.",
  "16.01.2026: Das im letzten Eintrag erwähnte Problem habe ich dadurch gelöst, indem ich die benötigten Bilder von hikr.org ins github Repo kopiert habe und von dort aufrufe.",
  "18.01.2026: UKW-Bandscan <a target=\"_blank\" href=\"./dx/bandscans/ukw_bandscan_bolligen-bern.html\">Bolligen/Bern von 1996</a> digital erfasst und neu hinzugefügt",
  "13.02.2026: Aktualisierung der Seiten <a href=\"./dx/mvt7000.html\">MVT-7000</a> und <a href=\"./dx/mvt7000_wfm-filter-mod.html\">MVT-7000 WFM-Modifikation</a>",
  "15.02.2026: Neue Seite <a target=\"_blank\" href=\"./dx/geraetebestand.html\">Gerätebestand</a> ergänzt"
];

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


