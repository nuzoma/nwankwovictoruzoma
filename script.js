const iconEl = document.getElementById("mode-icon")
const body = document.body

function toggleEl() {
    body.classList.toggle("dark-mode")

    if (body.classList.contains("dark-mode")) {
        iconEl.classList.remove("fa-moon")
        iconEl.classList.add("fa-sun")
    } else {
        iconEl.classList.remove("fa-sun")
        iconEl.classList.add("fa-moon")
    }
}