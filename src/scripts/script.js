let myHeader = document.querySelector("header");
let myLinks = document.getElementById("nav-menu-hidden");
let hamBtn = document.getElementById("hamburger-btn");
let xmarkBtn = document.getElementById("xmark-btn");

/* Switch between hamburger button with hidden navbar and xmark button with displayed navbar */
hamBtn.addEventListener("click", () => {
    myLinks.style.display = "block";
    hamBtn.style.display = "none";
    xmarkBtn.style.display = "block";
})

xmarkBtn.addEventListener("click", () => {
    myLinks.style.display = "none";
    hamBtn.style.display = "block"
    xmarkBtn.style.display = "none";
})

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
let visibleNavLinks = document.querySelectorAll("#nav-menu-visible .nav-link");
visibleNavLinks.forEach(element => {
    element.addEventListener("click", () => {
        setTimeout(() => {
            myHeader.style.top = "-100px";
        }, 50);   
    })
});

let hiddenNavLinks = document.querySelectorAll("#nav-menu-hidden .nav-link");
hiddenNavLinks.forEach(element => {
    element.addEventListener("click", () => {
        setTimeout(() => {
            myLinks.style.display = "none";
            hamBtn.style.display = "block"
            xmarkBtn.style.display = "none";
            myHeader.style.top = "-100px";
        }, 50);
    })
});