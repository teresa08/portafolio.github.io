window.addEventListener('scroll', () => {
    let conten = document.querySelector('.habilidades-title');
    let contentPosition = conten.getBoundingClientRect().top;
    let screenposition = window.innerHeight; // puedes utilizar un valor fijo pero no funciona en otros dispositivo

    let icono = document.querySelector('.habilidades-icono');
    let iconoposition = icono.getBoundingClientRect().top;

    if (contentPosition < screenposition && iconoposition < screenposition) {
        conten.classList.add("habilidades-active");
        icono.classList.add("habilidades-icono-active");

    } else {
        conten.classList.remove("habilidades-active");
        icono.classList.remove("habilidades-icono-active");
    }
})

window.addEventListener('scroll', () => {
    let footer = document.querySelector('.footer');
    let footerposition = footer.getBoundingClientRect().top;
    let screenposition = window.innerHeight;

    if (footerposition < screenposition) {
        footer.classList.add('footer-active')
    } else {
        footer.classList.remove('footer-active')
    }
})