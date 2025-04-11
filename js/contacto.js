document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formulario-contacto");
    const spinner = document.getElementById("spinner");
    const modal = document.getElementById("modal");
    const cerrarModal = document.getElementById("cerrar-modal");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      // Validación nativa del navegador
      if (!form.checkValidity()) {
        form.reportValidity(); // Muestra los mensajes de error
        return;
      }
  
      // Mostrar el spinner
      spinner.classList.remove("oculto");
  
      // Simular envío (como si estuviera contactando con servidor)
      setTimeout(() => {
        spinner.classList.add("oculto");   // Oculta el spinner
        modal.classList.remove("oculto");  // Muestra el modal
        form.reset();                      // Limpia el formulario
      }, 2000);
    });
  
    cerrarModal.addEventListener("click", () => {
      modal.classList.add("oculto");
    });
  });
  