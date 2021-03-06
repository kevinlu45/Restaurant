const loadInitial = () => {
    let content = document.getElementById('content');
    let title = document.createElement('h1');
    title.innerHTML = 'Bananas';
    content.appendChild(title);
    let banner = document.createElement('div');
    banner.id = 'banner';
    content.appendChild(banner);

    let tabs = document.createElement('div');
    tabs.id = 'tabs';
    let home = document.createElement('button');
    let menu = document.createElement('button');
    let contact = document.createElement('button');
    home.id = 'tab-button';
    menu.id = 'tab-button';
    contact.id = 'tab-button';
    home.innerText = 'Home';
    menu.innerText = 'Menu';
    contact.innerText = 'Contact';
    tabs.appendChild(home);
    tabs.appendChild(menu);
    tabs.appendChild(contact);

    content.appendChild(tabs);
    let main = document.createElement('div');
    main.id = 'main-content';
    let quote = document.createElement('div');
    let bb = document.createElement('div');
    quote.id = 'quote';
    bb.id = 'big-banana';
    quote.innerHTML = "The best bananas I've ever eaten!";
    main.appendChild(quote);
    main.appendChild(bb);
    content.appendChild(main);
    let footer = document.createElement('div');
    footer.id = 'footer';
    footer.innerHTML = 'Created by Kevin Lu';
    content.appendChild(footer);
};
const loadHome = () => {
    let main = document.getElementById('main-content');
    let quote = document.createElement('div');
    let bb = document.createElement('div'); 
    quote.id = 'quote';
    bb.id = 'big-banana';
    quote.innerHTML = "The best bananas I've ever eaten!";
    main.appendChild(quote);
    main.appendChild(bb);
};
const loadMenu = () => {
    let main = document.getElementById('main-content');
    let menu = document.createElement('div');
    let bb = document.createElement('div'); 
    menu.id = 'quote';
    bb.id = 'big-banana';
    let menuList = document.createElement('ul');
    let menuItem1 = document.createElement('li');
    menuItem1.innerText = 'Banana';
    menuList.appendChild(menuItem1);
    let menuItem2 = document.createElement('li');
    menuItem2.innerText = 'Banana and milk';
    menuList.appendChild(menuItem2);
    menu.appendChild(menuList);
    main.appendChild(menu);
    main.appendChild(bb);
};
const loadContact = () => {
    let main = document.getElementById('main-content');
    let contact = document.createElement('div');
    let bb = document.createElement('div'); 
    contact.id = 'quote';
    bb.id = 'big-banana';
    let email = document.createElement('div');
    email.innerText = 'bananaman68@gmail.com';
    contact.appendChild(email);
    main.appendChild(contact);
    main.appendChild(bb);
};
export {loadInitial,loadHome,loadMenu,loadContact};