// verweise.js V1.0 27.05.2022
// Autor: Adrian Boehlen
// Aktualisierung: laufend
//
// Script uebersetzt in Originaldokumenten definierte Verweise
// in fortlaufende Nummern und stellt diese hochgestellt dar.
// Der originale Verweis ist der Variable name im HTML-Dokument zuzuweisen.
// In der Variable kap kann, falls gewuenscht, eine Kapitelnummer angegeben
// werden. Falls nicht muss kap der Leerstring zugewiesen werden.
// Die Anwendung wird ueber die Funktion verweis ausgeloest, der als Argument
// die in der Funktionsdefinition angegebene Referenz mitgegeben wird.
// Das Script muss im Header referenziert sein, z.B.:
// <script type="text/javascript" src="../js/verweise.js"></script>
// Nachfolgend ein Anwenungsbeispiel:
// <script type="text/javascript">var name="ag"; var kap="4"; verweis("advIntr");</script>

//**************************
// Verweise als Dictionaries
//**************************

var blyIntrDict = new Array();
blyIntrDict["aa"] = "1";
blyIntrDict["ab"] = "2";
blyIntrDict["ac"] = "3";

var advIntrDict = new Array();
advIntrDict["aa"] = "1";
advIntrDict["ab"] = "2";
advIntrDict["ac"] = "4";
advIntrDict["ad"] = "3";

var advIslDict = new Array();
advIslDict["aa"] = "1";
advIslDict["ab"] = "3";
advIslDict["ac"] = "4";
advIslDict["ad"] = "5";
advIslDict["ae"] = "2";

var advCircDict = new Array();
advCircDict["aa"] = "1";
advCircDict["ab"] = "2";

var advSeaDict = new Array();
advSeaDict["aa"] = "1";
advSeaDict["ab"] = "2";
advSeaDict["ac"] = "3";

var advRivDict = new Array();
advRivDict["aa"] = "1";
advRivDict["ab"] = "2";
advRivDict["ac"] = "3";
advRivDict["ad"] = "4";

var advValleyDict = new Array();
advValleyDict["aa"] = "18";
advValleyDict["ab"] = "6";
advValleyDict["ac"] = "19";
advValleyDict["ad"] = "21";
advValleyDict["ae"] = "22";
advValleyDict["af"] = "29"; 
advValleyDict["ag"] = "7";
advValleyDict["ah"] = "20";
advValleyDict["ai"] = "23";
advValleyDict["aj"] = "24";
advValleyDict["ak"] = "33";
advValleyDict["al"] = "9";
advValleyDict["am"] = "1";
advValleyDict["an"] = "3";
advValleyDict["ao"] = "10";
advValleyDict["ap"] = "11";
advValleyDict["aq"] = "16";
advValleyDict["ar"] = "13";
advValleyDict["as"] = "14";
advValleyDict["at"] = "17";
advValleyDict["au"] = "5";
advValleyDict["av"] = "12";
advValleyDict["aw"] = "15";
advValleyDict["ax"] = "2";
advValleyDict["ay"] = "4";
advValleyDict["az"] = "8";
advValleyDict["ba"] = "25";
advValleyDict["bb"] = "27";
advValleyDict["bc"] = "28";
advValleyDict["bd"] = "30";
advValleyDict["be"] = "31";
advValleyDict["bf"] = "34";
advValleyDict["bg"] = "35";
advValleyDict["bh"] = "36";
advValleyDict["bi"] = "37";
advValleyDict["bj"] = "32";
advValleyDict["bk"] = "38";
advValleyDict["bl"] = "39";
advValleyDict["bm"] = "40";
advValleyDict["bn"] = "41";
advValleyDict["bo"] = "42";
advValleyDict["bp"] = "43";
advValleyDict["bq"] = "44";
advValleyDict["br"] = "45";
advValleyDict["bs"] = "46";
advValleyDict["bt"] = "47";
advValleyDict["bu"] = "48";
advValleyDict["bv"] = "49"; // hoechste
advValleyDict["bw"] = "26";

var ffIntrDict = new Array();
ffIntrDict["aa"] = "1";
ffIntrDict["ab"] = "2";
ffIntrDict["ac"] = "3";
ffIntrDict["ad"] = "4";
ffIntrDict["ae"] = "6";
ffIntrDict["af"] = "7";
ffIntrDict["ag"] = "8";
ffIntrDict["ah"] = "5";

var ffModZeltDict = new Array();
ffModZeltDict["aa"] = "1";
ffModZeltDict["ab"] = "2";
ffModZeltDict["ac"] = "5";
ffModZeltDict["ad"] = "3";
ffModZeltDict["ae"] = "6";
ffModZeltDict["af"] = "7";
ffModZeltDict["ag"] = "4";
ffModZeltDict["ah"] = "8";
ffModZeltDict["ai"] = "9";
ffModZeltDict["aj"] = "10";
ffModZeltDict["ak"] = "11";

var secrIntrDict = new Array();
secrIntrDict["aa"] = "1";
secrIntrDict["ab"] = "2";
secrIntrDict["ac"] = "3";
secrIntrDict["ad"] = "4";

var secrKilliDict = new Array();
secrKilliDict["aa"] = "1";
secrKilliDict["ab"] = "2";
secrKilliDict["ac"] = "3";
secrKilliDict["ad"] = "4";

//******************************************************
// Funktion zur Uebersetzung in die definitiven Zeichen,
// die hochgestellt ausgegeben werden
function uebersetze(dict) {
  for(var i in dict) {
    if (i == name) {
      if (kap == "") {
        document.write("<sup>" + dict[i] + "</sup>");
      }
      else {
        document.write("<sup>" + dict[i] + "&nbsp;(Kapitel&nbsp;" + kap + ")" + "</sup>");
      }
    }
  }
}

//*******************************
// Anwendung zur Uebersetzung der
// oben definierten Dictionaries
function verweis(ref) {
  switch (ref) {
    case "blyIntr":
      uebersetze(blyIntrDict);
      break;
    case "advIntr":
      uebersetze(advIntrDict);
      break;
    case "advIsl":
      uebersetze(advIslDict);
      break;
    case "advCirc":
      uebersetze(advCircDict);
      break;
    case "advSea":
      uebersetze(advSeaDict);
      break;
    case "advRiv":
      uebersetze(advRivDict);
      break;
    case "advVal":
      uebersetze(advValleyDict);
      break;
    case "ffIntr":
      uebersetze(ffIntrDict);
      break;
    case "ffModZelt":
      uebersetze(ffModZeltDict);
      break;
    case "secrIntr":
      uebersetze(secrIntrDict);
      break;
    case "secrKilli":
      uebersetze(secrKilliDict);
      break;
  }
}