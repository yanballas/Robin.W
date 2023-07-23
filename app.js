window.addEventListener('DOMContentLoaded', () => {

    let counter = 1;

    const fixedMenu = () => {
        const nav = document.querySelector('.hero-section-nav')

        window.addEventListener('scroll',  () => {
            if(scrollY > 88) {
                nav.classList.add('hero-section-nav-fixed')
            } else {
                nav.classList.remove('hero-section-nav-fixed')
            }
        })
    }

    const headerSlider = document.querySelectorAll('.hero-section_content_slider_slide');

    const slider = (array) => {
        setInterval(() => {
            array.forEach(element => {
                element.classList.remove('_show')
            });
            array[counter].classList.add('_show');
            counter++;
            if (counter >= array.length) {
                counter = 0;
            }
        }, 4000)
    }

    fixedMenu();
    slider(headerSlider);

})