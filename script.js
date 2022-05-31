let slides = document.querySelectorAll(".slider__img");
let wrapSlides = document.querySelector(".slider__wrap-images");
let btnLeft = document.querySelector(".slider__button-left");
let btnRight = document.querySelector(".slider__button-right");
let sideImages = [slides[0], slides[slides.length - 1]]; // боковые изображения
let measurement = "vw"; // measurement - измерение
let width = 70;
let position = width;
let activeSlide = 0;
let stop = document.querySelector(".stop");
let start = document.querySelector(".start");

sideImages.forEach(function (item, index) {
  let clone = item.cloneNode(true);
  if (index == 0) {
    wrapSlides.append(clone);
  } else {
    wrapSlides.prepend(clone);
  }
});
btnRight.onclick = rightMove;
btnLeft.onclick = leftMove;

let timerId = setInterval(rightMove, 2500);

function rightMove() {
  clearInterval(timerId);
  timerId = "";
  if (activeSlide == slides.length - 1) {
    btnRight.onclick = null;
    btnLeft.onclick = null;
    activeSlide = 0;
    wrapSlides.style.right = position + width + measurement;
    position = width;

    setTimeout(function () {
      wrapSlides.style.transition = "all 0s ease";
      wrapSlides.style.right = width + measurement;
    }, 400);
    setTimeout(returnStyles, 450);
    timerId = setInterval(rightMove, 2500);
  } else {
    wrapSlides.style.right = position + width + measurement;
    activeSlide++;
    position += width;
    timerId = setInterval(rightMove, 2500);
  }
}
function leftMove() {
  clearInterval(timerId);
  timerId = "";
  if (activeSlide == 0) {
    btnLeft.onclick = null;
    btnRight.onclick = null;
    activeSlide = slides.length - 1;
    wrapSlides.style.right = position - width + measurement;
    position = slides.length * width;

    setTimeout(function clear() {
      wrapSlides.style.transition = "all 0s ease ";
      wrapSlides.style.right = slides.length * width + measurement;
    }, 400);
    setTimeout(returnStyles, 450);
  } else {
    wrapSlides.style.right = position - width + measurement;
    activeSlide--;
    position -= width;
  }
}

function returnStyles() {
  wrapSlides.style.transition = "all 0.4s ease";
  btnRight.onclick = rightMove;
  btnLeft.onclick = leftMove;
}
