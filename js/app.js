let hello = document.getElementById('hello')
let texton = document.querySelector('.texton')
let texto = document.querySelector('.texto')
let mark= document.querySelectorAll('.mark')
let retr = document.getElementById('retr')

window.addEventListener('scroll', function(){
    let value = this.window.scrollY; 


    retr.style.opacity = 0 + value * 0.05 + '%'

    hello.style.opacity = 100 - value * 0.25 + '%'
    hello.style.color = `rgb(0, 0, ${value * 0.15})`
    hello.style.background=`#ff0033${00 + value * 0.05}`
    
    texto.style.top = 50 + value * 0.04 + '%'
    texto.style.opacity = 100 - value * 0.4 + '%'
    
    if(value * 2 > 1000){
        texton.style.animation = `fadein 0.3s linear`
        texton.style.opacity = 100+'%'

        mark.forEach(e => {
        e.style.background="#fafa4588"; 
        e.style.animation='linear ease-in 5s' 
    })
    } 
    if (value * 2 > 2500 || value * 2 < 900 ){
        texton.style.animation = `fadeinSair 0.3s linear`
        texton.style.opacity = 0+'%'

    }
})
