
import interact from 'https://cdn.interactjs.io/v1.10.11/interactjs/index.js';
interact('.item').draggable({
  listeners: {
    move(event){
        console.log(event.pageX, event.pageY) 
    }
} 
})