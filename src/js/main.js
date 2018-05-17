
//ВСПЛЫВАЮЩЕЕ МЕНЮ

function openMenu() {
	const openBtn = document.querySelector('.menu__hamburger');

	const menu = $('.hamburgermenu');
	const closeBtn = document.querySelector('.hamburgermenu__close');
	const wrapper = document.querySelector('.wrapper');

	openBtn.addEventListener('click', function () {
		menu.fadeIn();
		menu.addClass('hamburgermenu_visible');


		wrapper.style.overflow = 'hidden';
	});

	closeBtn.addEventListener('click', function () {
		menu.fadeOut();
		menu.removeClass('hamburgermenu_visible');
		wrapper.style.overflow = 'visible';
	});

}



openMenu();



//СОСТАВ В СЕКЦИИ СЛАЙДЕРА

function openComposition() {
	var openBtn = document.querySelector(".screenslider__productcontent");
	var appearMenu = document.querySelector(".screenslider__composition");
	var closeBtn = document.querySelector(".screenslider__productcontent");
	let op = 0;

	openBtn.addEventListener("click", function () {
		appearMenu.classList.toggle("screenslider__composition_active")

		openBtn.style.backgroundColor = "#e35028";

	});

	setTimeout(function foo() {
		if (op < 1) {
			appearMenu.style.opacity = op;
			op += 0.1;
			setTimeout(foo, 100);
		}
	}, 100);



}


openComposition();


//АККОРДЕОН В СЕКЦИИ КОМАНДЫ

function openTeam() {
	const openBtn = document.querySelectorAll('.screenteam__item-block');

	for (let i = 0; i < openBtn.length; i++) {
		openBtn[i].addEventListener('click', function () {
			const activeBtn = this;
			console.log(activeBtn);
		
			const openTeamContent = activeBtn.parentNode;
			
			console.log(openTeamContent);
			
			openTeamContent.classList.toggle('screenteam__item_active');
			
		});

	};

};

openTeam();

//ГОРИЗОНТАЛЬНЫЙ АККОРДЕОН

function openMenuPosition() {

	const openPos = document.querySelectorAll('.screenmenu__item');


	for (let i = 0; i < openPos.length; i++) {
		openPos[i].addEventListener('click', function (event) {
			const z = this;
			z.classList.toggle('screenmenu__item_active');



		})
	}
};




openMenuPosition();

//СЕКЦИЯ ОТЗЫВОВ

function commentsPopup() {;
	const namePopup = document.querySelector('.screencomments__popup-name');

	const commentPopup = document.querySelector('.screencomments__popup-content');
	const openPop = document.querySelectorAll('.screencomments__button');
	const popup = document.querySelector('.screencomments__popup');
	const closePop = document.querySelector('.screencomments__popup-close');
	let op = 0;


	for (var i = 0; i < openPop.length; i++) {
		openPop[i].addEventListener('click', function () {

			var z = this;
			var popParent = z.parentNode;
			console.log(popParent);

			const name = popParent.querySelector('.screencomments__title');

			const comment = popParent.querySelector('.screencomments__text');
			popup.classList.add('screencomments__popup_active');

			namePopup.textContent = name.innerHTML;
			commentPopup.textContent = comment.innerHTML;
		});
	}




	closePop.addEventListener('click', function () {
		popup.classList.remove('screencomments__popup_active');
	});

	setTimeout(function foo() {
		if (op < 1) {
			popup.style.opacity = op;
			op += 0.1;
			setTimeout(foo, 100);
		}
	}, 100);

};

commentsPopup()

//СЛАЙДЕР

function moveSlider() {
	const arrowRight = document.querySelector('.screenslider__arrow-right');
	
	const arrowLeft = document.querySelector('.screenslider__arrow-left');
	
	const sliderItem = document.querySelector('.screenslider__item');
	
	const computed = getComputedStyle(sliderItem);
	
	
	
	arrowLeft.addEventListener('click', function(){
		 		
		  let currentLeft = parseInt(computed.width);
		console.log(currentLeft);
		
			sliderItem.style.left = currentLeft + "px";					
								
								});
};

moveSlider();
