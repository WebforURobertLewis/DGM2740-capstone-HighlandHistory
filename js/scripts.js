src="https://cdn.jsdelivr.net/npm/vanilla-lazyload@17.6.1/dist/lazyload.min.js"

const lazyness = document.getElementById(".lazy")
var lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy",
    threshold: 0
   });

$(document).ready(function(){
$('.sliders').slick({
    dots: true,
    arrows:false,
    infinite:true,
    speed: 1000,
    cssEase: 'ease-out',
    autoplay:true,
    autoplaySpeed:5000
});
});

    
function openMenu() {
    document.getElementById("navMenu").classList.toggle("classOpen");
    document.getElementById("burger").classList.toggle("classOpen");
}

const x = document.getElementById('burger');
x.onclick = openMenu
const container = document.getElementById("burger")
container.onclick = openMenu;