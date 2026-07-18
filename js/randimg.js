// randimg.js V1.3 16.01.2026
// Autor: Adrian Boehlen
// Aktualisierung: laufend
//
// Script greift nach Zufallsprinzip aus einer Liste von Hikr-Bildern (eindeutige, in der Hikr-Datenbank
// definierte Nummern) eines heraus und stellt es in der einheitlichen Groesse von 320px in der 
// laengeren Achse dar. Damit das Script weiss, ob das Bild hoch oder quer liegt, ist jede Nummer
// mit der Ergaenzung _l (landscape) bzw. _p (portrait) gekennzeichnet.
//
// Seit Jan. 2026 ist es nicht mehr moeglich, Hikr-Bilder direkt in fremde Seiten einzubinden, weshalb nun
// Bilder aus einer kleinen, lokal gespeicherten Auswahl angezeigt werden. Die Bildnamen und das Prinzip
// sind unveraendert.

function randimg() {
  var images = ["4194900_p","4194912_p","4194918_p","4169086_l","4169089_p","4169097_l","4169098_l","4169099_l","4089672_l","4089682_l","4089687_l","4089712_p","4055642_l","4055643_l","4050746_l","4050753_l","4027796_l","4027798_l","4027799_l","4027775_l","3970507_l","3970510_l","3970513_l","3970516_p","3970520_l","3970473_l","3970487_l","3970491_p","3970497_l","3958974_l","3958980_l","3958985_p","3958993_l","3951332_p","3951339_l","3951345_l","3943213_l","3943216_l","3943259_l","3943261_l","3943262_l","3943264_p","3940311_l","3940312_l","3940334_l","3940336_l","3940338_p","3940341_l","3915323_l","3915324_l","3915325_l","3915333_l","3915339_l","3915341_p","3915343_l","3915346_l","3914232_p","3914118_l","3914121_l","3914122_l","3914082_p","3914085_p","3914088_l","3912840_l","3912847_p","3877747_p","3877749_l","3877750_l","3882852_l","3882967_p","3882970_l","3882971_l","3882972_l","3882973_p","3882974_p","3882976_l","3847750_l","3847755_l","3848489_l","3849602_l","3853072_l","3853563_l","4188819_l","3867619_l","3750551_l"];
  
  var rand = Math.floor(Math.random()*images.length);
  var randimage = images[rand];
  
  // 7-stellige Nummern
  if (randimage.length == 9) {
    var orient = randimage.substr(8,1);
    var path = "./hikr_img/" + randimage.substr(0,7) + "k.jpg";
    //var path = "https://f.hikr.org/files/" + randimage.substr(0,7) + "k.jpg";
  }
  // 6-stellige Nummern
  else if (randimage.length == 8) {
    var orient = randimage.substr(7,1);
    var path = "./hikr_img/" + randimage.substr(0,6) + "k.jpg";
    //var path = "https://f.hikr.org/files/" + randimage.substr(0,6) + "k.jpg";
  }
  
  // Bild im Hoch- oder Querformat ausgeben
  if (orient == "p") {
    document.write("<img height=\"320px\" onclick=\"show(\'" + path + "\');\" src=" + path + " />");
  }
  else {
    document.write("<img width=\"320px\" onclick=\"show(\'" + path + "\');\" src=" + path + " />");
  }
}
