const iconEl = document.getElementById('mode-icon');
const body = document.body

function toggleEl() {
    body.classList.toggle('light-mode')

    if (body.classList.contains('light-mode')) {
        iconEl.classList.remove('fa-sun')
        iconEl.classList.add('fa-moon')
    } else {
        iconEl.classList.remove('fa-moon')
        iconEl.classList.add('fa-sun')
    }
}