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

panels.addEventListener('scroll', fixNav)

function fixNav() {
   if (panels.scrollY > 283) {
    panels.classList.add('active')
   } else {
     panels.classList.remove('active')
   }
}