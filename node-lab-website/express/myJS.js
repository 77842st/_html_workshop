document.addEventListener("DOMContentLoaded",function(){

	const test1Elements = document.querySelectorAll(".test1");

	test1Elements.forEach(function(test1Element){
	test1Element.addEventListener("mouseenter",function(){
	test1Element.classList.add("zoom");
	});

	test1Element.addEventListener("mouseleave",function(){
	test1Element.classList.remove("zoom");
	});	
    	});
	
	const strikethroughText = document.querySelector(".strikethrough-text");

	strikethroughText.addEventListener("mouseenter", function () {
        strikethroughText.classList.add("strikethrough");
	});

	const moveTexts= document.querySelectorAll(".moveText");
	moveTexts.forEach(function(element){
	let direction = 1;
	let position = 0;
	const speed = 2;
	
	function moveText() {
		if(direction === 1){
			position += speed;
			if(position >= 100){
				direction=-1;}}
		else{
			position -= speed;
			if(position<=0){
				direction = 1;}}
		element.style.transform = 'translateX(${position}%';
	}
	setInterval(moveText,50);});
});

