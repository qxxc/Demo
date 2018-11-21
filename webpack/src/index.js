import _ from 'lodash'
import './index.css'
// import Icon from './123.jpg'
import printMe from './print'


function component(){
    var element = document.createElement('p');
    element.innerHTML=_.join(['hello','word','jiaoyu','maxu'],'!!!');
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