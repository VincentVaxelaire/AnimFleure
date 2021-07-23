const grabArrosoir = document.querySelector('#arrosoir')

grabArrosoir.addEventListener('mouseenter', () => {
    window.addEventListener('mousemove', (event) => {
        const plastique = document.querySelector('#plastique').getBBox()

        grabArrosoir.children[0].attributes[0].value = `translate(${event.clientX - plastique.width} ${event.clientY - plastique.height})`
        grabArrosoir.classList.add('grabbed')
    })
})

const showBee = () => {
    setTimeout(function () {
        abeille = document.querySelector('#abeille').style.visibility = 'visible'
        abeille2 = document.querySelector('#abeille2').style.visibility = 'visible'
    }, 3000);
}

const showPousse = () => {
    setTimeout(function () {
        pousse = document.querySelector('#pousse')
        pousse.style.visibility = 'visible'
        if (pousse.style.visibility = 'visible') {
            showBee()
            grabArrosoir.style.visibility = 'hidden'
            gouttes = document.querySelector('#gouttes').style.visibility = 'hidden'
        }
    }, 3000);
}

const tick = () =>
{
    const pousse = document.querySelector('#pousse').getBoundingClientRect()
    const gouttes = document.querySelector('#gouttes').getBoundingClientRect()
    if (pousse.x > gouttes.x) {
        showPousse()
    }
    window.requestAnimationFrame(tick)
}
tick()