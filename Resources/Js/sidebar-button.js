const buttons = document.querySelectorAll(".navbar__button")
const listas = document.querySelectorAll(".navbar__button-active")
const setas = document.querySelectorAll(".navbar__arrow")

buttons.forEach(button => {
    button.addEventListener('click', () => {
        listas.forEach(lista => {
            lista.classList.remove("active");
        })
        setas.forEach(seta => {
            seta.style.transform = "rotate(0deg)"
        })
        const lista = button.querySelector(".navbar__button-active")
        lista.classList.toggle("active")
        const seta = button.querySelector(".navbar__arrow")
        console.log(seta)
        seta.style.transform = "rotate(90deg)"
    })
})