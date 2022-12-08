const nome = window.localStorage.getItem("nome")
const email = window.localStorage.getItem("email")
const quantityTickets = window.localStorage.getItem("quantityTickets")
const darkImg = document.getElementById("dark")

const nomeLabel = document.getElementById("nome")
const emailLabel = document.getElementById("email")
const ticketsLabel = document.getElementById("quantity-tickets")

nomeLabel.innerText = nome
emailLabel.innerText = email
ticketsLabel.innerText = quantityTickets

darkImg.addEventListener("click", () => {
    document.body.classList.toggle("dark")
})