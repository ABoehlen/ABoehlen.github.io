// now.js V1.2 18.10.2023
// Autor: Adrian Boehlen, basierend auf einer nicht mehr auffindbaren Online-Quelle
//
// Script erzeugt ein deutschsprachiger Datum- und Zeit-String

function jetzt() {  
  var datum = new Date();
  var tag = datum.deformat();
  var std = datum.getHours();
  var min = datum.getMinutes();
  
  document.write("Heute ist der ");
  
  if (min < 10) {
    document.write(tag + ".<br />Es ist " + std + ":0" + min + " Uhr.");
  }
  else {
    document.write(tag + ".<br />Es ist " + std + ":" + min + " Uhr.");
  }
}

Date.prototype.deformat = de_format;

function de_format() {
  var monat = new Array(12);
  monat[0] =  "Jan.";
  monat[1] =  "Feb.";
  monat[2] =  "März";
  monat[3] =  "April";
  monat[4] =  "Mai";
  monat[5] =  "Juni";
  monat[6] =  "Juli";
  monat[7] =  "Aug.";
  monat[8] =  "Sept.";
  monat[9] =  "Okt.";
  monat[10] = "Nov.";
  monat[11] = "Dez.";
  
  var erg = this.getDate() + ". ";
  erg += monat[this.getMonth()] + " ";
  erg += this.getFullYear();
  return erg;
}