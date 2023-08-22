const navbarNav = document.querySelector('.navbar-nav');
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active')
}

// toggle hide hamburger if click page
const hideHamburger = document.querySelector('#hamburger-menu')

document.addEventListener("click", function(e){
    if(!hideHamburger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active')
    }
})
