const menuIcon = document.querySelector('.bx-menu')
const hamburgerMenu = document.querySelector('.hamburger-menu')

menuIcon.addEventListener('click',() => {
    hamburgerMenu.classList.toggle('menu-active')
})