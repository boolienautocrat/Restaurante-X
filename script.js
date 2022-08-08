var html = document.querySelector("html")
var navItems = document.querySelector(".nav-links")
var hamBtn = document.querySelector(".hamBtn")
var navLinks = document.querySelector(".nav-links")
var navlink = document.querySelectorAll(".nav-link")

hamBtn.onclick = () => {
    if (hamBtn.classList.contains("hamBtn")) {
        hamBtn.classList.remove("hamBtn")
        hamBtn.classList.add("closeBtn")
        hamBtn.src = "./images/close-icon.svg"
        navLinks.style.display = "block"
        html.style.overflowY = "hidden"
    } else if (hamBtn.classList.contains("closeBtn")) {
        hamBtn.classList.remove("closeBtn")
        hamBtn.classList.add("hamBtn")
        hamBtn.src = "./images/hamburger-menu.svg"
        navLinks.style.display = "none"
        html.style.overflowY = "scroll"
    }
}

navlink.forEach((e) => {
    e.onclick = () => {
        if (hamBtn.classList.contains("closeBtn")) {
            hamBtn.classList.remove("closeBtn")
            hamBtn.classList.add("hamBtn")
            hamBtn.src = "./images/hamburger-menu.svg"
            navLinks.style.display = "none"
            html.style.overflowY = "scroll"
        }
    }
})

navlink[0].onclick = () => {
    location.reload();
}