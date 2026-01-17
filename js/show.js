// show.js V1.0 03.07.2022
// Autor: https://www.webmaster-glossar.de
//
// Script dient dem vergroesserten Oeffnen von Bildern

function show(urlvar){
	document.getElementById("preview").style.display = 'block';
	document.getElementById("preview_inner").style.backgroundImage = 'url("' + urlvar + '")';
}
function show_close(){
	document.getElementById("preview").style.display = 'none';
}