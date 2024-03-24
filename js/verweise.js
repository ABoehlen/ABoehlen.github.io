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

// *************************
// Verweise als Dictionaries
// *************************

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
advRivDict["aa"] = "2";
advRivDict["ab"] = "3";
advRivDict["ac"] = "4";
advRivDict["ad"] = "5";
advRivDict["ae"] = "1";

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

// ***************************

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

var ffSaillDict = new Array();
ffSaillDict["aa"] = "1";
ffSaillDict["ab"] = "2";
ffSaillDict["ac"] = "3";
ffSaillDict["ad"] = "4";
ffSaillDict["ae"] = "5";
ffSaillDict["af"] = "6";
ffSaillDict["ag"] = "7";
ffSaillDict["ah"] = "8";
ffSaillDict["ai"] = "10";
ffSaillDict["aj"] = "12";
ffSaillDict["ak"] = "9";
ffSaillDict["al"] = "11";

var ffSmugDict = new Array();
ffSmugDict["aa"] = "1";
ffSmugDict["ab"] = "2";
ffSmugDict["ac"] = "3";
ffSmugDict["ad"] = "4";
ffSmugDict["ae"] = "5";
ffSmugDict["af"] = "6";
ffSmugDict["ag"] = "8";
ffSmugDict["ah"] = "9";
ffSmugDict["ai"] = "10";
ffSmugDict["aj"] = "11";
ffSmugDict["ak"] = "13";
ffSmugDict["al"] = "14";
ffSmugDict["am"] = "17";
ffSmugDict["an"] = "12";
ffSmugDict["ao"] = "15";
ffSmugDict["ap"] = "16";
ffSmugDict["aq"] = "18";
ffSmugDict["ar"] = "19";
ffSmugDict["as"] = "21";
ffSmugDict["at"] = "22";
ffSmugDict["au"] = "7";
ffSmugDict["av"] = "20";

// ***************************

var secrIntrDict = new Array();
secrIntrDict["aa"] = "1";
secrIntrDict["ab"] = "2";
secrIntrDict["ac"] = "3";
secrIntrDict["ad"] = "5";
secrIntrDict["ae"] = "4";

var secrKilliDict = new Array();
secrKilliDict["aa"] = "2";
secrKilliDict["ab"] = "3";
secrKilliDict["ac"] = "4";
secrKilliDict["ad"] = "6";
secrKilliDict["ae"] = "7";
secrKilliDict["af"] = "5";
secrKilliDict["ag"] = "1";

var secrMoonDict = new Array();
secrMoonDict["aa"] = "1";
secrMoonDict["ab"] = "2";
secrMoonDict["ac"] = "7";
secrMoonDict["ad"] = "6";
secrMoonDict["ae"] = "4";
secrMoonDict["af"] = "3";
secrMoonDict["ag"] = "5";

var secrMtnDict = new Array();
secrMtnDict["aa"] = "1";
secrMtnDict["ab"] = "2";
secrMtnDict["ac"] = "6";
secrMtnDict["ad"] = "3";
secrMtnDict["ae"] = "5";
secrMtnDict["af"] = "9";
secrMtnDict["ag"] = "8";
secrMtnDict["ah"] = "11";
secrMtnDict["ai"] = "4";
secrMtnDict["aj"] = "7";
secrMtnDict["ak"] = "10";

// ***************************

var dokSkyDict = new Array();
dokSkyDict["aa"] = "3";
dokSkyDict["ab"] = "4";
dokSkyDict["ac"] = "5";
dokSkyDict["ad"] = "6";
dokSkyDict["ae"] = "7";
dokSkyDict["af"] = "8";
dokSkyDict["ag"] = "9";
dokSkyDict["ah"] = "1";
dokSkyDict["ai"] = "10";
dokSkyDict["aj"] = "11";
dokSkyDict["ak"] = "2";
dokSkyDict["al"] = "12";
dokSkyDict["am"] = "13";

// ******************************************************
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

// *******************************
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
    case "ffSmug":
      uebersetze(ffSmugDict);
      break;
    case "ffSaill":
      uebersetze(ffSaillDict);
      break;
    case "secrIntr":
      uebersetze(secrIntrDict);
      break;
    case "secrKilli":
      uebersetze(secrKilliDict);
      break;
    case "secrMoon":
      uebersetze(secrMoonDict);
      break;
    case "secrMtn":
      uebersetze(secrMtnDict);
      break;
    case "dokSky":
      uebersetze(dokSkyDict);
      break;
  }
}