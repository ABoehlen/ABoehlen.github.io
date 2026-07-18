# Persönliche Website

Currently only available in German.

***

## Allgemeine Beschreibung

https://aboehlen.github.io/ ist meine persönliche Website, realisiert als Github Repository unter Verwendung von Github Pages.

Mittels Github Pages https://pages.github.com/ ist es möglich, eine komplette Website als Github Repository zu verwalten. Wie das geht, ist online gut dokumentiert, z.B. hier \[1\].

Die URL leitet sich aus dem Benutzernamen ab (`<username>.github.io`), kann aber auf jede beliebige Domain umgeleitet werden, wie hier beschrieben: \[2\] Momentan nutze ich diese Möglichkeit nicht.

***

## Dokumentation der zusätzlichen Tools

Diese liegen im Unterverzeichnis `Util`.

### xref – Programm zur Erzeugung fortlaufender Querverweise

#### Einleitung

Das Shellscript `xref` ermöglicht die fortlaufende Nummerierung von Querverweisen und Abbildungen in Berichten und Dokumentationen, die eine oder mehrere HTML-Seite umfassen.

Die grundlegende Problematik und ein Lösungsansatz wird von den Autoren der Programmiersprache Awk in ihrem Standardwerk erläutert:

*A common problem in document preparation is creating a consistent set of names or numbers for items like bibliographic citations, figures, tables, examples, and so on. Some text formatters help out with this task, but most expect you to do it yourself.* \[3\].

Das hier geschilderte Problem stellt sich insbesondere bei manuell erstellten HTML-Dokumenten. Daher habe ich die vorgeschlagene Lösung in eine Variante für mehrseitige HTML-Dokumente ausgebaut.

#### Grundsatz

Das Konzept von Aho, Kernighan und Weinberger wird unverändert übernommen. Zitiert aus \[3\]:

*As the document is being written, the author creates and uses symbolic names for the various items that will be cross-referenced. Because the names are symbolic, items can be added, deleted, and rearranged without having to change any existing names.*

#### Umsetzung

Folgende der von den Autoren genannten Möglichkeiten werden in dieser Variante von `xref` angewendet:
- bibliographische Verweise
- Abbildungsliste

Vor dem jeweiligen Abschnitt ist ein HTML-Kommentar einzufügen, der den symbolischen Namen enthält und den Hinweis, ob dieser ein bibliographischer Link oder eine Abbildung kennzeichnet. Dort, wo später dann die fortlaufende Nummer stehen soll, muss anschliessend dieser symbolische Name eingefügt werden. Hier ein Beispiel für einen bibliographischen Verweis:

	<!--#Bib _az_ -->
	<p><em>“Two burnt houses—and nobody to be found anywhere,” said Jack. “Very curious. […]”<br />
	“Quite burnt out,” said Dinah. “What an awful thing! What’s happened to the people who lived here? There must have been war here, or something. […]” </em><sup>_az_</sup></p>

Der symbolische Name heisst also `_az_`, und wird durch `#Bib` als bibliographischen Verweis gekennzeichnet. Die zugehörige Nummer soll später hochgestellt erscheinen, ist daher in das `<sup>` Tag eingefasst.

Bei Abbildungen ist das Prinzip identisch, nur lautet die Kennzeichnung hier `#Fig`.

	<!--#Fig _talgrd_ -->
	<div class="Bild_l">
	    <img width="320px" height="386px" alt="Valle di Nibbio" onclick="show('./img/20170713_39_valle-di-nibbio_720x960.jpg');" src="./img/20170713_39_valle-di-nibbio_320x386.jpg" />
	    <p class="Bildlegende">Abb.&nbsp;_talgrd_:&nbsp;Viele Steine und dichtes Gebüsch – das Valle di Nibbio<br />Eigene Aufnahme vom 13.07.2017</p>
	</div>

Die spätere Nummer wird in diesem Fall als normaler Text ausgegeben. Leerraum wird vorteilhaft mittels erzwungener Leerzeichen `&nbsp;` eingefügt. 

Das Literatur- bzw. Abbildungsverzeichnis muss als normale Textdatei vorliegen. Die Trennung zwischen symbolischem Namen und Erläuterungstext erfolgt durch das `$` Zeichen. Wird ein anderes Zeichen gewünscht, muss dies in `xref_bibliography.awk` und/oder `xref_figurelist.awk` entsprechend definiert werden.
Das Literaturverzeichnis muss `bibliography.txt` heissen und die Einträge müssen in folgender Form vorliegen (Reihenfolge spielt keine Rolle):

