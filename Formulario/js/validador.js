function enviar(){

    var nombre = document.getElementById('nombre').value;
    var correo = document.getElementById('correo').value;
    var asunto = document.getElementById('asunto').value;
    var contenido = document.getElementById('contenido').value;

    if(nombre=="" || correo=="" || asunto=="" || contenido==""){
        swal('ALERTA','UNO O MAS CAMPOS ESTAN VACIOS','error')
    }else{
        console.log(nombre);
        console.log(correo);
        console.log(asunto);
        console.log(contenido);
    }

}

function limpiar(){
    document.getElementById('nombre').value="";
    document.getElementById('correo').value="";
    document.getElementById('asunto').value="";
    document.getElementById('contenido').value="";
}