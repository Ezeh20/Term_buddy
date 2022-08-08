const navToggle=document.getElementById('nav-toggle')
const navBackdrop=document.getElementById('nav-backdrop')

navToggle.addEventListener('click', ()=>{
    navBackdrop.classList.toggle('show_nav')
})