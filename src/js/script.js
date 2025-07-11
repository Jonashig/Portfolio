document.getElementById('theme-toggle').addEventListener('click', () => {
  const html = document.documentElement;
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  html.setAttribute('data-theme', newTheme);
  
  // Altera o ícone
  const toggleBtn = document.getElementById('theme-toggle');
  toggleBtn.textContent = newTheme === 'dark' ? '☀️' : '🌙';
});
