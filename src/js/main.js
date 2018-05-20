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

let anim = 0;

    openBtn.on('click', function (e) {

        
        
        $('.screenteam__item-block').not($(this)).removeClass('screenteam__item_active')
        $(this).toggleClass('screenteam__item_active');
     


//            if ($('.screenteam__item-block').is($(this))) {
//                $('.screenteam__item_active').siblings('.screenteam__content ').animate({
//                    "height": "110px"
//
//                }
//            ), 700}
        
        
    
    })
};

    


openTeam();

//ГОРИЗОНТАЛЬНЫЙ АККОРДЕОН

function openMenuPosition() {
const openPos= $('.screenmenu__position-btn');
    
    openPos.on('click', function(e){
        
        openPos.not($(this)).closest('.screenmenu__item').removeClass('screenmenu__item_active');
       
       $(this).closest(".screenmenu__item").toggleClass('screenmenu__item_active');
        
    });
    
    
//    const openPos = document.querySelectorAll('.screenmenu__item');
//
//
//    for (let i = 0; i < openPos.length; i++) {
//        openPos[i].addEventListener('click', function (event) {
//            const z = this;
//            z.classList.toggle('screenmenu__item_active');
//
//
//
//        })
//    }
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
