console.log('Welcome to Hair salon');

// Code for navigation bar toggle on/off 

let sideBar = document.getElementById('sideNav');
let menuBtn = document.getElementById('menuBtn');
let menu = document.getElementById('menu');

sideBar.style.right = '-250px';

menuBtn.onclick = function(){
    if(sideBar.style.right == '-250px'){
        sideBar.style.right = '0';
        menu.setAttribute('src', 'images/close.png');
    }
    else{
        sideBar.style.right = '-250px';
        menu.setAttribute('src', 'images/menu.png');
    }
}

// Smooth scrolling 

var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
    
});
