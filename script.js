let slides = document.querySelectorAll('.slider__img');
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


let btnLeft = document.querySelector('.slider__left');
let btnRight = document.querySelector('.slider__right');
let step2 = 0;
let position = 0;
let active = 0;

function left() {
    let line = document.querySelector('.slider__line');
    active--;
    line.style.right = position - 70 + 'vw';
    position -= 70;
    if (active === -1) {
        // alert('меньше');
    }
    // else {
    // }
}


function right() {
    let line = document.querySelector('.slider__line');
    let clone
    if (active == 3) {
        slides.forEach(function(item) {
            clone = item.cloneNode(true);
            line.append(clone);
        })
        active = 0;
        line.style.right = position + 70 + "vw";
        position += 70;

        function clear() {
            line.style.right = 0 + "vw";
            position = 0;
            line.style.cssText = "transition: all 0s ease;"
            for (let i = 0; i < 4; i++) {
                slides[i].remove();
            }
        }
        setTimeout(clear, 1000);
        function clear2() {
            line.style.cssText = "transition: all 0.4s ease;"
        }
        setTimeout(clear2, 2000);
        
    }
    else {
        line.style.right = position + 70 + "vw";
        active++;
        position += 70;
    }
console.log(line);
}
btnLeft.onclick = left;
btnRight.onclick = right;