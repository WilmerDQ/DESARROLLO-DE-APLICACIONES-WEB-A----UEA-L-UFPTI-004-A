// Función para mostrar alerta
function mostrarAlerta() {
  alert("¡Hola! Esta es una alerta personalizada.");
}

// Validación del formulario
document.getElementById("contactForm").addEventListener("submit", function (event) {
  let nombre = document.getElementById("nombre");
  let correo = document.getElementById("correo");
  let mensaje = document.getElementById("mensaje");
  let valido = true;

  [nombre, correo, mensaje].forEach(campo => {
    if (!campo.value.trim()) {
      campo.classList.add("is-invalid");
      valido = false;
    } else {
      campo.classList.remove("is-invalid");
    }
  });

  if (!valido) {
    event.preventDefault(); // Evita envío si hay campos inválidos
  }
});
