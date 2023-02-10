
let acc = document.querySelectorAll('.accordion__item')

acc.forEach(elem => {
    let btn = elem.querySelector('button')
    btn.onclick = () => {
        if(elem.classList.contains('accordion__item_show')) {
            elem.classList.remove('accordion__item_show')
            return
        }
        acc.forEach(el => el.classList.remove('accordion__item_show'))
        
        elem.classList.toggle('accordion__item_show')
    }
})






