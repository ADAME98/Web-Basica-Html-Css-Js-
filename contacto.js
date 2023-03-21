const form = document.querySelector('#contact-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

form.addEventListener('submit', e => {
    e.preventDefault();

    const formData = {
        name: nameInput.value,
        email: emailInput.value,
        message: messageInput.value
    };

    // Enviar datos del formulario a un servidor
    console.log(formData);
});
