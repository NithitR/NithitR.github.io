
var initialise = false;
var i = 0;
var txt = `With joyful hearts, we invite you to celebrate the wedding of Wasunthara and Nithit. Join us as we embark on this beautiful journey together.` ; /* The text */
var speed = 50;

$(document).ready(function() {

    var img = document.querySelector('#hero-image')
    if (img.complete) {
        loaded();
    } else {
        img.addEventListener('load', loaded)
    }
    window.addEventListener("scroll", reveal);

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 1) {
            $('.arrow').addClass('fade');
        } else{
            $('.arrow').removeClass('fade');
        }
    })
});



function reveal() {
    var reveals = document.querySelectorAll(".reveal");
// console.log(reveals)

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}


function typeWriter() {
    if (i < txt.length) {
        initialise = true
        document.getElementById("text").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }else {
        // initialise = true;
    }
}

function loaded() {
    if(!initialise){
        typeWriter();
    }
}
// const gra = function(min, max) {
//     return Math.random() * (max - min) + min;
// }
// const init = function(){
//     let items = document.querySelectorAll('section');
//     for (let i = 0; i < items.length; i++){
//         items[i].style.background = randomColor({luminosity: 'light'});
//     }
//     cssScrollSnapPolyfill()
// }
// init();