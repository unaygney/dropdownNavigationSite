const menuBtn = document.getElementById('menu-btn')
const navBar = document.getElementById('nav-bar')
const closeBtn = document.getElementById('close')

menuBtn.addEventListener('click' , () => {navBar.classList.add('toggle')})
closeBtn.addEventListener('click' , () =>{navBar.classList.remove('toggle')})