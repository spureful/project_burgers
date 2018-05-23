ymaps.ready(init);

var placemarks = [
	{
		latitude: 59.97,
		longitude: 30.31,
		hintContent: '<div class=" screencontacts__map-hint"> улица Литераторов д.19 </div>',
		balloonContent: ['<div class=" screencontacts__map-balloon">',
						 'улица Литераторов д.19',
						 '</div>']
	},
	{
		latitude: 59.94,
		longitude: 30.25,
		hintContent: '<div class=" screencontacts__map-hint"> Малый проспект ВО д.54 </div>',
		balloonContent: ['<div class=" screencontacts__map-balloon">',
						 'Малый проспект ВО д.54',
						 '</div>']
	},
	{
		latitude: 59.93,
		longitude: 30.34,
		hintContent: '<div class=" screencontacts__map-hint"> наб. реки Фонтанки, д.56</div>',
		balloonContent: ['<div class=" screencontacts__map-balloon">',
						 'наб. реки Фонтанки, д.56',
						 '</div>']
	},
	{
		latitude: 59.89,
		longitude: 30.42,
		hintContent: '<div class=" screencontacts__map-hint"> Санкт-Петербург, ул.Бабушкина, д.12/1, 15</div>',
		balloonContent: ['<div class=" screencontacts__map-balloon">',
						 'Санкт-Петербург, ул.Бабушкина, д.12/1, 15',
						 '</div>']
	}
];

var geoObjects = [];

function init() {
	var map = new ymaps.Map('map', {
		center: [59.94, 30.32],
		zoom: 12,
		controls: ['zoomControl'],
		behaviors: ['drag']
	});

	for (var i = 0; i < placemarks.length; i++) {
		geoObjects[i] = new ymaps.Placemark([placemarks[i].latitude, placemarks[i].longitude], {
			hintContent: placemarks[i].hintContent,
			balloonContent: placemarks[i].balloonContent.join('')
		}, {
			iconLayout: 'default#image',
			iconImageHref: 'img/icons/map-marker.svg',
			iconImageSize: [46, 58],
			iconImageOffset: [-23, -58]


		});
	}




	var clusterer = new ymaps.Clusterer({
       clusterIcons: [{
		href: 'img/meeting_screen/burger.png',
		size: [100, 100],
		offsset: [-50, -50]
	}],
		clusterIconContentLayout: null


	});
	
	map.geoObjects.add(clusterer);
//	map.geoObjects.add(placemark);
	clusterer.add(geoObjects);

}
