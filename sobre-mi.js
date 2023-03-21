// Agregar animaciones al hacer scroll
document.addEventListener('scroll', () => {
    const habilidades = document.querySelector('#habilidades');
    const habilidadesPos = habilidades.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (habilidadesPos < windowHeight / 2) {
        habilidades.classList.add('animate');
    }
});
