

const btnMenuHamburger = document.querySelector('.menu-hamburger')
const menuMobile = document.querySelector('.menu')
const modalBackgrond = document.querySelector('.modal-menu')
console.log(btnMenuHamburger, menuMobile)

btnMenuHamburger.addEventListener('click',()=>{
    
        
        menuMobile.classList.toggle('active')
        modalBackgrond.classList.toggle('active')
   
    
    

    console.log('click')
})