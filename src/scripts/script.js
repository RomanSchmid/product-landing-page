let myHeader = document.querySelector("header");

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
let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        myHeader.style.top = "0";
        myHeader.style.boxShadow = "0 0 15px var(--light-green)";
    } else {
        myHeader.style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
    if (prevScrollpos === 0) {
        myHeader.style.boxShadow = "none";
    }
}

/* Hide the navbar after click on any navbar link */
let navLinks = document.querySelectorAll(".nav-link");
console.log(navLinks);
navLinks.forEach(element => {
    element.addEventListener("click", () => {
        setTimeout(() => {
            myHeader.style.top = "-100px";
            console.log("hello");
        }, 0)     
    })
});