
(function(){
  const btn = document.getElementById('accentToggle');
  const html = document.documentElement;
  const current = localStorage.getItem('accentChoice');
  if(current){ html.setAttribute('data-accent', current); btn.textContent = current==='teal' ? 'Akcent: Turkus+Złoto' : 'Akcent: Pomarańcz'; }
  btn?.addEventListener('click', () => {
    const now = html.getAttribute('data-accent') === 'orange' ? 'teal' : 'orange';
    html.setAttribute('data-accent', now);
    localStorage.setItem('accentChoice', now);
    btn.textContent = now==='teal' ? 'Akcent: Turkus+Złoto' : 'Akcent: Pomarańcz';
  });
  const year = document.getElementById('year');
  if(year){ year.textContent = new Date().getFullYear(); }
})();
