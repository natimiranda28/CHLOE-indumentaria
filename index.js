// --- Animaciones de scroll con AOS ---
// Ya lo inicializamos en el HTML, pero aquí podrías personalizarlo si quieres:
AOS.init({
  duration: 1000, // duración de la animación en ms
  once: true      // que se ejecute solo una vez
});

// --- Botón "Ver Colección" que hace scroll suave a productos ---
document.querySelector(".hero button").addEventListener("click", () => {
  document.querySelector(".productos").scrollIntoView({ behavior: "smooth" });
});

// --- Validación simple del formulario de contacto ---
const form = document.querySelector(".contacto form");
form.addEventListener("submit", (e) => {
  e.preventDefault(); // evita que se recargue la página

  const nombre = form.querySelector("input[type='text']").value.trim();
  const correo = form.querySelector("input[type='email']").value.trim();
  const mensaje = form.querySelector("textarea").value.trim();

  if (!nombre || !correo || !mensaje) {
    alert("Por favor completa todos los campos.");
    return;
  }

  // Validación básica de correo
  const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regexCorreo.test(correo)) {
    alert("Por favor ingresa un correo válido.");
    return;
  }

  // Feedback al usuario
  alert("¡Gracias por tu mensaje, " + nombre + "! Nos pondremos en contacto pronto.");
  form.reset();
});

// --- Efecto en el header al hacer scroll ---
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.style.boxShadow = "0 4px 10px rgba(0,0,0,0.15)";
  } else {
    header.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1)";
  }
});
