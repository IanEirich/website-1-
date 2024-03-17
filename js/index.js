panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

window.addEventListener('scroll', fixNav)

function fixNav() {
   if (window.scrollY > 100) {
    window.classList.add('active')
   } else {
     window.classList.remove('active')
   }
}