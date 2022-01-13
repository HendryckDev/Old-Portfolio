// ================== MENU SHOW Y HIDDEN ==================
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

// =========== MENU SHOW ===========
// Validate if constant exists
if(navToggle) {
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

// =========== MENU HIDDEN ===========
// Validate if constant exists
if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}
// =========== REMOVE MENU MOBILE ===========
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// =========== SCROLL SECTIONS ACTIVE LINK ===========
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

// =========== CHANGE BACKGROUND HEADER ===========
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

// =========== DARK LIGHT THEME ===========
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

// =========== REVEAL ELEMENTS ON SCROLL ===========
window.addEventListener('scroll', reveal)

function reveal() {
    var reveals = document.querySelectorAll('.reveal')

    for(var i = 0; i < reveals.length; i++) {
        
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        // else {
        //     reveals[i].classList.remove('active')
        // }
    }
}

window.addEventListener('scroll', revealServices)

function revealServices() {
    var reveals = document.querySelectorAll('.reveal-services')

    for(var i = 0; i < reveals.length; i++) {
        
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        // else {
        //     reveals[i].classList.remove('active')
        // }
    }
}

window.addEventListener('scroll', revealServices2)

function revealServices2() {
    var reveals = document.querySelectorAll('.reveal-services2')

    for(var i = 0; i < reveals.length; i++) {
        
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        // else {
        //     reveals[i].classList.remove('active')
        // }
    }
}

window.addEventListener('scroll', revealServices3)

function revealServices3() {
    var reveals = document.querySelectorAll('.reveal-services3')

    for(var i = 0; i < reveals.length; i++) {
        
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        // else {
        //     reveals[i].classList.remove('active')
        // }
    }
}

window.addEventListener('scroll', revealPortfolio)

function revealPortfolio() {
    var reveals = document.querySelectorAll('.reveal-portfolio')

    for(var i = 0; i < reveals.length; i++) {
        
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        // else {
        //     reveals[i].classList.remove('active')
        // }
    }
}