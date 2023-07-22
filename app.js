window.addEventListener('DOMContentLoaded', () => {

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

    fixedMenu();

})