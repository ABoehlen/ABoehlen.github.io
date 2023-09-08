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
advIntrDict["ab"] = "3";
advIntrDict["ac"] = "5";
advIntrDict["ad"] = "4";
advIntrDict["ae"] = "2";

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

var advValDict = new Array();
advValDict["aa"] = "1";
advValDict["ab"] = "2";
advValDict["ac"] = "4";
advValDict["ad"] = "6";
advValDict["ae"] = "5";
advValDict["af"] = "7";
advValDict["ag"] = "8";
advValDict["ah"] = "10";
advValDict["ai"] = "3";
advValDict["aj"] = "11";
advValDict["ak"] = "9";

var ffIntrDict = new Array();
ffIntrDict["aa"] = "1";
ffIntrDict["ab"] = "2";
ffIntrDict["ac"] = "3";
ffIntrDict["ad"] = "4";
ffIntrDict["ae"] = "8";
ffIntrDict["af"] = "9";
ffIntrDict["ag"] = "7";
ffIntrDict["ah"] = "6";
ffIntrDict["ai"] = "5";
ffIntrDict["aj"] = "10";

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
secrIntrDict["ad"] = "5";
secrIntrDict["ae"] = "4";

var secrKilliDict = new Array();
secrKilliDict["aa"] = "1";
secrKilliDict["ab"] = "2";
secrKilliDict["ac"] = "3";
secrKilliDict["ad"] = "5";
secrKilliDict["ae"] = "6";
secrKilliDict["af"] = "4";

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
      uebersetze(advValDict);
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