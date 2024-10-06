// navi.js V1.3 22.09.2024
// Autor: Adrian Boehlen
//
// Script generiert die Navigationsleiste jeder Seite.
// Die Anwendung wird ueber die Funktion navigationsleiste ausgeloest, der als Argument
// die Tiefe der Hierarchiestufe mitgegeben wird, beginnend mit "1" für die oberste,
// dann "2", "3" etc.
// Das Script muss im Header referenziert sein, z.B.:
// <script type="text/javascript" src="./js/navi.js"></script>
// Nachfolgend ein Anwendungsbeispiel, welches im Bereich <div id="navigation"> platziert sein muss:
// <script type="text/javascript">navigationsleiste("1");</script>

function navigationsleiste(stufe) {
	switch (stufe) {
		case "1":
			pfad = "./";
			break;
		case "2":
			pfad = "../";
			break;
		case "3":
			pfad = "../../";
			break;
	}
	startseite = "<div class=\"navi_mittel\"><a href=\"" + pfad + "index.html\">Startseite</a></div>";
	blyton = "<div class=\"navi_mittel\"><a href=\"" + pfad + "blyton.html\">Enid Blyton</a></div>";
	karten = "<div class=\"navi_mittel\"><a href=\"" + pfad + "karten.html\">Karten</a></div>";
	touren = "<div class=\"navi_mittel\"><a href=\"" + pfad + "touren.html\">Touren</a></div>";
	dx = "<div class=\"navi_schmal\"><a href=\"" + pfad + "dx.html\">DX</a></div>";
	links = "<div class=\"navi_mittel\"><a href=\"" + pfad + "links.html\">Links</a></div>";
	impr = "<div class=\"navi_breit\"><a href=\"" + pfad + "impressum.html\">Impressum</a></div>";
	document.write(startseite + blyton + karten + touren + dx + links + impr);
}
