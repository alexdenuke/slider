let slides = document.querySelectorAll('.slider__img');
let slider = [];

for ( let i = 0; i < slides.length; i++ ) {
    slider[i] = slides[i].src;
    slides[i].remove();
    
}

let step = 0;
let offset = 0;

function draw(){
    let img = document.createElement('img');
    img.src = slider[step];
    img.classList.add('slider__img');
    img.style.left = offset*img.offsetWidth + 'px';
    document.querySelector('.slider').appendChild(img);
    step++;
    offset = 1;
    console.log(img.style.left);
}

draw();draw();