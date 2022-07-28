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