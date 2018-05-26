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



	const openBtn = $('.screenteam__item-block');
	const allItems = document.querySelectorAll('.screenteam__item');
	const activeItem = document.querySelectorAll('.screenteam__item_active');

	const allContent = document.querySelectorAll('.screenteam__content');


	openBtn.on('click', function () {

		const allCont = document.querySelectorAll('.screenteam__container');
		for (a = 0; a < allCont.length; a++)
			allCont[a].style.heiight = 0 + 'px';

		$('.screenteam__item-block').not($(this)).closest(".screenteam__item").removeClass('screenteam__item_active');


		$(this).closest(".screenteam__item").toggleClass('screenteam__item_active');



		const activeContent = $('.screenteam__item_active').find('.screenteam__content');
		//		console.log(activeContent);

		const unactiveItem = $('.screenteam__item').filter('.screenteam__item').not('.screenteam__item_active');
		const unactiveContent = unactiveItem.find('.screenteam__content');
		//		console.log(unactiveItem);
		//		console.log(unactiveContent);

		let anim = 0;


		unactiveContent.height(0 + 'px');




		setTimeout(function uh() {
			if (anim < 115) {
				activeContent.height(anim + 'px');
				anim += 5;
			}
			//
			//			else if (anim >= 0)
			//			{
			//				unactiveContent.height(anim + 'px');
			//			anim -= 5;
			//			}

			setTimeout(uh, 30);

		}, 30);

		//		setTimeout(function dh() {
		//			if (anim > 0)
		//				unactiveContent.height(anim + 'px');
		//			anim -= 5;
		//			setTimeout(dh, 30);
		//		}, 10);



	})
};





openTeam();

//ГОРИЗОНТАЛЬНЫЙ АККОРДЕОН

