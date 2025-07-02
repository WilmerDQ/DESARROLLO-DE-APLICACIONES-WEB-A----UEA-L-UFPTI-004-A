// Referencias a elementos del formulario
const formulario = document.getElementById('formulario');
const nombre = document.getElementById('nombre');
const correo = document.getElementById('correo');
const contrasena = document.getElementById('contrasena');
const confirmar = document.getElementById('confirmar');
const edad = document.getElementById('edad');
const enviar = document.getElementById('enviar');

// Función para mostrar error
function mostrarError(input, mensaje) {
    const error = input.nextElementSibling;
    error.textContent = mensaje;
    error.classList.add('visible');
    input.classList.remove('valido');
    input.classList.add('invalido');
}

// Función para mostrar éxito
function mostrarExito(input) {
    const error = input.nextElementSibling;
    error.textContent = '';
    error.classList.remove('visible');
    input.classList.remove('invalido');
    input.classList.add('valido');
}

// Validar nombre (mín 3 caracteres)
function validarNombre() {
    if (nombre.value.trim().length >= 3) {
        mostrarExito(nombre);
        return true;
    } else {
        mostrarError(nombre, 'El nombre debe tener al menos 3 caracteres');
        return false;
    }
}

// Validar correo con regex
function validarCorreo() {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regex.test(correo.value.trim())) {
        mostrarExito(correo);
        return true;
    } else {
        mostrarError(correo, 'Correo no válido');
        return false;
    }
}

// Validar contraseña (mín 8 caracteres, al menos un número y un carácter especial)
function validarContrasena() {
    const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/;
    if (regex.test(contrasena.value)) {
        mostrarExito(contrasena);
        return true;
    } else {
        mostrarError(contrasena, 'Mín 8 caracteres, con número y símbolo');
        return false;
    }
}

// Validar confirmación de contraseña
function validarConfirmar() {
    if (confirmar.value === contrasena.value && confirmar.value !== '') {
        mostrarExito(confirmar);
        return true;
    } else {
        mostrarError(confirmar, 'Las contraseñas no coinciden');
        return false;
    }
}

// Validar edad (>=18)
function validarEdad() {
    if (parseInt(edad.value) >= 18) {
        mostrarExito(edad);
        return true;
    } else {
        mostrarError(edad, 'Debes ser mayor o igual a 18 años');
        return false;
    }
}

// Validar todo el formulario para activar botón enviar
function validarFormulario() {
    const nombreValido = validarNombre();
    const correoValido = validarCorreo();
    const contrasenaValida = validarContrasena();
    const confirmarValido = validarConfirmar();
    const edadValida = validarEdad();

    enviar.disabled = !(nombreValido && correoValido && contrasenaValida && confirmarValido && edadValida);
}

// Eventos para validar en tiempo real
nombre.addEventListener('input', validarFormulario);
correo.addEventListener('input', validarFormulario);
contrasena.addEventListener('input', validarFormulario);
confirmar.addEventListener('input', validarFormulario);
edad.addEventListener('input', validarFormulario);

// Evento submit
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!enviar.disabled) {
        alert('Formulario enviado con éxito');
        formulario.reset();
        enviar.disabled = true;
        // También puedes remover clases de estilos
        const inputs = formulario.querySelectorAll('input');
        inputs.forEach(input => input.classList.remove('valido'));
    }
});
