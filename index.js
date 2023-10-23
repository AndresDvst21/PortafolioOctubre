function isElementNearViewport(element, offset) {
    const rect = element.getBoundingClientRect();
    return rect.bottom - offset >= 0 && rect.top - offset <= window.innerHeight;
}

// Función para aplicar el efecto de hover a múltiples clases
function applyHoverEffectOnScroll(classList, offset) {
    classList.forEach(className => {
        const elements = document.querySelectorAll(`.${className}`);
        
        elements.forEach(element => {
            if (isElementNearViewport(element, offset)) {
                element.classList.add('hovered');
            } else {
                element.classList.remove('hovered');
            }
        });
    });
}

// Escucha el evento de desplazamiento de la página
window.addEventListener('scroll', () => {
    const classesToHover = [
        'section-divs .inside-front',
        'section-divs .inside-back',
        'section-divs .inside-sis',
        'section-divs .inside-di',
        'section-divs .div-front',
        'section-divs .div-back',
        'section-divs .div-sis',
        'section-divs .div-di',
        'section-tech .inside-css',
        'section-tech .inside-html',
        'section-tech .inside-java',
        'section-tech .inside-boo',
        'section-tech',
        'section-tech1',
        'section-tech2',
        'section-tech1 .inside-cs',
        'section-tech1 .inside-sql',
        'section-tech1 .inside-mysql',
        'section-tech1 .inside-server',
        'section-tech1 .inside-vscode',
        'section-tech2 .inside-wd',
        'section-tech2 .inside-db',
        'section-tech2 .inside-ub',
        'section-tech2 .inside-wf',
        'section-tech2 .inside-et',
        'section-hb .div-ps',
        'section-hb .div-ai',
        'section-hb .div-pr',
        'section-hb .div-ae',
        'section-hb .div-cd',
        'section-hb .div-fm',
        'section-exp .vang',
        'section-exp .free-front',
        'section-exp .free-st',
        'h1',
        'icons-conta .div-lk',
        'icons-conta .div-wt',
        'icons-conta .div-tg',
        'icons-conta .div-g',
        'icons-conta .div-in',
        'icons-conta .div-td',
        'icons-conta .div-gh',
        'section-about-p .section-icons-about>i',
    ];
    applyHoverEffectOnScroll(classesToHover, 30);
});







