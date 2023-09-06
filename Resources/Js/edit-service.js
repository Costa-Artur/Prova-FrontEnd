const itens = document.querySelectorAll(".services-table-body__content");
const editServiceContainer = document.querySelector(".services__edit-service-container");
const editService = document.querySelector(".edit-service")
const cancelButton = document.querySelector("#cancel-button");

console.log(itens)

itens.forEach(item => {
    item.addEventListener('click', (event) => {
        console.log("teste")
        event.preventDefault();
        editServiceContainer.classList.remove("inativo")
        editServiceContainer.classList.add("ativo")
        editService.classList.remove("inativo")
        editService.classList.add("ativo")
    }   
    )
    }
)

cancelButton.addEventListener('click', () => {
    editService.classList.remove("ativo")
    editService.classList.add("inativo")
    editServiceContainer.classList.remove("ativo")
    editServiceContainer.classList.add("inativo")
})