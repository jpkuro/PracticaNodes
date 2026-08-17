const formulario = document.getElementById('formulario');

formulario?.addEventListener('submit', function(evento){
    evento.preventDefault();

    const identificacion = document.getElementById('identificacion').value;
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const contacto = document.getElementById('contacto').value;
    const correo = document.getElementById('correo').value;

    console.log(nombre);
    console.log(apellido);
    console.log(identificacion);
    console.log(contacto);
    console.log(correo);
});