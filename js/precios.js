const togglePrecio = document.getElementById('togglePrecios');
const precios = document.querySelectorAll('.precio');
const toggleText = document.getElementById('toggleText');

togglePrecio.addEventListener('change', () => {
  precios.forEach(precio => {
    const mensual = precio.getAttribute('data-mensual');
    const anual = precio.getAttribute('data-anual');
    precio.textContent = togglePrecio.checked ? `$${anual}/año` : `$${mensual}/mes`;
  });

  toggleText.textContent = togglePrecio.checked ? 'Anual' : 'Mensual';
});
