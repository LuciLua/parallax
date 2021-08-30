let stars = document.getElementById('stars')
let moon = document.getElementById('moon')
let montain = document.getElementById('montain')
let road = document.getElementById('road')
let text = document.getElementById('text')
let btn = document.getElementById('btn')
let header = document.querySelector('header')

let texton = document.querySelector('.texton')

window.addEventListener('scroll', function(){
    let value = this.window.scrollY;
    // stars.style.left  = value * 0.25 + 'px'
    stars.style.fontSize = `${ 40 + value * 0.25}px`


    moon.style.top  = value * 1 + 'px'
    montain.style.transform = `rotateZ(${315 + value * 0.25}deg)`
    
    montain.style.top= `${20 + value * 0.15}vh`

    road.style.top = value * 0 + 'px'
    text.style.marginRight = value * 2 + 'px'
    text.style.marginTop = value * 0.4 + 'px'
    btn.style.marginTop = value * 0.4 + 'px'
    // header.style.top = value * 0.7 + 'px'
    text.style.fontSize = 7.5 + 'vh' +  value * 0.2 + 'px'
    text.style.opacity = value * 0.25 + '%'

    console.log(value * 2)

    if(value * 2 > 1300){
        texton.style.animation = `fadein 0.3s linear`
        // texton.style.opacity = `${0 + (value * 0.25)}%`
        texton.style.opacity = 100+'%'
    } else {
        texton.style.animation = `fadeinSair 0.3s linear`
        texton.style.opacity = 0
    }
})

