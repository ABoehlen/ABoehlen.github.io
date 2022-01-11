function jetzt() {  
  var datum = new Date();
  var tag = datum.deformat();
  var std = datum.getHours();
  var min = datum.getMinutes();
  
  document.write("Heute ist der ");
  
  if (min < 10) {
    document.write(tag + ". Es ist " + std + ":0" + min + " Uhr.");
  }
  else {
    document.write(tag + ". Es ist " + std + ":" + min + " Uhr.");
  }
}

Date.prototype.deformat = de_format;

function de_format() {
  var monat = new Array(12);
  monat[0] = "Januar";
  monat[1] = "Februar";
  monat[2] = "März";
  monat[3] = "April";
  monat[4] = "Mai";
  monat[5] = "Juni";
  monat[6] = "Juli";
  monat[7] = "August";
  monat[8] = "September";
  monat[9] = "Oktober";
  monat[10] = "November";
  monat[11] = "Dezember";
  
  var erg = this.getDate() + ". ";
  erg += monat[this.getMonth()] + " ";
  erg += this.getFullYear();
  return erg;
}

jetzt();