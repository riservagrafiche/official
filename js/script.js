let navbar = document.getElementsByClassName('nav-bar')[0]

let hamburgerMenu = document.getElementsByClassName('nav-bar__hamburger-menu')[0]

hamburgerMenu.addEventListener('click', () => {
    if (navbar.attributes[1].value) {
        navbar.attributes[1].value = false
    } else {
        navbar.attributes[1].value = true
    }
})

let navbarClose = document.getElementsByClassName('nav-bar__close')[0]

navbarClose.addEventListener('click', () => {
        navbar.attributes[1].value = true
})