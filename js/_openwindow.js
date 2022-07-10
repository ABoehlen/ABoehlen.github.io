function NewWindow (Adress) {
  MyWindow = window.open(Adress, "New Window", "width=1024,height=768,left=100,top=200");
  MyWindow.focus();
}