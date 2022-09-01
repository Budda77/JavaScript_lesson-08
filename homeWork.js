'user strick'

function eventHideDIV(){
	let elem = document.getElementById('text');
	if (elem.hidden == false){
		elem.hidden = true;
	} else {
		elem.hidden = false;
	}
}

function eventHideDIV2(){

	let elem = document.getElementById("text2");
	let text = document.getElementById("link");
	if(elem.style.display == "block") {
    		elem.style.display = "none";
		text.innerHTML = "Open";
  	}
	else {
		elem.style.display = "block";
		text.innerHTML = "Close";
	}
}

buttonId.onclick = function(){
	let elem = document.getElementById('buttonId');
	elem.hidden = true;
	//elem.style.display = "none";
}

mainMenu.onclick = function(){
	let element = document.getElementById("menu");
	
	if(element.style.display == "block") {
		element.style.display = "none";
	}
else {
	element.style.display = "block";
}
}


