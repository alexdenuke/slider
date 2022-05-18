let slides = document.querySelectorAll('.img');
let slider = [];

// for (let i = 0; i < slides.length; i++) {
//     slider[i] = slides[i].src;
//     slides[i].remove();
// }

let step = 0;
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

let btnLeft = document.querySelector('.button-left');
let btnRight = document.querySelector('.button-right');
let step2 = 0;
let position = 0;


function left() {
    let line = document.querySelector('.line');
    line.style.right = position + 300 + 'px';
    position += 300;

    for (let i = 0; i < slides.length; i++) {
        // slides[0].remove();
        console.log(slides);
    }

    
    

}
function right() {

    let line = document.querySelector('.line');
    line.style.right = position - 300 + 'px';
    position -= 300;
    // draw();

}

// draw();draw();draw();
btnLeft.onclick = left;
btnRight.onclick = right;