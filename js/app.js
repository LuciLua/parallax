let hello = document.getElementById('hello')
let moon = document.getElementById('moon')
let montain = document.getElementById('montain')
let road = document.getElementById('road')
let text = document.getElementById('text')
let btn = document.getElementById('btn')
let header = document.querySelector('header')

let texton = document.querySelector('.texton')

let texto = document.querySelector('.texto')

window.addEventListener('scroll', function(){
    let value = this.window.scrollY; 


    hello.style.fontSize = `${ 40 + value * 0.1}px`
    hello.style.top = 35 + value * 0.02 + '%'
    hello.style.opacity = 100 + value * -0.3 + '%'

    montain.style.transform = `rotate(${225 + value * 0.5}deg)`

    texto.style.top = 45 + value * 0.04 + '%'
    
    if(value * 2 > 1000){
        texton.style.animation = `fadein 0.3s linear`
        texton.style.opacity = 100+'%'
    } 
    if (value * 2 > 2500 || value * 2 < 900 ){
        texton.style.animation = `fadeinSair 0.3s linear`
        texton.style.opacity = 0+'%'
    }
})
