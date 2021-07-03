let stars = document.getElementById('stars')
let moon = document.getElementById('moon')
let montain = document.getElementById('montain')
let road = document.getElementById('road')
let text = document.getElementById('text')
let btn = document.getElementById('btn')
let header = document.querySelector('header')

window.addEventListener('scroll', function(){
    let value = this.window.scrollY;
    stars.style.left  = value * 0.25 + 'px'
    moon.style.top  = value * 1 + 'px'
    montain.style.top = value * -0.05 + 'px'
    road.style.top = value * 0 + 'px'
    text.style.marginRight = value * 2 + 'px'
    text.style.marginTop = value * 0.4 + 'px'
    btn.style.marginTop = value * 0.4 + 'px'
    header.style.top = value * 0.7 + 'px'

})

