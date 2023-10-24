function isElementNearViewport(element, offset) {
    const rect = element.getBoundingClientRect();
    return rect.bottom - offset >= 0 && rect.top - offset <= window.innerHeight;
}

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
        'section-tech',
        'section-tech1',
        'section-tech2',
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
        'h2',
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


function activarClasesEnScroll(elementosSecciones) {
  elementosSecciones.forEach(([elementId, sectionId, activacionSuperior]) => {
    const element = document.getElementById(elementId);
    const section = document.getElementById(sectionId);

    const desactivacionInferior = 600;

    const elementoTop = section.offsetTop - activacionSuperior;

    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;

      if (scrollY >= elementoTop && scrollY <= elementoTop + section.offsetHeight + desactivacionInferior) {

        element.classList.add("hover-activado");
      } else {

        element.classList.remove("hover-activado");
      }
    });
  });
}


const elementosSecciones = [
  ["id-tech", "tech", 800],
  ["id-sm", "section-divs", 800],
  ["id-hb", "section-hb", 800],
  ["id-exp", "section-exp", 800],
  ["id-ct", "section-conta", 400],
];

activarClasesEnScroll(elementosSecciones);


document.querySelectorAll('header a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('data-target');
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const targetOffset = targetElement.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: targetOffset - 50,
        behavior: 'smooth'
      });
    }
  });
});























