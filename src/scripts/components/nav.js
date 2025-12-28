function toggleAriaExpanded(targetElem) {
    let isExpanded = targetElem.getAttribute('aria-expanded')
    isExpanded = isExpanded === 'true' ? 'false' : 'true';
    targetElem.setAttribute('aria-expanded', isExpanded);
}

function toggleNav(elem, classOpen) {
    elem.classList.toggle(classOpen);
}

function initNav(navConteiner, openNavButton, closeNavButton) {
    try {
        const nav = document.querySelector(navConteiner);
        const buttonOpen = document.querySelector(openNavButton);
        const buttonClose = document.querySelector(closeNavButton);

        if ( !nav || !buttonOpen || !buttonClose) {
            return;
        }

        buttonOpen.addEventListener('click', (e) => {
            toggleAriaExpanded(e.target);
            toggleAriaExpanded(buttonClose);
            toggleNav(nav, 'nav--open');
        });

        buttonClose.addEventListener('click', (e) => {
            toggleAriaExpanded(e.target);
            toggleAriaExpanded(buttonOpen);
            toggleNav(nav, 'nav--open');
        });

    } catch(e) {
        console.log(e);
    }

}

initNav('.nav', '.burger-menu', '.nav__close');