  const toggle = document.getElementById('darkToggle');
  const body = document.body;

  if (localStorage.getItem('modoOscuro') === 'true') {
    body.classList.add('dark');
    toggle.checked = true;
  }

  toggle.addEventListener('change', () => {
    body.classList.toggle('dark');
    localStorage.setItem('modoOscuro', body.classList.contains('dark'));
  });