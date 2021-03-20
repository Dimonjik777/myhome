// Burger

let burger = document.querySelector(".header__burger"); // button for open list
let list = document.querySelector(".header__menu"); // list
let close = document.querySelector(".closer");

let click = false; // click not use
if( click == false){
	burger.addEventListener("click", function(){
	list.style.left = '0';
	click = true;
	return click;
});
}; 

close.addEventListener("click", function() {
	list.style.left = '1500px';
});

// Calculator

let formButton = document.querySelector(".calculator__button");
let priceMessage = document.querySelector(".price");

formButton.onclick = function(){
	let square = calculator.elements.squeare__count.value;
	let views = calculator.elements.views.value;
	let materials = calculator.elements.materials.value;

	if( views == 'norve' ){
		if( materials == 'wood'){
			let price = 50000 + 25000 + (square * 15000);
			priceMessage.innerHTML = 'Стоимость постройки: ' + price + ' рублей';
		}
		if( materials == 'stone') {
			let price = 50000 + 20000 + (square * 15000);
			priceMessage.innerHTML = 'Стоимость постройки: ' + price + ' рублей';
		}
		if( materials == 'beton') {
			let price = 50000 + 30000 + (square * 15000);
			priceMessage.innerHTML = 'Стоимость постройки: ' + price + ' рублей';
		}
	}
	if( views == 'Dank') {
		if( materials == 'wood'){
			let price = 60000 + 25000 + (square * 15000);
			priceMessage.innerHTML = 'Стоимость постройки: ' + price + ' рублей';
		}
		if( materials == 'stone') {
			let price = 60000 + 20000 + (square * 15000);
			priceMessage.innerHTML = 'Стоимость постройки: ' + price + ' рублей';
		}
		if( materials == 'beton') {
			let price = 60000 + 30000 + (square * 15000);
			priceMessage.innerHTML = 'Стоимость постройки: ' + price + ' рублей';
		}
	}

}		

//Slider

let containerSlider = document.querySelector(".homes__track");
let buttons = document.querySelectorAll(".elipse");

