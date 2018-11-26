import './index.css'
// import Icon from './123.jpg'
import printMe from './print'
import { cube } from './Math';


function component(){
    var element = document.createElement('p');
    element.innerHTML = [
        'Hello webpack!',
        '2 cubed is equal to ' + cube(2)
    ].join('\n\n');
    element.classList.add('hello')

    var btn =  document.createElement('button');

    // var img = new Image();
    // img.src = Icon
    // element.appendChild(img);
    btn.innerHTML = "click me";
    btn.onclick = printMe

    element.appendChild(btn)

    return element;
}

document.body.appendChild(component());

if(module.hot){
    module.hot.accept('./print.js', function () {
        console.log('Accepting the updated printMe module!');
        printMe();
    })
}