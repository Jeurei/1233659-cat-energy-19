function initMap(ymaps) {
  let coordinates = [59.938549, 30.322849];
  var myMap = new ymaps.Map(document.querySelector(".adress__map"), {
      center: coordinates,
      zoom: 17,
    }),
    myPlacemark = new ymaps.Placemark(
      coordinates,
      {},
      {
        iconLayout: "default#image",
        iconImageHref: "../img/map-pin.png",
        iconImageSize: [55, 53],
        iconImageOffset: [-28, -42],
      }
    );
  myMap.controls.remove(`trafficControl`);
  myMap.setType("yandex#map");
  myMap.controls.remove(`typeSelector`);
  myMap.controls.remove(`fullscreenControl`);
  myMap.controls.remove(`searchControl`);
  myMap.controls.remove(`geolocationControl`);
  myMap.controls.remove(`zoomControl`);
  myMap.controls.remove(`rulerControl`);
  myMap.geoObjects.add(myPlacemark);
}
let div
document.querySelector(".main-nav__toggle").classList.remove("main-nav__toggle--nojs")
document.querySelector(".nav-list").classList.remove("nav-list--active")
document.querySelector(".main-nav__toggle").addEventListener("click",function(){
  let button = document.querySelector(".main-nav__toggle")
  let nav = document.querySelector(".nav-list")
  button.classList.toggle("main-nav__toggle--close")
  nav.classList.toggle("nav-list--active")
})
document.querySelector(".progress__input").addEventListener("input",function(){
  let value=this.value;
  document.querySelector(".progress__result--before").style.width = value + "%";
})