function openMenuPosition() {
	const openPos = $('.screenmenu__position-btn');

	openPos.on('click', function (e) {

		openPos.not($(this)).closest('.screenmenu__item').removeClass('screenmenu__item_active');

		$(this).closest(".screenmenu__item").toggleClass('screenmenu__item_active');




		//		const activeContent = $('.screenmenu__item_active').find('.screenmenu__content');
		//		console.log(activeContent);
		//
		//		const unactiveItem = $('.screenmenu__item ').filter('.screenmenu__item ').not('.screenmenu__item_active');
		//		const unactiveContent = unactiveItem.find('.screenmenu__content');
		//		console.log(unactiveItem);
		//		console.log(unactiveContent);
		//
		//		let wanim = 0;
		//
		//
		//		unactiveContent.width(0 + 'px');
		//
		//
		//		setTimeout(function uh() {
		//			if (wanim < 100)
		//				activeContent.width(wanim + '%');
		//			wanim += 5;
		//
		//			setTimeout(uh, 10);
		//
		//		}, 10);


	});
}




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

	let op;




	for (var i = 0; i < openPop.length; i++) {
		openPop[i].addEventListener('click', function () {

			var z = this;
			var popParent = z.parentNode;
			//			console.log(popParent);

			const name = popParent.querySelector('.screencomments__title');

			const comment = popParent.querySelector('.screencomments__text');
 op = 0;
			console.log(op);


			namePopup.textContent = name.innerHTML;
			commentPopup.textContent = comment.innerHTML;


			console.log(op);

			setTimeout(function (opac) {

				popup.style.display = 'flex';
				popup.style.opacity =op;

				op += 0.2;
				console.log(op)
				if (op <= 1) {

					setTimeout(arguments.callee,
						100)

				}

			}, 100);
		});





		closePop.addEventListener('click', function () {

			op = 1;
			console.log(op);
			setTimeout(function (unopac) {

				popup.style.opacity = op;
				op -= 0.2;
		
				console.log(op)
				if (op > 0) {

					setTimeout(arguments.callee,
						100)

				}
								popup.style.display = 'none';
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
//as at vebinar
	
//	const sections = $('.screen');
//const display = $('.maincontent');
//let inScroll = false;
//
//const setActiveMenuItem = itemEq => {
//    $('.pagginator__item')
//        .eq(itemEq)
//        .addClass('pagginator__item_active')
//        .siblings()
//        .removeClass('pagginator__item_active');
//
//};
//
//const performTransition = sectionEq => {
//  const position = `${-sectionEq * 100}%`;
//  if (inScroll) return;
//
//  inScroll = true;
//
//  sections.eq(sectionEq).addClass('screenactive').siblings().removeClass('screenactive');
//
//  display.css({
//      transform: `translateY( ${position})`,
//      '-webkit-transform': `translateY( ${position})`
//  });
//
//
//  const transitionDuration = parseInt(display.css('transition-duration')) * 100;
//  setTimeout(() => {
//      inScroll = false;
//      setActiveMenuItem(sectionEq);
//
//  }, transitionDuration + 300); // за 300 мс проходит инерция мыши
//
//};
//
//const scrollToSection = direction => {
//    const activeSection = sections.filter('.screenactive');
//    const nextSection = activeSection.next();
//    const prevSection = activeSection.prev();
//
//    if (direction === 'up' && prevSection.length){
//        performTransition(prevSection.index());
//    }
//
//    if (direction === 'down' && nextSection.length){
//        performTransition(nextSection.index());
//
//    }
//
//
//};
//
//$(document).on({
//    wheel: event => { 
//        const deltaY = event.originalEvent.deltaY;
//        const direction = deltaY > 0
//        ? 'down'
//        : 'up'
//
//        scrollToSection(direction);
//    },
//
//    keydown: event => { 
//        switch (event.keyCode){
//            case 40:
//                scrollToSection('down');
//                break;
//            case 38:
//                scrollToSection('up');
//                break;
//        }
//    }
//
//});
//
//$('[data-scroll-to]').on('click', e => {
//    e.preventDefault();
//
//    const target = parseInt($(e.currentTarget).attr('data-scroll-to'));
//    performTransition(target);
//
//});
//	
	///mine
		const screen = document.querySelectorAll(".screen");
	

	const main = document.querySelector(".maincontent");

	let i = 0;


for (a =0; a<screen.length; a++ ){
	 screen[a].dataset.screenScroll;
}


	function scrollDown() {
		if (i <= 0 && i > (-700)) {
			i -= 100
		};

		main.style.transform = `translateY(${i}%)`;
		console.log(i);
		return i;
		console.log(this)

	};



	//дата-метод!

	function scrollUp() {
		if (i < 0 && i >= (-700)) {
			i += 100
		};
		main.style.transform = `translateY(${i}%)`;
		console.log(i);
		return i;
	};


	document.addEventListener('keydown', function (e) {

			//			console.log(e.keyCode);

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
//		console.log(numb);
	

		//		for (i = 0; i < screen.length; i++) //
		//			var inf = screen[i].dataset.screen; // нашла, что их 8. но как мне найти именно нужный???
		//		for (i = 0; i < inf.length; i++) ///
		//			console.log(inf[i]);    //

		if (deltay > 0) scrollDown();


		if (deltay < 0) scrollUp();
	});

}

OnePageScroll();


//                   ФОРМА!


function ScreenForm() {
	$('#screenform__form').on('submit', submitForm);

	function submitForm(e) {
		e.preventDefault();

		const form = $(e.target),
			data = form.serialize(),
			type = form.attr('method'),
			url = form.attr('action');

		const request = $.ajax({
			type: type,
			url: url,
			dataType: 'JSON',
			data: data
		});

		request.done(function (msg) {
			const mes = msg.mes,
				status = msg.status;
			if (ststus === 'ОК') {
				form.append('<div class="screenform__sucsess">' + mes + '</div>');
			} else {
				form.append('<div class="screenform__error">' + mes + '</div>');
			}
		});

	};
};

ScreenForm();
