let slider = document.querySelector(".slider");
let slides = document.querySelectorAll(".slider__img");
let wrapSlides = document.querySelector(".slider__wrap-images");
let btnLeft = document.querySelector(".slider__button-left");
let btnRight = document.querySelector(".slider__button-right");
let sideImages = [slides[0], slides[slides.length - 1]]; // боковые изображения
let measurement = "px"; // measurement - измерение
let width =  parseInt(getComputedStyle(slider).width);
let position = width;
let activeSlide = 0;

function init() {
  wrapSlides.style.right = width + "px"; 
}
init();

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

    wrapSlides.addEventListener(
      "transitionend",
      function () {
        wrapSlides.style.transition = "all 0s ease";
        wrapSlides.style.right = width + measurement;
        setTimeout(returnStyles, 0);
      },
      { once: true }
    );
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

    wrapSlides.addEventListener(
      "transitionend",
      function () {
        wrapSlides.style.transition = "all 0s ease ";
        wrapSlides.style.right = slides.length * width + measurement;
        setTimeout(returnStyles, 0);
      },
      { once: true }
    );
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
  timerId = setInterval(rightMove, 2500);
}

// slider.addEventListener('mousedown', function (e) {
//   coordinateX = e.clientX - parseInt(style2.marginRight);
//   coordinateY = e.clientY;
//   e.preventDefault();
//   // console.log('первые', coordinateX, coordinateY);
//   addEventListener('mousemove', function (event) {
//     coordinateX2 = event.clientX - parseInt(style2.marginRight);
//     coordinateY2 = event.clientY;
//     // console.log('вторые', coordinateX2, coordinateY2);
//   })
//   addEventListener('mouseup', function (eve) {
//     // alert(coordinateX - coordinateX2);
//     if (coordinateX - coordinateX2 > 50  ){
//       rightMove();
//     }
//   },{once:true})
// });
// slider.addEventListener('mousedown', function (e) {
//   coordinateX = e.clientX - parseInt(style2.marginRight);
//   coordinateY = e.clientY;
//   e.preventDefault();
//   // console.log('первые', coordinateX, coordinateY);
//   addEventListener('mousemove', function (event) {
//     coordinateX2 = event.clientX - parseInt(style2.marginRight);
//     coordinateY2 = event.clientY;
//     // console.log('вторые', coordinateX2, coordinateY2);
//   })
//   addEventListener('mouseup', function (eve) {
//     // alert(coordinateX - coordinateX2);
//     if (coordinateX - coordinateX2 < 50  ){
//       leftMove();
//     }
//   },{once:true})
// });

// let stop = document.querySelector(".stop");
// let start = document.querySelector(".start");
// let link = document.querySelector(".link");
// let button = document.querySelector(".button");
// button.addEventListener("pointerdown", function (event) {
//   console.log("hi");
// });

// let style2 = getComputedStyle(slider);
// let coordinateX = 0;
// let coordinateY = 0;
// let coordinateX2 = 0;
// let coordinateY2 = 0;
