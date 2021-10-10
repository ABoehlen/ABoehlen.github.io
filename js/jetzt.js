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
jetzt();