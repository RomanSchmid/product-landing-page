/* Switch between hamburger button with hidden navbar and xmark button with displayed navbar */
function navMenuFunction() {
    let myLinks = document.getElementById("nav-menu");
    let hamBtn = document.getElementById("hamburger-btn");
    let xmarkBtn = document.getElementById("xmark-btn");
    if (myLinks.style.display === "block") {
        myLinks.style.display = "none";
        hamBtn.style.display = "block"
        xmarkBtn.style.display = "none";
    } else {
        myLinks.style.display = "block";
        hamBtn.style.display = "none";
        xmarkBtn.style.display = "block";
    }
}

/* Hide the navbar when scrolled down. Show the navbar when scrolled up */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.querySelector("header").style.top = "0";
    } else {
        document.querySelector("header").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
}