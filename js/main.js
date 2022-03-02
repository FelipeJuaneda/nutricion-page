const navMenu = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.lista-nav');
    const listaNav = document.querySelector('.lista-na li')

    //Toggle
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-activo');
        //Animacion cruz
        burger.classList.toggle('toggle')
    });

};

navMenu();



$(document).ready(function () {

    $('#btnSend').click(function () {

        var errores = '';

        // Validado Nombre ==============================
        if ($('#names').val() == '') {
            errores += '<p>Escriba un nombre</p>';
            $('#names').css("border-bottom-color", "#F14B4B")
        } else {
            $('#names').css("border-bottom-color", "#d1d1d1")
        }

        // Validado Correo ==============================
        if ($('#email').val() == '') {
            errores += '<p>Ingrese un correo</p>';
            $('#email').css("border-bottom-color", "#F14B4B")
        } else {
            $('#email').css("border-bottom-color", "#d1d1d1")
        }

        // Validado Mensaje ==============================
        if ($('#mensaje').val() == '') {
            errores += '<p>Escriba un mensaje</p>';
            $('#mensaje').css("border-bottom-color", "#F14B4B")
        } else {
            $('#mensaje').css("border-bottom-color", "#d1d1d1")
        }

        // ENVIANDO MENSAJE ============================
        if (errores == '' == false) {
            var mensajeModal = '<div class="modal_wrap">' +
                '<div class="mensaje_modal">' +
                '<h3>Errores encontrados</h3>' +
                errores +
                '<span id="btnClose">Cerrar</span>' +
                '</div>' +
                '</div>'

            $('body').append(mensajeModal);
        }

        // CERRANDO MODAL ==============================
        $('#btnClose').click(function () {
            $('.modal_wrap').remove();
        });
    });

});




function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "felipejua9@gmail.com",
        Password: "250C9D02B73B098FB955A40C954B3F84FB6F",
        To: 'felipejua9@gmail.com',
        From: document.getElementById("email").value,
        Subject: "Necesito Nutricionista!",
        Body: "Nombre: " + document.getElementById("names").value + "<br> Email: " + document.getElementById("email").value + "<br> Telefono: " + document.getElementById("phone").value + "<br> Mensaje: " + document.getElementById("mensaje").value
    }).then(
        message => alert("Enviado correctamente!")
    );
}