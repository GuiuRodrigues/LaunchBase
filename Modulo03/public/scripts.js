const modalOverlay = document.querySelector('.modal_overlay')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener("click", function() {
        const cardId = card.getAttribute("id");
        window.location.href = `/card?id=${cardId}`
    })
}