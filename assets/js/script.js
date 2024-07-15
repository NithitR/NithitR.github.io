var initialise = false;

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

var i = 0;
var txt = `Love is in the air, and joy fills our hearts as we welcome cherished guests to witness and celebrate the union of two souls.
    Today, we write the first chapter of our forever.
    Welcome to the beginning of a beautiful journey together` ; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */
if(!initialise){
    typeWriter();
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

window.addEventListener("scroll", reveal);

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