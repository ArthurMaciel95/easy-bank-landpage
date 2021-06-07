const menuMobile = document.querySelector('.menu')
const buttonMenuMobile = document.querySelector('.menu-hamburger')
const modalMenu = document.querySelector('.modal-menu')
buttonMenuMobile.addEventListener('click',handlerButton)

function handlerButton (){

    
  menuMobile.classList.toggle('active')

  if(menuMobile.classList.contains('active')){
    modalMenu.classList.add('active')
} else{
    modalMenu.classList.remove('active')
}
  console.log('click')
}