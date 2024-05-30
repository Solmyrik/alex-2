const mapSection = document.querySelector("#map");
console.log(mapSection);
if (mapSection) {
  ymaps.ready(init);

  function init() {
    let map = new ymaps.Map("map", {
      center: [55.7485979164248, 52.44422847916794], // ваши данные
      zoom: 18,
    });

    let placemark = new ymaps.Placemark([55.7485979164248, 52.44422847916794], {}, {});

    // map.controls.remove('geolocationControl'); // удаляем геолокацию
    // map.controls.remove('searchControl'); // удаляем поиск
    // map.controls.remove('trafficControl'); // удаляем контроль трафика
    // map.controls.remove('typeSelector'); // удаляем тип
    // map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    // map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    // map.controls.remove('rulerControl'); // удаляем контрол правил
    // map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

    map.geoObjects.add(placemark);
  }
}
