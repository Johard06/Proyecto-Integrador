alert('Bienvenido a Digital Shop')

const IniciarSesion = () => {

    let correo = 'juan7@gmail.com';
    let contraseña = '12345'

    let correo1 = prompt ("Ingrese su correo");
    let contraseña1 = prompt ("Ingrese su contraseña");

    if (correo1 == correo && contraseña == contraseña) {
        alert("Bienvenido Juan7");
    }

    if (correo1 == '' || isNaN(correo1) || correo1 == null && contraseña1 == '' || isNaN(contraseña1) || contraseña1 == null) {
        alert('No tienes usuario? Registrate');
    } else {
        window.location = "../pages/registrate.html";
    }
}

