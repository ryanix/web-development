var myImage = document.querySelector('img');
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName(){
	var myName = prompt('Please enter your name');
	localStorage.setItem('name',myName);
	myHeading.textContent = myName + "\'s first website.";
	if(!localStorage.getItem('name')){
		setUserName();
	}else {
		var storeName = localStorage.getItem('name');
		myHeading.textContent = storeName + "\'s first website.";
	}
}

myButton.onclick = function() {
	setUserName();
}

myImage.onclick = function(){
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/first-image.jpg'){
		myImage.setAttribute('src','images/second-image.jpg');
	}else {
		myImage.setAttribute('src','images/first-image.jpg');
	}
}