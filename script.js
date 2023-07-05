const menuBtn = document.getElementById('menu-btn')
const navBar = document.getElementById('nav-bar')
const closeBtn = document.getElementById('close')
const image = document.getElementById('image')

menuBtn.addEventListener('click' , () => {navBar.classList.add('toggle')})
closeBtn.addEventListener('click' , () =>{navBar.classList.remove('toggle')})


window.addEventListener('resize', function() {

    var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  
    if (windowWidth <= 478) {
      image.src = '/images/image-hero-mobile.png'; // Yeni resim dosyasının src'si
      image.alt = 'hero image '
 
    }
  });