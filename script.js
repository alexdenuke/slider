function slider() {
    let slides = document.querySelectorAll('.slider__img');
    let line = document.querySelector('.slider__line');
    let btnLeft = document.querySelector('.button__left-img');
    let btnRight = document.querySelector('.button__right-img');
    let arr = [slides[0], slides[slides.length - 1]];
    let size = "vw";
    let width = 70;
    let position = width;
    let active = 0;

    arr.forEach(function (item, index) {
        let clone = item.cloneNode(true);
        if (index == 0) {
            line.append(clone);
        } else {
            line.prepend(clone);
        }

    })

    function left() {
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

            function clear2() {
                line.style.transition = "all 0.4s ease ";
                btnLeft.onclick = left;
                btnRight.onclick = right;
            }
            setTimeout(clear, 500);
            setTimeout(clear2, 600);
        } else {
            line.style.right = position - width + size;
            active--;
            position -= width;
        }
    }

    function right() {
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

            function clear2() {
                line.style.transition = "all 0.4s ease";
                btnRight.onclick = right;
                btnLeft.onclick = left;
            }
            setTimeout(clear, 500);
            setTimeout(clear2, 600);
        } else {
            line.style.right = position + width + size;
            active++;
            position += width;
        }
    }
    btnLeft.onclick = left;
    btnRight.onclick = right;
}

slider();