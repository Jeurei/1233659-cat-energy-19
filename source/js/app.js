function initMap(ymaps) {
  var coordinates = [59.938549, 30.322849];
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
  myMap.controls.remove("trafficControl");
  myMap.setType("yandex#map");
  myMap.controls.remove("typeSelector");
  myMap.controls.remove("fullscreenControl");
  myMap.controls.remove("searchControl");
  myMap.controls.remove("geolocationControl");
  myMap.controls.remove("zoomControl");
  myMap.controls.remove("rulerControl");
  myMap.geoObjects.add(myPlacemark);
}
document.querySelector(".header").classList.remove("header--nojs");
document
  .querySelector(".main-nav__toggle")
  .addEventListener("click", function () {
    var button = document.querySelector(".main-nav__toggle");
    var nav = document.querySelector(".nav-list");
    button.classList.toggle("main-nav__toggle--close");
    nav.classList.toggle("nav-list--active");
  });
var before = document.querySelector(".progress__result--before");
var after = document.querySelector(".progress__result--after");
var thumb = document.querySelector(".progress__slider-thumb");
if (before && after && thumb) {
  var progress__btn = document.querySelectorAll(".progress__slider-button");
  progress__btn[0].addEventListener("click", function () {
    before.style.width = "100%";
    after.style.opacity = "0";
    thumb.style.left = "6px";
  });
  progress__btn[1].addEventListener("click", function () {
    before.style.width = "0";
    after.style.opacity = "1";
    thumb.style.left = "42px";
  });
}
if (document.querySelector(".progress__input")) {
  console.log(document.querySelector(".progress__input"));
  document
    .querySelector(".progress__input")
    .addEventListener("input", function (evt) {
      var value = evt.target.value;
      document.querySelector(".progress__result--before").style.width =
        value + "%";
    });
  document
    .querySelector(".progress__input")
    .addEventListener("change", function (evt) {
      var value = evt.target.value;
      document.querySelector(".progress__result--before").style.width =
        value + "%";
    });
}
