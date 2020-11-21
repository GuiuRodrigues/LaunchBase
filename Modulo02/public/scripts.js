const modalOverlay = document.querySelector('.modal_overlay')
const cards = document.querySelectorAll('.card')

for(let card of cards){
  const blogId = card.getAttribute("id");
  card.addEventListener("click",function(){
    modalOverlay.classList.add('active')
    modalOverlay.querySelector('iframe').src = `https://blog.rocketseat.com.br/${blogId}`
  })
}


document.querySelector(".close-modal").addEventListener('click',function(){
  modalOverlay.classList.remove('active')
  modalOverlay.querySelector('iframe').src =""
  modalOverlay.classList.remove("max")
})

document.querySelector(".maximize-modal").addEventListener('click',function(){
  modalOverlay.classList.toggle('max')
})


