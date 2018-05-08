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

function openPosition(){
	const openPos = document.querySelector('.screenmenu__position');
	const posContent = $('.screenmenu__content');
	
	const closePos = document.querySelector('.screenmenu__position');
	
	
	openPos.addEventListener('click', function(){
//		posContent.fadeIn();
		posContent.addClass('screenmenu__content-active');
	});
	
//	closePos.addEventListener('click', function(){
//			posContent.removeClass('screenmenu__content-active');
//	})
};


openPosition()