function slider() {
	// PC slider
	if (window.innerWidth > 1140) {
	buttons[0].onclick = function () {
		if( buttons[1].classList.contains("elipse__active") == true ){
			buttons[0].classList.add("elipse__active");
			containerSlider.style.right = '0';
			buttons[1].classList.remove("elipse__active");
		}
		if( buttons[2].classList.contains("elipse__active") == true ){
			buttons[0].classList.add("elipse__active");
			containerSlider.style.right = '0';
			buttons[2].classList.remove("elipse__active");
		}
		if( buttons[3].classList.contains("elipse__active") == true ){
			buttons[0].classList.add("elipse__active");
			containerSlider.style.right = '0';
			buttons[3].classList.remove("elipse__active");
		}
		if( buttons[4].classList.contains("elipse__active") == true ){
			buttons[0].classList.add("elipse__active");
			containerSlider.style.right = '0';
			buttons[4].classList.remove("elipse__active");
		}
	}
	buttons[1].onclick = function () {
		if( buttons[0].classList.contains("elipse__active") == true ){
			buttons[1].classList.add("elipse__active");
			containerSlider.style.right = '725px';
			buttons[0].classList.remove("elipse__active");
		}
		if( buttons[2].classList.contains("elipse__active") == true ){
			buttons[1].classList.add("elipse__active");
			containerSlider.style.right = '725px';
			buttons[2].classList.remove("elipse__active");
		}
		if( buttons[3].classList.contains("elipse__active") == true ){
			buttons[1].classList.add("elipse__active");
			containerSlider.style.right = '725px';
			buttons[3].classList.remove("elipse__active");
		}
		if( buttons[4].classList.contains("elipse__active") == true ){
			buttons[1].classList.add("elipse__active");
			containerSlider.style.right = '725px';
			buttons[4].classList.remove("elipse__active");
		}
	}
	buttons[2].onclick = function () {
		if( buttons[0].classList.contains("elipse__active") == true ){
			buttons[2].classList.add("elipse__active");
			containerSlider.style.right = '1453px';
			buttons[0].classList.remove("elipse__active");
		}
		if( buttons[1].classList.contains("elipse__active") == true ){
			buttons[2].classList.add("elipse__active");
			containerSlider.style.right = '1453px';
			buttons[1].classList.remove("elipse__active");
		}
		if( buttons[3].classList.contains("elipse__active") == true ){
			buttons[2].classList.add("elipse__active");
			containerSlider.style.right = '1453px';
			buttons[3].classList.remove("elipse__active");
		}
		if( buttons[4].classList.contains("elipse__active") == true ){
			buttons[2].classList.add("elipse__active");
			containerSlider.style.right = '1453px';
			buttons[4].classList.remove("elipse__active");
		}
	}
	buttons[3].onclick = function () {
		if( buttons[0].classList.contains("elipse__active") == true ){
			buttons[3].classList.add("elipse__active");
			containerSlider.style.right = '2180px';
			buttons[0].classList.remove("elipse__active");
		}
		if( buttons[1].classList.contains("elipse__active") == true ){
			buttons[3].classList.add("elipse__active");
			containerSlider.style.right = '2180px';
			buttons[1].classList.remove("elipse__active");
		}
		if( buttons[2].classList.contains("elipse__active") == true ){
			buttons[3].classList.add("elipse__active");
			containerSlider.style.right = '2180px';
			buttons[2].classList.remove("elipse__active");
		}
		if( buttons[4].classList.contains("elipse__active") == true ){
			buttons[3].classList.add("elipse__active");
			containerSlider.style.right = '2180px';
			buttons[4].classList.remove("elipse__active");
		}
	}
	buttons[4].onclick = function () {
		if( buttons[0].classList.contains("elipse__active") == true ){
			buttons[4].classList.add("elipse__active");
			containerSlider.style.right = '2907px';
			buttons[0].classList.remove("elipse__active");
		}
		if( buttons[1].classList.contains("elipse__active") == true ){
			buttons[4].classList.add("elipse__active");
			containerSlider.style.right = '2907px';
			buttons[1].classList.remove("elipse__active");
		}
		if( buttons[2].classList.contains("elipse__active") == true ){
			buttons[4].classList.add("elipse__active");
			containerSlider.style.right = '2907px';
			buttons[2].classList.remove("elipse__active");
		}
		if( buttons[3].classList.contains("elipse__active") == true ){
			buttons[4].classList.add("elipse__active");
			containerSlider.style.right = '2907px';
			buttons[3].classList.remove("elipse__active");
		}
	}
  }
  // Mobile slider
  if(window.innerWidth < 1140){
  	let countSwipe = 3;

  	//Swipe left
  	Hammer(containerSlider).on('swipeleft', function(){

  		if( countSwipe == 1) {
  			containerSlider.style.right = '718px';
  			countSwipe = countSwipe + 1;
  			return false;
  		}

  		if( countSwipe == 2) {
  			containerSlider.style.right = '1453px';
  			countSwipe = countSwipe + 1;
  			return false;
  		}



  		if( countSwipe == 3) {
  			containerSlider.style.right = '2198px';
  			countSwipe = countSwipe + 1;
  			return false;
  		}

  		if( countSwipe == 4 ){
  			containerSlider.style.right = '2940px';
  			countSwipe = countSwipe + 1;
  			return false; 
  		}

  		if( countSwipe == 5 ){
  			return false;
  		}
  		
  	})

  	//Swipe right
  	Hammer(containerSlider).on('swiperight', function(){
  	
  		if( countSwipe == 1 ){
  			return false;
  		}

		if( countSwipe == 2 ){
  			containerSlider.style.right = '-24px';
  			countSwipe = countSwipe - 1;
  			return false;
  		}
		if( countSwipe == 3 ){
  			containerSlider.style.right = '718px';
  			countSwipe = countSwipe - 1;
  			return false;
  		}

		if( countSwipe == 4 ){
  			containerSlider.style.right = '1453px';
  			countSwipe = countSwipe - 1;
  			return false;
  		}

  		if( countSwipe == 5 ){
  			containerSlider.style.right = '2198px';
  			countSwipe = countSwipe - 1;
  			return false;
  		}
  	})
  }
}
slider();