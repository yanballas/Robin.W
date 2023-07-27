window.addEventListener('DOMContentLoaded', () => {

    setTimeout(() => {
        document.querySelector('.hero-section__text').classList.add('_show')
    }, 200)

    let counter = 1;

    const fixedMenu = () => {
        const nav = document.querySelector('.nav')

        window.addEventListener('scroll',  () => {
            if(scrollY > 88) {
                nav.classList.add('nav_fixed')
            } else {
                nav.classList.remove('nav_fixed')
            }
        })
    }

    const headerSlider = document.querySelectorAll('.hero-section__slide');

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

    const experienceTextElem = document.querySelector('.experience-section__title');
    const skillsTextElem = document.querySelector('.skills-section_up-section_left_title');

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
            }, 2500)
        }, 6000)
    }

    

    function showMoreAboutMe () {
        const leftSideInSection = document.querySelector('.philosophy-section_left');
            titleInLeft = document.querySelector('.philosophy-section_left_title');
            textInLeft = document.querySelector('.philosophy-section_left_text');
            btnMoreAboutMe = document.querySelector('.philosophy-section_left_btn');
            textInBtn = document.querySelector('.philosophy-section_left_btn_text')
            rideSideInSection = document.querySelector('.philosophy-section_right');
            frontAboutMe = document.querySelector('.philosophy-section_right_front');
            backAboutMe = document.querySelector('.philosophy-section_right_back');
        btnMoreAboutMe.addEventListener('click', () => {
            leftSideInSection.classList.toggle('philosophy-section_left-active')
                titleInLeft.classList.toggle('philosophy-section_left_title-active');
                    textInLeft.classList.toggle('philosophy-section_left_text-active');
                        btnMoreAboutMe.classList.toggle('philosophy-section_left_btn-active');
                            textInBtn.classList.toggle('philosophy-section_left_btn_text-active');
                                rideSideInSection.classList.toggle('philosophy-section_right-active');
                                    frontAboutMe.classList.toggle('_show');
                                        backAboutMe.classList.toggle('_show');
        })
    }
    
    fixedMenu();
    slider(headerSlider);
    changeText(experienceTextElem, 'This allowed me to gain valuable experience');
    changeText(skillsTextElem, 'Competencies');
    showMoreAboutMe();
})