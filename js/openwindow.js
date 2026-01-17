// openwindow.js V1.0 29.05.2023
// Autor: Adrian Boehlen
//
// Script ermoeglicht, Bilder in neuem Fenster zu oeffnen und in Originalgroesse anzuzeigen

function NewWindow (Adress) {
  MyWindow = window.open(Adress, "New Window", "width=1024, height=768, left=100, top=200, scrollbars=1");
  MyWindow.focus();
}