/*****  Navigation Start  *****/
let searchForm = document.querySelector('.search-form');

document.querySelector("#search-btn").onclick = ()=>{
    searchForm.classList.toggle('active');
    menuBtn.classList.remove('active');
    loginForm.classList.remove('active');
    shoppingCart.classList.remove('active');
}

let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector("#cart-btn").onclick = ()=>{
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    menuBtn.classList.remove('active');
    loginForm.classList.remove('active');
}

let loginForm = document.querySelector('.login-form');

document.querySelector("#login-btn").onclick = ()=>{
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    menuBtn.classList.remove('active');
    shoppingCart.classList.remove('active');
}

let menuBtn = document.querySelector('.navbar');

document.querySelector("#menu-btn").onclick = ()=>{
    menuBtn.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    shoppingCart.classList.remove('active');
}

window.onscroll = ()=>{
    searchForm.classList.remove('active');
    menuBtn.classList.remove('active');
    loginForm.classList.remove('active');
    shoppingCart.classList.remove('active');
}

/*****  Navigation End  *****/

/*****  Slideshow Start  *****/
let curIndex = 0;

let autoSlide = ()=>{
    curIndex = curIndex < 1 ? ++curIndex : 0 ;
    // sliderradios[curIndex].checked = true;
    document.slide.src =`assets/img/title-${curIndex+1}.png`;
    setTimeout("autoSlide()",4000);
}

let onresize =()=>{
    autoSlide();
}
window.addEventListener("resize",onresize);
window.onload = onresize;
/*****  Slideshow End  *****/

/*****   slick Slide Start   *****/
$(document).ready(function () {
    $(".showing-slide").slick({
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 3
                }
            }
        ]
    })
})

/*****   slick Slide End   *****/