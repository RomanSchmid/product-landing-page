function navMenuFunction() {
    let myLinks = document.getElementById("nav-menu");
    console.log(myLinks.style.display);
    if (myLinks.style.display === "block") {
        myLinks.style.display = "none";
    } else {
        myLinks.style.display = "block";
    }
}