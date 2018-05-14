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
		menu.fadeOut().removeClass('hamburgermenu_visible');
		wrapper.style.overflow = 'none';
	});

}



openMenu();



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


function openPosition() {
	const openPos = document.getElementsByClassName('screenmenu__position-btn');
	const posContent = document.querySelector ('.screenmenu__item');


	for (var i = 0; i < openPos.length; i++) {
		openPos[i].addEventListener('click', function () {				
			
			posContent.classList.toggle('screenmenu__item_active')
			});

		
	};
}


openPosition();


function commentsPopup() {
	var name = document.querySelector('.screencomments__title');
	var namePopup = document.querySelector('.screencomments__popup-name');
	var comment = document.querySelector('.screencomments__text');
	var commentPopup = document.querySelector('.screencomments__popup-content');
	const openPop = document.querySelector('.screencomments__button');
	const popup = document.querySelector('.screencomments__popup');
	const closePop = document.querySelector('.screencomments__popup-close');
	let op = 0;



	openPop.addEventListener('click', function () {

		popup.classList.add('screencomments__popup_active');

		namePopup.textContent = name.innerHTML;
		commentPopup.textContent = comment.innerHTML;
	});
	



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

