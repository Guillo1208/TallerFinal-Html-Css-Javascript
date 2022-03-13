
 
 const par =() =>{
    let estilodos = document.querySelectorAll('li:nth-child(2n)');
    let estilouno = document.querySelectorAll('li:nth-child(2n+1)');

    for(i=0;i<estilouno.length;i++){
        console.log('removido');
        estilouno[i].classList.remove('impares');
        estilouno[i].classList.add('colorpar');
    }
    
    
    for(i=0;i<estilodos.length;i++){
        console.log('removido');
        estilodos[i].classList.remove('pares');
        estilodos[i].classList.add('colorimpar');
    }

}

const impar =() =>{
    let estilodos = document.querySelectorAll('li:nth-child(2n)');
    let estilouno = document.querySelectorAll('li:nth-child(2n+1)');

    for(i=0;i<estilouno.length;i++){
        console.log('removido');
        estilouno[i].classList.remove('colorpar');
        estilouno[i].classList.add('impares');
    }
    
    
    for(i=0;i<estilodos.length;i++){
        console.log('removido');
        estilodos[i].classList.remove('colorimpar');
        estilodos[i].classList.add('pares');
    }

}