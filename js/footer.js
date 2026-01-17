// footer.js V1.0 12.12.2022
// Autor: Adrian Boehlen
//
// Script generiert die Fusszeile jeder Seite.
// Die Anwendung wird ueber die Funktion fusszeile ausgeloest, der als Argument
// die Tiefe der Hierarchiestufe mitgegeben wird, beginnend mit "1" für die oberste,
// dann "2", "3" etc.
// Das Script muss im Header referenziert sein, z.B.:
// <script type="text/javascript" src="./js/footer.js"></script>
// Nachfolgend ein Anwendungsbeispiel, welches im Bereich <div id="footer"> platziert sein muss:
// <script type="text/javascript">fusszeile("1");</script>

function fusszeile(stufe) {
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
	div_start = "<div class=\"box\">";
	datenschutzerklaerung = "<a href=\"" + pfad + "datenschutzerklaerung.html\">Datenschutzerklärung</a><br /><br />";
	copyright = "<i>Copyright © 2013 <a target=\"_blank\" href=\"https://penguincolony.com\">Penguincolony.com</a></i>";
	div_end = "</div>";
	document.write(div_start + datenschutzerklaerung + copyright + div_end);
}
