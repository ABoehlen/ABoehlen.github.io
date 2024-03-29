#!/usr/bin/awk -f
#########################################################################################
#
# Filename:     xref_bibliography.awk
# Author:       Adrian Boehlen
# Date:         30.04.2023
# Version:      1.0
# Product:      Website
#
# Purpose:      - Script generiert das geordnete Literaturverzeichnis aus der originalen,
#                 ungeordneten Textdatei.
#               - wird von Shellscript xref aus aufgerufen,
#               - benoetigt header.txt und footer.txt in der richtigen Struktur im
#                 gleichen Verzeichnis.
#               - als Trennzeichen zwischen symbolischem Namen und zugehoerigem Text
#                 ist "$" zu verwenden, andernfalls Zeile 25 anpassen
#               - Kommentare im originalen Textfile muessen mit # beginnen
#               - Weblinks werden als Links ins HTML-Dokument geschrieben, muessen
#                 aber am Beginn des Textes stehen.
#
#########################################################################################

BEGIN {
  # Feldtrenner im originalen Textdokument
  FS = "$";

  # Standardtitel setzen, wenn nicht bereits definiert
  if (bibTitle == "")
    bibTitle = "Literaturverzeichnis";

  # Usage ausgeben, wenn Anzahl Argumente nicht stimmt und Programm beenden
  if (ARGC != 2) {
    printf("\n******************************************************************************\n") > "/dev/stderr";
    printf("     Usage: xref_bibliography.awk <bibliography list txt> > <output html>\n")        > "/dev/stderr";
    printf("******************************************************************************\n\n") > "/dev/stderr";
    beende = 1; # um END-Regel zum sofortigen Beenden zu erzwingen
    exit;
  }
}

# Kommentarzeilen ueberspringen
$1 ~ /^#/ { 
  next;
}

#  Daten zeilenweise einlesen und in Array quellen_nr ablegen
$1 !~ /^$/ {
  quellen_nr[$1] = $0;
}

END {
  # damit END nicht ausgefuehrt wird, falls kein File gelesen wird
  if (beende == 1)
    exit;

  # Header der HTML-Datei importieren und ausgeben
  header();

  #### Daten sortiert ausgeben ####
  ele = length(quellen_nr);
  print "\t\t\t<!-- automatically generated by xref_bibliography.awk -->";

  for (i = 1; i <= ele; i++) {
    # Zeile in Nummer und Inhalt aufteilen
    split(quellen_nr[i], zeile, "$"); 

    # erste Spalte mit hochgestellter Nummer ausgeben
    printf("\t\t\t%s\n", "<div class=\"Reihe\">");
    printf("\t\t\t\t%s\n", "<div class=\"Zelle_Verw_l\">");
    printf("\t\t\t\t\t%s%s%s\n", "<sup>", zeile[1], "</sup>");
    printf("\t\t\t\t%s\n", "</div>");

    # falls Quelle ein Weblink ist...
    if (zeile[2] ~ /^http/) {
      anz = split(zeile[2], weblink, " ");

      # ...Link setzen, damit neues Tab geoeffnet wird
      printf("\t\t\t\t%s\n", "<div class=\"Zelle_Verw_r\">");
      printf("\t\t\t\t\t%s%s%s%s%s", "<a target=\"_blank\" href=\"", weblink[1], "\">", weblink[1], "</a>");
      
      # Falls noch Erlaeuterungen folgen...
      if (anz > 1) {

        # ...Resttext bilden und ausgeben, sowie Tabellenspalte und Zeile abschliessen...
        rest = "";
        delete weblink[1];
        for (j = 2; j <= (anz); j++)
          rest = rest " " weblink[j];
        printf("\t\t%s\n", rest);
        printf("\t\t\t\t%s\n", "</div>");
        printf("\t\t\t%s\n", "</div>");
      }

      # ...andernfalls Tabellenspalte und Zeile direkt abschliessen
      else {
        printf("\t\t\t\t%s\n", "</div>");
        printf("\t\t\t%s\n", "</div>");
      }
    }
    else {
      # Offlinequellen als normalen Text ausgeben, Tabellenspalte und Zeile abschliessen
      printf("\t\t\t\t%s\n", "<div class=\"Zelle_Verw_r\">");
      printf("\t\t\t\t\t%s\n", zeile[2]);
      printf("\t\t\t\t%s\n", "</div>");
      printf("\t\t\t%s\n", "</div>");
    }
  }

  # Footer der HTML-Datei importieren und ausgeben
  footer();
}

function header(    file, inhalt) {
  file = "header.txt";
  while ((getline inhalt < file) > 0)
    print inhalt;
  printf("\t\t\t%s%s%s\n", "<h1>", bibTitle, "</h1>");
}

function footer(    file, inhalt) {
  file = "footer.txt";
  while ((getline inhalt < file) > 0)
    print inhalt;
}