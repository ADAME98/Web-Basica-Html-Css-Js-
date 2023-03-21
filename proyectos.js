// Agregar animaciones al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    const proyectos = document.querySelectorAll('li');
    proyectos.forEach(proyecto => {
        proyecto.style.opacity = 0;
        proyecto.style.transform = 'translateY(20px)';
    });

    setTimeout(() => {
        proyectos.forEach((proyecto, index) => {
            proyecto.style.opacity = 1;
            proyecto.style.transform = `translateY(0px)`;
            proyecto.style.transitionDelay = `${index * 100}ms`;
        });
    }, 500);
});
