import './style.css';
import {loadInitial,loadHome,loadMenu,loadContact} from './home';

loadInitial();

let tab = document.querySelectorAll('button');
tab.forEach(element => {
    element.addEventListener('click', switchTab);
});

function switchTab(){
    let pressed = this.innerText;
    let main = document.getElementById('main-content');
    removeAllChildNodes(main);
    if (pressed == 'Home'){
        //load home
        loadHome();
    } else if (pressed == 'Menu'){
        //load menu
        loadMenu();
    } else if (pressed == 'Contact'){
        //load Contacts
        loadContact();
    }

}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}