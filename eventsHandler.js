'user strick'

function showData(data){
	alert(data);
}

function countBird(){
	
	for (var i = 1; i < 5; i++) {
		showData('Bird number '+i+' in the sky.')
	}
}

eventFromJSButton.onclick = function(){
	showData('eventFromJSButton is clicked by user');
}

area.onmousedown = function(){
	this.value = 'mouseDown';
}

area.onmouseup = function(){
	this.value = 'mouseUp';
}

area.onclick = function(){
	this.value = 'onClick';
}

focusButton.onclick = function(){
	focusText.value = 'IN focusButton event';

	setTimeout(function(){
		focusText.focus();	
		focusText.value = 'OUT focusButton event';
	},2000);
}

formValidationAge.onblur = function(){
	if(isNaN(this.value)){
		this.classList.remove('accepted');
		this.classList.add('error');
		formValidationAge.focus();
	}else{
		this.classList.remove('error');
		this.classList.add('accepted');
		formValidationName.focus();
	}
	
}



















