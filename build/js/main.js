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
	var openBtn = document.querySelectorAll(".screenslider__productcontent");

	//	var closeBtn = document.querySelector(".screenslider__productcontent");
	let op = 0;

	for (i = 0; i < openBtn.length; i++) {
		openBtn[i].addEventListener("click", function () {

			const activeBtn = this;


			const appearMenu = activeBtn.querySelector(".screenslider__composition");

			appearMenu.classList.toggle("screenslider__composition_active");

			if (appearMenu.classList.contains('screenslider__composition_active')) {
				activeBtn.style.backgroundColor = "#e35028"
			} else {
				activeBtn.style.backgroundColor =
					"#f08c33"
			}
		});
	};

	//	setTimeout(function foo() {
	//		if (op < 1) {
	//			appearMenu.style.opacity = op;
	//			op += 0.1;
	//			setTimeout(foo, 100);
	//		}
	//	}, 100);



}


openComposition();


//АККОРДЕОН В СЕКЦИИ КОМАНДЫ
function openTeam() {
	//	const openBtn = document.querySelectorAll('.screenteam__item-block');
	//  const currentBlock = document.querySelector('.screenteam__item');
	//
	////
	//for(i=0; i<openBtn.length; i++){
	//	openBtn[i].addEventListener('click', function (e) {
	//  
	//		const z = e.currentTarget;
	//		
	//		const appearBlock = z.parentNode;
	//		console.log(appearBlock);
	//
	//		 if ( appearBlock.classList.contains('screenteam__item_active') && openBtn[i] !== z)	{appearBlock.classList.remove('screenteam__item_active')}
	//		else if (openBtn[i] == z){appearBlock.classList.toggle('screenteam__item_active')
	//			}
	//	
	//!!!!!!!!!!!!!!!! ANIMATION
	//		const activeButton = document.querySelector(".screenteam__item_active");
	//		console.log(activeButton);
	//
	//		const activeContent = activeButton.querySelector('.screenteam__content');
	//		console.log(activeContent);
	//
	//
	//		activeButton.querySelector('.screenteam__content').style.heiht = 0;
	//		
	//
	//
	//
	//		let anim = 0;
	//
	//		function openContent() {
	//			setTimeout(function uh() {
	//				if (anim < 120) {
	//					activeContent.style.height = anim + 'px';
	//					anim += 5;
	//					setTimeout(uh, 30);
	//				}
	//			}, 10);
	//
	//		}
	//
	//		function closeContent() {
	//			setTimeout(function dh() {
	//
	//
	//				if (anim > 0) {
	//					activeContent.style.height = anim + 'px';
	//					anim -= 5;
	//					setTimeout(dh, 30);
	//				}
	//			}, 10);
	//		}

	//	});
	//}
	//}
	//	 !!!!!!!!!!!!!!!!!!!JQUERY

	const openBtn = $('.screenteam__item-block');

	openBtn.on('click', function () {
		$('.screenteam__item-block').not($(this)).closest(".screenteam__item").removeClass('screenteam__item_active');


		$(this).closest(".screenteam__item").toggleClass('screenteam__item_active');
		
		const activeButton = document.querySelector(".screenteam__item_active");
				
		console.log(activeButton);
		
				const activeContent = activeButton.querySelector('.screenteam__content');
				console.log(activeContent);
		
//		let anim = 0;
//		
//		setTimeout(function uh() {
//						if (anim < 120) {
//							activeContent.style.height = anim + 'px';
//							anim += 5;
//							setTimeout(uh, 30);
//						}
//					}, 10);
		
		//___________________________
		//	
		////		if (currentBlock.classList.contains('screenteam__item_active'))openContent()
		////		else closeContent();
		//
		////!!!!!!!!!!!!!!!! ANIMATION
		//
		//		const activeButton = document.querySelector(".screenteam__item_active");
		//		console.log(activeButton);
		//
		//		const activeContent = activeButton.querySelector('.screenteam__content');
		//		console.log(activeContent);
		//
		//
		//		activeButton.querySelector('.screenteam__content').style.heiht = 0;
		//		
		//
		//
		//
		//		let anim = 0;
		//
		//		function openContent() {
		//			setTimeout(function uh() {
		//				if (anim < 120) {
		//					activeContent.style.height = anim + 'px';
		//					anim += 5;
		//					setTimeout(uh, 30);
		//				}
		//			}, 10);
		//
		//		}
		//
		//		function closeContent() {
		//			setTimeout(function dh() {
		//
		//
		//				if (anim > 0) {
		//					activeContent.style.height = anim + 'px';
		//					anim -= 5;
		//					setTimeout(dh, 30);
		//				}
		//			}, 10);
		//		}
		//
	})
};




openTeam();

//ГОРИЗОНТАЛЬНЫЙ АККОРДЕОН

