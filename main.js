const aInput = document.querySelector('#a')
const bInput = document.querySelector('#b')
const Btn = document.querySelector('#btn')
const resulte = document.querySelector('#resulte')

Btn.onclick = () => {
    let a = Number(aInput.value)
    let b = Number(bInput.value)

    let r = (b/a) * 100

    if( r < 40 ) {
        resulte.classList.add('red')
        resulte.classList.remove('orange')
        resulte.classList.remove('green')
    } else if ( r > 40 && r < 60 ) {
        resulte.classList.remove('red')
        resulte.classList.add('orange')
        resulte.classList.remove('green')
    } else if ( r > 60 && r > 80 ){
        resulte.classList.remove('red')
        resulte.classList.remove('orange')
        resulte.classList.add('green')
    }
}