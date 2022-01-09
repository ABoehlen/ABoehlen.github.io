function alter() {  
  var datum = new Date();
  var monat = datum.getMonth();
  var jahr = datum.getFullYear();
  var geburtsjahr = 1974;
  
  if (monat < 10) {
    document.write(jahr - geburtsjahr - 1);
  }
  else {
    document.write(jahr - geburtsjahr);
  }
}
alter();