function openMenuPosition() {
	const openPos = $('.screenmenu__position-btn');

	openPos.on('click', function (e) {

		openPos.not($(this)).closest('.screenmenu__item').removeClass('screenmenu__item_active');

		$(this).closest(".screenmenu__item").toggleClass('screenmenu__item_active');

	});


};




openMenuPosition();

//СЕКЦИЯ ОТЗЫВОВ

function commentsPopup() {
	const namePopup = document.querySelector('.screencomments__popup-name');

	const commentPopup = document.querySelector('.screencomments__popup-content');
	const openPop = document.querySelectorAll('.screencomments__button');
	const popup = document.querySelector('.screencomments__popup');
	const closePop = document.querySelector('.screencomments__popup-close');

	const popupActive = document.querySelector('.screencomments__popup_active');

	const allStyle = getComputedStyle(popup);

	console.log(allStyle.opacity);

	let op = 0;


	for (var i = 0; i < openPop.length; i++) {
		openPop[i].addEventListener('click', function () {

			var z = this;
			var popParent = z.parentNode;
			//			console.log(popParent);

			const name = popParent.querySelector('.screencomments__title');

			const comment = popParent.querySelector('.screencomments__text');

			popup.classList.add('screencomments__popup_active');

			namePopup.textContent = name.innerHTML;
			commentPopup.textContent = comment.innerHTML;

			setTimeout(function (opac) {
				if (op <= 1) {
					popup.style.opacity = op;
					op += 0.2;
					return op;
								
				}
				setTimeout(opac, 100);
				
			}, 100);
		});




		closePop.addEventListener('click', function () {
			popup.classList.remove('screencomments__popup_active');
			
			setInterval(function (unopac) {
				if (op >= 0) {
					popup.style.opacity = op;
					op -= 0.2;
					return op;
				}
//				setTimeout(opac, 100);
			}, 100);
		});

	}

};

commentsPopup()

//СЛАЙДЕР

$(function () {

	const moveSlide = function (container, slideNum) {


		const items = container.find('.screenslider__item');
		const activeSlide = items.filter('.active');

		const reqItem = items.eq(slideNum);
		const reqIndex = reqItem.index();
		const list = container.find('.screenslider__list');

		let duration = 500;
		if (reqItem.length) {

			list.animate({
				'left': -reqIndex * 100 + '%'
			}, duration, function () {
				activeSlide.removeClass('active');
				reqItem.addClass('active');

			});
		};
	};


	$(".screenslider__arrow").on('click', function (e) {
		e.preventDefault();
		const $this = $(this);

		const container = $this.closest('.screenslider__block');

		const items = container.find('.screenslider__item');
		const activeSlide = items.filter('.active');
		const nextSlide = activeSlide.next();
		const prevSlide = activeSlide.prev();


		if ($this.hasClass('screenslider__arrow-right ')) {
			if (nextSlide.length) {
				moveSlide(container, nextSlide.index());
			} else {
				moveSlide(container, items.first().index());
			}

		}

		if ($this.hasClass('screenslider__arrow-left ')) {
			if (prevSlide.length) {
				moveSlide(container, prevSlide.index());
			} else {
				moveSlide(container, items.last().index());
			}

		};



	});

});


////!!!!!!!!ONEPAGESCROLL

function OnePageScroll() {
	const screen = document.querySelectorAll(".screen");
//	const CurrentScreen = document.querySelector('.screenactive');
	const main = document.querySelector(".maincontent");

	let i = 0;


	const pagginatorLink = document.querySelectorAll(".pagginator__link");


	for (a = 0; a < pagginatorLink.length; a++)
		pagginatorLink[i].addEventListener('click', function (e) {
				const z = this;

				const pagginator =
					z.parentNode;

				console.log(pagginator);
				pagginator.classList.add('pagginator__item_active');

			}

		);
for (a=0; a < screen.length; a++){
const screens = screen[a];	
const currentScreen = screen[a].classList.add('screenactive');
console.log(screens);
}
	

	function scrollDown() {
		if (i <= 0 && i > (-700)) {
			i -= 100
		};
		main.style.transform = `translateY(${i}%)`;
		console.log(i);
		return i;


	};


	function scrollUp() {
		if (i < 0 && i >= (-700)) {
			i += 100
		};
		main.style.transform = `translateY(${i}%)`;
		console.log(i);
		return i;
	};


	document.addEventListener('keydown', function (e) {

			console.log(e.keyCode);

			if (e.keyCode == 40) {
				scrollDown();

			}

			if (e.keyCode == 38) {
				scrollUp()

			}

		}

	);

	document.addEventListener('wheel', function (e) {
		const deltay = e.deltaY;
		console.log(deltay);

		if (deltay > 0) scrollDown();

		if (deltay < 0) scrollUp();
	});

}

OnePageScroll();
