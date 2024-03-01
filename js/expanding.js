panels = document.querySelectorALL('.panel')

console.log("HELLO")
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        panel.classList.add('active')
    })
})