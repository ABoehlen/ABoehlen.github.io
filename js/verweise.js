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

// ***************************
// Blyton Intro & Adventure

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
advValDict["aa"] = "3";
advValDict["ab"] = "4";
advValDict["ac"] = "6";
advValDict["ad"] = "8";
advValDict["ae"] = "7";
advValDict["af"] = "9";
advValDict["ag"] = "10";
advValDict["ah"] = "12";
advValDict["ai"] = "5";
advValDict["aj"] = "13";
advValDict["ak"] = "11";
advValDict["al"] = "1";
advValDict["am"] = "2";

// ***************************
// Famous Five

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
ffModZeltDict["ak"] = "12";
ffModZeltDict["al"] = "11";

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
ffSmugDict["ab"] = "4";
ffSmugDict["ac"] = "5";
ffSmugDict["ad"] = "6";
ffSmugDict["ae"] = "8";
ffSmugDict["af"] = "9";
ffSmugDict["ag"] = "11";
ffSmugDict["ah"] = "12";
ffSmugDict["ai"] = "13";
ffSmugDict["aj"] = "14";
ffSmugDict["ak"] = "16";
ffSmugDict["al"] = "17";
ffSmugDict["am"] = "20";
ffSmugDict["an"] = "15";
ffSmugDict["ao"] = "18";
ffSmugDict["ap"] = "19";
ffSmugDict["aq"] = "21";
ffSmugDict["ar"] = "22";
ffSmugDict["as"] = "24";
ffSmugDict["at"] = "25";
ffSmugDict["au"] = "10";
ffSmugDict["av"] = "23";
ffSmugDict["aw"] = "7";
ffSmugDict["ax"] = "2";
ffSmugDict["ay"] = "3";

// ***************************
// Secret Series

var secrIntrDict = new Array();
secrIntrDict["aa"] = "1";
secrIntrDict["ab"] = "2";
secrIntrDict["ac"] = "3";
secrIntrDict["ad"] = "5";
secrIntrDict["ae"] = "4";

var secrKilliDict = new Array();
secrKilliDict["aa"] = "4";
secrKilliDict["ab"] = "5";
secrKilliDict["ac"] = "6";
secrKilliDict["ad"] = "8";
secrKilliDict["ae"] = "9";
secrKilliDict["af"] = "7";
secrKilliDict["ag"] = "1";
secrKilliDict["ah"] = "2";
secrKilliDict["ai"] = "3";

var secrMoonDict = new Array();
secrMoonDict["aa"] = "1";
secrMoonDict["ab"] = "3";
secrMoonDict["ac"] = "9";
secrMoonDict["ad"] = "8";
secrMoonDict["ae"] = "5";
secrMoonDict["af"] = "4";
secrMoonDict["ag"] = "7";
secrMoonDict["ah"] = "2";
secrMoonDict["ai"] = "6";

var secrMtnDict = new Array();
secrMtnDict["aa"] = "1";
secrMtnDict["ab"] = "3";
secrMtnDict["ac"] = "7";
secrMtnDict["ad"] = "4";
secrMtnDict["ae"] = "6";
secrMtnDict["af"] = "10";
secrMtnDict["ag"] = "9";
secrMtnDict["ah"] = "12";
secrMtnDict["ai"] = "5";
secrMtnDict["aj"] = "8";
secrMtnDict["ak"] = "11";
secrMtnDict["al"] = "2";

// ***************************
// DX

var dxAdvDict = new Array();
dxAdvDict["aa"] = "1";
dxAdvDict["ab"] = "2";
dxAdvDict["ac"] = "3";
dxAdvDict["ad"] = "5";
dxAdvDict["ae"] = "6";
dxAdvDict["af"] = "7";
dxAdvDict["ag"] = "9";
dxAdvDict["ah"] = "10";
dxAdvDict["ai"] = "4";
dxAdvDict["aj"] = "8";

var dxKKDict = new Array();
dxKKDict["aa"] = "1";
dxKKDict["ab"] = "2";
dxKKDict["ac"] = "4";
dxKKDict["ad"] = "5";
dxKKDict["ae"] = "6";
dxKKDict["af"] = "7";
dxKKDict["ag"] = "3";
dxKKDict["ah"] = "9";
dxKKDict["ai"] = "8";
dxKKDict["aj"] = "10";

var dxMVT7000wfmDict = new Array();
dxMVT7000wfmDict["ab"] = "2";
dxMVT7000wfmDict["ac"] = "3";
dxMVT7000wfmDict["ad"] = "4";
dxMVT7000wfmDict["ae"] = "5";
dxMVT7000wfmDict["af"] = "6";
dxMVT7000wfmDict["ag"] = "8";
dxMVT7000wfmDict["ah"] = "7";
dxMVT7000wfmDict["ai"] = "1";
dxMVT7000wfmDict["am"] = "9";
dxMVT7000wfmDict["ao"] = "10";

var dxMVT7000nfmDict = new Array();
dxMVT7000nfmDict["aa"] = "1";
dxMVT7000nfmDict["ab"] = "2";
dxMVT7000nfmDict["ac"] = "3";
dxMVT7000nfmDict["ad"] = "4";
dxMVT7000nfmDict["ae"] = "5";
dxMVT7000nfmDict["af"] = "6";
dxMVT7000nfmDict["ag"] = "7";


var dxRFBnfDict = new Array();
dxRFBnfDict["aa"] = "2";
dxRFBnfDict["ab"] = "4";
dxRFBnfDict["ac"] = "3";
dxRFBnfDict["ad"] = "1";

var dxRFBzfDict = new Array();
dxRFBzfDict["aa"] = "1";
dxRFBzfDict["ab"] = "2";
dxRFBzfDict["ac"] = "3";
dxRFBzfDict["ad"] = "4";
dxRFBzfDict["ae"] = "5";
dxRFBzfDict["af"] = "6";
dxRFBzfDict["ag"] = "7";
dxRFBzfDict["ah"] = "8";
dxRFBzfDict["ai"] = "9";
dxRFBzfDict["aj"] = "12";
dxRFBzfDict["ak"] = "13";
dxRFBzfDict["al"] = "16";
dxRFBzfDict["am"] = "11";
dxRFBzfDict["an"] = "15";
dxRFBzfDict["ao"] = "14";
dxRFBzfDict["ap"] = "10";

var dxUKWLoopDict = new Array();
dxUKWLoopDict["aa"] = "1";
dxUKWLoopDict["ab"] = "2";
dxUKWLoopDict["ac"] = "3";
dxUKWLoopDict["ad"] = "4";
dxUKWLoopDict["ae"] = "5";
dxUKWLoopDict["af"] = "6";


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
    case "dxAdv":
      uebersetze(dxAdvDict);
      break;
    case "dxKK":
      uebersetze(dxKKDict);
      break;
    case "dxMVT7000wfm":
      uebersetze(dxMVT7000wfmDict);
      break;
    case "dxMVT7000nfm":
      uebersetze(dxMVT7000nfmDict);
      break;
    case "dxRFBnf":
      uebersetze(dxRFBnfDict);
      break;
    case "dxRFBzf":
      uebersetze(dxRFBzfDict);
      break;
    case "dxUKWLoop":
      uebersetze(dxUKWLoopDict);
      break;

  }
}