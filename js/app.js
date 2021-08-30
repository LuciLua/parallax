let hello = document.getElementById('hello')
let moon = document.getElementById('moon')
let montain = document.getElementById('montain')
let road = document.getElementById('road')
let text = document.getElementById('text')
let btn = document.getElementById('btn')
let header = document.querySelector('header')

let texton = document.querySelector('.texton')

window.addEventListener('scroll', function(){
    let value = this.window.scrollY;
    // hello.style.left  = value * 0.25 + 'px'
    hello.style.fontSize = `${ 40 + value * 0.05}px`
    hello.style.left = 30 + value * 0.05 + '%'
    hello.style.top = 35 + value * 0.05 + '%'


    moon.style.top  = value * 1 + 'px'
    // montain.style.transform = `rotateZ(${315 + value * 0.25}deg)`
    
    // montain.style.top= `${20 + value * 0.15}vh`

    road.style.top = value * 0 + 'px'
    // text.style.marginRight = value * 2 + 'px'
    // text.style.marginTop = value * 0.4 + 'px'
    // btn.style.marginTop = value * 0.4 + 'px'
    // header.style.top = value * 0.7 + 'px'
    // text.style.fontSize = 7.5 + 'vh' +  value * 0.2 + 'px'
    // text.style.opacity = value * 0.25 + '%'

    // console.log(value * 2)

    if(value * 2 > 1000){
        texton.style.animation = `fadein 0.3s linear`
        // texton.style.opacity = `${0 + (value * 0.25)}%`
        texton.style.opacity = 100+'%'
    } 
    if (value * 2 > 2500 || value * 2 < 1100 ){
        texton.style.animation = `fadeinSair 0.3s linear`
        texton.style.opacity = 0+'%'
    }
})


// droppp

import interact from 'https://cdn.interactjs.io/v1.10.11/interactjs/index.js'

interact('.item').draggable({
  listeners: {
    move (event) {
      console.log(event.pageX,
                  event.pageY)
    }
  }
})

// target elements with the "draggable" class


interact('.draggable')
  .draggable({
    // enable inertial throwing
    inertia: true,
    // keep the element within the area of it's parent
    modifiers: [
      interact.modifiers.restrictRect({
        restriction: 'parent',
        endOnly: true
      })
    ],
    // enable autoScroll
    autoScroll: true,

    listeners: {
      // call this function on every dragmove event
      move: dragMoveListener,

      // call this function on every dragend event
      end (event) {
        var textEl = event.target.querySelector('p')

        textEl && (textEl.textContent =
          'moved a distance of ' +
          (Math.sqrt(Math.pow(event.pageX - event.x0, 2) +
                     Math.pow(event.pageY - event.y0, 2) | 0))
            .toFixed(2) + 'px')
      }
    }
  })

function dragMoveListener (event) {
  var target = event.target
  // keep the dragged position in the data-x/data-y attributes
  var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
  var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

  // translate the element
  target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'

  // update the posiion attributes
  target.setAttribute('data-x', x)
  target.setAttribute('data-y', y)
}

// this function is used later in the resizing and gesture demos
window.dragMoveListener = dragMoveListener