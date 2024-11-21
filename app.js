let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountain1 = document.getElementById('mounatains1');
let mountain2 = document.getElementById('mounatains2');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let tobba = document.querySelector('.tobba');



window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value + "px";
    moon.style.top = value * 4 + "px";
    mountain1.style.top = value * 2 + "px";
    mountain2.style.top = value * 1.5    + "px";
    river.style.top = value + "px";
    boat.style.top = value + "px";
    boat.style.left = value * 3 + "px";
}

