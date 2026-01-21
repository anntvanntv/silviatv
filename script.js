//button scroll to Top

//quan l'usuari baixa 100 píxels, apareix el botó
let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {

    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }

}

//quan l'usuari fa click, puja a dalt de tot

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}







//cambio de color blanco/negro 
    let arts = document.querySelectorAll('.art'); 


let lastBackgroundColor = '#ffffffeb';
let lastTextColor = 'black';

for (let i = 0; i < arts.length; i++) {
    let art = arts[i]; 
    let link = art.lastElementChild; 

    if (i > 0 && art.offsetTop === arts[i - 1].offsetTop) {
      
        art.style.backgroundColor = arts[i - 1].style.backgroundColor;
        link.style.color = arts[i - 1].lastElementChild.style.color;

    } else {
        lastBackgroundColor = (lastBackgroundColor === '#ffffffeb') ? 'black' : '#ffffffeb';
        lastTextColor = (lastTextColor === 'black') ? '#ffffffeb' : 'black';

        art.style.backgroundColor = lastBackgroundColor;
        link.style.color = lastTextColor;
    }
}



//COOKIES
window.addEventListener("DOMContentLoaded", () => {
let cookieModal = document.querySelector(".cookie-consent-modal")
let cancelCookieBtn = document.querySelector(".cookies-btn.cancel")
let acceptCookieBtn = document.querySelector(".cookies-btn.accept")


cancelCookieBtn.addEventListener("click", function(){
    cookieModal.classList.remove("active")
})

acceptCookieBtn.addEventListener("click", function(){
    cookieModal.classList.remove("active")
    localStorage.setItem("cookieAccepted", "yes")
})

setTimeout(function (){
    let cookieAccepted = localStorage.getItem("cookieAccepted")
    if (cookieAccepted != "yes"){
        cookieModal.classList.add("active")
    }
}, 2000)  
});