`<symbolischer Name>$ev. Weblink und/oder Erläuterungstext`

Beispiel:
`_az_$<em>«Zwei abgebrannte Häuser und keine Menschenseele zu finden», sagte Jack. «Sehr seltsam.[…]»<br />«Völlig ausgebrannt» bestätigte Dinah. «Wie schrecklich! Was geschah wohl mit den Leuten, die hier lebten? Da war wohl Krieg oder so etwas.[…]»</em> (Übersetzung des Autors gemäss Anm.&nbsp;_ab_, Kapitel&nbsp;4)`

Wie hier ersichtlich, kann der Erläuterungstext ebenfalls symbolische Namen aufweisen, wenn dort auf weitere Einträge verwiesen wird. Die Formatierung wird direkt über HTML-Tags definiert, in diesem Fall die Kursivschrift `<em>`, der Zeilenumbruch `<br />` und erzwungene Leerzeichen `&nbsp;`. Wird ein Weblink verwendet, muss dieser am Anfang stehen, also direkt hinter dem Trennzeichen, z.B.

`_ac_$https://www.in-valgrande.it/vegia/vegia.html (Corriere della Sera, 20.01.1932)`

Beim Abbildungsverzeichnis, welches `figures.txt` heissen muss, ist das Prinzip ähnlich:

`_talgrd_$Eigene Aufnahme vom 13.07.2017`

Weblinks müssen hier am Ende stehen und vom Text mit einem TAB getrennt sein, z.B.

`_tres-haeus_$Zeichnung von Stuart Tresilian, entnommen von	https://www.enidblytonsociety.co.uk/book-details.php?id=166&title=#illustrations`

In beiden Textdateien dürfen Kommentare stehen. Sie müssen wie in awk oder bash mit `#` beginnen und umfassen jeweils eine volle Zeile. Damit das File auf jeden Fall komplett gelesen wird, muss am Ende eine Leerzeile stehen.

Damit das Programm aus diesen Textdateien komplette HTML-Dateien erzeugen kann, werden die beiden Dateien `header.txt` und `footer.txt` benötigt. Allfällige Anpassungen der Struktur sind direkt dort vorzunehmen.

#### Systemvoraussetzungen

Benötigt wird eine Shell-Umgebung (bash) mit Gawk. Dies ist auf allen Linux-Systemen gegeben. Unter Windows wird am besten *Git for Windows* verwendet. *Cygwin* ist auch möglich.

#### Programmaufruf

Folgende Dateien müssen ins Arbeitsverzeichnis kopiert werden:

- xref
- xref.awk
- xref_bibliography.awk
- xref_figurelist.awk
- header.txt
- footer.txt

Aufgerufen wird nur `xref`, welches dann die Unterprogramme selbst parametrisiert und ausführt.

Damit `xref` weiss, in welcher Reihenfolge, die HTML-Dateien abzuarbeiten sind, muss als 1. Argument eine Dateiliste in Textform angegeben werden. Dort sind die HTML-Dateien in der korrekten Reihenfolge aufgeführt, jeweils durch einem Zeilenvorschub getrennt. Am Ende müssen die beiden Textfiles für das Literatur- und das Abbildungsverzeichnis stehen. Die Datei wird mit einer Leerzeile abgeschlossen.

Als 2. und 4. Argument sind die Namen der neu zu erstellenden HTML-Dateien für das Literatur- und Abbildungsverzeichnis anzugeben, deren Titel als 3. und 5. Argument definiert wird. Die Titel werden später als Überschrift 1. Ordnung (`h1`) in den jeweiligen HTML-Dokumenten stehen. Die Ausgabe erfolgt in das Verzeichnis, welches als 6. Argument angegeben wird.

Beispiel: `./xref filelist.txt adv_valley_lit.html "Quellennachweis" adv_valley_abb.html "Abbildungsverzeichnis" ../adv_valley_def`

Der Programmdurchlauf dauert nur einen Augenblick und erzeugt im angegebenen Verzeichnis die konvertierten HTML-Dateien. Allfällige Unterverzeichnisse mit Bildern oder Scriptfiles müssen manuell dorthin kopiert werden.

***

## Literatur
\[1\] Webseite auf Github hosten: https://de.khanacademy.org/computing/computer-programming/html-css/web-development-tools/a/hosting-your-website-on-github

\[2\] About custom domains and GitHub Pages: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages

\[3\] Aho et al.: The Awk Programming Language, 1988, S. 120 ff

