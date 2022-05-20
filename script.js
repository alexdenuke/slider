// let slides = document.querySelectorAll('.img');
// let slider = [];
// let length = 0;

// for (let i = 0; i < slides.length; i++) {
//     slider[i] = slides[i].src;
//     slides[i].remove();
// }

// function draw(){
//     let img = document.createElement('img');
//     img.src = slider[step];
//     img.classList.add('img');
//     document.querySelector('.line').appendChild(img);
//     if ( step + 1 == slider.length) {
//         step = 0;
//     }
//     else {
//         step++;
//     }
// }

// let step = 0;


// let btnLeft = document.querySelector('.button-left');
// let btnRight = document.querySelector('.button-right');
// let step2 = 0;
// let position = 0;
// let active = 0;

// function left() {
//     let line = document.querySelector('.line');
//     let div = line.cloneNode(true);
//     console.log(div);
//     active--;
//     if (active === -1) {
//         alert('меньше');
//     }
//     else {
//         line.style.right = position - 300 + 'px';
//         position -= 300;
//     }
// }
// function right() {
//     let line = document.querySelector('.line');
//     // let last = document.querySelector('.last');
//     let div = line.cloneNode(true);
//     div.style.right = -1515 + "px";
//     console.log(div);
//     active++;

//     if (active == slides.length) {
//         line.append(div);
//         active = -1;
//     }
//     else {
//         line.style.right = position + 300 + 'px';
//         position += 300;
//     }

// }

// btnLeft.onclick = left;
// btnRight.onclick = right;