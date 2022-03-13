
const fondo1 = (estilo2) => {
    let body = document.querySelector(`body`)
    body.classList.add(`${estilo2}-body`)
    let header = document.querySelector(`header`)
    header.classList.add(`${estilo2}-header`)
    let footer =document.querySelector(`footer`)
    footer.classList.add(`${estilo2}-footer`)
}

const fondo2 = (estilo3) => {
    let body = document.querySelector(`body`)
    body.classList.add(`${estilo3}-body`)
    let header = document.querySelector(`header`)
    header.classList.add(`${estilo3}-header`)
    let footer =document.querySelector(`footer`)
    footer.classList.add(`${estilo3}-footer`) 
}

const fondo3 = (estilo1) => {
    let body = document.querySelector(`body`)
    body.classList.add(`${estilo1}-body`)
    let header = document.querySelector(`header`)
    header.classList.add(`${estilo1}-header`)
    let footer =document.querySelector(`footer`)
    footer.classList.add(`${estilo1}-footer`)
}

const  mostrar=(id)=> {

    if (document.querySelector(`#${id}`).classList.contains("mostrar")) {
        document.querySelector(`#${id}`).classList.remove("mostrar")
    } else {
        document.querySelector(`#${id}`).classList.add("mostrar")
    }
}