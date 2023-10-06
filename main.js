function UpdateCard(section_id) {
	if(document.getElementById("card").checkVisibility()){
		document.getElementById("card").style.visibility = 'visible';
	}
	var iframe_id="cards_html";
	var selected_card =  document.getElementById(iframe_id).contentWindow.document.getElementById("card_"+section_id);	
	document.getElementById("card").innerHTML = selected_card.innerHTML; 
}
