const menu = document.querySelector('.menu');
const nav = document.querySelector('#nav');
function closeMenu() { menu.setAttribute('aria-expanded', 'false'); nav.classList.remove('open'); }
menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', String(open)); nav.classList.toggle('open', open); });
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') { closeMenu(); menu.focus(); } });
document.querySelector('#copy').addEventListener('click', async () => { const status = document.querySelector('#status'); try { await navigator.clipboard.writeText('k23211546@gmail.com'); status.textContent = '信箱已複製，可以貼到你的郵件或通訊軟體。'; } catch { status.textContent = '請手動複製信箱：k23211546@gmail.com'; } });
