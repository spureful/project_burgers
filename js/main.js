function openMenu() {
	const openBtn = document.querySelector('.menu__hamburger');
	
	const menu = $('.hamburgermenu');
	const closeBtn = document.querySelector('.hamburgermenu__close');
	const wrapper = document.querySelector('.wrapper');
	
	openBtn.addEventListener('click', function(){
		menu.fadeIn();
		menu.addClass('hamburgermenu_visible');
		
		
		wrapper.style.overflow = 'hidden';
	}					
							);

	closeBtn.addEventListener('click', function(){
		menu.fadeOut().removeClass('hamburgermenu_visible');
		wrapper.style.oveflow = 'none';
	});
	
	}



openMenu();



function openComposition() {
	var openBtn = document.querySelector(".screenslider__productcontent");
	var appearMenu = document.querySelector(".screenslider__composition");
	var closeBtn = document.querySelector(".screenslider__productcontent");
	let op = 0;
	
	openBtn.addEventListener("click", function(){
		appearMenu.classList.toggle("screenslider__composition_active")
		
	openBtn.style.backgroundColor = "#e35028";

	});
	
	setTimeout (function foo(){
		if (op < 1){
			appearMenu.style.opacity = op;
			op += 0.1;
			setTimeout(foo, 100);
		}
	}, 100);
	

	
	}
	

openComposition();


function openPosition(){
	const openPos = document.querySelectorAll('.screenmenu_accordeon>.screenmenu__item');
	const posContent = document.querySelector('.screenmenu__content');
	
	
	
	
	openPos.addEventListener('click', function(){

		posContent.classList.toggle('screenmenu__content-active');
	});

};


openPosition()