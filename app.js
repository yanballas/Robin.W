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

    const experienceTextElem = document.querySelector('.experience-section_title');

    const changeText = (elem, newtext) => {
        const elemTextDefault = elem.innerHTML;
        setInterval(() => {
            elem.classList.add('_hidden')
            setTimeout(() => {
                if (elem.textContent === elemTextDefault) {
                    elem.innerHTML = newtext;
                } else {
                    elem.innerHTML = elemTextDefault;
                }
                elem.classList.remove('_hidden')
            }, 2000)
        }, 6000)
    }
    
    fixedMenu();
    slider(headerSlider);
    changeText(experienceTextElem, 'This allowed me to gain valuable experience');

})