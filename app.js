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

    const navMove = () => {
        const links = document.querySelectorAll('.nav__link');
        const sections = document.querySelectorAll('section');
        const topOffSet = document.querySelector('.nav').offsetHeight;
        const homeLink = document.querySelector('.nav__logo');
        links.forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                let href = link.getAttribute('href').substring(1);
                let target;
                sections.forEach(section => {
                    if (section.dataset.tab === href) {
                        target = section
                    }
                })
                let targetPosition = target.getBoundingClientRect().top;
                let offsetPosition = targetPosition - topOffSet;
                window.scrollBy({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            })
        })
        homeLink.addEventListener('click', () => {
            window.scroll({
                top: 0,
                behavior: "smooth"
            })
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
    const skillsTextElem = document.querySelector('.skills-section-left-side__title');

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
        const leftSideInSection = document.querySelector('.philosophy-section-left-side');
            titleInLeft = document.querySelector('.philosophy-section-left-side__title');
            textInLeft = document.querySelector('.philosophy-section-left-side__text');
            btnMoreAboutMe = document.querySelector('.philosophy-section-left-side__btn');
            textInBtn = document.querySelector('.philosophy-section-left-side__btn-text')
            rideSideInSection = document.querySelector('.philosophy-section-right-side');
            frontAboutMe = document.querySelector('.philosophy-section-right-side__front');
            backAboutMe = document.querySelector('.philosophy-section-right-side__back');
        btnMoreAboutMe.addEventListener('click', () => {
            leftSideInSection.classList.toggle('philosophy-section-left-side-active')
                titleInLeft.classList.toggle('philosophy-section-left-side__title-active');
                    textInLeft.classList.toggle('philosophy-section-left-side__text-active');
                        btnMoreAboutMe.classList.toggle('philosophy-section-left-side__btn-active');
                            textInBtn.classList.toggle('philosophy-section-left-side__btn-text-active');
                                rideSideInSection.classList.toggle('philosophy-section-right-side-active');
                                    frontAboutMe.classList.toggle('_show');
                                        backAboutMe.classList.toggle('_show');
        })
    }
    
    fixedMenu();
    navMove();
    slider(headerSlider);
    changeText(experienceTextElem, 'This allowed me to gain valuable experience');
    changeText(skillsTextElem, 'Competencies');
    showMoreAboutMe();
})