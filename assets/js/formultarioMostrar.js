var form_el = document.getElementById("miForm");
function mostrarOK(){
    var validacion=document.querySelector(".VerificarFormulario");
    var valFather=document.querySelector(".ocultar");
    /*  oculatos; elementos a mostrar*/
    var elForm=document.querySelector(".formulario");//elemento a ocultar
    valFather.style.display="block";
    validacion.style.display="block";
    elForm.style.display="none";
}
document.addEventListener("DOMContentLoaded", function() {
    //para poder hacer cambios con js
    // necesitamos ke  cargue el DOM
    form_el.addEventListener("submit", function(evt) {
        //Paro el submit para ke no recargue y 
        //aki cojemos los valores
        evt.preventDefault();
        function postForm(url, formSelector){
            const formData=new FormData(document.getElementById(formSelector))
            console.log(formData);
            return fetch(url, {
                method:'POST', 
                body: formData})
                    .then(response=>response.json())
                    .catch(error=>console.error(error));
        }
        var actionUrl="https://httpbin.org/post";
        var idFormulario="miForm";

        //console.log(postForm(actionUrl, idFormulario));     
        postForm(actionUrl, idFormulario).then(response=>{
                console.log(response.form.ciudad);
                mostrarOK();
            });
    });
});

