let hello = document.getElementById('hello')
let montain = document.getElementById('montain')
let texton = document.querySelector('.texton')
let texto = document.querySelector('.texto')
let mark= document.querySelectorAll('.mark')

window.addEventListener('scroll', function(){
    let value = this.window.scrollY; 

    hello.style.top = 35 + value * 0.02 + '%'
    // hello.style.opacity = 100 + value * -0.3 + '%'

    // montain.style.transform = `rotate(${180 + value * 0.5}deg)`
    // montain.style.left = `${15 + value * 0.01}vw`
    montain.style.top = `${36 + value * 0.02}%`
    montain.style.borderRight = `${0 + value * 0.8}px #fafa4588 solid ` 

    
    texto.style.top = 45 + value * 0.04 + '%'
    texto.style.opacity = 100 - value * 0.4 + '%'
    
    if(value * 2 > 1000){
        texton.style.animation = `fadein 0.3s linear`
        texton.style.opacity = 100+'%'

        mark.forEach(e => {e.style.background="#fafa4588"; e.style.animation='linear ease-in 5s' })
    } 
    if (value * 2 > 2500 || value * 2 < 900 ){
        texton.style.animation = `fadeinSair 0.3s linear`
        texton.style.opacity = 0+'%'

    }
})
