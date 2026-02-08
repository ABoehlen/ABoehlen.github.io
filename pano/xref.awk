#!/usr/bin/awk -f
################################################################################################
#
# Filename:     xref.awk
# Author:       Adrian Boehlen
# Date:         15.04.2023
# Version:      1.0
# Product:      Website
#
# Purpose:      - erzeugt awk-Script zum Erstellen von Querverweisen mehrerer html-Dateien
#               - wird von Shellscript xref aus aufgerufen.
#               
#               Idee und Details: Aho et al.: The AWK Programming Language, 1988, S. 121/122
#
#               Fuer die Querverweise werden symbolische Namen verwendet. Als Anker muss jeweils
#               vor dem betreffenden Abschnitt ein Kommentar dieser Form stehen: <!--# gefolgt
#               von der Kategorie und dem symbolischen Namen. z.B: <!--#Bib _muster_ -->
#               Dort wo der Verweis stehen soll, muss der symbolische Name (_muster_) anstelle
#               der spaeteren Nummer eingefuegt werden. z.B: <sup>_muster_</sup>
#
################################################################################################

BEGIN {
  # temporaeres Ersetzen-Script definieren
  tmpfile = "xref.tmp";

  # Usage ausgeben, wenn Anzahl Argumente nicht stimmt und Programm beenden
  if (ARGC != 2) {
    printf("\n*************************************\n")   > "/dev/stderr";
    printf("    Usage: xref.awk  <filelist> \n")          > "/dev/stderr";
    printf("*************************************\n\n")   > "/dev/stderr";
    beende = 1; # um END-Regel zum sofortigen Beenden zu erzwingen
    exit;
  }
}

# Namen der Dateien aus Liste einlesen
{
  dateien[NR] = $1;
}

END {
  # damit END nicht ausgefuehrt wird, falls kein File gelesen wird
  if (beende == 1)
    exit;

  # Dateien gemaess Liste einlesen und Ersetzen-Befehl fuer jede Kategorie
  # aufbauen
  for (i = 1; i <= length(dateien); i++) {
    while (getline < dateien[i] > 0) {
      if ($0 ~ /<!--#/) {
        printf("{ gsub(/%s/, \"%d\") }\n", $2, ++count[$1]) > tmpfile;
        if (definiert[$2])
          print $2, "in Datei \"" dateien[i] "\" wurde zuvor bereits vergeben.";
        definiert[$2] = NR;
      }
    }
  }
  # Loeschbefehl fuer die Definition der symbolischen Namen in finalem File
  printf("!/<!--#/\n") > tmpfile;
}