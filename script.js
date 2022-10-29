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



sideImages.forEach(function (item, index) {
  let clone = item.cloneNode(true);
  if (index == 0) {
    slider.append(clone);
  } else {
    slider.prepend(clone);
  }

});

let slides2 = document.querySelectorAll(".slider__img");
refresh();

function refresh() {
  slides2.forEach(item => {
    item.style.transform = `translateX(-${width + position}px)`;
    
  })
}

function moveDown() {
  slides2.forEach(item => {
    item.style.transition = "all 0.4s ease";
    item.style.transform = `translateX(${width + position}px)`;
  })
}

function moveUp() {
  slides2.forEach(item => {
    item.style.transition = "all 0.4s ease";
    item.style.transform = `translateX(-${width + position}px)`;
  })
}
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
    // slider.style.right = position + width + measurement;
    position = width;

    slider.addEventListener(
      "transitionend",
      function () {
        slider.style.transition = "all 0s ease";
        // slider.style.right = width + measurement;
        slides2.forEach(item => {
          item.style.transform = `translateX(${width + position}px)`;
        })
        setTimeout(returnStyles, 0);
      },
      { once: true }
    );
  }
  else {
    // slider.style.right = position + width + measurement;
    moveUp();
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
    // slider.style.right = position - width + measurement;
    position = slides.length * width;

    slider.addEventListener(
      "transitionend",
      function () {
        slider.style.transition = "all 0s ease ";
        slider.style.right = slides.length * width + measurement;
        setTimeout(returnStyles, 0);
      },
      { once: true }
    );
  } else {
    // slider.style.right = position - width + measurement;
    moveDown();
    activeSlide--;
    position -= width;
  }
}

function returnStyles() {
  slider.style.transition = "all 0.4s ease";
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
