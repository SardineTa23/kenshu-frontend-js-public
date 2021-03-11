document.addEventListener('DOMContentLoaded', function() {
    const selectedButtons = document.querySelectorAll('.button');
    selectedButtons.forEach(el => {
        el.addEventListener('click', () => {
            el.nextElementSibling.classList.toggle('is-active');
        })
    });
})