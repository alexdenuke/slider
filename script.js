let slides = document.querySelectorAll('.slider__img');
let line = document.querySelector('.slider__line');
let arr = [slides[0],slides[slides.length-1]];

arr.forEach(function(item,index){
    let clone = item.cloneNode(true);
    if (index == 0){
        line.append(clone);
    }
    else{
        line.prepend(clone);
    }

})
let size = "vw";
let width = 70;
let btnLeft = document.querySelector('.slider__left');
let btnRight = document.querySelector('.slider__right');
let position = width;
let active = 0;


function left() {
    let line = document.querySelector('.slider__line');
    if (active == 0) {
        btnLeft.onclick = null;
        btnRight.onclick = null;
        active = slides.length - 1;
        line.style.right = position - width + size;
        position = slides.length * width;
        function clear() {
            line.style.transition = "all 0s ease ";
            line.style.right = slides.length * width + size;
            
        }
        setTimeout(clear, 500);
        function clear2() {
            line.style.transition = "all 0.4s ease ";
            btnLeft.onclick = left;
            btnRight.onclick = right;
        }
        setTimeout(clear2, 600);
    }
    else {
        line.style.right = position - width + size;
        active--;
        position -= width;
    }
}


function right() {
    let line = document.querySelector('.slider__line');
    if (active == slides.length - 1) {
        btnRight.onclick = null;
        btnLeft.onclick = null;
        active = 0;
        line.style.right = position + width + size;
        position = width;
        function clear() {
            line.style.transition = "all 0s ease";
            line.style.right = width + size;
        }
        setTimeout(clear, 500);
        function clear2() {
            line.style.transition = "all 0.4s ease";
            btnRight.onclick = right;
            btnLeft.onclick = left;
        }
        setTimeout(clear2, 600);
    }
    else {
        line.style.right = position + width + size;
        active++;
        position += width;
    }
}
btnLeft.onclick = left;
btnRight.onclick = right;